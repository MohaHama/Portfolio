function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const makeWave = (sel, url) => {
    const ws = WaveSurfer.create({
        container: sel,
        waveColor: 'rgba(255,255,255,.35)',
        progressColor: '#fff',
        cursorColor: 'transparent',
        height: 36,
        barWidth: 2,
        barGap: 6,
        responsive: true
    });
    ws.load(url);
    return ws;
};