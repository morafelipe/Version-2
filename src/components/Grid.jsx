// src/components/Grid.jsx
import Link from "next/link";
import { products } from "@/data/Products";

export default function ProductGrid({ list }) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-4 mt-10 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {list.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <Link href={`/product?id=${p.id}`}>
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-auto object-cover rounded-md"
              />

              <div className="mt-3">
                <h3 className="text-sm text-gray-700">{p.title}</h3>
                <p className="text-gray-500 text-xs">{p.color}</p>
                <p className="text-black mt-1 font-medium">${p.price}.00</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
