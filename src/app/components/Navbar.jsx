"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []);

  return (
    <nav>
      <ul className="conteiner1 -mb-96">
        <li className="logo">
          <Link href="/" className="link">
            <img className="whale-logo" src="/logo.jpg" width="50" height="50" alt="WhaleQuiz" />
          </Link>
        </li>
        {isAuthenticated && (
          <li className="criar">
            <Link href="quizCriar" className="link">
              <i className="fa-solid fa-plus"></i> Criar
            </Link>
          </li>
        )}
        <li className="pesquisar">
          <input type="text" name="pesquisar-quiz" id="pesquisar-quiz" placeholder="Pesquisar Quiz" />
        </li>
        {!isAuthenticated ? (
          <>
            <li className="entrar">
              <Link href="login" className="link">Entrar</Link>
            </li>
            <li className="registrar">
              <Link href="registro" className="link">Registrar</Link>
            </li>
          </>
        ) : (
          <li className="entrar">
            <Link href="perfil" className="link">
              <i className="fa-solid fa-user"></i> Perfil
            </Link>
          </li>
        )}
        <li className="registrar">
          <Link href="about" className="link">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
