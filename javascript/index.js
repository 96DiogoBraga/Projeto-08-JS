
let cadastrarButton = document.getElementById('cadastrarButton');

let nomeBr = document.getElementById('nomeBr');
let nomeOriginal = document.getElementById('nomeOriginal');
let nomeDiretor = document.getElementById('nomeDiretor');
let dataDeEstreia = document.getElementById('dataDeEstreia');
let idiomasDeAudio = document.querySelectorAll('input[name="idiomasDeAudio"]');
let noneChecked = true;
idiomasDeAudio.forEach(function(checkIdiomas){
    if(checkIdiomas.checked){
        noneChecked = false;
    }
});


let termosDeUso = document.getElementById('termosDeUso');

cadastrarButton.addEventListener('click', ()=>{
    validarInformacoes();
})

cadastrarButton.addEventListener('mouseover', ()=>{
    if(!termosDeUso.checked){
        alert('É necessário aceitar os termos de uso para concluir o cadastro')
    }
})



nomeBr.addEventListener('change', ()=>{
    if(nomeBr.value.length > 0){
        nomeBr.style.borderColor = '#8f8f9d'
        nomeBr.style.borderWidth = '2px'
    }
})

nomeOriginal.addEventListener('change', ()=>{
    if(nomeOriginal.value.length > 0){
        nomeOriginal.style.borderColor = '#8f8f9d'
        nomeOriginal.style.borderWidth = '2px'
    }
})

nomeDiretor.addEventListener('change', ()=>{
    if(nomeDiretor.value.length > 0){
        nomeDiretor.style.borderColor = '#8f8f9d'
        nomeDiretor.style.borderWidth = '2px'
    }
})

dataDeEstreia.addEventListener('change', ()=>{
    if(dataDeEstreia.value.length > 0){
        dataDeEstreia.style.borderColor = '#8f8f9d'
        dataDeEstreia.style.borderWidth = '1px'
    }
})

idiomasDeAudio.forEach(function(checkbox) {
    checkbox.addEventListener('change', () => {
        let algumMarcado = Array.from(idiomasDeAudio).some((check) => check.checked);
        idiomasDeAudio.forEach((check) => {
            check.style.borderColor = '#8f8f9d';
            check.style.borderWidth = '2px';
        });
    });
});

termosDeUso.addEventListener('change', ()=>{
    if(termosDeUso.checked){
        cadastrarButton.disabled = false;
    }else{
        cadastrarButton.disabled = true;
    }
})


function validarInformacoes(){
    let nomeBr = document.getElementById('nomeBr');
    let nomeOriginal = document.getElementById('nomeOriginal');
    let nomeDiretor = document.getElementById('nomeDiretor');
    let dataDeEstreia = document.getElementById('dataDeEstreia');
    let idiomasDeAudio = document.querySelectorAll('input[name="idiomasDeAudio"]');
    let noneChecked = true;
    idiomasDeAudio.forEach(function(checkIdiomas){
        if(checkIdiomas.checked){
            noneChecked = false;
        }
    });
    let termosDeUso = document.getElementById('termosDeUso');

    if(nomeBr.value == ''){
        alert('Necessário informar o nome do filme no Brasil')
        nomeBr.style.borderColor = 'red'
        return
    };

    if(nomeOriginal.value == ''){
        alert('Necessário informar o nome original do filme')
        nomeOriginal.style.borderColor = 'red'
        return
    };

    if(nomeDiretor.value == ''){
        alert('Necessário informar o nome do diretor do filme')
        nomeDiretor.style.borderColor = 'red'
        return
    };

    if(dataDeEstreia.value == ''){
        alert('Necessário informar a data de estreia do filme')
        dataDeEstreia.style.borderColor = 'red'
        return
    };

    if(noneChecked){
        alert('Necessário informar os idiomas de áudio disponíveis')
        idiomasDeAudio.forEach(function(checkbox){
            checkbox.style.borderColor = 'red'
        });
        return
    }
    alert(`Filme cadastrado com sucesso: ${nomeBr.value} (${nomeOriginal.value}.)`)
};