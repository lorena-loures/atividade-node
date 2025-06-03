const express = require("express")//importando a biblioteca
const app = express();//instanciano a classe express

const moment = require("moment");//importando a biblioteca
//instanciando a classe data e recebeno a data hora atual
const time = new Date();
//formatando a data atual
const dataAtual = moment(time).format("YYYY-MM-DD HH:MM:SS")

//colocar o servidor para escutar na porta 3000
app.listen(3000, () => console.log("Servidor rodando na porta 3000")
)

//criando rota geral
app.get("/", (req, res) => {
    res.send("Data e hora do servidor: " + dataAtual)

})

app.get("/ola/:nome/:idade", (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;

    res.send(`Olá, ${nome}! Você tem ${idade} anos.`);

})
console.log("Data e hora do servidor: " + dataAtual);

app.get("/operacoes/:num1/:num2/:operacao", (req, res) => {
    const operacao = req.params.operacao;
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);

    let resultado;

    if (operacao === "soma") {
        resultado = num1 + num2;
    } else if (operacao === "produto") {
        resultado = num1 * num2;
    } else {
        return res.status(400).send("Operação inválida. Tente 'soma' ou 'produto'.");
    }

    res.send({ resultado });
});

app.get("/idade/:idade", (req, res) => {
    const idade = parseInt(req.params.idade);


       

    if (idade < 13) {
        res.send("Você é uma criança.");
    } else if (idade >= 13 && idade <= 17) {
        res.send("Você é um adolescente.");
    }

    else if (idade >= 18 && idade <= 59) {
        res.send("Você é um adulto.");
    }

    else if (idade > 59) {
        res.send("Você é um idoso.");

    }else{
        return res.status(400).send("Idade inválida.");
    }

});




