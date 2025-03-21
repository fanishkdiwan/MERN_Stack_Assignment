import { useState } from "react";

// 1. TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        className="border p-2 w-full"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}

// 2. Form Component
function Form() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted: ", input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        className="border p-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
      />
      <button type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Submit</button>
    </form>
  );
}

// 3. UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-500">{email}</p>
    </div>
  );
}

// 4. Button Component
function CustomButton() {
  return (
    <button
      className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      onClick={() => console.log("Button clicked!")}
    >
      Click Me
    </button>
  );
}

// 5. LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        type="email"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        className="border p-2 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
    </form>
  );
}

// Main App Component
export default function App() {
  return (
    <div className="p-6 space-y-4 max-w-md mx-auto">
      <TextUpdater />
      <Form />
      <UserCard name="John Doe" email="john@example.com" />
      <CustomButton />
      <LoginForm />
    </div>
  );
}
