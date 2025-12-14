document.addEventListener('DOMContentLoaded', function () {

    let map;
    let allMarkers = [];
    let markersLayer;
    let currentView = 'origin', currentTheme = 'light', currentLang = 'tr', currentViewType = 'map';
    let tileLayer;

    // DOM Elementleri
    const settingsDropdown = document.getElementById('settings-dropdown');
    const filterModal = document.getElementById('filter-modal');
    const introTourOverlay = document.getElementById('intro-tour-overlay');
    const tutorialOverlay = document.getElementById('tutorial-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const modelViewerModal = document.getElementById('model-viewer-modal');
    const artifactModelViewer = document.getElementById('artifact-model');
    const closeModelViewerBtn = document.getElementById('close-model-viewer');
    const quizPanel = document.getElementById('quiz-panel');
    const quizToggleBtn = document.getElementById('quiz-toggle-btn');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const endQuizBtn = document.getElementById('end-quiz-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    const quizStartScreen = document.getElementById('quiz-start-screen');
    const quizGameScreen = document.getElementById('quiz-game-screen');
    const quizEndScreen = document.getElementById('quiz-end-screen');
    const quizScoreEl = document.getElementById('quiz-score');
    const quizQuestionCounterEl = document.getElementById('quiz-question-counter');
    const quizQuestionTextEl = document.getElementById('quiz-question-text');
    const quizHintTextEl = document.getElementById('quiz-hint-text');
    const debugCounter = document.getElementById('debug-counter');

    // Hoş Geldiniz Ekranı Elementleri
    const welcomeOverlay = document.getElementById('welcome-overlay');
    const closeWelcomeButton = document.getElementById('close-welcome');
    const openHelpButton = document.getElementById('open-help');
    const startGameButton = document.getElementById('start-game');

    let gameState = {
        isActive: false, score: 0, currentQuestionIndex: 0, questions: [],
        totalQuestions: 5, targetLocation: null, targetEserId: null
    };

    const GreenIcon = new L.Icon({ iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png', shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png', iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] });

    const translations = {
        tr: {
            pageTitle: "Dijital İade Haritası", mapView: "Harita Görünümü", originLabel: "Ait Olduğu Yer", returnedLabel: "Bulunduğu Yer", viewType: "Görünüm Türü", map: "Harita", satellite: "Uydu", theme: "Tema", light: "Açık", dark: "Koyu", language: "Dil",
            filterTitle: "Eserleri Filtrele", filterReturnedCountry: "Bulunduğu Ülke:", filterOriginCity: "Ait Olduğu Şehir (TR):", filterExhibitionCity: "Sergilendiği Şehir (TR):", filterPeriod: "Eserin Dönemi:",
            applyFilterBtn: "Filtrele", resetFilterBtn: "Sıfırla",
            museum: "Bulunduğu Müze:", exhibitionPlace: "Sergilendiği Yer:", originPlace: "Ait Olduğu Yer (Köken):", returnedFrom: "Bulunduğu Yer (Yurt Dışı):",
            period: "Dönem:", returnDate: "İade Durumu:", academicInfo: "Akademik Özet:",
            searchPlaceholder: "Eser veya müze ara...",
            quizTitle: "Konum Bulma Oyunu", quizDescription: "Rastgele seçilen eserlerin konumunu haritada tahmin et. Her doğru tahmin 20 puan, her yanlış tahmin -5 puandır!", quizStartBtn: "Oyuna Başla", quizScoreLabel: "Puan:", quizQuestionLabel: "Soru:", quizEndBtn: "Oyunu Bitir", quizGameOver: "Oyun Bitti!", quizFinalScoreLabel: "Toplam Puan:", quizPlayAgainBtn: "Tekrar Oyna",
            quizQuestionTemplateOrigin: "'{eserAdi}' adlı eserin kökeni (ait olduğu yer) neresidir?", quizQuestionTemplateReturned: "'{eserAdi}' adlı eser şu an nerede bulunmaktadır?", quizHintLabel: "İpucu: ",
            hintTemplate: "{distance} km {direction} yönünde.",
            wrongGuess: "Yanlış tahmin!",
            directions: ['Kuzey', 'Kuzeydoğu', 'Doğu', 'Güneydoğu', 'Güney', 'Güneybatı', 'Batı', 'Kuzeybatı'],
            introStep1Title: "Hoş Geldiniz!", introStep1Text: "Bu harita, kültürel miras eserlerimizi keşfetmeniz için hazırlandı. Kısaca özellikleri tanıyalım.", tutorialNext: "İleri", introStep2Title: "Konum Bulma Oyunu", introStep2Text: "Bu buton ile eserlerin yerini tahmin etmeye dayalı eğlenceli bir oyun oynayabilirsiniz.", introStep3Title: "Detaylı Yardım", introStep3Text: "Tüm özellikleri ve detayları öğrenmek isterseniz, dilediğiniz zaman bu yardım butonuna tıklayabilirsiniz.", introStep4Title: "Keşfe Başla!", introStep4Text: "Artık haritayı keşfetmeye hazırsınız. İyi eğlenceler!", tutorialEnd: "Haritayı Keşfet", tutorialSkip: "Turu Atla",
            helpStep1Title: "Detaylı Yardım", helpStep1Text: "Bu interaktif harita, kültürel mirasımızı keşfetmeniz için tasarlandı. Gelin, tüm özellikleri detaylıca inceleyelim.", helpStep2Title: "Harita ve Eserler", helpStep2Text: "Haritadaki yeşil daireler, o bölgedeki eser gruplarını gösterir. Yaklaştıkça veya tıkladıkça eserlerin tekil imleçleri görünür. Her imlece tıklayarak eserin kökeni, sergilendiği müze ve iade durumu gibi detaylara ulaşabilirsiniz.", helpStep3Title: "Arama", helpStep3Text: "Belirli bir eseri, müzeyi veya şehri bulmak için üstteki arama çubuğunu kullanabilirsiniz.", helpStep4Title: "Filtreleme", helpStep4Text: "Eserleri; bulunduğu ülkeye, Türkiye'deki köken şehrine veya ait olduğu döneme göre filtreleyerek aramanızı daraltabilirsiniz.", helpStep5Title: "Konum Bulma Oyunu", helpStep5Text: "Oyunun amacı, sorulan eserin o anki harita görünümüne göre yerini tahmin etmektir. Eğer harita \"Ait Olduğu Yer\" modundaysa eserin kökenini, \"Bulunduğu Yer\" modundaysa yurt dışındaki yerini tahmin etmeniz istenir. Doğru tahmin +20, yanlış tahmin -5 puandır.", helpStep6Title: "Ayarlar", helpStep6Text: "Bu menüden harita görünümünü (Ait Olduğu Yer / Bulunduğu Yer), harita türünü (Harita / Uydu), temayı (Açık / Koyu) ve dili (TR / EN) değiştirebilirsiniz.", helpStep7Title: "Harita Kontrolleri", helpStep7Text: "Haritaya yakınlaşmak ve uzaklaşmak için bu kontrol butonlarını kullanabilirsiniz."
        },
        en: {
            pageTitle: "Digital Restitution Map", mapView: "Map View", originLabel: "Place of Origin", returnedLabel: "Current Location", viewType: "View Type", map: "Map", satellite: "Satellite", theme: "Theme", light: "Light", dark: "Dark", language: "Language", filterTitle: "Filter Artifacts", filterReturnedCountry: "Country Located In:", filterOriginCity: "City of Origin (TR):", filterExhibitionCity: "City of Exhibition (TR):", filterPeriod: "Period of Artifact:", applyFilterBtn: "Apply Filter", resetFilterBtn: "Reset Filters", museum: "Museum:", exhibitionPlace: "Exhibition Place:", originPlace: "Place of Origin:", returnedFrom: "Current Location:", period: "Period:", returnDate: "Return Status:", academicInfo: "Academic Summary:", searchPlaceholder: "Search for artifact or museum...", quizTitle: "Location Guessing Game", quizDescription: "Guess the location of artifacts on the map. Each correct guess is 20 points, each wrong guess is -5 points!", quizStartBtn: "Start Game", quizScoreLabel: "Score:", quizQuestionLabel: "Question:", quizEndBtn: "End Game", quizGameOver: "Game Over!", quizFinalScoreLabel: "Final Score:", quizPlayAgainBtn: "Play Again",
            quizQuestionTemplateOrigin: "What is the origin (original place) of the artifact '{eserAdi}'?", quizQuestionTemplateReturned: "Where is the artifact '{eserAdi}' currently located?", quizHintLabel: "Hint: ",
            hintTemplate: "{distance} km to the {direction}.", wrongGuess: "Wrong guess!",
            directions: ['North', 'Northeast', 'East', 'Southeast', 'South', 'Southwest', 'West', 'Northwest'],
            introStep1Title: "Welcome!", introStep1Text: "This map is designed for you to explore our cultural heritage. Let's get to know the features briefly.", tutorialNext: "Next", introStep2Title: "Location Guessing Game", introStep2Text: "With this button, you can play a fun game based on guessing the location of the artifacts.", introStep3Title: "Detailed Help", introStep3Text: "If you want to learn all the features and details, you can click this help button at any time.", introStep4Title: "Start Exploring!", introStep4Text: "You are now ready to explore the map. Have fun!", tutorialEnd: "Explore the Map", tutorialSkip: "Skip Tour",
            helpStep1Title: "Detailed Help", helpStep1Text: "This interactive map is designed for you to explore our cultural heritage. Let's take a detailed look at all the features.", helpStep2Title: "Map and Artifacts", helpStep2Text: "Green circles on the map show artifact groups in that region. Single markers appear as you zoom in. You can click on each marker to access details such as the artifact's origin, the museum where it is exhibited, and its return status.", helpStep3Title: "Search", helpStep3Text: "You can use the search bar at the top to find a specific artifact, museum, or city.", helpStep4Title: "Filtering", helpStep4Text: "You can narrow your search by filtering artifacts by the country they are in, their city of origin in Turkey, or their historical period.", helpStep5Title: "Location Guessing Game", helpStep5Text: "The goal of the game is to guess the location of the asked artifact according to the current map view. If the map is in \"Place of Origin\" mode, you'll be asked to guess its origin; if it's in \"Current Location\" mode, you'll guess its location abroad. A correct guess is +20 points, a wrong guess is -5 points.", helpStep6Title: "Settings", helpStep6Text: "From this menu, you can change the map view (Place of Origin / Current Location), map type (Map / Satellite), theme (Light / Dark), and language (TR / EN).", helpStep7Title: "Map Controls", helpStep7Text: "You can use these control buttons to zoom in and out of the map."
        }
    };

    // YENİ ESERLER DİZİSİ (Target Projesinden Dönüştürülmüş)
    const eserler = [
        {
            id: 1,
            title: "Bronz Papağan", title_en: "Bronze Parrot",
            model: null,
            sergiLat: null, sergiLng: null, // Henüz iade edilmediği için sergi yeri TR'de yok
            sergiSehir: "Berlin", sergiSehir_en: "Berlin",
            museum: "Pergamon Müzesi", museum_en: "Pergamon Museum",
            kokenSehirTR: "Samsun", kokenSehirTR_en: "Samsun",
            kokenLatTR: 41.2867, kokenLngTR: 36.3300,
            iadeSehir: "Berlin", iadeSehir_en: "Berlin",
            iadeUlke: "Almanya", iadeUlke_en: "Germany",
            iadeLat: 52.5200, iadeLng: 13.4050,
            donem: "Bilinmiyor", donem_en: "Unknown",
            iadeYili: "İade Talebi Var", // iadeTalebi yerine burayı kullanıyoruz
            iadeTalebi: "Var",
            image: "eser1.jpg",
            audioSrc: "audio/parrot.mp3", // Örnek ses dosyası
            description: "Samsun'dan kaçırılan bu nadir eser, yasa dışı yollarla yurt dışına çıkarılmıştır. Amacımız dijital iade farkındalığı yaratmaktır.",
            description_en: "This rare artifact smuggled from Samsun was illegally taken abroad. Our aim is to raise awareness for digital restitution.",
            academicDescription: "Eserin akademik detayları henüz eklenmemiştir.",
            academicDescription_en: "Academic details of the artifact have not been added yet."
        },
        {
            id: 2,
            title: "Deneme 1", title_en: "Test Artifact 1",
            model: null,
            sergiLat: null, sergiLng: null,
            sergiSehir: "Londra", sergiSehir_en: "London",
            museum: "British Museum", museum_en: "British Museum",
            kokenSehirTR: "İzmir", kokenSehirTR_en: "Izmir",
            kokenLatTR: 38.4192, kokenLngTR: 27.1287,
            iadeSehir: "Londra", iadeSehir_en: "London",
            iadeUlke: "İngiltere", iadeUlke_en: "UK",
            iadeLat: 51.5195, iadeLng: -0.1269,
            donem: "Bilinmiyor", donem_en: "Unknown",
            iadeYili: "İade Talebi Yok",
            iadeTalebi: "Yok",
            image: "eser2.jpg",
            audioSrc: null,
            description: "Bu eserin iade süreci için çalışmalar devam etmekte olup, henüz bir sonuç alınamamıştır.",
            description_en: "Work is ongoing for the restitution process of this artifact, but no result has been achieved yet.",
            academicDescription: "Eserin akademik detayları henüz eklenmemiştir.",
            academicDescription_en: "Academic details of the artifact have not been added yet."
        },
        {
            id: 3,
            title: "Deneme 2", title_en: "Test Artifact 2",
            model: "models/cube.glb", // Örnek model
            sergiLat: 41.0082, sergiLng: 28.9784, // İade edildiği varsayılırsa TR konumu
            sergiSehir: "Paris", sergiSehir_en: "Paris",
            museum: "Louvre Müzesi", museum_en: "Louvre Museum",
            kokenSehirTR: "İstanbul", kokenSehirTR_en: "Istanbul",
            kokenLatTR: 41.0082, kokenLngTR: 28.9784,
            iadeSehir: "Paris", iadeSehir_en: "Paris",
            iadeUlke: "Fransa", iadeUlke_en: "France",
            iadeLat: 48.8606, iadeLng: 2.3376,
            donem: "Bilinmiyor", donem_en: "Unknown",
            iadeYili: "İade Talebi Var",
            iadeTalebi: "Var",
            image: "eser3.jpg",
            audioSrc: null,
            description: "Uzun süren diplomatik görüşmeler sonucunda bu değerli eser ait olduğu topraklara geri kazandırılmıştır.",
            description_en: "After long diplomatic negotiations, this valuable artifact has been returned to its homeland.",
            academicDescription: "Eserin akademik detayları henüz eklenmemiştir.",
            academicDescription_en: "Academic details of the artifact have not been added yet."
        }
    ];

    // Marker konumunu veren yardımcı fonksiyon
    function getEserLocation(data) {
        let lat, lng;

        if (currentView === 'returned') {
            // 'Bulunduğu Yer' (Yurt dışı veya şu anki konumu)
            lat = data.iadeLat;
            lng = data.iadeLng;
        } else {
            // 'Ait Olduğu Yer' (Türkiye Köken)
            lat = data.kokenLatTR;
            lng = data.kokenLngTR;
        }
        return [lat, lng];
    }

    function initMap() {
        if (map) { map.remove(); }
        map = L.map('map', { zoomControl: false, maxZoom: 18 }).setView([39, 35], 5);
        L.control.zoom({ position: 'topright' }).addTo(map);
        markersLayer = L.markerClusterGroup();
        map.addLayer(markersLayer);
        updateMapTiles();
        createMarkers();
        applyLanguage(currentLang);
        updateSwitchLabels();
        setupEventListeners();

        if (welcomeOverlay.style.display !== 'none' && !localStorage.getItem('hasVisited')) {
            setTimeout(() => {
                startIntroTour();
                localStorage.setItem('hasVisited', 'true');
            }, 50);
        }
    }

    function updateMapTiles() {
        if (tileLayer) { tileLayer.remove(); }
        let tileUrl, attribution;
        if (currentViewType === 'satellite') {
            tileUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
            attribution = 'Tiles &copy; Esri';
        } else {
            tileUrl = currentTheme === 'dark' ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png' : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
            attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        }
        tileLayer = L.tileLayer(tileUrl, { attribution, maxZoom: 20 }).addTo(map);
    }

    function createMarkers() {
        allMarkers = [];
        eserler.forEach(eser => {
            const marker = L.marker(getEserLocation(eser), { icon: GreenIcon, data: eser });
            allMarkers.push({ marker, data: eser });
        });
        resetMarkersToDefault();
    }

    function resetMarkersToDefault() {
        markersLayer.clearLayers();

        allMarkers.forEach(m => {
            if (map.hasLayer(m.marker)) {
                m.marker.remove();
            }
            m.marker.off('click');
            m.marker.unbindPopup();

            const [lat, lng] = getEserLocation(m.data);
            m.marker.setLatLng([lat, lng]);

            const eser = m.data;
            const t = translations[currentLang];
            const displayTitle = currentLang === 'en' ? eser.title_en : eser.title;
            const displayMuseum = currentLang === 'en' ? eser.museum_en : eser.museum;
            const displayOriginCity = currentLang === 'en' ? eser.kokenSehirTR_en : eser.kokenSehirTR;
            const displayReturnedCountry = currentLang === 'en' ? eser.iadeUlke_en : eser.iadeUlke;
            const displayPeriod = currentLang === 'en' ? eser.donem_en : eser.donem;
            const displayAcademicDescription = currentLang === 'en' ? eser.academicDescription_en : eser.academicDescription;
            const displayDescription = currentLang === 'en' ? eser.description_en : eser.description;

            // Iade durumu sınıfı
            const statusClass = eser.iadeTalebi === 'Var' ? 'iade-var' : 'iade-yok';
            const statusText = eser.iadeTalebi === 'Var' ? (currentLang === 'en' ? 'Yes' : 'Var') : (currentLang === 'en' ? 'No' : 'Yok');

            // Audio Player HTML
            const audioHtml = eser.audioSrc ? `<audio controls class="popup-audio"><source src="${eser.audioSrc}" type="audio/mpeg">Tarayıcınız audio elementini desteklemiyor.</audio>` : '';

            const popupContent = `
                <div class="popup-image-container">
                    <img src="${eser.image}" alt="${displayTitle}" class="popup-image">
                    ${eser.model ? `<div class="popup-3d-icon" data-model-src="${eser.model}"><i class="fas fa-cube"></i></div>` : ''}
                </div>
                ${audioHtml}
                <h3>${displayTitle}</h3>
                <p><strong>${t.originPlace}</strong> ${displayOriginCity}</p>
                <p><strong>${t.museum}</strong> ${displayMuseum}, ${eser.sergiSehir}</p>
                <p><strong>${t.returnedFrom}</strong> ${eser.iadeSehir}, ${displayReturnedCountry}</p>
                <p><strong>${t.period}</strong> ${displayPeriod}</p>
                <p><strong>${t.returnDate}</strong> <span class="${statusClass}">${statusText}</span></p>
                <p class="popup-description">${displayDescription}</p>
                <p><strong>${t.academicInfo}</strong> ${displayAcademicDescription}</p>
            `;

            m.marker.bindPopup(popupContent);
            markersLayer.addLayer(m.marker);
        });

        if (!map.hasLayer(markersLayer)) {
            map.addLayer(markersLayer);
        }

        updateDebugCounter();
    }

    function handleMapViewChange(e) { currentView = e.target.checked ? 'returned' : 'origin'; resetMarkersToDefault(); updateSwitchLabels(); }

    function setupEventListeners() {
        document.getElementById('help-icon').addEventListener('click', startTutorial);
        document.getElementById('map-view-switch').addEventListener('change', handleMapViewChange);
        document.getElementById('quiz-toggle-btn').addEventListener('click', () => { quizPanel.classList.toggle('hidden'); if (quizPanel.classList.contains('hidden') && gameState.isActive) { endQuiz(); } else { quizGameScreen.classList.add('hidden'); quizEndScreen.classList.add('hidden'); quizStartScreen.classList.remove('hidden'); } });
        startQuizBtn.addEventListener('click', startQuiz);
        endQuizBtn.addEventListener('click', endQuiz);
        playAgainBtn.addEventListener('click', startQuiz);
        closeModelViewerBtn.addEventListener('click', closeModelViewer);
        document.getElementById('settings-icon').addEventListener('click', (e) => { settingsDropdown.classList.toggle('hidden'); e.stopPropagation(); });
        document.getElementById('filter-icon').addEventListener('click', (e) => { filterModal.classList.toggle('hidden'); e.stopPropagation(); });
        document.getElementById('apply-filter-btn').addEventListener('click', applyFilters);
        document.getElementById('reset-filter-btn').addEventListener('click', resetFilters);
        document.getElementById('view-type-switch').addEventListener('change', handleViewTypeChange);
        document.getElementById('theme-switch').addEventListener('change', handleThemeChange);
        document.getElementById('lang-switch').addEventListener('change', handleLangChange);
        searchInput.addEventListener('input', handleSearch);
        searchResultsContainer.addEventListener('click', handleSearchResultClick);
        introTourOverlay.addEventListener('click', handleIntroTourClick);
        tutorialOverlay.addEventListener('click', handleTutorialClick);

        map.on('popupopen', (e) => {
            const popupNode = e.popup.getElement();
            const icon3d = popupNode.querySelector('.popup-3d-icon');
            if (icon3d) {
                icon3d.addEventListener('click', () => {
                    openModelViewer(icon3d.dataset.modelSrc);
                });
            }
        });

        if (closeWelcomeButton && welcomeOverlay) {
            closeWelcomeButton.addEventListener('click', () => {
                welcomeOverlay.style.display = 'none';
                if (map) { map.invalidateSize(); }
            });
        }

        if (openHelpButton) {
            openHelpButton.addEventListener('click', () => {
                if (welcomeOverlay) {
                    welcomeOverlay.style.display = 'none';
                }
                startTutorial();
            });
        }

        if (startGameButton) {
            startGameButton.addEventListener('click', () => {
                if (welcomeOverlay) {
                    welcomeOverlay.style.display = 'none';
                }
                quizPanel.classList.remove('hidden');
                quizGameScreen.classList.add('hidden');
                quizEndScreen.classList.add('hidden');
                quizStartScreen.classList.remove('hidden');
                if (map) { map.invalidateSize(); }
            });
        }

        markersLayer.on('click', (e) => {
            if (gameState.isActive) {
                if (e.layer && e.layer.options && e.layer.options.data) {
                    handleMarkerGuess({ latlng: e.latlng, targetEserData: e.layer.options.data });
                }
            }
        });

        markersLayer.on('clusterclick', (a) => {
            if (gameState.isActive) {
                handleMarkerGuess({ latlng: a.latlng, targetEserData: a.layer.getAllChildMarkers()[0].options.data });
            }
        });

        map.on('click', handleMapGuess);
    }

    function updateSwitchLabels() {
        const update = (switchId, condition, labels) => {
            const switchEl = document.getElementById(switchId);
            if (switchEl && labels && labels.length === 2) {
                switchEl.checked = condition;
                labels[0].classList.toggle('active', !condition);
                labels[1].classList.toggle('active', condition);
            }
        };
        update('map-view-switch', currentView === 'returned', document.querySelectorAll('.setting-group:nth-child(1) .switch-label'));
        update('view-type-switch', currentViewType === 'satellite', document.querySelectorAll('.setting-group:nth-child(2) .switch-label'));
        update('theme-switch', currentTheme === 'dark', document.querySelectorAll('.setting-group:nth-child(3) .switch-label'));
        update('lang-switch', currentLang === 'en', document.querySelectorAll('.setting-group:nth-child(4) .switch-label'));
    }

    function startQuiz() {
        gameState.isActive = true;
        gameState.score = 0;
        gameState.currentQuestionIndex = 0;

        // Eser sayısı 5'ten azsa mevcut kadar soru sor
        const questionCount = Math.min(eserler.length, gameState.totalQuestions);
        gameState.questions = [...eserler].sort(() => 0.5 - Math.random()).slice(0, questionCount);

        quizStartScreen.classList.add('hidden'); quizEndScreen.classList.add('hidden'); quizGameScreen.classList.remove('hidden');
        document.body.classList.add('quiz-active'); quizPanel.classList.remove('hidden');

        resetMarkersToDefault();

        nextQuestion();
    }

    function endQuiz() {
        gameState.isActive = false;
        quizGameScreen.classList.add('hidden'); quizEndScreen.classList.remove('hidden');
        document.getElementById('quiz-final-score').textContent = gameState.score;
        document.body.classList.remove('quiz-active');
        quizHintTextEl.classList.add('hidden');
        resetMarkersToDefault();
    }

    function nextQuestion() {
        if (gameState.currentQuestionIndex >= gameState.questions.length) { endQuiz(); return; }
        map.closePopup();

        const questionData = gameState.questions[gameState.currentQuestionIndex];
        gameState.targetEserId = questionData.id;

        const [targetLat, targetLng] = getEserLocation(questionData);
        gameState.targetLocation = { lat: targetLat, lng: targetLng };

        const t = translations[currentLang];
        const eserAdi = currentLang === 'en' ? questionData.title_en : questionData.title;
        let questionText;

        if (currentView === 'returned') {
            questionText = t.quizQuestionTemplateReturned.replace('{eserAdi}', eserAdi);
        } else {
            questionText = t.quizQuestionTemplateOrigin.replace('{eserAdi}', eserAdi);
        }

        quizQuestionTextEl.textContent = questionText;
        const hintDescriptionTR = questionData.description;
        const hintDescriptionEN = questionData.description_en;

        quizHintTextEl.textContent = t.quizHintLabel + (currentLang === 'en' ? hintDescriptionEN : hintDescriptionTR);
        quizHintTextEl.classList.remove('hidden');
        quizScoreEl.textContent = gameState.score;
        quizQuestionCounterEl.textContent = `${gameState.currentQuestionIndex + 1} / ${gameState.questions.length}`;

        map.flyToBounds([[36, 26], [52, 13]]); // Avrupa'yı da kapsayacak şekilde genişletildi
    }

    function handleMarkerGuess(e) {
        if (!gameState.isActive) return;

        const clickedLatLng = e.latlng;
        const targetLat = gameState.targetLocation.lat;
        const targetLng = gameState.targetLocation.lng;

        const isCorrectLocation = (Math.abs(clickedLatLng.lat - targetLat) < 0.0001) &&
                                  (Math.abs(clickedLatLng.lng - targetLng) < 0.0001);

        if (isCorrectLocation) {
            gameState.score += 20;
            quizScoreEl.textContent = gameState.score;

            L.popup()
                .setLatLng(clickedLatLng)
                .setContent(`<h3>🎉 Tebrikler, doğru tahmin! 🎉</h3>`)
                .openOn(map);

            gameState.currentQuestionIndex++;
            setTimeout(nextQuestion, 2000);
        } else {
            gameState.score -= 5;
            quizScoreEl.textContent = gameState.score;
            const t = translations[currentLang];

            L.popup()
                .setLatLng(clickedLatLng)
                .setContent(`<h3>${t.wrongGuess}</h3>`)
                .openOn(map);
        }
    }

    function handleMapGuess(e) {
        if (!gameState.isActive) return;

        gameState.score -= 5;
        quizScoreEl.textContent = gameState.score;

        const distance = calculateDistance(e.latlng, gameState.targetLocation);
        const bearing = calculateBearing(e.latlng, gameState.targetLocation);
        const direction = bearingToDirection(bearing, currentLang);
        const t = translations[currentLang];

        const hint = t.hintTemplate
            .replace('{distance}', Math.round(distance))
            .replace('{direction}', direction);

        L.popup()
            .setLatLng(e.latlng)
            .setContent(hint)
            .openOn(map);
    }

    function calculateDistance(from, to) { const R = 6371; const dLat = (to.lat - from.lat) * Math.PI / 180; const dLon = (to.lng - from.lng) * Math.PI / 180; const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(from.lat * Math.PI / 180) * Math.cos(to.lat * Math.PI / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2); const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); return R * c; }
    function calculateBearing(from, to) { const lat1 = from.lat * Math.PI / 180; const lon1 = from.lng * Math.PI / 180; const lat2 = to.lat * Math.PI / 180; const lon2 = to.lng * Math.PI / 180; const y = Math.sin(lon2 - lon1) * Math.cos(lat2); const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1); const brng = Math.atan2(y, x) * 180 / Math.PI; return (brng + 360) % 360; }
    function bearingToDirection(bearing, lang) { const t = translations[lang]; const index = Math.round(bearing / 45) % 8; return t.directions[index]; }
    function openModelViewer(modelSrc) { modelViewerModal.classList.remove('hidden'); setTimeout(() => { artifactModelViewer.src = modelSrc; }, 50); }
    function closeModelViewer() { modelViewerModal.classList.add('hidden'); artifactModelViewer.pause(); artifactModelViewer.src = ''; }
    function handleViewTypeChange(e) { currentViewType = e.target.checked ? 'satellite' : 'map'; updateMapTiles(); updateSwitchLabels(); }
    function handleThemeChange(e) { currentTheme = e.target.checked ? 'dark' : 'light'; document.body.classList.toggle('dark-mode', currentTheme === 'dark'); updateMapTiles(); updateSwitchLabels(); }
    function handleLangChange(e) { currentLang = e.target.checked ? 'en' : 'tr'; updateSwitchLabels(); applyLanguage(currentLang); }
    function applyLanguage(lang) { currentLang = lang; document.querySelectorAll('[data-lang-key]').forEach(el => { const key = el.getAttribute('data-lang-key'); if(translations[lang][key]) el.textContent = translations[lang][key]; }); populateFilters(); resetMarkersToDefault(); }
    function handleSearch(event) { const searchTerm = event.target.value.toLowerCase().trim(); searchResultsContainer.innerHTML = ''; if (searchTerm.length < 2) { searchResultsContainer.classList.add('hidden'); return; } const matches = eserler.map(eser => { let score = 0; if ((eser.title.toLowerCase().includes(searchTerm)) || (eser.title_en.toLowerCase().includes(searchTerm))) score += 10; if ((eser.museum.toLowerCase().includes(searchTerm)) || (eser.museum_en.toLowerCase().includes(searchTerm))) score += 5; if ((eser.sergiSehir.toLowerCase().includes(searchTerm)) || (eser.sergiSehir_en.toLowerCase().includes(searchTerm))) score += 2; return { eser, score }; }).filter(item => item.score > 0).sort((a, b) => b.score - a.score); if (matches.length > 0) { matches.forEach(item => { const displayTitle = currentLang === 'en' ? item.eser.title_en : item.eser.title; const displayMuseum = currentLang === 'en' ? item.eser.museum_en : item.eser.museum; const resultDiv = document.createElement('div'); resultDiv.className = 'search-result-item'; resultDiv.dataset.eserId = item.eser.id; resultDiv.innerHTML = `<h4>${displayTitle}</h4><p>${displayMuseum}</p>`; searchResultsContainer.appendChild(resultDiv); }); searchResultsContainer.classList.remove('hidden'); } else { searchResultsContainer.classList.add('hidden'); } }
    function handleSearchResultClick(event) { const resultItem = event.target.closest('.search-result-item'); if (!resultItem) return; const eserId = parseInt(resultItem.dataset.eserId); const found = allMarkers.find(item => item.data.id === eserId); if (found) { const displayTitle = currentLang === 'en' ? found.data.title_en : found.data.title; if (gameState.isActive) { map.flyTo(found.marker.getLatLng(), 15); found.marker.openPopup(); } else { markersLayer.zoomToShowLayer(found.marker, () => { found.marker.openPopup(); }); } searchInput.value = displayTitle; searchResultsContainer.classList.add('hidden'); } }

    function populateFilters() {
        const lang = currentLang;
        const uniqueCountries = [...new Set(eserler.map(e => lang === 'en' ? e.iadeUlke_en : e.iadeUlke))].sort();
        document.getElementById('country-filter-container').innerHTML = uniqueCountries.map(c => `<div><input type="checkbox" id="country-${c.replace(/\s+/g, '-')}" value="${c}"><label for="country-${c.replace(/\s+/g, '-')}">${c}</label></div>`).join('');

        const uniqueOriginCities = [...new Set(eserler.map(e => lang === 'en' ? e.kokenSehirTR_en : e.kokenSehirTR))].sort();
        document.getElementById('origin-city-filter-container').innerHTML = uniqueOriginCities.map(c => `<div><input type="checkbox" id="origin-city-${c.replace(/\s+/g, '-')}" value="${c}"><label for="origin-city-${c.replace(/\s+/g, '-')}">${c}</label></div>`).join('');

        const uniqueExhibitionCities = [...new Set(eserler.map(e => lang === 'en' ? e.sergiSehir_en : e.sergiSehir))].sort();
        document.getElementById('exhibition-city-filter-container').innerHTML = uniqueExhibitionCities.map(c => `<div><input type="checkbox" id="exhibition-city-${c.replace(/\s+/g, '-')}" value="${c}"><label for="exhibition-city-${c.replace(/\s+/g, '-')}">${c}</label></div>`).join('');

        const uniquePeriods = [...new Set(eserler.map(e => lang === 'en' ? e.donem_en : e.donem))].sort();
        document.getElementById('period-filter-container').innerHTML = uniquePeriods.map(p => `<div><input type="checkbox" id="period-${p.replace(/\s+/g, '-')}" value="${p}"><label for="period-${p.replace(/\s+/g, '-')}">${p}</label></div>`).join('');
    }

    function applyFilters() {
        const lang = currentLang;
        const selectedCountries = Array.from(document.querySelectorAll('#country-filter-container input:checked')).map(cb => cb.value);
        const selectedOriginCities = Array.from(document.querySelectorAll('#origin-city-filter-container input:checked')).map(cb => cb.value);
        const selectedExhibitionCities = Array.from(document.querySelectorAll('#exhibition-city-filter-container input:checked')).map(cb => cb.value);
        const selectedPeriods = Array.from(document.querySelectorAll('#period-filter-container input:checked')).map(cb => cb.value);

        markersLayer.clearLayers();
        const filteredMarkers = allMarkers.filter(item => {
            const data = item.data;
            const countryMatch = selectedCountries.length === 0 || selectedCountries.includes(lang === 'en' ? data.iadeUlke_en : data.iadeUlke);
            const originCityMatch = selectedOriginCities.length === 0 || selectedOriginCities.includes(lang === 'en' ? data.kokenSehirTR_en : data.kokenSehirTR);
            const exhibitionCityMatch = selectedExhibitionCities.length === 0 || selectedExhibitionCities.includes(lang === 'en' ? data.sergiSehir_en : data.sergiSehir);
            const periodMatch = selectedPeriods.length === 0 || selectedPeriods.includes(lang === 'en' ? data.donem_en : data.donem);
            return countryMatch && originCityMatch && exhibitionCityMatch && periodMatch;
        });

        filteredMarkers.forEach(item => markersLayer.addLayer(item.marker));
        if (filteredMarkers.length > 0 && markersLayer.getBounds().isValid()) { map.flyToBounds(markersLayer.getBounds().pad(0.2)); }
        filterModal.classList.add('hidden');
        updateDebugCounter();
    }

    function resetFilters() { document.querySelectorAll('#filter-modal input[type="checkbox"]').forEach(cb => cb.checked = false); resetMarkersToDefault(); if (markersLayer.getBounds().isValid()){ map.flyToBounds(markersLayer.getBounds().pad(0.2)); } filterModal.classList.add('hidden'); }

    let currentIntroStep = 0;
    function startIntroTour() { currentIntroStep = 1; introTourOverlay.classList.remove('hidden'); showIntroStep(currentIntroStep); }
    function showIntroStep(step) { introTourOverlay.querySelectorAll('.tutorial-step').forEach(s => s.style.display = 'none'); const el = introTourOverlay.querySelector(`.tutorial-step[data-step="${step}"]`); if (el) el.style.display = 'block'; }
    function handleIntroTourClick(event) { if (event.target.classList.contains('tutorial-next')) { currentIntroStep++; showIntroStep(currentIntroStep); } else if (event.target.classList.contains('tutorial-end') || event.target.id === 'intro-skip-btn') { introTourOverlay.classList.add('hidden'); } }

    let currentTutorialStep = 0;
    function startTutorial() { currentTutorialStep = 1; tutorialOverlay.classList.remove('hidden'); showTutorialStep(currentTutorialStep); }
    function showTutorialStep(step) { tutorialOverlay.querySelectorAll('.tutorial-step').forEach(s => s.style.display = 'none'); const el = tutorialOverlay.querySelector(`.tutorial-step[data-step="${step}"]`); if (el) el.style.display = 'block'; }
    function handleTutorialClick(event) { if (event.target.classList.contains('tutorial-next')) { currentTutorialStep++; showTutorialStep(currentTutorialStep); } else if (event.target.classList.contains('tutorial-end') || event.target.id === 'tutorial-skip-btn') { tutorialOverlay.classList.add('hidden'); } }

    function updateDebugCounter() { const visibleMarkers = gameState.isActive ? (map.getPane('markerPane')?.children.length || 0) : markersLayer.getLayers().length; const totalMarkers = allMarkers.length; if(debugCounter) { debugCounter.textContent = `Görünen Eser: ${visibleMarkers} / ${totalMarkers}`; } }

    initMap();
});