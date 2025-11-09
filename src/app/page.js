"use client";

import { useState } from "react";
import Navbar from "@/components/TopNavBar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ProductGrid from "@/components/Grid";
import Pagination from "@/components/Paginacion";
import { products } from "@/data/Products";

export default function Home() {
  // Obtener categorías únicas
  const categories = [...new Set(products.map((p) => p.category))];

  // Estado de categoría activa
  const [active, setActive] = useState("All");

  // Filtrado de productos
  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active);

  // ---- Paginación ----
  const itemsPerPage = 8;
  const [page, setPage] = useState(1);

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  const paginatedProducts = filtered.slice(start, end);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  function nextPage() {
    if (page < totalPages) setPage(page + 1);
  }

  function previousPage() {
    if (page > 1) setPage(page - 1);
  }

  // Resetear página cuando cambien categorías
  function handleCategoryChange(cat) {
    setActive(cat);
    setPage(1);
  }

  return (
    <main className="min-h-screen bg-gray-50">


      <Navbar />

      <Hero />

      <Categories
        categories={categories}
        active={active}
        onChange={handleCategoryChange}
      />

      <ProductGrid list={paginatedProducts} />
      
      <Pagination
        page={page}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={previousPage}
        onSetPage={setPage}
      />

    </main>
  );
}
