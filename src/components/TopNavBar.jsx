export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center space-x-3">
          <div className="bg-purple-900 w-6 h-6 rounded-full" />
          <h1 className="font-semibold text-lg">E-Com</h1>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm text-gray-700">
          <a href="#">Hombres</a>
          <a href="#">Mujeres</a>
          <a href="#">Objetos</a>
          <a href="#">Varios</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-purple-900 text-white px-4 py-1 rounded-md hover:bg-purple-500 transition">
            
          </button>
        </div>
      </div>
    </nav>
  );
}
