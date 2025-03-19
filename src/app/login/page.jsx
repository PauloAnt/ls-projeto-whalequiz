"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/api/auth";
import "@/app/styles/css/login.css";
import "@/app/styles/globals.css"; 

export default function Login() {
  const [email, setemail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, senha });
      console.log(response)
      localStorage.setItem("token", response.token);
      router.push("/perfil"); 
    } catch (err) {
      setError("Usuário ou senha incorretos.", err.mensage);
      console.log(err)
    }
  };

  
  return (
    <main>
      <section>
        <article className="a1">
          <h1 id="registrar-nome-quiz">Bem-vindo</h1>
          <form className="form" onSubmit={handleLogin}>
            <div className="input">
              <label htmlFor="email">Usuário</label>
              <input type="text" name="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Digite seu nome de usuário" />
            </div>
            <div className="input">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite sua senha" />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit">Entrar</button>
          </form>
        </article>
        <article className="a2">
          <p>Novo no WhaleQuiz? <a href="/register">Criar conta</a></p>
        </article>
      </section>
    </main>
  );
}
