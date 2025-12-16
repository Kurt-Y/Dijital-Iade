// --- VERİTABANI VE İPUCU MANTIĞI ---
const artifacts = [
    { id: 1, title: "Çeşme Mimari Süsleme", city: "Samsun", region: "Karadeniz Bölgesi", date: "Osmanlı-1899", country: "Türkiye",
      coords: [41.6166, 35.6000], 
      media: { img: "assets/cesme.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44502/samsun-ili-alacam-ilcesindeki-cesmesinden-calinan-mimari-susleme.html",
      desc: "Samsun ili Alaçam ilçesinde bulunan tarihi çeşmeye ait mimari süsleme parçasıdır. Osmanlı dönemi taş işçiliğinin karakteristik özelliklerini yansıtır." },
      
    { id: 2, title: "Mezar Steli", city: "Gaziantep", region: "Güneydoğu Anadolu", date: "Roma", country: "Türkiye",
      coords: [37.0250, 36.6333], 
      media: { img: "assets/mezarsteli.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-404201/gaziantep-ili-islahiye-ilcesinden-kaybolan-1-adet-mezar-steli.html",
      desc: "Gaziantep İslahiye bölgesinde tespit edilen, Roma dönemine tarihlenen kireçtaşı mezar steli. Bölgenin antik dönem ölü gömme geleneklerine ışık tutar." },

    { id: 3, title: "Ejder Başı Kabartması", city: "İstanbul", region: "Marmara Bölgesi", date: "19.yy", country: "Türkiye",
      coords: [41.0326, 28.9749], 
      media: { img: "assets/ejderbasi.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-342324/galatasaray-lisesi-girisinden-kaybolan-ejder-basi-kabartmasi.html",
      desc: "İstanbul Galatasaray Lisesi giriş kapısında yer alan, 19. yüzyıl batılılaşma dönemi mimari süslemeleri arasında bulunan ejder başı figürü." },

    { id: 4, title: "Bronz Döküm Şebeke", city: "İstanbul", region: "Marmara Bölgesi", date: "17.yy", country: "Türkiye",
      coords: [41.0116, 28.9388], 
      media: { img: "assets/sebeke.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44532/istanbul-ili-ekmekci-ahmet-pasa-turbesi-girisinden-calinan-tarihi-sebile-ait-bronz-dokum-sebeke.html",
      desc: "Ekmekçizade Ahmet Paşa Türbesi sebiline ait, 17. yüzyıl Osmanlı maden sanatının ince işçiliğini gösteren bronz döküm şebeke parçası." },

    { id: 5, title: "Lahit", city: "İzmir", region: "Ege Bölgesi", date: "Bizans", country: "Türkiye",
      coords: [39.0717, 26.8889], 
      media: { img: "assets/lahit.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44634/izmir-ili-dikili-ilcesi-kaymakamligi-bahcesinden-calinan-lahit.html",
      desc: "İzmir Dikili ilçesinde belgelenen Bizans dönemi lahit teknesi. Dönemin defin gelenekleri ve taş işçiliği hakkında veri sunar." },

    { id: 6, title: "Artemis Başı", city: "Denizli", region: "Ege Bölgesi", date: "Roma", country: "Türkiye",
      coords: [37.5611, 29.0833], 
      media: { img: "assets/artemisbasi.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44534/denizli-ili-tavas-ilcesi-kizilcaboluk-kasabasi-heraklia-hieronu39nda-yer-alan-mermer-bloktan-calinan-artemis-basi.html",
      desc: "Tavas Herakleia Hieronu'ndan bir mermer blok üzerindeki kabartmadan ayrılmış Roma dönemi Artemis başı betimlemesi." },

    { id: 7, title: "Mezar Taşı", city: "Denizli", region: "Ege Bölgesi", date: "Selçuklu", country: "Türkiye",
      coords: [37.7765, 29.0864], 
      media: { img: "assets/mezartasi.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44691/denizli-ili-merkez-ilbadi-mahallesinden-calinan-selcuklu-donemine-ait-mezar-tasi.html",
      desc: "İlbadı Mezarlığı kökenli, Selçuklu dönemi süsleme ve yazı karakterini yansıtan tarihi mezar taşı." },

    { id: 8, title: "Büst", city: "Kocaeli", region: "Marmara Bölgesi", date: "Roma", country: "Türkiye",
      coords: [40.7654, 29.9408], 
      media: { img: "assets/bust.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44654/kocaeli-ilinde-kaybolan-bust.html",
      desc: "Roma dönemine ait, portre sanatı özellikleri taşıyan mermer büst. Bölgedeki Roma yerleşiminin sanatsal üretimini belgeler." },

    { id: 9, title: "Altın Sikke", city: "Hatay", region: "Akdeniz Bölgesi", date: "Roma", country: "Türkiye",
      coords: [36.2023, 36.1613], 
      media: { img: "assets/sikke.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44647/hatay-ilinden-calinan-altin-sikke.html",
      desc: "Hatay kökenli, Roma imparatorluk dönemine ait nümismatik veri. Dönemin ekonomik ve siyasi propagandasına dair izler taşır." },

    { id: 10, title: "Haç Motifli Mermer", city: "Denizli", region: "Ege Bölgesi", date: "Roma", country: "Türkiye",
      coords: [38.2936, 29.8475], 
      media: { img: "assets/hacmotifi.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-50725/denizli-ili-civril-ilcesi-isikli-beldesi39nden-calinan-roma-donemine-ait-eser.html",
      desc: "Çivril Işıklı bölgesinden, Geç Roma/Erken Bizans geçiş dönemine işaret eden haç motifli mimari plastik parça." },

    { id: 11, title: "I.Bayezid Sanduka Örtüsü", city: "Bursa", region: "Marmara Bölgesi", date: "Osmanlı", country: "Türkiye",
      coords: [40.1826, 29.0633], 
      media: { img: "assets/sanduka.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-51567/bursa-ili-yildirim-ilcesi-yildirim-mahallesi39nde-yer-alan-yildirim-beyazid-turbesi39nden-calinan-sanduka-ortusu.html",
      desc: "Yıldırım Bayezid Türbesi'ne ait, dönemin tekstil sanatının ve türbe mefruşatının önemli bir örneği olan sanduka örtüsü." },

    { id: 12, title: "Sarıgazi Türbesi Kitabesi", city: "İstanbul", region: "Marmara Bölgesi", date: "Belirsiz", country: "Türkiye",
      coords: [40.9906, 29.2272], 
      media: { img: "assets/kitabe.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-231514/istanbul-ili-sancaktepe-ilcesi-150-ada4-parselde-bulunan-sari-kadizade-seyh-mustafa-dede-efendi-turbesinin--kaybolan-kitabesi.html",
      desc: "Sancaktepe Sarı Kadızade Şeyh Mustafa Dede Efendi Türbesi'ne ait, yapı hakkında epigrafik veriler içeren mermer kitabe." },

    { id: 13, title: "Meryem Ana Kabartması", city: "Erzurum", region: "Doğu Anadolu", date: "10.yy", country: "Türkiye",
      coords: [40.5833, 41.5333], 
      media: { img: "assets/meryemana.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44537/erzurum-ili-osk-manastir-kilisesinden-calinan-kabartma.html",
      desc: "Öşk Manastırı Kilisesi'nden, 10. yüzyıl Gürcü-Bizans sanat etkileşimini gösteren taş kabartma figürü." },

    { id: 14, title: "Mukimi Mozaiği", city: "Şanlıurfa", region: "Güneydoğu Anadolu", date: "Roma", country: "Türkiye",
      coords: [37.1591, 38.7969], 
      media: { img: "assets/mukimi.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-44675/sanliurfa-ilinden-calinan-mozaik-eserler.html",
      desc: "Edessa (Şanlıurfa) mozaik sanatının, Süryani dili ve yerel üslup özelliklerini yansıtan taban mozaiği parçası." },

    { id: 15, title: "Çeşme Yalağı", city: "İstanbul", region: "Marmara Bölgesi", date: "19.yy", country: "Türkiye",
      coords: [41.1075, 29.0550], 
      media: { img: "assets/yalak.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-62791/istanbul-ili-sariyer-ilcesi-emirgan-mevkii39nde-bulunan-serifler-yalisi39ndan-calinan-mermer-cesme-yalagi.html",
      desc: "Emirgan Şerifler Yalısı'na ait, Osmanlı geç dönem su mimarisi elemanlarından mermer çeşme yalağı." },

    { id: 16, title: "Koç Şekilli Mezar Taşı", city: "Tunceli", region: "Doğu Anadolu", date: "Osmanlı", country: "Türkiye",
      coords: [39.4833, 39.9167], 
      media: { img: "assets/kocsekilli.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-110801/tunceli-ili-pulumur-ilcesi-saglamtas-koyu-calinan-koc-sekilli-mezar-tasi.html",
      desc: "Tunceli-Pülümür bölgesinde yaygın görülen, Akkoyunlu-Karakoyunlu geleneğinin devamı niteliğindeki koç biçimli mezar taşı." },

    { id: 17, title: "Hançerli Lahit", city: "İstanbul", region: "Marmara Bölgesi", date: "Osmanlı", country: "Türkiye",
      coords: [41.0478, 28.9336], 
      media: { img: "assets/hancerli.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-168270/istanbul-ili-eyup-ilcesi-merkez-mahallesi-48-ada-18-parseldeeyup-camii-haziresiolarak-tescil-edilen-hazire-alanindan-calinan-mezar-sandukasi.html",
      desc: "Eyüp Sultan Haziresi'nden, üzerinde hançer kabartması bulunan, muhtemelen bir yeniçeri veya asker sınıfına ait mezar sandukası." },

    { id: 18, title: "Yangın Tulumbası", city: "Antalya", region: "Akdeniz Bölgesi", date: "Osmanlı-1318", country: "Türkiye",
      coords: [37.0425, 31.7833], 
      media: { img: "assets/tulumba.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-177051/antalya-akseki-ilcesi-godene-koyu-camiinden-kaybolan-yangin-ttulumbasi.html",
      desc: "Akseki Göden Köyü Camii'nden, Hicri 1318 tarihli, Osmanlı dönemi yangın söndürme teşkilatına ait tarihi tulumba." },

    { id: 19, title: "Saat Kulesi Çanı", city: "Manisa", region: "Ege Bölgesi", date: "20.yy", country: "Türkiye",
      coords: [38.6140, 27.4296], 
      media: { img: "assets/can.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-185386/manisa-ulu-camii39nin-onundeki-meydanda-yer-alan-saat-kulesinden-calinan-can.html",
      desc: "Manisa Ulu Camii meydanındaki saat kulesine ait, 20. yüzyıl başlarında üretilmiş bronz çan." },

    { id: 20, title: "Çeşme Başı (Koç)", city: "Bolu", region: "Karadeniz Bölgesi", date: "13.-14.yy", country: "Türkiye",
      coords: [40.4000, 31.5667], 
      media: { img: "assets/cesmebasi.jpg", model: "" },
      link: "https://kvmgm.ktb.gov.tr/TR-194395/bolu-ili-seben-ilcesi-demirciler-mahallesi-kozkaya-koyunden-calinan-kocbasi-seklinde-cesme-basi-ram-head-fountain-stolen-from-demirciler-neighborhood-at-kozkaya-village-in-seben-bolu.html",
      desc: "Bolu Seben'den, koç başı formunda işlenmiş, Selçuklu-Beylikler dönemi geçiş özelliklerini gösteren çeşme lülesi." },

    // ÖZEL ESER: ID 21 PAPAĞAN
    { id: 21, title: "Bronz Papağan", city: "Samsun", region: "Karadeniz Bölgesi", date: "Roma", country: "Türkiye",
      coords: [41.2867, 36.3300], 
      media: { img: "assets/papagan.jpg", model: "assets/papagan.glb", audio: "assets/papagan.mp3" },
      link: "https://kvmgm.ktb.gov.tr/",
      desc: "Amisos (Samsun) tümülüs kazılarında ele geçen, Roma dönemine ait ünik bir metal işçiliği örneği olan bronz papağan heykelciği. Gözlerinde değerli taş kakmalar kullanılmıştır." }
];

// --- GENİŞLETİLMİŞ DİL SÖZLÜĞÜ ---
const translations = {
    tr: {
        title: "DİJİTAL İADE HARİTASI",
        desc: "Anadolu kökenli kültür varlıklarının dijital envanteri. Bu çalışma, eserlerin kökenine dair bilimsel verileri sunmaktadır.",
        explore: "Haritayı Keşfet",
        help: "Rehber Turu",
        game: "Oyunu Başlat",
        headerTitle: "DİJİTAL İADE HARİTASI",
        allCities: "Tüm Şehirler",
        displayed: "Görüntülenen",
        gameQTitle: "SORU",
        gameScoreTitle: "PUAN",
        gameQuestion: "Bu eser hangi lokasyonda olmalı?",
        endGame: "Oyunu Bitir",
        gameOver: "Oyun Bitti!",
        playAgain: "Tekrar Oyna",
        returnMap: "Haritaya Dön",
        settings: "Ayarlar",
        darkMode: "Karanlık Tema",
        language: "Dil / Language",
        tourTitle1: "Ana Menü",
        tourDesc1: "Navigasyon ve ayarlar buradan yönetilir.",
        tourTitle2: "Oyun Modu",
        tourDesc2: "Bilginizi test edin. Doğru: +10 Puan, Yanlış: -5 Puan. Toplam 5 soru.",
        tourTitle3: "Katmanlar",
        tourDesc3: "Sağ üst köşedeki panelden Uydu veya Sokak görünümünü seçebilirsiniz.",
        tourTitle4: "Harita Kontrolü",
        tourDesc4: "Eserleri incelemek için harita üzerinde gezinebilirsiniz."
    },
    en: {
        title: "DIGITAL REPATRIATION MAP",
        desc: "Digital inventory of cultural assets originating from Anatolia. This study presents scientific data regarding the origin of the artifacts.",
        explore: "Explore Map",
        help: "Guided Tour",
        game: "Start Game",
        headerTitle: "DIGITAL REPATRIATION MAP",
        allCities: "All Cities",
        displayed: "Displayed",
        gameQTitle: "QUESTION",
        gameScoreTitle: "SCORE",
        gameQuestion: "Where should this artifact be located?",
        endGame: "End Game",
        gameOver: "Game Over!",
        playAgain: "Play Again",
        returnMap: "Return to Map",
        settings: "Settings",
        darkMode: "Dark Mode",
        language: "Language",
        tourTitle1: "Main Menu",
        tourDesc1: "Manage navigation and settings here.",
        tourTitle2: "Game Mode",
        tourDesc2: "Test your knowledge. Correct: +10 Points, Wrong: -5 Points. Total 5 questions.",
        tourTitle3: "Layers",
        tourDesc3: "Select Satellite or Street view from the top right panel.",
        tourTitle4: "Map Control",
        tourDesc4: "Navigate the map to explore artifacts."
    }
};

let currentLang = 'tr';
let map;
let markers; 
let gameMode = false;
let gameQueue = [];
let currentTarget = null;
let score = 0;
let qIndex = 0;

// --- BAŞLATMA (HATA ÖNLEYİCİ) ---
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderSidebar(artifacts);
    updateCounter(artifacts.length);
    populateFilters();
    setupEventListeners();
});

function setupEventListeners() {
    // VİDEO DÜZELTMESİ (Garanti Listener)
    const vidBtn = document.getElementById('btn-open-museum');
    if(vidBtn) {
        vidBtn.onclick = () => {
            const overlay = document.getElementById('video-overlay');
            const video = document.getElementById('museum-video');
            overlay.classList.remove('hidden');
            video.currentTime = 0;
            video.play().catch(e => console.log("Video oynatma hatası:", e));
        };
    }
    
    document.getElementById('close-video-btn').onclick = () => {
        document.getElementById('video-overlay').classList.add('hidden');
        document.getElementById('museum-video').pause();
    };

    document.getElementById('btn-start-explore').onclick = closeIntro;
    document.getElementById('btn-start-tour').onclick = startTour;
    document.getElementById('btn-start-game').onclick = () => { closeIntro(); startGame(); };
    document.getElementById('btn-game-nav').onclick = startGame;
    document.getElementById('toggle-sidebar').onclick = () => document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('btn-settings').onclick = () => toggleModal('settings-modal', true);
    
    // Filtreleme
    document.getElementById('search-input').addEventListener('keyup', filterArtifacts);
    document.getElementById('city-filter').addEventListener('change', filterArtifacts);

    // OYUNU BİTİR TUŞU (Düzeltildi)
    document.getElementById('abort-game').onclick = window.closeGame;

    // Switch Listeners
    document.getElementById('theme-toggle').addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
    });
    
    document.getElementById('lang-toggle').addEventListener('change', (e) => {
        setLanguage(e.target.checked ? 'en' : 'tr');
    });
}

function closeIntro() {
    document.getElementById('intro-screen').style.opacity = '0';
    setTimeout(() => document.getElementById('intro-screen').classList.add('hidden'), 500);
}

// --- HARİTA VE KÜMELEME ---
function initMap() {
    map = L.map('map', { zoomControl: false }).setView([39.0, 35.0], 6);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const street = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: 'OSM' });
    const sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Esri' });

    street.addTo(map);

    const baseMaps = { 
        "Sokak (Street)": street, 
        "Uydu (Satellite)": sat 
    };
    L.control.layers(baseMaps, null, { position: 'topright' }).addTo(map);

    markers = L.markerClusterGroup({
        showCoverageOnHover: false,
        maxClusterRadius: 50 
    });
    map.addLayer(markers);

    renderMarkers(artifacts);
}

function renderMarkers(list) {
    markers.clearLayers(); 

    list.forEach(item => {
        const m = L.marker(item.coords);
        
        let mediaContent = '';
        if (item.id === 21) {
            mediaContent = `
                <div class="audio-player-wrapper">
                    <small>Ses Kaydı / Audio Record:</small>
                    <audio controls>
                        <source src="${item.media.audio}" type="audio/mpeg">
                    </audio>
                </div>
            `;
        }

        let btn3D = '';
        if(item.media.model) {
            btn3D = `<button class="btn-3d-trigger" onclick="open3D('${item.media.model}')" title="3D Model"><i class="fa-solid fa-cube"></i></button>`;
        }

        const popupHTML = `
            <div class="popup-card">
                <div class="popup-img-container">
                    <img src="${item.media.img}" class="popup-img" onerror="this.src='https://placehold.co/400x300?text=No+Image'">
                    ${btn3D}
                </div>
                ${mediaContent}
                <div class="popup-info">
                    <h3>${item.title}</h3>
                    <div class="meta-row"><i class="fa-solid fa-location-dot"></i> <strong>Köken:</strong> ${item.city}, Türkiye</div>
                    <div class="meta-row"><i class="fa-solid fa-hourglass-half"></i> <strong>Dönem:</strong> ${item.date}</div>
                    <div class="desc-text">${item.desc}</div>
                    <a href="${item.link}" target="_blank" class="gov-link-btn">T.C. Kültür Bakanlığı Kaynağına Git</a>
                </div>
            </div>
        `;

        m.bindPopup(popupHTML, { maxWidth: 320 });
        
        m.on('click', (e) => {
            if(gameMode) {
                m.closePopup();
                checkAnswer(item, e.latlng);
            }
        });

        markers.addLayer(m); 
    });
}

function renderSidebar(list) {
    const container = document.getElementById('artifact-list');
    container.innerHTML = '';
    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'artifact-item';
        div.innerHTML = `
            <img src="${item.media.img}" class="thumb" onerror="this.src='https://placehold.co/100?text=...'">
            <div class="artifact-info">
                <h4>${item.title}</h4>
                <small>Türkiye</small>
            </div>
        `;
        div.onclick = () => {
            if(gameMode) return;
            map.flyTo(item.coords, 14);
            // Cluster'ı aç ve eseri göster
            markers.zoomToShowLayer(markers.getLayers().find(l => l.getLatLng().equals(item.coords)));
        };
        container.appendChild(div);
    });
}

function updateCounter(count) {
    document.getElementById('visible-count').innerText = count;
}

// --- FİLTRELEME ---
function populateFilters() {
    const cities = [...new Set(artifacts.map(a => a.city))].sort();
    const citySelect = document.getElementById('city-filter');
    const t = translations[currentLang];
    citySelect.innerHTML = `<option value="all">${t.allCities}</option>`;
    
    cities.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c; opt.innerText = c;
        citySelect.appendChild(opt);
    });
}

function filterArtifacts() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const city = document.getElementById('city-filter').value;

    const filtered = artifacts.filter(a => {
        const matchSearch = a.title.toLowerCase().includes(search) || a.city.toLowerCase().includes(search);
        const matchCity = city === 'all' || a.city === city;
        return matchSearch && matchCity;
    });

    renderMarkers(filtered);
    renderSidebar(filtered);
    updateCounter(filtered.length);
}

// --- 3D MODEL ---
window.open3D = function(path) {
    const modal = document.getElementById('model-modal');
    const container = document.getElementById('model-wrapper');
    container.innerHTML = `
        <model-viewer 
            src="${path}" 
            auto-rotate 
            camera-controls 
            ar 
            shadow-intensity="1"
            style="width: 100%; height: 100%;"
            background-color="#f0f0f0"
        ></model-viewer>
    `;
    toggleModal('model-modal', true);
};

window.closeModelModal = function() {
    toggleModal('model-modal', false);
    document.getElementById('model-wrapper').innerHTML = '';
};

function toggleModal(id, show) {
    const el = document.getElementById(id);
    if(show) el.classList.remove('hidden'); else el.classList.add('hidden');
}

// --- OYUN MODU ---
function startGame() {
    gameMode = true;
    document.getElementById('game-ui').classList.remove('hidden');
    document.getElementById('sidebar').classList.add('collapsed'); 
    
    // Rastgele 5 soru
    gameQueue = [...artifacts].sort(() => 0.5 - Math.random()).slice(0, 5);
    score = 0;
    qIndex = 0;
    
    renderMarkers(artifacts);
    nextQuestion();
}

function nextQuestion() {
    if(qIndex >= 5) { finishGame(); return; }
    currentTarget = gameQueue[qIndex];
    qIndex++;
    
    const t = translations[currentLang];
    document.getElementById('q-counter').innerText = `${qIndex}/5`;
    document.getElementById('target-name').innerText = currentTarget.title;
    
    // AKILLI İPUCU SİSTEMİ (Cevabı vermeden bölge söyler)
    const hintText = currentLang === 'tr' 
        ? `İpucu: Bu eser ${currentTarget.region} civarında, ${currentTarget.date} dönemine ait.`
        : `Hint: Look around ${currentTarget.region} region, dated to ${currentTarget.date}.`;
        
    document.getElementById('target-hint').innerText = hintText;
    document.getElementById('score-display').innerText = score;
}

function checkAnswer(clickedItem, latlng) {
    if(clickedItem.id === currentTarget.id) {
        score += 10;
        const msg = currentLang === 'tr' ? "Doğru Eser! (+10 Puan)" : "Correct Artifact! (+10 Points)";
        showToast(msg, "success");
        document.getElementById('score-display').innerText = score;
        setTimeout(nextQuestion, 1500);
    } else {
        score -= 5;
        document.getElementById('score-display').innerText = score;
        const dist = Math.round(map.distance(latlng, currentTarget.coords) / 1000);
        const msg = currentLang === 'tr' 
            ? `Yanlış! Hedef ${dist}km uzakta. (-5 Puan)` 
            : `Wrong! Target is ${dist}km away. (-5 Points)`;
        showToast(msg, "error");
    }
}

function finishGame() {
    const t = translations[currentLang];
    document.getElementById('final-score').innerText = `${t.gameScoreTitle}: ${score}`;
    toggleModal('game-over-modal', true);
    window.closeGame();
}

window.closeGame = function() {
    gameMode = false;
    document.getElementById('game-ui').classList.add('hidden');
    toggleModal('game-over-modal', false);
    document.getElementById('sidebar').classList.remove('collapsed');
};

window.restartGame = function() {
    toggleModal('game-over-modal', false);
    startGame();
};

// --- TUR (SPOTLIGHT) ---
const tourSteps = [
    { el: '#main-header', key: 'tourTitle1', descKey: 'tourDesc1' },
    { el: '#btn-game-nav', key: 'tourTitle2', descKey: 'tourDesc2' },
    { el: '.leaflet-control-layers', key: 'tourTitle3', descKey: 'tourDesc3' },
    { el: '#map', key: 'tourTitle4', descKey: 'tourDesc4' }
];
let tourIndex = 0;

function startTour() {
    closeIntro();
    document.getElementById('spotlight-overlay').classList.remove('hidden');
    tourIndex = 0;
    showStep();
}

function showStep() {
    document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    
    if (tourIndex >= tourSteps.length) {
        document.getElementById('spotlight-overlay').classList.add('hidden');
        return;
    }

    const step = tourSteps[tourIndex];
    const target = document.querySelector(step.el);
    
    if(target) {
        target.classList.add('tour-highlight');
    }

    const t = translations[currentLang];
    document.getElementById('tour-title').innerText = t[step.key];
    document.getElementById('tour-desc').innerText = t[step.descKey];
    document.getElementById('tour-step').innerText = `${tourIndex + 1}/${tourSteps.length}`;
    
    const btn = document.getElementById('tour-next-btn');
    btn.innerText = (tourIndex === tourSteps.length - 1) ? (currentLang === 'tr' ? 'Bitir' : 'Finish') : (currentLang === 'tr' ? 'İleri' : 'Next');
    btn.onclick = () => { tourIndex++; showStep(); };
}

// --- DİL DESTEĞİ ---
window.setLanguage = function(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(t[key]) el.innerText = t[key];
    });

    // Filtreleri güncelle (Tüm Şehirler yazısı için)
    populateFilters();
    
    // Haritayı güncelle (Popup metinleri için)
    renderMarkers(artifacts);
    
    // Oyun metinlerini anlık güncelle (Eğer oyun açıksa)
    if(gameMode && currentTarget) {
         document.getElementById('target-hint').innerText = lang === 'tr' 
        ? `İpucu: Bu eser ${currentTarget.region} civarında, ${currentTarget.date} dönemine ait.`
        : `Hint: Look around ${currentTarget.region} region, dated to ${currentTarget.date}.`;
    }
};

function showToast(msg, type) {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast';
    t.style.background = type === 'success' ? '#2ecc71' : '#e74c3c';
    t.style.color = 'white'; t.style.padding = '15px'; t.style.marginTop = '10px'; t.style.borderRadius = '5px';
    t.innerText = msg;
    c.appendChild(t);
    setTimeout(() => t.remove(), 4000);
}