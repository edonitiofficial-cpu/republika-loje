/* ============================================================================
   1. BAZA E TË DHËNAVE FILLESTARE REALE & 120 DEPUTETËT E LEGJISLATURËS
   ============================================================================ */
const FULL_ROSTER_NAMES = {
    LVV: [
        "Albin Kurti", "Glauk Konjufca", "Albulena Haxhiu", "Donika Gërvalla-Schwarz", "Hekuran Murati",
        "Xhelal Sveçla", "Arben Vitia", "Ejup Maqedonci", "Mimoza Kusari-Lila", "Artane Rizvanolli",
        "Arbërie Nagavci", "Hajrulla Çeku", "Faton Peci", "Liburn Aliu", "Rozeta Hajdari",
        "Saranda Bogujevci", "Armend Muja", "Jeta Statovci", "Mefail Bajqinovci", "Fitore Pacolli-Dalipi",
        "Dimal Basha", "Salih Zyba", "Adnan Rrustemi", "Arbreshë Kryeziu-Hyseni", "Tinka Kurti",
        "Driton Hyseni", "Enver Dugolli", "Fatmire Kollçaku", "Labinotë Demi-Murtezi", "Haki Abazi",
        "Valon Ramadani", "Nijazi Isaku", "Shqipe Mehmeti-Selimi", "Ardian Gola", "Avni Dehari",
        "Besim Muzaqi", "Fjolla Ujkani", "Halil Thaçi", "Mirlinda Tishukaj-Sadiku", "Vendenis Lahu",
        "Agon Batusha", "Alban Bajrami", "Arjeta Fejza", "Arta Bajralija", "Burim Meta",
        "Drita Millaku", "Ekrem Mustafa", "Enver Haliti", "Fatmir Humolli", "Gani Krasniqi",
        "Gramoz Agusholli", "Hydajet Hyseni-Kaloshi", "Jahja Kokaj", "Jetmire Vrenezi", "Luan Aliu"
    ],
    PDK: [
        "Bedri Hamza", "Memli Krasniqi", "Vlora Çitaku", "Uran Ismaili", "Abelard Tahiri",
        "Eliza Hoxha", "Blerta Deliu-Kodra", "Xhavit Haliti", "Mërgim Lushtaku", "Ganimete Musliu",
        "Ferat Shala", "Rashit Qalaj", "Enver Hoxhaj", "Ariana Musliu-Shoshi", "Bekim Haxhiu",
        "Hajdar Beqa", "Isak Shabani", "Floretë Zejnullahu", "Hisni Kilaj", "Ardian Kastrati",
        "Fadil Nura", "Përparim Gruda", "Besa Kabashi-Ramaj", "Zenun Pajaziti"
    ],
    LDK: [
        "Lumir Abdixhiku", "Hykmete Bajrami", "Lutfi Haziri", "Doarsa Kica-Xhelili", "Kujtim Shala",
        "Avdullah Hoti", "Arben Gashi", "Jehona Lushaku-Sadriu", "Besian Mustafa", "Armend Zemaj",
        "Anton Quni", "Vlora Dumoshi", "Marigona Geci", "Driton Selmanaj", "Valentina Bunjaku-Rexhepi",
        "Rrezarta Krasniqi", "Agim Veliu", "Alban Zogaj", "Sibel Halimi", "Visar Azemi"
    ],
    AAK: [
        "Ardian Gjini", "Ramush Haradinaj", "Besnik Tahiri", "Time Kadrijaj", "Albana Bytyqi",
        "Bekë Berisha", "Pal Lekaj", "Shemsedin Dreshaj", "Daut Haradinaj"
    ],
    MIN_MULTI: [
        "Elbert Krasniqi (IRDK)", "Emilija Redžepi (NDS)", "Fikrim Damka (KDTP)", "Nenad Rašić (ZSPO)",
        "Duda Balje (SDU)", "Rasim Demiri (Vakat)", "Veton Berisha (PLE)", "Artan Asllani (PSA)",
        "Adem Hodža (JGP)", "Albert Kinolli (PREBK)", "Enis Kervan (KDTP)"
    ],
    SL: [
        "Zlatan Elek (SL)", "Igor Simić (SL)", "Slavko Simić (SL)", "Miljana Nikolić (SL)",
        "Zoran Mojsilović (SL)", "Verica Ćeranić (SL)", "Branislav Nikolić (SL)",
        "Milan Kostić (SL)", "Cvetko Veljković (SL)", "Ljubinko Karadžić (SL)"
    ]
};

const INITIAL_POLITICAL_DB = {
    electionDate: "7 Qershor 2026",
    certificationDate: "8 Korrik 2026",
    turnoutPercent: 41.45,
    constitutionalRules: {
        totalSeats: 120,
        generalSeats: 100,
        guaranteedMinoritySeats: 20,
        serbGuaranteedSeats: 10,
        otherMinorityGuaranteedSeats: 10,
        thresholdGeneral: 5.0,
        simpleMajority: 61,
        twoThirdsMajority: 80,
        presidentialRound1And2: 80,
        presidentialRound3Votes: 61,
        presidentialQuorum: 80,
        genderQuotaMinPercent: 30
    },
    parties: {
        LVV: {
            id: "LVV",
            name: "Lëvizja Vetëvendosje! (me Guxo & Alternativa)",
            short: "LVV",
            leader: "Albin Kurti",
            deputyLeaders: ["Glauk Konjufca", "Albulena Haxhiu", "Donika Gërvalla-Schwarz"],
            orgSecretary: "Alim Rama",
            color: "#dc2626",
            tagClass: "tag-lvv",
            seats: 53,
            poll: 47.13,
            community: "GENERAL",
            ideology: "Socialdemokraci, Sovranitet Shtetëror & Zhvillim",
            euStance: 88,
            usStance: 82,
            dialogueStance: "Reciprocitet i plotë dhe mos-themelim i asociacionit monoetnik",
            partyDiscipline: 92,
            internalCohesion: 88,
            partyFunds: 420000,
            relations: { LVV: 100, PDK: 24, LDK: 38, AAK: 28, MIN_MULTI: 84, SL: 10 },
            candidates: [
                { id: "c_kurti", name: "Albin Kurti", gender: "M", region: "PRISHTINA", pop: 95, loyalty: 100, role: "Kryeministër / Kryetar i LVV" },
                { id: "c_konjufca", name: "Glauk Konjufca", gender: "M", region: "PRISHTINA", pop: 91, loyalty: 95, role: "Zëvendëskryeministër I & Ministër i Jashtëm" },
                { id: "c_haxhiu", name: "Albulena Haxhiu", gender: "F", region: "PRISHTINA", pop: 84, loyalty: 98, role: "Kryetare e Kuvendit të Kosovës" },
                { id: "c_gervalla", name: "Donika Gërvalla", gender: "F", region: "PEJA", pop: 79, loyalty: 90, role: "Ministre e Drejtësisë (Guxo)" },
                { id: "c_murati", name: "Hekuran Murati", gender: "M", region: "FERIZAJ", pop: 82, loyalty: 96, role: "Ministër i Financave" },
                { id: "c_svecla", name: "Xhelal Sveçla", gender: "M", region: "PRISHTINA", pop: 85, loyalty: 97, role: "Ministër i Punëve të Brendshme" },
                { id: "c_vitia", name: "Arben Vitia", gender: "M", region: "PRISHTINA", pop: 83, loyalty: 94, role: "Ministër i Shëndetësisë" },
                { id: "c_macedonci", name: "Ejup Maqedonci", gender: "M", region: "PRISHTINA", pop: 88, loyalty: 93, role: "Ministër i Mbrojtjes" },
                { id: "c_kusari", name: "Mimoza Kusari-Lila", gender: "F", region: "GJAKOVA", pop: 76, loyalty: 86, role: "Shefe e GP (Alternativa)" },
                { id: "c_rizvanolli", name: "Artane Rizvanolli", gender: "F", region: "PRISHTINA", pop: 77, loyalty: 92, role: "Ministre e Ekonomisë" },
                { id: "c_nagavci", name: "Arbërie Nagavci", gender: "F", region: "GJAKOVA", pop: 74, loyalty: 95, role: "Ministre e Arsimit" },
                { id: "c_ceku", name: "Hajrulla Çeku", gender: "M", region: "PRIZRENI", pop: 81, loyalty: 94, role: "Ministër i Kulturës, Rinisë dhe Sportit" },
                { id: "c_peci", name: "Faton Peci", gender: "M", region: "MITROVICA", pop: 80, loyalty: 90, role: "Ministër i Bujqësisë" },
                { id: "c_aliu", name: "Liburn Aliu", gender: "M", region: "PRISHTINA", pop: 75, loyalty: 81, role: "Ministër i Infrastrukturës & Mjedisit" },
                { id: "c_hajdari", name: "Rozeta Hajdari", gender: "F", region: "PEJA", pop: 71, loyalty: 93, role: "Ministre e Industrisë dhe Tregtisë" },
                { id: "c_basha", name: "Dimal Basha", gender: "M", region: "FERIZAJ", pop: 73, loyalty: 89, role: "Deputet" },
                { id: "c_pacolli_f", name: "Fitore Pacolli", gender: "F", region: "PRISHTINA", pop: 74, loyalty: 94, role: "Deputete" },
                { id: "c_abazi_m", name: "Mefail Bajqinovci", gender: "M", region: "PRISHTINA", pop: 76, loyalty: 95, role: "Deputet" },
                { id: "c_bogujevci", name: "Saranda Bogujevci", gender: "F", region: "PRISHTINA", pop: 82, loyalty: 95, role: "Nënkryetare e Kuvendit" },
                { id: "c_zyba", name: "Salih Zyba", gender: "M", region: "PRIZRENI", pop: 70, loyalty: 96, role: "Deputet" }
            ],
            reserves: [
                { id: "r_lvv_1", name: "Jeta Statovci", gender: "F", region: "PRISHTINA", pop: 75, loyalty: 89, role: "Deputete / Ekonomiste" },
                { id: "r_lvv_2", name: "Armend Muja", gender: "M", region: "MITROVICA", pop: 76, loyalty: 88, role: "Kryetar i Komisionit për Buxhet" },
                { id: "r_lvv_3", name: "Taulant Kelmendi", gender: "M", region: "PEJA", pop: 72, loyalty: 91, role: "Ekspert Digjital" }
            ]
        },
        PDK: {
            id: "PDK",
            name: "Partia Demokratike e Kosovës",
            short: "PDK",
            leader: "Bedri Hamza",
            deputyLeaders: ["Memli Krasniqi", "Vlora Çitaku", "Uran Ismaili"],
            orgSecretary: "Betim Gjoshi",
            color: "#2563eb",
            tagClass: "tag-pdk",
            seats: 22,
            poll: 19.44,
            community: "GENERAL",
            ideology: "Qendra e Djathtë, Zhvillim Ekonomik & Partneritet Atlantik",
            euStance: 94,
            usStance: 98,
            dialogueStance: "Marrëveshje gjithëpërfshirëse në koordinim të plotë me SHBA-në",
            partyDiscipline: 87,
            internalCohesion: 85,
            partyFunds: 360000,
            relations: { LVV: 24, PDK: 100, LDK: 62, AAK: 68, MIN_MULTI: 75, SL: 15 },
            candidates: [
                { id: "c_hamza", name: "Bedri Hamza", gender: "M", region: "MITROVICA", pop: 89, loyalty: 96, role: "Kryetar i PDK-së / Ekspert Financiar" },
                { id: "c_krasniqi", name: "Memli Krasniqi", gender: "M", region: "PRISHTINA", pop: 83, loyalty: 95, role: "Deputet / Ish-Kryetar i PDK" },
                { id: "c_citaku", name: "Vlora Çitaku", gender: "F", region: "PRISHTINA", pop: 82, loyalty: 94, role: "Sekretare e Përgjithshme / Diplomate" },
                { id: "c_ismaili", name: "Uran Ismaili", gender: "M", region: "PRISHTINA", pop: 81, loyalty: 93, role: "Nënkryetar i PDK-së" },
                { id: "c_tahiri_a", name: "Abelard Tahiri", gender: "M", region: "PRISHTINA", pop: 78, loyalty: 92, role: "Shef i Grupit Parlamentar" },
                { id: "c_hoxha_e", name: "Eliza Hoxha", gender: "F", region: "PRISHTINA", pop: 79, loyalty: 90, role: "Deputete / Arkitekte" },
                { id: "c_deliu", name: "Blerta Deliu-Kodra", gender: "F", region: "MITROVICA", pop: 76, loyalty: 93, role: "Deputete" },
                { id: "c_haliti", name: "Xhavit Haliti", gender: "M", region: "PEJA", pop: 74, loyalty: 85, role: "Deputet Veteran" },
                { id: "c_lushtaku", name: "Mërgim Lushtaku", gender: "M", region: "MITROVICA", pop: 77, loyalty: 80, role: "Deputet (Drenica)" },
                { id: "c_musliu", name: "Ganimete Musliu", gender: "F", region: "MITROVICA", pop: 75, loyalty: 88, role: "Deputete" }
            ],
            reserves: [
                { id: "r_pdk_1", name: "Përparim Gruda", gender: "M", region: "PRISHTINA", pop: 76, loyalty: 91, role: "Ekspert Kushtetues" }
            ]
        },
        LDK: {
            id: "LDK",
            name: "Lidhja Demokratike e Kosovës",
            short: "LDK",
            leader: "Lumir Abdixhiku",
            deputyLeaders: ["Lutfi Haziri", "Hykmete Bajrami", "Doarsa Kica-Xhelili"],
            orgSecretary: "Imri Ahmeti",
            color: "#0ea5e9",
            tagClass: "tag-ldk",
            seats: 18,
            poll: 16.69,
            community: "GENERAL",
            ideology: "Qendra e Djathtë, Institucionalizëm & Integrim Euro-Atlantik",
            euStance: 96,
            usStance: 97,
            dialogueStance: "Respektim i Kushtetutës dhe aleancë e përhershme me SHBA dhe BE",
            partyDiscipline: 83,
            internalCohesion: 82,
            partyFunds: 310000,
            relations: { LVV: 38, PDK: 62, LDK: 100, AAK: 64, MIN_MULTI: 78, SL: 15 },
            candidates: [
                { id: "c_abdixhiku", name: "Lumir Abdixhiku", gender: "M", region: "PRISHTINA", pop: 86, loyalty: 97, role: "Kryetar i LDK-së" },
                { id: "c_bajrami", name: "Hykmete Bajrami", gender: "F", region: "PRISHTINA", pop: 83, loyalty: 92, role: "Nënkryetare / Ekonomiste" },
                { id: "c_haziri", name: "Lutfi Haziri", gender: "M", region: "GJILANI", pop: 81, loyalty: 84, role: "Nënkryetar i LDK-së" },
                { id: "c_kica", name: "Doarsa Kica-Xhelili", gender: "F", region: "PRISHTINA", pop: 82, loyalty: 93, role: "Nënkryetare / Juriste" },
                { id: "c_hoti", name: "Avdullah Hoti", gender: "M", region: "GJAKOVA", pop: 78, loyalty: 82, role: "Ish-Kryeministër / Deputet" },
                { id: "c_gashi_a", name: "Arben Gashi", gender: "M", region: "PEJA", pop: 77, loyalty: 88, role: "Deputet" },
                { id: "c_llalloshi", name: "Jehona Lushaku-Sadriu", gender: "F", region: "PRISHTINA", pop: 76, loyalty: 94, role: "Kryetare e Forumit të Gruas" },
                { id: "c_mustafa_b", name: "Besian Mustafa", gender: "M", region: "PRISHTINA", pop: 77, loyalty: 93, role: "Deputet" }
            ],
            reserves: [
                { id: "r_ldk_1", name: "Alban Zogaj", gender: "M", region: "PRISHTINA", pop: 76, loyalty: 92, role: "Nënkryetar i Prishtinës" }
            ]
        },
        AAK: {
            id: "AAK",
            name: "Aleanca për Ardhmërinë e Kosovës",
            short: "AAK",
            leader: "Ardian Gjini / Ramush Haradinaj",
            deputyLeaders: ["Besnik Tahiri", "Time Kadrijaj", "Pal Lekaj"],
            orgSecretary: "Blerim Kuçi",
            color: "#d97706",
            tagClass: "tag-aak",
            seats: 7,
            poll: 6.74,
            community: "GENERAL",
            ideology: "Konservatorizëm Kombëtar, Siguri & Anëtarësim direkt në NATO",
            euStance: 89,
            usStance: 96,
            dialogueStance: "Marrëveshje finale me njohje reciproke nën udhëheqjen amerikane",
            partyDiscipline: 89,
            internalCohesion: 87,
            partyFunds: 195000,
            relations: { LVV: 28, PDK: 68, LDK: 64, AAK: 100, MIN_MULTI: 70, SL: 12 },
            candidates: [
                { id: "c_gjini", name: "Ardian Gjini", gender: "M", region: "GJAKOVA", pop: 83, loyalty: 96, role: "Kryetar / Drejtues i AAK-së" },
                { id: "c_haradinaj", name: "Ramush Haradinaj", gender: "M", region: "PEJA", pop: 84, loyalty: 98, role: "Lider Historik / Ish-Kryeministër" },
                { id: "c_tahiri_b", name: "Besnik Tahiri", gender: "M", region: "PRISHTINA", pop: 79, loyalty: 94, role: "Shef i Grupit Parlamentar" },
                { id: "c_kadrijaj", name: "Time Kadrijaj", gender: "F", region: "PEJA", pop: 77, loyalty: 96, role: "Deputete" },
                { id: "c_bytyqi", name: "Albana Bytyqi", gender: "F", region: "PRIZRENI", pop: 73, loyalty: 92, role: "Deputete" },
                { id: "c_berisha_b", name: "Bekë Berisha", gender: "M", region: "PEJA", pop: 75, loyalty: 91, role: "Deputet" },
                { id: "c_lekaj", name: "Pal Lekaj", gender: "M", region: "GJAKOVA", pop: 72, loyalty: 90, role: "Deputet" }
            ],
            reserves: []
        },
        MIN_MULTI: {
            id: "MIN_MULTI",
            name: "Grupi Multietnik & Komunitetet (KDTP, IRDK, NDS, Vakat, SDU, PSA, PLE, JGP, PREBK, ZSPO)",
            short: "Komunitetet (11)",
            leader: "Elbert Krasniqi & Emilija Redžepi",
            deputyLeaders: ["Fikrim Damka (KDTP)", "Nenad Rašić (ZSPO)", "Duda Balje (SDU)"],
            orgSecretary: "Veton Berisha (PLE)",
            color: "#10b981",
            tagClass: "tag-min",
            seats: 11,
            poll: 4.60,
            community: "GUARANTEED_MULTI",
            ideology: "Të Drejtat e Komuniteteve, Integrim Institucional & Bashkëqeverisje",
            euStance: 92,
            usStance: 92,
            dialogueStance: "Integrim paqësor i të gjitha komuniteteve në institucionet e Kosovës",
            partyDiscipline: 85,
            internalCohesion: 80,
            partyFunds: 150000,
            relations: { LVV: 84, PDK: 75, LDK: 78, AAK: 70, MIN_MULTI: 100, SL: 25 },
            candidates: [
                { id: "c_krasniqi_e", name: "Elbert Krasniqi (IRDK)", gender: "M", region: "PEJA", pop: 79, loyalty: 92, role: "Ministër i MAPL" },
                { id: "c_redzepi", name: "Emilija Redžepi (NDS)", gender: "F", region: "PRIZRENI", pop: 78, loyalty: 91, role: "Zëvendëskryeministre III" },
                { id: "c_damka", name: "Fikrim Damka (KDTP)", gender: "M", region: "PRIZRENI", pop: 77, loyalty: 89, role: "Ministër i Zhvillimit Rajonal" },
                { id: "c_rasic", name: "Nenad Rašić (ZSPO)", gender: "M", region: "PRISHTINA", pop: 75, loyalty: 88, role: "Ministër për Komunitete dhe Kthim" },
                { id: "c_balje", name: "Duda Balje (SDU)", gender: "F", region: "PRIZRENI", pop: 80, loyalty: 78, role: "Deputete (Komuniteti Boshnjak)" },
                { id: "c_demiri", name: "Rasim Demiri (Vakat)", gender: "M", region: "PRIZRENI", pop: 74, loyalty: 82, role: "Deputet (Koalicioni Vakat)" },
                { id: "c_berisha_v", name: "Veton Berisha (PLE)", gender: "M", region: "PEJA", pop: 75, loyalty: 84, role: "Deputet (Partia Liberale Egjiptiane)" },
                { id: "c_asllani", name: "Artan Asllani (PSA)", gender: "M", region: "FERIZAJ", pop: 72, loyalty: 86, role: "Deputet (Komuniteti Ashkali)" },
                { id: "c_hodza", name: "Adem Hodža (JGP)", gender: "M", region: "PRIZRENI", pop: 68, loyalty: 74, role: "Deputet (Komuniteti Goran)" },
                { id: "c_kinoli", name: "Albert Kinolli (PREBK)", gender: "M", region: "PRISHTINA", pop: 73, loyalty: 85, role: "Deputet (Komuniteti Rom)" },
                { id: "c_kdtp2", name: "Enis Kervan (KDTP)", gender: "M", region: "PRIZRENI", pop: 72, loyalty: 88, role: "Deputet (Komuniteti Turk)" }
            ],
            reserves: []
        },
        SL: {
            id: "SL",
            name: "Lista Serbe (Srpska Lista)",
            short: "Lista Serbe (9)",
            leader: "Zlatan Elek",
            deputyLeaders: ["Igor Simić", "Slavko Simić"],
            orgSecretary: "Milan Radojević",
            color: "#475569",
            tagClass: "tag-sl",
            seats: 9,
            poll: 5.40,
            community: "GUARANTEED_SERB",
            ideology: "Përfaqësim i komunitetit serb në koordinim me Beogradin",
            euStance: 50,
            usStance: 45,
            dialogueStance: "Themelim i menjëhershëm i Asociacionit me kompetenca ekzekutive",
            partyDiscipline: 95,
            internalCohesion: 90,
            partyFunds: 210000,
            relations: { LVV: 10, PDK: 15, LDK: 15, AAK: 12, MIN_MULTI: 25, SL: 100 },
            candidates: [
                { id: "c_elek", name: "Zlatan Elek", gender: "M", region: "MITROVICA", pop: 65, loyalty: 96, role: "Kryetar i Listës Serbe" },
                { id: "c_simic", name: "Igor Simić", gender: "M", region: "MITROVICA", pop: 62, loyalty: 95, role: "Deputet" }
            ],
            reserves: []
        }
    },

    ministries: [
        { id: "mfpt", name: "Ministria e Financave, Punës dhe Transfereve", minister: "Hekuran Murati", party: "LVV", budget: 860, competence: 88, loyalty: 95, risk: 12, currentIssue: "Kërkesat sindikale dhe rishikimi buxhetor" },
        { id: "mpjd", name: "Ministria e Punëve të Jashtme dhe Diasporës", minister: "Glauk Konjufca", party: "LVV", budget: 68, competence: 92, loyalty: 95, risk: 8, currentIssue: "Lobimi për Këshillin e Evropës dhe misionet diplomatike" },
        { id: "mpb", name: "Ministria e Punëve të Brendshme", minister: "Xhelal Sveçla", party: "LVV", budget: 235, competence: 89, loyalty: 97, risk: 18, currentIssue: "Patrullimet kufitare në veri dhe shtesat e rrezikshmërisë për Policinë" },
        { id: "mm", name: "Ministria e Mbrojtjes (FSK)", minister: "Ejup Maqedonci", party: "LVV", budget: 250, competence: 94, loyalty: 93, risk: 5, currentIssue: "Furnizimi me armatim sipas standardeve të NATO-s" },
        { id: "md", name: "Ministria e Drejtësisë", minister: "Donika Gërvalla", party: "LVV", budget: 62, competence: 83, loyalty: 90, risk: 16, currentIssue: "Vetingu në drejtësi dhe Kodi Civil" },
        { id: "msh", name: "Ministria e Shëndetësisë", minister: "Arben Vitia", party: "LVV", budget: 345, competence: 86, loyalty: 94, risk: 15, currentIssue: "Lista e barnave esenciale dhe sigurimet shëndetësore" },
        { id: "mashti", name: "Ministria e Arsimit, Shkencës, Teknologjisë dhe Inovacionit", minister: "Arbërie Nagavci", party: "LVV", budget: 330, competence: 80, loyalty: 95, risk: 20, currentIssue: "Tekstet shkollore, çerdhet publike dhe rezultatet e PISA-s" },
        { id: "me", name: "Ministria e Ekonomisë dhe Energjisë", minister: "Artane Rizvanolli", party: "LVV", budget: 195, competence: 85, loyalty: 92, risk: 17, currentIssue: "Remonti i blloqeve të KEK-ut dhe ankandi solar" },
        { id: "mmphi", name: "Ministria e Mjedisit, Planifikimit Hapësinor dhe Infrastrukturës", minister: "Liburn Aliu", party: "LVV", budget: 365, competence: 81, loyalty: 84, risk: 22, currentIssue: "Vonesat në shpronësime në rrugët Prishtinë–Podujevë dhe Mitrovicë" },
        { id: "mbpzhr", name: "Ministria e Bujqësisë, Pylltarisë dhe Zhvillimit Rural", minister: "Faton Peci", party: "LVV", budget: 150, competence: 86, loyalty: 90, risk: 14, currentIssue: "Subvencionet për grurin dhe sistemet e ujitjes" },
        { id: "mint", name: "Ministria e Industrisë, Ndërmarrësisë dhe Tregtisë", minister: "Rozeta Hajdari", party: "LVV", budget: 85, competence: 76, loyalty: 93, risk: 26, currentIssue: "Mbikëqyrja e çmimeve të naftës dhe rezervave shtetërore" },
        { id: "mkrs", name: "Ministria e Kulturës, Rinisë dhe Sportit (Lojërat Mesdhetare 2030)", minister: "Hajrulla Çeku", party: "LVV", budget: 185, competence: 90, loyalty: 94, risk: 9, currentIssue: "Masterplani i stadiumeve për Prishtina 2030" },
        { id: "mapl", name: "Ministria e Administrimit të Pushtetit Lokal", minister: "Elbert Krasniqi", party: "MIN_MULTI", budget: 65, competence: 85, loyalty: 91, risk: 10, currentIssue: "Granti i performancës komunale për 38 komunat" },
        { id: "mkk", name: "Ministria për Komunitete dhe Kthim", minister: "Nenad Rašić", party: "MIN_MULTI", budget: 55, competence: 82, loyalty: 88, risk: 14, currentIssue: "Mbështetja për bizneset dhe strehimin e komuniteteve" },
        { id: "mzhr", name: "Ministria e Zhvillimit Rajonal", minister: "Fikrim Damka", party: "MIN_MULTI", budget: 60, competence: 81, loyalty: 87, risk: 13, currentIssue: "Zonat ekonomike ndërkomunale" }
    ],

    municipalities: [
        { id: "m_prishtina", name: "Prishtina", region: "PRISHTINA", voters: 206000, mayorParty: "LDK", mayorName: "Përparim Rama", issue: "Trafiku urban, Unaza e Kryeqytetit & Termokosi", budgetM: 124 },
        { id: "m_podujeva", name: "Podujeva", region: "PRISHTINA", voters: 87000, mayorParty: "LVV", mayorName: "Shpejtim Bulliqi", issue: "Magjistralja Prishtinë–Podujevë & Zona Industriale", budgetM: 31 },
        { id: "m_lipjani", name: "Lipjani", region: "PRISHTINA", voters: 64000, mayorParty: "LDK", mayorName: "Imri Ahmeti", issue: "Infrastruktura në fshatra (Poturovc, Magure) & Bujqësia", budgetM: 24 },
        { id: "m_fushkosova", name: "Fushë Kosova", region: "PRISHTINA", voters: 46000, mayorParty: "LDK", mayorName: "Burim Berisha", issue: "Mbingarkesa urbane, shkollat e reja & ujësjellësi", budgetM: 19 },
        { id: "m_obiliqi", name: "Obiliqi", region: "PRISHTINA", voters: 26000, mayorParty: "LDK", mayorName: "Xhafer Gashi", issue: "Ndotja nga KEK-u, Ligji për Obiliqin & Kogjenerimi", budgetM: 15 },
        { id: "m_drenasi", name: "Drenasi", region: "PRISHTINA", voters: 57000, mayorParty: "PDK", mayorName: "Ramiz Lladrovci", issue: "Parku i Biznesit, Ferronikeli & Ujësjellësi", budgetM: 21 },
        { id: "m_gracanica", name: "Graçanica", region: "PRISHTINA", voters: 21000, mayorParty: "SL", mayorName: "Novak Živić", issue: "Shërbimet komunale & Integrimi ndërkomunitar", budgetM: 11 },
        { id: "m_novoberda", name: "Novobërda", region: "PRISHTINA", voters: 9500, mayorParty: "SL", mayorName: "Saša Milošević", issue: "Turizmi rural në Kalanë e Novobërdës", budgetM: 5 },
        { id: "m_prizreni", name: "Prizreni", region: "PRIZRENI", voters: 178000, mayorParty: "PDK", mayorName: "Shaqir Totaj", issue: "Qendra Historike, Autostrada & Parkimi Urban", budgetM: 68 },
        { id: "m_suhareka", name: "Suhareka", region: "PRIZRENI", voters: 69000, mayorParty: "AAK", mayorName: "Bali Muharremaj", issue: "Vreshtaria, Zona Agro-Industriale & Rinia", budgetM: 25 },
        { id: "m_malisheva", name: "Malisheva", region: "PRIZRENI", voters: 56000, mayorParty: "PDK", mayorName: "Ekrem Kastrati", issue: "Nënkalimet urbane & Infrastruktura rrugore", budgetM: 20 },
        { id: "m_dragashi", name: "Dragashi", region: "PRIZRENI", voters: 40000, mayorParty: "LDK", mayorName: "Bexhet Xheladini", issue: "Blegtoria në Sharr & Turizmi malor", budgetM: 13 },
        { id: "m_mamusha", name: "Mamusha", region: "PRIZRENI", voters: 5500, mayorParty: "MIN_MULTI", mayorName: "Abdülhadi Krasniç", issue: "Sera bujqësore & Eksporti i perimeve", budgetM: 4 },
        { id: "m_peja", name: "Peja", region: "PEJA", voters: 115000, mayorParty: "LDK", mayorName: "Gazmend Muhaxheri", issue: "Turizmi në Rugovë, Bora & Autostrada Pejë–Prishtinë", budgetM: 42 },
        { id: "m_istogu", name: "Istogu", region: "PEJA", voters: 51000, mayorParty: "LDK", mayorName: "Ilir Ferati", issue: "Bujqësia, Trofta & Burimet e ujit", budgetM: 18 },
        { id: "m_klina", name: "Klina", region: "PEJA", voters: 49000, mayorParty: "AAK", mayorName: "Zenun Elezaj", issue: "Uji i pijshëm & Lidhja hekurudhore", budgetM: 16 },
        { id: "m_gjakova", name: "Gjakova", region: "GJAKOVA", voters: 118000, mayorParty: "AAK", mayorName: "Ardian Gjini", issue: "Aeroporti i Gjakovës, Çarshia e Madhe & Stadiumi", budgetM: 44 },
        { id: "m_rahoveci", name: "Rahoveci", region: "GJAKOVA", voters: 61000, mayorParty: "AAK", mayorName: "Smajl Latifi", issue: "Subvencionet për verëtarët & Sistemi i ujitjes", budgetM: 21 },
        { id: "m_decani", name: "Deçani", region: "GJAKOVA", voters: 43000, mayorParty: "AAK", mayorName: "Bashkim Ramosaj", issue: "Rruga Deçan–Plavë & Bjeshkët e Nemuna", budgetM: 15 },
        { id: "m_juniku", name: "Juniku", region: "GJAKOVA", voters: 6200, mayorParty: "LDK", mayorName: "Ruzhdi Shehu", issue: "Kullat tradicionale & Eko-turizmi", budgetM: 4 },
        { id: "m_mitrovica_j", name: "Mitrovica e Jugut", region: "MITROVICA", voters: 84000, mayorParty: "PDK", mayorName: "Bedri Hamza / Arian Tahiri", issue: "Trepça, Liqeni Akumulues & Zhvillimi ekonomik", budgetM: 32 },
        { id: "m_vushtrria", name: "Vushtrria", region: "MITROVICA", voters: 76000, mayorParty: "PDK", mayorName: "Ferit Idrizi", issue: "Kultivimi i patates & Zona industriale", budgetM: 26 },
        { id: "m_skenderaj", name: "Skenderaj", region: "MITROVICA", voters: 55000, mayorParty: "PDK", mayorName: "Fadil Nura", issue: "Memoriali në Prekaz & Ujësjellësi rajonal", budgetM: 20 },
        { id: "m_mitrovica_v", name: "Mitrovica e Veriut", region: "MITROVICA", voters: 18500, mayorParty: "SL", mayorName: "Milan Radojević", issue: "Ura e Ibrit, Siguria publike & Integrimi ligjor", budgetM: 9 },
        { id: "m_zvecani", name: "Zveçani", region: "MITROVICA", voters: 7200, mayorParty: "SL", mayorName: "Dragiša Milović", issue: "Trepça në veri & Rend dhe ligj", budgetM: 5 },
        { id: "m_leposaviqi", name: "Leposaviqi", region: "MITROVICA", voters: 13500, mayorParty: "SL", mayorName: "Zoran Todić", issue: "Kontrolli kufitar në Jarinjë & Infrastruktura", budgetM: 7 },
        { id: "m_zubinpotoku", name: "Zubin Potoku", region: "MITROVICA", voters: 6800, mayorParty: "SL", mayorName: "Miloš Perović", issue: "Siguria e Liqenit të Ujmanit & Kanali Ibër-Lepenc", budgetM: 5 },
        { id: "m_gjilani", name: "Gjilani", region: "GJILANI", voters: 105000, mayorParty: "LVV", mayorName: "Alban Hyseni", issue: "Autostrada e Gjilanit & Stadiumi i Qytetit", budgetM: 39 },
        { id: "m_vitia", name: "Vitia", region: "GJILANI", voters: 49000, mayorParty: "LDK", mayorName: "Sokol Haliti", issue: "Lidhja me autostradën & Bujqësia", budgetM: 17 },
        { id: "m_kamenica", name: "Kamenica", region: "GJILANI", voters: 36000, mayorParty: "LVV", mayorName: "Kadri Rahimaj", issue: "Reforma në arsim & Zona kufitare", budgetM: 13 },
        { id: "m_ranillugu", name: "Ranillugu", region: "GJILANI", voters: 5100, mayorParty: "SL", mayorName: "Tanja Antić", issue: "Bujqësia lokale & Shërbimet komunale", budgetM: 4 },
        { id: "m_parteshi", name: "Parteshi", region: "GJILANI", voters: 4800, mayorParty: "SL", mayorName: "Dragan Petković", issue: "Infrastruktura rurale", budgetM: 3 },
        { id: "m_kllokoti", name: "Kllokoti", region: "GJILANI", voters: 4200, mayorParty: "SL", mayorName: "Vladan Bogdanović", issue: "Banjat termale & Turizmi shëndetësor", budgetM: 3 },
        { id: "m_ferizaj", name: "Ferizaj", region: "FERIZAJ", voters: 119000, mayorParty: "PDK", mayorName: "Agim Aliu", issue: "Nënkalimet urbane, Spitali Rajonal & Bizneset", budgetM: 45 },
        { id: "m_kacaniku", name: "Kaçaniku", region: "FERIZAJ", voters: 36000, mayorParty: "PDK", mayorName: "Besim Ilazi", issue: "Impianti i ujërave & Lumi Nerodime", budgetM: 13 },
        { id: "m_shtimja", name: "Shtimja", region: "FERIZAJ", voters: 29000, mayorParty: "LVV", mayorName: "Qemajl Aliu", issue: "Unaza e Shtimes & Qendra e Inovacionit", budgetM: 11 },
        { id: "m_hanielezit", name: "Hani i Elezit", region: "FERIZAJ", voters: 9800, mayorParty: "PDK", mayorName: "Mehmet Ballazhi", issue: "Dogana kufitare & Mjedisi rreth SharrCem", budgetM: 5 },
        { id: "m_shterpce", name: "Shtërpca", region: "FERIZAJ", voters: 12500, mayorParty: "SL", mayorName: "Ivica Tanasijević", issue: "Qendra e skijimit në Brezovicë & Mjedisi", budgetM: 6 }
    ]
};

const STORAGE_KEY_AUTO = "republika_ks_2026_autosave_v4";
const STORAGE_KEY_SLOTS = "republika_ks_2026_slots_v4";
const MONTHS_SQ = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];

let state = null;

function getInitialStateSectors() {
    return [
        { id: "sec_econ", name: "1. Ekonomia & Financat Publike", ministry: "Ministria e Financave", score: 68, problem: "Informaliteti fiskal dhe qasja në financa për prodhuesit", projectTitle: "Digjitalizimi i Arkave Fiskale & Fondi Sovran", costM: 25, weeksTotal: 8, weeksLeft: 0, active: false, competence: "QEVERI (Vendim i Mbledhjes së Qeverisë)" },
        { id: "sec_edu", name: "2. Arsimi, Shkollat & Universitetet", ministry: "MASHTI", score: 62, problem: "Mungesa e çerdheve publike dhe laboratorëve digjitalë në shkolla", projectTitle: "Ndërtimi i 25 Çerdheve & Smart-Labs në Shkolla", costM: 30, weeksTotal: 10, weeksLeft: 0, active: false, competence: "MINISTRI / QEVERI" },
        { id: "sec_health", name: "3. Shëndetësia & Spitalet (QKUK)", ministry: "Ministria e Shëndetësisë", score: 60, problem: "Listat e pritjes në QKUK dhe sistemi informativ shëndetësor", projectTitle: "Modernizimi i Klinikave të QKUK & Barnat Esenciale", costM: 35, weeksTotal: 10, weeksLeft: 0, active: false, competence: "QEVERI & BUXHET" },
        { id: "sec_police", name: "4. Policia & Siguria Publike", ministry: "Ministria e Punëve të Brendshme", score: 82, problem: "Shtesat e rrezikshmërisë dhe pajisjet logjistike kufitare", projectTitle: "Flota e Re e Automjeteve të Blinduara & Kamera Trupi", costM: 20, weeksTotal: 6, weeksLeft: 0, active: false, competence: "KRYEMINISTRI & MPB" },
        { id: "sec_fsk", name: "5. Mbrojtja & Forca e Sigurisë (FSK)", ministry: "Ministria e Mbrojtjes", score: 86, problem: "Kapacitetet kundërajrore dhe fabrika e municioneve", projectTitle: "Prokurimi i Sistemeve Mbrojtëse & Kazerma e Re", costM: 45, weeksTotal: 12, weeksLeft: 0, active: false, competence: "KUVENDI (Kërkon Ligj / Buxhet)" },
        { id: "sec_roads", name: "6. Rrugët & Infrastruktura", ministry: "MMPHI", score: 64, problem: "Vonesat në magjistralet Prishtinë-Podujevë, Mitrovicë dhe Gjilan", projectTitle: "Përshpejtimi i Loteve Rrugore & Shpronësimet", costM: 40, weeksTotal: 12, weeksLeft: 0, active: false, competence: "QEVERI (Vendim Shpronësimi)" },
        { id: "sec_energy", name: "7. Energjia & Furnizimi (KEK/KOSTT)", ministry: "Ministria e Ekonomisë", score: 72, problem: "Vjetërsia e termocentraleve Kosova A & B dhe humbjet në rrjet", projectTitle: "Bateritë Akumuluese & Parku Solar 100MW në KEK", costM: 50, weeksTotal: 14, weeksLeft: 0, active: false, competence: "KUVENDI / QEVERI" },
        { id: "sec_tech", name: "8. Teknologjia & Digjitalizimi (e-Kosova)", ministry: "Zyra e KM / MASHTI", score: 77, problem: "Ndërlidhja e regjistrave shtetërorë dhe siguria kibernetike", projectTitle: "Zgjerimi i e-Kosova me 120 Shërbime & Qendra Kibernetike", costM: 15, weeksTotal: 6, weeksLeft: 0, active: false, competence: "KRYEMINISTRI (Urdhëresë)" },
        { id: "sec_agri", name: "9. Bujqësia & Zhvillimi Rural", ministry: "MBPZHR", score: 74, problem: "Sistemet e ujitjes në Dukagjin e Anamoravë dhe sigurimi bujqësor", projectTitle: "Zgjerimi i Kanalit të Ujitjes Radoniqi & Ibër-Lepenc", costM: 22, weeksTotal: 9, weeksLeft: 0, active: false, competence: "MINISTRIA E BUJQËSISË" },
        { id: "sec_env", name: "10. Mjedisi & Menaxhimi i Mbeturinave", ministry: "MMPHI", score: 58, problem: "Deponitë ilegale dhe ndotja e lumenjve", projectTitle: "Impiantet e Riciklimit & Pastrimi i Shtretërve të Lumenjve", costM: 18, weeksTotal: 8, weeksLeft: 0, active: false, competence: "QEVERI & KOMUNAT" },
        { id: "sec_social", name: "11. Punësimi & Politikat Sociale", ministry: "MFPT", score: 70, problem: "Papunësia tek të rinjtë dhe gratë, skema e asistencës sociale", projectTitle: "Zgjerimi i Platformës Superpuna & Reforma e Pensioneve", costM: 28, weeksTotal: 8, weeksLeft: 0, active: false, competence: "QEVERI" },
        { id: "sec_justice", name: "12. Drejtësia & Administrata Publike", ministry: "Ministria e Drejtësisë", score: 66, problem: "Numri i lartë i lëndëve të vjetra në gjykata", projectTitle: "Gjykata Komerciale & Digjitalizimi i Gjykatave", costM: 16, weeksTotal: 8, weeksLeft: 0, active: false, competence: "KUVENDI / MD" },
        { id: "sec_rail", name: "13. Transporti Publik & Hekurudhat", ministry: "MMPHI", score: 61, problem: "Modernizimi i Linjës Hekurudhore 10 (Hani i Elezit - Leshak)", projectTitle: "Elektrifikimi i Hekurudhës & Studimi Prishtinë-Durrës", costM: 32, weeksTotal: 12, weeksLeft: 0, active: false, competence: "QEVERI" },
        { id: "sec_water", name: "14. Uji & Kanalizimi", ministry: "MMPHI / Komunat", score: 67, problem: "Furnizimi me ujë të pijshëm në fshatra dhe trajtimi i ujërave të zeza", projectTitle: "7 Impiante Rajonale të Ujërave të Zeza", costM: 24, weeksTotal: 10, weeksLeft: 0, active: false, competence: "QEVERI" },
        { id: "sec_local", name: "15. Zhvillimi Komunal & Shërbimet Lokale", ministry: "MAPL & MZHR", score: 73, problem: "Kapacitetet e ulëta buxhetore të komunave të vogla", projectTitle: "Fondi i Katërt i Granteve Kapitale për Komunat", costM: 30, weeksTotal: 8, weeksLeft: 0, active: false, competence: "QEVERI & KUVENDI" }
    ];
}

function getInitialPMInbox() {
    return [
        {
            id: "req_init_1",
            senderName: "Liburn Aliu",
            senderRole: "Ministër i Infrastrukturës (MMPHI)",
            category: "TAKIM & VENDIM OPERACIONAL",
            urgency: "E LARTË",
            deadlineWeeks: 3,
            title: "Vonesa në shpronësimet e rrugës Prishtinë–Podujevë dhe Prishtinë–Mitrovicë",
            desc: "Ministri kërkon takim urgjent me Kryeministrin. Dy kontraktorë kanë ngadalësuar punimet për shkak të kontesteve pronësore dhe rritjes së çmimit të materialeve.",
            consequenceText: "Nëse nuk veprohet brenda 3 javësh: -2.5% Mbështetje publike dhe vonesa në premtimin e infrastrukturës.",
            options: [
                { label: "Mirato €18M shtesë për shpronësime të menjëhershme", costB: 0.018, appDelta: 2.2, secId: "sec_roads", outcome: "U miratuan mjetet për shpronësim; punimet në terren u dyfishuan." },
                { label: "Shkëput kontratat me kompanitë e papërgjegjshme dhe hap tender të ri", costB: 0, appDelta: 1.5, secId: "sec_roads", outcome: "Kontraktorët që vonuan punimet u penalizuan; procesi po rishikohet." },
                { label: "Delego çështjen te Zëvendëskryeministri dhe Ministria e Financave", costB: 0.005, appDelta: 0.6, secId: "sec_roads", outcome: "Grupi ndërministror mori përsipër zgjidhjen teknike me pronarët." }
            ]
        },
        {
            id: "req_init_2",
            senderName: "Përparim Rama & Imri Ahmeti",
            senderRole: "Kryetarët e Komunave (Prishtinë & Lipjan)",
            category: "KËRKESË NGA KOMUNAT",
            urgency: "MESATARE",
            deadlineWeeks: 4,
            title: "Bashkëfinancim për Unazën Rrugore dhe Infrastrukturën Lokale",
            desc: "Asociacioni i Komunave kërkon takim me Kryeministrin për zhbllokimin e mjeteve vetanake komunale dhe bashkëfinancimin e projekteve kapitale.",
            consequenceText: "Mosveprimi ul raportin me komunat dhe shkakton kritika në media (-1.8% Mbështetje).",
            options: [
                { label: "Prano takimin dhe nënshkruaj memorandum bashkëfinancimi (-€15M)", costB: 0.015, appDelta: 2.5, secId: "sec_local", outcome: "Kryetarët e komunave përshëndetën bashkëpunimin institucional me Qeverinë." },
                { label: "Kërko fillimisht auditim të projekteve komunale nga MAPL", costB: 0, appDelta: 0.5, secId: "sec_local", outcome: "MAPL nisi verifikimin ligjor të projekteve komunale." }
            ]
        },
        {
            id: "req_init_3",
            senderName: "Ambasadori i SHBA-së & Shefi i Zyrës së BE-së",
            senderRole: "Përfaqësuesit Diplomatikë në Prishtinë (QUINT)",
            category: "FTESË DIPLOMATIKE",
            urgency: "E LARTË",
            deadlineWeeks: 2,
            title: "Kërkesë për Konsultim Paraprak para Raundit të Radhës në Bruksel",
            desc: "Ambasadorët e QUINT-it kërkojnë takim pune në Kryeministri për të harmonizuar propozimet mbi sigurinë në veri dhe Planin e Rritjes të BE-së.",
            consequenceText: "Refuzimi ose vonesa ul pikët diplomatike me SHBA dhe BE (-5 pikë).",
            options: [
                { label: "Prit ambasadorët në takim dhe prezanto planin kushtetues të Kosovës", costB: 0, appDelta: 1.8, dipBonus: 5, outcome: "Takim konstruktiv në Kryeministri; QUINT-i vlerësoi transparencën e Qeverisë." },
                { label: "Dërgo Zëvendëskryeministrin / MPJD në takim me ambasadorët", costB: 0, appDelta: 0.8, dipBonus: 2, outcome: "MPJD zhvilloi konsultimet teknike me ambasadorët." }
            ]
        }
    ];
}

function createFreshState(mode = "REALITY_OCT2026", chosenParty = "LVV", customInfo = null) {
    const partiesClone = JSON.parse(JSON.stringify(INITIAL_POLITICAL_DB.parties));
    const ministriesClone = JSON.parse(JSON.stringify(INITIAL_POLITICAL_DB.ministries));
    const munisClone = JSON.parse(JSON.stringify(INITIAL_POLITICAL_DB.municipalities)).map(function(m) {
        return Object.assign({}, m, {
            localSupportPlayer: m.mayorParty === chosenParty ? 54 : 32,
            relationWithGov: m.mayorParty === chosenParty ? 88 : 58,
            projects: []
        });
    });

    if (customInfo) {
        partiesClone[chosenParty].name = customInfo.partyName;
        partiesClone[chosenParty].short = customInfo.partyName.substring(0, 14);
        partiesClone[chosenParty].leader = customInfo.leaderName;
        partiesClone[chosenParty].candidates[0].name = customInfo.leaderName;
    }

    const isPostElectionAlt = (mode === "ALT_POST_ELECTION");

    let s = {
        version: "4.1.2026",
        mode: mode,
        year: 2026,
        monthIndex: isPostElectionAlt ? 6 : 9,
        week: 1,
        turnCount: 1,
        mandateNumber: 1,
        weeksToNextRegularElection: 200,
        playerParty: chosenParty,
        playerRole: (chosenParty === "LVV" && !isPostElectionAlt) ? "PRIME_MINISTER" : (isPostElectionAlt ? "MANDATE_NEGOTIATOR" : "OPPOSITION_LEADER"),

        assemblyConstituted: !isPostElectionAlt,
        speakerOfAssembly: isPostElectionAlt ? "Në pritje të votimit (61 vota)" : "Albulena Haxhiu (LVV)",
        governmentFormed: !isPostElectionAlt,
        primeMinister: isPostElectionAlt ? "Qeveria në detyrë (Negociata)" : "Albin Kurti (LVV)",
        coalitionParties: isPostElectionAlt ? [chosenParty] : ["LVV", "MIN_MULTI"],
        coalitionAgreements: isPostElectionAlt ? [] : [
            { partner: "MIN_MULTI", ministriesCount: 3, deputyPM: true, conditions: "3 Ministri dhe investime në komunitete", honored: true }
        ],

        presidentElected: !isPostElectionAlt,
        presidentName: isPostElectionAlt ? "Ushtruese e Detyrës (Afati 60-ditor aktiv)" : "Prof. Dr. Justina Shiroka-Pula",
        presidentialDeadlineWeeks: isPostElectionAlt ? 8 : 260,
        presidentialRound: 1,
        presidentialCandidateId: "cand_pula",
        presidentialSignatures: isPostElectionAlt ? 53 : 81,
        quorumPledgedParties: isPostElectionAlt ? [chosenParty, "MIN_MULTI"] : ["LVV", "PDK", "MIN_MULTI"],
        customPresCandidates: {},

        approval: chosenParty === "LVV" ? 49.5 : 44.0,
        presidentApproval: 64.0,
        budgetTotalB: 3.32,
        taxRevenueB: 3.05,
        deficitPct: 2.4,
        publicDebtPct: 17.2,
        gdpGrowth: 3.9,
        unemployment: 10.8,
        inflation: 2.7,
        remittancesB: 1.38,
        energyStability: 78,
        securityNorth: 76,

        diplomacy: {
            USA: { name: "Shtetet e Bashkuara të Amerikës (SHBA)", city: "Uashington D.C.", official: "Sekretari i Shtetit & Ndihmës Sekretari për Evropën", score: 78, status: "Partneritet Strategjik", note: "Kërkon koordinim për veprimet në veri dhe zbatim të marrëveshjeve." },
            EU: { name: "Bashkimi Evropian (BE)", city: "Bruksel", official: "Presidentja e Komisionit Evropian & Përfaqësuesi i Lartë", score: 74, status: "Kandidat Potencial / Plani i Rritjes", note: "Kushtëzon fondet e Planit të Rritjes me progresin në dialog." },
            GERMANY: { name: "Gjermania & Franca (Boshti Franko-Gjerman)", city: "Berlin & Paris", official: "Kancelari Federal i Gjermanisë & Këshilltarët Diplomatikë", score: 76, status: "Mbështetje për Procesin e Berlinit", note: "Mbështet tregun e përbashkët rajonal dhe integrimin evropian." },
            UK: { name: "Mbretëria e Bashkuar (Britania e Madhe)", city: "Londër", official: "Sekretari i Jashtëm Britanik & Emisari për Ballkanin Perëndimor", score: 88, status: "Aleat i Fortë i Sigurisë", note: "Mbështet fuqishëm FSK-në, sundimin e ligjit dhe sigurinë kufitare." },
            ALBANIA: { name: "Republika e Shqipërisë", city: "Tiranë", official: "Kryeministri i Shqipërisë & Kabinetet ndërqeveritare", score: 92, status: "Vëllazëror & Marrëveshje të Përbashkëta", note: "Projektet e hekurudhës Durrës–Prishtinë dhe tregu unik energjetik." },
            TURKEY: { name: "Republika e Turqisë", city: "Ankara & Stamboll", official: "Presidenti & Ministri i Mbrojtjes dhe Tregtisë", score: 85, status: "Bashkëpunim Ekonomik & Ushtarak", note: "Furnizim me sisteme mbrojtëse dhe investime në energji." }
        },

        dialogueProgress: 52,
        dialogueChronologyStep: 1,
        dialogueDraftProposal: null,
        dialogueAlliesConsulted: false,
        dialogueNegotiationLog: [
            "Korrik 2026: BE dhe SHBA kërkojnë rifillimin e dialogut pas zgjedhjeve në Kosovë."
        ],

        scheduledMeetings: [],
        pmInboxRequests: getInitialPMInbox(),
        stateSectors: getInitialStateSectors(),
        customInterlocutors: [],
        activePressSession: null,

        parties: partiesClone,
        ministries: ministriesClone,
        municipalities: munisClone,
        mps: [],
        laws: getInitialLaws(),
        promises: getInitialPromises(),
        cabinetAgenda: getInitialCabinetAgenda(),
        mediaFeed: [
            {
                id: "news_init_1",
                outlet: "KOHA / KTV",
                title: "Legjislatura XI nis punën pas zgjedhjeve të 7 Qershorit 2026; ekonomia dhe dialogu mbeten sfidat kryesore.",
                tone: "NEUTRAL",
                time: "Tetor 2026",
                fullBody: "Pas certifikimit të rezultateve nga KQZ-ja, 120 deputetët e Legjislaturës së XI-të janë mbledhur në seancë plenare. Analistët politikë vlerësojnë se testi kryesor i shumicës do të jetë kalimi i marrëveshjeve ndërkombëtare që kërkojnë 80 vota dhe përmirësimi i 15 sektorëve publikë.",
                reactions: "Mazhoranca zotohet për zhvillim ekonomik dhe sovranitet, ndërsa PDK, LDK dhe AAK paralajmërojnë opozitarizëm të rreptë."
            },
            {
                id: "news_init_2",
                outlet: "Betimi për Drejtësi",
                title: "Kuvendi dhe sfidat e shumicës së cilësuar: Si ndahen 120 ulëset dhe kuorumi kushtetues.",
                tone: "POSITIVE",
                time: "Tetor 2026",
                fullBody: "Ekspertët e së drejtës kushtetuese rikujtojnë se sipas aktgjykimeve të Gjykatës Kushtetuese të Republikës së Kosovës, dallimi mes kuorumit (pranisë së 80 deputetëve në votim) dhe votave pro është vendimtar për stabilitetin institucional.",
                reactions: "Shoqëria civile dhe IKD kërkojnë respektim të plotë të procedurave parlamentare dhe transparencë në hartimin e projektligjeve."
            }
        ],
        historyLog: [
            "7 Qershor 2026 [Kuvend]: Mbahen zgjedhjet e parakohshme parlamentare (LVV 53, PDK 22, LDK 18, AAK 7, Komunitetet 20).",
            "8 Korrik 2026 [Kuvend]: KQZ certifikon rezultatet përfundimtare të Legjislaturës XI.",
            isPostElectionAlt
                ? "Korrik 2026 [Koalicion]: Hapen negociatat zyrtare me raunde për konstituimin e Kuvendit, Qeverisë dhe Presidentit."
                : "Tetor 2026 [Qeveri]: Votohet Qeveria Kurti 4 (62 vota) dhe zgjidhet Presidentja Justina Shiroka-Pula (81 vota)."
        ],
        currentEventIndex: 0,
        lastPressTurn: 0
    };

    s.mps = generate120MPs(s.parties, chosenParty);
    return s;
}

function generate120MPs(partiesObj, playerPartyKey) {
    const allMps = [];
    let seatCounter = 1;
    const order = ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI", "SL"];
    const regions = ["PRISHTINA", "PRIZRENI", "PEJA", "MITROVICA", "GJILANI", "FERIZAJ", "GJAKOVA"];
    const stances = [
        "Modeluar: Fokus në zhvillimin ekonomik rajonal dhe buxhetin",
        "Modeluar: Fokus në sundimin e ligjit, Vetingun dhe drejtësinë",
        "Modeluar: Qëndrim konservator për Kodin Civil dhe traditën",
        "Modeluar: Prioritet integrimi Euro-Atlantik dhe aleanca me SHBA",
        "Modeluar: Prioritet arsimi publik, shëndetësia dhe skemat sociale"
    ];

    order.forEach(function(pKey) {
        const p = partiesObj[pKey];
        if (!p) return;
        const roster = FULL_ROSTER_NAMES[pKey] || [];
        for (let i = 0; i < p.seats; i++) {
            const template = p.candidates[i];
            const realName = template ? template.name : (roster[i] || (p.short + " Deputeti #" + (i + 1)));
            const mpGender = template ? template.gender : (realName.endsWith("a") || realName.endsWith("e") || i % 3 === 1 ? "F" : "M");
            const mpRegion = template ? template.region : regions[(seatCounter + i) % regions.length];
            const mpLoyalty = template ? template.loyalty : (78 + (i % 19));
            const mpRole = template ? template.role : ("Deputet i Grupit Parlamentar " + p.short);
            const baseTrust = pKey === playerPartyKey ? 80 : (pKey === "MIN_MULTI" ? 66 : 44);

            allMps.push({
                seatNumber: seatCounter++,
                name: realName,
                party: pKey,
                gender: mpGender,
                region: mpRegion,
                loyalty: mpLoyalty,
                trustPlayer: baseTrust + (i % 10),
                role: mpRole,
                stance: stances[seatCounter % stances.length],
                ambition: i < 6 ? "Lidership në Komision Parlamentar / Ekzekutiv" : ("Investime kapitale në rajonin " + mpRegion),
                rebelRisk: mpLoyalty < 82,
                promisedVoteNext: false,
                votingHistory: ["Seanca Konstituive: Pjesëmarrës"],
                meetingHistory: []
            });
        }
    });
    return allMps;
}
function getInitialLaws() {
    return [
        {
            id: "law_budget_2027",
            title: "Projektligji për Ndarjet Buxhetore dhe Rritjen e Koeficientit të Pagave në 125€",
            ministry: "Ministria e Financave, Punës dhe Transfereve",
            desc: "Rrit koeficientin e pagave në sektorin publik dhe shton investimet kapitale në komuna.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.14,
            approvalEffect: 4.5,
            supportParties: ["LVV", "MIN_MULTI"],
            stage: "Leximi i Dytë (Gati për Votim)",
            status: "PENDING",
            lastVoteResult: null
        },
        {
            id: "law_vetting_bureau",
            title: "Projektligji për Byronë Shtetërore për Verifikimin dhe Konfiskimin e Pasurisë së Pajustifikueshme",
            ministry: "Ministria e Drejtësisë",
            desc: "Themelon mekanizmin për konfiskimin civil të pasurisë së zyrtarëve publikë pas rekomandimeve të Komisionit të Venecias.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.02,
            approvalEffect: 5.2,
            supportParties: ["LVV", "MIN_MULTI"],
            stage: "Shqyrtim në Komisionin për Legjislacion",
            status: "PENDING",
            lastVoteResult: null
        },
        {
            id: "law_eu_growth_plan",
            title: "Ratifikimi i Marrëveshjes Ndërkombëtare me BE-në për Planin e Rritjes (€880 Milionë)",
            ministry: "Ministria e Punëve të Jashtme dhe Financave",
            desc: "Kërkon 2/3 e të gjithë deputetëve të Kuvendit (80 vota) sipas Nenit 18 të Kushtetutës së Kosovës. Sjell grante dhe kredi të buta.",
            majorityType: "INTL_80",
            requiredVotes: 80,
            costB: -0.22,
            approvalEffect: 4.0,
            supportParties: ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"],
            stage: "Seancë Plenare (Kërkon 80 vota)",
            status: "PENDING",
            lastVoteResult: null
        },
        {
            id: "law_fsk_defense_fund",
            title: "Ligji për Fondin e Mbrojtjes dhe Prokurimin e Helikopterëve e Sistemeve Kundërajrore për FSK-në",
            ministry: "Ministria e Mbrojtjes (FSK)",
            desc: "Përmbush zotimin për buxhetin 1 miliard euro për ushtrinë gjatë mandatit katërvjeçar.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.18,
            approvalEffect: 5.8,
            supportParties: ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"],
            stage: "Leximi i Parë",
            status: "PENDING",
            lastVoteResult: null
        },
        {
            id: "law_vital_cultural_zones",
            title: "Ndryshimi i Ligjit për Vetëqeverisjen Lokale dhe Trashëgiminë Kulturore (Interes Vital - Neni 81)",
            ministry: "Ministria e Administrimit të Pushtetit Lokal",
            desc: "Ligj me interes vital që kërkon shumicë të dyfishtë: 61+ vota në total DHE 2/3 e deputetëve që mbajnë ulëse të garantuara për komunitetet (14 nga 20).",
            majorityType: "VITAL_DOUBLE",
            requiredVotes: 61,
            costB: 0.03,
            approvalEffect: 2.5,
            supportParties: ["LVV", "LDK", "MIN_MULTI"],
            stage: "Konsultim me Komunitetet",
            status: "PENDING",
            lastVoteResult: null
        },
        {
            id: "law_civil_code",
            title: "Projekt-Kodi Civil i Republikës së Kosovës",
            ministry: "Ministria e Drejtësisë",
            desc: "Rregullon çështjet pronësore, trashëgiminë dhe familjen. Përballet me kundërshtime nga deputetë konservatorë brenda vetë shumicës parlamentare.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.01,
            approvalEffect: 1.5,
            supportParties: ["LVV"],
            stage: "Debat Parlamentar",
            status: "PENDING",
            lastVoteResult: null
        }
    ];
}

function getInitialPromises() {
    return [
        { id: "prom_salary_1000", title: "Rritja e pagës mesatare në sektorin publik drejt nivelit 1,000€", deadlineWeeks: 48, costB: 0.14, progress: 35, fulfilled: false, source: "Programi Qeverisës Kurti 4 (Shtator 2026)" },
        { id: "prom_army_1b", title: "Buxheti 1 Miliard Euro për FSK-në dhe Mbrojtjen", deadlineWeeks: 36, costB: 0.18, progress: 45, fulfilled: false, source: "Seanca e Kuvendit (13 Shtator 2026)" },
        { id: "prom_highways", title: "Përfundimi i rrugëve Prishtinë–Podujevë, Prishtinë–Mitrovicë dhe Autostradës së Gjilanit", deadlineWeeks: 52, costB: 0.16, progress: 40, fulfilled: false, source: "Zotim Infrastrukture" }
    ];
}

function getInitialCabinetAgenda() {
    return [
        {
            id: "cab_1",
            title: "Subvencionimi i Tarifave të Energjisë Dimërore dhe Remonti i Bllokut B2 në KEK",
            ministry: "Ministria e Ekonomisë",
            ministerName: "Artane Rizvanolli",
            costB: 0.06,
            approvalGain: 3.2,
            done: false,
            note: "Parandalon reduktimet e rrymës gjatë dimrit.",
            ministerArgument: "Pa këtë intervenim prej €60M në KEK dhe KOSTT, rrezikojmë import të shtrenjtë të energjisë gjatë muajve të dimrit.",
            financeObjection: "Ministri i Financave kërkon që shuma të mos kalojë €45M ose të kursehen mjete nga subvencione të tjera."
        },
        {
            id: "cab_2",
            title: "Dyfishimi i Shtesave për Fëmijë dhe Lehona",
            ministry: "Ministria e Financave",
            ministerName: "Hekuran Murati",
            costB: 0.08,
            approvalGain: 4.8,
            done: false,
            note: "Rrit ndjeshëm mbështetjen te familjet e reja.",
            ministerArgument: "Masë e drejtpërdrejtë sociale që prek mbi 400 mijë fëmijë në Republikën e Kosovës.",
            financeObjection: "Ministria e Infrastrukturës vëren se kjo ngushton hapësirën për shpronësime rrugore."
        },
        {
            id: "cab_3",
            title: "Paketa e Granteve për Fermerët në Rahovec, Lipjan, Podujevë dhe Suharekë",
            ministry: "Ministria e Bujqësisë",
            ministerName: "Faton Peci",
            costB: 0.05,
            approvalGain: 3.5,
            done: false,
            note: "Mbështetje direkte për grurin, vreshtarinë dhe blegtorinë.",
            ministerArgument: "Subvencionimi përmes digjitalizimit rrit prodhimin vendor dhe ul varësinë nga importi.",
            financeObjection: "Kërkohet mbikëqyrje e rreptë në terren nga inspektorët komunalë."
        },
        {
            id: "cab_4",
            title: "Ndërtimi i Stadiumit Kombëtar dhe Infrastrukturës për Lojërat Mesdhetare Prishtina 2030",
            ministry: "Ministria e Kulturës, Rinisë dhe Sportit",
            ministerName: "Hajrulla Çeku",
            costB: 0.09,
            approvalGain: 4.1,
            done: false,
            note: "Investim strategjik sportiv në të gjithë Kosovën.",
            ministerArgument: "Kosova është nikoqire e Lojërave Mesdhetare 2030; afatet e Komitetit Ndërkombëtar janë të panegociueshme.",
            financeObjection: "Kryetarët e komunave kërkojnë që investimet të shpërndahen në disa stadiume rajonale."
        }
    ];
}

const DEFAULT_PRESIDENTIAL_CANDIDATES = {
    cand_pula: { id: "cand_pula", name: "Prof. Dr. Justina Shiroka-Pula", type: "Akademike / Konsensuale (ASHAK)", acceptParties: ["LVV", "PDK", "MIN_MULTI"], popBonus: 3.5 },
    cand_osmani: { id: "cand_osmani", name: "Dr. Vjosa Osmani-Sadriu", type: "Politike / Institucionale", acceptParties: ["LDK", "MIN_MULTI", "AAK"], popBonus: 3.0 },
    cand_konjufca: { id: "cand_konjufca", name: "Glauk Konjufca", type: "Kandidat Politik (LVV)", acceptParties: ["LVV", "MIN_MULTI"], popBonus: 4.0 },
    cand_jashari: { id: "cand_jashari", name: "Prof. Dr. Murat Jashari (ose Përfaqësues Jopartiak)", type: "Personalitet Unifikues Kombëtar (Jopartiak)", acceptParties: ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"], popBonus: 6.0 },
    cand_hasani: { id: "cand_hasani", name: "Prof. Dr. Enver Hasani", type: "Jurist / Ish-Kryetar i Gjykatës Kushtetuese", acceptParties: ["PDK", "LDK", "AAK", "MIN_MULTI"], popBonus: 2.5 },
    cand_bajrami: { id: "cand_bajrami", name: "Akademik Arsim Bajrami", type: "Akademik & Konstitucionalist", acceptParties: ["PDK", "LDK", "MIN_MULTI"], popBonus: 2.8 },
    cand_haradinaj: { id: "cand_haradinaj", name: "Ramush Haradinaj / Ardian Gjini", type: "Kandidat nga AAK", acceptParties: ["AAK", "PDK"], popBonus: 2.0 }
};

function getAllPresCandidates() {
    return Object.assign({}, DEFAULT_PRESIDENTIAL_CANDIDATES, state.customPresCandidates || {});
}

function getInterlocutorsByCategory(catCode) {
    var list = [];
    if (catCode === "INST_KOSOVO") {
        list.push(
            { name: state.presidentName, role: "Presidente e Republikës së Kosovës", inst: "Presidenca e Kosovës", rel: 82 },
            { name: state.speakerOfAssembly, role: "Kryetare e Kuvendit të Kosovës", inst: "Kuvendi i Kosovës", rel: 88 },
            { name: "Glauk Konjufca", role: "Zëvendëskryeministër i Parë & Ministër i Jashtëm", inst: "Kryeministria / MPJD", rel: 94 },
            { name: "Donika Gërvalla-Schwarz", role: "Zëvendëskryeministre & Ministre e Drejtësisë", inst: "Qeveria e Kosovës", rel: 90 },
            { name: "Emilija Redžepi", role: "Zëvendëskryeministre e Tretë për Çështje të Pakicave", inst: "Qeveria e Kosovës", rel: 88 },
            { name: "Gjeneralleitnant Bashkim Jashari", role: "Komandant i Forcës së Sigurisë së Kosovës (FSK)", inst: "FSK / Mbrojtja", rel: 92 },
            { name: "Gazmend Hoxha", role: "Drejtor i Përgjithshëm i Policisë së Kosovës", inst: "Policia e Kosovës", rel: 90 },
            { name: "Kreshnik Radoniqi", role: "Kryetar i Komisionit Qendror të Zgjedhjeve (KQZ)", inst: "KQZ", rel: 80 },
            { name: "Ahmet Ismaili", role: "Guvernator i Bankës Qendrore të Kosovës (BQK)", inst: "BQK", rel: 84 }
        );
    } else if (catCode === "PARTY_LEADERS") {
        Object.values(state.parties).forEach(function(p) {
            list.push({
                name: p.leader + " (" + p.short + ")",
                role: "Kryetar i " + p.name,
                inst: p.seats + " Deputetë në Kuvend",
                rel: state.parties[state.playerParty].relations[p.id] || 50
            });
            p.deputyLeaders.forEach(function(dl) {
                list.push({
                    name: dl + " (" + p.short + ")",
                    role: "Nënkryetar/e e " + p.short,
                    inst: p.name,
                    rel: state.parties[state.playerParty].relations[p.id] || 50
                });
            });
        });
    } else if (catCode === "MINISTERS") {
        state.ministries.forEach(function(m) {
            list.push({
                name: m.minister,
                role: "Ministër/e (" + m.party + ")",
                inst: m.name,
                rel: m.loyalty
            });
        });
    } else if (catCode === "MPS_120") {
        state.mps.forEach(function(mp) {
            list.push({
                name: "#" + mp.seatNumber + " " + mp.name + " (" + mp.party + ")",
                role: mp.role,
                inst: "Grupi Parlamentar " + mp.party + " • Rajoni " + mp.region,
                rel: mp.trustPlayer || mp.loyalty
            });
        });
    } else if (catCode === "MAYORS_38") {
        state.municipalities.forEach(function(m) {
            list.push({
                name: m.mayorName + " (Kryetar i " + m.name + ")",
                role: "Kryetar Komune (" + m.mayorParty + ")",
                inst: "Komuna e " + m.name + " (" + m.region + ")",
                rel: m.relationWithGov || 60
            });
        });
    } else if (catCode === "INTL_DIPLOMATS") {
        list.push(
            { name: "Përfaqësuesi i Lartë i SHBA-së / Ambasadori Amerikan në Prishtinë", role: "Ambasada e SHBA-së & Departamenti i Shtetit", inst: "SHBA (Uashington / Prishtinë)", rel: state.diplomacy.USA.score },
            { name: "Përfaqësuesi Special i BE-së për Dialogun & Shefi i Zyrës së BE-së", role: "Komisioni Evropian & EEAS", inst: "Bashkimi Evropian (Bruksel)", rel: state.diplomacy.EU.score },
            { name: "Ambasadori i Republikës Federale të Gjermanisë & Emisari Gjerman", role: "Ambasada Gjermane / Kancelaria në Berlin", inst: "Gjermania (QUINT)", rel: state.diplomacy.GERMANY.score },
            { name: "Ambasadori i Republikës së Francës në Kosovë", role: "Ambasada Franceze / Quai d'Orsay", inst: "Franca (QUINT)", rel: state.diplomacy.GERMANY.score },
            { name: "Ambasadori i Mbretërisë së Bashkuar & Emisari Britanik", role: "Foreign, Commonwealth & Development Office", inst: "Mbretëria e Bashkuar (Londër)", rel: state.diplomacy.UK ? state.diplomacy.UK.score : 86 },
            { name: "Komandanti i Misionit të NATO-s (COMKFOR)", role: "Komanda e KFOR-it në Prishtinë (Camp Film City)", inst: "NATO / KFOR", rel: 88 },
            { name: "Kryeministri & Ambasadori i Republikës së Shqipërisë", role: "Këshilli i Ministrave të Shqipërisë", inst: "Shqipëria (Tiranë)", rel: state.diplomacy.ALBANIA.score },
            { name: "Ambasadori i Republikës së Turqisë në Kosovë", role: "Ambasada Turke / Ministria e Jashtme", inst: "Turqia (Ankara)", rel: state.diplomacy.TURKEY.score }
        );
    } else if (catCode === "CIVIL_ECON") {
        list.push(
            { name: "Lulzim Rafuna (Kryetar i Odës Ekonomike të Kosovës - OEK)", role: "Përfaqësues i Bizneseve dhe Prodhuesve", inst: "Oda Ekonomike e Kosovës", rel: 74 },
            { name: "Arian Zeka (Oda Ekonomike Amerikane në Kosovë)", role: "Drejtor Ekzekutiv", inst: "AmCham Kosovo", rel: 76 },
            { name: "Rrahman Jasharaj (Kryetar i SBASHK-ut)", role: "Kryetar i Sindikatës së Arsimit", inst: "SBASHK / BSPK", rel: 52 },
            { name: "Ehat Miftaraj (Instituti i Kosovës për Drejtësi - IKD)", role: "Drejtor Ekzekutiv / Shoqëria Civile", inst: "IKD / Monitorimi i Drejtësisë", rel: 70 },
            { name: "Mexhide Demolli-Nimani (Lëvizja FOL) & KDI", role: "Koalicioni i OJQ-ve për Transparencë", inst: "Shoqëria Civile në Kosovë", rel: 72 },
            { name: "Rrjeti i Bizneseve të Diasporës Shqiptare (Gjermani & Zvicër)", role: "Kryesia e Investitorëve të Mërgatës", inst: "Unioni i Bizneseve Shqiptare", rel: 88 }
        );
    }

    (state.customInterlocutors || []).forEach(function(ci) {
        if (ci.cat === catCode) list.push(ci);
    });
    return list;
}

const DYNAMIC_EVENTS = [
    {
        id: "ev_brussels_summit",
        category: "DIPLOMACI & DIALOG",
        title: "Thirrje Urgjente nga Brukseli dhe Uashingtoni për Dialogun",
        cause: "Presioni i ndërmjetësuesve të BE-së dhe emisarit amerikan për sekuencimin e Marrëveshjes së Ohrit.",
        desc: "Bashkimi Evropian dhe SHBA kërkojnë që Qeveria e Kosovës të paraqesë planin e zbatimit në këmbim të zhbllokimit të plotë të fondeve të Planit të Rritjes. Opozita kërkon raportim në Kuvend.",
        options: [
            {
                text: "Kërko nënshkrim formal dhe garanci sigurie nga NATO para çdo hapi të njëanshëm",
                impactText: "+4.2% Popullaritet vendor, -5 pikë BE, +4% disiplina e LVV-së",
                apply: function(st) {
                    st.approval = clamp(st.approval + 4.2, 5, 95);
                    st.diplomacy.EU.score = clamp(st.diplomacy.EU.score - 5, 10, 100);
                    st.parties.LVV.poll = clamp(st.parties.LVV.poll + 1.5, 5, 80);
                    addMediaNews("KOHA", "Kryeministri këmbëngul në garanci sigurie dhe nënshkrim të marrëveshjes në Bruksel.", "NEUTRAL");
                }
            },
            {
                text: "Dërgo Propozim Konstruktiv të Sekuencimit dhe zhblloko €150M grante nga BE",
                impactText: "+9 pikë SHBA & BE, +€0.15 Mld Buxhet, -2.5% Popullaritet te baza radikale",
                apply: function(st) {
                    st.approval = clamp(st.approval - 2.5, 5, 95);
                    st.diplomacy.USA.score = clamp(st.diplomacy.USA.score + 9, 10, 100);
                    st.diplomacy.EU.score = clamp(st.diplomacy.EU.score + 9, 10, 100);
                    st.budgetTotalB = +(st.budgetTotalB + 0.15).toFixed(2);
                    st.dialogueProgress = clamp(st.dialogueProgress + 15, 0, 100);
                    addMediaNews("Reporteri", "Kosova koordinon hapat me QUINT-in; zhbllokohen €150M nga Plani i Rritjes i BE-së.", "POSITIVE");
                }
            },
            {
                text: "Fto liderët e PDK-së, LDK-së dhe AAK-së në takim për platformë shtetërore",
                impactText: "+7 pikë marrëdhënie me opozitën, +1.8% Stabilitet institucional",
                apply: function(st) {
                    st.approval = clamp(st.approval + 1.8, 5, 95);
                    st.parties[st.playerParty].relations.PDK = clamp(st.parties[st.playerParty].relations.PDK + 7, 0, 100);
                    st.parties[st.playerParty].relations.LDK = clamp(st.parties[st.playerParty].relations.LDK + 7, 0, 100);
                    addMediaNews("Klan Kosova", "Takim i nivelit të lartë mes pushtetit dhe opozitës për strategjinë shtetërore në dialog.", "POSITIVE");
                }
            }
        ]
    },
    {
        id: "ev_sbashk_strike",
        category: "KRIZË SOCIALE & SINDIKALE",
        title: "SBASHK-u dhe Sindikatat e Shëndetësisë Paralajmërojnë Grevë të Përgjithshme",
        cause: "Kërkesa për rritjen e vlerës së koeficientit të pagave dhe kushtet e punës në QKUK.",
        desc: "Sindikatat e arsimit dhe shëndetësisë kërkojnë rishikim urgjent të buxhetit. Opozita ka thirrur interpelancë parlamentare me Ministrin e Financave.",
        options: [
            {
                text: "Arrij marrëveshje sociale: Rrit koeficientin dhe përmbush premtimin (-€110M)",
                impactText: "+5.0% Popullaritet, Përparim në premtimin e pagave, -€0.11 Mld Buxhet",
                apply: function(st) {
                    st.budgetTotalB = +(st.budgetTotalB - 0.11).toFixed(2);
                    st.approval = clamp(st.approval + 5.0, 5, 95);
                    var p = st.promises.find(function(x) { return x.id === "prom_salary_1000"; });
                    if (p) { p.progress = clamp(p.progress + 45, 0, 100); if (p.progress >= 100) p.fulfilled = true; }
                    addMediaNews("RTK", "Qeveria arrin marrëveshje me sindikatat; rriten pagat në arsim dhe shëndetësi.", "POSITIVE");
                }
            },
            {
                text: "Ofro shtesë kundër inflacionit prej €50 në muaj (-€45M)",
                impactText: "+1.8% Popullaritet, kompromis i përkohshëm fiskal",
                apply: function(st) {
                    st.budgetTotalB = +(st.budgetTotalB - 0.045).toFixed(2);
                    st.approval = clamp(st.approval + 1.8, 5, 95);
                    addMediaNews("Telegrafi", "Pako e përkohshme mbështetëse për punëtorët e sektorit publik.", "NEUTRAL");
                }
            },
            {
                text: "Refuzo presionin sindikal dhe kërko vlerësim të performancës",
                impactText: "-4.2% Popullaritet, Ruan buxhetin e shtetit",
                apply: function(st) {
                    st.approval = clamp(st.approval - 4.2, 5, 95);
                    addMediaNews("T7", "Përplasje e ashpër mes Qeverisë dhe SBASHK-ut; sindikatat protestojnë para Qeverisë.", "CRITICAL");
                }
            }
        ]
    },
    {
        id: "ev_north_security",
        category: "SIGURI KOMBËTARE",
        title: "Tensione të Sigurisë pranë Kanalit Ibër-Lepenc dhe Mitrovicës së Veriut",
        cause: "Tentativa për destabilizim nga grupe ilegale në komunat veriore.",
        desc: "Policia e Kosovës dhe AKI raportojnë lëvizje të dyshimta pranë infrastrukturës kritike në Zubin Potok dhe Leposaviq. KFOR-i dhe Ambasada e SHBA-së kërkojnë koordinim operativ.",
        options: [
            {
                text: "Operacion i përbashkët i Policisë së Kosovës në koordinim me KFOR-in dhe EULEX-in",
                impactText: "+4.5% Popullaritet, +6 pikë NATO & SHBA, +8 Siguria në Veri",
                apply: function(st) {
                    st.approval = clamp(st.approval + 4.5, 5, 95);
                    st.diplomacy.USA.score = clamp(st.diplomacy.USA.score + 5, 10, 100);
                    st.securityNorth = clamp(st.securityNorth + 8, 10, 100);
                    addMediaNews("Kallxo.com", "Policia e Kosovës në koordinim me KFOR-in blindon infrastrukturën kritike në veri.", "POSITIVE");
                }
            },
            {
                text: "Ndërhyrje e menjëhershme e Njësive Speciale pa njoftim paraprak të QUINT-it",
                impactText: "+5.2% Popullaritet vendor, -8 pikë SHBA & BE për mungesë koordinimi",
                apply: function(st) {
                    st.approval = clamp(st.approval + 5.2, 5, 95);
                    st.diplomacy.USA.score = clamp(st.diplomacy.USA.score - 8, 10, 100);
                    st.diplomacy.EU.score = clamp(st.diplomacy.EU.score - 8, 10, 100);
                    st.securityNorth = clamp(st.securityNorth + 5, 10, 100);
                    addMediaNews("Euronews Albania", "Aksion i rrufeshëm i Njësive Speciale në veri; QUINT-i kërkon koordinim.", "NEUTRAL");
                }
            }
        ]
    }
];

function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

function showToast(msg) {
    var t = document.getElementById("toast");
    t.textContent = msg;
    t.style.display = "block";
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(function() { t.style.display = "none"; }, 3400);
}

function showMajorAnnouncement(cfg) {
    var box = document.getElementById("majorEventModalContent");
    var subTxt = cfg.subtitle || (MONTHS_SQ[state.monthIndex] + " " + state.year + " • Java " + state.week);
    var statsBlock = cfg.statsHtml ? '<div style="background:#0f172a; border:1px solid var(--border); border-radius:10px; padding:12px; margin-bottom:12px;">' + cfg.statsHtml + '</div>' : '';
    var futBlock = cfg.futureImpact ? '<div style="color:var(--text-muted);"><strong>🔮 Efektet afatgjata:</strong> ' + cfg.futureImpact + '</div>' : '';

    box.innerHTML =
        '<div style="text-align:center; padding:8px 4px;">' +
            '<span class="tag tag-gold" style="font-size:0.75rem; padding:4px 12px; margin-bottom:10px;">' + (cfg.badge || "ZHVILLIM KRYESOR SHTETËROR") + '</span>' +
            '<h2 style="font-size:1.25rem; color:#fff; margin-bottom:6px;">' + cfg.title + '</h2>' +
            '<div style="font-size:0.82rem; color:var(--accent-gold); margin-bottom:14px;">' + subTxt + '</div>' +
        '</div>' +
        statsBlock +
        '<div style="font-size:0.83rem; line-height:1.6; color:#e2e8f0; margin-bottom:12px;">' +
            '<div style="margin-bottom:6px;"><strong>📌 Pse ndodhi dhe konteksti:</strong> ' + cfg.reason + '</div>' +
            '<div style="margin-bottom:6px; color:var(--success);"><strong>⚡ Pasojat e menjëhershme:</strong> ' + cfg.immediateImpact + '</div>' +
            futBlock +
        '</div>' +
        '<div style="display:flex; justify-content:center; margin-top:14px;">' +
            '<button class="action-btn btn-gold" style="padding:10px 24px; font-size:0.85rem;" onclick="toggleModal(\'majorEventModal\', false)">Vazhdo Simulimin ▶</button>' +
        '</div>';
    toggleModal("majorEventModal", true);
}

function addMediaNews(outlet, title, tone, fullBody, reactions) {
    if (!tone) tone = "NEUTRAL";
    var dateStr = MONTHS_SQ[state.monthIndex] + " " + state.year + " (Java " + state.week + ")";
    var newsObj = {
        id: "news_" + Date.now() + "_" + Math.floor(Math.random() * 999),
        outlet: outlet,
        title: title,
        tone: tone,
        time: dateStr,
        fullBody: fullBody || (title + " Ky zhvillim vjen në një moment kyç për Legjislaturën e XI-të të Kuvendit të Kosovës dhe ka nxitur debat të gjerë në opinionin publik dhe studiot televizive në Prishtinë."),
        reactions: reactions || ("Përfaqësuesit e mazhorancës (" + state.parties[state.playerParty].short + ") e kanë mbrojtur vendimin si hap të domosdoshëm shtetëror, ndërsa subjektet opozitare kanë kërkuar llogaridhënie parlamentare.")
    };
    state.mediaFeed.unshift(newsObj);
    if (state.mediaFeed.length > 15) state.mediaFeed.pop();
    state.historyLog.unshift(dateStr + ": [" + outlet + "] " + title);
    document.getElementById("mediaTickerText").textContent = "[" + outlet + "] " + title;
}

function openNewsArticleModal(newsIdx) {
    var n = state.mediaFeed[newsIdx];
    if (!n) return;
    var box = document.getElementById("majorEventModalContent");
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📰 ' + n.outlet + ' — Artikulli i Plotë (Simulim Mediatik)</div>' +
            '<button class="btn-top" onclick="toggleModal(\'majorEventModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="font-size:0.74rem; color:var(--accent-gold); margin-bottom:6px;">Data e publikimit: ' + n.time + ' • Toni editorial: ' + n.tone + '</div>' +
        '<h3 style="font-size:1.05rem; margin-bottom:10px; line-height:1.4;">' + n.title + '</h3>' +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; font-size:0.84rem; line-height:1.65; color:#e2e8f0; margin-bottom:12px;">' +
            '<p style="margin-bottom:8px;">' + n.fullBody + '</p>' +
            '<p style="color:var(--text-muted); border-top:1px solid var(--border); padding-top:8px;"><strong>Reagimet Politike & Analiza:</strong> ' + n.reactions + '</p>' +
        '</div>' +
        '<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:space-between;">' +
            '<button class="action-btn" onclick="toggleModal(\'majorEventModal\', false); switchMainTab(\'tab-dashboard\'); switchSubTab(\'dash\', \'press\', document.querySelectorAll(\'#tab-dashboard .sub-pill\')[3]);">🎙️ Reago në Konferencë për Media</button>' +
            '<button class="action-btn btn-outline" onclick="issueQuickPressRelease(' + newsIdx + ')">📝 Lësho Komunikatë Zyrtare për Shtyp (+0.8% sqarim publik)</button>' +
        '</div>';
    toggleModal("majorEventModal", true);
}

function issueQuickPressRelease(newsIdx) {
    var n = state.mediaFeed[newsIdx];
    state.approval = clamp(state.approval + 0.8, 5, 95);
    toggleModal("majorEventModal", false);
    refreshAllUI();
    showToast("Zyra për Media lëshoi komunikatë sqaruese lidhur me raportimin e " + (n ? n.outlet : "medias") + "!");
}

function saveGameAuto() {
    if (!state) return;
    try { localStorage.setItem(STORAGE_KEY_AUTO, JSON.stringify(state)); } catch (e) {}
}

function getSaveSlots() {
    try {
        var raw = localStorage.getItem(STORAGE_KEY_SLOTS);
        return raw ? JSON.parse(raw) : [null, null, null];
    } catch (e) { return [null, null, null]; }
}

function saveToSlot(slotIdx) {
    var slots = getSaveSlots();
    slots[slotIdx] = {
        savedAt: new Date().toLocaleString("sq-AL"),
        summary: state.parties[state.playerParty].short + " • " + MONTHS_SQ[state.monthIndex] + " " + state.year + " (Java " + state.week + ") • Shumica: " + getCoalitionSeats() + "/120",
        data: JSON.parse(JSON.stringify(state))
    };
    localStorage.setItem(STORAGE_KEY_SLOTS, JSON.stringify(slots));
    renderSaveSlots();
    showToast("Loja u ruajt me sukses në Slotin #" + (slotIdx + 1) + "!");
}

function loadFromSlot(slotIdx) {
    var slots = getSaveSlots();
    if (!slots[slotIdx]) return;
    state = slots[slotIdx].data;
    saveGameAuto();
    toggleModal("saveModal", false);
    refreshAllUI();
    showToast("U ngarkua skenari nga Sloti #" + (slotIdx + 1) + "!");
}

function hardResetAllSaves() {
    localStorage.removeItem(STORAGE_KEY_AUTO);
    localStorage.removeItem(STORAGE_KEY_SLOTS);
    location.reload();
}

function renderSaveSlots() {
    var slots = getSaveSlots();
    document.getElementById("saveSlotsContainer").innerHTML = slots.map(function(slot, i) {
        return '<div class="card" style="background:#0f172a; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
            '<div>' +
                '<div style="font-weight:700; font-size:0.84rem; color:var(--accent-gold);">Sloti i Ruajtjes #' + (i + 1) + '</div>' +
                '<div style="font-size:0.75rem; color:var(--text-muted);">' +
                    (slot ? (slot.summary + '<br><small>Ruajtur më: ' + slot.savedAt + '</small>') : "Slot i zbrazët — asnjë lojë e ruajtur") +
                '</div>' +
            '</div>' +
            '<div style="display:flex; gap:6px;">' +
                '<button class="action-btn btn-gold" onclick="saveToSlot(' + i + ')">Ruaj Këtu</button>' +
                (slot ? '<button class="action-btn btn-success" onclick="loadFromSlot(' + i + ')">Ngarko</button>' : '') +
            '</div>' +
        '</div>';
    }).join("");
}

function getCoalitionSeats() {
    if (!state) return 0;
    return state.coalitionParties.reduce(function(acc, pId) {
        return acc + (state.parties[pId] ? state.parties[pId].seats : 0);
    }, 0);
}

function initApp() {
    renderSetupModalParties();
    var saved = localStorage.getItem(STORAGE_KEY_AUTO);
    if (saved) {
        try {
            state = JSON.parse(saved);
            if (!state.scheduledMeetings) state.scheduledMeetings = [];
            if (!state.pmInboxRequests) state.pmInboxRequests = getInitialPMInbox();
            if (!state.stateSectors) state.stateSectors = getInitialStateSectors();
            if (!state.customInterlocutors) state.customInterlocutors = [];
            if (!state.quorumPledgedParties) state.quorumPledgedParties = state.coalitionParties.slice();
            if (!state.customPresCandidates) state.customPresCandidates = {};
            if (!state.dialogueNegotiationLog) state.dialogueNegotiationLog = [];
            document.getElementById("setupModal").classList.remove("show");
            refreshAllUI();
            showToast("Loja vazhdoi automatikisht nga ruajtja e fundit!");
            return;
        } catch (e) {}
    }
    state = createFreshState("REALITY_OCT2026", "LVV");
    refreshAllUI();
    document.getElementById("setupModal").classList.add("show");
}

function renderSetupModalParties() {
    var keys = ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"];
    document.getElementById("partySelectContainer").innerHTML = keys.map(function(k) {
        var p = INITIAL_POLITICAL_DB.parties[k];
        return '<button class="choice-btn" onclick="startScenarioWithParty(\'' + k + '\')">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; width:100%;">' +
                '<span class="choice-title">' + p.name + '</span>' +
                '<span class="tag ' + p.tagClass + '">' + p.seats + ' Ulëse (' + p.poll + '%)</span>' +
            '</div>' +
            '<span class="choice-impact">Lider: ' + p.leader + ' • Ideologjia: ' + p.ideology + '</span>' +
        '</button>';
    }).join("");
}

function startScenarioWithParty(partyKey) {
    var modeRadio = document.querySelector('input[name="gameMode"]:checked');
    var mode = modeRadio ? modeRadio.value : "REALITY_OCT2026";
    state = createFreshState(mode, partyKey);
    saveGameAuto();
    document.getElementById("setupModal").classList.remove("show");
    refreshAllUI();
    showToast("Fillohet loja me " + state.parties[partyKey].short + "!");
}

function startCustomParty() {
    var pName = document.getElementById("customPartyName").value.trim() || "Alternativa e Re";
    var lName = document.getElementById("customLeaderName").value.trim() || "Lider i Ri";
    var modeRadio = document.querySelector('input[name="gameMode"]:checked');
    var mode = modeRadio ? modeRadio.value : "ALT_POST_ELECTION";
    state = createFreshState(mode, "LVV", { partyName: pName, leaderName: lName });
    saveGameAuto();
    document.getElementById("setupModal").classList.remove("show");
    refreshAllUI();
}

function openNewScenarioModal() {
    toggleModal("saveModal", false);
    document.getElementById("closeSetupBtn").style.display = "inline-block";
    document.getElementById("setupModal").classList.add("show");
}

function closeSetupIfLoaded() {
    document.getElementById("setupModal").classList.remove("show");
}

function toggleModal(id, show) {
    var el = document.getElementById(id);
    if (!el) return;
    if (show) {
        if (id === "saveModal") renderSaveSlots();
        el.classList.add("show");
    } else {
        el.classList.remove("show");
    }
}

function refreshAllUI() {
    if (!state) return;
    updateTopBar();
    renderDashboard();
    renderPartySection();
    renderAssemblySection();
    renderGovernmentSection();
    renderElectionsSection();
    renderDiplomacySection();
    saveGameAuto();
}

function updateTopBar() {
    var p = state.parties[state.playerParty];
    var coalSeats = getCoalitionSeats();
    var isGov = state.coalitionParties.includes(state.playerParty) && state.governmentFormed;

    document.getElementById("roleDisplay").textContent = isGov
        ? ("Kryeministër / Bashkëqeverisje (" + p.short + ") • Legjislatura XI")
        : ("Lider i " + p.short + " (" + (state.governmentFormed ? "Në Opozitë" : "Negociata Kushtetuese") + ")");

    document.getElementById("dateDisplay").textContent = MONTHS_SQ[state.monthIndex] + " " + state.year + " • Java " + state.week;
    var pendingMeets = (state.scheduledMeetings || []).filter(function(m) { return m.status === "SCHEDULED"; }).length;
    var pendingReqs = (state.pmInboxRequests || []).length;

    document.getElementById("calendarTopBtn").textContent = "📅 Kalendari (" + pendingMeets + ")";
    document.getElementById("inboxTopBtn").textContent = "📥 Kërkesat (" + pendingReqs + ")";

    var appEl = document.getElementById("statApproval");
    appEl.textContent = state.approval.toFixed(1) + "%";
    appEl.style.color = state.approval >= 45 ? "var(--success)" : (state.approval >= 32 ? "var(--accent-gold)" : "var(--danger)");

    var seatEl = document.getElementById("statSeats");
    seatEl.textContent = coalSeats + " / 120";
    seatEl.style.color = coalSeats >= 61 ? "var(--accent-gold)" : "var(--danger)";

    document.getElementById("statBudget").textContent = "€" + state.budgetTotalB.toFixed(2) + " Mld";
    document.getElementById("statEconomy").textContent = "+" + state.gdpGrowth + "% | " + state.unemployment + "%";

    var avgDip = Math.round((state.diplomacy.USA.score + state.diplomacy.EU.score + state.diplomacy.GERMANY.score) / 3);
    document.getElementById("statIntl").textContent = avgDip + " / 100";

    var constEl = document.getElementById("statConstStatus");
    if (!state.presidentElected) {
        constEl.textContent = "Afati Pres: " + state.presidentialDeadlineWeeks + "j";
        constEl.style.color = "var(--warning)";
    } else if (coalSeats < 61) {
        constEl.textContent = "Pakicë (<61)";
        constEl.style.color = "var(--danger)";
    } else {
        constEl.textContent = "Stabil";
        constEl.style.color = "var(--success)";
    }
}

function renderDashboard() {
    var ev = DYNAMIC_EVENTS[state.currentEventIndex % DYNAMIC_EVENTS.length];
    document.getElementById("activeEventCard").innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">⚡ Dosja në Tavolinë: ' + ev.title + '</div>' +
            '<span class="tag tag-lvv">' + ev.category + '</span>' +
        '</div>' +
        '<div style="font-size:0.75rem; color:var(--accent-gold); margin-bottom:6px;"><strong>Shkaku:</strong> ' + ev.cause + '</div>' +
        '<p style="font-size:0.83rem; color:#cbd5e1; line-height:1.5; margin-bottom:12px;">' + ev.desc + '</p>' +
        '<div>' +
            ev.options.map(function(opt, idx) {
                return '<button class="choice-btn" onclick="resolveActiveEvent(' + idx + ')">' +
                    '<span class="choice-title">' + (idx + 1) + '. ' + opt.text + '</span>' +
                    '<span class="choice-impact">Ndikimi: ' + opt.impactText + '</span>' +
                '</button>';
            }).join("") +
        '</div>';

    var coalSeats = getCoalitionSeats();
    var coalNames = state.coalitionParties.map(function(k) { return state.parties[k].short; }).join(" + ");
    var pendingMeetings = (state.scheduledMeetings || []).filter(function(m) { return m.status === "SCHEDULED"; });
    var activeSectorProjs = (state.stateSectors || []).filter(function(s) { return s.active; }).length;
    var reqCount = (state.pmInboxRequests || []).length;

    document.getElementById("govStatusBadge").textContent = state.governmentFormed ? "Qeveri me Mandat të Plotë" : "Faza e Formimit të Institucioneve";
    document.getElementById("institutionalSummary").innerHTML =
        '<div>• <strong>President/e e Republikës:</strong> ' + state.presidentName + ' ' + (!state.presidentElected ? '<span style="color:var(--danger);">(Kërkohet votim brenda ' + state.presidentialDeadlineWeeks + ' javësh!)</span>' : '<span style="color:var(--success);">(Në mandat kushtetues)</span>') + '</div>' +
        '<div>• <strong>Kryetar/e e Kuvendit (Legjislatura XI):</strong> ' + state.speakerOfAssembly + '</div>' +
        '<div>• <strong>Kryeministër & Koalicioni:</strong> ' + state.primeMinister + ' (' + coalNames + ' — <strong>' + coalSeats + '/120 ulëse</strong>)</div>' +
        '<div>• <strong>Kërkesa Hyrëse në Agjendën e KM:</strong> <strong style="color:var(--accent-gold);">' + reqCount + ' kërkesa</strong> | <strong>Sektorë Shtetërorë në Zhvillim:</strong> <strong>' + activeSectorProjs + '/15</strong></div>' +
        '<div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="switchSubTab(\'dash\', \'inbox\', document.querySelectorAll(\'#tab-dashboard .sub-pill\')[1])">📥 Agjenda e KM (' + reqCount + ')</button>' +
            '<button class="action-btn" onclick="switchSubTab(\'dash\', \'calendar\', document.querySelectorAll(\'#tab-dashboard .sub-pill\')[2])">📅 Kalendari (' + pendingMeetings.length + ')</button>' +
            '<button class="action-btn btn-outline" onclick="switchMainTab(\'tab-government\'); switchSubTab(\'gov\',\'sectors\', document.querySelectorAll(\'#tab-government .sub-pill\')[1]);">🏗️ 15 Sektorët e Shtetit</button>' +
        '</div>';

    var inboxList = state.pmInboxRequests || [];
    document.getElementById("quickInboxPreview").innerHTML = inboxList.length === 0
        ? '<div style="font-size:0.78rem; color:var(--text-muted);">Të gjitha kërkesat e ministrave, kryetarëve të komunave dhe ambasadorëve janë shqyrtuar!</div>'
        : inboxList.slice(0, 2).map(function(req, idx) {
            return '<div style="background:#0f172a; border-left:3px solid var(--accent-gold); padding:8px 10px; border-radius:6px; margin-bottom:8px;">' +
                '<div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--accent-gold);">' +
                    '<strong>📩 Nga: ' + req.senderName + ' (' + req.senderRole + ')</strong>' +
                    '<span>Afati: ' + req.deadlineWeeks + ' javë</span>' +
                '</div>' +
                '<div style="font-size:0.81rem; font-weight:700; margin:3px 0;">' + req.title + '</div>' +
                '<button class="btn-top" onclick="openPMRequestModal(' + idx + ')">Shqyrto & Vendos ▶</button>' +
            '</div>';
        }).join("");

    document.getElementById("mediaFeedList").innerHTML = state.mediaFeed.slice(0, 4).map(function(m, idx) {
        var borderCol = m.tone === "POSITIVE" ? "var(--success)" : (m.tone === "CRITICAL" ? "var(--danger)" : "var(--accent-blue)");
        return '<div class="news-item-clickable" style="border-left-color:' + borderCol + ';" onclick="openNewsArticleModal(' + idx + ')">' +
            '<div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--text-muted);">' +
                '<strong>📰 ' + m.outlet + '</strong>' +
                '<span>' + m.time + ' • <u style="color:var(--accent-gold);">Lexo të plotë</u></span>' +
            '</div>' +
            '<div style="font-size:0.8rem; margin-top:3px; font-weight:600;">' + m.title + '</div>' +
        '</div>';
    }).join("");

    document.getElementById("pollDateLabel").textContent = MONTHS_SQ[state.monthIndex] + " " + state.year;
    document.getElementById("quickPollBars").innerHTML = Object.values(state.parties).map(function(p) {
        return '<div class="prog-row">' +
            '<div class="prog-label"><span>' + p.short + ' (' + p.leader.split(" ")[0] + ')</span><span>' + p.poll.toFixed(1) + '% (' + p.seats + ' ulëse)</span></div>' +
            '<div class="prog-track"><div class="prog-fill" style="width:' + Math.min(100, p.poll * 1.6) + '%; background:' + p.color + ';"></div></div>' +
        '</div>';
    }).join("");

    renderPMInboxSection();
    renderCalendarMeetings();
    renderPromisesList();

    var filterVal = document.getElementById("historyFilterSelect") ? document.getElementById("historyFilterSelect").value : "ALL";
    var logs = state.historyLog.filter(function(x) { return filterVal === "ALL" || x.toLowerCase().includes(filterVal.toLowerCase()); });
    document.getElementById("historyLogContainer").innerHTML = logs.map(function(item) {
        return '<div style="padding:7px 10px; border-bottom:1px solid var(--border); font-size:0.79rem;">• ' + item + '</div>';
    }).join("");
}

function resolveActiveEvent(optIdx) {
    var ev = DYNAMIC_EVENTS[state.currentEventIndex % DYNAMIC_EVENTS.length];
    var opt = ev.options[optIdx];
    opt.apply(state);
    state.currentEventIndex++;
    showMajorAnnouncement({
        badge: ev.category,
        title: "Vendim Ekzekutiv: " + ev.title,
        reason: ev.cause,
        immediateImpact: opt.impactText,
        futureImpact: "Mediat dhe grupet parlamentare kanë regjistruar qëndrimin tuaj; sondazhet dhe raportet diplomatike u përditësuan."
    });
    advanceTime(1, true);
}

function renderPMInboxSection() {
    var container = document.getElementById("pmInboxListContainer");
    if (!container) return;
    var list = state.pmInboxRequests || [];

    if (list.length === 0) {
        container.innerHTML = '<div style="background:#0f172a; padding:14px; border-radius:8px; font-size:0.82rem; color:var(--text-muted);">Nuk ka kërkesa të pashqyrtuara në tavolinën e Kryeministrit. Klikoni butonin lart ose kaloni në javën tjetër për raportimet e reja.</div>';
        return;
    }

    container.innerHTML = list.map(function(req, idx) {
        var borderCol = req.urgency === "E LARTË" ? "var(--danger)" : "var(--accent-gold)";
        var tagCls = req.urgency === "E LARTË" ? "tag-lvv" : "tag-gold";
        return '<div class="card" style="background:#0f172a; margin-bottom:10px; border-left:4px solid ' + borderCol + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; margin-bottom:6px;">' +
                '<div>' +
                    '<span class="tag ' + tagCls + '">' + req.category + ' • Urgjenca: ' + req.urgency + '</span>' +
                    '<h4 style="font-size:0.9rem; margin-top:5px;">' + req.title + '</h4>' +
                    '<div style="font-size:0.75rem; color:var(--accent-gold);">Dërguesi: <strong>' + req.senderName + '</strong> — ' + req.senderRole + '</div>' +
                '</div>' +
                '<span class="tag tag-pdk">Afati: ' + req.deadlineWeeks + ' javë</span>' +
            '</div>' +
            '<p style="font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">' + req.desc + '</p>' +
            '<div style="font-size:0.74rem; color:var(--danger); margin-bottom:10px;">⚠️ ' + req.consequenceText + '</div>' +
            '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
                '<button class="action-btn btn-gold" onclick="openPMRequestModal(' + idx + ')">🗂️ Hap Kërkesën & Merr Vendim ▶</button>' +
                '<button class="action-btn btn-outline" onclick="postponePMRequest(' + idx + ')">⏳ Shtyj për 2 Javë (-0.4% Mbështetje)</button>' +
            '</div>' +
        '</div>';
    }).join("");
}

function openPMRequestModal(reqIdx) {
    var req = state.pmInboxRequests[reqIdx];
    if (!req) return;
    var box = document.getElementById("interactiveActionModalContent");
    var optsHtml = req.options.map(function(opt, oIdx) {
        var costM = ((opt.costB || 0) * 1000).toFixed(0);
        return '<button class="choice-btn" onclick="resolvePMRequest(' + reqIdx + ', ' + oIdx + ')">' +
            '<span class="choice-title">' + (oIdx + 1) + '. ' + opt.label + '</span>' +
            '<span class="choice-impact">Kosto: €' + costM + 'M | Ndikimi publik: +' + opt.appDelta + '%</span>' +
        '</button>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📥 Dosje në Agjendën e Kryeministrit: ' + req.senderName + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="font-size:0.76rem; color:var(--accent-gold); margin-bottom:6px;">' + req.senderRole + ' • ' + req.category + ' (Afati: ' + req.deadlineWeeks + ' javë)</div>' +
        '<h3 style="font-size:0.98rem; margin-bottom:8px;">' + req.title + '</h3>' +
        '<div class="chat-bubble chat-them"><strong>' + req.senderName + ':</strong> "' + req.desc + '"</div>' +
        '<div style="font-size:0.75rem; color:var(--danger); margin-bottom:12px;">⚠️ Pasojat e mosveprimit: ' + req.consequenceText + '</div>' +
        '<div style="display:flex; flex-direction:column; gap:7px;">' +
            optsHtml +
            '<button class="choice-btn" onclick="rejectPMRequest(' + reqIdx + ')" style="border-color:rgba(239,68,68,0.4);">' +
                '<span class="choice-title" style="color:var(--danger);">Refuzo Kërkesën për shkak të kufizimeve buxhetore</span>' +
                '<span class="choice-impact">Ruan buxhetin, por shkakton pakënaqësi te ' + req.senderName + ' (-1.5% Mbështetje)</span>' +
            '</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function resolvePMRequest(reqIdx, optIdx) {
    var req = state.pmInboxRequests[reqIdx];
    var opt = req.options[optIdx];
    state.budgetTotalB = +(state.budgetTotalB - (opt.costB || 0)).toFixed(3);
    state.approval = clamp(state.approval + (opt.appDelta || 1.0), 5, 95);

    if (opt.dipBonus) {
        state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + opt.dipBonus, 10, 100);
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + opt.dipBonus, 10, 100);
    }
    if (opt.secId) {
        var sec = (state.stateSectors || []).find(function(s) { return s.id === opt.secId; });
        if (sec) sec.score = clamp(sec.score + 5, 10, 100);
    }

    state.pmInboxRequests.splice(reqIdx, 1);
    toggleModal("interactiveActionModal", false);
    addMediaNews("Kryeministria / RTK", "Kryeministri shqyrton kërkesën e " + req.senderName + ": " + opt.outcome, "POSITIVE");
    refreshAllUI();
    showToast("Vendimi u mor! " + opt.outcome);
}

function rejectPMRequest(reqIdx) {
    var req = state.pmInboxRequests[reqIdx];
    state.approval = clamp(state.approval - 1.5, 5, 95);
    state.pmInboxRequests.splice(reqIdx, 1);
    toggleModal("interactiveActionModal", false);
    addMediaNews("Gazeta Express", "Kryeministri refuzon kërkesën e " + req.senderName + " për \"" + req.title + "\".", "CRITICAL");
    refreshAllUI();
    showToast("Kërkesa e " + req.senderName + " u refuzua!");
}

function postponePMRequest(reqIdx) {
    var req = state.pmInboxRequests[reqIdx];
    req.deadlineWeeks += 2;
    state.approval = clamp(state.approval - 0.4, 5, 95);
    refreshAllUI();
    showToast("Shqyrtimi i kërkesës u shty për 2 javë.");
}

function generateDynamicIncomingRequest(manualTrigger) {
    var templates = [
        {
            senderName: "Arben Vitia",
            senderRole: "Ministër i Shëndetësisë",
            category: "RAPORT & BUXHET URGJENT",
            urgency: "E LARTË",
            deadlineWeeks: 3,
            title: "Furnizimi me Barna Esenciale dhe Pajisje për Onkologjinë në QKUK",
            desc: "Ministri i Shëndetësisë raporton rritje të kërkesave në QKUK dhe kërkon miratim buxhetor shtesë për listën e barnave esenciale.",
            consequenceText: "Mosmiratimi shkakton mungesë barnash dhe raportime kritike në media (-3.0% Mbështetje).",
            options: [
                { label: "Mirato fondin shtesë prej €14M për QKUK dhe Spitalet Rajonale", costB: 0.014, appDelta: 2.8, secId: "sec_health", outcome: "QKUK furnizohet plotësisht me citostatikë dhe pajisje të reja." },
                { label: "Rialoko €8M nga rezervat e brendshme të Ministrisë", costB: 0.008, appDelta: 1.4, secId: "sec_health", outcome: "Nevojat më urgjente të QKUK-së u mbuluan përmes rialokimit." }
            ]
        },
        {
            senderName: "Ejup Maqedonci & Komandanti i FSK-së",
            senderRole: "Ministria e Mbrojtjes",
            category: "SIGURI & MBROJTJE",
            urgency: "E LARTË",
            deadlineWeeks: 3,
            title: "Kontrata Ndërqeveritare për Sistemet Mbrojtëse dhe Stërvitjen me NATO-n",
            desc: "Ministri i Mbrojtjes kërkon autorizim nga Kryeministri për nënshkrimin e fazës së re të modernizimit të FSK-së.",
            consequenceText: "Vonesa ngadalëson planin dhjetëvjeçar të tranzicionit të FSK-së (-2.0% Mbështetje).",
            options: [
                { label: "Autorizo kontratën dhe ndaj €22M nga Fondi i Sigurisë", costB: 0.022, appDelta: 3.4, secId: "sec_fsk", outcome: "FSK pranon kontingjentin e ri të pajisjeve moderne ushtarake." },
                { label: "Kërko bashkëfinancim me aleatët e NATO-s (SHBA, MB, Turqi)", costB: 0.010, appDelta: 2.1, dipBonus: 3, secId: "sec_fsk", outcome: "U nënshkrua marrëveshja e bashkëfinancimit ushtarak me aleatët." }
            ]
        },
        {
            senderName: "Glauk Konjufca & Emilija Redžepi",
            senderRole: "Zëvendëskryeministrat e Qeverisë",
            category: "KOORDINIM QEVERITAR",
            urgency: "MESATARE",
            deadlineWeeks: 3,
            title: "Paketa e Integrimit Institucional dhe Granteve për Komunitetet",
            desc: "Zëvendëskryeministrat kërkojnë mbledhje koordinuese për përshpejtimin e punësimit dhe projekteve infrastrukturore në komunat multietnike.",
            consequenceText: "Mosveprimi ul kohezionin e partnerëve të koalicionit (-6 raport me komunitetet).",
            options: [
                { label: "Mirato paketën prej €10M për zhvillim rajonal dhe komunitete", costB: 0.010, appDelta: 2.0, secId: "sec_local", outcome: "Grupi Multietnik rrit mbështetjen dhe disiplinën në Kuvend." },
                { label: "Cakto grup pune ndërministror për verifikimin e aplikimeve", costB: 0.003, appDelta: 1.0, secId: "sec_local", outcome: "Komisioni ndërministror nisi shpërndarjen e granteve." }
            ]
        },
        {
            senderName: "Shaqir Totaj, Gazmend Muhaxheri & Agim Aliu",
            senderRole: "Kryetarët e Prizrenit, Pejës dhe Ferizajt",
            category: "KËRKESË KOMUNALE",
            urgency: "MESATARE",
            deadlineWeeks: 4,
            title: "Kërkesë për Zhbllokimin e Projekteve të Ujësjellësit dhe Nënkalimeve Urbane",
            desc: "Kryetarët e komunave të mëdha kërkojnë takim me Kryeministrin dhe Ministrin e Financave për miratimin e garancive shtetërore me BERZH-in.",
            consequenceText: "Refuzimi shkakton përplasje publike mes Qeverisë dhe Asociacionit të Komunave.",
            options: [
                { label: "Mirato garancinë financiare dhe bashkëfinancimin prej €16M", costB: 0.016, appDelta: 2.6, secId: "sec_water", outcome: "Nënshkruhen marrëveshjet me BERZH-in për ujësjellësit në Prizren, Pejë dhe Ferizaj." },
                { label: "Kërko që komunat të mbulojnë 50% të kostos nga buxheti vetanak", costB: 0.008, appDelta: 1.2, secId: "sec_water", outcome: "Arrihet kompromis për bashkëfinancim 50/50 mes Qeverisë dhe komunave." }
            ]
        }
    ];

    var pick = JSON.parse(JSON.stringify(templates[(state.turnCount + state.pmInboxRequests.length) % templates.length]));
    pick.id = "req_" + Date.now();
    state.pmInboxRequests.unshift(pick);
    if (manualTrigger) {
        refreshAllUI();
        showToast("Erdhi kërkesë e re zyrtare nga: " + pick.senderName + "!");
    }
}

function renderCalendarMeetings() {
    var container = document.getElementById("calendarMeetingsContainer");
    if (!container) return;
    var list = state.scheduledMeetings || [];
    if (list.length === 0) {
        container.innerHTML = '<div style="background:#0f172a; padding:14px; border-radius:8px; font-size:0.8rem; color:var(--text-muted);">Nuk keni asnjë takim të planifikuar aktualisht. Klikoni "+ Cakto Takim me Zyrtar nga Databaza" për të zgjedhur nga lista e plotë e politikanëve, deputetëve, ministrave, kryetarëve të komunave dhe ambasadorëve.</div>';
        return;
    }

    container.innerHTML = list.map(function(m, idx) {
        var isReady = m.dueTurn <= state.turnCount && m.status === "SCHEDULED";
        var tagCls = m.status === "COMPLETED" ? "tag-min" : (isReady ? "tag-gold" : "tag-pdk");
        var tagTxt = m.status === "COMPLETED" ? "✔ I PËRFUNDUAR" : (isReady ? "🔴 KOHA PËR TAKIM TANI" : ("Planifikuar për Javën #" + m.dueTurn + " (" + m.hour + ")"));
        return '<div class="card" style="background:#0f172a; margin-bottom:8px; border-color:' + (isReady ? 'var(--accent-gold)' : 'var(--border)') + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
                '<div>' +
                    '<span class="tag ' + tagCls + '">' + tagTxt + '</span>' +
                    '<div style="font-size:0.88rem; font-weight:700; margin-top:4px;">🤝 Takim me: ' + m.targetName + '</div>' +
                    '<div style="font-size:0.74rem; color:var(--accent-gold);">' + m.category + '</div>' +
                    '<div style="font-size:0.75rem; color:var(--text-muted);">Tema: ' + m.topic + ' • Qëllimi: ' + m.goal + '</div>' +
                    (m.outcome ? '<div style="font-size:0.76rem; color:var(--success); margin-top:4px;">Rezultati: ' + m.outcome + '</div>' : '') +
                '</div>' +
                '<div>' +
                    (m.status === "SCHEDULED" ? '<button class="action-btn ' + (isReady ? 'btn-gold' : '') + '" onclick="conductScheduledMeeting(' + idx + ')">' + (isReady ? '▶ Hyr në Takim Tani' : '⏩ Zhvillo para afatit') + '</button>' : '') +
                '</div>' +
            '</div>' +
        '</div>';
    }).join("");
}

function openScheduleMeetingModal(defaultCat, preselectedName) {
    if (!defaultCat) defaultCat = "PARTY_LEADERS";
    if (!preselectedName) preselectedName = "";
    var box = document.getElementById("interactiveActionModalContent");
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📅 Cakto Takim Zyrtar — Zgjidh nga Databaza e Republikës së Kosovës</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="grid-2" style="margin-bottom:10px;">' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">1. Zgjidh Kategorinë e Bashkëbiseduesit:</label>' +
                '<select id="schedCat" style="width:100%;" onchange="populateInterlocutorDropdown()">' +
                    '<option value="INST_KOSOVO" ' + (defaultCat === "INST_KOSOVO" ? "selected" : "") + '>🏛️ Udhëheqës Institucionalë të Kosovës (Presidenca, Kuvendi, FSK, BQK)</option>' +
                    '<option value="PARTY_LEADERS" ' + (defaultCat === "PARTY_LEADERS" ? "selected" : "") + '>🚩 Kryetarë & Përfaqësues të Partive (LVV, PDK, LDK, AAK, Komunitete)</option>' +
                    '<option value="MINISTERS" ' + (defaultCat === "MINISTERS" ? "selected" : "") + '>💼 15 Ministrat & Zëvendëskryeministrat e Qeverisë</option>' +
                    '<option value="MPS_120" ' + (defaultCat === "MPS_120" ? "selected" : "") + '>👥 120 Deputetët e Kuvendit të Kosovës</option>' +
                    '<option value="MAYORS_38" ' + (defaultCat === "MAYORS_38" ? "selected" : "") + '>📍 38 Kryetarët e Komunave të Kosovës</option>' +
                    '<option value="INTL_DIPLOMATS" ' + (defaultCat === "INTL_DIPLOMATS" ? "selected" : "") + '>🌍 Përfaqësues të SHBA, BE, Gjermanisë, Francës, MB, NATO & Shqipërisë</option>' +
                    '<option value="CIVIL_ECON" ' + (defaultCat === "CIVIL_ECON" ? "selected" : "") + '>🏭 Odat Ekonomike, Sindikatat, Shoqëria Civile & Diaspora</option>' +
                '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">2. Kërko me emër, pozitë, parti ose shtet:</label>' +
                '<input type="text" id="schedFilterInput" placeholder="Kërko në listë (p.sh. Abdixhiku, Hamza, SHBA, Lipjan)..." style="width:100%;" oninput="populateInterlocutorDropdown()">' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">3. Zgjidh Personin / Institucionin nga Databaza:</label>' +
            '<select id="schedTargetSelect" style="width:100%;" onchange="updateSelectedInterlocutorInfo()"></select>' +
            '<div id="selectedInterlocutorMeta" style="font-size:0.75rem; color:var(--accent-gold); margin-top:5px;"></div>' +
        '</div>' +
        '<details style="margin-bottom:10px; background:#0f172a; padding:8px 10px; border-radius:8px; border:1px solid var(--border);">' +
            '<summary style="font-size:0.74rem; color:var(--text-muted); cursor:pointer;">➕ Shto person të ri në databazë (Opsion plotësues nëse nuk gjendet në listë)</summary>' +
            '<div style="display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;">' +
                '<input type="text" id="newCustomInterName" placeholder="Emri dhe Mbiemri" style="flex:1;">' +
                '<input type="text" id="newCustomInterRole" placeholder="Pozita / Institucioni / Shteti" style="flex:1;">' +
                '<button class="action-btn btn-success" onclick="addCustomInterlocutorToDB()">+ Shto në Listë</button>' +
            '</div>' +
        '</details>' +
        '<div class="grid-2" style="margin-bottom:10px;">' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">4. Koha e Mbajtjes së Takimit:</label>' +
                '<select id="schedWeeksOffset" style="width:100%;">' +
                    '<option value="1">Java e Ardhshme (+1 Javë) — Ora 10:00</option>' +
                    '<option value="2">Pas 2 Javësh — Ora 14:00</option>' +
                    '<option value="0">Sot (Takim Urgjent — Ora 16:30)</option>' +
                '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">5. Tema Kryesore e Takimit:</label>' +
                '<select id="schedTopic" style="width:100%;">' +
                    '<option value="Koalicioni, Ndarja e Përgjegjësive dhe Votimi në Kuvend">Koalicioni, Ndarja e Përgjegjësive dhe Votimi në Kuvend</option>' +
                    '<option value="Kuorumi dhe Konsensusi për Zgjedhjen e Presidentit">Kuorumi dhe Konsensusi për Zgjedhjen e Presidentit</option>' +
                    '<option value="Mbështetja për Projektligjet dhe Marrëveshjet Ndërkombëtare (80 vota)">Mbështetja për Projektligjet dhe Marrëveshjet me 80 Vota</option>' +
                    '<option value="Koordinimi për Dialogun në Bruksel dhe Sigurinë në Veri">Koordinimi për Dialogun në Bruksel dhe Sigurinë në Veri</option>' +
                    '<option value="Buxheti Sektorial dhe Projektet Kapitale Komunale">Buxheti Sektorial dhe Projektet Kapitale Komunale</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">6. Qëllimi / Objektivi i Takimit:</label>' +
            '<input type="text" id="schedGoal" value="Arritja e marrëveshjes konkrete dhe koordinimi institucional" style="width:100%;">' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="confirmScheduleMeeting()">📌 Regjistro Takimin Zyrtar në Kalendar</button>';
    toggleModal("interactiveActionModal", true);
    window._preselectedInterlocutor = preselectedName;
    populateInterlocutorDropdown();
}

function populateInterlocutorDropdown() {
    var cat = document.getElementById("schedCat").value;
    var filterTxt = (document.getElementById("schedFilterInput").value || "").toLowerCase();
    var sel = document.getElementById("schedTargetSelect");
    var rawList = getInterlocutorsByCategory(cat);

    var filtered = rawList.filter(function(item) {
        return !filterTxt ||
            item.name.toLowerCase().includes(filterTxt) ||
            item.role.toLowerCase().includes(filterTxt) ||
            item.inst.toLowerCase().includes(filterTxt);
    });

    if (filtered.length === 0) {
        sel.innerHTML = '<option value="Zyrtar i Ftuar">Nuk u gjet me këtë filtër — përdor fushën shtesë poshtë</option>';
        return;
    }

    sel.innerHTML = filtered.map(function(item) {
        return '<option value="' + item.name + '" data-role="' + item.role + '" data-inst="' + item.inst + '" data-rel="' + item.rel + '">' +
            item.name + ' — ' + item.role + ' [' + item.inst + '] (Raporti: ' + item.rel + '/100)' +
        '</option>';
    }).join("");

    if (window._preselectedInterlocutor) {
        for (var i = 0; i < sel.options.length; i++) {
            if (sel.options[i].value.includes(window._preselectedInterlocutor)) {
                sel.selectedIndex = i;
                break;
            }
        }
        window._preselectedInterlocutor = "";
    }
    updateSelectedInterlocutorInfo();
}

function updateSelectedInterlocutorInfo() {
    var sel = document.getElementById("schedTargetSelect");
    var meta = document.getElementById("selectedInterlocutorMeta");
    if (!sel || !sel.selectedOptions[0]) return;
    var opt = sel.selectedOptions[0];
    meta.innerHTML = '👤 <strong>' + opt.value + '</strong> • Pozita: ' + (opt.getAttribute("data-role") || '') + ' • Institucioni: ' + (opt.getAttribute("data-inst") || '') + ' • Marrëdhënia me ju: <strong>' + (opt.getAttribute("data-rel") || 70) + '/100</strong>';
}

function addCustomInterlocutorToDB() {
    var cat = document.getElementById("schedCat").value;
    var n = document.getElementById("newCustomInterName").value.trim();
    var r = document.getElementById("newCustomInterRole").value.trim() || "Përfaqësues Zyrtar";
    if (!n) { showToast("Shkruani emrin e personit!"); return; }
    state.customInterlocutors.push({ cat: cat, name: n, role: r, inst: "I shtuar në databazë", rel: 70 });
    window._preselectedInterlocutor = n;
    populateInterlocutorDropdown();
    showToast(n + " u shtua në listën përzgjedhëse!");
}

function confirmScheduleMeeting() {
    var sel = document.getElementById("schedTargetSelect");
    var opt = sel.selectedOptions[0];
    var targetName = opt ? opt.value : "Përfaqësues Zyrtar";
    var categoryLabel = opt ? (opt.getAttribute("data-role") + " (" + opt.getAttribute("data-inst") + ")") : "Takim Zyrtar";
    var offset = parseInt(document.getElementById("schedWeeksOffset").value, 10);
    var topic = document.getElementById("schedTopic").value;
    var goal = document.getElementById("schedGoal").value.trim();

    var newMeet = {
        id: "meet_" + Date.now(),
        category: categoryLabel,
        targetName: targetName,
        topic: topic,
        goal: goal,
        hour: offset === 0 ? "16:30" : "10:00",
        dueTurn: state.turnCount + offset,
        status: "SCHEDULED",
        outcome: null
    };
    state.scheduledMeetings.unshift(newMeet);
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    if (offset === 0) {
        conductScheduledMeeting(0);
    } else {
        showToast("Ftesa për " + targetName + " u regjistrua! Takimi do të zhvillohet pas " + offset + " jave.");
    }
}

function conductScheduledMeeting(meetIdx) {
    var m = state.scheduledMeetings[meetIdx];
    if (!m) return;
    var box = document.getElementById("interactiveActionModalContent");
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🤝 Zhvillimi Live i Takimit: ' + m.targetName + '</div>' +
            '<span class="tag tag-gold">Ora ' + m.hour + '</span>' +
        '</div>' +
        '<div style="font-size:0.78rem; color:var(--accent-gold); margin-bottom:4px;">' + m.category + '</div>' +
        '<div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;"><strong>Tema:</strong> ' + m.topic + ' | <strong>Qëllimi:</strong> ' + m.goal + '</div>' +
        '<div id="liveMeetingTranscript">' +
            '<div class="chat-bubble chat-them"><strong>' + m.targetName + ':</strong> "Faleminderit për ftesën. Jemi këtu për të shqyrtuar çështjen \'' + m.topic + '\'. Cilat janë propozimet dhe garancitë tuaja konkrete?"</div>' +
        '</div>' +
        '<div style="margin-top:10px; margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); display:block; margin-bottom:4px;">Shkruaj qëndrimin ose propozimin tënd direkt në procesverbal (opsionale):</label>' +
            '<input type="text" id="customMeetingMessage" placeholder="Shkruaj mesazhin tënd..." style="width:100%;">' +
        '</div>' +
        '<div style="display:flex; flex-direction:column; gap:6px;">' +
            '<button class="choice-btn" onclick="finalizeScheduledMeeting(' + meetIdx + ', \'COMPROMISE\')">' +
                '<span class="choice-title">1. Ofro marrëveshje bashkëpunimi dhe grup të përbashkët pune</span>' +
                '<span class="choice-impact">+8 Besim politik, +5 Raport ndërpartiak / institucional</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="finalizeScheduledMeeting(' + meetIdx + ', \'BUDGET_PLEDGE\')">' +
                '<span class="choice-title">2. Mirato mbështetje buxhetore prej €18M për kërkesat e paraqitura në takim</span>' +
                '<span class="choice-impact">+14 Besim dhe mbështetje e drejtpërdrejtë në Kuvend/Komunë, -€0.018 Mld Buxhet</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="finalizeScheduledMeeting(' + meetIdx + ', \'FIRM_LINE\')">' +
                '<span class="choice-title">3. Kërko mbështetje pa kushte në emër të interesit shtetëror</span>' +
                '<span class="choice-impact">+1.5% Popullaritet te baza juaj, por bashkëbiseduesi ruan rezervat</span>' +
            '</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function finalizeScheduledMeeting(meetIdx, decisionCode) {
    var m = state.scheduledMeetings[meetIdx];
    var customMsg = document.getElementById("customMeetingMessage") ? document.getElementById("customMeetingMessage").value.trim() : "";
    m.status = "COMPLETED";

    if (decisionCode === "COMPROMISE") {
        m.outcome = "U arrit dakordim dhe koordinim institucional me " + m.targetName + "." + (customMsg ? (" (\"" + customMsg + "\")") : "");
        state.approval = clamp(state.approval + 1.5, 5, 95);
        ["PDK", "LDK", "AAK", "MIN_MULTI"].forEach(function(k) {
            state.parties[state.playerParty].relations[k] = clamp((state.parties[state.playerParty].relations[k] || 50) + 5, 0, 100);
        });
    } else if (decisionCode === "BUDGET_PLEDGE") {
        state.budgetTotalB = +(state.budgetTotalB - 0.018).toFixed(3);
        m.outcome = "Marrëveshje e plotë me mbështetje buxhetore prej €18M." + (customMsg ? (" (\"" + customMsg + "\")") : "");
        ["PDK", "LDK", "AAK", "MIN_MULTI"].forEach(function(k) {
            state.parties[state.playerParty].relations[k] = clamp((state.parties[state.playerParty].relations[k] || 50) + 9, 0, 100);
        });
    } else {
        m.outcome = "Takimi përfundoi pa lëshime; palët ruajtën qëndrimet e tyre." + (customMsg ? (" (\"" + customMsg + "\")") : "");
        state.approval = clamp(state.approval + 1.2, 5, 95);
    }

    addMediaNews("RTK / Koha", "Përfundon takimi zyrtar me " + m.targetName + " për temën: " + m.topic + ".", "POSITIVE", m.outcome);
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("Takimi përfundoi dhe u regjistrua në procesverbalin e Kalendarit!");
}

function startPressConference() {
    var topic = document.getElementById("pressTopicSelect").value;
    var tone = document.getElementById("pressToneSelect").value;
    var partner = document.getElementById("pressPartnerSelect").value;

    state.activePressSession = {
        topic: topic, tone: tone, partner: partner, step: 1, maxSteps: 3, transcript: [],
        questions: [
            { journalist: "Gazetari Politik (KOHA / KTV)", q: "Z. Kryeministër, në lidhje me temën e sotme (" + topic + "), qytetarët dhe opozita kërkojnë afate konkrete. A po merrni sot zotim me afat apo po kërkoni më shumë kohë?" },
            { journalist: "Gazetarja Hulumtuese (Betimi për Drejtësi / Kallxo)", q: "Pyetje përcjellëse: Koalicioni aktual ka " + getCoalitionSeats() + " deputetë në Kuvend dhe buxheti është €" + state.budgetTotalB.toFixed(2) + " Mld. Si do t'i siguroni votat në Kuvend pa kompromis me opozitën?" },
            { journalist: "Korrespondenti Diplomatik (T7 / Klan Kosova)", q: "Pyetja e tretë: Ambasadat e QUINT-it (Raporti: " + state.diplomacy.USA.score + "/100) vëzhgojnë vendimet e Qeverisë. Cili është mesazhi juaj për Uashingtonin dhe Brukselin sot?" }
        ]
    };
    renderCurrentPressQuestion();
}

function renderCurrentPressQuestion() {
    var sess = state.activePressSession;
    var stage = document.getElementById("pressLiveStage");
    if (!sess) { stage.style.display = "none"; return; }
    stage.style.display = "block";

    var currQ = sess.questions[sess.step - 1];
    var transHtml = sess.transcript.length > 0
        ? '<div style="margin-bottom:10px; max-height:140px; overflow-y:auto; padding:8px; background:#090e1a; border-radius:8px; font-size:0.75rem;">' +
            sess.transcript.map(function(t) { return '<div style="margin-bottom:4px;"><strong>' + t.who + ':</strong> ' + t.text + '</div>'; }).join("") +
          '</div>'
        : "";

    stage.innerHTML =
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
            '<span style="font-size:0.78rem; color:var(--accent-gold); font-weight:700;">🔴 LIVE NGA KRYEMINISTRIA — PYETJA ' + sess.step + ' NGA ' + sess.maxSteps + '</span>' +
            '<button class="btn-top" onclick="finishFullPressConference()">Përfundo Konferencën</button>' +
        '</div>' +
        transHtml +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; border-left:4px solid var(--accent-blue); margin-bottom:12px;">' +
            '<div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:4px;">🎤 Pyetja #' + sess.step + ' nga <strong>' + currQ.journalist + '</strong>:</div>' +
            '<div style="font-size:0.86rem; font-style:italic;">"' + currQ.q + '"</div>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<div style="display:flex; gap:6px;">' +
                '<input type="text" id="freePressAnswerInput" placeholder="Shkruaj deklaratën tënde të lirë këtu..." style="flex:1;">' +
                '<button class="action-btn btn-gold" onclick="submitPressAnswer(\'FREE_TEXT\')">Deklaro ▶</button>' +
            '</div>' +
        '</div>' +
        '<div>' +
            '<button class="choice-btn" onclick="submitPressAnswer(\'DIRECT_FACTS\')">' +
                '<span class="choice-title">1. Përgjigje e drejtpërdrejtë me shifra dhe fakte institucionale</span>' +
                '<span class="choice-impact">+1.5% Besueshmëri publike, raportim pozitiv në media</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="submitPressAnswer(\'PUBLIC_PROMISE\')">' +
                '<span class="choice-title">2. Premto veprim konkret brenda 14 javëve (Regjistrohet në Regjistrin e Premtimeve)</span>' +
                '<span class="choice-impact">+2.8% Mbështetje e menjëhershme, shtohet premtim me afat</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="submitPressAnswer(\'COOPERATIVE_ALLIES\')">' +
                '<span class="choice-title">3. Fto opozitën dhe partnerët ndërkombëtarë për bashkëpunim shtetëror</span>' +
                '<span class="choice-impact">+4 pikë diplomaci & raport ndërpartiak</span>' +
            '</button>' +
        '</div>';
}

function submitPressAnswer(ansType) {
    var sess = state.activePressSession;
    if (!sess) return;
    var currQ = sess.questions[sess.step - 1];
    var freeTxt = document.getElementById("freePressAnswerInput") ? document.getElementById("freePressAnswerInput").value.trim() : "";

    var answerSummary = "";
    if (ansType === "FREE_TEXT" && freeTxt) {
        answerSummary = freeTxt;
        state.approval = clamp(state.approval + 1.8, 5, 95);
    } else if (ansType === "PUBLIC_PROMISE") {
        answerSummary = "Qeveria merr zotim zyrtar që brenda 14 javëve të përmbushë këtë masë.";
        state.approval = clamp(state.approval + 2.8, 5, 95);
        state.promises.push({
            id: "prom_press_" + Date.now(),
            title: "Zotim në Konferencë (" + sess.topic + "): Paketa e re ekzekutive",
            deadlineWeeks: 14,
            costB: 0.06,
            progress: 15,
            fulfilled: false,
            source: "Konferencë për Shtyp (" + MONTHS_SQ[state.monthIndex] + " " + state.year + ")"
        });
    } else if (ansType === "COOPERATIVE_ALLIES") {
        answerSummary = "Shtrijmë dorën e bashkëpunimit për opozitën dhe aleatët tanë strategjikë SHBA e BE.";
        state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 4, 10, 100);
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + 4, 10, 100);
        state.approval = clamp(state.approval + 1.2, 5, 95);
    } else {
        answerSummary = "Të dhënat tona buxhetore dhe ligjore tregojnë përparim të qëndrueshëm.";
        state.approval = clamp(state.approval + 1.5, 5, 95);
    }

    sess.transcript.push({ who: currQ.journalist, text: currQ.q });
    sess.transcript.push({ who: "Kryeministri", text: answerSummary });

    if (sess.step < sess.maxSteps) {
        sess.step++;
        renderCurrentPressQuestion();
    } else {
        finishFullPressConference();
    }
}

function finishFullPressConference() {
    var sess = state.activePressSession;
    state.activePressSession = null;
    document.getElementById("pressLiveStage").style.display = "none";
    if (!sess) return;
    var fullReport = sess.transcript.map(function(t) { return t.who + ': "' + t.text + '"'; }).join(" | ");
    addMediaNews("KTV / T7 / RTK", "Përfundon konferenca për media me " + sess.step + " raunde pyetjesh mbi temën: " + sess.topic + ".", "POSITIVE", fullReport);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "KONFERENCË PËR MEDIA",
        title: "Përmbledhja Mediatike e Konferencës për Shtyp",
        reason: "U zhvilluan " + sess.step + " pyetje me gazetarët e akredituar në Kryeministri.",
        immediateImpact: "Deklaratat dhe premtimet u pasqyruan në lajmet kryesore dhe në sondazhin e mbështetjes publike."
    });
}

function renderPromisesList() {
    var container = document.getElementById("promisesListContainer");
    var fulfilledCount = state.promises.filter(function(p) { return p.fulfilled; }).length;
    var score = Math.round(65 + (fulfilledCount * 10));
    document.getElementById("promiseScoreBadge").textContent = "Besueshmëria: " + Math.min(100, score) + "%";

    container.innerHTML = state.promises.map(function(pr, idx) {
        var costM = (pr.costB * 1000).toFixed(0);
        return '<div class="card" style="background:#0f172a; margin-bottom:10px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:6px;">' +
                '<strong style="font-size:0.86rem;">' + pr.title + '</strong>' +
                '<span class="tag ' + (pr.fulfilled ? 'tag-min' : 'tag-aak') + '">' + (pr.fulfilled ? "✔ I PËRMBUSHUR" : ("Afati: edhe " + pr.deadlineWeeks + " javë")) + '</span>' +
            '</div>' +
            '<div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:8px;">Burimi: ' + pr.source + ' • Kosto fiskale: €' + costM + ' Milionë</div>' +
            '<div class="prog-row">' +
                '<div class="prog-label"><span>Shkalla e realizimit</span><span>' + pr.progress + '%</span></div>' +
                '<div class="prog-track"><div class="prog-fill" style="width:' + pr.progress + '%; background:' + (pr.fulfilled ? 'var(--success)' : 'var(--accent-gold)') + ';"></div></div>' +
            '</div>' +
            (!pr.fulfilled ? '<button class="action-btn btn-success" onclick="fulfillPromiseNow(' + idx + ')">Financo & Përmbush Premtimin Tani (-€' + costM + 'M)</button>' : '') +
        '</div>';
    }).join("");
}

function fulfillPromiseNow(idx) {
    var pr = state.promises[idx];
    if (!pr || pr.fulfilled) return;
    state.budgetTotalB = +(state.budgetTotalB - pr.costB).toFixed(2);
    pr.progress = 100;
    pr.fulfilled = true;
    state.approval = clamp(state.approval + 4.2, 5, 95);
    addMediaNews("RTK", "Qeveria përmbush premtimin: \"" + pr.title + "\".", "POSITIVE");
    refreshAllUI();
    showToast("Premtimi u realizua! Besueshmëria e qytetarëve u rrit me +4.2%.");
}

function renderPartySection() {
    var p = state.parties[state.playerParty];
    document.getElementById("partyDetailsContainer").innerHTML =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">🚩 ' + p.name + '</div>' +
                '<span class="tag ' + p.tagClass + '">' + p.seats + ' Deputetë • Sondazhi: ' + p.poll.toFixed(1) + '%</span>' +
            '</div>' +
            '<div class="grid-2" style="font-size:0.82rem; line-height:1.7;">' +
                '<div>' +
                    '<div>• <strong>Kryetari i Partisë:</strong> ' + p.leader + '</div>' +
                    '<div>• <strong>Nënkryetarët:</strong> ' + p.deputyLeaders.join(", ") + '</div>' +
                    '<div>• <strong>Sekretari Organizativ:</strong> ' + p.orgSecretary + '</div>' +
                    '<div>• <strong>Ideologjia & Profili:</strong> ' + p.ideology + '</div>' +
                    '<div>• <strong>Qëndrimi për Dialogun:</strong> ' + p.dialogueStance + '</div>' +
                '</div>' +
                '<div>' +
                    '<div>• <strong>Disiplina Parlamentare e Grupit:</strong> ' + p.partyDiscipline + '%</div>' +
                    '<div>• <strong>Kohezioni i Brendshëm:</strong> ' + p.internalCohesion + '%</div>' +
                    '<div>• <strong>Buxheti i Partisë për Fushatë:</strong> €' + p.partyFunds.toLocaleString() + '</div>' +
                    '<div>• <strong>Orientimi Euro-Atlantik:</strong> BE (' + p.euStance + '/100) | SHBA (' + p.usStance + '/100)</div>' +
                '</div>' +
            '</div>' +
            '<div style="margin-top:12px; display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button class="action-btn" onclick="holdPartyCouncilMeeting()">Thirr mbledhjen e Këshillit të Përgjithshëm (+Disiplinë)</button>' +
                '<button class="action-btn btn-gold" onclick="fundraisePartyDiaspora()">Tubim Financiar me Mërgatën (+€65,000 fonde partie)</button>' +
            '</div>' +
        '</div>';

    var cands = p.candidates;
    var femaleCount = cands.filter(function(c) { return c.gender === "F"; }).length;
    var femalePct = cands.length > 0 ? Math.round((femaleCount / cands.length) * 100) : 0;
    var quotaMet = femalePct >= INITIAL_POLITICAL_DB.constitutionalRules.genderQuotaMinPercent;

    var badgeEl = document.getElementById("listLegalBadge");
    badgeEl.textContent = quotaMet ? ("✔ Kuota Gjinore " + femalePct + "% (E Ligjshme ≥30%)") : ("⚠ Kuota Gjinore " + femalePct + "% (Nën 30%!)");
    badgeEl.className = "tag " + (quotaMet ? "tag-min" : "tag-lvv");

    document.getElementById("electoralListSummary").innerHTML =
        '<div style="background:#0f172a; padding:10px; border-radius:8px; font-size:0.8rem; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">' +
            '<span>Kandidatë kryesorë në listë: <strong>' + cands.length + '</strong></span>' +
            '<span>Përfaqësimi i grave: <strong>' + femaleCount + ' (' + femalePct + '%)</strong></span>' +
            '<span>Kohezioni i brendshëm partiak: <strong>' + p.internalCohesion + '%</strong></span>' +
        '</div>';

    document.getElementById("activeCandidatesList").innerHTML = cands.map(function(c, idx) {
        return '<div style="background:#0f172a; border:1px solid var(--border); border-radius:8px; padding:8px 10px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:6px;">' +
            '<div>' +
                '<div style="font-size:0.82rem; font-weight:700;">#' + (idx + 1) + '. ' + c.name + ' <span style="font-size:0.7rem; color:var(--accent-gold);">(' + c.gender + ') • ' + c.region + '</span></div>' +
                '<div style="font-size:0.72rem; color:var(--text-muted);">' + c.role + ' | Popullariteti: ' + c.pop + ' | Besnikëria: ' + c.loyalty + '%</div>' +
            '</div>' +
            '<div style="display:flex; gap:4px;">' +
                (idx > 0 ? '<button class="btn-top" onclick="moveCandidateInList(' + idx + ', -1)">▲</button>' : '') +
                (idx < cands.length - 1 ? '<button class="btn-top" onclick="moveCandidateInList(' + idx + ', 1)">▼</button>' : '') +
                (idx > 0 ? '<button class="btn-top" style="color:var(--danger);" onclick="removeCandidateFromList(' + idx + ')">✕</button>' : '') +
            '</div>' +
        '</div>';
    }).join("");

    document.getElementById("reserveCandidatesList").innerHTML = (p.reserves && p.reserves.length > 0)
        ? p.reserves.map(function(r, rIdx) {
            return '<div style="background:#0f172a; border:1px solid var(--border); border-radius:8px; padding:8px 10px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center;">' +
                '<div>' +
                    '<div style="font-size:0.82rem; font-weight:700;">' + r.name + ' <span style="font-size:0.7rem; color:var(--accent-gold);">(' + r.gender + ') • ' + r.region + '</span></div>' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">' + r.role + ' | Popullariteti: ' + r.pop + '</div>' +
                '</div>' +
                '<button class="action-btn btn-success" onclick="includeReserveCandidate(' + rIdx + ')">+ Shto në Listë</button>' +
            '</div>';
        }).join("")
        : '<div style="font-size:0.78rem; color:var(--text-muted);">Të gjithë kandidatët rezervë janë përfshirë në listë.</div>';

    renderCoalitionNegotiations();
}

function moveCandidateInList(idx, dir) {
    var list = state.parties[state.playerParty].candidates;
    var target = idx + dir;
    if (target < 0 || target >= list.length) return;
    var temp = list[idx]; list[idx] = list[target]; list[target] = temp;
    refreshAllUI();
}

function removeCandidateFromList(idx) {
    var p = state.parties[state.playerParty];
    var removed = p.candidates.splice(idx, 1)[0];
    p.reserves.push(removed);
    if (removed.pop >= 78) {
        p.internalCohesion = clamp(p.internalCohesion - 8, 20, 100);
        p.poll = clamp(p.poll - 0.8, 2, 85);
        addMediaNews("Gazeta Express", "Largimi i " + removed.name + " nga lista e " + p.short + " shkakton pakënaqësi në " + removed.region + "!", "CRITICAL");
    }
    refreshAllUI();
}

function includeReserveCandidate(rIdx) {
    var p = state.parties[state.playerParty];
    var cand = p.reserves.splice(rIdx,
