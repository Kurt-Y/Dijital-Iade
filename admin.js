document.addEventListener('DOMContentLoaded', function() {
    const loginScreen = document.getElementById('login-screen');
    const adminPanel = document.getElementById('admin-panel');
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const loginError = document.getElementById('login-error');
    const generateBtn = document.getElementById('generate-btn');
    const outputArea = document.getElementById('output-area');
    const jsonOutput = document.getElementById('json-output');
    const downloadBtn = document.getElementById('download-btn');

    // Basit Şifre Koruması (Client-Side - Güvenli değil ama istenen bu)
    const ADMIN_PASSWORD = "admin";

    loginBtn.addEventListener('click', function() {
        if (passwordInput.value === ADMIN_PASSWORD) {
            loginScreen.style.display = 'none';
            adminPanel.classList.remove('hidden');
        } else {
            loginError.style.display = 'block';
        }
    });

    generateBtn.addEventListener('click', function() {
        const artifact = {
            id: Date.now(), // Benzersiz ID için timestamp
            title: document.getElementById('title').value,
            title_en: document.getElementById('title_en').value || document.getElementById('title').value,
            model: document.getElementById('model').value || null,

            sergiLat: null, // Genellikle null bırakılabilir veya müze konumu
            sergiLng: null,
            sergiSehir: document.getElementById('sergiSehir').value,
            sergiSehir_en: document.getElementById('sergiSehir_en').value,
            museum: document.getElementById('museum').value,
            museum_en: document.getElementById('museum_en').value,

            kokenSehirTR: document.getElementById('kokenSehirTR').value,
            kokenSehirTR_en: document.getElementById('kokenSehirTR_en').value,
            kokenLatTR: parseFloat(document.getElementById('kokenLatTR').value),
            kokenLngTR: parseFloat(document.getElementById('kokenLngTR').value),

            iadeSehir: document.getElementById('iadeSehir').value,
            iadeSehir_en: document.getElementById('iadeSehir_en').value,
            iadeUlke: document.getElementById('iadeUlke').value,
            iadeUlke_en: document.getElementById('iadeUlke_en').value,
            iadeLat: parseFloat(document.getElementById('iadeLat').value),
            iadeLng: parseFloat(document.getElementById('iadeLng').value),

            donem: "Bilinmiyor", // Formda yoksa varsayılan
            donem_en: "Unknown",
            iadeYili: "İade Talebi " + document.getElementById('iadeTalebi').value,
            iadeTalebi: document.getElementById('iadeTalebi').value,

            image: document.getElementById('image').value,
            audioSrc: document.getElementById('audioSrc').value || null,
            description: document.getElementById('description').value,
            description_en: document.getElementById('description_en').value || document.getElementById('description').value,
            academicDescription: "Henüz girilmedi.",
            academicDescription_en: "Not entered yet."
        };

        const jsonString = JSON.stringify(artifact, null, 4);
        jsonOutput.value = jsonString + ","; // Array içine ekleneceği için virgül ekledim
        outputArea.classList.remove('hidden');
    });

    downloadBtn.addEventListener('click', function() {
        const text = jsonOutput.value;
        const blob = new Blob([text], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'yeni_eser.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});