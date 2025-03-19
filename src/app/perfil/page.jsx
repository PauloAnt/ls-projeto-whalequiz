"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "@/app/styles/css/perfil.css";
import "@/app/styles/globals.css"; 

export default function Perfil() {
  const [usuario, setUsuario] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    } else {
      setUsuario("Usuário Exemplo"); 
    }
  }, []);

  return (
    <main>
      <h1>Perfil</h1>
      {usuario ? (
        <>
          <p>Bem-vindo, {usuario}!</p>
          <button onClick={() => { localStorage.removeItem("token"); router.push("/login"); }}>Sair</button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </main>
  );
}
