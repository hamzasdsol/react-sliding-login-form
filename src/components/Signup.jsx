// Signup.js
export default function Signup() {
  return (
    <form className="flex flex-col w-full max-w-sm">
      <h2 className="mb-4 text-2xl font-bold">Signup</h2>
      <input
        className="mb-2 p-2 border rounded"
        type="text"
        placeholder="Name"
      />
      <input
        className="mb-2 p-2 border rounded"
        type="email"
        placeholder="Email"
      />
      <input
        className="mb-4 p-2 border rounded"
        type="password"
        placeholder="Password"
      />
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Signup
      </button>
    </form>
  );
}
