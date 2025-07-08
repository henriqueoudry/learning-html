function mudarCor() {
    const cores = ["#FFEB4B", "8BC34A", "03A9F4", "FF5722", "9C27B0"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}