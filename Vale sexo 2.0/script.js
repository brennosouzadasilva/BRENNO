// script.js

document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const content = document.getElementById('content');
    
    yesButton.addEventListener('click', () => {
        content.innerHTML = `<p>Vamos continuar então</p>
                             <img src="path/to/praia.jpg" alt="Praia" style="width:100%; height:auto;">
                             <p>VALE CHOCOLATE</p>
                             <button id="redeem">Resgatar</button>`;
        document.getElementById('redeem').addEventListener('click', () => {
            content.innerHTML = `<img src="path/to/choco.jpg" alt="Chocolate" style="width:100%; height:auto;">
                                 <p>Tire um print da foto e me mande</p>`;
            createDilemma();
        });
    });

    noButton.addEventListener('click', () => {
        alert('Então, deixa pra lá');
        window.close();
    });

    function createDilemma() {
        content.innerHTML += `<p>Um PIX misterioso (Pode ser qualquer valor do 00,1 centavo até 1.000,00 reais) ou Vale sexo 2.0</p>
                              <button id="pix">Um PIX misterioso</button>
                              <button id="sex">Vale sexo 2.0</button>`;

        document.getElementById('pix').addEventListener('click', () => {
            content.innerHTML = `<img src="path/to/money.jpg" alt="money"width:100%; height:auto;">
                                 <p>Tire um print e me mande</p>`;
        });

        document.getElementById('sex').addEventListener('click', () => {
            content.innerHTML = `<div style="background-color:black; color:white; padding:20px;">
                                 <p>Tire um print e me mande</p>
                                 </div>`;
        });
    }
});
