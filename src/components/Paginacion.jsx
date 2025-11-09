export default function Pagination({ page, totalPages, onNext, onPrev, onSetPage }) {
  // Generamos una lista de páginas del 1 al total
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-10 select-none">
      {/* Botón Anterior */}
      <button
        onClick={onPrev}
        disabled={page === 1}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition 
          ${page === 1 ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"}`}
      >
        <span className="material-symbols-outlined text-gray-500">chevron_left</span>
      </button>

      {/* Números de página */}
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onSetPage(num)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition 
            ${page === num
              ? "bg-black text-white font-semibold"
              : "hover:bg-gray-100 text-gray-700"
            }`}
        >
          {num}
        </button>
      ))}

      {/* Botón Siguiente */}
      <button
        onClick={onNext}
        disabled={page === totalPages}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition 
          ${page === totalPages ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"}`}
      >
        <span className="material-symbols-outlined text-gray-500">chevron_right</span>
      </button>
    </div>
  );
}

