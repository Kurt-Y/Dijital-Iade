// --- DATA SECTION ---
// EXACTLY as provided in the requirements
const artifacts = [ 
  // --- KNOWN CAPTIVES (Examples for "Repatriation" Logic) --- 
  { 
    id: 101, 
    title: "Zeus Sunağı", 
    originCity: "Bergama", 
    originCoords: [39.1220, 27.1810], 
    currentLocation: "Berlin, Almanya", 
    currentCoords: [52.5206, 13.3969], 
    status: "Esaret Altında", 
    museum: "Pergamon Museum", 
    description: "Bergama Akropolü'nden parça parça kaçırılarak Berlin'e götürülen devasa sunak.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Pergamon_Museum_Berlin_2007073.jpg/800px-Pergamon_Museum_Berlin_2007073.jpg", 
    type: "captive" 
  }, 
  { 
    id: 102, 
    title: "Nereidler Anıtı", 
    originCity: "Antalya (Xanthos)", 
    originCoords: [36.3533, 29.3186], 
    currentLocation: "Londra, İngiltere", 
    currentCoords: [51.5194, -0.1270], 
    status: "Esaret Altında", 
    museum: "British Museum", 
    description: "Xanthos antik kentinden sökülüp İngiltere'ye taşınan anıt mezar.", 
    image: "https://upload.wikimedia.org/wikipedia/commons/3/34/Nereid_Monument_British_Museum.jpg", 
    type: "captive" 
  }, 
  // --- MISSING / STOLEN (From User CSV) --- 
  { 
    id: 1, 
    title: "Çeşme Mimari Süsleme", 
    originCity: "Samsun", 
    originCoords: [41.2867, 36.33], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Çalındı / Aranıyor", 
    museum: "Tespit Edilemedi", 
    description: "Samsun Alaçam ilçesindeki tarihi çeşmeden çalınan Osmanlı dönemi (1899) mimari süsleme parçası.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30084,cesmejpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 2, 
    title: "Roma Dönemi Mezar Steli", 
    originCity: "Gaziantep", 
    originCoords: [37.0662, 37.3833], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Kayboldu", 
    museum: "Tespit Edilemedi", 
    description: "Gaziantep İslahiye ilçesinden kaybolan Roma dönemine ait taşınmaz kültür varlığı.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30085,mezarstelijpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 3, 
    title: "Ejder Başı Kabartması", 
    originCity: "İstanbul", 
    originCoords: [41.0082, 28.9784], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Kayboldu", 
    museum: "Tespit Edilemedi", 
    description: "Galatasaray Lisesi girişinden çalınan 19. yüzyıl ejder başı figürü.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30086,ejderbasijpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 4, 
    title: "Bronz Döküm Şebeke", 
    originCity: "İstanbul", 
    originCoords: [41.0122, 28.9764], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Çalındı", 
    museum: "Tespit Edilemedi", 
    description: "İstanbul'da tarihi bir yapıdan sökülerek çalınan 17. yüzyıl bronz şebeke parçası.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30087,sebekejpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 14, 
    title: "Taban Mozaiği", 
    originCity: "Şanlıurfa", 
    originCoords: [37.1591, 38.7969], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Çalındı", 
    museum: "Tespit Edilemedi", 
    description: "Şanlıurfa ilinden yasadışı kazılarla çıkarılıp kaçırılan Roma dönemi taban mozaiği.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30088,mukimijpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 15, 
    title: "Mermer Çeşme Yalağı", 
    originCity: "İstanbul (Sarıyer)", 
    originCoords: [41.1182, 29.0526], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Çalındı", 
    museum: "Tespit Edilemedi", 
    description: "Şerifler Yalısı'ndan çalınan 19. yüzyıl ortalarına ait mermer çeşme yalağı.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30089,yalakjpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 16, 
    title: "Koç Şekilli Mezar Taşı", 
    originCity: "Tunceli", 
    originCoords: [39.1080, 39.5483], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Çalındı", 
    museum: "Tespit Edilemedi", 
    description: "Tunceli Pülümür ilçesi Sağlamtaş köyünden çalınan Akkoyunlu/Osmanlı geleneği mezar taşı.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30090,kocsekillijpg.png?0", 
    type: "missing" 
  }, 
  { 
    id: 17, 
    title: "Hançerli Lahit (Sanduka)", 
    originCity: "İstanbul (Eyüp)", 
    originCoords: [41.0470, 28.9331], 
    currentLocation: "Bilinmiyor", 
    currentCoords: null, 
    status: "Çalındı", 
    museum: "Tespit Edilemedi", 
    description: "Eyüp Sultan Camii haziresinden çalınan, üzerinde hançer kabartması bulunan Osmanlı mezar sandukası.", 
    image: "https://kvmgm.ktb.gov.tr/Resim/30091,hancerlijpg.png?0", 
    type: "missing" 
  } 
];

// --- MAP INIT ---
let map;
let markers = []; // To store marker references

function initMap() {
    // Initialize Leaflet map
    map = L.map('map', {
        center: [39.0, 35.0], // Center on Turkey
        zoom: 6,
        zoomControl: false // Move zoom control to custom position if needed, or keep default
    });

    // Add CartoDB Dark Matter tiles (High contrast)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // Zoom control top-right
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    // Process artifacts
    processArtifacts();
    
    // Update stats
    updateStats();
}

function processArtifacts() {
    // Custom Icons
    const redIcon = L.divIcon({
        className: 'captive-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    const greyIcon = L.divIcon({
        className: 'missing-marker',
        html: '<div class="marker-pin"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    // Loop through artifacts
    artifacts.forEach(artifact => {
        let marker;
        let popupContent = createPopupContent(artifact);

        if (artifact.type === 'captive') {
            // RED Marker at Current Location (Museum)
            if (artifact.currentCoords) {
                marker = L.marker(artifact.currentCoords, { icon: redIcon }).addTo(map);
                
                // Draw line from Origin -> Current
                const latlngs = [
                    artifact.originCoords,
                    artifact.currentCoords
                ];
                
                const polyline = L.polyline(latlngs, {
                    color: '#e74c3c', // Red
                    weight: 2,
                    opacity: 0.6,
                    dashArray: '5, 10'
                }).addTo(map);

                // Add small circle at origin to show where it came from
                L.circleMarker(artifact.originCoords, {
                    radius: 4,
                    color: '#e74c3c',
                    fillColor: '#e74c3c',
                    fillOpacity: 0.5
                }).addTo(map).bindPopup(`<b>${artifact.originCity}</b><br>Eserin çıkarıldığı yer.`);
            }

        } else if (artifact.type === 'missing') {
            // GREY PULSING Marker at Origin City
            if (artifact.originCoords) {
                marker = L.marker(artifact.originCoords, { icon: greyIcon }).addTo(map);
            }
        }

        if (marker) {
            marker.bindPopup(popupContent);
            
            // Store reference for search
            markers.push({
                id: artifact.id,
                marker: marker,
                data: artifact
            });
        }
    });
}

function createPopupContent(artifact) {
    const statusClass = artifact.type === 'captive' ? 'status-captive' : 'status-missing';
    
    // Clean up image link if markdown format was copied accidentally
    let imageUrl = artifact.image;
    if (imageUrl.startsWith('[') && imageUrl.includes('](')) {
        // Extract URL from markdown format [url](url)
        const match = imageUrl.match(/\((.*?)\)/);
        if (match && match[1]) {
            imageUrl = match[1];
        }
    }

    return `
        <div class="popup-content">
            <img src="${imageUrl}" class="popup-image" alt="${artifact.title}" onerror="this.src='https://via.placeholder.com/280x160?text=Görsel+Yok'">
            <div class="popup-info">
                <h3>${artifact.title}</h3>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${artifact.originCity} ${artifact.currentLocation !== 'Bilinmiyor' ? ' <i class="fas fa-arrow-right"></i> ' + artifact.currentLocation : ''}
                </div>
                <div class="status ${statusClass}">
                    ${artifact.status}
                </div>
                <div class="description">
                    ${artifact.description}
                </div>
            </div>
        </div>
    `;
}

function updateStats() {
    const captiveCount = artifacts.filter(a => a.type === 'captive').length;
    const missingCount = artifacts.filter(a => a.type === 'missing').length;

    document.getElementById('captive-count').innerText = captiveCount;
    document.getElementById('missing-count').innerText = missingCount;
}

// --- SEARCH ENGINE ---
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

function performSearch() {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; // Clear results

    if (query.length < 2) {
        searchResults.classList.add('hidden');
        return;
    }

    const filtered = artifacts.filter(a => 
        a.title.toLowerCase().includes(query) || 
        a.originCity.toLowerCase().includes(query) || 
        a.description.toLowerCase().includes(query)
    );

    if (filtered.length > 0) {
        searchResults.classList.remove('hidden');
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML = `
                <h4>${item.title}</h4>
                <p>${item.originCity}</p>
            `;
            div.onclick = () => {
                zoomToArtifact(item.id);
                searchResults.classList.add('hidden');
                searchInput.value = item.title;
            };
            searchResults.appendChild(div);
        });
    } else {
        searchResults.classList.add('hidden');
    }
}

function zoomToArtifact(id) {
    const found = markers.find(m => m.id === id);
    if (found) {
        const coords = found.data.type === 'captive' ? found.data.currentCoords : found.data.originCoords;
        if (coords) {
            map.flyTo(coords, 14, {
                animate: true,
                duration: 1.5
            });
            found.marker.openPopup();
        }
    }
}

// Search Event Listeners
searchInput.addEventListener('input', performSearch);
searchBtn.addEventListener('click', performSearch);

// Welcome Overlay
document.getElementById('explore-btn').addEventListener('click', () => {
    document.getElementById('welcome-overlay').classList.add('hidden');
});

// Initialize
document.addEventListener('DOMContentLoaded', initMap);
