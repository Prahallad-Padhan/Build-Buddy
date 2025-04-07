import "./index.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">💡 Project Idea Recommender</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
