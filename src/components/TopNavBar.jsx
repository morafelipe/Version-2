import Link from "next/link"; // 👈 Importar Link

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        
        {/* Logo/Nombre de la Tienda */}
        <div className="flex items-center space-x-3">
          <div className="bg-purple-900 w-6 h-6 rounded-full" />
          {/* Usamos Link para volver a la página de inicio (/) */}
          <Link href="/"> 
            <h1 className="font-semibold text-lg hover:text-gray-700 transition">E-Com</h1>
          </Link>
        </div>

        {/* Enlaces de Navegación Central */}
        <div className="hidden md:flex items-center space-x-10 text-sm text-gray-700">
          <a href="#">Hombres</a>
          <a href="#">Mujeres</a>
          <a href="#">Objetos</a>
          <a href="#">Varios</a>
        </div>

        {/* Botón de Carrito (Shopping Cart) */}
        <div className="flex items-center space-x-4">
          
          {/* 🎯 Enlace a la página del carrito (/cart) */}
          <Link href="/cart">
            <button 
              className="relative p-2 rounded-full hover:bg-gray-100 transition text-gray-700"
              aria-label="Carrito de compras"
            >
              {/* Icono de Carrito */}
              <span className="material-symbols-outlined">
                shopping_cart
              </span>
              
              {/* Opcional: Indicador de productos (simulado con un punto) */}
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </Link>

          {/* Botón de Perfil o Login (opcional, dejamos el original si no se usa) */}
          <button className="bg-purple-900 text-white px-4 py-1 rounded-md hover:bg-purple-500 transition">
            {/* Aquí puedes poner el icono de usuario o "Login" */}
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </div>
    </nav>
  );
}