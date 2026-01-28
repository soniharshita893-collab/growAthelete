/* Career Navigation */
.career-nav {
    background: white;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
}

.assessment-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 400px;
    margin: 0 auto;
}

.assessment-form label {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.assessment-form input {
    padding: 0.5rem;
    margin-top: 0.5rem;
}

.assessment-form button {
    padding: 0.5rem;
    background-color: #003366;
    color: white;
    border: none;
    cursor: pointer;
}

.assessment-form button:hover {
    background-color: #0056b3;
}

/* Update badge classes for dynamic levels */
.badge.beginner { background-color: #FFC107; color: black; }
.badge.intermediate { background-color: #17A2B8; color: white; }
.badge.elite { background-color: #28A745; color: white; }