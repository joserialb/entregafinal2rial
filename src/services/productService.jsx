// src/services/productService.js

// Simula un retraso asíncrono
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const products = [
  // Cardio
  { id: '1', name: 'Bicicleta estática', price: 299.99, category: 'cardio', image: '/images/bicicleta estatica.webp', description: 'Bicicleta estática de bajo impacto para entrenamiento cardiovascular.' },
  { id: '2', name: 'Cinta de caminar', price: 499.99, category: 'cardio', image: '/images/Cinta de caminar.webp', description: 'Cinta de caminar con inclinación ajustable para simular caminatas al aire libre.' },
  { id: '3', name: 'Elíptica', price: 399.99, category: 'cardio', image: '/images/eliptica.webp', description: 'Máquina elíptica para entrenamiento de cuerpo completo sin impacto.' },
  { id: '4', name: 'Remo', price: 349.99, category: 'cardio', image: 'url_imagen', description: 'Máquina de remo para fortalecer brazos, piernas y espalda.' },
  { id: '5', name: 'Escalador', price: 279.99, category: 'cardio', image: 'url_imagen', description: 'Escalador para simular subir escaleras y mejorar la resistencia.' },
  { id: '6', name: 'Bicicleta reclinada', price: 329.99, category: 'cardio', image: 'url_imagen', description: 'Bicicleta reclinada para mayor comodidad durante el ejercicio.' },

  // Fuerza
  { id: '7', name: 'Mancuernas ajustables', price: 149.99, category: 'fuerza', image: 'url_imagen', description: 'Set de mancuernas ajustables para entrenamiento de fuerza variable.' },
  { id: '8', name: 'Banco de pesas', price: 199.99, category: 'fuerza', image: 'url_imagen', description: 'Banco ajustable para ejercicios de pesas y entrenamiento de fuerza.' },
  { id: '9', name: 'Máquina de cable', price: 599.99, category: 'fuerza', image: 'url_imagen', description: 'Máquina de cable multifuncional para diversos ejercicios de fuerza.' },
  { id: '10', name: 'Bandas de resistencia', price: 29.99, category: 'fuerza', image: 'url_imagen', description: 'Set de bandas de resistencia para entrenamiento de fuerza y flexibilidad.' },
  { id: '11', name: 'Kettlebells', price: 79.99, category: 'fuerza', image: 'url_imagen', description: 'Set de kettlebells para entrenamiento funcional y de fuerza.' },
  { id: '12', name: 'TRX', price: 129.99, category: 'fuerza', image: 'url_imagen', description: 'Sistema de entrenamiento en suspensión TRX para ejercicios con el peso corporal.' },

  // Flexibilidad
  { id: '13', name: 'Esterilla de yoga', price: 39.99, category: 'flexibilidad', image: 'url_imagen', description: 'Esterilla antideslizante para yoga y ejercicios de estiramiento.' },
  { id: '14', name: 'Rodillo de espuma', price: 24.99, category: 'flexibilidad', image: 'url_imagen', description: 'Rodillo de espuma para masaje y liberación miofascial.' },
  { id: '15', name: 'Pelota de pilates', price: 19.99, category: 'flexibilidad', image: 'url_imagen', description: 'Pelota de pilates para ejercicios de estabilidad y flexibilidad.' },
  { id: '16', name: 'Bloques de yoga', price: 14.99, category: 'flexibilidad', image: 'url_imagen', description: 'Set de bloques de yoga para ayudar en posturas y estiramientos.' },
  { id: '17', name: 'Correa de yoga', price: 9.99, category: 'flexibilidad', image: 'url_imagen', description: 'Correa de yoga para mejorar la flexibilidad y alcance en estiramientos.' },
  { id: '18', name: 'Set de estiramientos', price: 34.99, category: 'flexibilidad', image: 'url_imagen', description: 'Set completo de herramientas para mejorar la flexibilidad y movilidad.' },
];

// Función para obtener todos los productos
export const getProducts = async () => {
  await delay(500);
  return products;
};

// Función para obtener productos por categoría
export const getProductsByCategory = async (categoryId) => {
  await delay(500);
  return products.filter(product => product.category === categoryId);
};

// Función para obtener un producto por ID
export const getProductById = async (id) => {
  await delay(500);
  const product = products.find(product => product.id === id);
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  return product;
};
