"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getAllQuestions } from "@/app/api/questions";
import { getQuizById } from "@/app/api/quizzes";
import "@/app/styles/css/quizresponder.css";
import "@/app/styles/globals.css";

export default function QuizResponder() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [quiz, setQuiz] = useState(null);
  const [perguntas, setPerguntas] = useState([]);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchQuizAndQuestions = async () => {
      try {
        const quizResponse = await getQuizById(id);
        setQuiz(quizResponse);

        const allQuestionsResponse = await getAllQuestions();
        const allQuestions = allQuestionsResponse?.data || [];

        const perguntasDoQuiz = allQuestions.filter((q) => q.quiz_id == id);
        setPerguntas(perguntasDoQuiz);
      } catch (error) {
        console.error("Erro ao carregar quiz ou questões:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizAndQuestions();
  }, [id]);

  const handleChange = (e, perguntaId) => {
    setRespostas({ ...respostas, [perguntaId]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultadoFinal = perguntas.map((pergunta) => ({
      id: pergunta.id,
      questao: pergunta.questao,
      respostaCorreta: pergunta.correto,
      respostaUsuario: respostas[pergunta.id] || "Nenhuma resposta",
      acertou: respostas[pergunta.id] === pergunta.correto,
    }));
    setResultado(resultadoFinal);
  };

  if (!id) return <h1>Quiz não encontrado!</h1>;

  return (
    <main className="quiz-container">
      <div className="quiz-responder-text">
        {loading ? <h1>Carregando...</h1> : <h1>{quiz?.questao}</h1>}
      </div>
      <div className="quiz-responder-questions">
        {!resultado ? (
          <form id="formulario-quizzes" onSubmit={handleSubmit}>
            {perguntas.length === 0 ? (
              <h3>Nenhuma pergunta encontrada para este quiz.</h3>
            ) : (
              perguntas.map((pergunta, index) => (
                <div key={pergunta.id} className="pergunta-card">
                  <h3>{pergunta.questao}</h3>
                  {pergunta.opcoes && typeof pergunta.opcoes === "object" ? (
                    Object.entries(pergunta.opcoes).map(([chave, valor]) => (
                      <label key={chave} className="opcao">
                        <input
                          type="radio"
                          name={`pergunta-${index}`}
                          value={chave}
                          onChange={(e) => handleChange(e, pergunta.id)}
                        />
                        {chave}: {valor}
                      </label>
                    ))
                  ) : (
                    <p>Opções não disponíveis</p>
                  )}
                </div>
              ))
            )}
            <button type="submit" id="verificar-respostas" className="submit-button">
              Responder
            </button>
          </form>
        ) : (
          <div className="resultado">
            <h2>Resultado:</h2>
            {resultado.map((res) => (
              <div key={res.id} className={`resposta-card ${res.acertou ? "correto" : "errado"}`}>
                <h3>{res.questao}</h3>
                <p><strong>Sua resposta:</strong> {res.respostaUsuario}</p>
                <p><strong>Resposta correta:</strong> {res.respostaCorreta}</p>
                <p className="status">{res.acertou ? "✅ Você acertou!" : "❌ Você errou!"}</p>
              </div>
            ))}
            <button onClick={() => setResultado(null)} className="submit-button">
              Refazer Quiz
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
