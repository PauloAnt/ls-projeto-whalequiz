"use client";

import { useState } from "react";
import { createQuiz } from "@/app/api/quizzes";
import "@/app/styles/css/quizCriar.css";
import "@/app/styles/globals.css"; 

export default function CriarQuiz() {
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleCreateQuiz = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) return alert("Faça login primeiro!");

    try {
      await createQuiz({ nome, tema, descricao }, token);
      alert("Quiz criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar quiz:", error);
    }
  };

  return (
    <main>
      <h1>Criar Quiz</h1>
      <form onSubmit={handleCreateQuiz}>
        <input type="text" placeholder="Nome do Quiz" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="text" placeholder="Tema" value={tema} onChange={(e) => setTema(e.target.value)} />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        <button type="submit">Criar</button>
      </form>
    </main>
  );
}
