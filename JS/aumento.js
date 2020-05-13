document.getElementById("btnAdicionar").onclick = adicionarFuncionario; 
document.getElementById("btnfuncionarioSalarioAlto").onclick = funcionarioSalarioAlto; 
document.getElementById("btnfuncionarioSalarioBaixo").onclick = funcionarioSalarioBaixo;

const lista = []; 
let mais2000 = []; 
let menos2000 = []; 

function adicionarFuncionario(){ 

    const funcionario = { 
        nome: document.getElementById("txtNome").value, 
        tempo: parseFloat(document.getElementById("txtTempoEmpresa").value),
        salario: parseFloat(document.getElementById("txtSalario").value),
    } 

    if(funcionario.nome && funcionario.tempo && funcionario.salario){
        lista.push(funcionario); 
    } else {
        alert("Preencha todos os campos!");
    } 
    console.log(lista);   
}

function funcionarioSalarioAlto(){

    mais2000 = lista.filter((value) => value.salario >= 2000);

    const funcionarioAumento = mais2000.map((funcionario) => {

       if(funcionario.tempo >= 10){
            const empregado = {
                nome: funcionario.nome,
                tempoEmpresa: funcionario.tempo,
                salarioAntigo: funcionario.salario,
                novoSalario: funcionario.salario + funcionario.salario * (10/100)
        }

            document.getElementById("divPai").innerHTML += `
            <label>${empregado.nome}</label>
            <br>
            <label>${empregado.tempoEmpresa}</label>
            <br>
            <label>${empregado.salarioAntigo}</label>
            <br>
            <label>${empregado.novoSalario}</label>
            <br>`

           return empregado;
           
       } else {
           const empregado = {
                nome: funcionario.nome,
                tempoEmpresa: funcionario.tempo,
                salarioAntigo: funcionario.salario,
                novoSalario: funcionario.salario + funcionario.salario * (5/100)
           }
           document.getElementById('divPai').innerHTML += `
            <label> ${empregado.nome}</label>
            <br/>
            <label> ${empregado.tempoEmpresa}</label>
            <br/>
            <label> ${empregado.salarioAntigo}</label>
            <br/>
            <label> ${empregado.novoSalario} <label>
            <br/>`

            return empregado;
        }
    })
    console.log(funcionarioAumento);
}         

function funcionarioSalarioBaixo(){
    menos2000 = lista.filter((value) => value.salario < 2000);

    const funcionarioAumento = menos2000.map((funcionario) => {

        if(funcionario.tempo >= 10){
            const empregado = {
                nome:funcionario.nome,
                tempoEmpresa:funcionario.tempo,
                salarioAntigo: funcionario.salario,
                salarioNovo: funcionario.salario + funcionario.salario * (15/100) 
            }

            document.getElementById('divPai').innerHTML += `
            <label > ${empregado.nome}</label>
            <br/>
            <label> ${empregado.tempoEmpresa}</label>
            <br/>
            <label> ${empregado.salarioAntigo}</label>
            <br/>
            <label> ${empregado.salarioNovo} <label>
            <br/>`

            return empregado;
        } else {
            const empregado = {
                nome: funcionario.nome,
                tempoEmpresa: funcionario.tempo,
                salarioAntigo: funcionario.salario,
                salarioNovo: funcionario.salario + funcionario.salario * (12/100)
            }
            document.getElementById('divPai').innerHTML += `
            <label> ${empregado.nome}</label>
            <br/>
            <label> ${empregado.tempoEmpresa}</label>
            <br/>
            <label> ${empregado.salarioAntigo}</label>
            <br/>
            <label> ${empregado.salarioNovo} <label>
            <br/>`

            return empregado;
        }
    })
    console.log(funcionarioAumento);
}