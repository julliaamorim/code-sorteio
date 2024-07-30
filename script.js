const textareaElemento = document.getElementById("itens-txt");

function sortearItens() {
    if (!textareaElemento.value) { 
        alert("Preencha o campo obrigatório.");
    }
    else {
        const itensArr = textareaElemento.value.split(","); 
        const numeroSorteado = Math.floor(Math.random() * itensArr.length);  
        const itemSorteado = itensArr[numeroSorteado]; 
        alert(`O item sorteado foi: ${itemSorteado.trim()}`);
    }
}

