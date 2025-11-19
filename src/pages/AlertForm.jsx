import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";


export default function AlertForm() {
const { id } = useParams();
const [form, setForm] = useState({ title: "", lat: "", lng: "" });


const load = async () => {
if (!id) return;
    const res = await api.get(`/alerts/${id}`);
    setForm(res.data);
};


useEffect(() => { load(); }, []);


const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) await api.put(`/alerts/${id}`, form);
    else await api.post(`/alerts`, form);
    window.location.href = "/dashboard/alerts";
};


return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded p-6 w-full max-w-lg">
        <h2 className="text-xl font-bold text-emerald-800 mb-4">{id ? "Editar Alerta" : "Nueva Alerta"}</h2>
        <input type="text" placeholder="Título" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full border p-3 rounded mb-4" />
        <input type="text" placeholder="Latitud" value={form.lat} onChange={(e) => setForm({ ...form, lat: e.target.value })} className="w-full border p-3 rounded mb-4" />
        <input type="text" placeholder="Longitud" value={form.lng} onChange={(e) => setForm({ ...form, lng: e.target.value })} className="w-full border p-3 rounded mb-4" />
        <button className="bg-emerald-600 text-white px-4 py-2 rounded">Guardar</button>
    </form>
    );
}