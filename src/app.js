// Importa o framework Express
import express from "express";

// Inicializa o aplicativo Express
const app = express();

// Adiciona o middleware para permitir o uso do formato JSON
app.use(express.json());

// Array de livros (dados simulados)
const livros = [
    {
        id: 1,
        titulo: "Senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }
];

// Função para buscar um livro pelo ID
function buscaLivro(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

// Rota principal, retorna uma mensagem simples
app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

// Rota para obter todos os livros
app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

// Rota para adicionar um novo livro
app.post("/livros", (req, res) => {
    livros.push(req.body); // Adiciona o livro enviado no corpo da requisição ao array de livros
    res.status(201).send("Livro cadastrado com sucesso");
});

// Rota para obter um livro pelo ID
app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id); // Obtém o índice do livro com o ID especificado
    res.status(200).json(livros[index]); // Retorna o livro encontrado como resposta
});

// Exporta o aplicativo Express para uso em outros arquivos
export default app;
