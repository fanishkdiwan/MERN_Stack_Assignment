import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$35", image: "https://via.placeholder.com/150" },
];

export default function ProductList() {
  return (
    <div className="p-6 grid grid-cols-2 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.price}</p>
          <Link to={`/product/${product.id}`} className="block mt-2 text-blue-500">View Details</Link>
        </div>
      ))}
    </div>
  );
}
