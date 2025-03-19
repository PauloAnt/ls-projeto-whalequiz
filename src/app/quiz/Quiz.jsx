"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllQuizzes } from "@/app/api/quizzes";
import "@/app/styles/css/quiz.css";
import "@/app/styles/globals.css"; 

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllQuizzes()
      .then(response => {
        setQuizzes(response.data);
      })
      .catch(error => console.error("Erro ao buscar quizzes:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <div className="quiz-text">
        <h1>Meus Quizzes</h1>
        <Link href="/quizCriar">
          <button className="botao">Criar</button>
        </Link>
      </div>

      <div className="quiz-exists">
        {loading ? (
          <p>Carregando quizzes...</p>
        ) : (
          quizzes.length > 0 ? (
            quizzes.map((quiz) => (
              <Link key={quiz.id} href={`/quizResponder/${quiz.id}`} className="quiz-card">
                <h2>{quiz.nome}</h2>
                <p>{quiz.descricao}</p>
              </Link>
            ))
          ) : (
            <p>Nenhum quiz encontrado.</p>
          )
        )}
      </div>
    </main>
  );
}
