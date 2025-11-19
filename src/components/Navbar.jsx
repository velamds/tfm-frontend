export default function Navbar() {
    return (
        <nav className="bg-[#065F46] text-white px-6 py-4 mb-4 shadow-md flex justify-between items-center">
            <a href="/dashboard" className="font-bold text-2xl tracking-wide">TFM - Limpieza Urbana</a>
            <div className="space-x-6 text-lg">
                <a href="/alerts" className="hover:text-[#34D399] transition">Alertas</a>
                <a href="/" className="hover:text-[#34D399] transition">Salir</a>
            </div>
        </nav>
    );
}