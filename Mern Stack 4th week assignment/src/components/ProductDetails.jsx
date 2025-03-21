import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Product A", price: "$20", description: "High-quality product A", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$35", description: "Premium product B", image: "https://via.placeholder.com/150" },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div className="p-6 text-center">
      <img src={product.image} alt={product.name} className="w-40 mx-auto" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-gray-700">{product.price}</p>
    </div>
  );
}
