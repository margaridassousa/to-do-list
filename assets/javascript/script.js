const tarefa = document.querySelector('#tarefa');
const botaoTarefa = document.querySelector('#btn-criar');
const lista = document.querySelector('.list')

function criaTarefa(textoInput) {
    console.log(textoInput)
}

botaoTarefa.addEventListener('click', function(){
    if (!tarefa.value) return;
    console.log(tarefa.value)
});


