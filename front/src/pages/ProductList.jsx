// src/pages/ProductList.jsx
import { Link } from "react-router-dom";

const productos = [
  {
    id: 1,
    nombre: "Sudadera Negra",
    precio: 39.99,
    imagen: "https://via.placeholder.com/200x150?text=Sudadera"
  },
  {
    id: 2,
    nombre: "Zapatillas Blancas",
    precio: 59.99,
    imagen: "https://via.placeholder.com/200x150?text=Zapatillas"
  },
  {
    id: 3,
    nombre: "Pantalón Jogger",
    precio: 29.99,
    imagen: "https://via.placeholder.com/200x150?text=Pantalon"
  }
];

export default function ProductList() {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Productos</h2>
      <div className="row">
        {productos.map(producto => (
          <div className="col-md-4 mb-4" key={producto.id}>
            <div className="card h-100">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">Precio: €{producto.precio.toFixed(2)}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-primary btn-sm">
                    Añadir al carrito
                  </button>
                  <Link to={`/producto/${producto.id}`} className="btn btn-outline-secondary btn-sm">
                    Detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

