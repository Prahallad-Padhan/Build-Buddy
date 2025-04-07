import { useState } from "react";

const InputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({ interest: "", level: "" });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="interest"
                placeholder="Interest (e.g. AI, Web)"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.interest}
                onChange={handleChange}
            />
            <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg"
            >
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full"
            >
                Get Project Ideas
            </button>
        </form>
    );
};

export default InputForm;
