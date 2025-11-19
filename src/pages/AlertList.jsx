import { useEffect, useState } from "react";
import api from "../api/axios";
import alertsLocal from "../data/alerts.json";


export default function AlertList() {
const [alerts, setAlerts] = useState([]);

const load = async () => {
    try {
      const res = await api.get("/alerts");
      setAlerts(res.data);
    } catch (error) {
      console.warn("La API falló, cargando JSON local", error);

      try {
        const localData = alertsLocal;

        setAlerts(localData);
      } catch (jsonError) {
        console.error("Error cargando alerts.json:", jsonError);
        setAlerts([]); 
      }
    }
};


useEffect(() => { load(); }, []);

    return (
        <div>
            <a href="/dashboard/alerts/new" className="bg-emerald-600 text-white px-4 py-2 rounded">Nueva Alerta</a>
            <ul className="mt-6 space-y-3">
                { alerts.map((a) => (
                    <li key={a.id} className="p-4 bg-white rounded shadow border">
                    <div className="font-bold text-emerald-800">{a.title}</div>
                    <div className="text-sm text-gray-700">Lat: {a.lat} | Lng: {a.lng}</div>
                    <a href={`/dashboard/alerts/${a.id}`} className="text-emerald-700 underline mt-2 inline-block">Editar</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}