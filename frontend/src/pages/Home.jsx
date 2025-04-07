import { useState } from "react";
import InputForm from "../components/InputForm";
import ideas from "../data/projectIdeas.json";

const Home = () => {
    const [filteredIdeas, setFilteredIdeas] = useState([]);

    const handleFormSubmit = (formData) => {
        const results = ideas.filter(
            (idea) =>
                idea.category.toLowerCase().includes(formData.interest.toLowerCase()) &&
                idea.level === formData.level
        );
        setFilteredIdeas(results);
    };

    return (
        <div>
            <InputForm onSubmit={handleFormSubmit} />
            <h2>Recommended Projects</h2>
            {filteredIdeas.length > 0 ? (
                <ul>
                    {filteredIdeas.map((idea, index) => (
                        <li key={index}>
                            <h3>{idea.title}</h3>
                            <p>{idea.description}</p>
                            <small>Category: {idea.category} | Level: {idea.level}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No ideas yet. Try entering something above!</p>
            )}
        </div>
    );
};

export default Home;
