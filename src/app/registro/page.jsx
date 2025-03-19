"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/api/auth";
import "@/app/styles/css/registro.css";
import "@/app/styles/globals.css"; 

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); 

    if (!isValidEmail(email)) {
      setError("Por favor, insira um email válido.");
      return;
    }

    try {
      const response = await registerUser({ username, email, senha });

      if (!response.ok) {
        let data;
        try {
          data = await response.json();
        } catch (jsonError) {
          data = { message: "Erro inesperado no servidor." };
        }

        if (response.status === 409) {
          throw new Error(data.message || "Este email já está cadastrado. Tente outro.");
        }

        throw new Error(data.message || "Erro ao registrar usuário.");
      }

      router.push("/login");
    } catch (err) {
      setError(err.message);
      console.error("Erro ao registrar usuário:", err.message);
    }
  };

  return (
    <main>
      <section>
        <article className="article">
          <h1 id="registrar-nome-quiz">WhaleQuiz</h1>
          <form className="form" onSubmit={handleRegister}>
            <div className="input">
              <label htmlFor="username">Usuário</label>
              <input 
                type="text" 
                name="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Digite seu nome de usuário" 
                required 
              />
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                name="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Digite seu email" 
                required 
              />
            </div>
            <div className="input">
              <label htmlFor="senha">Senha</label>
              <input 
                type="password" 
                name="senha" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
                placeholder="Digite sua senha" 
                required 
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Registrar</button>
          </form>
        </article>
      </section>
    </main>
  );
}
