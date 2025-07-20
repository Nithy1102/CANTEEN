import { useState } from 'react';

export default function StudentLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShake(false);
    setSuccess(false);

    if (password === "admin123") {
      setSuccess(true);
      setTimeout(() => {
        alert("Login Successful!");
      }, 800);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 to-yellow-100 flex items-center justify-center">
      <div className={`bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-[400px] border border-white/20 transition-all duration-300 ${shake ? 'animate-shake' : ''} ${success ? 'bg-green-100 border-green-500' : ''}`}>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">STUDENT LOGIN 🔐</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700">Email / Register No</label>
          <input type="text" placeholder="Enter email or reg no" className="w-full p-2 mt-1 mb-4 border rounded-md" required />

          <label className="block text-gray-700">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 mb-4 border rounded-md"
              required
            />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-3 top-3 cursor-pointer text-xl"
            >
              👁
            </span>
          </div>

          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md font-bold shadow-lg transition-all">
            LOGIN
          </button>

          <div className="text-center mt-3 text-sm text-blue-600">
            New User? <a href="#" className="underline">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}
