import "@/app/styles/css/about.css";

export default function About() {
    return (
        <main className="about-container">
            <h1 className="text-center">
                O que é o <span>WhaleQuiz</span>?
            </h1>
            <article>
                <h3 className="about-text">
                    O WhaleQuiz é uma plataforma interativa que permite aos usuários desafiar seus conhecimentos por meio de 
                    quizzes divertidos e envolventes. A proposta é oferecer uma experiência dinâmica e intuitiva, 
                    onde qualquer pessoa pode jogar, explorar diferentes temas e até mesmo criar seus próprios quizzes personalizados.
                </h3> <br /><br />
                <h3 className="about-text">
                    Nosso objetivo é proporcionar uma maneira leve e educativa de testar habilidades e aprender algo novo a cada rodada.
                    Com uma interface amigável e fácil de usar, o Whale Quiz é ideal tanto para quem busca entretenimento casual quanto 
                    para aqueles que desejam compartilhar conhecimento de forma criativa.
                </h3> <br /><br />
                <h3 className="about-text">
                    Junte-se à comunidade, explore quizzes de diversos temas e compartilhe seus próprios desafios com o mundo. Afinal,
                    aprender pode ser tão divertido quanto jogar!
                </h3>
            </article>
        </main>
    );
}
