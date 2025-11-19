import { useState } from "react";
import api from "../api/axios";


export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/login", { email, password });
    window.location.href = "/dashboard";
};


return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50">
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl p-8 w-96">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">TFM - Limpieza Urbana</h3>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border p-3 rounded mb-4"
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border p-3 rounded mb-4"
            />
            <button className="w-full bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 transition">Iniciar Sesión</button>
            <a href="/register" className="text-emerald-700 block text-center mt-4">Crear cuenta</a>
        </form>
    </div>
    );
}