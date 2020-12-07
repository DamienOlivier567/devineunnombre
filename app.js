let result = document.getElementById('resultat');

let solution = Math.floor(Math.random() * 100) + 1;

let label = document.getElementById('mon-label');

let nombreEssai = 10;

let inputUser = document.getElementById('input1');

let button = document.getElementById('boutton');

button.addEventListener('click', function() {
    if(nombreEssai > 0) {
        if ((parseInt(inputUser.value) < 0)||(parseInt(inputUser.value) > 100)) {
            result.innerHTML = ("On a dit un nombre entre 1 et 100");
        }
        else if (parseInt(inputUser.value) < solution) {
            result.innerHTML = ("Essai numéro : " + nombreEssai + "." + " Vous avez entré le nombre " + inputUser.value);
            result.innerHTML = (" Le nombre à trouver est plus grand");
        }
        else if (parseInt(inputUser.value) > solution) {
            result.innerHTML = ("Essai numéro : " + nombreEssai + "." + " Vous avez entré le nombre " + inputUser.value);
            result.innerHTML = ("Le nombre à trouver est plus petit");
        }
        else if (parseInt(inputUser.value) === solution) {
            result.innerHTML = ("Essai numéro : " + nombreEssai + "." + " Vous avez entré le nombre " + inputUser.value);
            result.innerHTML = ("Woohoo, la réponse était bien " + solution);
        }
        nombreEssai--;
    }else{
        result.innerHTML = ("D'oh, tu n'as pas trouvé la réponse dans les 10 essais impartis. La réponse était " + solution + "Donuts");
    }

});