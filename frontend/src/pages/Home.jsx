import { useState, useEffect } from "react";
import InputForm from "../components/InputForm";
import ideas from "../data/projectIdeas.json";

const Home = () => {
    const [filteredIdeas, setFilteredIdeas] = useState([]);
    const [savedIdeas, setSavedIdeas] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("savedIdeas")) || [];
        setSavedIdeas(stored);
    }, []);

    const handleFormSubmit = async (formData) => {
        try {
            const response = await fetch("http://localhost:5000/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Something went wrong");

            const data = await response.json();
            setFilteredIdeas(data);
        } catch (error) {
            console.error("Error fetching ideas:", error);
        }
    };

    const handleSaveIdea = (idea) => {
        const isAlreadySaved = savedIdeas.some(
            (saved) => saved.title === idea.title
        );

        let updated;
        if (isAlreadySaved) {
            updated = savedIdeas.filter((saved) => saved.title !== idea.title);
        } else {
            updated = [...savedIdeas, idea];
        }

        setSavedIdeas(updated);
        localStorage.setItem("savedIdeas", JSON.stringify(updated));
    };

    return (
        <div>
            <InputForm onSubmit={handleFormSubmit} />

            <h2 className="text-2xl font-bold mt-8 mb-4">Recommended Projects</h2>
            {filteredIdeas.length > 0 ? (
                <ul className="space-y-4">
                    {filteredIdeas.map((idea, index) => (
                        <li key={index} className="bg-gray-50 p-4 rounded-lg border">
                            <h3 className="text-xl font-semibold">{idea.title}</h3>
                            <p className="text-gray-700 mt-1">{idea.description}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Category: <span className="font-medium">{idea.category}</span> | Level:{" "}
                                <span className="font-medium">{idea.level}</span>
                            </p>
                            <button
                                onClick={() => handleSaveIdea(idea)}
                                className={`mt-3 px-3 py-1 text-sm rounded-md ${savedIdeas.some((saved) => saved.title === idea.title)
                                    ? "bg-red-400 hover:bg-red-500"
                                    : "bg-yellow-400 hover:bg-yellow-500"
                                    }`}
                            >
                                {savedIdeas.some((saved) => saved.title === idea.title)
                                    ? "❌ Remove"
                                    : "⭐ Save"}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No ideas yet. Try entering something above!</p>
            )}

            <h2 className="text-2xl font-bold mt-10 mb-4">⭐ Saved Projects</h2>
            {savedIdeas.length > 0 ? (
                <ul className="space-y-4">
                    {savedIdeas.map((idea, index) => (
                        <li key={index} className="bg-green-50 p-4 rounded-lg border border-green-300">
                            <h3 className="text-lg font-semibold">{idea.title}</h3>
                            <p className="text-gray-700">{idea.description}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No saved projects yet.</p>
            )}
        </div>
    );
};

export default Home;
