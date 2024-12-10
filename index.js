import express from 'express'

const app = express();

app.use(express.urlencoded({ extended: true }));

const porta = 3000
const host = "0.0.0.0";

var listaAlunos = [];

function cadastroAlunoView(req, res) {
    res.send(`
            <html>
                <head>
                    <title>Cadastro de Alunos</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                </head>
                <body>
                    <div class="container text-center">
                        <h1 class="mb-5">Cadastro de Alunos</h1>
                        <form method="POST" action="/cadastrarAluno"
                        class="border p-3 row g-3" novalidate>
                            <div class="col-md-4">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome"  placeholder="Digite seu nome" required>
                             </div>
                             <div class="col-md-4">
                                <label for="sobrenome" class="form-label">Sobrenome</label>
                                <input type="text" class="form-control" id="sobrenome" name="sobrenome" required>
    
                             </div>
                             <div class="col-md-4">
                                <label for="email" class="form-label">email</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="email" name="email" required>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="cidade" class="form-label">Cidade</label>
                                <input type="text" class="form-control" id="cidade" name="cidade" required>
                            </div>
                            <div class="col-md-3">
                                <label for="estado" class="form-label">UF</label>
                                <select class="form-select" id="estado" name="estado" required>
                                    <option selected value="SP">São Paulo</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                            <div class="col-md-3">
                                <label for="cep" class="form-label">Cep:</label>
                                <input type="text" class="form-control" id="cep" name="cep" required>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                            </form>
                    </div>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            </html>
    `);
}

function menuView(req, res) {
    res.send(`
            <html>
            <head>
                <title>Cadastro de Alunos</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            </head>
            <body>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">MENU</a>
                                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div class="navbar-nav">
                                        <a class="nav-link active" aria-current="page" href="/cadastrarAluno">Cadastrar Aluno</a>
                                    </div>
                                </div>
                            </div>
                </nav>`);
}

function cadastrarAluno(req, resp) {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const email = req.body.email;
    const cidade = req.body.cidade;
    const estado = req.body.estado;
    const cep = req.body.cep;


    if (nome && sobrenome && email && cidade && estado && cep) {

        const aluno = { nome, sobrenome, email, cidade, estado, cep }

        listaAlunos.push(aluno);

        resp.write(`
        <html>
          <head>
            <title></title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta charset="utf-8">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
          </head>
          <body>
          <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Sobreome</th>
                    <th scope="col">Email</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Cep</th>
                </tr>
            </thead>
            <tbody>`);

        for (var i = 0; i < listaAlunos.length; i++) {
            resp.write(`<tr>
                                <td>${listaAlunos[i].nome}</td>
                                <td>${listaAlunos[i].sobrenome}</td>
                                <td>${listaAlunos[i].email}</td>
                                <td>${listaAlunos[i].cidade}</td>
                                <td>${listaAlunos[i].estado}</td>
                                <td>${listaAlunos[i].cep}</td>
                           </tr>`);
        }

        resp.write(`</tbody>
          </table>
          <a class="btn btn-primary" href="/cadastrarAluno">Continuar Cadastrando</a>
          <a class="btn btn-secondary" href="/">Voltar para o Menu</a>
          </body>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </html>`);
    }

    else
    {

        const estados = [
            { sigla: "SP", nomeEstado: "São Paulo" },
            { sigla: "AC", nomeEstado: "Acre" },
            { sigla: "AL", nomeEstado: "Alagoas" },
            { sigla: "AP", nomeEstado: "Amapá" },
            { sigla: "AM", nomeEstado: "Amazonas" },
            { sigla: "BA", nomeEstado: "Bahia" },
            { sigla: "CE", nomeEstado: "Ceará" },
            { sigla: "DF", nomeEstado: "Distrito Federal" },
            { sigla: "ES", nomeEstado: "Espírito Santo" },
            { sigla: "GO", nomeEstado: "Goiás" },
            { sigla: "MA", nomeEstado: "Maranhão" },
            { sigla: "MT", nomeEstado: "Mato Grosso" },
            { sigla: "MS", nomeEstado: "Mato Grosso do Sul" },
            { sigla: "MG", nomeEstado: "Minas Gerais" },
            { sigla: "PA", nomeEstado: "Pará" },
            { sigla: "PB", nomeEstado: "Paraíba" },
            { sigla: "PR", nomeEstado: "Paraná" },
            { sigla: "PE", nomeEstado: "Pernambuco" },
            { sigla: "PI", nomeEstado: "Piauí" },
            { sigla: "RJ", nomeEstado: "Rio de Janeiro" },
            { sigla: "RN", nomeEstado: "Rio Grande do Norte" },
            { sigla: "RS", nomeEstado: "Rio Grande do Sul" },
            { sigla: "RO", nomeEstado: "Rondônia" },
            { sigla: "RR", nomeEstado: "Roraima" },
            { sigla: "SC", nomeEstado: "Santa Catarina" },
            { sigla: "SE", nomeEstado: "Sergipe" },
            { sigla: "TO", nomeEstado: "Tocantins" }
        ];
        

        resp.write(`<html>
                <head>
                    <title>Cadastro de Alunos</title>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                    <meta charset="utf-8">
                </head>
                <body>
                    <div class="container text-center">
                        <h1 class="mb-5">Cadastro de Alunos</h1>
                        <form method="POST" action="/cadastrarAluno"
                        class="border p-3 row g-3" novalidate>
                            <div class="col-md-4">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="nome" name="nome"  placeholder="Digite seu nome" value="${nome}">
        `);
        if(!nome){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Por favor, você deve informar o nome do aluno</p></span>
                </div>
                `);
        }
        resp.write(`<div class="col-md-4">
                        <label for="sobrenome" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="sobrenome" name="sobrenome" value="${sobrenome}">
                        </div>`);
        if(!sobrenome){
            resp.write(`
                <div>
                    <span><p class="bg-danger">Por favor, você deve informar o sobrenome do aluno</p></span>
                </div>`);
        }
        resp.write(`
                <div class="col-md-4">
                <label for="email" class="form-label">email</label>
                <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="email" name="email" value="${email}">
                    </div>
            `);
        if(!email){
            resp.write(`
                <div>
                     <span><p class="bg-danger">Por favor, você deve informar o email do aluno</p></span>
                </div>`);
        }
        resp.write(`
                <div class="col-md-6">
                    <label for="cidade" class="form-label">Cidade</label>
                    <input type="text" class="form-control" id="cidade" name="cidade" value="${cidade}">
                </div>            
            `);
        if(!cidade){
            resp.write(`
                <div>
                     <span><p class="bg-danger">Por favor, você deve informar a cidade do aluno</p></span>
                </div>`);
        }
        resp.write(`
                    <div class="col-md-3">
                    <label for="estado" class="form-label">UF</label>
                    <select class="form-select" id="estado" name="estado">`);

        for (let [sigla, nomeEstado] of Object.entries(estados)){
            if (sigla == estado){
                resp.write(`<option selected value="${sigla}">${nomeEstado}</option>`)
            }
        }
        resp.write(` 
                </select>
                </div>
                <div class="col-md-3">
                    <label for="cep" class="form-label">Cep:</label>
                    <input type="text" class="form-control" id="cep" name="cep" value="${cep}">
                </div>
            `)
            if(!cep){
                resp.write(`
                    <div>
                         <span><p class="bg-danger">Por favor, você deve informar o cep do aluno</p></span>
                    </div>`);        
    }
            resp.write(`
                <div class="col-12">
                                <button class="btn btn-primary" type="submit">Cadastrar</button>
                            </div>
                            </form>
                    </div>
                </body>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
                </html>
                `);
    }

    resp.end();
}

app.get('/', menuView);
app.get('/cadastrarAluno', cadastroAlunoView);

app.post('/cadastrarAluno', cadastrarAluno);

app.listen(porta, host, () => {
    console.log(`Servidor foi iniciado e já está rodando no endereço: http://${host}:${porta}`);
});