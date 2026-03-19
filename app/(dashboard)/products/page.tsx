export default function Home() {
  const products = [
    { id: "1", name: "Assinatura Premium" },
    { id: "2", name: "Pack de Templates" },
    { id: "3", name: "Consultoria Individual" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Produtos
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <a
            key={product.id}
            href={`/products/${product.id}`}
            className="bg-zinc-900 text-white p-6 rounded-2xl shadow-lg hover:scale-105 hover:bg-zinc-800 transition-all"
          >
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p className="text-sm text-zinc-400 mt-2">
              Clique para ver detalhes
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}