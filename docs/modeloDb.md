CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE quizzes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    criador_email VARCHAR(255) NOT NULL,
    tema VARCHAR(255),
    descricao TEXT,
    CONSTRAINT fk_criador_email FOREIGN KEY (criador_email) REFERENCES users(email) ON DELETE CASCADE 
);

CREATE TABLE questoes (
    id SERIAL PRIMARY KEY,
    quiz_id INT NOT NULL,
    questao TEXT NOT NULL,
    opcoes JSONB NOT NULL, 
    correto TEXT NOT NULL,
    CONSTRAINT fk_quiz FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);