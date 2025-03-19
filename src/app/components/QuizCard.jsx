"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function QuizCard({ nome, descricao, id }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleClick = () => {
    if (!isAuthenticated) {
      router.push("/login"); 
    } else {
      router.push(`/quizResponder?id=${id}`); 
    }
  };

  return (
    <div className="card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <img className="card-img" src="CardImage.png" alt="Imagem do quiz" />
      <dl>
        <dt className="card-name font-bold font-xl">{nome}</dt>
        <br />
        <dd>{descricao}</dd>
      </dl>
    </div>
  );
}
