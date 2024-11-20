// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const categories = [
  { id: 'cardio', name: 'Cardio' },
  { id: 'fuerza', name: 'Fuerza' },
  { id: 'flexibilidad', name: 'Flexibilidad' },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((cat) => (
              <li key={cat.id} className="nav-item">
                <Link className="nav-link" to={`/category/${cat.id}`}>
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;


