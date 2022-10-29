// Importe le module generateCrosshair.js avec ES6
import generateCrosshair from "./generateCrosshair.js";

// Confettis
let confetti = new Confetti("crosshairGenerateTrigger");
confetti.setCount(175);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(false);


// Clic sur le bouton "Générer"
document.getElementById("crosshairGenerateTrigger").addEventListener("click", () => {
    // Récupère la valeur du crosshair
    const crosshair = generateCrosshair();

    // Affiche la valeur du crosshair dans le textarea
    document.getElementById("crosshairResult").value = crosshair;

    // Party Trumpet sound effect
    let audio = new Audio("./ldbm.mp3");
    audio.play();
    audio.volume = .3;
});


// Clic sur le textarea du crosshair pour copier son contenu
document.getElementById("crosshairResult").addEventListener("click", () => {
    // Sélectionne le contenu du textarea
    document.getElementById("crosshairResult").select();

    // Copie le contenu du textarea dans le presse-papier
    navigator.clipboard.writeText(document.getElementById("crosshairResult").value);

    // Affiche un toast pour indiquer que le crosshair a été copié en vanilla js
    const toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerText = "Crosshair copied to clipboard";
    
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add("hide");
        // Attendre la fin de l'animation en css avant de le supprimer du document
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 500);
    }, 4000);
});