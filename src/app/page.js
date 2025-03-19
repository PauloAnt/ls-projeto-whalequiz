"use client"; 

import Link from "next/link";
import ThemeCard from "@/app/components/ThemeCard";
import QuizCard from "@/app/components/QuizCard";
import "@/app/styles/css/home.css";
import "@/app/styles/globals.css"; 
import { getAllQuizzes } from "@/app/api/quizzes";
import { useEffect, useState } from "react";

export default function Home() {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllQuizzes()
      .then(response => {
        console.log("Quizzes recebidos:", response);
        setQuizzes(response.data);
      })
      .catch(error => console.error("Erro ao buscar quizzes:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1 id="inicio" className="text-center">Bem-vindo ao WhaleQuiz!</h1>

      {/* Seção de Quizzes Populares */}
      <section id="populares">
        <h1>Quizzes em <span>ALTA 🚀</span></h1>
        {loading ? (
          <p>Carregando quizzes...</p>
        ) : (
          <div className="pop-cards" id="quizzes-populares">
            {quizzes.length > 0 ? (
              quizzes.slice(0, 4).map((quiz) => (
                <QuizCard key={quiz.id} id={quiz.id} nome={quiz.nome} descricao={quiz.descricao} />
              ))
            ) : (
              <p>Nenhum quiz disponível no momento.</p>
            )}
          </div>
        )}
        
      </section>

      {/* Criar Quiz */}
      <section id="criar">
        <div id="botao_criar">
          <Link href="/quizCriar" className="botao link">Crie você mesmo!</Link>
        </div>
      </section>

      {/* Explorar Temas */}
      <section id="explorar">
        <h1>Conheça os temas disponíveis</h1>
        <div id="box-temas">
          <ThemeCard title="Cultura Pop" topics={["Filmes clássicos e atuais", "Animes e mangás", "Super-heróis e vilões"]} />
          <ThemeCard title="Música" topics={["Bandas", "Cantores", "Gêneros musicais"]} />
          <ThemeCard title="Conhecimentos Gerais" topics={["Matérias escolares", "Tecnologia", "Jogos"]} />
          <ThemeCard title="Temas Educativos" topics={["Idiomas", "Lógica e raciocínio", "Concursos"]} />
        </div>
      </section>

      {/* Quizzes da Galera */}
      <section className="quizzes-gerais">
        <h1 className="text-center">Quizzes da galera</h1>
        {loading ? (
          <p>Carregando quizzes...</p>
        ) : (
          <div id="all-quizzes" className="pop-cards flex flex-wrap justify-center items-center">
            {quizzes.length > 0 ? (
              quizzes.map((quiz) => (
                <QuizCard key={quiz.id} id={quiz.id} nome={quiz.nome} descricao={quiz.descricao} />
              ))
            ) : (
              <p>Nenhum quiz disponível no momento.</p>
            )}
          </div>
        )}
        <div id="ver-mais">
          <Link href="/explorar" className="botao">Explorar mais</Link>
        </div>
      </section>
    </main>
  );
}
