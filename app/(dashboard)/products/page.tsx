import Link from "next/link";

export default function ProductsPage() {
    const products = [
        { id: "1", name: "Assinatura Premium" },
        { id: "2", name: "Pack de Templates" },
        { id: "3", name: "Consultoria Individual" },
    ];

    return (
        <div>
            <h1>Meus Produtos</h1>
            <ul>
                {products.map((product) =>(
                    <li key={product.id}>
                        <Link href={`./products/${product.id}`}>
                            {product.name}
                        </Link>
                        <span>Ver detalhes</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}