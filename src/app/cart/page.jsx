"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

const TAX_RATE = 0.15;

export default function ShoppingCartPage() {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const taxes = subtotal * TAX_RATE;
  const total = subtotal + taxes;

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-10 px-6">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Tu Carrito de Compras
          </h2>
          <p className="text-gray-600 mb-6">
            Tu carrito está vacío. ¡Explora nuestros productos y agrega algo!
          </p>
          <Link
            href="/"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
          >
            Volver a la tienda
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-10 px-4 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Tu Carrito de Compras
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((product) => (
              <ProductItem
                key={product.title}
                product={product}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </div>

          <OrderSummary subtotal={subtotal} taxes={taxes} total={total} />
        </div>
      </div>
    </main>
  );
}

function ProductItem({ product, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center bg-white p-4 rounded-xl shadow border">
      <img
        src={product.image}
        alt={product.title}
        className="w-20 h-20 object-cover rounded-md mb-4 md:mb-0 mr-4"
      />

      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.title}
        </h3>
        <p className="text-sm text-gray-500">{product.color}</p>
        <p className="text-lg font-bold text-gray-900 mt-1">
          ${product.price}.00
        </p>
      </div>

      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <div className="flex items-center border rounded">
          <button
            onClick={() => onUpdateQuantity(product.title, -1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            -
          </button>
          <span className="px-4 py-1 border-x">{product.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.title, 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <p className="font-bold text-gray-900 hidden sm:block">
          ${(product.price * product.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => onRemove(product.title)}
          className="text-gray-400 hover:text-red-500"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

function OrderSummary({ subtotal, taxes, total }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border sticky top-4">
      <h3 className="text-xl font-bold mb-4">Resumen del Pedido</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Impuestos (15%):</span>
          <span>${taxes.toFixed(2)}</span>
        </div>

        <div className="border-t pt-4" />

        <div className="flex justify-between text-xl font-bold text-gray-900">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
        Proceder al Pago
      </button>

      <p className="text-xs text-gray-400 mt-2 text-center">
        Envío e impuestos se calculan en el checkout.
      </p>
    </div>
  );
}
