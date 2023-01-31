document.addEventListener('DOMContentLoaded', function(){
    const idButton = document.getElementById('generate');
    const numberElement = document.getElementById('random-number');
    idButton.addEventListener('click', function(){
        const randomNumber = Math.floor(Math.random()*100);
        numberElement.innerHTML = randomNumber;
    });
});
