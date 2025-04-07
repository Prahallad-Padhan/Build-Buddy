def generate_ideas(interest, level):
    ideas = []

    if interest.lower() == "web":
        if level == "beginner":
            ideas.append({
                "title": "Portfolio Website",
                "description": "Build a personal portfolio using HTML, CSS, and JS."
            })
        elif level == "intermediate":
            ideas.append({
                "title": "Blog App",
                "description": "Create a full-stack blog using MERN stack."
            })

    elif interest.lower() == "ai":
        if level == "beginner":
            ideas.append({
                "title": "Spam Classifier",
                "description": "Train a simple ML model to classify spam emails."
            })
        elif level == "intermediate":
            ideas.append({
                "title": "Chatbot",
                "description": "Build a chatbot using NLP libraries like spaCy or GPT."
            })

    # Add more interest/level rules

    return ideas
