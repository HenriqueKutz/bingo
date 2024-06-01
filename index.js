function desenho(){
    gerar();
    
    const pai_div_body = document.getElementById
    ('body');

    const div_cartela = document.createElement
    ('div');
    div_cartela.className  = 'cartela'; 

    pai_div_body.appendChild(div_cartela);

    const tabela = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const thB = document.createElement('th');
    const thi = document.createElement('th');
    const thn = document.createElement('th');
    const thg = document.createElement('th');
    const tho = document.createElement('th');

    thB.innerText = 'B'
    thi.innerText = 'i'
    thn.innerText = 'n'
    thg.innerText = 'g'
    tho.innerText = 'o'

    thead.appendChild(thB);
    thead.appendChild(thi);
    thead.appendChild(thn);
    thead.appendChild(thg);
    thead.appendChild(tho);

    for(var i = 0; i < 5; i++) {
        const td = document.createElement('tr');
        for(var j = 0; j < 5; j++){
            const td = document.createElement('td');
            td.innerText = 'X';
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    div_cartela.appendChild(tabela);

}

function gerar(){
    var cartela = [];

    while(cartela.length < 25){
        var aleatorio = Math.floor(math.random()*75 + 1);
        if(cartela.includes(aleatorio)){
            cartela.push(aleatorio);
        }
    }
    console.log(cartela);
    return cartela;
}