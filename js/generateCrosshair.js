function generateCrosshair() {
    let resultCommand = "";

    // Génère des valeurs RGB aléatoires pour la couleur du crosshair
    const RGB = {
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256)
    }
    resultCommand += `cl_crosshaircolor_r ${RGB.r};cl_crosshaircolor_g ${RGB.g};cl_crosshaircolor_b ${RGB.b}`;
    resultCommand += `;cl_crosshairalpha 255`;


    // Génère une taille aléatoire pour le crosshair
    const size = Math.floor(Math.random() * 256);
    resultCommand += `;cl_crosshairsize ${size}`;


    // Génère une épaisseur aléatoire pour le crosshair
    const thickness = Math.floor(Math.random() * 256);
    resultCommand += `;cl_crosshairthickness ${thickness}`;


    // Génère une gap aléatoire pour le crosshair
    const gap = Math.floor(Math.random() * 256);
    resultCommand += `;cl_crosshairgap ${gap}`;


    // Génère un outline aléatoire pour le crosshair
    const outline = Math.floor(Math.random() * 256);
    resultCommand += `;cl_crosshair_outlinethickness ${outline}`;


    // Génère un dot aléatoire pour le crosshair
    const dot = Math.floor(Math.random() * 256);
    resultCommand += `;cl_crosshairdot ${dot}`;


    // Génère un drawoutline aléatoire pour le crosshair
    const drawoutline = Math.floor(Math.random() * 256);
    resultCommand += `;cl_crosshair_drawoutline ${drawoutline}`;


    // Génère un fixedcrosshairgap aléatoire pour le crosshair
    const fixedcrosshairgap = Math.floor(Math.random() * 256);
    resultCommand += `;cl_fixedcrosshairgap ${fixedcrosshairgap}`;


    // Génère un style de crosshair aléatoire
    const style = Math.floor(Math.random() * 5);
    resultCommand += `;cl_crosshairstyle ${style}`;

    return resultCommand;
}

// Exporte la fonction generateCrosshair avec es6
export default generateCrosshair;