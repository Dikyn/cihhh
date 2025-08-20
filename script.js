let AudioCtx;
const container = document.getElementById('welcomeContainer');

// Fungsi login (Kolom 1)
function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginError = document.getElementById('loginError');

    if(!username || !password){
        loginError.textContent = "Isi kocakk";
        return;
    }

    if(username === "Dikynsh" && password === "Donghub13") {
        document.getElementById('loginPopup').style.display = 'none';
        document.getElementById('dataPopup').style.display = 'block';
        loginError.textContent = '';
    } else {
        loginError.textContent = "Salah wkwkwkwkwk";
    }
}

// Fungsi data (Kolom 2)
function checkData() {
    const nickname = document.getElementById('nickname').value;
    const department = document.getElementById('department').value;
    const dataError = document.getElementById('dataError');

    if(!nickname || !department){
        dataError.textContent = "Isi kocakk";
        return;
    }

    if(nickname === "Dika" && department === "Teknik Informatika") {
        document.getElementById('dataPopup').style.display = 'none';
        dataError.textContent = '';
        if(!AudioCtx) AudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        showThirdPopup();
    } else {
        dataError.textContent = "Salah wkwkwkwkwk";
    }
}

// Hacker background animation
const canvasBg = document.getElementById('hackerBackground');
canvasBg.width = window.innerWidth;
canvasBg.height = window.innerHeight;
const ctxBg = canvasBg.getContext('2d');
const letters = "GELOOOOOOOANYINGGGGGGGAWOKAWOKAWOKAWOK";
const fontSize = 40;
const columns = canvasBg.width / fontSize;
let drops = [];
for(let x=0; x<columns; x++) drops[x] = 1;

function draw() {
    ctxBg.fillStyle = "rgba(0,0,0,0.1)";
    ctxBg.fillRect(0,0,canvasBg.width, canvasBg.height);
    ctxBg.fillStyle = "#0ff";
    ctxBg.font = fontSize + "px monospace";
    for(let i=0; i<drops.length; i++){
        const text = letters[Math.floor(Math.random()*letters.length)];
        ctxBg.fillText(text, i*fontSize, drops[i]*fontSize);
        if(drops[i]*fontSize > canvasBg.height && Math.random() > 0.975) drops[i]=0;
        drops[i]++;
    }
    requestAnimationFrame(draw);
}
draw();

// Kolom 3: teks akhir + gambar
function showThirdPopup() {
    container.style.display = 'block';
    const text = "SELAMAT DATANG KEMBALI PEMULA....YAA PROGRAMMER PUMULA WKWKWKWK...HAI DIKA YANSAH MULAILAH MELAKUKAN KEGIATAN ANDA PADA APLIKASI INI...";
    container.textContent = "";

    let i = 0;
    const interval = setInterval(() => {
        if(i >= text.length){
            clearInterval(interval);

            setTimeout(() => {
                container.textContent = ""; 

                const line1 = document.createElement("div");
                const line2 = document.createElement("div");

                line1.textContent = "Dikynsh App";
                line2.textContent = "Awokawokawok Pemula";

                line1.classList.add("slide-up");
                line2.classList.add("slide-up", "delay");

                line1.style.fontSize = "40px";
                line1.style.fontWeight = "bold";
                line1.style.marginBottom = "10px";
                line1.style.textAlign = "center";
                line2.style.fontSize = "30px";
                line2.style.textAlign = "center";

                container.appendChild(line1);
                container.appendChild(line2);

                // ================================
                // Tambahan gambar berdampingan
                // ================================
                const images = [
                    "IMG_20250416_102308_938.jpg",
                    
                    "LEICA20250507_085955~2.jpg",
                    
                    "LEICA20250507_131040~2.jpg",
                    
                    "LEICA20250507_162654~2.jpg",
                    
                   "©Seputar Gcam20250416_103055.jpg",
                   
                   "deaz.jpg",
                   
                   "azril.jpg",
                   
                   "dadan.jpg"
                ];

                const imgContainer = document.createElement("div");
                imgContainer.style.display = "flex";
                imgContainer.style.justifyContent = "center";
                imgContainer.style.flexWrap = "wrap";
                imgContainer.style.gap = "20px";
                imgContainer.style.marginTop = "20px";

                images.forEach((src, index) => {
                    const img = document.createElement("img");
                    img.src = src;
                    img.style.width = "300px";
                    img.classList.add("slide-up", `delay${index+1}`);
                    imgContainer.appendChild(img);
                });

                container.appendChild(imgContainer);
                
                // Aktifkan scroll setelah semua muncul
container.style.overflowY = "auto";
container.style.maxHeight = "900px"; // atur tinggi sesuai kebutuhan


            }, 3000);

            return;
        }

        container.textContent += text[i];

        const oscillator = AudioCtx.createOscillator();
        const gainNode = AudioCtx.createGain();
        oscillator.type = "square";
        oscillator.frequency.setValueAtTime(800, AudioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.05, AudioCtx.currentTime);
        oscillator.connect(gainNode).connect(AudioCtx.destination);
        oscillator.start();
        oscillator.stop(AudioCtx.currentTime + 0.05);

        i++;
    }, 100);
}
