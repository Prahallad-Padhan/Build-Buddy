import { useState } from "react";

const InputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        interest: "",
        level: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="interest"
                placeholder="Interest (e.g. AI, Web)"
                value={formData.interest}
                onChange={handleChange}
            />
            <select name="level" value={formData.level} onChange={handleChange}>
                <option value="">Select Level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
            </select>
            <button type="submit">Get Project Ideas</button>
        </form>
    );
};

export default InputForm;
