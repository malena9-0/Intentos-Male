const objetivo = new Date("November 16, 2025 22:00:00").getTime();

const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const diferencia = objetivo - ahora;

    if (diferencia <= 0) {
        document.getElementById("countdown").innerHTML = "¡Ya comenzó el show!";
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}, 1000);
