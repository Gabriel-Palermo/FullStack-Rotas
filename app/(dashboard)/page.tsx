export default function DashboardPage() {
    return (
        <div className="p-8 space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">
                    Bem-vindo ao SaaS Core
                </h1>
                <p className="text-zinc-400">
                    Este é o seu painel de controle
                </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-6">

                {/* Card Vendas */}
                <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 hover:border-green-500 transition">
                    <span className="text-zinc-400 text-sm">Vendas</span>
                    <h2 className="text-2xl font-bold text-green-400 mt-2">
                        R$ 12.500,00
                    </h2>
                </div>

                {/* Card Clientes */}
                <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 hover:border-blue-500 transition">
                    <span className="text-zinc-400 text-sm">Clientes</span>
                    <h2 className="text-2xl font-bold text-blue-400 mt-2">
                        320
                    </h2>
                </div>

                {/* Card Pedidos */}
                <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg border border-zinc-800 hover:border-purple-500 transition">
                    <span className="text-zinc-400 text-sm">Pedidos</span>
                    <h2 className="text-2xl font-bold text-purple-400 mt-2">
                        87
                    </h2>
                </div>

            </div>

        </div>
    );
}