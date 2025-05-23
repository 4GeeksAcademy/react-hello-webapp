// src/components/ProductCard.jsx
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function ProductCard({ producto }) {
  const { dispatch } = useGlobalReducer();

  return (
    <div className="bg-white rounded shadow p-4">
      <img src={producto.imagen} alt={producto.nombre} className="w-full h-48 object-cover rounded" />
      <h3 className="font-bold text-lg mt-2">{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p className="font-semibold">{producto.precio.toFixed(2)} €</p>

      <div className="flex gap-2 mt-2">
        <button
          className="bg-green-500 text-white px-2 py-1 rounded"
          onClick={() =>
            dispatch({ type: "agregar_al_carrito", payload: producto })
          }
        >
          Agregar al carrito
        </button>

        <button
          className="bg-red-500 text-white px-2 py-1 rounded"
          onClick={() =>
            dispatch({ type: "eliminar_del_carrito", payload: producto.id })
          }
        >
          Eliminar del carrito
        </button>
      </div>
    </div>
  );
}
