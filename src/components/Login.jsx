// Login.js
export default function Login() {
  return (
    <form className="flex flex-col w-full max-w-sm">
      <h2 className="mb-4 text-2xl font-bold">Login</h2>
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
      <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
        Login
      </button>
    </form>
  );
}
