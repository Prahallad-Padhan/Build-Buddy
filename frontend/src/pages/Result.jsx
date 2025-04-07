const Results = ({ data, filters }) => {
    const filtered = data.filter(
        (idea) =>
            idea.category.toLowerCase().includes(filters.interest.toLowerCase()) &&
            idea.level === filters.level
    );

    return (
        <div>
            {filtered.map((idea, index) => (
                <ProjectCard key={index} idea={idea} />
            ))}
        </div>
    );
};
