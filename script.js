// --- YARDIMCI VERİ OBJELERİ (Dil Desteği İçin) ---
const dates = {
    osmanli: { tr: "Osmanlı Dönemi", en: "Ottoman Period", de: "Osmanische Zeit", ar: "العهد العثماني", es: "Período Otomano", ru: "Османский период" },
    roma: { tr: "Roma Dönemi", en: "Roman Period", de: "Römische Zeit", ar: "العهد الروماني", es: "Período Romano", ru: "Римский период" },
    bizans: { tr: "Bizans Dönemi", en: "Byzantine Period", de: "Byzantinische Zeit", ar: "العهد البيزنطي", es: "Período Bizantino", ru: "Византийский период" },
    selcuklu: { tr: "Selçuklu Dönemi", en: "Seljuk Period", de: "Seldschukische Zeit", ar: "العهد السلجوقي", es: "Período Selyúcida", ru: "Сельджукский период" },
    yy19: { tr: "19. Yüzyıl", en: "19th Century", de: "19. Jahrhundert", ar: "القرن التاسع عشر", es: "Siglo XIX", ru: "19 век" },
    yy17: { tr: "17. Yüzyıl", en: "17th Century", de: "17. Jahrhundert", ar: "القرن السابع عشر", es: "Siglo XVII", ru: "17 век" },
    yy10: { tr: "10. Yüzyıl", en: "10th Century", de: "10. Jahrhundert", ar: "القرن العاشر", es: "Siglo X", ru: "10 век" },
    belirsiz: { tr: "Belirsiz / Karışık", en: "Uncertain / Mixed", de: "Ungewiss", ar: "غير مؤكد", es: "Incierto", ru: "Неопределенный" }
};

// --- ESER VERİTABANI (21 ADET - AKADEMİK) ---
const artifacts = [
    { 
        id: 1, 
        title: { tr: "Çeşme Mimari Süsleme", en: "Fountain Architectural Ornament", de: "Architektonisches Brunnenornament", ar: "زخرفة معمارية للنافورة", es: "Ornamento Arquitectónico de Fuente", ru: "Архитектурный орнамент фонтана" },
        city: "Samsun", date: dates.osmanli,
        coords: [41.6166, 35.6000], 
        media: { img: "assets/cesme.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44502/samsun-ili-alacam-ilcesindeki-cesmesinden-calinan-mimari-susleme.html",
        clue: { tr: "Geç Osmanlı su mimarisi bezemesi.", en: "Late Ottoman water architecture decoration.", de: "Spätosmanische Wasserarchitekturdekoration.", ar: "زخرفة العمارة المائية العثمانية المتأخرة.", es: "Decoración de arquitectura hidráulica otomana tardía.", ru: "Декор водной архитектуры поздней Османской империи." },
        desc: { 
            tr: "Samsun'un Alaçam ilçesindeki tescilli bir tarihi çeşmeye ait olan bu mermer süsleme parçası, 19. yüzyıl sonu Osmanlı 'Batılılaşma Dönemi' taş işçiliğinin karakteristik özelliklerini yansıtır. Barok ve Ampir üsluplarının yerel bir sentezi olan eserde, akantus yaprakları ve rozet motifleri derin oyma tekniğiyle işlenmiştir. Eser, bölgedeki sivil mimarinin estetik gelişimini belgeleyen önemli bir mimari plastik örneğidir.", 
            en: "This marble ornamental fragment, belonging to a registered historical fountain in the Alaçam district of Samsun, reflects the characteristic features of late 19th-century Ottoman 'Westernization Period' stone masonry. In the work, which is a local synthesis of Baroque and Empire styles, acanthus leaves and rosette motifs are crafted with deep carving technique. The artifact is a significant architectural plastic example documenting the aesthetic development of civil architecture in the region.", 
            de: "Dieses marmorne Ornamentfragment, das zu einem registrierten historischen Brunnen im Bezirk Alaçam in Samsun gehört, spiegelt die charakteristischen Merkmale der osmanischen Steinmetzkunst der 'Verwestlichungsperiode' des späten 19. Jahrhunderts wider. In dem Werk, das eine lokale Synthese aus Barock- und Empire-Stilen darstellt, sind Akanthusblätter und Rosettenmotive in tiefer Schnitztechnik gearbeitet. Das Artefakt ist ein bedeutendes architektonisches plastisches Beispiel, das die ästhetische Entwicklung der zivilen Architektur in der Region dokumentiert.", 
            ar: "هذه القطعة الزخرفية الرخامية، التي تنتمي إلى نافورة تاريخية مسجلة في منطقة ألاتشام في سامسون، تعكس الخصائص المميزة للبناء الحجري العثماني في 'فترة التغريب' في أواخر القرن التاسع عشر. في هذا العمل، الذي يعد توليفة محلية من طرازي الباروك والإمبراطورية، تم صياغة أوراق الأقنثة وزخارف الوردة بتقنية النحت العميق. تعتبر القطعة الأثرية مثالاً معمارياً بلاستيكياً مهماً يوثق التطور الجمالي للعمارة المدنية في المنطقة.", 
            es: "Este fragmento ornamental de mármol, perteneciente a una fuente histórica registrada en el distrito de Alaçam en Samsun, refleja las características distintivas de la mampostería otomana del 'Período de Occidentalización' de finales del siglo XIX. En la obra, que es una síntesis local de los estilos Barroco e Imperio, las hojas de acanto y los motivos de roseta están elaborados con una técnica de tallado profundo. El artefacto es un ejemplo plástico arquitectónico significativo que documenta el desarrollo estético de la arquitectura civil en la región.", 
            ru: "Этот мраморный орнаментальный фрагмент, принадлежащий зарегистрированному историческому фонтану в районе Алачам в Самсуне, отражает характерные черты османской каменной кладки «Периода вестернизации» конца 19 века. В работе, представляющей собой местный синтез стилей барокко и ампир, листья аканта и мотивы розеток выполнены в технике глубокой резьбы. Артефакт является важным архитектурным пластическим примером, документирующим эстетическое развитие гражданской архитектуры в регионе." 
        }
    },
    { 
        id: 2, 
        title: { tr: "Mezar Steli", en: "Funerary Stele", de: "Grabstele", ar: "شاهد قبر", es: "Estela Funeraria", ru: "Погребальная стела" },
        city: "Gaziantep", date: dates.roma,
        coords: [37.0250, 36.6333], 
        media: { img: "assets/mezarsteli.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-404201/gaziantep-ili-islahiye-ilcesinden-kaybolan-1-adet-mezar-steli.html",
        clue: { tr: "Zeugma etkisi taşıyan kireçtaşı mezar anıtı.", en: "Limestone grave monument with Zeugma influence.", de: "Kalkstein-Grabdenkmal mit Zeugma-Einfluss.", ar: "نصب قبر من الحجر الجيري بتأثير زيوغما.", es: "Monumento funerario de piedra caliza con influencia de Zeugma.", ru: "Известняковый могильный памятник с влиянием Зевгмы." },
        desc: { 
            tr: "Gaziantep İslahiye bölgesinde ele geçirilen bu kireçtaşı mezar steli, Roma İmparatorluk Dönemi'ne (MS 2.-3. yüzyıl) tarihlenmektedir. Antik Zeugma ve çevresindeki atölyelerin üslup özelliklerini taşıyan eserde, ölen kişinin sağlığındaki statüsünü betimleyen figüratif kabartmalar ve Grekçe bir yazıt bulunmaktadır. Eser, bölgenin yerel kültürü ile Roma ölü gömme geleneklerinin (nekropol) kaynaşmasını göstermesi açısından arkeolojik öneme sahiptir.", 
            en: "This limestone funerary stele, recovered in the Gaziantep İslahiye region, dates to the Roman Imperial Period (2nd-3rd century AD). Bearing the stylistic features of workshops in Ancient Zeugma and its surroundings, the artifact features figurative reliefs depicting the deceased's status in life and a Greek inscription. The artifact is archaeologically significant for demonstrating the fusion of the region's local culture with Roman burial traditions (necropolis).", 
            de: "Diese in der Region Gaziantep İslahiye geborgene Grabstele aus Kalkstein datiert in die römische Kaiserzeit (2.-3. Jahrhundert n. Chr.). Das Artefakt, das die stilistischen Merkmale von Werkstätten im antiken Zeugma und seiner Umgebung trägt, weist figurative Reliefs auf, die den Status des Verstorbenen im Leben darstellen, sowie eine griechische Inschrift. Das Artefakt ist archäologisch bedeutsam, da es die Verschmelzung der lokalen Kultur der Region mit römischen Bestattungstraditionen (Nekropole) demonstriert.", 
            ar: "يعود تاريخ لوحة القبر الجيرية هذه، التي تم استعادتها في منطقة إصلاحية بغازي عنتاب، إلى العصر الإمبراطوري الروماني (القرن الثاني والثالث الميلادي). يحمل الأثر الميزات الأسلوبية لورش العمل في زيوغما القديمة ومحيطها، ويتميز بنقوش تصويرية تصور مكانة المتوفى في الحياة ونقش يوناني. يعتبر الأثر مهماً من الناحية الأثرية لإظهار اندماج الثقافة المحلية للمنطقة مع تقاليد الدفن الرومانية (المقبرة).", 
            es: "Esta estela funeraria de piedra caliza, recuperada en la región de Gaziantep İslahiye, data del Período Imperial Romano (siglos II-III d.C.). Con las características estilísticas de los talleres de la antigua Zeugma y sus alrededores, el artefacto presenta relieves figurativos que representan el estatus del difunto en vida y una inscripción griega. El artefacto es arqueológicamente significativo por demostrar la fusión de la cultura local de la región con las tradiciones funerarias romanas (necrópolis).", 
            ru: "Эта известняковая погребальная стела, обнаруженная в регионе Газиантеп Ислахие, датируется периодом Римской империи (2-3 века н.э.). Неся стилистические особенности мастерских древней Зевгмы и ее окрестностей, артефакт содержит фигуративные рельефы, изображающие статус умершего при жизни, и греческую надпись. Артефакт имеет археологическое значение, так как демонстрирует слияние местной культуры региона с римскими погребальными традициями (некрополь)." 
        }
    },
    { 
        id: 3, 
        title: { tr: "Ejder Başı Kabartması", en: "Dragon Head Relief", de: "Drachenkopf-Relief", ar: "نحت رأس التنين", es: "Relieve de Cabeza de Dragón", ru: "Рельеф головы дракона" },
        city: "İstanbul", date: dates.yy19,
        coords: [41.0326, 28.9749], 
        media: { img: "assets/ejderbasi.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-342324/galatasaray-lisesi-girisinden-kaybolan-ejder-basi-kabartmasi.html",
        clue: { tr: "Batılılaşma dönemi İstanbul mimarisinden mitolojik figür.", en: "Mythological figure from Westernization period Istanbul architecture.", de: "Mythologische Figur aus der Istanbuler Architektur der Verwestlichungszeit.", ar: "شخصية أسطورية من عمارة إسطنبول في فترة التغريب.", es: "Figura mitológica de la arquitectura de Estambul del período de occidentalización.", ru: "Мифологическая фигура из архитектуры Стамбула периода вестернизации." },
        desc: { 
            tr: "İstanbul Beyoğlu'ndaki Galatasaray Lisesi'nin (Mekteb-i Sultani) anıtsal giriş kapısında yer alan bu yüksek kabartma ejderha başı, 19. yüzyıl Osmanlı Eklektik (Seçmeci) üslubunun nadide bir örneğidir. Uzak Doğu ve Avrupa mitolojisinin sentezlendiği figür, yapının ihtişamını ve gücünü sembolize eder. Mermer üzerine işlenen detaylı pullar ve yırtıcı ifade, dönemin taş yontu sanatındaki ustalığı sergiler.", 
            en: "Located on the monumental entrance gate of Galatasaray High School (Mekteb-i Sultani) in Beyoğlu, Istanbul, this high-relief dragon head is a rare example of the 19th-century Ottoman Eclectic style. Synthesizing Far Eastern and European mythology, the figure symbolizes the magnificence and power of the structure. The detailed scales and predatory expression carved into marble exhibit the mastery in stone sculpture of the period.", 
            de: "Dieser Hochrelief-Drachenkopf am monumentalen Eingangstor des Galatasaray-Gymnasiums (Mekteb-i Sultani) in Beyoğlu, Istanbul, ist ein seltenes Beispiel für den osmanischen eklektischen Stil des 19. Jahrhunderts. Die Figur, die fernöstliche und europäische Mythologie synthetisiert, symbolisiert die Pracht und Macht des Bauwerks. Die detaillierten Schuppen und der raubtierhafte Ausdruck, die in Marmor gemeißelt sind, zeigen die Meisterschaft der Steinbildhauerei dieser Zeit.", 
            ar: "يقع رأس التنين عالي التضاريس هذا على بوابة الدخول الأثرية لمدرسة غلطة سراي الثانوية (مكتب السلطاني) في بي أوغلو، إسطنبول، وهو مثال نادر على الطراز الانتقائي العثماني في القرن التاسع عشر. يجمع الشكل بين الأساطير الشرقية والأوروبية، ويرمز إلى عظمة وقوة الهيكل. تظهر الحراشف التفصيلية والتعبير المفترس المنحوت في الرخام البراعة في النحت الحجري لتلك الفترة.", 
            es: "Situada en la puerta de entrada monumental del Liceo Galatasaray (Mekteb-i Sultani) en Beyoğlu, Estambul, esta cabeza de dragón en alto relieve es un raro ejemplo del estilo ecléctico otomano del siglo XIX. Sintetizando la mitología del Lejano Oriente y Europa, la figura simboliza la magnificencia y el poder de la estructura. Las escamas detalladas y la expresión depredadora talladas en mármol exhiben la maestría en la escultura de piedra de la época.", 
            ru: "Расположенная на монументальных входных воротах лицея Галатасарай (Мектеб-и Султани) в Бейоглу, Стамбул, эта голова дракона с горельефом является редким примером османского эклектичного стиля 19 века. Синтезируя дальневосточную и европейскую мифологию, фигура символизирует великолепие и мощь сооружения. Детальная чешуя и хищное выражение, вырезанные из мрамора, демонстрируют мастерство каменной скульптуры того периода." 
        }
    },
    { 
        id: 4, 
        title: { tr: "Bronz Döküm Şebeke", en: "Bronze Cast Grille", de: "Bronzegussgitter", ar: "شبكة برونزية مصبوبة", es: "Rejilla de Bronce Fundido", ru: "Бронзовая литая решетка" },
        city: "İstanbul", date: dates.yy17,
        coords: [41.0116, 28.9388], 
        media: { img: "assets/sebeke.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44532/istanbul-ili-ekmekci-ahmet-pasa-turbesi-girisinden-calinan-tarihi-sebile-ait-bronz-dokum-sebeke.html",
        clue: { tr: "Türbe mimarisinden metal işçiliği şaheseri.", en: "Masterpiece of metalwork from tomb architecture.", de: "Meisterwerk der Metallarbeiten aus der Grabarchitektur.", ar: "تحفة من الأعمال المعدنية من عمارة المقابر.", es: "Obra maestra de orfebrería de la arquitectura funeraria.", ru: "Шедевр металлообработки из архитектуры гробниц." },
        desc: { 
            tr: "İstanbul Fatih'teki Ekmekçizade Ahmet Paşa Türbesi'nin sebil penceresine ait olan bu şebeke, Klasik Osmanlı Maden Sanatı'nın zirve örneklerindendir. 17. yüzyıl başına tarihlenen eser, 'Rumi' ve 'Hatayi' motiflerinin iç içe geçtiği geometrik bir kompozisyona sahiptir. Bronz döküm tekniğiyle üretilen ve soğuk kazıma ile detaylandırılan parça, dönemin metalurji bilgisini ve estetik zevkini yansıtan bir başyapıttır.", 
            en: "This grille, belonging to the sebil window of the Ekmekçizade Ahmet Pasha Tomb in Fatih, Istanbul, is one of the pinnacle examples of Classical Ottoman Metal Art. Dating to the early 17th century, the artifact features a geometric composition intertwined with 'Rumi' and 'Hatayi' motifs. Produced with bronze casting technique and detailed with cold engraving, the piece is a masterpiece reflecting the metallurgical knowledge and aesthetic taste of the period.", 
            de: "Dieses Gitter, das zum Sebil-Fenster des Grabmals von Ekmekçizade Ahmet Pascha in Fatih, Istanbul, gehört, ist eines der Spitzenbeispiele der klassischen osmanischen Metallkunst. Das auf das frühe 17. Jahrhundert datierte Artefakt weist eine geometrische Komposition auf, die mit 'Rumi'- und 'Hatayi'-Motiven verflochten ist. Das im Bronzegussverfahren hergestellte und mit Kaltgravur detaillierte Stück ist ein Meisterwerk, das das metallurgische Wissen und den ästhetischen Geschmack der Zeit widerspiegelt.", 
            ar: "هذه الشبكة، التي تنتمي إلى نافذة السبيل لمقبرة إكمكجي زاده أحمد باشا في الفاتح، إسطنبول، هي واحدة من الأمثلة البارزة للفن المعدني العثماني الكلاسيكي. يعود تاريخ القطعة الأثرية إلى أوائل القرن السابع عشر، وتتميز بتركيبة هندسية متشابكة مع زخارف 'الرومي' و'الخطاي'. تم إنتاج القطعة بتقنية صب البرونز وتفصيلها بالنقش البارد، وهي تحفة فنية تعكس المعرفة المعدنية والذوق الجمالي لتلك الفترة.", 
            es: "Esta rejilla, perteneciente a la ventana del sebil de la tumba de Ekmekçizade Ahmet Pasha en Fatih, Estambul, es uno de los ejemplos cumbre del arte en metal otomano clásico. Fechado a principios del siglo XVII, el artefacto presenta una composición geométrica entrelazada con motivos 'Rumi' y 'Hatayi'. Producida con técnica de fundición en bronce y detallada con grabado en frío, la pieza es una obra maestra que refleja el conocimiento metalúrgico y el gusto estético de la época.", 
            ru: "Эта решетка, принадлежащая окну себиля гробницы Экмекчизаде Ахмет-паши в Фатихе, Стамбул, является одним из ярчайших примеров классического османского искусства металла. Датируемый началом 17 века, артефакт представляет собой геометрическую композицию, переплетенную с мотивами «Руми» и «Хатаи». Произведенное в технике бронзового литья и детализированное холодной гравировкой, изделие является шедевром, отражающим металлургические знания и эстетический вкус того периода." 
        }
    },
    { 
        id: 5, 
        title: { tr: "Lahit", en: "Sarcophagus", de: "Sarkophag", ar: "تابوت حجري", es: "Sarcófago", ru: "Саркофаг" },
        city: "İzmir", date: dates.bizans,
        coords: [39.0717, 26.8889], 
        media: { img: "assets/lahit.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44634/izmir-ili-dikili-ilcesi-kaymakamligi-bahcesinden-calinan-lahit.html",
        clue: { tr: "Batı Anadolu'dan defin geleneği örneği.", en: "Example of burial tradition from Western Anatolia.", de: "Beispiel für Bestattungstradition aus Westanatolien.", ar: "مثال على تقاليد الدفن من غرب الأناضول.", es: "Ejemplo de tradición funeraria de Anatolia occidental.", ru: "Пример погребальной традиции из Западной Анатолии." },
        desc: { 
            tr: "İzmir'in Dikili ilçesinde bulunan bu lahit teknesi, Bizans Dönemi'ne ait olup bölgenin Hristiyanlık dönemi ölü gömme geleneklerini yansıtır. Yerel mermer ocaklarından elde edilen taş üzerine işlenmiş olan lahit, sade dış yüzeyi ve kaba yonu işçiliği ile karakterizedir. Lahitler, o dönemde sosyal statü göstergesi olmalarının yanı sıra, ölümden sonraki yaşama dair inançları da simgeleyen litürjik eserlerdir.", 
            en: "This sarcophagus trough, found in the Dikili district of İzmir, belongs to the Byzantine Period and reflects the Christian burial traditions of the region. Carved on stone obtained from local marble quarries, the sarcophagus is characterized by its simple outer surface and rough hewn craftsmanship. Sarcophagi are liturgical artifacts that symbolize beliefs about the afterlife as well as being indicators of social status at that time.", 
            de: "Diese Sarkophagwanne, die im Bezirk Dikili von İzmir gefunden wurde, stammt aus der byzantinischen Zeit und spiegelt die christlichen Bestattungstraditionen der Region wider. Der Sarkophag, der aus Stein aus lokalen Marmorbrüchen gehauen wurde, zeichnet sich durch seine schlichte Außenfläche und grob behauene Handwerkskunst aus. Sarkophage sind liturgische Artefakte, die den Glauben an das Leben nach dem Tod symbolisieren und zu dieser Zeit Indikatoren für den sozialen Status waren.", 
            ar: "يعود حوض التابوت هذا، الذي تم العثور عليه في منطقة ديكيلي في إزمير، إلى العصر البيزنطي ويعكس تقاليد الدفن المسيحية في المنطقة. يتميز التابوت، المنحوت على حجر تم الحصول عليه من محاجر الرخام المحلية، بسطحه الخارجي البسيط وحرفيته المنحوتة الخشنة. التوابيت هي قطع أثرية طقسية ترمز إلى المعتقدات حول الحياة الآخرة بالإضافة إلى كونها مؤشرات على الوضع الاجتماعي في ذلك الوقت.", 
            es: "Este ataúd de sarcófago, encontrado en el distrito de Dikili de Esmirna, pertenece al Período Bizantino y refleja las tradiciones funerarias cristianas de la región. Tallado en piedra obtenida de canteras de mármol locales, el sarcófago se caracteriza por su superficie exterior simple y su artesanía tosca. Los sarcófagos son artefactos litúrgicos que simbolizan creencias sobre la vida después de la muerte, además de ser indicadores de estatus social en ese momento.", 
            ru: "Этот саркофаг, найденный в районе Дикили в Измире, относится к византийскому периоду и отражает христианские традиции погребения в этом регионе. Вырезанный из камня, добытого в местных мраморных карьерах, саркофаг характеризуется простой внешней поверхностью и грубой тесаной обработкой. Саркофаги являются литургическими артефактами, которые символизируют веру в загробную жизнь, а также являются показателями социального статуса в то время." 
        }
    },
    { 
        id: 6, 
        title: { tr: "Artemis Başı", en: "Head of Artemis", de: "Kopf der Artemis", ar: "رأس أرتميس", es: "Cabeza de Artemisa", ru: "Голова Артемиды" },
        city: "Denizli", date: dates.roma,
        coords: [37.5611, 29.0833], 
        media: { img: "assets/artemisbasi.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44534/denizli-ili-tavas-ilcesi-kizilcaboluk-kasabasi-heraklia-hieronu39nda-yer-alan-mermer-bloktan-calinan-artemis-basi.html",
        clue: { tr: "Tanrıça kültünü yansıtan mermer kabartma.", en: "Marble relief reflecting the goddess cult.", de: "Marmorrelief, das den Göttinnenkult widerspiegelt.", ar: "نحت رخامي يعكس عبادة الآلهة.", es: "Relieve de mármol que refleja el culto a la diosa.", ru: "Мраморный рельеф, отражающий культ богини." },
        desc: { 
            tr: "Denizli Tavas'taki Herakleia Hieronu'nda (Kutsal Alan) bulunan bir mermer bloktan koparılan bu eser, Roma Dönemi'ne ait bir Tanrıça Artemis betimlemesidir. Avcılık ve doğa tanrıçası Artemis, eserde tipik ikonografik özellikleriyle, saçları geriye toplanmış ve ilahi bir ifadeyle tasvir edilmiştir. Bu kabartma, antik Karia ve Frigya bölgelerinin kesişim noktasındaki yerel kültlerin Roma sanatıyla bütünleşmesini gösterir.", 
            en: "This artifact, broken off from a marble block found in the Herakleia Hieron (Sacred Area) in Tavas, Denizli, is a depiction of the Goddess Artemis from the Roman Period. Artemis, the goddess of hunting and nature, is depicted in the work with her typical iconographic features, hair gathered back, and a divine expression. This relief shows the integration of local cults at the intersection of the ancient Caria and Phrygia regions with Roman art.", 
            de: "Dieses Artefakt, das von einem Marmorblock abgebrochen wurde, der im Herakleia Hieron (Heiliger Bereich) in Tavas, Denizli, gefunden wurde, ist eine Darstellung der Göttin Artemis aus der Römerzeit. Artemis, die Göttin der Jagd und der Natur, wird in dem Werk mit ihren typischen ikonographischen Merkmalen dargestellt: zurückgebundene Haare und ein göttlicher Ausdruck. Dieses Relief zeigt die Integration lokaler Kulte an der Schnittstelle der antiken Regionen Karien und Phrygien mit der römischen Kunst.", 
            ar: "هذه القطعة الأثرية، التي انفصلت عن كتلة رخامية عثر عليها في هيراكليا هيرون (المنطقة المقدسة) في تافاس، دنيزلي، هي تصوير للإلهة أرتميس من العصر الروماني. تم تصوير أرتميس، إلهة الصيد والطبيعة، في العمل بملامحها الأيقونية النموذجية، وشعرها المجمع للخلف، وتعبير إلهي. يظهر هذا النقش تكامل الطوائف المحلية عند تقاطع منطقتي كاريا وفريجيا القديمتين مع الفن الروماني.", 
            es: "Este artefacto, desprendido de un bloque de mármol encontrado en el Herakleia Hieron (Área Sagrada) en Tavas, Denizli, es una representación de la diosa Artemisa del Período Romano. Artemisa, la diosa de la caza y la naturaleza, está representada en la obra con sus características iconográficas típicas, cabello recogido hacia atrás y una expresión divina. Este relieve muestra la integración de los cultos locales en la intersección de las antiguas regiones de Caria y Frigia con el arte romano.", 
            ru: "Этот артефакт, отломанный от мраморного блока, найденного в Гераклея Иерон (Священная зона) в Тавасе, Денизли, является изображением богини Артемиды римского периода. Артемида, богиня охоты и природы, изображена в работе с ее типичными иконографическими чертами, собранными назад волосами и божественным выражением лица. Этот рельеф показывает интеграцию местных культов на пересечении древних регионов Карии и Фригии с римским искусством." 
        }
    },
    { 
        id: 7, 
        title: { tr: "Mezar Taşı", en: "Tombstone", de: "Grabstein", ar: "شاهد قبر", es: "Lápida", ru: "Надгробие" },
        city: "Denizli", date: dates.selcuklu,
        coords: [37.7765, 29.0864], 
        media: { img: "assets/mezartasi.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44691/denizli-ili-merkez-ilbadi-mahallesinden-calinan-selcuklu-donemine-ait-mezar-tasi.html",
        clue: { tr: "İslami dönem taş süsleme sanatı.", en: "Islamic period stone ornamentation art.", de: "Steinschnitzkunst der islamischen Zeit.", ar: "فن زخرفة الحجر في العصر الإسلامي.", es: "Arte de ornamentación en piedra del período islámico.", ru: "Искусство каменного орнамента исламского периода." },
        desc: { 
            tr: "Denizli İlbadı Mezarlığı'ndan çalınan bu eser, Anadolu Selçuklu Dönemi taş işçiliğinin seçkin bir örneğidir. Mezar taşı üzerinde, kufi veya sülüs yazı karakteriyle işlenmiş ayetler ve sonsuzluğu simgeleyen geometrik bezemeler (zencerek motifleri) yer alır. Bu tür mezar taşları, Türk-İslam sanatında ölüm, ahiret inancı ve toplumsal hafızanın taşa yansımış en somut belgeleridir.", 
            en: "Stolen from Denizli İlbadı Cemetery, this artifact is a distinguished example of Anatolian Seljuk Period stone masonry. The tombstone features verses carved in Kufic or Thuluth script and geometric decorations (chain motifs) symbolizing eternity. Such tombstones are the most concrete documents reflected in stone of death, belief in the afterlife, and social memory in Turkish-Islamic art.", 
            de: "Dieses vom Denizli İlbadı-Friedhof gestohlene Artefakt ist ein herausragendes Beispiel für die Steinmetzkunst der anatolischen Seldschukenzeit. Der Grabstein zeigt Verse, die in Kufi- oder Thuluth-Schrift eingemeißelt sind, sowie geometrische Verzierungen (Kettenmotive), die die Ewigkeit symbolisieren. Solche Grabsteine sind die konkretesten in Stein gemeißelten Dokumente über Tod, Jenseitsglaube und soziales Gedächtnis in der türkisch-islamischen Kunst.", 
            ar: "هذه القطعة الأثرية المسروقة من مقبرة دنيزلي إلبادي هي مثال متميز للبناء الحجري في العصر السلجوقي الأناضولي. يتميز شاهد القبر بآيات منحوتة بالخط الكوفي أو الثلث وزخارف هندسية (زخارف سلسلة) ترمز إلى الأبدية. تعتبر شواهد القبور هذه الوثائق الأكثر واقعية المنعكسة في الحجر للموت، والإيمان بالحياة الآخرة، والذاكرة الاجتماعية في الفن التركي الإسلامي.", 
            es: "Robado del cementerio Denizli İlbadı, este artefacto es un ejemplo distinguido de la mampostería de piedra del período selyúcida de Anatolia. La lápida presenta versos tallados en escritura cúfica o thuluth y decoraciones geométricas (motivos de cadena) que simbolizan la eternidad. Tales lápidas son los documentos más concretos reflejados en piedra de la muerte, la creencia en el más allá y la memoria social en el arte turco-islámico.", 
            ru: "Украденный с кладбища Денизли Ильбады, этот артефакт является выдающимся примером каменной кладки анатолийского сельджукского периода. На надгробии вырезаны стихи куфическим шрифтом или сулюс, а также геометрические украшения (цепные мотивы), символизирующие вечность. Такие надгробия являются самыми конкретными документами, отраженными в камне, о смерти, вере в загробную жизнь и социальной памяти в турецко-исламском искусстве." 
        }
    },
    { 
        id: 8, 
        title: { tr: "Büst", en: "Bust", de: "Büste", ar: "تمثال نصفي", es: "Busto", ru: "Бюст" },
        city: "Kocaeli", date: dates.roma,
        coords: [40.7654, 29.9408], 
        media: { img: "assets/bust.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44654/kocaeli-ilinde-kaybolan-bust.html",
        clue: { tr: "Nikomedia bölgesi portre sanatı.", en: "Nicomedia region portrait art.", de: "Porträtkunst der Region Nikomedia.", ar: "فن البورتريه في منطقة نيقوميديا.", es: "Arte del retrato de la región de Nicomedia.", ru: "Портретное искусство региона Никомедия." },
        desc: { 
            tr: "Antik Nikomedia (Kocaeli) bölgesinde bulunan bu mermer büst, Roma Dönemi portre sanatının gerçekçi üslubunu yansıtır. Büstün saç işçiliği, yüz hatlarındaki detaylar ve gözbebeklerinin işlenişi, eserin MS 2. yüzyıla, muhtemelen Antoninler Dönemi'ne ait olduğuna işaret eder. Bu tür büstler, Roma toplumunda atalara saygı kültürünün (imago clipeata) bir parçası olarak konutlarda veya kamusal alanlarda sergilenirdi.", 
            en: "Found in the ancient Nicomedia (Kocaeli) region, this marble bust reflects the realistic style of Roman Period portrait art. The hair craftsmanship, details in facial features, and the treatment of the pupils suggest that the artifact belongs to the 2nd century AD, possibly the Antonine Period. Such busts were displayed in residences or public spaces as part of the culture of ancestor worship (imago clipeata) in Roman society.", 
            de: "Diese Marmorbüste, die in der antiken Region Nikomedia (Kocaeli) gefunden wurde, spiegelt den realistischen Stil der Porträtkunst der Römerzeit wider. Die Haarbearbeitung, die Details der Gesichtszüge und die Behandlung der Pupillen deuten darauf hin, dass das Artefakt aus dem 2. Jahrhundert n. Chr. stammt, möglicherweise aus der Antoninischen Zeit. Solche Büsten wurden in Wohnräumen oder öffentlichen Plätzen als Teil der Ahnenverehrungskultur (imago clipeata) in der römischen Gesellschaft ausgestellt.", 
            ar: "يعكس هذا التمثال النصفي الرخامي، الذي تم العثور عليه في منطقة نيقوميديا القديمة (كوجالي)، الأسلوب الواقعي لفن البورتريه في العصر الروماني. تشير حرفية الشعر وتفاصيل ملامح الوجه ومعالجة حدقة العين إلى أن القطعة الأثرية تنتمي إلى القرن الثاني الميلادي، وربما العصر الأنطوني. تم عرض مثل هذه التماثيل النصفية في المساكن أو الأماكن العامة كجزء من ثقافة عبادة الأسلاف (imago clipeata) في المجتمع الروماني.", 
            es: "Encontrado en la antigua región de Nicomedia (Kocaeli), este busto de mármol refleja el estilo realista del arte del retrato del Período Romano. La artesanía del cabello, los detalles en los rasgos faciales y el tratamiento de las pupilas sugieren que el artefacto pertenece al siglo II d.C., posiblemente al Período Antonino. Tales bustos se exhibían en residencias o espacios públicos como parte de la cultura del culto a los antepasados (imago clipeata) en la sociedad romana.", 
            ru: "Найденный в древнем регионе Никомедия (Коджаэли), этот мраморный бюст отражает реалистичный стиль портретного искусства римского периода. Мастерство исполнения волос, детали черт лица и обработка зрачков позволяют предположить, что артефакт относится к 2 веку н.э., возможно, к периоду Антонинов. Такие бюсты выставлялись в жилых домах или общественных местах как часть культуры поклонения предкам (imago clipeata) в римском обществе." 
        }
    },
    { 
        id: 9, 
        title: { tr: "Altın Sikke", en: "Gold Coin", de: "Goldmünze", ar: "عملة ذهبية", es: "Moneda de Oro", ru: "Золотая монета" },
        city: "Hatay", date: dates.roma,
        coords: [36.2023, 36.1613], 
        media: { img: "assets/sikke.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44647/hatay-ilinden-calinan-altin-sikke.html",
        clue: { tr: "Antiochia darphanesi ürünü nümismatik eser.", en: "Numismatic artifact from Antioch mint.", de: "Numismatisches Artefakt aus der Münzstätte Antiochia.", ar: "قطعة نقدية من دار سك أنطاكية.", es: "Artefacto numismático de la ceca de Antioquía.", ru: "Нумизматический артефакт с монетного двора Антиохии." },
        desc: { 
            tr: "Hatay (Antiochia) kökenli bu altın sikke (Aureus), Roma İmparatorluğu'nun doğudaki en önemli darphanesinde basılmıştır. Sikkenin ön yüzünde (obverse) imparatorun profilden portresi ve unvanları, arka yüzünde (reverse) ise siyasi propaganda niteliği taşıyan mitolojik veya alegorik bir figür yer alır. Eser, dönemin ekonomik gücünü ve imparatorluk ideolojisinin eyaletlerdeki yayılımını belgeleyen eşsiz bir nümismatik kaynaktır.", 
            en: "This gold coin (Aureus) of Hatay (Antioch) origin was minted in the most important mint of the Roman Empire in the East. The obverse features a profile portrait of the emperor and his titles, while the reverse features a mythological or allegorical figure carrying political propaganda. The artifact is a unique numismatic source documenting the economic power of the period and the spread of imperial ideology in the provinces.", 
            de: "Diese Goldmünze (Aureus) aus Hatay (Antiochia) wurde in der wichtigsten Münzstätte des Römischen Reiches im Osten geprägt. Die Vorderseite (Avers) zeigt ein Profilporträt des Kaisers und seine Titel, während die Rückseite (Revers) eine mythologische oder allegorische Figur zeigt, die politische Propaganda trägt. Das Artefakt ist eine einzigartige numismatische Quelle, die die wirtschaftliche Macht der Zeit und die Verbreitung der imperialen Ideologie in den Provinzen dokumentiert.", 
            ar: "تم صك هذه العملة الذهبية (أوريوس) من أصل هاتاي (أنطاكية) في أهم دار سك للعملة في الإمبراطورية الرومانية في الشرق. يتميز الوجه بصورة جانبية للإمبراطور وألقابه، بينما يتميز الوجه الخلفي بشخصية أسطورية أو مجازية تحمل دعاية سياسية. تعد القطعة الأثرية مصدراً نقدياً فريداً يوثق القوة الاقتصادية لتلك الفترة وانتشار الإيديولوجية الإمبراطورية في المقاطعات.", 
            es: "Esta moneda de oro (Áureo) de origen Hatay (Antioquía) fue acuñada en la ceca más importante del Imperio Romano en Oriente. El anverso presenta un retrato de perfil del emperador y sus títulos, mientras que el reverso presenta una figura mitológica o alegórica que lleva propaganda política. El artefacto es una fuente numismática única que documenta el poder económico de la época y la difusión de la ideología imperial en las provincias.", 
            ru: "Эта золотая монета (ауреус) происхождения Хатай (Антиохия) была отчеканена на самом важном монетном дворе Римской империи на Востоке. На аверсе изображен профильный портрет императора и его титулы, а на реверсе — мифологическая или аллегорическая фигура, несущая политическую пропаганду. Артефакт является уникальным нумизматическим источником, документирующим экономическую мощь того периода и распространение имперской идеологии в провинциях." 
        }
    },
    { 
        id: 10, 
        title: { tr: "Haç Motifli Mermer", en: "Marble with Cross Motif", de: "Marmor mit Kreuzmotiv", ar: "رخام بزخرفة صليب", es: "Mármol con Motivo de Cruz", ru: "Мрамор с мотивом креста" },
        city: "Denizli", date: dates.bizans,
        coords: [38.2936, 29.8475], 
        media: { img: "assets/hacmotifi.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-50725/denizli-ili-civril-ilcesi-isikli-beldesi39nden-calinan-roma-donemine-ait-eser.html",
        clue: { tr: "Erken Hristiyanlık dönemi mimari plastiği.", en: "Early Christian architectural plastic.", de: "Frühchristliche Bauplastik.", ar: "البلاستيك المعماري المسيحي المبكر.", es: "Plástico arquitectónico cristiano primitivo.", ru: "Раннехристианская архитектурная пластика." },
        desc: { 
            tr: "Denizli Çivril (Işıklı/Eumenia) bölgesinden çalınan bu mermer levha, Erken Bizans Dönemi'ne (MS 5.-6. yüzyıl) aittir. Levha üzerinde, Hristiyan ikonografisinin temel sembolü olan ve kolları genişleyen 'Malta Haçı' tipi bir kabartma bulunur. Bu tür mimari plastikler, genellikle kilise korkuluk levhalarında (parapet) veya şapel girişlerinde kullanılmış olup, bölgedeki Hristiyanlaşma sürecini ve dinsel mimarinin gelişimini kanıtlar.", 
            en: "Stolen from the Denizli Çivril (Işıklı/Eumenia) region, this marble slab belongs to the Early Byzantine Period (5th-6th century AD). On the slab is a relief of the 'Maltese Cross' type, a fundamental symbol of Christian iconography with expanding arms. Such architectural plastics were generally used in church parapet slabs or chapel entrances, proving the Christianization process and the development of religious architecture in the region.", 
            de: "Diese aus der Region Denizli Çivril (Işıklı/Eumenia) gestohlene Marmorplatte stammt aus der frühbyzantinischen Zeit (5.-6. Jahrhundert n. Chr.). Auf der Platte befindet sich ein Relief vom Typ 'Malteserkreuz', ein grundlegendes Symbol der christlichen Ikonographie mit sich verbreiternden Armen. Solche Bauplastiken wurden im Allgemeinen in Kirchenbrüstungsplatten oder Kapelleneingängen verwendet und belegen den Christianisierungsprozess und die Entwicklung der religiösen Architektur in der Region.", 
            ar: "هذا اللوح الرخامي المسروق من منطقة دنيزلي تشيفريل (إيشيكلي/أومينيا) ينتمي إلى العصر البيزنطي المبكر (القرن الخامس والسادس الميلادي). يوجد على اللوح نقش بارز من نوع 'صليب مالطا'، وهو رمز أساسي للأيقونات المسيحية بأذرع متوسعة. تم استخدام مثل هذه المواد البلاستيكية المعمارية بشكل عام في ألواح حواجز الكنائس أو مداخل الكنائس الصغيرة، مما يثبت عملية التنصير وتطور العمارة الدينية في المنطقة.", 
            es: "Robada de la región de Denizli Çivril (Işıklı/Eumenia), esta losa de mármol pertenece al Período Bizantino Temprano (siglos V-VI d.C.). En la losa hay un relieve del tipo 'Cruz de Malta', un símbolo fundamental de la iconografía cristiana con brazos que se expanden. Tales plásticos arquitectónicos se usaban generalmente en losas de parapeto de iglesias o entradas de capillas, probando el proceso de cristianización y el desarrollo de la arquitectura religiosa en la región.", 
            ru: "Украденная из региона Денизли Чивриль (Ышыклы/Эвмения), эта мраморная плита относится к ранневизантийскому периоду (5-6 века н.э.). На плите находится рельеф типа «Мальтийский крест», фундаментальный символ христианской иконографии с расширяющимися рукавами. Такая архитектурная пластика, как правило, использовалась в плитах церковных парапетов или входах в часовни, доказывая процесс христианизации и развитие религиозной архитектуры в регионе." 
        }
    },
    { 
        id: 11, 
        title: { tr: "Sanduka Örtüsü", en: "Sarcophagus Cover", de: "Sarkophagdecke", ar: "غطاء التابوت", es: "Cubierta de Sarcófago", ru: "Покрывало саркофага" },
        city: "Bursa", date: dates.osmanli,
        coords: [40.1826, 29.0633], 
        media: { img: "assets/sanduka.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-51567/bursa-ili-yildirim-ilcesi-yildirim-mahallesi39nde-yer-alan-yildirim-beyazid-turbesi39nden-calinan-sanduka-ortusu.html",
        clue: { tr: "Erken Osmanlı başkenti tekstil sanatı.", en: "Early Ottoman capital textile art.", de: "Textilkunst der frühen osmanischen Hauptstadt.", ar: "فن المنسوجات في العاصمة العثمانية المبكرة.", es: "Arte textil de la capital otomana temprana.", ru: "Текстильное искусство ранней османской столицы." },
        desc: { 
            tr: "Bursa'daki Yıldırım Bayezid Türbesi'nden çalınan bu sanduka örtüsü (puşide), Osmanlı tekstil sanatının ve türbe mefruşat geleneğinin nadide bir örneğidir. İpek ve kadife kumaş üzerine altın veya gümüş sim ile işlenmiş (maraş işi/dival) hat sanatı örnekleri ve bitkisel motifler içerir. Eser, Osmanlı hanedan türbelerindeki manevi atmosferi tamamlayan ve dönemin dokuma ustalığını belgeleyen önemli bir etnografik kültür varlığıdır.", 
            en: "Stolen from the Yıldırım Bayezid Tomb in Bursa, this sarcophagus cover (puşide) is a rare example of Ottoman textile art and tomb furnishing tradition. It contains calligraphy examples and floral motifs embroidered with gold or silver thread (maraş work/dival) on silk and velvet fabric. The artifact is an important ethnographic cultural asset that complements the spiritual atmosphere in Ottoman dynastic tombs and documents the weaving mastery of the period.", 
            de: "Diese aus dem Grabmal von Yıldırım Bayezid in Bursa gestohlene Sarkophagdecke (Puschide) ist ein seltenes Beispiel für osmanische Textilkunst und die Tradition der Grabausstattung. Sie enthält Kalligraphiebeispiele und Blumenmotive, die mit Gold- oder Silberfäden (Marasch-Arbeit/Dival) auf Seiden- und Samtstoff gestickt sind. Das Artefakt ist ein wichtiges ethnographisches Kulturgut, das die spirituelle Atmosphäre in den osmanischen Dynastiegräbern ergänzt und die Webkunst der Zeit dokumentiert.", 
            ar: "غطاء التابوت هذا (بوشيده)، المسروق من مقبرة يلدرم بايزيد في بورصة، هو مثال نادر لفن النسيج العثماني وتقاليد تأثيث المقابر. يحتوي على أمثلة للخط وزخارف نباتية مطرزة بخيوط الذهب أو الفضة (عمل مرعش/ديفال) على قماش الحرير والمخمل. الأثر هو أصل ثقافي إثنوغرافي مهم يكمل الجو الروحي في مقابر السلالة العثمانية ويوثق براعة النسيج في تلك الفترة.", 
            es: "Robada de la tumba de Yıldırım Bayezid en Bursa, esta cubierta de sarcófago (puşide) es un raro ejemplo del arte textil otomano y la tradición de mobiliario de tumbas. Contiene ejemplos de caligrafía y motivos florales bordados con hilo de oro o plata (trabajo de maraş/dival) sobre tela de seda y terciopelo. El artefacto es un activo cultural etnográfico importante que complementa la atmósfera espiritual en las tumbas dinásticas otomanas y documenta la maestría en el tejido de la época.", 
            ru: "Украденное из гробницы Йылдырым Баязида в Бурсе, это покрывало саркофага (пушиде) является редким примером османского текстильного искусства и традиции убранства гробниц. Оно содержит образцы каллиграфии и цветочные мотивы, вышитые золотой или серебряной нитью (работа мараш/дивал) на шелковой и бархатной ткани. Артефакт является важным этнографическим культурным достоянием, которое дополняет духовную атмосферу в гробницах османских династий и документирует мастерство ткачества того периода." 
        }
    },
    { 
        id: 12, 
        title: { tr: "Türbe Kitabesi", en: "Tomb Inscription", de: "Grabinschrift", ar: "نقش المقبرة", es: "Inscripción de la Tumba", ru: "Надпись на гробнице" },
        city: "İstanbul", date: dates.belirsiz,
        coords: [40.9906, 29.2272], 
        media: { img: "assets/kitabe.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-231514/istanbul-ili-sancaktepe-ilcesi-150-ada4-parselde-bulunan-sari-kadizade-seyh-mustafa-dede-efendi-turbesinin--kaybolan-kitabesi.html",
        clue: { tr: "Sancaktepe'de bir yapı yazıtı.", en: "A building inscription in Sancaktepe.", de: "Eine Bauinschrift in Sancaktepe.", ar: "نقش بناء في سانجاك تيبي.", es: "Una inscripción de edificio en Sancaktepe.", ru: "Строительная надпись в Санджактепе." },
        desc: { 
            tr: "İstanbul Sancaktepe'deki Sarı Kadızade Şeyh Mustafa Dede Efendi Türbesi'ne ait olan bu mermer kitabe, Türk-İslam epigrafisinin önemli bir örneğidir. Üzerinde Celi Sülüs veya Talik hat ile yazılmış olan metin, yapının banisi (yaptıran kişi), inşa tarihi ve dönemin şairane dil özelliklerini içerir. Kitabeler, kaybolan mimari eserlerin kimliğini ve tarihsel bağlamını aydınlatan birincil yazılı belgelerdir.", 
            en: "This marble inscription, belonging to the Sarı Kadızade Şeyh Mustafa Dede Efendi Tomb in Sancaktepe, Istanbul, is an important example of Turkish-Islamic epigraphy. The text, written in Jeli Thuluth or Taliq script, contains the patron of the building, the construction date, and the poetic language features of the period. Inscriptions are primary written documents that illuminate the identity and historical context of lost architectural works.", 
            de: "Diese Marmorinschrift, die zum Grabmal von Sarı Kadızade Şeyh Mustafa Dede Efendi in Sancaktepe, Istanbul, gehört, ist ein wichtiges Beispiel für türkisch-islamische Epigraphik. Der Text, der in Jeli-Thuluth- oder Taliq-Schrift verfasst ist, enthält den Stifter des Gebäudes, das Baudatum und die poetischen Sprachmerkmale der Zeit. Inschriften sind primäre schriftliche Dokumente, die die Identität und den historischen Kontext verlorener architektonischer Werke beleuchten.", 
            ar: "يعد هذا النقش الرخامي، الذي ينتمي إلى مقبرة ساري قاضي زاده الشيخ مصطفى ديدي أفندي في سانجاك تيبي، إسطنبول، مثالاً هاماً للنقوش التركية الإسلامية. يحتوي النص، المكتوب بخط جلي الثلث أو التعليق، على راعي المبنى، وتاريخ البناء، والخصائص اللغوية الشعرية لتلك الفترة. النقوش هي وثائق مكتوبة أولية تلقي الضوء على الهوية والسياق التاريخي للأعمال المعمارية المفقودة.", 
            es: "Esta inscripción de mármol, perteneciente a la tumba de Sarı Kadızade Şeyh Mustafa Dede Efendi en Sancaktepe, Estambul, es un ejemplo importante de la epigrafía turco-islámica. El texto, escrito en escritura Jeli Thuluth o Taliq, contiene el patrón del edificio, la fecha de construcción y las características del lenguaje poético de la época. Las inscripciones son documentos escritos primarios que iluminan la identidad y el contexto histórico de obras arquitectónicas perdidas.", 
            ru: "Эта мраморная надпись, принадлежащая гробнице Сары Кадызаде Шейха Мустафы Деде Эфенди в Санджактепе, Стамбул, является важным примером турецко-исламской эпиграфики. Текст, написанный шрифтом Джели Сулюс или Талик, содержит информацию о покровителе здания, дате строительства и особенностях поэтического языка того периода. Надписи являются первичными письменными документами, проливающими свет на идентичность и исторический контекст утраченных архитектурных произведений." 
        }
    },
    { 
        id: 13, 
        title: { tr: "Meryem Ana Kabartması", en: "Virgin Mary Relief", de: "Relief der Jungfrau Maria", ar: "نحت العذراء مريم", es: "Relieve de la Virgen María", ru: "Рельеф Девы Марии" },
        city: "Erzurum", date: dates.yy10,
        coords: [40.5833, 41.5333], 
        media: { img: "assets/meryemana.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44537/erzurum-ili-osk-manastir-kilisesinden-calinan-kabartma.html",
        clue: { tr: "Gürcü-Bizans etkileşimi taş eser.", en: "Georgian-Byzantine interaction stone artifact.", de: "Steinartefakt der georgisch-byzantinischen Interaktion.", ar: "قطعة حجرية تعكس التفاعل الجورجي البيزنطي.", es: "Artefacto de piedra de interacción georgiano-bizantina.", ru: "Каменный артефакт грузино-византийского взаимодействия." },
        desc: { 
            tr: "Erzurum Uzundere'deki Öşk (Oshki) Manastırı Kilisesi'nden çalınan bu taş kabartma, 10. yüzyıl Gürcü Bagratlı Krallığı dönemine aittir. Eserde Meryem Ana, kucağında Çocuk İsa ile birlikte (Theotokos) betimlenmiştir. Gürcü ve Bizans sanatının etkileşimini yansıtan bu figüratif plastik, Orta Çağ Kafkas mimarisinin karakteristik taş işçiliğini ve dini ikonografisini belgeleyen nadir bir parçadır.", 
            en: "Stolen from the Öşk (Oshki) Monastery Church in Uzundere, Erzurum, this stone relief belongs to the 10th-century Georgian Bagratid Kingdom period. In the work, the Virgin Mary is depicted with the Child Jesus in her arms (Theotokos). Reflecting the interaction of Georgian and Byzantine art, this figurative plastic is a rare piece documenting the characteristic stone masonry and religious iconography of medieval Caucasian architecture.", 
            de: "Dieses Steinrelief, das aus der Kirche des Klosters Öşk (Oshki) in Uzundere, Erzurum, gestohlen wurde, stammt aus der Zeit des georgischen Bagratidenreichs im 10. Jahrhundert. In dem Werk wird die Jungfrau Maria mit dem Jesuskind im Arm (Theotokos) dargestellt. Diese figurative Plastik, die die Interaktion georgischer und byzantinischer Kunst widerspiegelt, ist ein seltenes Stück, das die charakteristische Steinmetzkunst und religiöse Ikonographie der mittelalterlichen kaukasischen Architektur dokumentiert.", 
            ar: "هذا النقش الحجري، المسروق من كنيسة دير أوشك (أوشكي) في أوزون دير، أرضروم، ينتمي إلى فترة مملكة باغراتيد الجورجية في القرن العاشر. في العمل، تم تصوير العذراء مريم مع الطفل يسوع بين ذراعيها (والدة الإله). يعكس هذا البلاستيك التصويري تفاعل الفن الجورجي والبيزنطي، وهو قطعة نادرة توثق البناء الحجري المميز والأيقونات الدينية لعمارة القوقاز في العصور الوسطى.", 
            es: "Robado de la Iglesia del Monasterio de Öşk (Oshki) en Uzundere, Erzurum, este relieve de piedra pertenece al período del Reino Bagratida de Georgia del siglo X. En la obra, la Virgen María está representada con el Niño Jesús en sus brazos (Theotokos). Reflejando la interacción del arte georgiano y bizantino, este plástico figurativo es una pieza rara que documenta la mampostería de piedra característica y la iconografía religiosa de la arquitectura medieval del Cáucaso.", 
            ru: "Украденный из церкви монастыря Ошк (Ошки) в Узундере, Эрзурум, этот каменный рельеф относится к периоду грузинского царства Багратидов 10 века. В работе Дева Мария изображена с Младенцем Иисусом на руках (Богородица). Отражая взаимодействие грузинского и византийского искусства, эта фигуративная пластика является редким предметом, документирующим характерную каменную кладку и религиозную иконографию средневековой кавказской архитектуры." 
        }
    },
    { 
        id: 14, 
        title: { tr: "Mukimi Mozaiği", en: "Mukimi Mosaic", de: "Mukimi-Mosaik", ar: "فسيفساء مقيمي", es: "Mosaico Mukimi", ru: "Мозаика Мукими" },
        city: "Şanlıurfa", date: dates.roma,
        coords: [37.1591, 38.7969], 
        media: { img: "assets/mukimi.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-44675/sanliurfa-ilinden-calinan-mozaik-eserler.html",
        clue: { tr: "Edessa ekolu taban mozaiği.", en: "Edessa school floor mosaic.", de: "Bodenmosaik der Schule von Edessa.", ar: "فسيفساء أرضية من مدرسة الرها.", es: "Mosaico de suelo de la escuela de Edesa.", ru: "Напольная мозаика школы Эдессы." },
        desc: { 
            tr: "Şanlıurfa (Edessa) bölgesinden çalınan bu taban mozaiği, Roma Dönemi'ne (MS 2.-3. yüzyıl) tarihlenen ve 'Edessa Mozaiği' olarak bilinen yerel bir ekolün ürünüdür. Eserde, Süryani dili ve kültürünün etkileri görülmekte olup, 'Mukimi' adı verilen figür veya aile betimlemesi yer alır. Mozaik taşlarının (tessera) renk çeşitliliği ve frontal (cepheden) duruşlu portre üslubu, Doğu ve Batı sanatının bölgedeki sentezini kanıtlar.", 
            en: "Stolen from the Şanlıurfa (Edessa) region, this floor mosaic is a product of a local school known as the 'Edessa Mosaic', dating to the Roman Period (2nd-3rd century AD). In the work, the effects of the Syriac language and culture are visible, and it features a figure or family depiction named 'Mukimi'. The color diversity of the mosaic stones (tesserae) and the frontal portrait style prove the synthesis of Eastern and Western art in the region.", 
            de: "Dieses aus der Region Şanlıurfa (Edessa) gestohlene Bodenmosaik ist ein Produkt einer lokalen Schule, die als 'Edessa-Mosaik' bekannt ist und in die römische Zeit (2.-3. Jahrhundert n. Chr.) datiert. In dem Werk sind die Einflüsse der syrischen Sprache und Kultur sichtbar, und es zeigt eine Figur oder Familiendarstellung namens 'Mukimi'. Die Farbenvielfalt der Mosaiksteine (Tesserae) und der frontale Porträtstil belegen die Synthese von östlicher und westlicher Kunst in der Region.", 
            ar: "تعد هذه الفسيفساء الأرضية، المسروقة من منطقة شانلي أورفا (الرها)، نتاجاً لمدرسة محلية تُعرف باسم 'فسيفساء الرها'، ويعود تاريخها إلى العصر الروماني (القرن الثاني والثالث الميلادي). في العمل، تظهر آثار اللغة والثقافة السريانية، ويتميز بشخصية أو تصوير عائلي يسمى 'مقيمي'. يثبت تنوع ألوان أحجار الفسيفساء (تيسيرا) وأسلوب الصورة الأمامية تركيب الفن الشرقي والغربي في المنطقة.", 
            es: "Robado de la región de Şanlıurfa (Edesa), este mosaico de suelo es producto de una escuela local conocida como el 'Mosaico de Edesa', que data del Período Romano (siglos II-III d.C.). En la obra, son visibles los efectos de la lengua y cultura siríacas, y presenta una figura o representación familiar llamada 'Mukimi'. La diversidad de colores de las piedras del mosaico (teselas) y el estilo de retrato frontal prueban la síntesis del arte oriental y occidental en la región.", 
            ru: "Украденная из региона Шанлыурфа (Эдесса), эта напольная мозаика является продуктом местной школы, известной как «Мозаика Эдессы», датируемой римским периодом (2-3 века н.э.). В работе заметно влияние сирийского языка и культуры, и на ней изображена фигура или семейное изображение по имени «Мукими». Цветовое разнообразие мозаичных камней (тессеры) и фронтальный портретный стиль доказывают синтез восточного и западного искусства в регионе." 
        }
    },
    { 
        id: 15, 
        title: { tr: "Çeşme Yalağı", en: "Fountain Basin", de: "Brunnenbecken", ar: "حوض نافورة", es: "Cuenco de Fuente", ru: "Чаша фонтана" },
        city: "İstanbul", date: dates.yy19,
        coords: [41.1075, 29.0550], 
        media: { img: "assets/yalak.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-62791/istanbul-ili-sariyer-ilcesi-emirgan-mevkii39nde-bulunan-serifler-yalisi39ndan-calinan-mermer-cesme-yalagi.html",
        clue: { tr: "Boğaziçi yalı mimarisi öğesi.", en: "Bosphorus mansion architecture element.", de: "Architekturelement eines Bosporus-Herrenhauses.", ar: "عنصر معماري من قصور البوسفور.", es: "Elemento arquitectónico de mansión del Bósforo.", ru: "Архитектурный элемент особняка на Босфоре." },
        desc: { 
            tr: "İstanbul Emirgan'daki tarihi Şerifler Yalısı'ndan çalınan bu mermer çeşme yalağı, Boğaziçi sivil mimarisinin zarif bir tamamlayıcısıdır. 19. yüzyıl Osmanlı süsleme sanatını yansıtan eserde, kıvrımlı hatlar, istiridye kabuğu motifleri ve bitkisel bezemeler dikkat çeker. Yalaklar, sadece su toplama işlevi gören hazneler değil, aynı zamanda bahçe kültürünün ve su medeniyetinin estetik birer objesidir.", 
            en: "Stolen from the historical Şerifler Mansion in Emirgan, Istanbul, this marble fountain basin is an elegant complement to Bosphorus civil architecture. Reflecting 19th-century Ottoman decorative art, the artifact features curved lines, oyster shell motifs, and floral decorations. Basins are not only reservoirs for collecting water but also aesthetic objects of garden culture and water civilization.", 
            de: "Dieses aus dem historischen Herrenhaus Şerifler in Emirgan, Istanbul, gestohlene Marmorbrunnenbecken ist eine elegante Ergänzung der zivilen Architektur am Bosporus. Das Artefakt, das die osmanische dekorative Kunst des 19. Jahrhunderts widerspiegelt, weist geschwungene Linien, Austernschalenmotive und florale Verzierungen auf. Becken sind nicht nur Reservoirs zum Sammeln von Wasser, sondern auch ästhetische Objekte der Gartenkultur und der Wasserzivilisation.", 
            ar: "حوض النافورة الرخامي هذا، المسروق من قصر شرفلار التاريخي في أميرجان، إسطنبول، هو تكملة أنيقة للعمارة المدنية في البوسفور. يعكس الأثر الفن الزخرفي العثماني في القرن التاسع عشر، ويتميز بخطوط منحنية وزخارف صدف المحار وزخارف نباتية. الأحواض ليست مجرد خزانات لجمع المياه ولكنها أيضًا أشياء جمالية لثقافة الحدائق وحضارة المياه.", 
            es: "Robado de la histórica Mansión Şerifler en Emirgan, Estambul, este cuenco de fuente de mármol es un complemento elegante para la arquitectura civil del Bósforo. Reflejando el arte decorativo otomano del siglo XIX, el artefacto presenta líneas curvas, motivos de conchas de ostra y decoraciones florales. Los cuencos no son solo depósitos para recoger agua, sino también objetos estéticos de la cultura de jardín y la civilización del agua.", 
            ru: "Украденная из исторического особняка Шерифлер в Эмиргане, Стамбул, эта мраморная чаша фонтана является элегантным дополнением гражданской архитектуры Босфора. Отражая османское декоративное искусство 19 века, артефакт отличается изогнутыми линиями, мотивами раковин устриц и цветочными украшениями. Чаши — это не только резервуары для сбора воды, но и эстетические объекты садовой культуры и водной цивилизации." 
        }
    },
    { 
        id: 16, 
        title: { tr: "Koç Şekilli Mezar Taşı", en: "Ram-Shaped Tombstone", de: "Widderförmiger Grabstein", ar: "شاهد قبر على شكل كبش", es: "Lápida con Forma de Carnero", ru: "Надгробие в форме барана" },
        city: "Tunceli", date: dates.osmanli,
        coords: [39.4833, 39.9167], 
        media: { img: "assets/kocsekilli.jpg", model: "assets/kocsekilli.glb" }, 
        link: "https://kvmgm.ktb.gov.tr/TR-110801/tunceli-ili-pulumur-ilcesi-saglamtas-koyu-calinan-koc-sekilli-mezar-tasi.html",
        clue: { tr: "Akkoyunlu/Karakoyunlu mezar geleneği.", en: "Akkoyunlu/Karakoyunlu burial tradition.", de: "Akkoyunlu/Karakoyunlu-Bestattungstradition.", ar: "تقاليد الدفن الآق قويونلو/القراقويونلو.", es: "Tradición funeraria Akkoyunlu/Karakoyunlu.", ru: "Погребальная традиция Ак-Коюнлу/Кара-Коюнлу." },
        desc: { 
            tr: "Tunceli Pülümür bölgesinden çalınan bu koç biçimli mezar taşı, Doğu Anadolu'daki Akkoyunlu ve Karakoyunlu devletlerinin (14.-15. yüzyıl) kültürel mirasının devamı niteliğindedir. Göçebe Türkmen boylarında 'koç', güç, bereket ve kahramanlığı simgeler. Taşın yan yüzeylerinde kılıç, hançer, kalkan gibi savaş aletleri ve rozet motifleri işlenmiştir. Bu zoomorfik (hayvan biçimli) eserler, İslamiyet öncesi Orta Asya şamanist geleneklerinin İslami dönemdeki tezahürleridir.", 
            en: "Stolen from the Tunceli Pülümür region, this ram-shaped tombstone represents the continuation of the cultural heritage of the Aq Qoyunlu and Qara Qoyunlu states (14th-15th centuries) in Eastern Anatolia. In nomadic Turkmen tribes, the 'ram' symbolizes power, fertility, and heroism. War tools such as swords, daggers, shields, and rosette motifs are carved on the side surfaces of the stone. These zoomorphic (animal-shaped) artifacts are manifestations of pre-Islamic Central Asian shamanistic traditions in the Islamic period.", 
            de: "Dieser aus der Region Tunceli Pülümür gestohlene widderförmige Grabstein stellt die Fortsetzung des kulturellen Erbes der Staaten Aq Qoyunlu und Qara Qoyunlu (14.-15. Jahrhundert) in Ostanatolien dar. Bei nomadischen Turkmenenstämmen symbolisiert der 'Widder' Macht, Fruchtbarkeit und Heldentum. Auf den Seitenflächen des Steins sind Kriegswerkzeuge wie Schwerter, Dolche, Schilde und Rosettenmotive eingemeißelt. Diese zoomorphen (tierförmigen) Artefakte sind Manifestationen vorislamischer zentralasiatischer schamanistischer Traditionen in der islamischen Zeit.", 
            ar: "يمثل شاهد القبر هذا على شكل كبش، المسروق من منطقة تونجيلي بولومور، استمراراً للتراث الثقافي لدولتي الآق قويونلو والقراقويونلو (القرنين الرابع عشر والخامس عشر) في شرق الأناضول. في القبائل التركمانية البدوية، يرمز 'الكبش' إلى القوة والخصوبة والبطولة. تم نحت أدوات الحرب مثل السيوف والخناجر والدروع وزخارف الوردة على الأسطح الجانبية للحجر. هذه القطع الأثرية الحيوانية الشكل هي مظاهر لتقاليد الشامانية في آسيا الوسطى قبل الإسلام في العصر الإسلامي.", 
            es: "Robada de la región de Tunceli Pülümür, esta lápida con forma de carnero representa la continuación del patrimonio cultural de los estados Aq Qoyunlu y Qara Qoyunlu (siglos XIV-XV) en Anatolia oriental. En las tribus nómadas turcomanas, el 'carnero' simboliza poder, fertilidad y heroísmo. Herramientas de guerra como espadas, dagas, escudos y motivos de roseta están tallados en las superficies laterales de la piedra. Estos artefactos zoomorfos (con forma de animal) son manifestaciones de tradiciones chamanísticas de Asia Central preislámicas en el período islámico.", 
            ru: "Украденное из региона Тунджели Пюлюмюр, это надгробие в форме барана представляет собой продолжение культурного наследия государств Ак-Коюнлу и Кара-Коюнлу (14-15 века) в Восточной Анатолии. У кочевых туркменских племен «баран» символизирует власть, плодородие и героизм. На боковых поверхностях камня вырезаны орудия войны, такие как мечи, кинжалы, щиты, а также мотивы розеток. Эти зооморфные (в форме животных) артефакты являются проявлениями доисламских центральноазиатских шаманистских традиций в исламский период." 
        }
    },
    { 
        id: 17, 
        title: { tr: "Hançerli Lahit", en: "Dagger Sarcophagus", de: "Dolch-Sarkophag", ar: "تابوت الخنجر", es: "Sarcófago con Daga", ru: "Саркофаг с кинжалом" },
        city: "İstanbul", date: dates.osmanli,
        coords: [41.0478, 28.9336], 
        media: { img: "assets/hancerli.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-168270/istanbul-ili-eyup-ilcesi-merkez-mahallesi-48-ada-18-parseldeeyup-camii-haziresiolarak-tescil-edilen-hazire-alanindan-calinan-mezar-sandukasi.html",
        clue: { tr: "Yeniçeri veya asker sınıfı mezarı.", en: "Janissary or soldier class tomb.", de: "Grab eines Janitscharen oder Soldaten.", ar: "قبر إنكشاري أو جندي.", es: "Tumba de jenízaro o soldado.", ru: "Могила янычара или солдата." },
        desc: { 
            tr: "İstanbul Eyüp Sultan Haziresi'nden çalınan bu mermer mezar sandukası, Osmanlı mezar taşı tipolojisinde 'erkek mezarı' grubuna girer. Sandukanın yan yüzeyinde kabartma olarak işlenmiş 'hançer' motifi, merhumun asker sınıfına (Seyfiye) mensup olduğunu veya bir Yeniçeri olduğunu simgeler. Selvi ağacı motifleri ise ölümü ve ebediyeti temsil eder. Eser, Osmanlı sosyal hiyerarşisinin mezar taşlarına yansımasını gösteren belge niteliğinde bir parçadır.", 
            en: "Stolen from the Eyüp Sultan Cemetery in Istanbul, this marble tomb sarcophagus falls into the 'male tomb' group in Ottoman tombstone typology. The 'dagger' motif carved in relief on the side of the sarcophagus symbolizes that the deceased belonged to the military class (Seyfiye) or was a Janissary. Cypress tree motifs represent death and eternity. The artifact is a documentary piece showing the reflection of the Ottoman social hierarchy on tombstones.", 
            de: "Dieser aus dem Friedhof Eyüp Sultan in Istanbul gestohlene Marmorsarkophag gehört in der osmanischen Grabsteintypologie zur Gruppe der 'Männergräber'. Das an der Seite des Sarkophags im Relief eingemeißelte 'Dolch'-Motiv symbolisiert, dass der Verstorbene der Militärklasse (Seyfiye) angehörte oder ein Janitschar war. Zypressenmotive stehen für Tod und Ewigkeit. Das Artefakt ist ein dokumentarisches Stück, das die Widerspiegelung der osmanischen sozialen Hierarchie auf Grabsteinen zeigt.", 
            ar: "يندرج تابوت القبر الرخامي هذا، المسروق من مقبرة أيوب سلطان في إسطنبول، ضمن مجموعة 'قبر الذكور' في تصنيف شواهد القبور العثمانية. يرمز شعار 'الخنجر' المنحوت بشكل بارز على جانب التابوت إلى أن المتوفى كان ينتمي إلى الطبقة العسكرية (السيفية) أو كان إنكشارياً. تمثل زخارف شجرة السرو الموت والأبدية. الأثر هو قطعة وثائقية تظهر انعكاس التسلسل الهرمي الاجتماعي العثماني على شواهد القبور.", 
            es: "Robado del Cementerio Eyüp Sultan en Estambul, este sarcófago de tumba de mármol entra en el grupo de 'tumba masculina' en la tipología de lápidas otomanas. El motivo de la 'daga' tallado en relieve en el costado del sarcófago simboliza que el difunto pertenecía a la clase militar (Seyfiye) o era un jenízaro. Los motivos de cipreses representan la muerte y la eternidad. El artefacto es una pieza documental que muestra el reflejo de la jerarquía social otomana en las lápidas.", 
            ru: "Украденный с кладбища Эюп Султан в Стамбуле, этот мраморный могильный саркофаг относится к группе «мужских могил» в типологии османских надгробий. Мотив «кинжала», вырезанный рельефом на боковой стороне саркофага, символизирует, что покойный принадлежал к военному сословию (Сейфие) или был янычаром. Мотивы кипариса олицетворяют смерть и вечность. Артефакт является документальным предметом, показывающим отражение османской социальной иерархии на надгробиях." 
        }
    },
    { 
        id: 18, 
        title: { tr: "Yangın Tulumbası", en: "Fire Pump", de: "Feuerlöschpumpe", ar: "مضخة حريق", es: "Bomba de Incendios", ru: "Пожарный насос" },
        city: "Antalya", date: dates.osmanli,
        coords: [37.0425, 31.7833], 
        media: { img: "assets/tulumba.jpg", model: "assets/tulumba.glb" }, 
        link: "https://kvmgm.ktb.gov.tr/TR-177051/antalya-akseki-ilcesi-godene-koyu-camiinden-kaybolan-yangin-ttulumbasi.html",
        clue: { tr: "Osmanlı kamu hizmeti aracı (H.1318).", en: "Ottoman public service tool (H.1318).", de: "Osmanisches Werkzeug für den öffentlichen Dienst (H.1318).", ar: "أداة الخدمة العامة العثمانية (1318 هـ).", es: "Herramienta de servicio público otomano (H.1318).", ru: "Османский инструмент общественной службы (1318 г. хиджры)." },
        desc: { 
            tr: "Antalya Akseki'deki Göden Köyü Camii'nden çalınan bu yangın tulumbası, Hicri 1318 (Miladi 1900-1901) tarihli olup, Osmanlı taşra teşkilatındaki modernleşme çabalarının bir göstergesidir. Ahşap gövde, metal pistonlar ve deri contalardan oluşan mekanizma, dönemin endüstriyel teknolojisini ve yangınla mücadele yöntemlerini yansıtır. Tulumbacılar Ocağı'ndan modern itfaiyeye geçiş sürecini belgeleyen nadir bir endüstriyel miras örneğidir.", 
            en: "Stolen from the Göden Village Mosque in Akseki, Antalya, this fire pump is dated Hijri 1318 (Gregorian 1900-1901) and is an indicator of modernization efforts in the Ottoman provincial organization. The mechanism, consisting of a wooden body, metal pistons, and leather gaskets, reflects the industrial technology and firefighting methods of the period. It is a rare example of industrial heritage documenting the transition process from the Tulumbacılar Ocağı to the modern fire department.", 
            de: "Diese aus der Moschee des Dorfes Göden in Akseki, Antalya, gestohlene Feuerlöschpumpe ist auf das Jahr 1318 n. d. H. (gregorianisch 1900-1901) datiert und ist ein Indikator für Modernisierungsbemühungen in der osmanischen Provinzorganisation. Der Mechanismus, der aus einem Holzkörper, Metallkolben und Lederdichtungen besteht, spiegelt die Industrietechnologie und die Brandbekämpfungsmethoden der Zeit wider. Sie ist ein seltenes Beispiel für das industrielle Erbe, das den Übergangsprozess vom Tulumbacılar Ocağı zur modernen Feuerwehr dokumentiert.", 
            ar: "مضخة الحريق هذه، المسروقة من مسجد قرية غودن في أكسيكي، أنطاليا، مؤرخة عام 1318 هجري (1900-1901 ميلادي) وتعد مؤشراً على جهود التحديث في التنظيم الإقليمي العثماني. تعكس الآلية، التي تتكون من جسم خشبي ومكابس معدنية وحشيات جلدية، التكنولوجيا الصناعية وطرق مكافحة الحرائق في تلك الفترة. إنه مثال نادر للتراث الصناعي يوثق عملية الانتقال من أوجاق الطلمبجية (فيلق رجال الإطفاء) إلى إدارة الإطفاء الحديثة.", 
            es: "Robada de la Mezquita del Pueblo Göden en Akseki, Antalya, esta bomba de incendios data de la Hégira 1318 (Gregoriano 1900-1901) y es un indicador de los esfuerzos de modernización en la organización provincial otomana. El mecanismo, que consta de un cuerpo de madera, pistones de metal y juntas de cuero, refleja la tecnología industrial y los métodos de extinción de incendios de la época. Es un raro ejemplo de patrimonio industrial que documenta el proceso de transición del Tulumbacılar Ocağı al moderno departamento de bomberos.", 
            ru: "Украденный из мечети деревни Гёден в Аксеки, Анталия, этот пожарный насос датирован 1318 годом по хиджре (1900-1901 по григорианскому календарю) и является показателем усилий по модернизации в османской провинциальной организации. Механизм, состоящий из деревянного корпуса, металлических поршней и кожаных прокладок, отражает промышленные технологии и методы пожаротушения того периода. Это редкий пример индустриального наследия, документирующий процесс перехода от Тулумбаджылар Оджагы к современной пожарной службе." 
        }
    },
    { 
        id: 19, 
        title: { tr: "Saat Kulesi Çanı", en: "Clock Tower Bell", de: "Glocke des Uhrturms", ar: "جرس برج الساعة", es: "Campana de la Torre del Reloj", ru: "Колокол часовой башни" },
        city: "Manisa", date: dates.yy19,
        coords: [38.6140, 27.4296], 
        media: { img: "assets/can.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-185386/manisa-ulu-camii39nin-onundeki-meydanda-yer-alan-saat-kulesinden-calinan-can.html",
        clue: { tr: "Kent meydanı saat kulesi parçası.", en: "Town square clock tower part.", de: "Teil des Uhrturms auf dem Stadtplatz.", ar: "جزء من برج الساعة في ساحة المدينة.", es: "Parte de la torre del reloj de la plaza del pueblo.", ru: "Часть часовой башни городской площади." },
        desc: { 
            tr: "Manisa Ulu Camii meydanındaki tarihi saat kulesinden çalınan bu bronz çan, II. Abdülhamid'in saltanatının 25. yılı (1901) anısına Anadolu'nun birçok kentine inşa edilen saat kuleleri projesinin bir parçasıdır. Çan üzerindeki döküm yazılar ve üretim damgası, dönemin metal döküm teknolojisini ve Osmanlı kentlerinde zaman kavramının modernleşmesini simgeler. Kamusal alandaki bu tür eserler, kentsel belleğin önemli parçalarıdır.", 
            en: "Stolen from the historical clock tower in Manisa Grand Mosque square, this bronze bell is part of the clock towers project built in many cities of Anatolia to commemorate the 25th anniversary of the reign of Abdul Hamid II (1901). The cast inscriptions and production stamp on the bell symbolize the metal casting technology of the period and the modernization of the concept of time in Ottoman cities. Such artifacts in the public sphere are important parts of urban memory.", 
            de: "Diese Bronzeglocke, die vom historischen Uhrturm auf dem Platz der Großen Moschee von Manisa gestohlen wurde, ist Teil des Uhrturmprojekts, das in vielen Städten Anatoliens zum Gedenken an den 25. Jahrestag der Herrschaft von Abdul Hamid II. (1901) gebaut wurde. Die gegossenen Inschriften und der Produktionsstempel auf der Glocke symbolisieren die Metallgusstechnologie der Zeit und die Modernisierung des Zeitbegriffs in osmanischen Städten. Solche Artefakte im öffentlichen Raum sind wichtige Bestandteile des städtischen Gedächtnisses.", 
            ar: "يعد هذا الجرس البرونزي، المسروق من برج الساعة التاريخي في ساحة المسجد الكبير في مانيسا، جزءاً من مشروع أبراج الساعة الذي تم بناؤه في العديد من مدن الأناضول للاحتفال بالذكرى الخامسة والعشرين لحكم عبد الحميد الثاني (1901). ترمز النقوش المصبوبة وطابع الإنتاج على الجرس إلى تكنولوجيا صب المعادن في تلك الفترة وتحديث مفهوم الوقت في المدن العثمانية. مثل هذه القطع الأثرية في المجال العام هي أجزاء مهمة من الذاكرة الحضرية.", 
            es: "Robada de la histórica torre del reloj en la plaza de la Gran Mezquita de Manisa, esta campana de bronce es parte del proyecto de torres del reloj construidas en muchas ciudades de Anatolia para conmemorar el 25 aniversario del reinado de Abdul Hamid II (1901). Las inscripciones fundidas y el sello de producción en la campana simbolizan la tecnología de fundición de metales de la época y la modernización del concepto de tiempo en las ciudades otomanas. Tales artefactos en la esfera pública son partes importantes de la memoria urbana.", 
            ru: "Украденный с исторической часовой башни на площади Великой мечети Манисы, этот бронзовый колокол является частью проекта часовых башен, построенных во многих городах Анатолии в ознаменование 25-летия правления Абдул-Хамида II (1901 г.). Литые надписи и производственное клеймо на колоколе символизируют технологию литья металла того периода и модернизацию концепции времени в османских городах. Такие артефакты в общественной сфере являются важными частями городской памяти." 
        }
    },
    { 
        id: 20, 
        title: { tr: "Çeşme Başı (Koç)", en: "Ram Head Spout", de: "Widderkopf-Auslauf", ar: "صنبور رأس الكبش", es: "Caño con Cabeza de Carnero", ru: "Излив в форме головы барана" },
        city: "Bolu", date: dates.selcuklu,
        coords: [40.4000, 31.5667], 
        media: { img: "assets/cesmebasi.jpg", model: "" },
        link: "https://kvmgm.ktb.gov.tr/TR-194395/bolu-ili-seben-ilcesi-demirciler-mahallesi-kozkaya-koyunden-calinan-kocbasi-seklinde-cesme-basi-ram-head-fountain-stolen-from-demirciler-neighborhood-at-kozkaya-village-in-seben-bolu.html",
        clue: { tr: "Figürlü Türk su mimarisi (Lüle).", en: "Figured Turkish water architecture (Spout).", de: "Figürliche türkische Wasserarchitektur (Auslauf).", ar: "عمارة مائية تركية مجسمة (صنبور).", es: "Arquitectura hidráulica turca figurada (Caño).", ru: "Фигурная турецкая водная архитектура (Излив)." },
        desc: { 
            tr: "Bolu Seben ilçesi Kozkaya Köyü'nden çalınan bu koç başı biçimli çeşme lülesi, Anadolu Selçuklu ve Beylikler Dönemi figürlü plastik sanatının özgün bir örneğidir. Türk mitolojisinde gücü ve bereketi simgeleyen koç figürü, suyun aktığı çeşme lülesi olarak işlevselleştirilmiştir. Bu eser, Orta Asya hayvan üslubunun Anadolu'daki mimari elemanlar üzerindeki devamlılığını göstermesi açısından ikonografik bir değere sahiptir.", 
            en: "Stolen from Kozkaya Village in the Seben district of Bolu, this ram head-shaped fountain spout is a unique example of Anatolian Seljuk and Beylik Period figurative plastic art. The ram figure, symbolizing power and fertility in Turkish mythology, has been functionalized as a fountain spout where water flows. This artifact has iconographic value as it demonstrates the continuity of the Central Asian animal style on architectural elements in Anatolia.", 
            de: "Dieser aus dem Dorf Kozkaya im Bezirk Seben in Bolu gestohlene widderkopfförmige Brunnenauslauf ist ein einzigartiges Beispiel für die figurative plastische Kunst der anatolischen Seldschuken- und Beylik-Zeit. Die Widderfigur, die in der türkischen Mythologie Macht und Fruchtbarkeit symbolisiert, wurde als Brunnenauslauf funktionalisiert, aus dem Wasser fließt. Dieses Artefakt hat ikonographischen Wert, da es die Kontinuität des zentralasiatischen Tierstils auf architektonischen Elementen in Anatolien demonstriert.", 
            ar: "يعد صنبور النافورة على شكل رأس كبش، المسروق من قرية كوزكايا في منطقة سيبن بولو، مثالاً فريداً للفن التشكيلي التصويري في العصر السلجوقي والبيليكي الأناضولي. تم توظيف شكل الكبش، الذي يرمز إلى القوة والخصوبة في الأساطير التركية، كصنبور نافورة يتدفق منه الماء. هذه القطعة الأثرية لها قيمة أيقونية لأنها توضح استمرارية النمط الحيواني في آسيا الوسطى على العناصر المعمارية في الأناضول.", 
            es: "Robado de la aldea Kozkaya en el distrito Seben de Bolu, este caño de fuente con forma de cabeza de carnero es un ejemplo único del arte plástico figurativo del período selyúcida de Anatolia y Beylik. La figura del carnero, que simboliza poder y fertilidad en la mitología turca, se ha funcionalizado como un caño de fuente por donde fluye el agua. Este artefacto tiene valor iconográfico ya que demuestra la continuidad del estilo animal de Asia Central en los elementos arquitectónicos de Anatolia.", 
            ru: "Украденный из деревни Козкая в районе Себен в Болу, этот излив фонтана в форме головы барана является уникальным примером фигуративного пластического искусства анатолийского сельджукского периода и периода бейликов. Фигура барана, символизирующая силу и плодородие в турецкой мифологии, была функционализирована как излив фонтана, откуда течет вода. Этот артефакт имеет иконографическую ценность, поскольку демонстрирует преемственность центральноазиатского звериного стиля на архитектурных элементах в Анатолии." 
        }
    },
    { 
        id: 21, 
        title: { tr: "Bronz Papağan", en: "Bronze Parrot", de: "Bronze-Papagei", ar: "ببغاء برونزي", es: "Loro de Bronce", ru: "Бронзовый попугай" },
        city: "Samsun", date: dates.roma,
        coords: [41.2867, 36.3300], 
        media: { img: "assets/papagan.jpg", model: "assets/papagan.glb", audio: "assets/papagan.mp3" },
        link: "https://kvmgm.ktb.gov.tr/",
        clue: { tr: "Amisos hazinesi, taş kakmalı gözler.", en: "Amisos treasure, stone-inlaid eyes.", de: "Amisos-Schatz, Augen mit Steineinlage.", ar: "كنز أميسوس، عيون مرصعة بالحجارة.", es: "Tesoro de Amisos, ojos con incrustaciones de piedra.", ru: "Сокровище Амисоса, глаза с инкрустацией камнями." },
        desc: { 
            tr: "Samsun'daki Amisos Tümülüsü kazılarında ele geçen bu bronz papağan heykelciği, Roma Dönemi metal sanatının en seçkin örneklerinden biridir. Gözlerinde kullanılan değerli taş kakmalar (muhtemelen lal taşı veya cam hamuru), eserin canlılığını artırır. Papağan, antik dünyada lüksü ve egzotizmi simgeleyen, genellikle soylu sınıfın veya saray çevresinin dekoratif objesi olarak kullanılan bir hayvandır. Eser, Karadeniz ticaret yollarının zenginliğini ve bölgedeki yüksek sanat zevkini kanıtlar.", 
            en: "Recovered from the excavations of the Amisos Tumulus in Samsun, this bronze parrot figurine is one of the most distinguished examples of Roman Period metal art. The precious stone inlays (probably garnet or glass paste) used in its eyes enhance the artifact's liveliness. The parrot is an animal symbolizing luxury and exoticism in the ancient world, generally used as a decorative object of the noble class or court circle. The artifact proves the richness of the Black Sea trade routes and the high artistic taste in the region.", 
            de: "Diese Bronzepapageienfigur, die bei den Ausgrabungen des Amisos-Hügelgrabs in Samsun geborgen wurde, ist eines der herausragendsten Beispiele der Metallkunst der Römerzeit. Die Edelsteineinlagen (wahrscheinlich Granat oder Glaspaste), die in seinen Augen verwendet wurden, verstärken die Lebendigkeit des Artefakts. Der Papagei ist ein Tier, das in der antiken Welt Luxus und Exotik symbolisiert und im Allgemeinen als dekoratives Objekt der Adelsklasse oder des Hofkreises verwendet wurde. Das Artefakt beweist den Reichtum der Handelsrouten am Schwarzen Meer und den hohen künstlerischen Geschmack in der Region.", 
            ar: "تمثال الببغاء البرونزي هذا، الذي تم استخراجه من حفريات تل أميسوس في سامسون، هو أحد الأمثلة الأكثر تميزاً للفن المعدني في العصر الروماني. تعزز ترصيعات الأحجار الكريمة (ربما العقيق أو معجون الزجاج) المستخدمة في عينيه حيوية القطعة الأثرية. الببغاء حيوان يرمز إلى الرفاهية والغرابة في العالم القديم، ويستخدم بشكل عام كشكل زخرفي للطبقة النبيلة أو دائرة البلاط. تثبت القطعة الأثرية ثراء طرق التجارة في البحر الأسود والذوق الفني الرفيع في المنطقة.", 
            es: "Recuperada de las excavaciones del Túmulo de Amisos en Samsun, esta estatuilla de loro de bronce es uno de los ejemplos más distinguidos del arte en metal del Período Romano. Las incrustaciones de piedras preciosas (probablemente granate o pasta de vidrio) utilizadas en sus ojos realzan la viveza del artefacto. El loro es un animal que simboliza el lujo y el exotismo en el mundo antiguo, generalmente utilizado como objeto decorativo de la clase noble o círculo cortesano. El artefacto prueba la riqueza de las rutas comerciales del Mar Negro y el alto gusto artístico en la región.", 
            ru: "Эта бронзовая статуэтка попугая, извлеченная при раскопках кургана Амисос в Самсуне, является одним из самых выдающихся примеров металлического искусства римского периода. Инкрустации из драгоценных камней (вероятно, гранат или стеклянная паста), использованные в его глазах, усиливают живость артефакта. Попугай — это животное, символизирующее роскошь и экзотику в древнем мире, обычно используемое в качестве декоративного предмета благородного сословия или придворного круга. Артефакт доказывает богатство черноморских торговых путей и высокий художественный вкус в регионе." 
        }
    }
];

// --- DİL SÖZLÜĞÜ ---
const translations = {
    tr: {
        title: "DİJİTAL İADE HARİTASI",
        desc: "Anadolu kökenli kültür varlıklarının dijital envanteri.",
        explore: "Haritayı Keşfet",
        help: "Rehber Turu",
        game: "Oyunu Başlat",
        headerTitle: "DİJİTAL İADE HARİTASI",
        allCities: "Tüm Şehirler",
        displayed: "Görüntülenen",
        gameQTitle: "SORU",
        gameScoreTitle: "PUAN",
        gameQuestion: "İpucuna göre eserin yerini bul!",
        endGame: "Oyunu Bitir",
        gameOver: "Oyun Bitti!",
        playAgain: "Tekrar Oyna",
        returnMap: "Haritaya Dön",
        settings: "Ayarlar",
        darkMode: "Karanlık Tema",
        language: "Dil / Language",
        labelLoc: "Köken:",
        labelDate: "Dönem:",
        menu: "Menü",
        correct: "Tebrikler! (+10)",
        wrong: "Yanlış! Hedef:",
        dirN: "Kuzey", dirS: "Güney", dirE: "Doğu", dirW: "Batı",
        dirNE: "Kuzeydoğu", dirNW: "Kuzeybatı", dirSE: "Güneydoğu", dirSW: "Güneybatı",
        tourTitle1: "Yardım Menüsü", tourDesc1: "Hoş geldiniz. Turu ilerletmek için ekrana tıklayın.",
        tourTitle2: "Ana Menü", tourDesc2: "Soldaki menüden eserleri arayabilir ve filtreleyebilirsiniz.",
        tourTitle3: "Harita İşaretçileri", tourDesc3: "Haritadaki noktalara tıklayarak eser detaylarını, 3D modelleri ve açıklamaları görün.",
        tourTitle4: "Oyun Modu", tourDesc4: "Bilginizi test edin. İpucunu okuyun ve haritada doğru şehri bulun.",
        tourTitle5: "Ayarlar", tourDesc5: "Karanlık mod ve dil seçeneklerine buradan ulaşın."
    },
    en: {
        title: "DIGITAL REPATRIATION MAP", desc: "Digital inventory of Anatolian cultural assets.",
        explore: "Explore Map", help: "Guided Tour", game: "Start Game",
        headerTitle: "DIGITAL REPATRIATION MAP", allCities: "All Cities", displayed: "Displayed",
        gameQTitle: "QUESTION", gameScoreTitle: "SCORE", gameQuestion: "Locate the artifact based on the clue!",
        endGame: "End Game", gameOver: "Game Over!", playAgain: "Play Again", returnMap: "Return to Map",
        settings: "Settings", darkMode: "Dark Mode", language: "Language",
        labelLoc: "Provenance:", labelDate: "Era:", menu: "Menu",
        correct: "Congratulations! (+10)", wrong: "Wrong! Target is to the",
        dirN: "North", dirS: "South", dirE: "East", dirW: "West",
        dirNE: "Northeast", dirNW: "Northwest", dirSE: "Southeast", dirSW: "Southwest",
        tourTitle1: "Help Menu", tourDesc1: "Welcome. Click screen to advance tour.",
        tourTitle2: "Main Menu", tourDesc2: "Search and filter artifacts from the left menu.",
        tourTitle3: "Map Markers", tourDesc3: "Click markers to see details, 3D models and descriptions.",
        tourTitle4: "Game Mode", tourDesc4: "Test your knowledge. Read clue, find city.",
        tourTitle5: "Settings", tourDesc5: "Access dark mode and language options."
    },
    de: {
        title: "DIGITALE RÜCKFÜHRUNGSKARTE", desc: "Digitales Inventar anatolischer Kulturgüter.",
        explore: "Karte Erkunden", help: "Führung", game: "Spiel Starten",
        headerTitle: "RÜCKFÜHRUNGSKARTE", allCities: "Alle Städte", displayed: "Angezeigt",
        gameQTitle: "FRAGE", gameScoreTitle: "PUNKTE", gameQuestion: "Finde das Artefakt!",
        endGame: "Beenden", gameOver: "Spiel Vorbei!", playAgain: "Nochmal", returnMap: "Zur Karte",
        settings: "Einstellungen", darkMode: "Dunkelmodus", language: "Sprache",
        labelLoc: "Herkunft:", labelDate: "Epoche:", menu: "Menü",
        correct: "Glückwunsch! (+10)", wrong: "Falsch! Ziel ist im",
        dirN: "Norden", dirS: "Süden", dirE: "Osten", dirW: "Westen",
        dirNE: "Nordosten", dirNW: "Nordwesten", dirSE: "Südosten", dirSW: "Südwesten",
        tourTitle1: "Hilfe", tourDesc1: "Willkommen. Klicken, um fortzufahren.",
        tourTitle2: "Hauptmenü", tourDesc2: "Suchen und Filtern im linken Menü.",
        tourTitle3: "Marker", tourDesc3: "Klicken für Details und 3D-Modelle.",
        tourTitle4: "Spiel", tourDesc4: "Wissen testen. Hinweis lesen, Stadt finden.",
        tourTitle5: "Einstellungen", tourDesc5: "Dunkelmodus und Sprache."
    },
    ar: {
        title: "خريطة الإعادة الرقمية", desc: "المخزون الرقمي للأصول الثقافية من الأناضول.",
        explore: "استكشف", help: "جولة", game: "لعبة",
        headerTitle: "خريطة الإعادة الرقمية", allCities: "كل المدن", displayed: "المعروض",
        gameQTitle: "سؤال", gameScoreTitle: "النقاط", gameQuestion: "ابحث عن الأثر!",
        endGame: "إنهاء", gameOver: "انتهت اللعبة", playAgain: "لعب مرة أخرى", returnMap: "عودة",
        settings: "الإعدادات", darkMode: "داكن", language: "اللغة",
        labelLoc: "المصدر:", labelDate: "العصر:", menu: "قائمة",
        correct: "مبروك! (+10)", wrong: "خطأ! الاتجاه:",
        dirN: "شمال", dirS: "جنوب", dirE: "شرق", dirW: "غرب",
        dirNE: "شمال شرق", dirNW: "شمال غرب", dirSE: "جنوب شرق", dirSW: "جنوب غرب",
        tourTitle1: "مساعدة", tourDesc1: "أهلا بك. انقر على الشاشة للمتابعة.",
        tourTitle2: "القائمة", tourDesc2: "البحث والتصفية من اليسار.",
        tourTitle3: "علامات", tourDesc3: "انقر للتفاصيل والنماذج ثلاثية الأبعاد.",
        tourTitle4: "لعبة", tourDesc4: "اختبر معلوماتك.",
        tourTitle5: "إعدادات", tourDesc5: "الوضع الداكن واللغة."
    },
    es: {
        title: "MAPA DE REPATRIACIÓN", desc: "Inventario digital de bienes culturales.",
        explore: "Explorar", help: "Guía", game: "Jugar",
        headerTitle: "MAPA DE REPATRIACIÓN", allCities: "Todas", displayed: "Mostrado",
        gameQTitle: "PREGUNTA", gameScoreTitle: "PUNTOS", gameQuestion: "¡Localiza el artefacto!",
        endGame: "Terminar", gameOver: "Fin del Juego", playAgain: "Jugar de Nuevo", returnMap: "Volver",
        settings: "Ajustes", darkMode: "Modo Oscuro", language: "Idioma",
        labelLoc: "Procedencia:", labelDate: "Era:", menu: "Menú",
        correct: "¡Bien! (+10)", wrong: "¡Mal! Dirección:",
        dirN: "Norte", dirS: "Sur", dirE: "Este", dirW: "Oeste",
        dirNE: "Noreste", dirNW: "Noroeste", dirSE: "Sureste", dirSW: "Suroeste",
        tourTitle1: "Ayuda", tourDesc1: "Bienvenido. Clic para avanzar.",
        tourTitle2: "Menú", tourDesc2: "Buscar y filtrar a la izquierda.",
        tourTitle3: "Marcadores", tourDesc3: "Clic para detalles y 3D.",
        tourTitle4: "Juego", tourDesc4: "Pon a prueba tus conocimientos.",
        tourTitle5: "Ajustes", tourDesc5: "Modo oscuro e idioma."
    },
    ru: {
        title: "КАРТА РЕПАТРИАЦИИ", desc: "Цифровой инвентарь культурных ценностей.",
        explore: "Исследовать", help: "Тур", game: "Играть",
        headerTitle: "КАРТА РЕПАТРИАЦИИ", allCities: "Все города", displayed: "Показано",
        gameQTitle: "ВОПРОС", gameScoreTitle: "СЧЕТ", gameQuestion: "Найдите артефакт!",
        endGame: "Закончить", gameOver: "Конец игры", playAgain: "Снова", returnMap: "Вернуться",
        settings: "Настройки", darkMode: "Темная тема", language: "Язык",
        labelLoc: "Происхождение:", labelDate: "Эпоха:", menu: "Меню",
        correct: "Верно! (+10)", wrong: "Неверно! Направление:",
        dirN: "Север", dirS: "Юг", dirE: "Восток", dirW: "Запад",
        dirNE: "Северо-восток", dirNW: "Северо-запад", dirSE: "Юго-восток", dirSW: "Юго-запад",
        tourTitle1: "Помощь", tourDesc1: "Добро пожаловать. Кликните для продолжения.",
        tourTitle2: "Меню", tourDesc2: "Поиск и фильтр слева.",
        tourTitle3: "Маркеры", tourDesc3: "Детали и 3D модели.",
        tourTitle4: "Игра", tourDesc4: "Проверьте знания.",
        tourTitle5: "Настройки", tourDesc5: "Темная тема и язык."
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

document.addEventListener('DOMContentLoaded', () => {
    initMap();
    renderSidebar(artifacts);
    updateCounter(artifacts.length);
    populateFilters();
    setupEventListeners();
});

function setupEventListeners() {
    // Video
    const vidBtn = document.getElementById('btn-open-museum');
    if(vidBtn) {
        vidBtn.onclick = () => {
            const overlay = document.getElementById('video-overlay');
            const video = document.getElementById('museum-video');
            overlay.classList.remove('hidden');
            video.currentTime = 0;
            video.play().catch(e => console.log("Video hatası:", e));
        };
    }
    document.getElementById('close-video-btn').onclick = () => {
        document.getElementById('video-overlay').classList.add('hidden');
        document.getElementById('museum-video').pause();
    };

    // Intro Butonları
    document.getElementById('btn-start-explore').onclick = closeIntro;
    document.getElementById('btn-start-tour').onclick = startTour;
    document.getElementById('btn-start-game').onclick = () => { closeIntro(); startGame(); };
    document.getElementById('btn-intro-settings').onclick = () => { toggleModal('settings-modal', true); };

    // Navigasyon Butonları
    document.getElementById('btn-game-nav').onclick = startGame;
    document.getElementById('btn-help-nav').onclick = startTour; // Yardım butonu turu başlatır
    document.getElementById('btn-settings').onclick = () => toggleModal('settings-modal', true);
    
    // Sidebar
    document.getElementById('toggle-sidebar').onclick = () => {
        const sb = document.getElementById('sidebar');
        if (window.innerWidth <= 768) sb.classList.toggle('mobile-active');
        else sb.classList.toggle('collapsed');
    };
    document.getElementById('close-sidebar-mobile').onclick = () => document.getElementById('sidebar').classList.remove('mobile-active');

    // Filtre & Arama
    document.getElementById('search-input').addEventListener('keyup', filterArtifacts);
    document.getElementById('city-filter').addEventListener('change', filterArtifacts);
    
    // Oyun
    document.getElementById('abort-game').onclick = window.closeGame;

    // Ayarlar
    document.getElementById('theme-toggle').addEventListener('change', (e) => {
        document.body.classList.toggle('dark-mode', e.target.checked);
    });
    document.getElementById('lang-select').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // Tur İlerleme (Tıklayarak)
    document.getElementById('spotlight-mask').onclick = () => {
        tourIndex++;
        showStep();
    };
}

function closeIntro() {
    document.getElementById('intro-screen').style.opacity = '0';
    setTimeout(() => document.getElementById('intro-screen').classList.add('hidden'), 500);
}

function initMap() {
    map = L.map('map', { zoomControl: false }).setView([39.0, 35.0], 6);
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    const street = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: 'OSM' });
    const sat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', { attribution: 'Esri' });

    street.addTo(map);
    L.control.layers({ "Sokak": street, "Uydu": sat }, null, { position: 'topright' }).addTo(map);

    markers = L.markerClusterGroup({ showCoverageOnHover: false, maxClusterRadius: 50 });
    map.addLayer(markers);

    renderMarkers(artifacts);
}

function renderMarkers(list) {
    markers.clearLayers(); 
    const t = translations[currentLang];

    list.forEach(item => {
        const m = L.marker(item.coords);
        
        let mediaContent = '';
        if (item.id === 21) {
            mediaContent = `<div class="audio-player-wrapper"><small>Ses / Audio:</small><audio controls><source src="${item.media.audio}" type="audio/mpeg"></audio></div>`;
        }
        let btn3D = item.media.model ? `<button class="btn-3d-trigger" onclick="open3D('${item.media.model}')"><i class="fa-solid fa-cube"></i></button>` : '';

        const title = item.title[currentLang] || item.title['tr'];
        const desc = item.desc[currentLang] || item.desc['tr'];
        // Dönem bilgisi çevirisi
        const dateText = item.date[currentLang] || item.date['tr'];
        
        let linkHTML = item.id !== 21 ? `<a href="${item.link}" target="_blank" class="gov-link-btn">T.C. Kültür Bakanlığı Kaynağı</a>` : '';

        const popupHTML = `
            <div class="popup-card">
                <div class="popup-img-container">
                    <img src="${item.media.img}" class="popup-img" onerror="this.src='https://placehold.co/400x300?text=Img'">
                    ${btn3D}
                </div>
                ${mediaContent}
                <div class="popup-info">
                    <h3>${title}</h3>
                    <div class="meta-row"><i class="fa-solid fa-location-dot"></i> ${t.labelLoc} <span class="meta-value">${item.city}</span></div>
                    <div class="meta-row"><i class="fa-solid fa-hourglass-half"></i> ${t.labelDate} <span class="meta-value">${dateText}</span></div>
                    <div class="desc-text">${desc}</div>
                    ${linkHTML}
                </div>
            </div>
        `;

        m.bindPopup(popupHTML, { maxWidth: 320 });
        m.on('click', (e) => { if(gameMode) { m.closePopup(); checkAnswer(item, e.latlng); } });
        markers.addLayer(m); 
    });
}

function renderSidebar(list) {
    const container = document.getElementById('artifact-list');
    container.innerHTML = '';
    list.forEach(item => {
        const div = document.createElement('div');
        div.className = 'artifact-item';
        const title = item.title[currentLang] || item.title['tr'];
        div.innerHTML = `<img src="${item.media.img}" class="thumb" onerror="this.src='https://placehold.co/100?text=...'">
                         <div class="artifact-info"><h4>${title}</h4><small>${item.city}</small></div>`;
        div.onclick = () => {
            if(gameMode) return;
            if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('mobile-active');
            map.flyTo(item.coords, 14);
            markers.zoomToShowLayer(markers.getLayers().find(l => l.getLatLng().equals(item.coords)));
        };
        container.appendChild(div);
    });
}

function updateCounter(count) { document.getElementById('visible-count').innerText = count; }

function populateFilters() {
    const cities = [...new Set(artifacts.map(a => a.city))].sort();
    const citySelect = document.getElementById('city-filter');
    const t = translations[currentLang];
    citySelect.innerHTML = `<option value="all">${t.allCities}</option>`;
    cities.forEach(c => { const opt = document.createElement('option'); opt.value = c; opt.innerText = c; citySelect.appendChild(opt); });
}

function filterArtifacts() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const city = document.getElementById('city-filter').value;
    const filtered = artifacts.filter(a => {
        const title = (a.title[currentLang] || a.title['tr']).toLowerCase();
        return (title.includes(search) || a.city.toLowerCase().includes(search)) && (city === 'all' || a.city === city);
    });
    renderMarkers(filtered);
    renderSidebar(filtered);
    updateCounter(filtered.length);
}

window.open3D = function(path) {
    const container = document.getElementById('model-wrapper');
    container.innerHTML = `<model-viewer src="${path}" auto-rotate camera-controls ar shadow-intensity="1" style="width: 100%; height: 100%;" background-color="#f0f0f0"></model-viewer>`;
    toggleModal('model-modal', true);
};
window.closeModelModal = function() { toggleModal('model-modal', false); document.getElementById('model-wrapper').innerHTML = ''; };
function toggleModal(id, show) { const el = document.getElementById(id); if(show) el.classList.remove('hidden'); else el.classList.add('hidden'); }

// --- OYUN ---
function startGame() {
    gameMode = true;
    document.getElementById('game-ui').classList.remove('hidden');
    document.getElementById('sidebar').classList.remove('mobile-active');
    if(window.innerWidth > 768) document.getElementById('sidebar').classList.add('collapsed');
    
    // Rastgele 5 soru
    gameQueue = [...artifacts].sort(() => 0.5 - Math.random()).slice(0, 5);
    score = 0;
    qIndex = 0;
    renderMarkers(artifacts);
    nextQuestion();
}

function nextQuestion() {
    if(qIndex >= gameQueue.length) { finishGame(); return; }
    currentTarget = gameQueue[qIndex];
    qIndex++;
    const t = translations[currentLang];
    document.getElementById('q-counter').innerText = `${qIndex}/${gameQueue.length}`;
    document.getElementById('target-name').innerText = `${t.gameQTitle} ${qIndex}`;
    document.getElementById('target-hint').innerText = currentTarget.clue[currentLang] || currentTarget.clue['tr'];
    document.getElementById('score-display').innerText = score;
}

function getCardinalDirection(angle) {
    const t = translations[currentLang];
    const directions = [t.dirN, t.dirNE, t.dirE, t.dirSE, t.dirS, t.dirSW, t.dirW, t.dirNW];
    const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
}

function calculateBearing(startLat, startLng, destLat, destLng) {
    const startLatRad = startLat * Math.PI / 180;
    const startLngRad = startLng * Math.PI / 180;
    const destLatRad = destLat * Math.PI / 180;
    const destLngRad = destLng * Math.PI / 180;
    const y = Math.sin(destLngRad - startLngRad) * Math.cos(destLatRad);
    const x = Math.cos(startLatRad) * Math.sin(destLatRad) - Math.sin(startLatRad) * Math.cos(destLatRad) * Math.cos(destLngRad - startLngRad);
    return Math.atan2(y, x) * 180 / Math.PI;
}

function showMapFeedback(latlng, message, duration, type) {
    const color = type === 'success' ? '#2ecc71' : '#e74c3c';
    const feedbackPopup = L.popup({ closeButton: false, autoClose: false, className: 'game-feedback-popup', offset: [0, -10] })
        .setLatLng(latlng)
        .setContent(`<div style="text-align:center; font-weight:bold; color:${color}; font-size:1rem; padding:5px;">${message}</div>`)
        .openOn(map);
    setTimeout(() => map.closePopup(feedbackPopup), duration);
}

function checkAnswer(clickedItem, latlng) {
    const t = translations[currentLang];
    if(clickedItem.id === currentTarget.id) {
        score += 10;
        document.getElementById('score-display').innerText = score;
        showMapFeedback(latlng, t.correct, 3000, 'success');
        setTimeout(nextQuestion, 3000);
    } else {
        score -= 5;
        document.getElementById('score-display').innerText = score;
        const dist = Math.round(map.distance(latlng, currentTarget.coords) / 1000);
        const bearing = calculateBearing(latlng.lat, latlng.lng, currentTarget.coords[0], currentTarget.coords[1]);
        const msg = `${t.wrong}<br>${dist} km ${getCardinalDirection(bearing)}`;
        showMapFeedback(latlng, msg, 5000, 'error');
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
    if(window.innerWidth > 768) document.getElementById('sidebar').classList.remove('collapsed');
};

window.restartGame = function() { toggleModal('game-over-modal', false); startGame(); };

// --- TUR ---
const tourSteps = [
    { el: '#btn-help-nav', key: 'tourTitle1', descKey: 'tourDesc1' },
    { el: '#sidebar', key: 'tourTitle2', descKey: 'tourDesc2' },
    { el: '#map', key: 'tourTitle3', descKey: 'tourDesc3' },
    { el: '#btn-game-nav', key: 'tourTitle4', descKey: 'tourDesc4' },
    { el: '#btn-settings', key: 'tourTitle5', descKey: 'tourDesc5' }
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
    if (tourIndex >= tourSteps.length) { document.getElementById('spotlight-overlay').classList.add('hidden'); return; }
    
    const step = tourSteps[tourIndex];
    const target = document.querySelector(step.el);
    if(target) target.classList.add('tour-highlight');

    const t = translations[currentLang];
    document.getElementById('tour-title').innerText = t[step.key];
    document.getElementById('tour-desc').innerText = t[step.descKey];
    document.getElementById('tour-step').innerText = `${tourIndex + 1}/${tourSteps.length}`;
}

window.setLanguage = function(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll('[data-lang]').forEach(el => {
        const key = el.getAttribute('data-lang');
        if(t[key]) el.innerText = t[key];
    });
    populateFilters();
    renderSidebar(artifacts);
    renderMarkers(artifacts);
    if(gameMode && currentTarget) {
        document.getElementById('target-name').innerText = `${t.gameQTitle} ${qIndex}`;
        document.getElementById('target-hint').innerText = currentTarget.clue[currentLang] || currentTarget.clue['tr'];
    }
};