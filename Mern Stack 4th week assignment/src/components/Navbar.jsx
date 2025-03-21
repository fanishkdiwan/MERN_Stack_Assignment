import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Product Store</h1>
      <div>
        <Link to="/" className="px-4">Home</Link>
      </div>
    </nav>
  );
}
