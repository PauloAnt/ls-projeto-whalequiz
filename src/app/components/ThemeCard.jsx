export default function ThemeCard({ title, topics }) {
    return (
        <div className="temas">
            <a className="botao-tema">
                <h3 className="esconder">{title}</h3>
                <br />
                <h3 className="visible">{title}</h3>
            </a>
            <ul className="tema-menu">
                {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                ))}
            </ul>
        </div>
    );
}
