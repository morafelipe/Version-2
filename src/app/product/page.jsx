"use client";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/Products";
import { useCart } from "@/context/CartContext";

export default function ProductDetail() {
  const searchParams = useSearchParams();
  const id = Number(searchParams.get("id"));   // ← OBTENER EL ID
  const product = products.find((p) => p.id === id);  // ← BUSCAR POR ID

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Producto no encontrado.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-sm">

        <div className="flex flex-col items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-md rounded-xl object-cover shadow-md"
          />
          <div className="flex gap-3 mt-4">
            <img src={product.image} alt="" className="w-16 h-16 rounded-md border" />
            <img src={product.image} alt="" className="w-16 h-16 rounded-md border" />
            <img src={product.image} alt="" className="w-16 h-16 rounded-md border" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">{product.title}</h2>
          <p className="text-gray-500 mb-2">{product.color}</p>
          <p className="text-3xl font-bold text-gray-900 mb-4">${product.price}.00</p>

          <p
            className={`font-medium mb-4 ${
              product.available ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.available ? "Disponible" : "Agotado"}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex gap-4 mb-8">
            <button
              className={`px-6 py-2 rounded-md text-white transition ${
                product.available ? "bg-black hover:bg-gray-800" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!product.available}
            >
              Buy Now
            </button>

            <button
              onClick={() => addToCart(product)}
              className={`px-6 py-2 rounded-md transition ${
                product.available
                  ? "border border-gray-400 hover:bg-gray-100"
                  : "border border-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!product.available}
            >
              Add to Cart
            </button>
          </div>

          <p className="text-sm text-gray-400">Entrega estimada: 3 - 5 días hábiles</p>
          <p className="text-sm text-gray-400">Costo de envío: $10</p>
        </div>
      </div>
    </main>
  );
}
