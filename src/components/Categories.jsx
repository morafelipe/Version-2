export default function Categories({ categories, active, onChange }) {
  return (
    <div className="flex items-center justify-center gap-6 py-4 flex-wrap">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1 rounded-full text-sm transition 
            ${active === cat ? "bg-black text-white" : "text-gray-600 hover:text-black"}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
