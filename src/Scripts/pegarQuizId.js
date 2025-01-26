export default function pegarQuizId(id){
    const quizzes = localStorage.getItem('quizzes');

    const quiz = quizzes.find(q => q.id == id);

    if (quiz){
        return quiz;
    }

    else return null;
}