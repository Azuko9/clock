const heureH = document.querySelector("#heureT");

let leTemps = setInterval(function () {
  const leTemps = new Date();
    let H = leTemps.getHours();
    let M = leTemps.getMinutes();
    let S = leTemps.getSeconds();
    let ms = leTemps.getMilliseconds();

    let Heure = document.querySelector("#heure");
    Heure.style.rotate = H * 30 + M * 0.1 + "deg";

    let Minute = document.querySelector("#minute");
    Minute.style.rotate = M * 6 + S * 0.1 + "deg";

    let Seconde = document.querySelector("#seconde");
    Seconde.style.rotate = S * 6 + ms * 0.006 + "deg";

    let Clochette = document.querySelector("#clochette");
    Clochette.style.rotate = S * -6 + ms * -0.006 + "deg";

    heureH.textContent = H + ":" + M + ":" + S;

    if ((H === 18, M === 30)) {
        document.getElementById("son1").play();
    } else {
        document.getElementById("son1").onpause;
    }
}, 50);
