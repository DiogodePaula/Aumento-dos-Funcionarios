document.getElementById("btnAdicionar").onclick = adicionarFuncionario;

const lista = [];
const mais2000 = [];
const menos2000 = [];

function adicionarFuncionario(){
    const funcionario = {
        nome: document.getElementById("txtNome").value,
        tempo: document.getElementById("txtTempoEmpresa").value,
        salario: document.getElementById("txtSalario").value,
    }

    lista.push(funcionario);
    console.log(lista);
}