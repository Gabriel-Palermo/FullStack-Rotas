"use client";

import { useRouter, useParams } from "next/navigation";

export default function ProductDetail() {
  const router = useRouter();
  const params = useParams();

  return (
    <div className="p-8 flex justify-center items-center min-h-screen bg-zinc-950 text-white">
      
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        
        <h1 className="text-2xl font-bold mb-4">
          Detalhes do Produto
        </h1>

        <p className="text-lg mb-6">
          Produto ID: <span className="font-semibold text-green-400">{params.id}</span>
        </p>

        <button
          onClick={() => router.back()}
          className="w-full bg-green-500 hover:bg-green-600 transition-all py-2 rounded-lg font-semibold"
        >
          Voltar
        </button>
      </div>

    </div>
  );
}