interface ProductDetailsProps {
    params: {id: string};
}

export default function ProductDetails({ params }: ProductDetailsProps) {
    return (
        <div>
            <h2>Detalhes do Produto</h2>
            <div>
                <p>Exibindo detalhes do produto com ID.</p>
                <code>{params.id}</code>
            </div>
        </div>
    );
}
