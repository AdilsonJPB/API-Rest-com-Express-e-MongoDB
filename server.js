// Importa o módulo 'app' do arquivo './src/app.js'
import app from "./src/app.js";

// Define a porta em que o servidor irá escutar
const PORT = 3001;

// Faz o servidor escutar na porta definida e executa uma função de callback quando estiver pronto
app.listen(PORT, () => {
    // Exibe uma mensagem indicando que o servidor está escutando
    console.log("Servido escutando");
})
