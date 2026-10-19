/* ============================================================================
   REPUBLIKA: SIMULATORI POLITIK I KOSOVËS — LOGJIKA KRYESORE (v5.0)
   FAZA E RE: CIKLI INSTITUCIONAL, STATUSI I LOJTARIT, NEGOCIATAT
   PRESIDENCIALE, ZGJEDHJET E NDARA, DOSJET JAVORE DHE RREGULLIMI I BUXHETIT
   ============================================================================ */

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
        genderQuotaMinPercent: 30,
        presidentialMandateYears: 5,
        assemblyMandateYears: 4,
        assemblyMandateWeeks: 208,
        presidentialMandateWeeks: 260
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
            name: "Grupi Multietnik & Komunitetet",
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

const STORAGE_KEY_AUTO = "republika_ks_2026_autosave_v5";
const STORAGE_KEY_SLOTS = "republika_ks_2026_slots_v5";
const MONTHS_SQ = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];

/* ============================================================================
   FAZA E RE: STATUSI I LOJTARIT DHE FAZAT INSTITUCIONALE
   ============================================================================ */

const PLAYER_STATUS = {
    IN_GOVERNMENT: "IN_GOVERNMENT",
    OPPOSITION: "OPPOSITION",
    CARE_TAKER: "CARE_TAKER",
    TRANSITION: "TRANSITION",
    NO_GOVERNMENT: "NO_GOVERNMENT"
};

const INSTITUTIONAL_PHASES = {
    NEW: "NEW",
    ASSEMBLY_ELECTED: "ASSEMBLY_ELECTED",
    SPEAKER_ELECTED: "SPEAKER_ELECTED",
    PRESIDENT_ELECTED: "PRESIDENT_ELECTED",
    GOV_VOTING: "GOV_VOTING",
    GOV_APPROVED: "GOV_APPROVED",
    GOV_IN_OFFICE: "GOV_IN_OFFICE",
    GOV_OVERTHROWN: "GOV_OVERTHROWN",
    SNAP_ELECTION: "SNAP_ELECTION"
};

const INSTITUTIONAL_PHASE_LABELS = {
    NEW: "Procesi institucional ka nisur",
    ASSEMBLY_ELECTED: "Kuvendi u konstituua — pritet zgjedhja e Kryetarit",
    SPEAKER_ELECTED: "Kryetari i Kuvendit u zgjodh — pritet Presidenti",
    PRESIDENT_ELECTED: "Presidenti u zgjodh — pritet votimi i Qeverisë",
    GOV_VOTING: "Qeveria është në votim në Kuvend",
    GOV_APPROVED: "Qeveria u miratua — në pritje të fillimit të mandatit",
    GOV_IN_OFFICE: "Qeveria është në detyrë me mandat të plotë",
    GOV_OVERTHROWN: "Qeveria u rrëzua — nevojiten zgjedhje të reja ose mandatar i ri",
    SNAP_ELECTION: "Zgjedhjet e reja janë thirrur"
};

let state = null;
let votingAnimInterval = null;
let currentVotingData = null;
let _voteInProgress = false;

function getPlayerStatus() {
    if (!state) return PLAYER_STATUS.NO_GOVERNMENT;
    var phase = state.institutionalPhase || INSTITUTIONAL_PHASES.NEW;
    if (phase === INSTITUTIONAL_PHASES.GOV_OVERTHROWN || phase === INSTITUTIONAL_PHASES.SNAP_ELECTION) {
        if (state.coalitionParties && state.coalitionParties.indexOf(state.playerParty) !== -1) {
            return PLAYER_STATUS.TRANSITION;
        }
        return PLAYER_STATUS.OPPOSITION;
    }
    if (phase === INSTITUTIONAL_PHASES.GOV_VOTING) {
        return PLAYER_STATUS.TRANSITION;
    }
    if (phase === INSTITUTIONAL_PHASES.GOV_APPROVED || phase === INSTITUTIONAL_PHASES.GOV_IN_OFFICE) {
        if (state.coalitionParties && state.coalitionParties.indexOf(state.playerParty) !== -1) {
            return PLAYER_STATUS.IN_GOVERNMENT;
        }
        return PLAYER_STATUS.OPPOSITION;
    }
    if (state.mandatar === state.playerParty) {
        return PLAYER_STATUS.TRANSITION;
    }
    if (state.governmentFormed && state.coalitionParties && state.coalitionParties.indexOf(state.playerParty) === -1) {
        return PLAYER_STATUS.OPPOSITION;
    }
    return PLAYER_STATUS.OPPOSITION;
}

function getPlayerStatusLabel() {
    var st = getPlayerStatus();
    if (st === PLAYER_STATUS.IN_GOVERNMENT) return "Qeveri në Detyrë (Pushtet i Plotë)";
    if (st === PLAYER_STATUS.OPPOSITION) return "Opozitë";
    if (st === PLAYER_STATUS.CARE_TAKER) return "Qeveri në Detyrë (jo pjesë e saj)";
    if (st === PLAYER_STATUS.TRANSITION) return "Në Proces Formimi të Qeverisë";
    return "Pa Qeveri Funksionale";
}

function isPlayerInGovernment() {
    return getPlayerStatus() === PLAYER_STATUS.IN_GOVERNMENT;
}

function isPlayerOpposition() {
    var st = getPlayerStatus();
    return st === PLAYER_STATUS.OPPOSITION || st === PLAYER_STATUS.TRANSITION;
}

function isPlayerCaretaker() {
    return getPlayerStatus() === PLAYER_STATUS.CARE_TAKER;
}

function assertGovernmentAuthority(actionLabel) {
    var st = getPlayerStatus();
    if (st !== PLAYER_STATUS.IN_GOVERNMENT) {
        if (st === PLAYER_STATUS.OPPOSITION) {
            showToast("⛔ " + (actionLabel || "Ky veprim") + " është vetëm për Qeverinë në detyrë. Ju jeni në opozitë. Mund të përdorni mjetet parlamentare të kontrollit.");
        } else if (st === PLAYER_STATUS.TRANSITION) {
            showToast("⛔ " + (actionLabel || "Ky veprim") + " nuk mund të kryhet gjatë tranzicionit institucional. Fillimisht duhet të formohet dhe votohet Qeveria e re.");
        } else if (st === PLAYER_STATUS.CARE_TAKER) {
            showToast("⛔ " + (actionLabel || "Ky veprim") + " nuk lejohet për një qeveri në detyrë (caretaker). Vetëm veprimet urgjente dhe vazhdimësia lejohen.");
        } else {
            showToast("⛔ " + (actionLabel || "Ky veprim") + " kërkon një Qeveri funksionale me mandat të plotë.");
        }
        return false;
    }
    return true;
}

function assertAssemblyFunctional(actionLabel) {
    if (!state) return false;
    if (!state.assemblyConstituted || !state.speakerElected) {
        showToast("⛔ " + (actionLabel || "Ky veprim") + " kërkon një Kuvend të konstituuar me Kryetar të zgjedhur. Fillimisht konstituoni Kuvendin dhe zgjidhni Kryetarin.");
        return false;
    }
    return true;
}

function setInstitutionalPhase(phase, note) {
    if (!state) return;
    state.institutionalPhase = phase;
    applyInstitutionalPhaseTransition(phase, note);
}

function applyInstitutionalPhaseTransition(phase, note) {
    if (!state) return;
    state.institutionalPhase = phase;

    if (phase === INSTITUTIONAL_PHASES.NEW) {
        state.assemblyConstituted = false;
        state.speakerElected = false;
        state.speakerOfAssembly = "Në pritje të konstituimit";
        state.governmentFormed = false;
        state.governmentStatus = "NONE";
        state.primeMinister = "Nuk ka qeveri";
    } else if (phase === INSTITUTIONAL_PHASES.ASSEMBLY_ELECTED) {
        state.assemblyConstituted = true;
        state.speakerElected = false;
        state.speakerOfAssembly = "Në pritje të zgjedhjes së Kryetarit";
        state.governmentFormed = false;
        state.governmentStatus = "PENDING";
        state.primeMinister = "Në pritje të mandatarit";
    } else if (phase === INSTITUTIONAL_PHASES.SPEAKER_ELECTED) {
        state.assemblyConstituted = true;
        state.speakerElected = true;
        if (!state.speakerOfAssembly || state.speakerOfAssembly.indexOf("pritje") !== -1) {
            state.speakerOfAssembly = "Albulena Haxhiu (LVV)";
        }
        state.governmentFormed = false;
        state.governmentStatus = "PENDING";
        state.primeMinister = "Në pritje të mandatarit";
    } else if (phase === INSTITUTIONAL_PHASES.PRESIDENT_ELECTED) {
        state.assemblyConstituted = true;
        state.speakerElected = true;
        state.governmentFormed = false;
        state.governmentStatus = "PENDING";
        state.primeMinister = "Në pritje të votimit të Qeverisë";
    } else if (phase === INSTITUTIONAL_PHASES.GOV_VOTING) {
        state.assemblyConstituted = true;
        state.speakerElected = true;
        state.governmentFormed = false;
        state.governmentStatus = "VOTING";
        state.primeMinister = "Qeveria në votim";
    } else if (phase === INSTITUTIONAL_PHASES.GOV_APPROVED) {
        state.assemblyConstituted = true;
        state.speakerElected = true;
        state.governmentFormed = true;
        state.governmentStatus = "APPROVED";
    } else if (phase === INSTITUTIONAL_PHASES.GOV_IN_OFFICE) {
        state.assemblyConstituted = true;
        state.speakerElected = true;
        state.governmentFormed = true;
        state.governmentStatus = "IN_OFFICE";
    } else if (phase === INSTITUTIONAL_PHASES.GOV_OVERTHROWN) {
        state.governmentFormed = false;
        state.governmentStatus = "OVERTHROWN";
        state.primeMinister = "Qeveri e rrëzuar — pritet mandatar i ri ose zgjedhje";
        state.coalitionParties = [];
        state.coalitionAgreements = [];
        state.ministries.forEach(function(m) {
            m.party = "NONE";
            m.minister = "I/E paemëruar";
        });
    } else if (phase === INSTITUTIONAL_PHASES.SNAP_ELECTION) {
        state.governmentFormed = false;
        state.governmentStatus = "SNAP_ELECTION";
        state.primeMinister = "Qeveri në detyrë deri në zgjedhje";
        state.assemblyConstituted = false;
        state.speakerElected = false;
        state.speakerOfAssembly = "Kuvend i shpërndarë — zgjedhje të reja";
    }

    if (note) {
        state.historyLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + " [Institucional]: " + note);
    }
}

function getPlayerRoleLabel() {
    if (!state) return "";
    var p = state.parties[state.playerParty];
    var st = getPlayerStatus();
    if (st === PLAYER_STATUS.IN_GOVERNMENT) {
        if (state.mandatar === state.playerParty || (state.primeMinister && state.primeMinister.indexOf(p.short) !== -1)) {
            return "Kryeministër (" + p.short + ")";
        }
        return "Bashkëqeverisje (" + p.short + ")";
    }
    if (st === PLAYER_STATUS.OPPOSITION) return "Opozitë (" + p.short + ")";
    if (st === PLAYER_STATUS.TRANSITION) return "Tranzicion — Mandatar (" + p.short + ")";
    if (st === PLAYER_STATUS.CARE_TAKER) return "Qeveri në Detyrë (jo pjesë e saj)";
    return "Pa Qeveri (" + p.short + ")";
}

/* ============================================================================
   2. KATALOGU I PROJEKTEVE ZHVILLIMORE
   ============================================================================ */
const DEVELOPMENT_PROJECT_CATALOG = [
    { type: "ROAD", name: "Rrugë dhe Infrastrukturë Rrugore", sectorId: "sec_roads", icon: "🛣️", costRangeM: [8, 60], weeksRange: [8, 20], sectorGain: 8, muniInfraGain: 12, muniConnectGain: 10, empGain: 3, devGain: 5, riskText: "Vonesa nga shpronësimet dhe moti i keq." },
    { type: "SCHOOL", name: "Shkolla dhe Çerdhe", sectorId: "sec_edu", icon: "🏫", costRangeM: [6, 35], weeksRange: [10, 24], sectorGain: 9, muniServGain: 8, muniEducGain: 14, devGain: 4, riskText: "Mungesa e kuadrit mësimor dhe teksteve." },
    { type: "HEALTH", name: "Qendra Shëndetësore dhe Spitale", sectorId: "sec_health", icon: "🏥", costRangeM: [10, 55], weeksRange: [12, 26], sectorGain: 10, muniServGain: 12, muniHealthGain: 14, devGain: 5, riskText: "Prokurimi i pajisjeve dhe stafit mjekësor." },
    { type: "WATER", name: "Ujësjellës dhe Kanalizim", sectorId: "sec_water", icon: "💧", costRangeM: [8, 45], weeksRange: [10, 22], sectorGain: 8, muniInfraGain: 10, muniServGain: 10, muniHealthGain: 4, devGain: 4, riskText: "Problemet me lejet mjedisore." },
    { type: "TRANSPORT", name: "Transport Publik Urban", sectorId: "sec_rail", icon: "🚌", costRangeM: [10, 40], weeksRange: [10, 18], sectorGain: 7, muniConnectGain: 12, muniServGain: 6, devGain: 4, riskText: "Vonesat në blerjen e autobusëve." },
    { type: "ECONOMIC_ZONE", name: "Zonë Ekonomike dhe Park Biznesi", sectorId: "sec_econ", icon: "🏭", costRangeM: [15, 70], weeksRange: [16, 28], sectorGain: 8, muniEmpGain: 12, devGain: 10, gdpGain: 0.15, riskText: "Tërheqja e investitorëve privatë." },
    { type: "ENERGY_EFF", name: "Efikasitet Energjetik dhe Energji e Ripërtëritshme", sectorId: "sec_energy", icon: "⚡", costRangeM: [12, 50], weeksRange: [12, 22], sectorGain: 9, muniServGain: 6, devGain: 5, riskText: "Çmimet e paneleve dhe lejet." },
    { type: "ENVIRONMENT", name: "Mjedis dhe Menaxhim Mbeturinash", sectorId: "sec_env", icon: "♻️", costRangeM: [8, 35], weeksRange: [10, 20], sectorGain: 8, muniServGain: 8, devGain: 5, riskText: "Rezistenca lokale ndaj deponive." },
    { type: "DIGITAL", name: "Digjitalizim i Shërbimeve Komunale", sectorId: "sec_tech", icon: "💻", costRangeM: [4, 20], weeksRange: [6, 14], sectorGain: 7, muniServGain: 10, devGain: 3, riskText: "Siguria kibernetike dhe trajnimi i stafit." },
    { type: "AGRICULTURE", name: "Projekte Bujqësore dhe Ujitje", sectorId: "sec_agri", icon: "🌾", costRangeM: [6, 30], weeksRange: [8, 18], sectorGain: 7, muniEmpGain: 6, devGain: 5, riskText: "Kushtet klimatike dhe tregu." }
];

const DEVELOPMENT_PROJECT_LEVELS = {
    1: "Shumë i dobët", 2: "I dobët", 3: "Nën mesatare", 4: "Mesatar i ulët",
    5: "Mesatar", 6: "Mesatar i lartë", 7: "I mirë", 8: "Shumë i mirë", 9: "I shkëlqyer", 10: "Ekselent"
};

/* ============================================================================
   3. KATALOGU I PROJEKTLIGJEVE (Pika 6)
   Burime: Kuvendi i Kosovës, Gazeta Zyrtare, Kushtetuta (Neni 81)
   Ligjet historike janë tituj realë të verifikuar; parametrat e lojës janë
   të simuluar për balancim, jo pretendime për kosto reale.
   ============================================================================ */
const LAW_CATALOG = [
    /* BUXHETI */
    { id: "cat_budget_2027", title: "Ligji për Buxhetin e Republikës së Kosovës për Vitin 2027", desc: "Përcakton kuadrin fiskal vjetor, burimet e të hyrave dhe kufijtë e shpenzimeve për të gjitha institucionet buxhetore.", field: "Buxheti", ministry: "Ministria e Financave, Punës dhe Transfereve", lawType: "BUDGET", source: "Historik real — Kuvendi i Kosovës, Ligji vjetor i buxhetit", defaultCostM: 140, costRangeM: [80, 250], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.5, sectorId: "sec_econ", riskText: "Rrezik i moskalimit nëse mazhoranca është e brishtë.", historicNote: "Ligji vjetor i buxhetit miratohet me shumicë të thjeshtë." },
    { id: "cat_anti_informality", title: "Ligji për Parandalimin e Informalitetit dhe Digjitalizimin e Arkave Fiskale", desc: "Zgjerimi i sistemit të arkave fiskale elektronike dhe nxitja e formalizimit të bizneseve.", field: "Buxheti", ministry: "Ministria e Financave, Punës dhe Transfereve", lawType: "ORDINARY", source: "Temë e simuluar, e bazuar në reformat reale të ATK-së", defaultCostM: 20, costRangeM: [5, 40], impactType: "APPROVAL_MIXED", impactMagnitude: 2.0, sectorId: "sec_econ", riskText: "Kundërshtim nga bizneset e vogla për shkak të kostove të përshtatjes." },
    { id: "cat_sovereign_fund", title: "Ligji për Fondin Sovran të Investimeve Strategjike", desc: "Themelon një fond shtetëror për investime kapitale në sektorë strategjikë me partneritet privat.", field: "Buxheti", ministry: "Ministria e Financave, Punës dhe Transfereve", lawType: "ORDINARY", source: "Propozim i simuluar për simulatorin", defaultCostM: 35, costRangeM: [15, 70], impactType: "APPROVAL_MIXED", impactMagnitude: 1.5, sectorId: "sec_econ", riskText: "Rrezik qeverisjeje dhe transparence në menaxhimin e fondit." },
    /* ARSIMI */
    { id: "cat_higher_education", title: "Ligji për Arsimin e Lartë dhe Akreditimin e Universiteteve", desc: "Rregullon kriteret e akreditimit, financimin dhe cilësinë e arsimit të lartë universitar në Kosovë.", field: "Arsimi", ministry: "Ministria e Arsimit, Shkencës, Teknologjisë dhe Inovacionit", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-037 për Arsimin e Lartë në Republikën e Kosovës", defaultCostM: 15, costRangeM: [5, 40], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.5, sectorId: "sec_edu", riskText: "Rezistencë nga sindikatat akademike." },
    { id: "cat_preuniversity", title: "Ligji për Arsimin Parauniversitar dhe Tekstet Shkollore Falas", desc: "Garanton tekstet falas për arsimin e detyrueshëm dhe modernizon kurrikulën.", field: "Arsimi", ministry: "Ministria e Arsimit, Shkencës, Teknologjisë dhe Inovacionit", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-032 për Arsimin Parauniversitar", defaultCostM: 30, costRangeM: [15, 60], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.0, sectorId: "sec_edu", riskText: "Kosto e lartë fiskale dhe vonesa në prokurim." },
    { id: "cat_children_allowance", title: "Ligji për Shtesat për Fëmijë dhe Lehonat", desc: "Zgjon skemën e shtesave mujore për fëmijë dhe lehonat, duke synuar rritjen e natalitetit.", field: "Arsimi", ministry: "Ministria e Financave, Punës dhe Transfereve", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 80, costRangeM: [40, 150], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.8, sectorId: "sec_social", riskText: "Presion i fortë në buxhetin vjetor." },
    /* SHËNDETËSIA */
    { id: "cat_health_insurance", title: "Ligji për Sigurimin e Detyrueshëm Shëndetësor", desc: "Themelon skemën e sigurimit shëndetësor me kontribute nga punëdhënësi dhe punëmarrësi.", field: "Shëndetësia", ministry: "Ministria e Shëndetësisë", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-249 për Sigurimin Shëndetësor", defaultCostM: 55, costRangeM: [20, 120], impactType: "APPROVAL_MIXED", impactMagnitude: 3.0, sectorId: "sec_health", riskText: "Kundërshtim nga punëdhënësit për barrën e re fiskale." },
    { id: "cat_essential_medicines", title: "Ligji për Listën e Barnave Esenciale dhe Financimin e tyre", desc: "Përcakton listën e barnave esenciale që financohen plotësisht nga Buxheti i Shtetit.", field: "Shëndetësia", ministry: "Ministria e Shëndetësisë", lawType: "ORDINARY", source: "Temë e simuluar, e bazuar në nevojat reale të QKUK-së", defaultCostM: 40, costRangeM: [15, 80], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.2, sectorId: "sec_health", riskText: "Vonesa në prokurim dhe rrezik i korrupsionit." },
    { id: "cat_health_digital", title: "Ligji për Sistemin Informativ Shëndetësor dhe Telemedicinën", desc: "Themelon regjistrin elektronik të pacientëve dhe shërbimet e telemedicinës në qendrat shëndetësore.", field: "Shëndetësia", ministry: "Ministria e Shëndetësisë", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 25, costRangeM: [10, 50], impactType: "APPROVAL_POSITIVE", impactMagnitude: 2.5, sectorId: "sec_health", riskText: "Siguria e të dhënave personale." },
    /* INFRASTRUKTURA */
    { id: "cat_highways", title: "Ligji për Rrugët Magjistrale dhe Shpronësimet për Interes Publik", desc: "Përshpejton procedurat e shpronësimit për projektet e infrastrukturës strategjike.", field: "Infrastruktura", ministry: "Ministria e Mjedisit, Planifikimit Hapësinor dhe Infrastrukturës", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 03/L-139 për Shpronësimin e Pronës së Paluajtshme", defaultCostM: 60, costRangeM: [20, 150], impactType: "APPROVAL_MIXED", impactMagnitude: 2.0, sectorId: "sec_roads", riskText: "Kundërshtim nga pronarët dhe shoqëria civile." },
    { id: "cat_railway", title: "Ligji për Hekurudhat e Kosovës dhe Modernizimin e Linjës 10", desc: "Rregullon statusin e Hekurudhave të Kosovës dhe financimin e linjës Hani i Elezit–Leshak.", field: "Infrastruktura", ministry: "Ministria e Mjedisit, Planifikimit Hapësinor dhe Infrastrukturës", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-063 për Hekurudhat e Kosovës", defaultCostM: 45, costRangeM: [20, 120], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.0, sectorId: "sec_rail", riskText: "Kosto e lartë dhe varësi nga financimi i BE-së." },
    /* EKONOMIA */
    { id: "cat_investment_law", title: "Ligji për Investimet Strategjike dhe Zonat Ekonomike", desc: "Ofron stimuj fiskalë për investitorët strategjikë dhe themelon zona të veçanta ekonomike.", field: "Ekonomia", ministry: "Ministria e Industrisë, Ndërmarrësisë dhe Tregtisë", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-220 për Investimet Strategjike", defaultCostM: 25, costRangeM: [10, 60], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.0, sectorId: "sec_econ", riskText: "Rrezik për abuzime me stimujt fiskalë." },
    { id: "cat_sme_support", title: "Ligji për Mbështetjen e Ndërmarrjeve të Vogla dhe të Mesme", desc: "Themelon garanci shtetërore për kreditë e NVM-ve dhe fonde zhvillimore.", field: "Ekonomia", ministry: "Ministria e Industrisë, Ndërmarrësisë dhe Tregtisë", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 30, costRangeM: [10, 70], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.5, sectorId: "sec_econ", riskText: "Rrezik i mosperformancës së kredive të garantuara." },
    /* DREJTËSIA */
    { id: "cat_vetting_law", title: "Ligji për Verifikimin e Figurës së Zyrtarëve Publikë (Vetingu)", desc: "Themelon procesin e verifikimit të pasurisë dhe integritetit të zyrtarëve të lartë.", field: "Drejtësia", ministry: "Ministria e Drejtësisë", lawType: "ORDINARY", source: "Temë e simuluar, e bazuar në rekomandimet e Komisionit të Venecias", defaultCostM: 8, costRangeM: [3, 25], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.5, sectorId: "sec_justice", riskText: "Kundërshtim nga gjyqtarët dhe prokurorët aktualë." },
    { id: "cat_anti_corruption", title: "Ligji për Agjencinë e Pavarur Kundër Korrupsionit", desc: "Forcon pavarësinë dhe kompetencat e Agjencisë Kundër Korrupsionit.", field: "Drejtësia", ministry: "Ministria e Drejtësisë", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 03/L-159 për Agjencinë Kundër Korrupsionit", defaultCostM: 6, costRangeM: [2, 15], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.0, sectorId: "sec_justice", riskText: "Rrezik i politizimit të agjencisë." },
    { id: "cat_confiscation", title: "Ligji për Konfiskimin Civil të Pasurisë së Pajustifikueshme", desc: "Themelon mekanizmin për konfiskimin civil të pasurisë së zyrtarëve pa dënim penal.", field: "Drejtësia", ministry: "Ministria e Drejtësisë", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 08/L-032 për Konfiskimin e Pasurisë", defaultCostM: 4, costRangeM: [2, 10], impactType: "APPROVAL_POSITIVE", impactMagnitude: 5.0, sectorId: "sec_justice", riskText: "Kundërshtim nga avokatët e mbrojtjes." },
    /* MJEDISI */
    { id: "cat_environment", title: "Ligji për Mbrojtjen e Mjedisit dhe Menaxhimin e Mbeturinave", desc: "Rregullon standardet mjedisore dhe krijon sistemin e integruar të menaxhimit të mbeturinave.", field: "Mjedisi", ministry: "Ministria e Mjedisit, Planifikimit Hapësinor dhe Infrastrukturës", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 03/L-025 për Mbrojtjen e Mjedisit", defaultCostM: 35, costRangeM: [15, 80], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.5, sectorId: "sec_env", riskText: "Kundërshtim nga bizneset ndotëse." },
    { id: "cat_renewable_energy", title: "Ligji për Energjinë e Ripërtëritshme dhe Ankandet Solare", desc: "Krijon kornizën për ankande të energjisë diellore dhe erës, me tarifa të garantuara.", field: "Mjedisi", ministry: "Ministria e Ekonomisë dhe Energjisë", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 05/L-081 për Energjinë", defaultCostM: 20, costRangeM: [8, 50], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.0, sectorId: "sec_energy", riskText: "Vonesa në lëshimin e lejeve mjedisore." },
    /* BUJQËSIA */
    { id: "cat_agriculture", title: "Ligji për Subvencionet Bujqësore dhe Zhvillimin Rural", desc: "Rregullon skemën e subvencioneve direkte për fermerët dhe mbështetjen për zhvillimin rural.", field: "Bujqësia", ministry: "Ministria e Bujqësisë, Pylltarisë dhe Zhvillimit Rural", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-090 për Bujqësinë dhe Zhvillimin Rural", defaultCostM: 55, costRangeM: [20, 120], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.5, sectorId: "sec_agri", riskText: "Kosto e vazhdueshme vjetore." },
    /* ENERGJIA */
    { id: "cat_energy_strategy", title: "Ligji për Strategjinë Kombëtare të Energjisë 2026–2035", desc: "Përcakton objektivat e sigurisë energjetike, tranzicionit dhe efikasitetit për dekadën e ardhshme.", field: "Energjia", ministry: "Ministria e Ekonomisë dhe Energjisë", lawType: "ORDINARY", source: "Temë e simuluar, e bazuar në Strategjinë reale të Energjisë të Kosovës", defaultCostM: 40, costRangeM: [15, 100], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.0, sectorId: "sec_energy", riskText: "Debat i fortë për të ardhmen e termocentraleve." },
    /* KOMUNAT */
    { id: "cat_local_gov", title: "Ligji për Vetëqeverisjen Lokale dhe Kompetencat Komunale", desc: "Rregullon kompetencat, financimin dhe marrëdhëniet e komunave me Qeverinë qendrore.", field: "Komunat", ministry: "Ministria e Administrimit të Pushtetit Lokal", lawType: "VITAL", source: "Historik real — Ligji Nr. 03/L-040 për Vetëqeverisjen Lokale (ligj me interes vital)", defaultCostM: 20, costRangeM: [5, 60], impactType: "APPROVAL_MIXED", impactMagnitude: 2.5, sectorId: "sec_local", riskText: "Kërkon shumicë të dyfishtë (61+ dhe 14/20 komunitete)." },
    { id: "cat_capital_grants", title: "Ligji për Grantet Kapitale për Komunat dhe Performancën Komunale", desc: "Themelon fondin e granteve kapitale për komunat, të lidhura me performancën dhe transparencën.", field: "Komunat", ministry: "Ministria e Administrimit të Pushtetit Lokal", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 40, costRangeM: [15, 90], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.2, sectorId: "sec_local", riskText: "Kapacitetet e dobëta të komunave të vogla." },
    /* KOMUNITETET */
    { id: "cat_communities", title: "Ligji për Të Drejtat e Komuniteteve dhe Përdorimin e Gjuhëve", desc: "Rregullon të drejtat gjuhësore, arsimore dhe kulturore të komuniteteve joshumicë.", field: "Komunitetet", ministry: "Ministria për Komunitete dhe Kthim", lawType: "VITAL", source: "Historik real — Ligji Nr. 02/L-37 për Përdorimin e Gjuhëve (ligj me interes vital)", defaultCostM: 15, costRangeM: [5, 40], impactType: "APPROVAL_MIXED", impactMagnitude: 2.0, sectorId: "sec_local", riskText: "Kërkon shumicë të dyfishtë (61+ dhe 14/20 komunitete)." },
    { id: "cat_cultural_heritage", title: "Ligji për Trashëgiminë Kulturore dhe Zonat e Mbrojtura", desc: "Rregullon mbrojtjen e trashëgimisë kulturore dhe zonave me interes të veçantë.", field: "Komunitetet", ministry: "Ministria e Kulturës, Rinisë dhe Sportit", lawType: "VITAL", source: "Historik real — Ligji Nr. 02/L-88 për Trashëgiminë Kulturore", defaultCostM: 10, costRangeM: [3, 25], impactType: "APPROVAL_POSITIVE", impactMagnitude: 2.8, sectorId: "sec_local", riskText: "Kërkon shumicë të dyfishtë (61+ dhe 14/20 komunitete)." },
    /* MBROJTJA */
    { id: "cat_defense_fund", title: "Ligji për Fondin e Mbrojtjes dhe Modernizimin e FSK-së", desc: "Krijon fondin e dedikuar për prokurimin e pajisjeve ushtarake dhe trajnimin e FSK-së.", field: "Mbrojtja", ministry: "Ministria e Mbrojtjes", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 120, costRangeM: [50, 250], impactType: "APPROVAL_POSITIVE", impactMagnitude: 5.0, sectorId: "sec_fsk", riskText: "Kosto e lartë dhe varësi nga partnerët ndërkombëtarë." },
    { id: "cat_police_reform", title: "Ligji për Reformën e Policisë dhe Shtesat e Rrezikshmërisë", desc: "Rrit shtesat për policët dhe modernizon strukturën e Policisë së Kosovës.", field: "Mbrojtja", ministry: "Ministria e Punëve të Brendshme", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 04/L-076 për Policinë", defaultCostM: 30, costRangeM: [10, 70], impactType: "APPROVAL_POSITIVE", impactMagnitude: 3.5, sectorId: "sec_police", riskText: "Kosto e vazhdueshme vjetore." },
    { id: "cat_cyber_security", title: "Ligji për Sigurinë Kibernetike dhe Mbrojtjen e Infrastrukturës Kritike", desc: "Themelon Agjencinë e Sigurisë Kibernetike dhe detyrimet për operatorët kritikë.", field: "Mbrojtja", ministry: "Ministria e Punëve të Brendshme", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 18, costRangeM: [6, 40], impactType: "APPROVAL_POSITIVE", impactMagnitude: 2.5, sectorId: "sec_police", riskText: "Nevojë për staf të specializuar." },
    /* KULTURA */
    { id: "cat_sports_law", title: "Ligji për Sportin dhe Lojërat Mesdhetare Prishtina 2030", desc: "Themelon kuadrin ligjor për organizimin e Lojërave Mesdhetare 2030 dhe financimin e infrastrukturës sportive.", field: "Kultura", ministry: "Ministria e Kulturës, Rinisë dhe Sportit", lawType: "ORDINARY", source: "Temë e simuluar, e bazuar në organizimin real të Lojërave Mesdhetare 2030", defaultCostM: 90, costRangeM: [40, 180], impactType: "APPROVAL_POSITIVE", impactMagnitude: 4.5, sectorId: "sec_edu", riskText: "Vonesa në ndërtimin e stadiumeve." },
    { id: "cat_culture_fund", title: "Ligji për Fondin Kombëtar të Kulturës dhe Krijimtarisë", desc: "Krijon një fond të dedikuar për mbështetjen e artistëve dhe projekteve kulturore.", field: "Kultura", ministry: "Ministria e Kulturës, Rinisë dhe Sportit", lawType: "ORDINARY", source: "Temë e simuluar për simulatorin", defaultCostM: 12, costRangeM: [5, 30], impactType: "APPROVAL_POSITIVE", impactMagnitude: 2.0, sectorId: "sec_edu", riskText: "Kosto e vogël fiskale por e dukshme." },
    /* TATIMET */
    { id: "cat_corporate_tax", title: "Ligji për Ndryshimin e Tatimit mbi Korporatat", desc: "Rregullon normën e tatimit mbi fitimin e korporatave për balancim buxhetor ose stimulim ekonomik.", field: "Buxheti", ministry: "Ministria e Financave, Punës dhe Transfereve", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 03/L-162 për Tatimin mbi të Ardhurat e Korporatave", defaultCostM: -20, costRangeM: [-80, 60], impactType: "APPROVAL_MIXED", impactMagnitude: 1.0, sectorId: "sec_econ", riskText: "Debat i fortë politik dhe biznesi." },
    { id: "cat_property_tax", title: "Ligji për Tatimin në Pronë dhe Regjistrin e Pasurive të Paluajtshme", desc: "Modernizon regjistrin e pronës dhe bazën e tatimit në pronë për rritjen e të hyrave komunale.", field: "Buxheti", ministry: "Ministria e Financave, Punës dhe Transfereve", lawType: "ORDINARY", source: "Historik real — Ligji Nr. 03/L-164 për Tatimin në Pronë", defaultCostM: 8, costRangeM: [3, 20], impactType: "APPROVAL_MIXED", impactMagnitude: 1.5, sectorId: "sec_local", riskText: "Rezistencë nga pronarët e mëdhenj." }
];

/* ============================================================================
   4. KATALOGU I PROJEKTEVE KOMUNALE (Pika 7)
   ============================================================================ */
const MUNICIPAL_PROJECT_CATALOG = [
    { type: "ROAD_RURAL", name: "Rrugë Rurale dhe Asfaltim", sectorId: "sec_roads", icon: "🛣️", costRangeM: [2, 15], weeksRange: [6, 16], benefits: { infra: 6, connectivity: 4 }, needs: ["Rrugët", "Infrastrukturë fshatrash", "Rrugët rurale", "Rrugët"], simulated: true },
    { type: "SCHOOL_RENOVATION", name: "Rinovim Shkolle dhe Çerdheje", sectorId: "sec_edu", icon: "🏫", costRangeM: [2, 12], weeksRange: [6, 14], benefits: { services: 3, education: 7 }, needs: ["Shkollat e reja", "Arsimi", "Shkolla", "Arsimi"], simulated: true },
    { type: "HEALTH_CENTER", name: "Rinovim Qendre Shëndetësore", sectorId: "sec_health", icon: "🏥", costRangeM: [3, 18], weeksRange: [8, 18], benefits: { services: 5, health: 6 }, needs: ["Shëndetësia", "Qendra shëndetësore", "Shëndetësia"], simulated: true },
    { type: "WATER_SUPPLY", name: "Zgjerim Ujësjellësi dhe Kanalizimi", sectorId: "sec_water", icon: "💧", costRangeM: [3, 20], weeksRange: [8, 20], benefits: { infra: 4, services: 4, water: 7 }, needs: ["Ujësjellësi", "Uji i pijshëm", "Ujësjellësi", "Uji"], simulated: true },
    { type: "URBAN_TRAFFIC", name: "Zgjidhje e Trafikut Urban dhe Nënkalime", sectorId: "sec_roads", icon: "🚦", costRangeM: [5, 25], weeksRange: [10, 20], benefits: { infra: 6, connectivity: 5 }, needs: ["Trafiku urban", "Nënkalimet", "Nënkalimet urbane", "Mbingarkesa urbane"], simulated: true },
    { type: "PUBLIC_TRANSPORT", name: "Linjë e Re e Transportit Publik", sectorId: "sec_rail", icon: "🚌", costRangeM: [4, 18], weeksRange: [8, 18], benefits: { services: 4, connectivity: 6 }, needs: ["Transporti", "Lidhja me autostradën", "Autostrada", "Infrastruktura rurale"], simulated: true },
    { type: "ECONOMIC_PARK", name: "Park Biznesi dhe Zonë Ekonomike", sectorId: "sec_econ", icon: "🏭", costRangeM: [8, 35], weeksRange: [12, 24], benefits: { employment: 7, development: 6 }, needs: ["Zona industriale", "Parku i Biznesit", "Zona Agro-Industriale", "Zhvillimi ekonomik"], simulated: true },
    { type: "GREEN_SPACE", name: "Hapësira të Gjelbra dhe Parqe Publike", sectorId: "sec_env", icon: "🌳", costRangeM: [1, 8], weeksRange: [4, 10], benefits: { services: 3, development: 2 }, needs: ["Mjedisi", "Ndotja e ajrit", "Mjedisi", "Mjedisi"], simulated: true },
    { type: "DIGITAL_SERVICES", name: "Digjitalizim i Shërbimeve Komunale", sectorId: "sec_tech", icon: "💻", costRangeM: [1, 6], weeksRange: [4, 10], benefits: { services: 6, development: 3 }, needs: ["Shërbimet", "Shërbimet komunale", "Shërbimet publike", "Shërbimet"], simulated: true },
    { type: "AGRICULTURE_SUPPORT", name: "Mbështetje për Bujqësinë dhe Ujitje", sectorId: "sec_agri", icon: "🌾", costRangeM: [2, 12], weeksRange: [6, 14], benefits: { employment: 4, development: 3 }, needs: ["Bujqësia", "Bujqësia", "Vreshtaria", "Bujqësia lokale"], simulated: true },
    { type: "CULTURAL_HERITAGE", name: "Restaurim i Trashëgimisë Kulturore", sectorId: "sec_edu", icon: "🏛️", costRangeM: [2, 10], weeksRange: [6, 14], benefits: { services: 2, development: 4 }, needs: ["Turizmi", "Kullat tradicionale", "Qendra historike", "Trashëgimia"], simulated: true },
    { type: "TOURISM_INFRA", name: "Infrastrukturë Turistike", sectorId: "sec_env", icon: "🏔️", costRangeM: [3, 15], weeksRange: [8, 16], benefits: { employment: 4, development: 5, services: 2 }, needs: ["Turizmi", "Turizmi malor", "Banjat termale", "Eko-turizmi", "Turizmi rural", "Brezovica"], simulated: true }
];

/* ============================================================================
   5. KATALOGU I DOSJEVE JAVORE (Pika 8)
   ============================================================================ */
const WEEKLY_DOSSIER_TEMPLATES = [
    {
        id: "dos_ministry_report",
        category: "RAPORT MINISTROR",
        senderRole: "MINISTER",
        urgency: "MESATARE",
        titleTemplate: "Raport javor i {ministry}: {issue}",
        descTemplate: "Ministri i {ministry} raporton për gjendjen në sektorin përkatës dhe kërkon udhëzime për prioritetet e javës së ardhshme.",
        consequenceTemplate: "Mosveprimi shkakton vonesa në zbatimin e reformave (-1.5% mbështetje).",
        options: [
            { label: "Aprovo prioritetet e ministrit dhe lësho udhëzime", costB: 0.005, appDelta: 1.0, outcome: "Ministri mori udhëzime të qarta." },
            { label: "Kërko raport të detajuar me afate konkrete", costB: 0, appDelta: 0.5, outcome: "Ministri do të paraqesë raport të detajuar." }
        ]
    },
    {
        id: "dos_mayor_request",
        category: "KËRKESË KOMUNALE",
        senderRole: "MAYOR",
        urgency: "MESATARE",
        titleTemplate: "Kërkesë nga Komuna e {municipality}: {issue}",
        descTemplate: "Kryetari i Komunës së {municipality} kërkon takim me Kryeministrin për të diskutuar prioritetet e zhvillimit lokal dhe bashkëfinancimin e projekteve.",
        consequenceTemplate: "Refuzimi shkakton kritika publike nga komuna dhe ulje e raportit (-3 pikë).",
        options: [
            { label: "Prano takimin dhe mirato bashkëfinancim €10M", costB: 0.010, appDelta: 1.8, outcome: "Komuna mori mbështetje financiare." },
            { label: "Delego çështjen te MAPL për vlerësim teknik", costB: 0, appDelta: 0.3, outcome: "MAPL do të shqyrtojë kërkesën." }
        ]
    },
    {
        id: "dos_parliamentary",
        category: "KËRKESË PARLAMENTARE",
        senderRole: "SPEAKER",
        urgency: "MESATARE",
        titleTemplate: "Kërkesë për raportim në Kuvend: {topic}",
        descTemplate: "Kryetari i Kuvendit kërkon që Qeveria të raportojë për çështjen: {topic}.",
        consequenceTemplate: "Refuzimi shkakton kritika nga opozita dhe rritje e tensioneve parlamentare (-2% mbështetje).",
        options: [
            { label: "Prano raportimin në seancë plenare", costB: 0, appDelta: 1.2, outcome: "Qeveria do të raportojë në Kuvend." },
            { label: "Kërko shtyrje për 2 javë", costB: 0, appDelta: -0.5, outcome: "Kuvendi pranoi shtyrjen, por kritikat u rritën." }
        ]
    },
    {
        id: "dos_international",
        category: "KËRKESË NDËRKOMBËTARE",
        senderRole: "AMBASSADOR",
        urgency: "E LARTË",
        titleTemplate: "Kërkesë nga {country}: {topic}",
        descTemplate: "Përfaqësuesi i {country} kërkon takim urgjent për çështjen: {topic}.",
        consequenceTemplate: "Mosveprimi ul marrëdhëniet diplomatike me {country} (-5 pikë).",
        options: [
            { label: "Prano takimin dhe koordino qëndrimin", costB: 0, appDelta: 1.5, dipBonus: 4, outcome: "Takimi u zhvillua në atmosferë konstruktive." },
            { label: "Delego MPJD për konsultime teknike", costB: 0, appDelta: 0.8, dipBonus: 2, outcome: "MPJD zhvilloi konsultime teknike." }
        ]
    },
    {
        id: "dos_advisors",
        category: "KËSHILLË KABINETI",
        senderRole: "ADVISOR",
        urgency: "E ULËT",
        titleTemplate: "Rekomandim i kabinetit: {topic}",
        descTemplate: "Këshilltarët e Kryeministrit rekomandojnë veprim në lidhje me: {topic}.",
        consequenceTemplate: "Mosveprimi nuk ka pasoja të menjëhershme, por mund të humbasë mundësi.",
        options: [
            { label: "Prano rekomandimin dhe zbatoje", costB: 0.003, appDelta: 1.0, outcome: "Rekomandimi u zbatua." },
            { label: "Arkivo për shqyrtim të mëvonshëm", costB: 0, appDelta: 0, outcome: "Rekomandimi u arkivua." }
        ]
    }
];

/* VAZHDON në pjesën 2/6 */
/* ============================================================================
   6. INICIALIZIMI I GJENDJES FILLESTARE
   ============================================================================ */

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

function getInitialMunicipalityProfiles(munisArr) {
    var profiles = {};
    var baseMap = {
        m_prishtina: { infra: 7, serv: 7, emp: 7, dev: 8, educ: 7, health: 7, water: 6, connect: 8 },
        m_podujeva: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 5 },
        m_lipjani: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 5 },
        m_fushkosova: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 6 },
        m_obiliqi: { infra: 4, serv: 4, emp: 3, dev: 3, educ: 4, health: 3, water: 4, connect: 5 },
        m_drenasi: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 5 },
        m_gracanica: { infra: 4, serv: 4, emp: 3, dev: 3, educ: 4, health: 3, water: 4, connect: 4 },
        m_novoberda: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 3, health: 2, water: 3, connect: 2 },
        m_prizreni: { infra: 6, serv: 6, emp: 6, dev: 7, educ: 6, health: 6, water: 6, connect: 7 },
        m_suhareka: { infra: 5, serv: 5, emp: 5, dev: 6, educ: 5, health: 4, water: 5, connect: 5 },
        m_malisheva: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 4, health: 4, water: 5, connect: 5 },
        m_dragashi: { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 3, water: 4, connect: 3 },
        m_mamusha: { infra: 3, serv: 3, emp: 3, dev: 3, educ: 3, health: 2, water: 3, connect: 3 },
        m_peja: { infra: 6, serv: 6, emp: 6, dev: 7, educ: 6, health: 6, water: 6, connect: 6 },
        m_istogu: { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 3, water: 4, connect: 4 },
        m_klina: { infra: 4, serv: 4, emp: 3, dev: 4, educ: 4, health: 3, water: 4, connect: 4 },
        m_gjakova: { infra: 6, serv: 6, emp: 5, dev: 6, educ: 6, health: 5, water: 5, connect: 6 },
        m_rahoveci: { infra: 5, serv: 5, emp: 5, dev: 6, educ: 5, health: 4, water: 5, connect: 5 },
        m_decani: { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 3, water: 4, connect: 4 },
        m_juniku: { infra: 3, serv: 3, emp: 2, dev: 3, educ: 3, health: 2, water: 3, connect: 3 },
        m_mitrovica_j: { infra: 5, serv: 5, emp: 5, dev: 5, educ: 5, health: 5, water: 5, connect: 5 },
        m_vushtrria: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 5 },
        m_skenderaj: { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 3, water: 4, connect: 4 },
        m_mitrovica_v: { infra: 3, serv: 3, emp: 3, dev: 3, educ: 3, health: 3, water: 3, connect: 3 },
        m_zvecani: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 2, health: 2, water: 3, connect: 2 },
        m_leposaviqi: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 2, health: 2, water: 3, connect: 2 },
        m_zubinpotoku: { infra: 3, serv: 3, emp: 2, dev: 2, educ: 3, health: 2, water: 3, connect: 2 },
        m_gjilani: { infra: 6, serv: 6, emp: 5, dev: 6, educ: 6, health: 5, water: 5, connect: 6 },
        m_vitia: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 5 },
        m_kamenica: { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 3, water: 4, connect: 4 },
        m_ranillugu: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 2, health: 2, water: 3, connect: 2 },
        m_parteshi: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 2, health: 2, water: 2, connect: 2 },
        m_kllokoti: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 2, health: 2, water: 3, connect: 2 },
        m_ferizaj: { infra: 6, serv: 6, emp: 6, dev: 7, educ: 6, health: 6, water: 5, connect: 6 },
        m_kacaniku: { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 3, water: 4, connect: 4 },
        m_shtimja: { infra: 5, serv: 5, emp: 4, dev: 5, educ: 5, health: 4, water: 5, connect: 5 },
        m_hanielezit: { infra: 3, serv: 3, emp: 3, dev: 3, educ: 3, health: 2, water: 3, connect: 3 },
        m_shterpce: { infra: 2, serv: 2, emp: 2, dev: 2, educ: 2, health: 2, water: 3, connect: 2 }
    };
    var needsMap = {
        m_prishtina: ["Trafiku urban", "Termokos", "Unaza e qytetit"],
        m_podujeva: ["Zona industriale", "Rruga magjistrale", "Kanalizimi"],
        m_lipjani: ["Infrastrukturë fshatrash", "Ujësjellësi", "Bujqësi"],
        m_fushkosova: ["Shkolla të reja", "Ujësjellësi", "Mbingarkesa urbane"],
        m_obiliqi: ["Ndotja e ajrit", "Kompenzimi i banorëve", "Shëndetësia"],
        m_drenasi: ["Parku i biznesit", "Ujësjellësi", "Rrugët rurale"],
        m_gracanica: ["Integrimi i shërbimeve", "Shkolla", "Qendra shëndetësore"],
        m_novoberda: ["Turizmi", "Rrugët", "Uji i pijshëm"],
        m_prizreni: ["Qendra historike", "Parkimi", "Autostrada"],
        m_suhareka: ["Vreshtaria", "Zona agro-industriale", "Arsimi"],
        m_malisheva: ["Nënkalimet", "Kanalizimi", "Rrugët"],
        m_dragashi: ["Turizmi malor", "Blegtoria", "Infrastruktura"],
        m_mamusha: ["Sera bujqësore", "Uji i pijshëm", "Rrugët"],
        m_peja: ["Turizmi në Rugovë", "Bora", "Autostrada Pejë–Prishtinë"],
        m_istogu: ["Bujqësia", "Ujësjellësi", "Shëndetësia"],
        m_klina: ["Uji i pijshëm", "Hekurudha", "Arsimi"],
        m_gjakova: ["Çarshia e Madhe", "Aeroporti", "Stadiumi"],
        m_rahoveci: ["Vreshtaria", "Ujitja", "Turizmi"],
        m_decani: ["Turizmi malor", "Rrugët", "Mjedisi"],
        m_juniku: ["Eko-turizmi", "Rrugët", "Kullat tradicionale"],
        m_mitrovica_j: ["Trepça", "Liqeni", "Zhvillimi ekonomik"],
        m_vushtrria: ["Patatja", "Zona industriale", "Rrugët"],
        m_skenderaj: ["Memoriali", "Ujësjellësi", "Arsimi"],
        m_mitrovica_v: ["Ura e Ibrit", "Siguria publike", "Shërbimet"],
        m_zvecani: ["Trepça", "Rendi dhe ligji", "Infrastruktura"],
        m_leposaviqi: ["Kufiri", "Infrastruktura", "Shëndetësia"],
        m_zubinpotoku: ["Liqeni i Ujmanit", "Kanali Ibër-Lepenc", "Siguria"],
        m_gjilani: ["Autostrada", "Stadiumi", "Zhvillimi ekonomik"],
        m_vitia: ["Autostrada", "Bujqësia", "Arsimi"],
        m_kamenica: ["Arsimi", "Kufiri", "Rrugët"],
        m_ranillugu: ["Bujqësia", "Shërbimet", "Rrugët"],
        m_parteshi: ["Rrugët", "Ujësjellësi", "Shërbimet"],
        m_kllokoti: ["Banjat termale", "Turizmi", "Rrugët"],
        m_ferizaj: ["Nënkalimet", "Spitali", "Bizneset"],
        m_kacaniku: ["Uji i mbeturinave", "Lumi Nerodime", "Rrugët"],
        m_shtimja: ["Unaza", "Qendra e inovacionit", "Arsimi"],
        m_hanielezit: ["Dogana", "Mjedisi", "Rrugët"],
        m_shterpce: ["Brezovica", "Mjedisi", "Turizmi"]
    };

    munisArr.forEach(function(m) {
        var b = baseMap[m.id] || { infra: 4, serv: 4, emp: 4, dev: 4, educ: 4, health: 4, water: 4, connect: 4 };
        profiles[m.id] = {
            infrastructure: b.infra,
            services: b.serv,
            employment: b.emp,
            development: b.dev,
            education: b.educ,
            health: b.health,
            water: b.water,
            connectivity: b.connect,
            lastUpdatedWeek: 0,
            needs: needsMap[m.id] || ["Infrastruktura", "Shërbimet publike"],
            recentReport: ""
        };
    });
    return profiles;
}

function getInitialPMInbox() {
    return [
        {
            id: "req_init_1",
            status: "PENDING",
            outcomeMsg: "",
            senderName: "Liburn Aliu",
            senderRole: "Ministër i Infrastrukturës (MMPHI)",
            category: "TAKIM & VENDIM OPERACIONAL",
            urgency: "E LARTË",
            deadlineWeeks: 3,
            title: "Vonesa në shpronësimet e rrugës Prishtinë–Podujevë dhe Prishtinë–Mitrovicë",
            desc: "Ministri kërkon takim urgjent me Kryeministrin. Dy kontraktorë kanë ngadalësuar punimet për shkak të kontesteve pronësore dhe rritjes së çmimit të materialeve.",
            consequenceText: "Nëse nuk veprohet brenda afatit: -2.5% Mbështetje publike dhe vonesa në infrastrukturë.",
            options: [
                { label: "Mirato €18M shtesë për shpronësime të menjëhershme", costB: 0.018, appDelta: 2.2, secId: "sec_roads", outcome: "U miratuan mjetet për shpronësim; punimet në terren u dyfishuan." },
                { label: "Shkëput kontratat me kompanitë e papërgjegjshme dhe hap tender të ri", costB: 0, appDelta: 1.5, secId: "sec_roads", outcome: "Kontraktorët që vonuan punimet u penalizuan; procesi po rishikohet." },
                { label: "Delego çështjen te Zëvendëskryeministri dhe Ministria e Financave", costB: 0.005, appDelta: 0.6, secId: "sec_roads", outcome: "Grupi ndërministror mori përsipër zgjidhjen teknike me pronarët." }
            ]
        },
        {
            id: "req_init_2",
            status: "PENDING",
            outcomeMsg: "",
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
            status: "PENDING",
            outcomeMsg: "",
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

/* ============================================================================
   7. KRIJIMI I GJENDJES FILLESTARE
   ============================================================================ */
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

    let maxSeats = 0;
    let winnerId = "LVV";
    Object.keys(partiesClone).forEach(function(k) {
        if (partiesClone[k].seats > maxSeats) {
            maxSeats = partiesClone[k].seats;
            winnerId = k;
        }
    });

    let s = {
        version: "5.0.2026_FazaRe",
        mode: mode,
        year: 2026,
        monthIndex: isPostElectionAlt ? 6 : 9,
        week: 1,
        turnCount: 1,
        mandateNumber: 1,
        weeksToNextRegularElection: 200,

        playerParty: chosenParty,
        winningParty: winnerId,
        mandatar: winnerId,

        playerRole: "",
        assemblyConstituted: !isPostElectionAlt,
        speakerOfAssembly: isPostElectionAlt ? "Në pritje të konstituimit" : "Albulena Haxhiu (LVV)",
        speakerElected: !isPostElectionAlt,
        governmentFormed: !isPostElectionAlt,
        primeMinister: isPostElectionAlt ? "Në pritje të mandatarit" : "Albin Kurti (LVV)",

        institutionalPhase: isPostElectionAlt
            ? INSTITUTIONAL_PHASES.ASSEMBLY_ELECTED
            : INSTITUTIONAL_PHASES.GOV_IN_OFFICE,
        governmentStatus: isPostElectionAlt ? "PENDING" : "IN_OFFICE",
        speakerElectionWeek: isPostElectionAlt ? null : 1,
        governmentApprovalWeek: isPostElectionAlt ? null : 1,

        coalitionParties: isPostElectionAlt ? [winnerId] : ["LVV", "MIN_MULTI"],
        coalitionAgreements: isPostElectionAlt ? [] : [
            { partner: "MIN_MULTI", ministriesCount: 3, deputyPM: true, conditions: "3 Ministri dhe investime në komunitete", honored: true }
        ],

        presidentElected: !isPostElectionAlt,
        presidentName: isPostElectionAlt ? "Ushtruese e Detyrës (Afati 60-ditor aktiv)" : "Prof. Dr. Justina Shiroka-Pula",
        presidentialDeadlineWeeks: isPostElectionAlt ? 8 : 260,
        presidentialRound: 1,
        presidentialCandidateId: "cand_pula",
        presidentialSignatures: isPostElectionAlt ? 53 : 81,
        quorumPledgedParties: isPostElectionAlt ? [winnerId, "MIN_MULTI"] : ["LVV", "PDK", "MIN_MULTI"],
        customPresCandidates: {},
        presidentMandateStartYear: isPostElectionAlt ? null : 2026,
        presidentMandateEndYear: isPostElectionAlt ? null : 2031,

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

        fiscalReserve: 0.32,
        debtInterestRate: 2.8,
        plannedRevenues: 3.10,
        plannedExpenses: 3.32,
        realizedRevenues: 3.05,
        realizedExpenses: 3.32,
        lastWeekRevenues: 0,
        lastWeekExpenses: 0,
        fiscalHistory: [],
        weeklyReports: [],
        taxPolicy: {
            vat: 18,
            incomeTax: 10,
            corporateTax: 15,
            customs: 10
        },
        pendingInterestPayment: 0,

        diplomacy: {
            USA: { name: "Shtetet e Bashkuara të Amerikës (SHBA)", city: "Uashington D.C.", official: "Sekretari i Shtetit & Ndihmës Sekretari për Evropën", score: 78, status: "Partneritet Strategjik", note: "Kërkon koordinim për veprimet në veri dhe zbatim të marrëveshjeve." },
            EU: { name: "Bashkimi Evropian (BE)", city: "Bruksel", official: "Presidentja e Komisionit Evropian & Përfaqësuesi i Lartë", score: 74, status: "Kandidat Potencial / Plani i Rritjes", note: "Kushtëzon fondet e Planit të Rritjes me progresin në dialog." },
            GERMANY: { name: "Gjermania & Franca (Boshti Franko-Gjerman)", city: "Berlin & Paris", official: "Kancelari Federal i Gjermanisë & Këshilltarët Diplomatikë", score: 76, status: "Mbështetje për Procesin e Berlinit", note: "Mbështet tregun e përbashkët regional dhe integrimin evropian." },
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

        dialogueInvitation: {
            active: false,
            inviter: "Bashkimi Evropian (BE) & Shtetet e Bashkuara të Amerikës",
            inviterKey: "EU",
            reason: "Rifillimi i dialogut për normalizimin e marrëdhënieve dhe zbatimin e Marrëveshjes së Ohrit.",
            agenda: "Zbatimi i Marrëveshjes së Ohrit, Siguria në Veri, Plani i Rritjes i BE-së, Të Drejtat e Komuniteteve",
            deadlineWeeks: 3,
            responseStatus: "PENDING",
            respondedAt: null
        },
        dialogueConsultations: {},
        dialogueProposal: null,
        dialogueCounterOffer: null,
        dialogueAgreements: [],
        dialogueRoundHistory: [],

        scheduledMeetings: [],
        pmInboxRequests: getInitialPMInbox(),
        stateSectors: getInitialStateSectors(),
        customInterlocutors: [],
        activePressSession: null,

        parliamentSessions: [],
        motions: [],
        sessionCounter: 0,
        motionCounter: 0,
        billCounter: 0,

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
        lastPressTurn: 0,

        municipalityProfiles: {},
        developmentProjects: [],
        developmentProjectCounter: 0,
        sectorInitialScores: {},
        sectorHistory: {},
        municipalityWeeklyReport: null,
        sectorWeeklyReport: null,
        lastDevelopmentReportWeek: 0,
        _developmentReportPending: false,

        chatHistories: {},
        meetingScenes: {},
        consultationSessions: {},
        brusselsRoundState: null,

        /* FAZA E RE: Fusha për zgjedhjet e ndara */
        electionCampaign: null,
        electionPhase: "NONE",
        nextElectionScheduledWeek: null,
        presidentialElectionInProgress: false,
        cabinetProposal: null,
        cabinetApproved: false,

        /* FAZA E RE: Fusha për dosjet javore */
        weeklyDossiers: [],
        dossierCounter: 0,

        /* FAZA E RE: Fusha për negociatat presidenciale */
        presidentialNegotiations: null
    };

    s.municipalityProfiles = getInitialMunicipalityProfiles(s.municipalities);

    s.stateSectors.forEach(function(sec) {
        s.sectorInitialScores[sec.id] = sec.score;
        s.sectorHistory[sec.id] = [{ week: 1, score: sec.score }];
    });

    if (isPostElectionAlt) {
        s.playerRole = (s.mandatar === chosenParty) ? "MANDATAR PËR FORMIMIN E QEVERISË" : "NË PRITJE (OPOZITË)";
        s.ministries.forEach(function(m) {
            m.party = "NONE";
            m.minister = "I/E paemëruar";
        });
    } else {
        s.playerRole = (chosenParty === "LVV") ? "PRIME_MINISTER" : "OPPOSITION_LEADER";
    }

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
            catalogId: "cat_budget_2027",
            title: "Projektligji për Ndarjet Buxhetore dhe Rritjen e Koeficientit të Pagave në 125€",
            ministry: "Ministria e Financave, Punës dhe Transfereve",
            proposer: "Qeveria e Kosovës (Ministria e Financave)",
            sector: "sec_econ",
            desc: "Rrit koeficientin e pagave në sektorin publik dhe shton investimet kapitale në komuna.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.14,
            approvalEffect: 4.5,
            supportParties: ["LVV", "MIN_MULTI"],
            stage: "Leximi i Dytë (Gati për Votim)",
            status: "SCHEDULED",
            submittedWeek: 1,
            scheduledWeek: 2,
            applied: false,
            voteHistory: [],
            stageHistory: [{ stage: "DRAFT", week: 1 }, { stage: "SUBMITTED", week: 1 }, { stage: "UNDER_REVIEW", week: 1 }, { stage: "SCHEDULED", week: 2 }],
            lastVoteResult: null
        },
        {
            id: "law_vetting_bureau",
            catalogId: "cat_vetting_law",
            title: "Projektligji për Byronë Shtetërore për Verifikimin dhe Konfiskimin e Pasurisë së Pajustifikueshme",
            ministry: "Ministria e Drejtësisë",
            proposer: "Qeveria e Kosovës (Ministria e Drejtësisë)",
            sector: "sec_justice",
            desc: "Themelon mekanizmin për konfiskimin civil të pasurisë së zyrtarëve publikë pas rekomandimeve të Komisionit të Venecias.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.02,
            approvalEffect: 5.2,
            supportParties: ["LVV", "MIN_MULTI"],
            stage: "Shqyrtim në Komisionin për Legjislacion",
            status: "UNDER_REVIEW",
            submittedWeek: 1,
            scheduledWeek: null,
            applied: false,
            voteHistory: [],
            stageHistory: [{ stage: "DRAFT", week: 1 }, { stage: "SUBMITTED", week: 1 }, { stage: "UNDER_REVIEW", week: 1 }],
            lastVoteResult: null
        },
        {
            id: "law_eu_growth_plan",
            title: "Ratifikimi i Marrëveshjes Ndërkombëtare me BE-në për Planin e Rritjes (€880 Milionë)",
            ministry: "Ministria e Punëve të Jashtme dhe Financave",
            proposer: "Qeveria e Kosovës (MPJD & MFPT)",
            sector: "sec_econ",
            desc: "Kërkon 2/3 e të gjithë deputetëve të Kuvendit (80 vota) sipas Nenit 18 të Kushtetutës së Kosovës. Sjell grante dhe kredi të buta.",
            majorityType: "INTL_80",
            requiredVotes: 80,
            costB: -0.22,
            approvalEffect: 4.0,
            supportParties: ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"],
            stage: "Seancë Plenare (Kërkon 80 vota)",
            status: "SCHEDULED",
            submittedWeek: 1,
            scheduledWeek: 2,
            applied: false,
            voteHistory: [],
            stageHistory: [{ stage: "DRAFT", week: 1 }, { stage: "SUBMITTED", week: 1 }, { stage: "UNDER_REVIEW", week: 1 }, { stage: "SCHEDULED", week: 2 }],
            lastVoteResult: null
        },
        {
            id: "law_fsk_defense_fund",
            catalogId: "cat_defense_fund",
            title: "Ligji për Fondin e Mbrojtjes dhe Prokurimin e Helikopterëve e Sistemeve Kundërajrore për FSK-në",
            ministry: "Ministria e Mbrojtjes (FSK)",
            proposer: "Qeveria e Kosovës (Ministria e Mbrojtjes)",
            sector: "sec_fsk",
            desc: "Përmbush zotimin për buxhetin 1 miliard euro për ushtrinë gjatë mandatit katërvjeçar.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.18,
            approvalEffect: 5.8,
            supportParties: ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"],
            stage: "Dorëzuar në Kuvend",
            status: "SUBMITTED",
            submittedWeek: 1,
            scheduledWeek: null,
            applied: false,
            voteHistory: [],
            stageHistory: [{ stage: "DRAFT", week: 1 }, { stage: "SUBMITTED", week: 1 }],
            lastVoteResult: null
        },
        {
            id: "law_vital_cultural_zones",
            catalogId: "cat_cultural_heritage",
            title: "Ndryshimi i Ligjit për Vetëqeverisjen Lokale dhe Trashëgiminë Kulturore (Interes Vital - Neni 81)",
            ministry: "Ministria e Administrimit të Pushtetit Lokal",
            proposer: "Qeveria e Kosovës (MAPL)",
            sector: "sec_local",
            desc: "Ligj me interes vital që kërkon shumicë të dyfishtë: 61+ vota në total DHE 2/3 e deputetëve që mbajnë ulëse të garantuara për komunitetet (14 nga 20).",
            majorityType: "VITAL_DOUBLE",
            requiredVotes: 61,
            costB: 0.03,
            approvalEffect: 2.5,
            supportParties: ["LVV", "LDK", "MIN_MULTI"],
            stage: "Konsultim me Komunitetet",
            status: "UNDER_REVIEW",
            submittedWeek: 1,
            scheduledWeek: null,
            applied: false,
            voteHistory: [],
            stageHistory: [{ stage: "DRAFT", week: 1 }, { stage: "SUBMITTED", week: 1 }, { stage: "UNDER_REVIEW", week: 1 }],
            lastVoteResult: null
        },
        {
            id: "law_civil_code",
            title: "Projekt-Kodi Civil i Republikës së Kosovës",
            ministry: "Ministria e Drejtësisë",
            proposer: "Qeveria e Kosovës (Ministria e Drejtësisë)",
            sector: "sec_justice",
            desc: "Rregullon çështjet pronësore, trashëgiminë dhe familjen. Përballet me kundërshtime nga deputetë konservatorë brenda vetë shumicës parlamentare.",
            majorityType: "SIMPLE_61",
            requiredVotes: 61,
            costB: 0.01,
            approvalEffect: 1.5,
            supportParties: ["LVV"],
            stage: "Debat Parlamentar",
            status: "UNDER_REVIEW",
            submittedWeek: 1,
            scheduledWeek: null,
            applied: false,
            voteHistory: [],
            stageHistory: [{ stage: "DRAFT", week: 1 }, { stage: "SUBMITTED", week: 1 }, { stage: "UNDER_REVIEW", week: 1 }],
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

/* ============================================================================
   8. KANDIDATËT PRESIDENCIALË
   ============================================================================ */
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

/* ============================================================================
   9. FUNKSIONET NDIHMËSE
   ============================================================================ */
function clamp(val, min, max) { return Math.max(min, Math.min(max, val)); }

function showToast(msg) {
    var t = document.getElementById("toast");
    if (!t) {
        t = document.createElement("div");
        t.id = "toast";
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = "block";
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(function() { t.style.display = "none"; }, 3400);
}

function showMajorAnnouncement(cfg) {
    var box = document.getElementById("majorEventModalContent");
    if (!box) return;
    var subTxt = cfg.subtitle || (MONTHS_SQ[state.monthIndex] + " " + state.year + " • Java " + state.week);
    var statsBlock = cfg.statsHtml ? '<div style="background:#0f172a; border:1px solid var(--border-glass); border-radius:10px; padding:12px; margin-bottom:12px;">' + cfg.statsHtml + '</div>' : '';
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
        reactions: reactions || ("Përfaqësuesit e mazhorancës (" + state.parties[state.playerParty].short + ") e kanë mbrojtur vendimin si hap i domosdoshëm shtetëror, ndërsa subjektet opozitare kanë kërkuar llogaridhënie parlamentare.")
    };
    state.mediaFeed.unshift(newsObj);
    if (state.mediaFeed.length > 15) state.mediaFeed.pop();
    state.historyLog.unshift(dateStr + ": [" + outlet + "] " + title);
    var ticker = document.getElementById("mediaTickerText");
    if (ticker) ticker.textContent = "[" + outlet + "] " + title;
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
            '<p style="color:var(--text-muted); border-top:1px solid var(--border-glass); padding-top:8px;"><strong>Reagimet Politike & Analiza:</strong> ' + n.reactions + '</p>' +
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
    try { localStorage.setItem(STORAGE_KEY_AUTO, JSON.stringify(state)); } catch (e) { console.error("Gabim në ruajtje:", e); }
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
    runAllMigrations(state);
    saveGameAuto();
    toggleModal("saveModal", false);
    hideStartScreen();
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
    var container = document.getElementById("saveSlotsContainer");
    if (!container) return;
    container.innerHTML = slots.map(function(slot, i) {
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

/* ============================================================================
   10. MIGRIMET
   ============================================================================ */
function migrateStateForFaza6(st) {
    if (!st) return;
    if (!st.dialogueInvitation) {
        st.dialogueInvitation = {
            active: false,
            inviter: "Bashkimi Evropian (BE) & Shtetet e Bashkuara të Amerikës",
            inviterKey: "EU",
            reason: "Rifillimi i dialogut për normalizimin e marrëdhënieve dhe zbatimin e Marrëveshjes së Ohrit.",
            agenda: "Zbatimi i Marrëveshjes së Ohrit, Siguria në Veri, Plani i Rritjes i BE-së, Të Drejtat e Komuniteteve",
            deadlineWeeks: 3,
            responseStatus: "PENDING",
            respondedAt: null
        };
    }
    if (!st.dialogueConsultations) st.dialogueConsultations = {};
    if (typeof st.dialogueProposal === "undefined") st.dialogueProposal = null;
    if (typeof st.dialogueCounterOffer === "undefined") st.dialogueCounterOffer = null;
    if (!st.dialogueAgreements) st.dialogueAgreements = [];
    if (!st.dialogueRoundHistory) st.dialogueRoundHistory = [];
    if (typeof st.dialogueChronologyStep === "undefined") st.dialogueChronologyStep = 1;
    if (typeof st.dialogueProgress === "undefined") st.dialogueProgress = 52;
    if (!st.dialogueNegotiationLog) st.dialogueNegotiationLog = [];
    if (typeof st.dialogueAlliesConsulted === "undefined") st.dialogueAlliesConsulted = false;
}

function migrateStateForFaza7(st) {
    if (!st) return;
    if (!st.parliamentarySessions) st.parliamentarySessions = [];
    if (!st.motions) st.motions = [];
    if (typeof st.sessionCounter === "undefined") st.sessionCounter = 0;
    if (typeof st.motionCounter === "undefined") st.motionCounter = 0;
    if (typeof st.billCounter === "undefined") st.billCounter = 0;

    if (!st.laws) st.laws = getInitialLaws();
    st.laws.forEach(function(law) {
        if (typeof law.proposer === "undefined") law.proposer = law.ministry || "Qeveria e Kosovës";
        if (typeof law.sector === "undefined") law.sector = "sec_econ";
        if (typeof law.submittedWeek === "undefined") law.submittedWeek = 1;
        if (typeof law.scheduledWeek === "undefined") law.scheduledWeek = null;
        if (typeof law.applied === "undefined") law.applied = (law.status === "PASSED");
        if (!law.voteHistory) law.voteHistory = [];
        if (!law.stageHistory) law.stageHistory = [];
        if (typeof law.status === "undefined") law.status = "DRAFT";
        if (law.status === "PENDING") {
            if (law.stage && (law.stage.includes("Leximi") || law.stage.includes("Seancë"))) law.status = "SCHEDULED";
            else if (law.stage && law.stage.includes("Komision")) law.status = "UNDER_REVIEW";
            else law.status = "SUBMITTED";
        }
    });

    st.parliamentarySessions.forEach(function(sess) {
        if (!sess.billIds) sess.billIds = [];
        if (!sess.results) sess.results = [];
        if (typeof sess.status === "undefined") sess.status = "SCHEDULED";
        if (typeof sess.number === "undefined") sess.number = ++st.sessionCounter;
    });

    st.motions.forEach(function(mot) {
        if (typeof mot.status === "undefined") mot.status = "PENDING";
        if (typeof mot.number === "undefined") mot.number = ++st.motionCounter;
    });
}

function migrateStateForFaza8(st) {
    if (!st) return;
    if (typeof st.fiscalReserve === "undefined") st.fiscalReserve = 0.32;
    if (typeof st.debtInterestRate === "undefined") st.debtInterestRate = 2.8;
    if (typeof st.plannedRevenues === "undefined") st.plannedRevenues = st.taxRevenueB || 3.10;
    if (typeof st.plannedExpenses === "undefined") st.plannedExpenses = st.budgetTotalB || 3.32;
    if (typeof st.realizedRevenues === "undefined") st.realizedRevenues = st.taxRevenueB || 3.05;
    if (typeof st.realizedExpenses === "undefined") st.realizedExpenses = st.budgetTotalB || 3.32;
    if (typeof st.lastWeekRevenues === "undefined") st.lastWeekRevenues = 0;
    if (typeof st.lastWeekExpenses === "undefined") st.lastWeekExpenses = 0;
    if (!st.fiscalHistory) st.fiscalHistory = [];
    if (!st.weeklyReports) st.weeklyReports = [];
    if (!st.taxPolicy) st.taxPolicy = { vat: 18, incomeTax: 10, corporateTax: 15, customs: 10 };
    if (typeof st.pendingInterestPayment === "undefined") st.pendingInterestPayment = 0;
}

function migrateStateForFaza9(st) {
    if (!st) return;
    if (!st.municipalityProfiles) {
        st.municipalityProfiles = getInitialMunicipalityProfiles(st.municipalities || []);
    } else {
        var initialProfs = getInitialMunicipalityProfiles(st.municipalities || []);
        Object.keys(initialProfs).forEach(function(mid) {
            if (!st.municipalityProfiles[mid]) st.municipalityProfiles[mid] = initialProfs[mid];
        });
    }
    (st.municipalities || []).forEach(function(m) {
        if (!Array.isArray(m.projects)) m.projects = [];
    });
    if (!Array.isArray(st.developmentProjects)) st.developmentProjects = [];
    if (typeof st.developmentProjectCounter === "undefined") st.developmentProjectCounter = 0;
    if (!st.sectorInitialScores) {
        st.sectorInitialScores = {};
        (st.stateSectors || []).forEach(function(sec) { st.sectorInitialScores[sec.id] = sec.score; });
    }
    if (!st.sectorHistory) {
        st.sectorHistory = {};
        (st.stateSectors || []).forEach(function(sec) { st.sectorHistory[sec.id] = [{ week: 1, score: sec.score }]; });
    }
    if (typeof st.municipalityWeeklyReport === "undefined") st.municipalityWeeklyReport = null;
    if (typeof st.sectorWeeklyReport === "undefined") st.sectorWeeklyReport = null;
    if (typeof st.lastDevelopmentReportWeek === "undefined") st.lastDevelopmentReportWeek = 0;
    if (typeof st._developmentReportPending === "undefined") st._developmentReportPending = false;
}

function migrateStateForFaza11(st) {
    if (!st) return;
    if (typeof st.institutionalPhase === "undefined") {
        if (st.governmentFormed && st.presidentElected && st.assemblyConstituted) {
            st.institutionalPhase = INSTITUTIONAL_PHASES.GOV_IN_OFFICE;
        } else if (st.governmentFormed) {
            st.institutionalPhase = INSTITUTIONAL_PHASES.GOV_APPROVED;
        } else if (st.presidentElected) {
            st.institutionalPhase = INSTITUTIONAL_PHASES.PRESIDENT_ELECTED;
        } else if (st.assemblyConstituted) {
            st.institutionalPhase = INSTITUTIONAL_PHASES.SPEAKER_ELECTED;
        } else {
            st.institutionalPhase = INSTITUTIONAL_PHASES.NEW;
        }
    }
    if (typeof st.governmentStatus === "undefined") {
        st.governmentStatus = st.governmentFormed ? "IN_OFFICE" : "PENDING";
    }
    if (typeof st.speakerElected === "undefined") {
        st.speakerElected = !!(st.speakerOfAssembly && st.speakerOfAssembly.indexOf("pritje") === -1);
    }
    if (typeof st.speakerElectionWeek === "undefined") st.speakerElectionWeek = null;
    if (typeof st.governmentApprovalWeek === "undefined") st.governmentApprovalWeek = null;

    if (!st.chatHistories) st.chatHistories = {};
    if (!st.meetingScenes) st.meetingScenes = {};
    if (!st.consultationSessions) st.consultationSessions = {};
    if (typeof st.brusselsRoundState === "undefined") st.brusselsRoundState = null;

    if (st.assemblyConstituted && st.speakerOfAssembly && st.speakerOfAssembly.indexOf("pritje") !== -1) {
        st.speakerOfAssembly = "Albulena Haxhiu (LVV)";
        st.speakerElected = true;
    }
}

function migrateStateForFazaRe(st) {
    if (!st) return;
    if (!st.weeklyDossiers) st.weeklyDossiers = [];
    if (typeof st.dossierCounter === "undefined") st.dossierCounter = 0;
    if (typeof st.electionCampaign === "undefined") st.electionCampaign = null;
    if (typeof st.electionPhase === "undefined") st.electionPhase = "NONE";
    if (typeof st.nextElectionScheduledWeek === "undefined") st.nextElectionScheduledWeek = null;
    if (typeof st.presidentialElectionInProgress === "undefined") st.presidentialElectionInProgress = false;
    if (typeof st.cabinetProposal === "undefined") st.cabinetProposal = null;
    if (typeof st.cabinetApproved === "undefined") st.cabinetApproved = false;
    if (typeof st.presidentialNegotiations === "undefined") st.presidentialNegotiations = null;

    if (typeof st.presidentMandateStartYear === "undefined") {
        st.presidentMandateStartYear = st.presidentElected ? 2026 : null;
        st.presidentMandateEndYear = st.presidentElected ? 2031 : null;
    }

    if (st.institutionalPhase === INSTITUTIONAL_PHASES.GOV_OVERTHROWN) {
        if (st.speakerOfAssembly && st.speakerOfAssembly.indexOf("pritje") !== -1 && st.assemblyConstituted) {
            st.speakerOfAssembly = "Albulena Haxhiu (LVV)";
            st.speakerElected = true;
        }
    }
}

function runAllMigrations(st) {
    migrateStateForFaza6(st);
    migrateStateForFaza7(st);
    migrateStateForFaza8(st);
    migrateStateForFaza9(st);
    migrateStateForFaza11(st);
    migrateStateForFazaRe(st);
}

/* VAZHDON në pjesën 3/6 */
/* ============================================================================
   11. FUNKSIONET E INICIALIZIMIT DHE EKRANIT FILLESTAR
   ============================================================================ */
function showStartScreen() {
    var ss = document.getElementById("startScreen");
    if (ss) ss.classList.remove("hidden");
    document.body.classList.add("start-screen-active");
}

function hideStartScreen() {
    var ss = document.getElementById("startScreen");
    if (ss) ss.classList.add("hidden");
    document.body.classList.remove("start-screen-active");
}

function startNewGameFromScreen() {
    hideStartScreen();
    openNewScenarioModal();
}

function loadGameFromScreen() {
    hideStartScreen();
    toggleModal("saveModal", true);
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
            if (!state.quorumPledgedParties) state.quorumPledgedParties = state.coalitionParties ? state.coalitionParties.slice() : [];
            if (!state.customPresCandidates) state.customPresCandidates = {};
            if (!state.dialogueNegotiationLog) state.dialogueNegotiationLog = [];

            runAllMigrations(state);

            if (!state.winningParty) state.winningParty = "LVV";
            if (!state.mandatar) state.mandatar = state.winningParty;

            document.getElementById("setupModal").classList.remove("show");
            refreshAllUI();
            hideStartScreen();
            showToast("Loja vazhdoi automatikisht nga ruajtja e fundit!");
            return;
        } catch (e) { console.error("Gabim në ngarkim:", e); }
    }
    state = createFreshState("REALITY_OCT2026", "LVV");
    refreshAllUI();
    showStartScreen();
}

function renderSetupModalParties() {
    var keys = ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"];
    var container = document.getElementById("partySelectContainer");
    if (!container) return;
    container.innerHTML = keys.map(function(k) {
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
    hideStartScreen();
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
    hideStartScreen();
    refreshAllUI();
}

function openNewScenarioModal() {
    toggleModal("saveModal", false);
    var closeBtn = document.getElementById("closeSetupBtn");
    if (closeBtn) closeBtn.style.display = "inline-block";
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

/* ============================================================================
   12. PËRDITËSIMI I TOP BAR
   ============================================================================ */
function updateTopBar() {
    var p = state.parties[state.playerParty];

    var roleEl = document.getElementById("roleDisplay");
    if (roleEl) roleEl.textContent = getPlayerRoleLabel() + " • Legjislatura XI";

    var dateEl = document.getElementById("dateDisplay");
    if (dateEl) dateEl.textContent = MONTHS_SQ[state.monthIndex] + " " + state.year + " • Java " + state.week;

    var pendingMeets = (state.scheduledMeetings || []).filter(function(m) { return m.status === "SCHEDULED"; }).length;
    var pendingReqs = (state.pmInboxRequests || []).filter(function(r) { return r.status === "PENDING"; }).length;

    var calBtn = document.getElementById("calendarTopBtn");
    if (calBtn) calBtn.textContent = "📅 Kalendari (" + pendingMeets + ")";

    var inboxBtn = document.getElementById("inboxTopBtn");
    if (inboxBtn) inboxBtn.textContent = "📥 Kërkesat (" + pendingReqs + ")";

    var appEl = document.getElementById("statApproval");
    if (appEl) {
        appEl.textContent = state.approval.toFixed(1) + "%";
        appEl.style.color = state.approval >= 45 ? "var(--success)" : (state.approval >= 32 ? "var(--accent-gold)" : "var(--danger)");
    }

    var seatEl = document.getElementById("statSeats");
    if (seatEl) {
        seatEl.textContent = getCoalitionSeats() + " / 120";
        seatEl.style.color = getCoalitionSeats() >= 61 ? "var(--accent-gold)" : "var(--danger)";
    }

    var budEl = document.getElementById("statBudget");
    if (budEl) budEl.textContent = "€" + state.budgetTotalB.toFixed(2) + " Mld";

    var econEl = document.getElementById("statEconomy");
    if (econEl) econEl.textContent = "+" + state.gdpGrowth + "% | " + state.unemployment + "%";

    var avgDip = Math.round((state.diplomacy.USA.score + state.diplomacy.EU.score + state.diplomacy.GERMANY.score) / 3);
    var intlEl = document.getElementById("statIntl");
    if (intlEl) intlEl.textContent = avgDip + " / 100";

    var constEl = document.getElementById("statConstStatus");
    if (constEl) {
        var phase = state.institutionalPhase || INSTITUTIONAL_PHASES.GOV_IN_OFFICE;
        var statusTxt = "Stabil";
        var statusCol = "var(--success)";
        if (phase === INSTITUTIONAL_PHASES.GOV_IN_OFFICE) { statusTxt = "Stabil"; statusCol = "var(--success)"; }
        else if (phase === INSTITUTIONAL_PHASES.GOV_APPROVED) { statusTxt = "Qeveri e Miratuar"; statusCol = "var(--success)"; }
        else if (phase === INSTITUTIONAL_PHASES.GOV_VOTING) { statusTxt = "Qeveri në Votim"; statusCol = "var(--warning)"; }
        else if (phase === INSTITUTIONAL_PHASES.GOV_OVERTHROWN) { statusTxt = "Qeveri e Rrëzuar"; statusCol = "var(--danger)"; }
        else if (phase === INSTITUTIONAL_PHASES.SNAP_ELECTION) { statusTxt = "Zgjedhje të Reja"; statusCol = "var(--danger)"; }
        else if (phase === INSTITUTIONAL_PHASES.PRESIDENT_ELECTED) { statusTxt = "President i Zgjedhur"; statusCol = "var(--warning)"; }
        else if (phase === INSTITUTIONAL_PHASES.SPEAKER_ELECTED) { statusTxt = "Kuvend — Kryetar i Zgjedhur"; statusCol = "var(--warning)"; }
        else if (phase === INSTITUTIONAL_PHASES.ASSEMBLY_ELECTED) { statusTxt = "Kuvend i Konstituuar"; statusCol = "var(--warning)"; }
        else { statusTxt = "Në Proces Konstituimi"; statusCol = "var(--warning)"; }
        if (!state.governmentFormed && phase !== INSTITUTIONAL_PHASES.GOV_OVERTHROWN && phase !== INSTITUTIONAL_PHASES.SNAP_ELECTION) {
            statusTxt = "Pa Qeveri";
            statusCol = "var(--warning)";
        }
        constEl.textContent = statusTxt;
        constEl.style.color = statusCol;
    }
}

/* ============================================================================
   13. REFRESH ALL UI
   ============================================================================ */
function refreshAllUI() {
    if (!state) return;
    updateTopBar();
    if (typeof renderDashboard === "function") renderDashboard();
    if (typeof renderPartySection === "function") renderPartySection();
    if (typeof renderAssemblySection === "function") renderAssemblySection();
    if (typeof renderGovernmentSection === "function") renderGovernmentSection();
    if (typeof renderElectionsSection === "function") renderElectionsSection();
    if (typeof renderDiplomacySection === "function") renderDiplomacySection();
    if (typeof renderFiscalPanel === "function") renderFiscalPanel();
    if (typeof renderDevelopmentPanel === "function") renderDevelopmentPanel();
    if (typeof renderWeeklyDossiers === "function") renderWeeklyDossiers();
    saveGameAuto();
}

/* ============================================================================
   14. FUSHATA DHE DOSJET JAVORE (Pika 8)
   ============================================================================ */

function generateWeeklyDossiers() {
    if (!state) return;
    if (!isPlayerInGovernment()) return;
    if (!state.weeklyDossiers) state.weeklyDossiers = [];

    var existingPending = state.weeklyDossiers.filter(function(d) { return d.status === "PENDING"; });
    if (existingPending.length >= 4) return;

    var countToGenerate = Math.max(0, 3 - existingPending.length);
    if (countToGenerate === 0) return;

    var templates = WEEKLY_DOSSIER_TEMPLATES.slice();

    for (var i = 0; i < countToGenerate; i++) {
        var tpl = templates[Math.floor(Math.random() * templates.length)];
        var dossier = buildDossierFromTemplate(tpl);
        if (dossier) {
            state.weeklyDossiers.unshift(dossier);
            state.dossierCounter = (state.dossierCounter || 0) + 1;
        }
    }

    if (state.weeklyDossiers.length > 30) {
        state.weeklyDossiers = state.weeklyDossiers.slice(0, 30);
    }
}

function buildDossierFromTemplate(tpl) {
    if (!tpl) return null;
    var dossier = {
        id: "dos_" + Date.now() + "_" + Math.floor(Math.random() * 9999),
        templateId: tpl.id,
        category: tpl.category,
        urgency: tpl.urgency,
        status: "PENDING",
        deadlineWeeks: 2 + Math.floor(Math.random() * 2),
        createdWeek: state.turnCount,
        outcomeMsg: ""
    };

    if (tpl.senderRole === "MINISTER") {
        var minister = state.ministries[Math.floor(Math.random() * state.ministries.length)];
        dossier.senderName = minister.minister;
        dossier.senderRole = "Ministër (" + minister.name.replace("Ministria e ", "") + ")";
        dossier.title = tpl.titleTemplate.replace("{ministry}", minister.name.replace("Ministria e ", "")).replace("{issue}", minister.currentIssue || "prioritetet javore");
        dossier.desc = tpl.descTemplate.replace("{ministry}", minister.name);
        dossier.consequenceText = tpl.consequenceTemplate;
        dossier.options = tpl.options.map(function(o) {
            return Object.assign({}, o);
        });
    } else if (tpl.senderRole === "MAYOR") {
        var muni = state.municipalities[Math.floor(Math.random() * state.municipalities.length)];
        dossier.senderName = muni.mayorName;
        dossier.senderRole = "Kryetar i Komunës së " + muni.name;
        dossier.title = tpl.titleTemplate.replace("{municipality}", muni.name).replace("{issue}", muni.issue);
        dossier.desc = tpl.descTemplate.replace("{municipality}", muni.name);
        dossier.consequenceText = tpl.consequenceTemplate;
        dossier.options = tpl.options.map(function(o) {
            var copy = Object.assign({}, o);
            copy.municipalityId = muni.id;
            return copy;
        });
    } else if (tpl.senderRole === "SPEAKER") {
        dossier.senderName = state.speakerOfAssembly || "Kryetari i Kuvendit";
        dossier.senderRole = "Kryetar i Kuvendit të Kosovës";
        var topics = ["Buxheti vjetor", "Dialogu me Beogradin", "Siguria në veri", "Reformat në drejtësi"];
        var topic = topics[Math.floor(Math.random() * topics.length)];
        dossier.title = tpl.titleTemplate.replace("{topic}", topic);
        dossier.desc = tpl.descTemplate.replace("{topic}", topic);
        dossier.consequenceText = tpl.consequenceTemplate;
        dossier.options = tpl.options.map(function(o) { return Object.assign({}, o); });
    } else if (tpl.senderRole === "AMBASSADOR") {
        var countries = ["SHBA", "Bashkimi Evropian", "Gjermania", "Mbretëria e Bashkuar"];
        var country = countries[Math.floor(Math.random() * countries.length)];
        var countryTopics = ["Dialogu në Bruksel", "Plani i Rritjes", "Siguria në veri", "Reformat ekonomike"];
        var cTopic = countryTopics[Math.floor(Math.random() * countryTopics.length)];
        dossier.senderName = "Ambasadori i " + country;
        dossier.senderRole = "Përfaqësues diplomatik";
        dossier.title = tpl.titleTemplate.replace("{country}", country).replace("{topic}", cTopic);
        dossier.desc = tpl.descTemplate.replace("{country}", country).replace("{topic}", cTopic);
        dossier.consequenceText = tpl.consequenceTemplate.replace("{country}", country);
        dossier.options = tpl.options.map(function(o) { return Object.assign({}, o); });
    } else if (tpl.senderRole === "ADVISOR") {
        dossier.senderName = "Këshilltarët e Kryeministrit";
        dossier.senderRole = "Kabineti i Kryeministrit";
        var aTopics = ["Strategjia e komunikimit", "Prioritetet legjislative", "Menaxhimi i krizave", "Marrëdhëniet me opozitën"];
        var aTopic = aTopics[Math.floor(Math.random() * aTopics.length)];
        dossier.title = tpl.titleTemplate.replace("{topic}", aTopic);
        dossier.desc = tpl.descTemplate.replace("{topic}", aTopic);
        dossier.consequenceText = tpl.consequenceTemplate;
        dossier.options = tpl.options.map(function(o) { return Object.assign({}, o); });
    } else {
        return null;
    }

    return dossier;
}

function renderWeeklyDossiers() {
    var container = document.getElementById("weeklyDossiersContainer");
    if (!container) return;

    if (!isPlayerInGovernment()) {
        container.innerHTML = '<div style="padding:14px; background:#0f172a; border-radius:8px; font-size:0.82rem; color:var(--text-muted);">' +
            'Ju jeni në opozitë ose në tranzicion. Dosjet javore të Kryeministrit nuk janë në juridiksionin tuaj.' +
        '</div>';
        return;
    }

    var dossiers = (state.weeklyDossiers || []).filter(function(d) { return d.status === "PENDING"; });

    if (dossiers.length === 0) {
        container.innerHTML = '<div style="padding:14px; background:#0f172a; border-radius:8px; font-size:0.82rem; color:var(--text-muted);">' +
            'Nuk ka dosje të reja në tavolinë. Dosjet e reja do të vijnë javë pas jave.' +
        '</div>';
        return;
    }

    dossiers.sort(function(a, b) {
        var urgOrder = { "E LARTË": 0, "MESATARE": 1, "E ULËT": 2 };
        return (urgOrder[a.urgency] || 1) - (urgOrder[b.urgency] || 1);
    });

    container.innerHTML = dossiers.map(function(d) {
        var realIdx = state.weeklyDossiers.findIndex(function(x) { return x.id === d.id; });
        var borderCol = d.urgency === "E LARTË" ? "var(--danger)" : (d.urgency === "MESATARE" ? "var(--accent-gold)" : "var(--accent-blue)");
        var urgCls = d.urgency === "E LARTË" ? "tag-lvv" : (d.urgency === "MESATARE" ? "tag-gold" : "tag-pdk");
        return '<div class="card" style="background:#0f172a; margin-bottom:8px; border-left:4px solid ' + borderCol + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:6px; margin-bottom:6px;">' +
                '<div>' +
                    '<span class="tag ' + urgCls + '">' + d.category + ' • ' + d.urgency + '</span>' +
                    '<h4 style="font-size:0.88rem; margin-top:4px;">' + d.title + '</h4>' +
                    '<div style="font-size:0.73rem; color:var(--accent-gold);">Nga: <strong>' + d.senderName + '</strong> (' + d.senderRole + ')</div>' +
                '</div>' +
                '<span class="tag tag-pdk">Afati: ' + d.deadlineWeeks + ' javë</span>' +
            '</div>' +
            '<p style="font-size:0.78rem; color:#cbd5e1; margin-bottom:6px;">' + d.desc + '</p>' +
            '<div style="font-size:0.72rem; color:var(--danger); margin-bottom:8px;">⚠️ ' + d.consequenceText + '</div>' +
            '<button class="action-btn btn-gold" onclick="openWeeklyDossierModal(' + realIdx + ')">🗂️ Hap Dosjen & Merr Vendim ▶</button>' +
        '</div>';
    }).join("");
}

function openWeeklyDossierModal(dossierIdx) {
    if (!isPlayerInGovernment()) {
        showToast("Dosjet e Kryeministrit janë vetëm për Qeverinë në detyrë.");
        return;
    }
    var d = state.weeklyDossiers[dossierIdx];
    if (!d || d.status !== "PENDING") return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var optsHtml = d.options.map(function(opt, oIdx) {
        var costM = ((opt.costB || 0) * 1000).toFixed(0);
        return '<button class="choice-btn" onclick="resolveWeeklyDossier(' + dossierIdx + ', ' + oIdx + ')">' +
            '<span class="choice-title">' + (oIdx + 1) + '. ' + opt.label + '</span>' +
            '<span class="choice-impact">' + (costM > 0 ? ('Kosto: €' + costM + 'M | ') : '') + 'Ndikimi: ' + ((opt.appDelta || 0) >= 0 ? '+' : '') + (opt.appDelta || 0) + '%</span>' +
        '</button>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🗂️ Dosje: ' + d.senderName + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="font-size:0.76rem; color:var(--accent-gold); margin-bottom:6px;">' + d.senderRole + ' • ' + d.category + ' (Afati: ' + d.deadlineWeeks + ' javë)</div>' +
        '<h3 style="font-size:0.98rem; margin-bottom:8px;">' + d.title + '</h3>' +
        '<div class="chat-bubble chat-them"><strong>' + d.senderName + ':</strong> "' + d.desc + '"</div>' +
        '<div style="font-size:0.75rem; color:var(--danger); margin-bottom:12px;">⚠️ Pasojat e mosveprimit: ' + d.consequenceText + '</div>' +
        '<div style="display:flex; flex-direction:column; gap:7px;">' +
            optsHtml +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function resolveWeeklyDossier(dossierIdx, optIdx) {
    if (!isPlayerInGovernment()) {
        showToast("Nuk keni autoritet ekzekutiv.");
        return;
    }
    var d = state.weeklyDossiers[dossierIdx];
    if (!d || d.status !== "PENDING") return;
    var opt = d.options[optIdx];
    if (!opt) return;

    var costB = opt.costB || 0;
    var check = checkFinancialConstraint(costB, "dosjen \"" + d.title + "\"");
    if (!check.allowed) {
        showToast("❌ " + check.message);
        return;
    }
    if (check.useReserve) {
        state.fiscalReserve = +(state.fiscalReserve - check.shortfall).toFixed(3);
    }
    if (costB > 0) {
        state.budgetTotalB = +(state.budgetTotalB - costB).toFixed(3);
    }

    state.approval = clamp(state.approval + (opt.appDelta || 0), 5, 95);

    if (opt.dipBonus) {
        state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + opt.dipBonus, 10, 100);
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + opt.dipBonus, 10, 100);
    }

    if (opt.municipalityId) {
        var muni = state.municipalities.find(function(m) { return m.id === opt.municipalityId; });
        if (muni) muni.relationWithGov = clamp((muni.relationWithGov || 60) + 10, 0, 100);
    }

    d.status = "COMPLETED";
    d.outcomeMsg = opt.outcome || "Vendimi u mor.";

    toggleModal("interactiveActionModal", false);
    addMediaNews("Kryeministria / RTK", "Kryeministri shqyrtoi dosjen e " + d.senderName + ": " + d.outcomeMsg, "POSITIVE");
    refreshAllUI();
    showToast("Vendimi u regjistrua: " + d.outcomeMsg);
}

/* ============================================================================
   15. KABINETI PARA VOTIMIT TË QEVERISË (Pika 3)
   ============================================================================ */

function openCabinetSelectionModal() {
    if (state.mandatar !== state.playerParty) {
        showToast("Vetëm Mandatari mund të formojë kabinetin para votimit.");
        return;
    }
    if (!state.assemblyConstituted || !state.speakerElected) {
        showToast("Kuvendi duhet të konstituohet dhe të zgjidhet Kryetari para formimit të kabinetit.");
        return;
    }

    if (!state.cabinetProposal) {
        state.cabinetProposal = buildDefaultCabinetProposal();
    }

    renderCabinetSelectionModal();
}

function buildDefaultCabinetProposal() {
    var proposal = [];
    var mandatarParty = state.mandatar;
    var mandatarCands = state.parties[mandatarParty].candidates;
    var idx = 0;

    state.ministries.forEach(function(min, i) {
        var cand = mandatarCands[idx % mandatarCands.length];
        proposal.push({
            ministryId: min.id,
            ministryName: min.name,
            party: mandatarParty,
            ministerName: cand ? cand.name : state.parties[mandatarParty].leader,
            competence: cand ? Math.min(95, cand.loyalty + 5) : 85,
            loyalty: cand ? cand.loyalty : 90,
            isCustom: false
        });
        idx++;
    });
    return proposal;
}

function renderCabinetSelectionModal() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var proposal = state.cabinetProposal || [];

    var partnerParties = state.coalitionParties.filter(function(p) { return p !== state.mandatar; });

    var rowsHtml = proposal.map(function(item, idx) {
        var partyObj = state.parties[item.party];
        var partyTag = partyObj ? '<span class="tag ' + partyObj.tagClass + '">' + partyObj.short + '</span>' : '<span class="tag tag-sl">Bosh</span>';
        return '<div style="background:#0f172a; padding:8px 10px; border-radius:8px; margin-bottom:6px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px; flex-wrap:wrap; gap:6px;">' +
                '<strong style="font-size:0.8rem;">' + item.ministryName.replace("Ministria e ", "M. ") + '</strong>' +
                partyTag +
            '</div>' +
            '<div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:6px;">' +
                'Ministër: <strong style="color:#fff;">' + item.ministerName + '</strong> • Kompetenca: ' + item.competence + '/100 • Besnikëria: ' + item.loyalty + '%' +
            '</div>' +
            '<div style="display:flex; gap:4px; flex-wrap:wrap;">' +
                '<button class="btn-top" onclick="cycleCabinetMinister(' + idx + ')" style="font-size:0.72rem;">🔄 Ndrysho emrin</button>' +
                (partnerParties.length > 0 ? '<button class="btn-top" onclick="cycleCabinetParty(' + idx + ')" style="font-size:0.72rem;">🎨 Ndrysho partinë</button>' : '') +
            '</div>' +
        '</div>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">💼 Formimi i Kabinetit Qeveritar</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:10px;">' +
            'Zgjidhni ministrat për secilën ministri. Mund të ndryshoni emrin ose partinë politike. Kabineti do të paraqitet për votim në Kuvend.' +
        '</p>' +
        '<div style="max-height:480px; overflow-y:auto; margin-bottom:10px;">' + rowsHtml + '</div>' +
        '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="confirmCabinetProposal()">✅ Konfirmo Kabinetin</button>' +
            '<button class="action-btn btn-outline" onclick="resetCabinetProposal()">🔄 Rikthe Propozimin Automatik</button>' +
            '<button class="action-btn btn-outline" onclick="toggleModal(\'interactiveActionModal\', false)">Anulo</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function cycleCabinetMinister(idx) {
    var proposal = state.cabinetProposal;
    if (!proposal || !proposal[idx]) return;
    var item = proposal[idx];
    var availableCands = [];
    if (state.parties[item.party]) {
        availableCands = state.parties[item.party].candidates.slice();
    }
    state.ministries.forEach(function(min) {
        if (min.party === item.party && min.minister) {
            if (!availableCands.some(function(c) { return c.name === min.minister; })) {
                availableCands.push({ name: min.minister, loyalty: 85, id: "existing_" + min.id });
            }
        }
    });
    if (availableCands.length === 0) {
        showToast("Nuk ka kandidatë të disponueshëm për këtë parti.");
        return;
    }
    var currentName = item.ministerName;
    var currentIdx = availableCands.findIndex(function(c) { return c.name === currentName; });
    var nextIdx = (currentIdx + 1) % availableCands.length;
    var nextCand = availableCands[nextIdx];
    item.ministerName = nextCand.name;
    item.competence = nextCand.loyalty ? Math.min(95, nextCand.loyalty + 5) : 80;
    item.loyalty = nextCand.loyalty || 85;
    renderCabinetSelectionModal();
}

function cycleCabinetParty(idx) {
    var proposal = state.cabinetProposal;
    if (!proposal || !proposal[idx]) return;
    var item = proposal[idx];
    var availableParties = state.coalitionParties.slice();
    if (availableParties.length === 0) return;
    var currentPartyIdx = availableParties.indexOf(item.party);
    var nextPartyIdx = (currentPartyIdx + 1) % availableParties.length;
    var nextParty = availableParties[nextPartyIdx];
    item.party = nextParty;
    var nextCands = state.parties[nextParty].candidates;
    if (nextCands.length > 0) {
        item.ministerName = nextCands[0].name;
        item.competence = Math.min(95, nextCands[0].loyalty + 5);
        item.loyalty = nextCands[0].loyalty;
    }
    renderCabinetSelectionModal();
}

function confirmCabinetProposal() {
    if (!state.cabinetProposal) return;
    var allFilled = state.cabinetProposal.every(function(item) { return item.ministerName && item.ministerName.length > 0; });
    if (!allFilled) {
        showToast("Të gjitha ministritë duhet të kenë ministër të caktuar.");
        return;
    }
    state.cabinetApproved = true;
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("Kabineti u konfirmua! Tani mund të paraqisni Qeverinë për votim në Kuvend.");
}

function resetCabinetProposal() {
    state.cabinetProposal = buildDefaultCabinetProposal();
    state.cabinetApproved = false;
    renderCabinetSelectionModal();
}

function applyCabinetProposalToState() {
    if (!state.cabinetProposal) return;
    state.cabinetProposal.forEach(function(item) {
        var min = state.ministries.find(function(m) { return m.id === item.ministryId; });
        if (min) {
            min.party = item.party;
            min.minister = item.ministerName;
            min.competence = item.competence;
            min.loyalty = item.loyalty;
        }
    });
}

/* ============================================================================
   16. FORMALIZIMI I VOTIMIT TË QEVERISË
   ============================================================================ */

function formalizeGovernmentVote() {
    if (state.mandatar !== state.playerParty) {
        showToast("Vetëm Mandatari mund të formalizojë votimin e Qeverisë.");
        return;
    }
    if (!state.assemblyConstituted || !state.speakerElected) {
        showToast("Kuvendi duhet të konstituohet dhe të zgjidhet Kryetari para votimit të Qeverisë.");
        return;
    }
    if (!state.cabinetApproved || !state.cabinetProposal) {
        showToast("Fillimisht duhet të konfirmoni kabinetin para votimit.");
        openCabinetSelectionModal();
        return;
    }

    setInstitutionalPhase(INSTITUTIONAL_PHASES.GOV_VOTING, "Qeveria u paraqit në Kuvend për votim.");

    var seats = getCoalitionSeats();
    if (seats < 61) {
        showToast("Koalicioni ka vetëm " + seats + " vota, më pak se 61 të nevojshme. Votimi do të dështojë.");
    }

    var pro = 0, kunder = 0, abstenim = 0, mungese = 0;

    state.mps.forEach(function(mp) {
        var inCoal = state.coalitionParties.includes(mp.party);
        if (inCoal) {
            if (mp.rebelRisk && Math.random() < 0.1) abstenim++;
            else pro++;
        } else {
            if (mp.promisedVoteNext) pro++;
            else if (Math.random() < 0.2) mungese++;
            else if (Math.random() < 0.1) abstenim++;
            else kunder++;
        }
    });

    var total = pro + kunder + abstenim + mungese;
    if (total !== 120) { kunder += (120 - total); }

    var passed = pro >= 61;
    var resHtml = passed
        ? '<span style="color:var(--success);">✅ QEVERIA U MIRATUA ME ' + pro + ' VOTA PRO!</span>'
        : '<span style="color:var(--danger);">❌ QEVERIA DËSHTOI TË MARRË 61 VOTA! (' + pro + ' PRO)</span>';

    startVotingAnimation("🏛️ Seanca për Zgjedhjen e Qeverisë", "Mandatari: " + state.parties[state.mandatar].leader + " (" + state.parties[state.mandatar].short + ")", {
        pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, resultHtml: resHtml
    }, function() {
        if (passed) {
            applyCabinetProposalToState();
            state.governmentFormed = true;
            state.primeMinister = state.parties[state.mandatar].leader + " (" + state.parties[state.mandatar].short + ")";
            state.governmentApprovalWeek = state.turnCount;

            setInstitutionalPhase(INSTITUTIONAL_PHASES.GOV_IN_OFFICE, "Qeveria e re u miratua me " + pro + " vota; mandati filloi zyrtarisht.");

            addMediaNews("RTK", "Kuvendi i Kosovës voton Qeverinë e re të drejtuar nga " + state.primeMinister + " me " + pro + " vota pro!", "POSITIVE");
            showMajorAnnouncement({
                badge: "SEANCË KONSTITUIVE & VOTIM QEVERIE",
                title: "Votohet Qeveria e Re e Republikës së Kosovës (" + pro + " Vota PRO)",
                reason: "Koalicioni (" + state.coalitionParties.join(" + ") + ") kaloi pragun kushtetues prej 61 votash.",
                immediateImpact: state.primeMinister + " merr zyrtarisht mandatin ekzekutiv. Kabineti i zgjedhur u aplikua në të gjitha ministritë. Statusi: Qeveri në detyrë."
            });
        } else {
            setInstitutionalPhase(INSTITUTIONAL_PHASES.GOV_OVERTHROWN, "Dështoi votimi i Qeverisë; nevojitet mandatar i ri ose zgjedhje.");
            addMediaNews("KOHA", "Dështon votimi i Qeverisë në Kuvend. Kërkohet mandatar i ri ose zgjedhje të reja.", "CRITICAL");
            showMajorAnnouncement({
                badge: "DËSHTON VOTIMI I QEVERISË",
                title: "Kuvendi refuzon Qeverinë (" + pro + " Vota PRO)",
                reason: "Mandatari nuk arriti të sigurojë 61 votat e nevojshme në sallë.",
                immediateImpact: "Negociatat duhet të vazhdojnë ose vendi shkon në zgjedhje të reja."
            });
        }
        refreshAllUI();
    });
}

/* ============================================================================
   17. NEGOCIATAT PRESIDENCIALE (Pika 4)
   ============================================================================ */

function openPresidentialNegotiationModal(partnerParty) {
    if (!state || !state.presidentialElectionInProgress && !state.presidentialDeadlineWeeks) {
        showToast("Nuk ka procedurë presidenciale aktive.");
        return;
    }
    var cand = getAllPresCandidates()[state.presidentialCandidateId];
    if (!cand) {
        showToast("Zgjidhni një kandidat për president.");
        return;
    }
    var p = state.parties[partnerParty];
    if (!p) return;

    state.presidentialNegotiations = {
        partnerParty: partnerParty,
        partnerName: p.leader + " (" + p.short + ")",
        step: 1,
        maxSteps: 3,
        candName: cand.name,
        offers: {}
    };

    renderPresidentialNegotiationStep1();
}

function renderPresidentialNegotiationStep1() {
    var neg = state.presidentialNegotiations;
    if (!neg) return;
    var p = state.parties[neg.partnerParty];
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;

    var rel = state.parties[state.playerParty].relations[neg.partnerParty] || 50;

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🎖️ Negociata Presidenciale — Hapi 1/3 me ' + p.short + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:10px; border-radius:6px; margin-bottom:10px; font-size:0.78rem;">' +
            'Kandidati: <strong>' + neg.candName + '</strong> • Raporti me ' + p.short + ': <strong>' + rel + '/100</strong>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + p.leader + ' (' + p.short + '):</strong> "Për të garantuar kuorumin ose votën PRO, kërkojmë garanci konkrete për programin tonë. Çka ofroni?"</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">1. Cila është kërkesa kryesore e ' + p.short + '?</label>' +
            '<select id="presNegDemand" style="width:100%;">' +
                '<option value="MINISTRY">Post ministror në qeverinë e ardhshme</option>' +
                '<option value="POLICY">Garancia për politikë specifike (Kodi Civil, Asociacioni, etj.)</option>' +
                '<option value="BUDGET">Buxhet i dedikuar për rajonin/komunitetin e tyre</option>' +
                '<option value="GUARANTEE">Garancia kushtetuese për pavarësinë e institucioneve</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">2. Cilën qasje do të përdorni?</label>' +
            '<select id="presNegApproach" style="width:100%;">' +
                '<option value="FIRM">I vendosur — kërkoj respektim të plotë të kushtetutës</option>' +
                '<option value="FLEXIBLE">Fleksibël — i gatshëm për kompromis</option>' +
                '<option value="CONDITIONAL">Kushtëzuar — ofroj garanci nëse pranojnë kandidatin</option>' +
            '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="renderPresidentialNegotiationStep2()">Vazhdo në Hapin 2 ▶</button>';
    toggleModal("interactiveActionModal", true);
}

function renderPresidentialNegotiationStep2() {
    var neg = state.presidentialNegotiations;
    if (!neg) return;
    var p = state.parties[neg.partnerParty];
    var demand = document.getElementById("presNegDemand").value;
    var approach = document.getElementById("presNegApproach").value;
    neg.offers.demand = demand;
    neg.offers.approach = approach;
    neg.step = 2;

    var offerOptionsHtml = "";
    if (demand === "MINISTRY") {
        offerOptionsHtml =
            '<option value="ONE_MIN">1 ministri</option>' +
            '<option value="TWO_MIN">2 ministri</option>' +
            '<option value="DEPUTY_PM">Posti i Zëvendëskryeministrit</option>' +
            '<option value="SPEAKER">Kryetari i Kuvendit</option>';
    } else if (demand === "POLICY") {
        offerOptionsHtml =
            '<option value="CIVIL_CODE">Kompromis për Kodin Civil</option>' +
            '<option value="ASSOCIATION">Diskutim për Asociacionin</option>' +
            '<option value="LANGUAGE">Zgjerim i të drejtave gjuhësore</option>' +
            '<option value="JUSTICE">Reformë e drejtësisë me konsensus</option>';
    } else if (demand === "BUDGET") {
        offerOptionsHtml =
            '<option value="TEN_M">€10M për rajonin e tyre</option>' +
            '<option value="TWENTY_M">€20M për rajonin e tyre</option>' +
            '<option value="FUND">Fond i dedikuar zhvillimi</option>' +
            '<option value="PROJECTS">Projekte specifike infrastrukturore</option>';
    } else if (demand === "GUARANTEE") {
        offerOptionsHtml =
            '<option value="COURT">Garancia nga Gjykata Kushtetuese</option>' +
            '<option value="INTERNATIONAL">Monitorim ndërkombëtar</option>' +
            '<option value="CONSTITUTIONAL">Ndryshim kushtetues i garantuar</option>' +
            '<option value="TRANSPARENCY">Transparencë e plotë</option>';
    }

    var box = document.getElementById("interactiveActionModalContent");
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🎖️ Negociata Presidenciale — Hapi 2/3 me ' + p.short + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + p.leader + ' (' + p.short + '):</strong> "Për kërkesën tuaj: ' + demand + ' me qasje ' + approach + '. Çka konkretisht ofroni?"</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Oferta juaj:</label>' +
            '<select id="presNegOffer" style="width:100%;">' + offerOptionsHtml + '</select>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Sa jeni të gatshëm të shkoni?</label>' +
            '<select id="presNegCommitment" style="width:100%;">' +
                '<option value="LOW">Ofertë fillestare (pa shumë angazhim)</option>' +
                '<option value="MEDIUM">Ofertë e ekuilibruar</option>' +
                '<option value="HIGH">Ofertë bujare (për të siguruar marrëveshjen)</option>' +
            '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="evaluatePresidentialNegotiation()">Dërgo Ofertën & Shiko Reagimin ▶</button>';
}

function evaluatePresidentialNegotiation() {
    var neg = state.presidentialNegotiations;
    if (!neg) return;
    var p = state.parties[neg.partnerParty];
    var offer = document.getElementById("presNegOffer").value;
    var commitment = document.getElementById("presNegCommitment").value;
    neg.offers.offer = offer;
    neg.offers.commitment = commitment;

    var rel = state.parties[state.playerParty].relations[neg.partnerParty] || 50;
    var demand = neg.offers.demand;
    var approach = neg.offers.approach;

    var score = rel * 0.4;
    if (commitment === "HIGH") score += 30;
    else if (commitment === "MEDIUM") score += 20;
    else score += 10;

    if (approach === "FLEXIBLE") score += 10;
    else if (approach === "CONDITIONAL") score += 15;
    else score += 5;

    if (demand === "MINISTRY" && (offer === "DEPUTY_PM" || offer === "SPEAKER")) score += 20;
    else if (demand === "MINISTRY" && offer === "TWO_MIN") score += 10;
    else if (demand === "BUDGET" && (offer === "TWENTY_M" || offer === "FUND")) score += 20;
    else if (demand === "BUDGET" && offer === "TEN_M") score += 8;
    else if (demand === "GUARANTEE" && (offer === "COURT" || offer === "INTERNATIONAL")) score += 18;
    else if (demand === "POLICY" && (offer === "LANGUAGE" || offer === "JUSTICE")) score += 15;

    var requiredScore = 65;

    var success = score >= requiredScore;
    var statusBadge = success
        ? '<span class="tag tag-min">✔ MARRËVESHJE</span>'
        : '<span class="tag tag-lvv">✕ REFUZIM</span>';

    var reactionText = "";
    if (success) {
        reactionText = p.leader + " (" + p.short + ") pranoi: \"Kjo ofertë është e pranueshme. Do të garantojmë mbështetjen tonë për kandidatin " + neg.candName + ".\"";
        var cand = getAllPresCandidates()[state.presidentialCandidateId];
        if (cand && cand.acceptParties.indexOf(neg.partnerParty) === -1) {
            cand.acceptParties.push(neg.partnerParty);
        }
        if (state.quorumPledgedParties.indexOf(neg.partnerParty) === -1) {
            state.quorumPledgedParties.push(neg.partnerParty);
        }
        state.parties[state.playerParty].relations[neg.partnerParty] = clamp(rel + 10, 0, 100);
        state.approval = clamp(state.approval + 1.5, 5, 95);
        state.presidentialNegotiations = null;
        addMediaNews("Klan Kosova", "Marrëveshje presidenciale: " + p.short + " do të mbështesë kandidatin " + neg.candName + ".", "POSITIVE");
    } else {
        reactionText = p.leader + " (" + p.short + ") refuzoi: \"Oferta juaj nuk plotëson kërkesat tona. Kërkojmë më shumë angazhim konkret.\"";
        state.parties[state.playerParty].relations[neg.partnerParty] = clamp(rel - 5, 0, 100);
        state.presidentialNegotiations = null;
    }

    state.presidentialNegotiations_result = {
        success: success,
        partnerParty: neg.partnerParty,
        partnerShort: p.short,
        reactionText: reactionText
    };

    var box = document.getElementById("interactiveActionModalContent");
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🎖️ Rezultati i Negociatës Presidenciale</div>' +
            statusBadge +
        '</div>' +
        '<div class="chat-bubble chat-them">' + reactionText + '</div>' +
        '<div style="background:#0f172a; padding:10px; border-radius:6px; font-size:0.76rem;">' +
            '• Pikët e arritura: <strong>' + Math.round(score) + '</strong> / ' + requiredScore + ' të nevojshme<br>' +
            '• Qëndrimi i ' + p.short + ' tani: <strong>' + state.parties[state.playerParty].relations[neg.partnerParty] + '/100</strong>' +
        '</div>' +
        '<div style="display:flex; gap:6px; margin-top:10px;">' +
            '<button class="action-btn btn-gold" onclick="toggleModal(\'interactiveActionModal\', false); refreshAllUI();">Mbylle</button>' +
            (!success ? '<button class="action-btn btn-outline" onclick="openPresidentialNegotiationModal(\'' + neg.partnerParty + '\')">🔄 Provo Raund tjetër</button>' : '') +
        '</div>';
    refreshAllUI();
}

/* ============================================================================
   18. ZGJEDHJET E NDARA — PARLAMENTARE DHE PRESIDENCIALE (Pika 10)
   ============================================================================ */

function checkPresidentialMandateExpiry() {
    if (!state) return false;
    if (!state.presidentElected) return false;
    var mandateYears = INITIAL_POLITICAL_DB.constitutionalRules.presidentialMandateYears;
    if (state.presidentMandateStartYear && state.year - state.presidentMandateStartYear >= mandateYears) {
        state.presidentElected = false;
        state.presidentName = "Ushtrues/e Detyre — pritet zgjedhja";
        state.presidentialDeadlineWeeks = 8;
        state.presidentialRound = 1;
        state.quorumPledgedParties = state.coalitionParties.slice();
        state.presidentMandateStartYear = null;
        state.presidentMandateEndYear = null;
        addMediaNews("RTK", "Mandati i Presidentes përfundoi. Hapet procedura kushtetuese për zgjedhjen e presidentit të ri.", "NEUTRAL");
        setInstitutionalPhase(state.institutionalPhase === INSTITUTIONAL_PHASES.GOV_IN_OFFICE ? INSTITUTIONAL_PHASES.GOV_IN_OFFICE : state.institutionalPhase,
            "Mandati presidencial përfundoi. Hapet procedura për president të ri.");
        return true;
    }
    return false;
}

function startParliamentaryElectionProcess(declaredByPresident) {
    if (!state) return;
    if (state.electionPhase !== "NONE") {
        showToast("Procesi zgjedhor është tashmë në vazhdim.");
        return;
    }
    state.electionPhase = "CAMPAIGN";
    state.electionCampaign = {
        startWeek: state.turnCount,
        campaignDurationWeeks: 4,
        weeksRemaining: 4,
        activities: [],
        debates: [],
        polls: [],
        declaredBy: declaredByPresident || "Presidenti"
    };
    addMediaNews("KQZ / RTK", "Presidenti ka shpallur zgjedhjet parlamentare! Fillon periudha e fushatës zgjedhore.", "NEUTRAL");
    showMajorAnnouncement({
        badge: "ZGJEDHJET PARLAMENTARE TË SHPALLURA",
        title: "Fillon Fushata Zgjedhore",
        reason: "Presidenti ka shpallur zgjedhjet parlamentare sipas procedurës kushtetuese.",
        immediateImpact: "Periudha e fushatës është 4 javë. Zhvilloni aktivitete fushate dhe përgatituni për votim."
    });
    refreshAllUI();
}

function advanceCampaignWeek() {
    if (!state.electionCampaign) return;
    var camp = state.electionCampaign;
    camp.weeksRemaining--;

    var myP = state.parties[state.playerParty];
    var campaignImpact = 0;
    camp.activities.forEach(function(a) {
        campaignImpact += a.pollBonus || 0;
    });
    if (camp.activities.length > 0) {
        myP.poll = clamp(myP.poll + (campaignImpact / camp.campaignDurationWeeks), 2, 75);
    }

    if (camp.weeksRemaining <= 0) {
        runElectionDay();
    } else {
        showToast("Fushata vazhdon! Kanë mbetur edhe " + camp.weeksRemaining + " javë deri në ditën e zgjedhjeve.");
    }
    refreshAllUI();
}

function runElectionDay() {
    if (!state.electionCampaign) return;
    state.electionPhase = "VOTING";
    normalizePartyPolls();

    var genKeys = ["LVV", "PDK", "LDK", "AAK"];
    var qualified = genKeys.filter(function(k) { return state.parties[k].poll >= 5.0; });
    var sumVotes = qualified.reduce(function(a, k) { return a + state.parties[k].poll; }, 0);

    var allocatedSum = 0;
    var maxSeats = 0;
    var winnerId = "LVV";

    qualified.forEach(function(k, idx) {
        if (idx === qualified.length - 1) state.parties[k].seats = 100 - allocatedSum;
        else {
            var s = Math.round((state.parties[k].poll / sumVotes) * 100);
            state.parties[k].seats = s;
            allocatedSum += s;
        }
        if (state.parties[k].seats > maxSeats) {
            maxSeats = state.parties[k].seats;
            winnerId = k;
        }
    });

    state.parties.MIN_MULTI.seats = 11;
    state.parties.SL.seats = 9;
    state.winningParty = winnerId;
    state.mandatar = winnerId;
    state.mps = generate120MPs(state.parties, state.playerParty);
    state.mandateNumber++;
    state.weeksToNextRegularElection = 208;

    state.governmentFormed = false;
    state.governmentStatus = "PENDING";
    state.coalitionParties = [winnerId];
    state.coalitionAgreements = [];
    state.primeMinister = "Në pritje të mandatarit";
    state.assemblyConstituted = true;
    state.speakerElected = false;
    state.speakerOfAssembly = "Në pritje të zgjedhjes së Kryetarit";
    state.speakerElectionWeek = null;
    state.governmentApprovalWeek = null;
    state.cabinetProposal = null;
    state.cabinetApproved = false;

    state.ministries.forEach(function(m) {
        m.party = "NONE";
        m.minister = "I/E paemëruar";
    });

    state.laws = getInitialLaws();
    state.parliamentarySessions = [];
    state.motions = [];
    state.sessionCounter = 0;
    state.motionCounter = 0;

    setInstitutionalPhase(INSTITUTIONAL_PHASES.ASSEMBLY_ELECTED, "Zgjedhjet parlamentare u mbajtën; Kuvendi i ri u konstituua.");

    state.electionCampaign = null;
    state.electionPhase = "NONE";

    addMediaNews("KQZ Rezultatet Përfundimtare", "Zgjedhjet e reja: LVV " + state.parties.LVV.seats + ", PDK " + state.parties.PDK.seats + ", LDK " + state.parties.LDK.seats + ", AAK " + state.parties.AAK.seats + ".", "POSITIVE");
    showMajorAnnouncement({
        badge: "REZULTATET ZYRTARE TË KQZ-SË",
        title: "Përbërja e Re e Kuvendit: LVV (" + state.parties.LVV.seats + "), PDK (" + state.parties.PDK.seats + "), LDK (" + state.parties.LDK.seats + "), AAK (" + state.parties.AAK.seats + ")",
        reason: "Zgjedhjet parlamentare u mbajtën me sukses.",
        immediateImpact: "Partia e parë (" + state.parties[winnerId].short + ") merr mandatin për formimin e Qeverisë. Presidenti NUK shkon automatikisht në zgjedhje; mandati presidencial vazhdon.",
        statsHtml: '<div style="text-align:center; font-size:0.85rem;">' +
            'LVV: <strong>' + state.parties.LVV.seats + '</strong> • ' +
            'PDK: <strong>' + state.parties.PDK.seats + '</strong> • ' +
            'LDK: <strong>' + state.parties.LDK.seats + '</strong> • ' +
            'AAK: <strong>' + state.parties.AAK.seats + '</strong> • ' +
            'Komunitetet: <strong>' + state.parties.MIN_MULTI.seats + '</strong> • ' +
            'Lista Serbe: <strong>' + state.parties.SL.seats + '</strong>' +
        '</div>'
    });
    refreshAllUI();
}

/* ============================================================================
   19. MOCIONI I MOSBESIMIT
   ============================================================================ */

function voteNoConfidenceMotion(motionId) {
    if (!assertAssemblyFunctional("Mocioni i mosbesimit")) return;
    var motion = state.motions.find(function(m) { return m.id === motionId; });
    if (!motion) return;

    var pro = 0, kunder = 0, abstenim = 0, mungese = 0;
    var myPartyIsOpposition = !state.coalitionParties.includes(state.playerParty);

    state.mps.forEach(function(mp) {
        var inCoalition = state.coalitionParties.includes(mp.party);
        if (myPartyIsOpposition) {
            if (!inCoalition) {
                if (Math.random() < 0.85) pro++;
                else if (Math.random() < 0.5) abstenim++;
                else mungese++;
            } else {
                if (mp.rebelRisk && Math.random() < 0.15) pro++;
                else if (Math.random() < 0.9) kunder++;
                else abstenim++;
            }
        } else {
            if (inCoalition) {
                if (Math.random() < 0.9) pro++;
                else abstenim++;
            } else {
                if (Math.random() < 0.7) kunder++;
                else if (Math.random() < 0.5) abstenim++;
                else mungese++;
            }
        }
    });

    var total = pro + kunder + abstenim + mungese;
    if (total < 120) mungese += (120 - total);
    else if (total > 120) mungese = Math.max(0, mungese - (total - 120));

    var passed = (pro >= 61);
    motion.status = passed ? "PASSED" : "FAILED";
    motion.result = pro + " PËR, " + kunder + " KUNDËR, " + abstenim + " ABSTENIM, " + mungese + " MUNGESA";

    var resHtml = passed
        ? '<span style="color:var(--danger);">❌ MOCIONI U MIRATUA ME ' + pro + ' VOTA PRO! Qeveria ra!</span>'
        : '<span style="color:var(--success);">✅ MOCIONI DËSHTOI! Vetëm ' + pro + ' vota PRO. Qeveria mbijetoi.</span>';

    startVotingAnimation("⚡ Mocioni i Mosbesimit", motion.title, {
        pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, resultHtml: resHtml
    }, function() {
        if (passed) {
            addMediaNews("KOHA", "Bie Qeveria! Mocioni i mosbesimit miratohet me " + pro + " vota pro!", "CRITICAL");

            setInstitutionalPhase(INSTITUTIONAL_PHASES.GOV_OVERTHROWN, "Qeveria u rrëzua me mocion mosbesimi (" + pro + " vota pro).");

            showMajorAnnouncement({
                badge: "QEVEREA U RRËZUA — CIKLI INSTITUCIONAL RIVENDOSET",
                title: "Mocioni i Mosbesimit Miratohet me " + pro + " Vota",
                reason: "Opozita arriti 61+ vota. Qeveria bie dhe vendi shkon në zgjedhje të reja ose në mandat të ri.",
                immediateImpact: "Të gjitha funksionet ekzekutive janë pezulluar. Statusi institucional: Qeveri e Rrëzuar. Kuvendi vazhdon të funksionojë, por Qeveria është në tranzicion.",
                statsHtml: '<div style="text-align:center; font-size:0.9rem;">🟢 PËR: <strong>' + pro + '</strong> &nbsp;|&nbsp; 🔴 KUNDËR: <strong>' + kunder + '</strong> &nbsp;|&nbsp; ⚪ ABSTENIM: <strong>' + abstenim + '</strong></div>'
            });
            refreshAllUI();
        } else {
            state.approval = clamp(state.approval + 2.5, 5, 95);
            addMediaNews("RTK", "Dështon mocioni i mosbesimit në Kuvend: Vetëm " + pro + " vota pro.", "POSITIVE");
            showMajorAnnouncement({
                badge: "MOCION MOSBESIMI I RRËZUAR",
                title: "Qeveria i Mbijeton Mocionit (" + pro + " PËR / " + kunder + " KUNDËR)",
                reason: "Opozita nuk arriti të sigurojë 61 vota për rrëzimin e kabinetit.",
                immediateImpact: "Qeveria forcon pozicionin e saj politik (+2.5% mbështetje)."
            });
            refreshAllUI();
        }
    });
}

/* ============================================================================
   20. VOTIMI I PRESIDENTIT
   ============================================================================ */

function runPresidentialVoteRound() {
    if (!assertAssemblyFunctional("Zgjedhja e Presidentit")) return;
    var allCands = getAllPresCandidates();
    var cand = allCands[state.presidentialCandidateId] || allCands.cand_pula;

    var pro = 0, kunder = 0, abstenim = 0, mungese = 0;
    var presentInHall = 0;

    state.mps.forEach(function(mp) {
        var partyInQuorum = state.quorumPledgedParties.includes(mp.party) || state.coalitionParties.includes(mp.party);
        var individualPresent = partyInQuorum || mp.promisedVoteNext;

        if (!individualPresent) {
            mungese++;
            return;
        }

        presentInHall++;
        var partyAcceptsCandidate = cand.acceptParties.includes(mp.party) || state.coalitionParties.includes(mp.party);

        if (mp.promisedVoteNext || partyAcceptsCandidate) {
            if (mp.rebelRisk && !mp.promisedVoteNext && Math.random() < 0.12) {
                abstenim++;
            } else {
                pro++;
            }
        } else {
            if (mp.trustPlayer >= 72) {
                pro++;
            } else if (mp.seatNumber % 2 === 0) {
                abstenim++;
            } else {
                kunder++;
            }
        }
    });

    var total = pro + kunder + abstenim + mungese;
    if (total !== 120) { kunder += (120 - total); }

    var round = state.presidentialRound;
    var neededVotes = (round === 1 || round === 2) ? 80 : 61;
    var hasQuorum = presentInHall >= 80;
    var passed = hasQuorum && (pro >= neededVotes);

    var resHtml = "";
    if (!hasQuorum) {
        resHtml = '<span style="color:var(--warning);">⚠️ MUNGESË KUORUMI! Vetëm ' + presentInHall + ' deputetë morën pjesë.</span>';
    } else if (passed) {
        resHtml = '<span style="color:var(--success);">✅ PRESIDENTI U ZGJODH ME ' + pro + ' VOTA PRO!</span>';
    } else {
        resHtml = '<span style="color:var(--danger);">❌ DËSHTOI ZGJEDHJA NË KËTË RAUND (' + pro + ' PRO / ' + neededVotes + ' të nevojshme)</span>';
    }

    startVotingAnimation("🎖️ Zgjedhja e Presidentit (Raundi " + round + ")", "Votimi i fshehtë për: " + cand.name, {
        pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, resultHtml: resHtml
    }, function() {
        if (!hasQuorum) {
            addMediaNews("Betimi për Drejtësi", "Mungesë kuorumi në zgjedhjen e Presidentit: Vetëm " + presentInHall + " deputetë në sallë!", "CRITICAL");
            showMajorAnnouncement({
                badge: "RAUNDI " + round + " — MUNGESË KUORUMI (<80)",
                title: "Votimi i Pavlefshëm: Vetëm " + presentInHall + " Deputetë",
                reason: "Sipas Kushtetutës së Kosovës, pa pjesëmarrjen e të paktën 80 deputetëve nuk plotësohet kuorumi.",
                immediateImpact: "Negocioni marrëveshje për kuorum me opozitën."
            });
        } else if (passed) {
            state.presidentElected = true;
            state.presidentName = cand.name;
            state.presidentialRound = 1;
            state.approval = clamp(state.approval + cand.popBonus, 5, 95);
            state.presidentMandateStartYear = state.year;
            state.presidentMandateEndYear = state.year + INITIAL_POLITICAL_DB.constitutionalRules.presidentialMandateYears;
            setInstitutionalPhase(INSTITUTIONAL_PHASES.PRESIDENT_ELECTED, "U zgjodh Presidenti " + cand.name + " me " + pro + " vota.");
            addMediaNews("RTK", "Kuvendi zgjedh " + cand.name + " President/e me " + pro + " vota PRO në Raundin " + round + "!", "POSITIVE");
            showMajorAnnouncement({
                badge: "✔ U ZGJODH PRESIDENTI/JA (RAUNDI " + round + ")",
                title: cand.name + " Zgjidhet President/e e Republikës",
                reason: "Me kuorum prej " + presentInHall + " deputetësh, kandidati mori " + pro + " vota PRO.",
                immediateImpact: "Mandati presidencial: " + state.presidentMandateStartYear + "–" + state.presidentMandateEndYear + ". (+" + cand.popBonus + "% mbështetje)."
            });
        } else {
            if (round < 3) {
                state.presidentialRound++;
                showMajorAnnouncement({
                    badge: "RAUNDI " + round + " DËSHTOI — KALOJMË NË RAUNDIN " + state.presidentialRound,
                    title: cand.name + " mori " + pro + " vota PRO (Kërkoheshin " + neededVotes + ")",
                    reason: "Në sallë ishin " + presentInHall + " deputetë, por munguan votat PRO.",
                    immediateImpact: state.presidentialRound === 3 ? "Në Raundin III mjaftojnë 61 vota PRO (me kuorum 80)!" : "Kuvendi kalon në Raundin II."
                });
            } else {
                addMediaNews("KOHA", "Dështon zgjedhja e Presidentit edhe në Raundin III! Kuvendi shpërndahet!", "CRITICAL");
                setInstitutionalPhase(INSTITUTIONAL_PHASES.SNAP_ELECTION, "Dështoi zgjedhja e Presidentit në 3 raunde; Kuvendi shpërndahet.");
                startParliamentaryElectionProcess("Dështimi i zgjedhjes së Presidentit në 3 raunde (Neni 86 i Kushtetutës)");
            }
        }
        refreshAllUI();
    });
}

/* VAZHDON në pjesën 4 */
/* ============================================================================
   21. RENDER DASHBOARD
   ============================================================================ */

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

function renderDashboard() {
    if (!state) return;
    var ev = DYNAMIC_EVENTS[state.currentEventIndex % DYNAMIC_EVENTS.length];
    var evCard = document.getElementById("activeEventCard");
    if (evCard) {
        evCard.innerHTML =
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
    }

    var coalSeats = getCoalitionSeats();
    var coalNames = state.coalitionParties.map(function(k) { return state.parties[k] ? state.parties[k].short : k; }).join(" + ");
    var pendingMeetings = (state.scheduledMeetings || []).filter(function(m) { return m.status === "SCHEDULED"; });
    var activeSectorProjs = (state.stateSectors || []).filter(function(s) { return s.active; }).length;
    var activeDevProjects = (state.developmentProjects || []).filter(function(p) { return p.status === "IN_PROGRESS"; }).length;
    var reqCount = (state.pmInboxRequests || []).filter(function(r) { return r.status === "PENDING"; }).length;

    var phase = state.institutionalPhase || INSTITUTIONAL_PHASES.GOV_IN_OFFICE;
    var govStatusBadge = document.getElementById("govStatusBadge");
    if (govStatusBadge) {
        var govStatusHtml = "";
        if (phase === INSTITUTIONAL_PHASES.GOV_IN_OFFICE || phase === INSTITUTIONAL_PHASES.GOV_APPROVED) {
            govStatusHtml = "Qeveri me Mandat të Plotë";
            govStatusBadge.className = "tag tag-min";
        } else if (phase === INSTITUTIONAL_PHASES.GOV_VOTING) {
            govStatusHtml = "Qeveria në Votim në Kuvend";
            govStatusBadge.className = "tag tag-gold";
        } else if (phase === INSTITUTIONAL_PHASES.GOV_OVERTHROWN) {
            govStatusHtml = "Qeveria u Rrëzua";
            govStatusBadge.className = "tag tag-lvv";
        } else if (phase === INSTITUTIONAL_PHASES.SNAP_ELECTION) {
            govStatusHtml = "Zgjedhje të Reja";
            govStatusBadge.className = "tag tag-lvv";
        } else {
            govStatusHtml = "Në Bisedime për Formimin e Qeverisë";
            govStatusBadge.className = "tag tag-warning";
        }
        govStatusBadge.textContent = govStatusHtml;
    }

    var dipNoteHtml = "";
    if (state.dialogueInvitation && state.dialogueInvitation.active && state.dialogueInvitation.responseStatus === "PENDING") {
        dipNoteHtml = '<div style="margin-top:8px; background:rgba(245,158,11,0.12); padding:8px 10px; border-left:3px solid var(--accent-gold); border-radius:6px; font-size:0.78rem;">' +
            '📨 <strong>Ftesë diplomatike aktive</strong> — ' + state.dialogueInvitation.inviter + ' • Afati: edhe ' + state.dialogueInvitation.deadlineWeeks + ' javë ' +
            '<button class="btn-top" style="margin-left:6px;" onclick="switchMainTab(\'tab-diplomacy\')">Shqyrto ▶</button>' +
        '</div>';
    }

    var pendingBills = (state.laws || []).filter(function(l) { return l.status === "SCHEDULED"; }).length;
    if (pendingBills > 0) {
        dipNoteHtml += '<div style="margin-top:8px; background:rgba(37,99,235,0.12); padding:8px 10px; border-left:3px solid var(--accent-blue); border-radius:6px; font-size:0.78rem;">' +
            '⚖️ <strong>' + pendingBills + ' projektligje të caktuara për seancë</strong> presin shqyrtim në Kuvend ' +
            '<button class="btn-top" style="margin-left:6px;" onclick="switchMainTab(\'tab-assembly\'); switchSubTab(\'ass\',\'sessions\', document.querySelectorAll(\'#tab-assembly .sub-pill\')[3]);">Shiko ▶</button>' +
        '</div>';
    }

    var phaseLabel = INSTITUTIONAL_PHASE_LABELS[phase] || "—";
    var instSummary = document.getElementById("institutionalSummary");
    if (instSummary) {
        instSummary.innerHTML =
            '<div>• <strong>Faza Institucionale:</strong> <span style="color:var(--accent-gold);">' + phaseLabel + '</span></div>' +
            '<div>• <strong>President/e e Republikës:</strong> ' + state.presidentName + ' ' + (!state.presidentElected ? '<span style="color:var(--danger);">(Kërkohet votim brenda ' + state.presidentialDeadlineWeeks + ' javësh!)</span>' : '<span style="color:var(--success);">(Në mandat kushtetues)</span>') + '</div>' +
            '<div>• <strong>Kryetar/e e Kuvendit (Legjislatura XI):</strong> ' + state.speakerOfAssembly + '</div>' +
            '<div>• <strong>Kryeministër & Koalicioni:</strong> ' + state.primeMinister + ' (' + coalNames + ' — <strong>' + coalSeats + '/120 ulëse</strong>)</div>' +
            '<div>• <strong>Kërkesa Hyrëse në Agjendën e KM:</strong> <strong style="color:var(--accent-gold);">' + reqCount + ' kërkesa</strong> | <strong>Sektorë Shtetërorë në Zhvillim:</strong> <strong>' + activeSectorProjs + '/15</strong></div>' +
            '<div>• <strong>Projekte Zhvillimore Aktive:</strong> <strong style="color:var(--accent-gold);">' + activeDevProjects + '</strong> projekte në zbatim</div>' +
            dipNoteHtml +
            '<div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">' +
                '<button class="action-btn btn-gold" onclick="switchSubTab(\'dash\', \'inbox\', document.querySelectorAll(\'#tab-dashboard .sub-pill\')[1])">📥 Agjenda e KM (' + reqCount + ')</button>' +
                '<button class="action-btn" onclick="switchSubTab(\'dash\', \'calendar\', document.querySelectorAll(\'#tab-dashboard .sub-pill\')[2])">📅 Kalendari (' + pendingMeetings.length + ')</button>' +
                '<button class="action-btn btn-outline" onclick="switchSubTab(\'dash\', \'development\', document.querySelectorAll(\'#tab-dashboard .sub-pill\')[5]);">🏗️ Zhvillimi i Shtetit</button>' +
            '</div>';
    }

    var inboxList = (state.pmInboxRequests || []).filter(function(r) { return r.status === "PENDING"; });
    var quickInbox = document.getElementById("quickInboxPreview");
    if (quickInbox) {
        if (!isPlayerInGovernment()) {
            quickInbox.innerHTML = '<div style="font-size:0.78rem; color:var(--text-muted); padding:10px; background:#0f172a; border-radius:8px;">Ju jeni në opozitë ose tranzicion. Kërkesat e Kryeministrit nuk janë në juridiksionin tuaj. Përdorni tab-in "Kuvendi" për mjete kontrolli parlamentar.</div>';
        } else {
            quickInbox.innerHTML = inboxList.length === 0
                ? '<div style="font-size:0.78rem; color:var(--text-muted);">Nuk keni kërkesa aktive. Të gjitha janë shqyrtuar!</div>'
                : inboxList.slice(0, 2).map(function(req) {
                    var realIdx = state.pmInboxRequests.findIndex(function(r) { return r.id === req.id; });
                    return '<div style="background:#0f172a; border-left:3px solid var(--accent-gold); padding:8px 10px; border-radius:6px; margin-bottom:8px;">' +
                        '<div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--accent-gold);">' +
                            '<strong>📩 Nga: ' + req.senderName + ' (' + req.senderRole + ')</strong>' +
                            '<span>Afati: ' + req.deadlineWeeks + ' javë</span>' +
                        '</div>' +
                        '<div style="font-size:0.81rem; font-weight:700; margin:3px 0;">' + req.title + '</div>' +
                        '<button class="btn-top" onclick="openPMRequestModal(' + realIdx + ')">Shqyrto & Vendos ▶</button>' +
                    '</div>';
                }).join("");
        }
    }

    var mediaFeed = document.getElementById("mediaFeedList");
    if (mediaFeed) {
        mediaFeed.innerHTML = state.mediaFeed.slice(0, 4).map(function(m, idx) {
            var borderCol = m.tone === "POSITIVE" ? "var(--success)" : (m.tone === "CRITICAL" ? "var(--danger)" : "var(--accent-blue)");
            return '<div class="news-item-clickable" style="border-left-color:' + borderCol + ';" onclick="openNewsArticleModal(' + idx + ')">' +
                '<div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--text-muted);">' +
                    '<strong>📰 ' + m.outlet + '</strong>' +
                    '<span>' + m.time + ' • <u style="color:var(--accent-gold);">Lexo të plotë</u></span>' +
                '</div>' +
                '<div style="font-size:0.8rem; margin-top:3px; font-weight:600;">' + m.title + '</div>' +
            '</div>';
        }).join("");
    }

    var pollDate = document.getElementById("pollDateLabel");
    if (pollDate) pollDate.textContent = MONTHS_SQ[state.monthIndex] + " " + state.year;

    var pollBars = document.getElementById("quickPollBars");
    if (pollBars) {
        pollBars.innerHTML = Object.values(state.parties).map(function(p) {
            return '<div class="prog-row">' +
                '<div class="prog-label"><span>' + p.short + ' (' + p.leader.split(" ")[0] + ')</span><span>' + p.poll.toFixed(1) + '% (' + p.seats + ' ulëse)</span></div>' +
                '<div class="prog-track"><div class="prog-fill" style="width:' + Math.min(100, p.poll * 1.6) + '%; background:' + p.color + ';"></div></div>' +
            '</div>';
        }).join("");
    }

    renderPMInboxSection();
    renderCalendarMeetings();
    renderPromisesList();
    renderWeeklyDossiers();

    if (state._developmentReportPending && state.sectorWeeklyReport) {
        var repHtml = '<div class="card" style="border-color:var(--accent-gold); margin-bottom:10px;"><div class="card-header"><div class="card-title">📊 Raporti Javor i Zhvillimit</div><span class="tag tag-gold">Java ' + state.lastDevelopmentReportWeek + '</span></div>' +
            '<div style="font-size:0.78rem; line-height:1.6;">' + state.sectorWeeklyReport + '</div></div>';
        var qInbox2 = document.getElementById("quickInboxPreview");
        if (qInbox2 && qInbox2.parentNode) qInbox2.insertAdjacentHTML("beforebegin", repHtml);
    }

    var filterVal = document.getElementById("historyFilterSelect") ? document.getElementById("historyFilterSelect").value : "ALL";
    var logs = state.historyLog.filter(function(x) {
        if (filterVal === "Media" && x.toLowerCase().includes("medi")) return true;
        if (filterVal === "Media" && x.toLowerCase().includes("komunikat")) return true;
        if (filterVal === "Zhvillim" && (x.toLowerCase().includes("projekt") || x.toLowerCase().includes("zhvillim") || x.toLowerCase().includes("komun"))) return true;
        return filterVal === "ALL" || x.toLowerCase().includes(filterVal.toLowerCase());
    });
    var histLog = document.getElementById("historyLogContainer");
    if (histLog) {
        histLog.innerHTML = logs.map(function(item) {
            return '<div style="padding:7px 10px; border-bottom:1px solid var(--border-glass); font-size:0.79rem;">• ' + item + '</div>';
        }).join("");
    }
}

function resolveActiveEvent(optIdx) {
    if (!isPlayerInGovernment()) {
        showToast("Vendimet ekzekutive janë vetëm për Qeverinë në detyrë.");
        return;
    }
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

/* ============================================================================
   22. RENDER INBOX KM
   ============================================================================ */

function renderPMInboxSection() {
    var container = document.getElementById("pmInboxListContainer");
    if (!container) return;

    if (!isPlayerInGovernment()) {
        container.innerHTML = '<div style="background:#0f172a; padding:14px; border-radius:8px; font-size:0.82rem; color:var(--text-muted);">' +
            'Ju jeni në opozitë ose tranzicion. Kërkesat e Kryeministrit dhe detyrat ekzekutive nuk janë në juridiksionin tuaj. ' +
            'Mund të ushtroni kontroll parlamentar përmes mocioneve dhe interpelancave në tab-in "Kuvendi".</div>';
        return;
    }

    var list = state.pmInboxRequests || [];
    if (list.length === 0) {
        container.innerHTML = '<div style="background:#0f172a; padding:14px; border-radius:8px; font-size:0.82rem; color:var(--text-muted);">Nuk ka kërkesa në tavolinën e Kryeministrit. Klikoni butonin lart për raportimet e reja.</div>';
        return;
    }

    container.innerHTML = list.map(function(req, idx) {
        var isPending = req.status === "PENDING";
        var borderCol = isPending ? (req.urgency === "E LARTË" ? "var(--danger)" : "var(--accent-gold)") : (req.status === "COMPLETED" ? "var(--success)" : "#475569");
        var tagCls = req.status === "COMPLETED" ? "tag-min" : (req.status === "EXPIRED" ? "tag-sl" : (req.urgency === "E LARTË" ? "tag-lvv" : "tag-gold"));
        var statusTxt = req.status === "COMPLETED" ? "E PËRFUNDUAR" : (req.status === "EXPIRED" ? "E SKADUAR" : req.urgency);

        var actionHtml = "";
        if (isPending) {
            actionHtml = '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
                '<button class="action-btn btn-gold" onclick="openPMRequestModal(' + idx + ')">🗂️ Hap Kërkesën & Merr Vendim ▶</button>' +
                '<button class="action-btn btn-outline" onclick="postponePMRequest(' + idx + ')">⏳ Shtyj për 2 Javë (-0.4% Mbështetje)</button>' +
            '</div>';
        } else {
            actionHtml = '<div style="font-size:0.75rem; color:' + (req.status === "COMPLETED" ? 'var(--success)' : 'var(--danger)') + '; margin-bottom:8px;"><strong>Rezultati:</strong> ' + (req.outcomeMsg || "Nuk u mor asnjë vendim në kohë.") + '</div>' +
                '<button class="action-btn btn-outline" onclick="archivePMRequest(' + idx + ')">📁 Arkivo Detyrën</button>';
        }

        return '<div class="card" style="background:#0f172a; margin-bottom:10px; border-left:4px solid ' + borderCol + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:8px; margin-bottom:6px;">' +
                '<div>' +
                    '<span class="tag ' + tagCls + '">' + req.category + ' • ' + statusTxt + '</span>' +
                    '<h4 style="font-size:0.9rem; margin-top:5px;">' + req.title + '</h4>' +
                    '<div style="font-size:0.75rem; color:var(--accent-gold);">Dërguesi: <strong>' + req.senderName + '</strong> — ' + req.senderRole + '</div>' +
                '</div>' +
                (isPending ? '<span class="tag tag-pdk">Afati: ' + req.deadlineWeeks + ' javë</span>' : '') +
            '</div>' +
            (isPending ? '<p style="font-size:0.8rem; color:#cbd5e1; margin-bottom:6px;">' + req.desc + '</p><div style="font-size:0.74rem; color:var(--danger); margin-bottom:10px;">⚠️ ' + req.consequenceText + '</div>' : '') +
            actionHtml +
        '</div>';
    }).join("");
}

function openPMRequestModal(reqIdx) {
    if (!assertGovernmentAuthority("Shqyrtimi i kërkesave të Kryeministrit")) return;
    var req = state.pmInboxRequests[reqIdx];
    if (!req || req.status !== "PENDING") return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
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
    if (!assertGovernmentAuthority("Miratimi i kërkesave të Kryeministrit")) return;
    var req = state.pmInboxRequests[reqIdx];
    if (!req) return;
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

    req.status = "COMPLETED";
    req.outcomeMsg = opt.outcome;

    toggleModal("interactiveActionModal", false);
    addMediaNews("Kryeministria / RTK", "Kryeministri shqyrton kërkesën e " + req.senderName + ": " + opt.outcome, "POSITIVE");
    refreshAllUI();
    showToast("Vendimi u mor dhe detyra u shënua e përfunduar!");
}

function rejectPMRequest(reqIdx) {
    if (!assertGovernmentAuthority("Refuzimi i kërkesave të Kryeministrit")) return;
    var req = state.pmInboxRequests[reqIdx];
    if (!req) return;
    state.approval = clamp(state.approval - 1.5, 5, 95);
    req.status = "COMPLETED";
    req.outcomeMsg = "Kërkesa u refuzua zyrtarisht.";
    toggleModal("interactiveActionModal", false);
    addMediaNews("Gazeta Express", "Kryeministri refuzon kërkesën e " + req.senderName + " për \"" + req.title + "\".", "CRITICAL");
    refreshAllUI();
    showToast("Kërkesa u refuzua!");
}

function postponePMRequest(reqIdx) {
    if (!assertGovernmentAuthority("Shtyrja e kërkesave të Kryeministrit")) return;
    var req = state.pmInboxRequests[reqIdx];
    if (!req) return;
    req.deadlineWeeks += 2;
    state.approval = clamp(state.approval - 0.4, 5, 95);
    refreshAllUI();
    showToast("Shqyrtimi i kërkesës u shty për 2 javë.");
}

function archivePMRequest(idx) {
    if (!assertGovernmentAuthority("Arkivimi i kërkesave të Kryeministrit")) return;
    state.pmInboxRequests.splice(idx, 1);
    refreshAllUI();
}

function generateDynamicIncomingRequest(manualTrigger) {
    if (!isPlayerInGovernment() && manualTrigger) {
        showToast("Kërkesat e Kryeministrit janë vetëm për Qeverinë në detyrë.");
        return;
    }
    if (!isPlayerInGovernment()) return;
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
    pick.status = "PENDING";
    pick.outcomeMsg = "";
    state.pmInboxRequests.unshift(pick);
    if (manualTrigger) {
        refreshAllUI();
        showToast("Erdhi kërkesë e re zyrtare nga: " + pick.senderName + "!");
    }
}

/* ============================================================================
   23. KALENDARI I TAKIMEVE
   ============================================================================ */

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
        var isMissed = m.status === "MISSED";
        var isCompleted = m.status === "COMPLETED";
        var tagCls = isCompleted ? "tag-min" : (isMissed ? "tag-sl" : (isReady ? "tag-gold" : "tag-pdk"));
        var tagTxt = isCompleted ? "✔ I PËRFUNDUAR" : (isMissed ? "✕ I HUMBUR / SKADUAR" : (isReady ? "🔴 KOHA PËR TAKIM TANI" : ("Planifikuar për Javën #" + m.dueTurn + " (" + m.hour + ")")));
        var borderCol = isReady ? 'var(--accent-gold)' : (isCompleted ? 'var(--success)' : (isMissed ? 'var(--danger)' : 'var(--border-glass)'));

        var actionHtml = "";
        if (m.status === "SCHEDULED") {
            actionHtml = '<button class="action-btn ' + (isReady ? 'btn-gold' : '') + '" onclick="conductScheduledMeeting(' + idx + ')">' + (isReady ? '▶ Hyr në Takim Tani' : '⏩ Zhvillo para afatit') + '</button>';
        }

        return '<div class="card" style="background:#0f172a; margin-bottom:8px; border-color:' + borderCol + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
                '<div>' +
                    '<span class="tag ' + tagCls + '">' + tagTxt + '</span>' +
                    '<div style="font-size:0.88rem; font-weight:700; margin-top:4px;">🤝 Takim me: ' + m.targetName + '</div>' +
                    '<div style="font-size:0.74rem; color:var(--accent-gold);">' + m.category + '</div>' +
                    '<div style="font-size:0.75rem; color:var(--text-muted);">Tema: ' + m.topic + ' • Qëllimi: ' + m.goal + '</div>' +
                    (m.outcome ? '<div style="font-size:0.76rem; color:' + (isCompleted ? 'var(--success)' : 'var(--danger)') + '; margin-top:4px;">Rezultati: ' + m.outcome + '</div>' : '') +
                '</div>' +
                '<div>' + actionHtml + '</div>' +
            '</div>' +
        '</div>';
    }).join("");
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

function openScheduleMeetingModal(defaultCat, preselectedName) {
    if (!defaultCat) defaultCat = "PARTY_LEADERS";
    if (!preselectedName) preselectedName = "";
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📅 Cakto Takim Zyrtar — Zgjidh nga Databaza e Republikës së Kosovës</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="grid-2" style="margin-bottom:10px;">' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">1. Zgjidh Kategorinë:</label>' +
                '<select id="schedCat" style="width:100%;" onchange="populateInterlocutorDropdown()">' +
                    '<option value="INST_KOSOVO">🏛️ Udhëheqës Institucionalë (Presidenca, Kuvendi, FSK, BQK)</option>' +
                    '<option value="PARTY_LEADERS" ' + (defaultCat === "PARTY_LEADERS" ? "selected" : "") + '>🚩 Kryetarë & Përfaqësues të Partive</option>' +
                    '<option value="MINISTERS">💼 15 Ministrat & Zëvendëskryeministrat</option>' +
                    '<option value="MPS_120">👥 120 Deputetët e Kuvendit</option>' +
                    '<option value="MAYORS_38">📍 38 Kryetarët e Komunave</option>' +
                    '<option value="INTL_DIPLOMATS">🌍 Përfaqësues të SHBA, BE, Gjermanisë, NATO & Shqipërisë</option>' +
                    '<option value="CIVIL_ECON">🏭 Odat Ekonomike, Sindikatat & Shoqëria Civile</option>' +
                '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">2. Kërko:</label>' +
                '<input type="text" id="schedFilterInput" placeholder="Kërko emër, pozitë, parti..." style="width:100%;" oninput="populateInterlocutorDropdown()">' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">3. Zgjidh Personin:</label>' +
            '<select id="schedTargetSelect" style="width:100%;" onchange="updateSelectedInterlocutorInfo()"></select>' +
            '<div id="selectedInterlocutorMeta" style="font-size:0.75rem; color:var(--accent-gold); margin-top:5px;"></div>' +
        '</div>' +
        '<details style="margin-bottom:10px; background:#0f172a; padding:8px 10px; border-radius:8px; border:1px solid var(--border-glass);">' +
            '<summary style="font-size:0.74rem; color:var(--text-muted); cursor:pointer;">➕ Shto person të ri në databazë</summary>' +
            '<div style="display:flex; gap:6px; margin-top:8px; flex-wrap:wrap;">' +
                '<input type="text" id="newCustomInterName" placeholder="Emri dhe Mbiemri" style="flex:1;">' +
                '<input type="text" id="newCustomInterRole" placeholder="Pozita / Institucioni" style="flex:1;">' +
                '<button class="action-btn btn-success" onclick="addCustomInterlocutorToDB()">+ Shto</button>' +
            '</div>' +
        '</details>' +
        '<div class="grid-2" style="margin-bottom:10px;">' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">4. Koha:</label>' +
                '<select id="schedWeeksOffset" style="width:100%;">' +
                    '<option value="1">Java e Ardhshme (+1 Javë) — Ora 10:00</option>' +
                    '<option value="2">Pas 2 Javësh — Ora 14:00</option>' +
                    '<option value="0">Sot (Takim Urgjent — Ora 16:30)</option>' +
                '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">5. Tema:</label>' +
                '<select id="schedTopic" style="width:100%;">' +
                    '<option value="Koalicioni, Ndarja e Përgjegjësive dhe Votimi në Kuvend">Koalicioni & Votimi</option>' +
                    '<option value="Kuorumi dhe Konsensusi për Zgjedhjen e Presidentit">Kuorumi & Presidenti</option>' +
                    '<option value="Mbështetja për Projektligjet dhe Marrëveshjet Ndërkombëtare (80 vota)">Projektligjet & 80 vota</option>' +
                    '<option value="Koordinimi për Dialogun në Bruksel dhe Sigurinë në Veri">Brukseli & Siguria</option>' +
                    '<option value="Buxheti Sektorial dhe Projektet Kapitale Komunale">Buxheti & Komunat</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">6. Qëllimi:</label>' +
            '<input type="text" id="schedGoal" value="Arritja e marrëveshjes konkrete dhe koordinimi institucional" style="width:100%;">' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="confirmScheduleMeeting()">📌 Regjistro Takimin</button>';
    toggleModal("interactiveActionModal", true);
    window._preselectedInterlocutor = preselectedName;
    populateInterlocutorDropdown();
}

function populateInterlocutorDropdown() {
    var catEl = document.getElementById("schedCat");
    var filterEl = document.getElementById("schedFilterInput");
    var sel = document.getElementById("schedTargetSelect");
    if (!catEl || !sel) return;
    var cat = catEl.value;
    var filterTxt = (filterEl ? filterEl.value : "").toLowerCase();
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
    if (!sel || !sel.selectedOptions[0] || !meta) return;
    var opt = sel.selectedOptions[0];
    meta.innerHTML = '👤 <strong>' + opt.value + '</strong> • Pozita: ' + (opt.getAttribute("data-role") || '') + ' • Institucioni: ' + (opt.getAttribute("data-inst") || '') + ' • Marrëdhënia: <strong>' + (opt.getAttribute("data-rel") || 70) + '/100</strong>';
}

function addCustomInterlocutorToDB() {
    var catEl = document.getElementById("schedCat");
    var nameEl = document.getElementById("newCustomInterName");
    var roleEl = document.getElementById("newCustomInterRole");
    if (!catEl || !nameEl) return;
    var cat = catEl.value;
    var n = nameEl.value.trim();
    var r = roleEl ? (roleEl.value.trim() || "Përfaqësues Zyrtar") : "Përfaqësues Zyrtar";
    if (!n) { showToast("Shkruani emrin e personit!"); return; }
    if (!state.customInterlocutors) state.customInterlocutors = [];
    state.customInterlocutors.push({ cat: cat, name: n, role: r, inst: "I shtuar në databazë", rel: 70 });
    window._preselectedInterlocutor = n;
    populateInterlocutorDropdown();
    showToast(n + " u shtua në listën përzgjedhëse!");
}

function confirmScheduleMeeting() {
    var sel = document.getElementById("schedTargetSelect");
    if (!sel) return;
    var opt = sel.selectedOptions[0];
    var targetName = opt ? opt.value : "Përfaqësues Zyrtar";
    var categoryLabel = opt ? (opt.getAttribute("data-role") + " (" + opt.getAttribute("data-inst") + ")") : "Takim Zyrtar";
    var offsetEl = document.getElementById("schedWeeksOffset");
    var topicEl = document.getElementById("schedTopic");
    var goalEl = document.getElementById("schedGoal");
    var offset = parseInt(offsetEl ? offsetEl.value : "1", 10);
    var topic = topicEl ? topicEl.value : "Takim zyrtar";
    var goal = goalEl ? goalEl.value.trim() : "";

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
    if (!state.scheduledMeetings) state.scheduledMeetings = [];
    state.scheduledMeetings.unshift(newMeet);
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    if (offset === 0) {
        conductScheduledMeeting(0);
    } else {
        showToast("Ftesa për " + targetName + " u regjistrua! Takimi do të zhvillohet pas " + offset + " jave.");
    }
}

/* ============================================================================
   24. SKENA E TAKIMEVE DHE KOMUNIKIMET
   ============================================================================ */

function conductScheduledMeeting(meetIdx) {
    var m = state.scheduledMeetings[meetIdx];
    if (!m || m.status !== "SCHEDULED") return;
    openMeetingScene(meetIdx);
}

function openMeetingScene(meetIdx) {
    var m = state.scheduledMeetings[meetIdx];
    if (!m) return;
    var box = document.getElementById("meetingSceneModalContent");
    if (!box) return;

    var playerName = state.parties[state.playerParty].leader;
    var playerRole = getPlayerRoleLabel();

    box.innerHTML =
        '<div class="meeting-scene-visual">' +
            '<div class="meeting-scene-table"></div>' +
            '<div class="meeting-scene-participants">' +
                '<div class="meeting-participant meeting-participant-left">' +
                    '<div class="meeting-avatar">👤</div>' +
                    '<div class="meeting-participant-name">' + playerName + '</div>' +
                    '<div class="meeting-participant-role">' + playerRole + '</div>' +
                '</div>' +
                '<div class="meeting-vs-divider">VS</div>' +
                '<div class="meeting-participant meeting-participant-right">' +
                    '<div class="meeting-avatar">👔</div>' +
                    '<div class="meeting-participant-name">' + m.targetName + '</div>' +
                    '<div class="meeting-participant-role">' + m.category + '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="card-header">' +
            '<div class="card-title">🤝 Takim Zyrtar: ' + m.topic + '</div>' +
            '<span class="tag tag-gold">Ora ' + m.hour + '</span>' +
        '</div>' +
        '<div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;"><strong>Qëllimi:</strong> ' + m.goal + '</div>' +
        '<div id="meetingSceneTranscript" class="meeting-transcript">' +
            '<div class="chat-bubble chat-them"><strong>' + m.targetName + ':</strong> "Faleminderit për ftesën. Jemi këtu për të shqyrtuar \'' + m.topic + '\'. Cilat janë propozimet dhe garancitë tuaja konkrete?"</div>' +
        '</div>' +
        '<div style="margin-top:10px; margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); display:block; margin-bottom:4px;">Shkruaj qëndrimin ose propozimin tënd (opsionale):</label>' +
            '<input type="text" id="meetingSceneCustomMsg" placeholder="Mesazhi juaj..." style="width:100%;">' +
        '</div>' +
        '<div style="display:flex; flex-direction:column; gap:6px;">' +
            '<button class="choice-btn" onclick="finalizeMeetingScene(' + meetIdx + ', \'COMPROMISE\')">' +
                '<span class="choice-title">1. Ofro marrëveshje bashkëpunimi dhe grup të përbashkët pune</span>' +
                '<span class="choice-impact">+8 Besim politik, +5 Raport ndërpartiak / institucional</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="finalizeMeetingScene(' + meetIdx + ', \'BUDGET_PLEDGE\')">' +
                '<span class="choice-title">2. Mirato mbështetje buxhetore prej €18M</span>' +
                '<span class="choice-impact">+14 Besim, -€0.018 Mld Buxhet</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="finalizeMeetingScene(' + meetIdx + ', \'FIRM_LINE\')">' +
                '<span class="choice-title">3. Kërko mbështetje pa kushte në emër të interesit shtetëror</span>' +
                '<span class="choice-impact">+1.5% Popullaritet, por bashkëbiseduesi ruan rezervat</span>' +
            '</button>' +
            '<button class="action-btn btn-outline" style="margin-top:6px;" onclick="toggleModal(\'meetingSceneModal\', false)">Mbylle dhe zhvilloje më vonë</button>' +
        '</div>';
    toggleModal("meetingSceneModal", true);
    toggleModal("interactiveActionModal", false);
}

function finalizeMeetingScene(meetIdx, decisionCode) {
    var m = state.scheduledMeetings[meetIdx];
    if (!m) return;
    var customMsg = document.getElementById("meetingSceneCustomMsg") ? document.getElementById("meetingSceneCustomMsg").value.trim() : "";

    m.status = "COMPLETED";

    if (decisionCode === "COMPROMISE") {
        m.outcome = "U arrit dakordim dhe koordinim institucional me " + m.targetName + "." + (customMsg ? (" (\"" + customMsg + "\")") : "");
        state.approval = clamp(state.approval + 1.5, 5, 95);
        ["PDK", "LDK", "AAK", "MIN_MULTI"].forEach(function(k) {
            state.parties[state.playerParty].relations[k] = clamp((state.parties[state.playerParty].relations[k] || 50) + 5, 0, 100);
        });
    } else if (decisionCode === "BUDGET_PLEDGE") {
        if (!assertGovernmentAuthority("Premtimi buxhetor në takim")) {
            toggleModal("meetingSceneModal", false);
            return;
        }
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
    toggleModal("meetingSceneModal", false);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "TAKIM ZYRTAR — PËRFUNDOI",
        title: "Takimi me " + m.targetName,
        reason: "Tema: " + m.topic,
        immediateImpact: m.outcome
    });
}

/* ============================================================================
   25. KONFERENCA PËR MEDIA
   ============================================================================ */

function startPressConference() {
    if (!isPlayerInGovernment()) {
        showToast("Konferencat për media nga Kryeministria janë vetëm për Qeverinë në detyrë.");
        return;
    }
    var topicEl = document.getElementById("pressTopicSelect");
    var toneEl = document.getElementById("pressToneSelect");
    var partnerEl = document.getElementById("pressPartnerSelect");
    var topic = topicEl ? topicEl.value : "Temë e përgjithshme";
    var tone = toneEl ? toneEl.value : "INSTITUTIONAL";
    var partner = partnerEl ? partnerEl.value : "SOLO";

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
    if (!sess || !stage) { if (stage) stage.style.display = "none"; return; }
    stage.style.display = "block";

    var currQ = sess.questions[sess.step - 1];
    var transHtml = sess.transcript.length > 0
        ? '<div style="margin-bottom:10px; max-height:140px; overflow-y:auto; padding:8px; background:#090e1a; border-radius:8px; font-size:0.75rem;">' +
            sess.transcript.map(function(t) { return '<div style="margin-bottom:4px;"><strong>' + t.who + ':</strong> ' + t.text + '</div>'; }).join("") +
          '</div>'
        : "";

    stage.innerHTML =
        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">' +
            '<span style="font-size:0.78rem; color:var(--accent-gold); font-weight:700;">🔴 LIVE — PYETJA ' + sess.step + ' NGA ' + sess.maxSteps + '</span>' +
            '<button class="btn-top" onclick="finishFullPressConference()">Përfundo</button>' +
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
                '<span class="choice-title">2. Premto veprim konkret brenda 14 javëve</span>' +
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
    var freeTxtEl = document.getElementById("freePressAnswerInput");
    var freeTxt = freeTxtEl ? freeTxtEl.value.trim() : "";

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
    var stage = document.getElementById("pressLiveStage");
    if (stage) stage.style.display = "none";
    if (!sess) return;
    var fullReport = sess.transcript.map(function(t) { return t.who + ': "' + t.text + '"'; }).join(" | ");
    addMediaNews("KTV / T7 / RTK", "Përfundon konferenca për media me " + sess.step + " raunde pyetjesh mbi temën: " + sess.topic + ".", "POSITIVE", fullReport);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "KONFERENCË PËR MEDIA",
        title: "Përmbledhja Mediatike e Konferencës",
        reason: "U zhvilluan " + sess.step + " pyetje me gazetarët e akredituar.",
        immediateImpact: "Deklaratat dhe premtimet u pasqyruan në lajmet kryesore dhe në sondazhin e mbështetjes publike."
    });
}

function publishPressRelease() {
    if (!isPlayerInGovernment()) {
        showToast("Komunikatat zyrtare qeveritare janë vetëm për Qeverinë.");
        return;
    }
    var titleEl = document.getElementById("prTitle");
    var catEl = document.getElementById("prCategory");
    var title = titleEl ? titleEl.value.trim() : "";
    var category = catEl ? catEl.value : "Vendim Qeveritar";
    if (!title) {
        showToast("Ju lutem shkruani një titull për komunikatën zyrtare!");
        return;
    }
    state.approval = clamp(state.approval + 0.8, 5, 95);
    var fullBodyText = "Zyra për Komunikim e ka shpërndarë këtë njoftim tek të gjitha mediat vendore dhe ndërkombëtare. Qëndrimi i qartë institucional pritet të ndikojë në uljen e paqartësive rreth kësaj teme.";
    addMediaNews("Komunikatë Zyrtare", "[" + category + "] " + title, "POSITIVE", fullBodyText, "Opozita ka marrë shënim dhe mediat po analizojnë deklaratën e lëshuar.");
    if (titleEl) titleEl.value = "";
    refreshAllUI();
    showToast("Komunikata u publikua dhe u shpërnda te mediat!");
}

function issuePublicStatement() {
    var textEl = document.getElementById("psText");
    var text = textEl ? textEl.value.trim() : "";
    if (!text) {
        showToast("Ju lutem shkruani mesazhin e deklaratës suaj!");
        return;
    }
    state.approval = clamp(state.approval + 0.4, 5, 95);
    var myP = state.parties[state.playerParty];
    myP.internalCohesion = clamp(myP.internalCohesion + 1, 0, 100);
    addMediaNews("Deklaratë e Shpejtë", "Reagim: " + text.substring(0, 50) + (text.length > 50 ? "..." : ""), "NEUTRAL", text, "Qytetarët dhe mbështetësit po reagojnë në rrjetet sociale.");
    if (textEl) textEl.value = "";
    refreshAllUI();
    showToast("Deklarata juaj publike u lëshua me sukses!");
}

/* ============================================================================
   26. PREMTIMET
   ============================================================================ */

function renderPromisesList() {
    var container = document.getElementById("promisesListContainer");
    if (!container) return;
    var fulfilledCount = state.promises.filter(function(p) { return p.fulfilled; }).length;
    var score = Math.round(65 + (fulfilledCount * 10));
    var badge = document.getElementById("promiseScoreBadge");
    if (badge) badge.textContent = "Besueshmëria: " + Math.min(100, score) + "%";

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
    if (!assertGovernmentAuthority("Përmbushja e premtimeve qeveritare")) return;
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

/* VAZHDON në pjesën 5 */
/* ============================================================================
   27. SEKSIONI I PARTISË
   ============================================================================ */

function renderPartySection() {
    var p = state.parties[state.playerParty];
    var container = document.getElementById("partyDetailsContainer");
    if (!container) return;
    container.innerHTML =
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
                '<button class="action-btn" onclick="holdPartyCouncilMeeting()">Thirr mbledhjen e Këshillit (+Disiplinë)</button>' +
                '<button class="action-btn btn-gold" onclick="fundraisePartyDiaspora()">Tubim Financiar me Mërgatën (+€65,000 fonde partie)</button>' +
            '</div>' +
        '</div>';

    var cands = p.candidates;
    var femaleCount = cands.filter(function(c) { return c.gender === "F"; }).length;
    var femalePct = cands.length > 0 ? Math.round((femaleCount / cands.length) * 100) : 0;
    var quotaMet = femalePct >= INITIAL_POLITICAL_DB.constitutionalRules.genderQuotaMinPercent;

    var badgeEl = document.getElementById("listLegalBadge");
    if (badgeEl) {
        badgeEl.textContent = quotaMet ? ("✔ Kuota Gjinore " + femalePct + "% (E Ligjshme ≥30%)") : ("⚠ Kuota Gjinore " + femalePct + "% (Nën 30%!)");
        badgeEl.className = "tag " + (quotaMet ? "tag-min" : "tag-lvv");
    }

    var summaryEl = document.getElementById("electoralListSummary");
    if (summaryEl) {
        summaryEl.innerHTML =
            '<div style="background:#0f172a; padding:10px; border-radius:8px; font-size:0.8rem; display:flex; justify-content:space-between; flex-wrap:wrap; gap:8px;">' +
                '<span>Kandidatë kryesorë në listë: <strong>' + cands.length + '</strong></span>' +
                '<span>Përfaqësimi i grave: <strong>' + femaleCount + ' (' + femalePct + '%)</strong></span>' +
                '<span>Kohezioni i brendshëm partiak: <strong>' + p.internalCohesion + '%</strong></span>' +
            '</div>';
    }

    var activeCandsEl = document.getElementById("activeCandidatesList");
    if (activeCandsEl) {
        activeCandsEl.innerHTML = cands.map(function(c, idx) {
            return '<div style="background:#0f172a; border:1px solid var(--border-glass); border-radius:8px; padding:8px 10px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center; gap:6px;">' +
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
    }

    var reserveCandsEl = document.getElementById("reserveCandidatesList");
    if (reserveCandsEl) {
        reserveCandsEl.innerHTML = (p.reserves && p.reserves.length > 0)
            ? p.reserves.map(function(r, rIdx) {
                return '<div style="background:#0f172a; border:1px solid var(--border-glass); border-radius:8px; padding:8px 10px; margin-bottom:6px; display:flex; justify-content:space-between; align-items:center;">' +
                    '<div>' +
                        '<div style="font-size:0.82rem; font-weight:700;">' + r.name + ' <span style="font-size:0.7rem; color:var(--accent-gold);">(' + r.gender + ') • ' + r.region + '</span></div>' +
                        '<div style="font-size:0.72rem; color:var(--text-muted);">' + r.role + ' | Popullariteti: ' + r.pop + '</div>' +
                    '</div>' +
                    '<button class="action-btn btn-success" onclick="includeReserveCandidate(' + rIdx + ')">+ Shto në Listë</button>' +
                '</div>';
            }).join("")
            : '<div style="font-size:0.78rem; color:var(--text-muted);">Të gjithë kandidatët rezervë janë përfshirë në listë.</div>';
    }

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
    if (!p.reserves) p.reserves = [];
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
    var cand = p.reserves.splice(rIdx, 1)[0];
    p.candidates.push(cand);
    p.poll = clamp(p.poll + 0.5, 2, 85);
    refreshAllUI();
}

function holdPartyCouncilMeeting() {
    var p = state.parties[state.playerParty];
    p.partyDiscipline = clamp(p.partyDiscipline + 5, 40, 100);
    p.internalCohesion = clamp(p.internalCohesion + 5, 40, 100);
    state.mps.filter(function(m) { return m.party === state.playerParty; }).forEach(function(m) {
        m.loyalty = clamp(m.loyalty + 5, 40, 100);
        m.rebelRisk = m.loyalty < 82;
    });
    refreshAllUI();
    showToast("Këshilli i Përgjithshëm u mblodh! Disiplina e deputetëve u forcua.");
}

function fundraisePartyDiaspora() {
    state.parties[state.playerParty].partyFunds += 65000;
    refreshAllUI();
    showToast("U mblodhën €65,000 nga mërgata për fondin e partisë!");
}

/* ============================================================================
   28. NEGOCIATAT E KOALICIONIT
   ============================================================================ */

function renderCoalitionNegotiations() {
    var container = document.getElementById("coalitionNegotiationContainer");
    if (!container) return;
    var coalSeats = getCoalitionSeats();
    var badge = document.getElementById("coalitionTotalBadge");
    if (badge) badge.textContent = coalSeats + " / 120 Deputetë (" + (coalSeats >= 61 ? "Shumicë ✔" : ("Mungojnë " + (61 - coalSeats) + " vota")) + ")";

    var myParty = state.parties[state.playerParty];
    var isMandatar = (state.mandatar === state.playerParty);
    var mandatarParty = state.parties[state.mandatar];

    var negotiationList = [];
    if (isMandatar) {
        negotiationList = Object.values(state.parties).filter(function(p) { return p.id !== state.playerParty; });
    } else {
        negotiationList = [mandatarParty];
    }

    var canVote = isMandatar && state.assemblyConstituted && state.speakerElected && state.cabinetApproved;
    var headerHtml =
        '<div style="background:#0f172a; padding:12px; border-radius:8px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">' +
            '<div>' +
                '<div style="font-size:0.84rem; font-weight:700;">Statusi i Qeverisë: ' + (state.governmentFormed ? ('<span style="color:var(--success);">Qeveri në detyrë (' + state.primeMinister + ')</span>') : ('<span style="color:var(--warning);">Mandatari (' + mandatarParty.short + ') po kërkon 61+ vota</span>')) + '</div>' +
                '<div style="font-size:0.75rem; color:var(--text-muted);">Partnerët e konfirmuar: ' + state.coalitionParties.map(function(k) { return state.parties[k].short + " (" + state.parties[k].seats + ")"; }).join(" + ") + '</div>' +
            '</div>' +
            (isMandatar ?
                '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
                    '<button class="action-btn btn-outline" onclick="openCabinetSelectionModal()">💼 Zgjidh Kabinetin</button>' +
                    '<button class="action-btn btn-gold" onclick="formalizeGovernmentVote()" ' + (!canVote ? "disabled" : "") + '>🏛️ Voto Konstituimin e Qeverisë</button>' +
                '</div>'
                : '<span class="tag tag-pdk">Ti je në ' + (state.coalitionParties.includes(state.playerParty) ? 'Pozitë' : 'Opozitë') + '</span>'
            ) +
        '</div>' +
        (isMandatar && !state.cabinetApproved ? '<div style="background:rgba(245,158,11,0.12); padding:8px 10px; border-radius:6px; font-size:0.76rem; margin-bottom:10px; color:var(--warning);">⚠️ Duhet të konfirmoni kabinetin përpara se të mund të votoni Qeverinë.</div>' : '');

    var cardsHtml = negotiationList.map(function(p) {
        var inCoal = state.coalitionParties.includes(p.id);
        var rel = myParty.relations[p.id] || 40;
        var ministriesHeld = state.ministries.filter(function(m) { return m.party === p.id; }).length;
        var minDemand = p.seats >= 20 ? 4 : (p.seats >= 15 ? 3 : (p.seats >= 7 ? 2 : 1));

        var actionButtons = "";
        if (!inCoal) {
            if (isMandatar) {
                actionButtons = '<button class="action-btn btn-gold" onclick="openCoalitionRound1(\'' + p.id + '\')">🤝 Fto ' + p.short + ' në Qeveri</button>';
            } else {
                actionButtons = '<button class="action-btn btn-gold" onclick="openCoalitionRound1(\'' + p.id + '\')">🤝 Kërko t\'i bashkohesh Qeverisë</button>';
            }
        } else {
            if (isMandatar && state.governmentFormed) {
                actionButtons = '<button class="action-btn btn-danger" onclick="removePartnerFromCoalition(\'' + p.id + '\')">✕ Prish Koalicionin me ' + p.short + '</button>';
            } else if (!state.governmentFormed) {
                actionButtons = '<span class="tag tag-min">Marrëveshja e arritur</span>';
            }
        }

        return '<div class="card" style="background:#0f172a; margin-bottom:0; border-color:' + (inCoal ? 'var(--success)' : 'var(--border-glass)') + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                '<strong>' + p.short + ' (' + p.leader + ')</strong>' +
                '<span class="tag ' + p.tagClass + '">' + p.seats + ' Ulëse</span>' +
            '</div>' +
            '<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:10px;">' +
                'Raporti politik: <strong>' + rel + '/100</strong> • Ministri aktuale: <strong>' + ministriesHeld + '</strong><br>' +
                (isMandatar ? ('Kërkesa e ' + p.short + ': <strong>Të paktën ' + minDemand + ' ministri</strong><br>') : ('Synimi yt: <strong>Të sigurosh ministri nga ' + p.short + '</strong><br>')) +
                'Vija programore: ' + p.dialogueStance +
            '</div>' +
            '<div style="display:flex; gap:6px; flex-wrap:wrap;">' + actionButtons + '</div>' +
        '</div>';
    }).join("");

    container.innerHTML = headerHtml + '<div class="grid-2">' + cardsHtml + '</div>';
}

function openCoalitionRound1(targetPartyId) {
    var p = state.parties[targetPartyId];
    if (!p) return;
    var rel = state.parties[state.playerParty].relations[targetPartyId] || 40;
    var isMandatar = (state.mandatar === state.playerParty);
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;

    var roundTitle = isMandatar ? ('Ftesa Zyrtare për ' + p.name) : ('Kërkesë për hyrje në Qeverinë e ' + p.name);
    var contextText = isMandatar
        ? ('Zgjidhni kornizën e takimit me <strong>' + p.leader + ' (' + p.seats + ' deputetë)</strong>. Raporti aktual: <strong>' + rel + '/100</strong>.')
        : ('Nisni negociatat me Mandatarin <strong>' + p.leader + '</strong> për t\'u bërë pjesë e Qeverisë.');

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🤝 Raundi 1 / 3: ' + roundTitle + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">' + contextText + '</p>' +
        '<div class="grid-2" style="margin-bottom:12px;">' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">Vendi & Koha e Takimit:</label>' +
                '<select id="negMeetingTime" style="width:100%;">' +
                    '<option value="KUVEND_11">Selia e Kuvendit — Sot Ora 11:00</option>' +
                    '<option value="PARTY_HQ">Selia e Partisë — Nesër Ora 15:00</option>' +
                    '<option value="WORKING_DINNER">Darkë Pune Jopublike — Sonte Ora 20:00</option>' +
                '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.74rem; color:var(--text-muted); display:block; margin-bottom:4px;">Qasja Hapëse:</label>' +
                '<select id="negOpeningTone" style="width:100%;">' +
                    '<option value="PARTNERSHIP">Partneritet i barabartë</option>' +
                    '<option value="PROGRAMMATIC">Harmonizim programor</option>' +
                    '<option value="PRESIDENT_PACKAGE">Paketë e plotë institucionale</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="proceedCoalitionRound2(\'' + targetPartyId + '\')">Vazhdo në Raundin 2 ▶</button>';
    toggleModal("interactiveActionModal", true);
}

function proceedCoalitionRound2(targetPartyId) {
    var p = state.parties[targetPartyId];
    if (!p) return;
    var isMandatar = (state.mandatar === state.playerParty);
    var toneEl = document.getElementById("negOpeningTone");
    var tone = toneEl ? toneEl.value : "PARTNERSHIP";

    if ((targetPartyId === "SL" && state.playerParty === "LVV") || (state.mandatar === "LVV" && state.playerParty === "SL")) {
        document.getElementById("interactiveActionModalContent").innerHTML =
            '<div class="card-header"><div class="card-title">⛔ Refuzim Politik</div></div>' +
            '<p style="font-size:0.84rem; margin-bottom:12px;">LVV dhe Lista Serbe kanë vija të kuqe të papajtueshme për koalicion formal qeverisës.</p>' +
            '<button class="action-btn" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll</button>';
        return;
    }

    var referenceSeats = isMandatar ? p.seats : state.parties[state.playerParty].seats;
    var minDemand = referenceSeats >= 20 ? 4 : (referenceSeats >= 15 ? 3 : (referenceSeats >= 7 ? 2 : 1));
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;

    var minsCheckHtml = state.ministries.map(function(m, idx) {
        var isChecked = isMandatar ? (m.party === targetPartyId ? "checked" : "") : (m.party === state.playerParty ? "checked" : "");
        return '<label style="font-size:0.75rem; display:flex; align-items:center; gap:6px; background:rgba(255,255,255,0.03); padding:5px 8px; border-radius:6px; cursor:pointer;">' +
            '<input type="checkbox" class="neg-min-check" value="' + idx + '" ' + isChecked + '>' +
            '<span>' + m.name.replace("Ministria e ", "M. ") + '</span>' +
        '</label>';
    }).join("");

    var dialogueText = isMandatar
        ? ('<strong>' + p.leader + ' (' + p.short + '):</strong> "Jemi të gatshëm të japim ' + p.seats + ' votat tona për Qeverinë, por kërkojmë të paktën <strong>' + minDemand + ' ministri</strong>. Çfarë ofroni?"')
        : ('<strong>' + p.leader + ' (Mandatar):</strong> "Na duhen votat e tuaja (' + referenceSeats + ' deputetë). Për të hyrë në Qeveri, zgjidhni cilat ministri po i kërkoni."');

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🤝 Raundi 2 / 3: Tavolina e Ofertës me ' + p.short + '</div>' +
            '<span class="tag ' + p.tagClass + '">Fuqia: ' + referenceSeats + ' Deputetë</span>' +
        '</div>' +
        '<div class="chat-bubble chat-them">' + dialogueText + '</div>' +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; border:1px solid var(--border-glass); margin-bottom:12px;">' +
            '<div style="font-size:0.8rem; font-weight:700; color:var(--accent-gold); margin-bottom:8px;">' + (isMandatar ? '1. Zgjidh cilat Ministri po ia ofron:' : '1. Zgjidh cilat Ministri po kërkon:') + '</div>' +
            '<div class="grid-2" style="max-height:175px; overflow-y:auto; gap:6px; margin-bottom:10px;">' + minsCheckHtml + '</div>' +
            '<div style="font-size:0.8rem; font-weight:700; color:var(--accent-gold); margin-bottom:6px;">2. Pozita të Larta Kushtetuese & Programore:</div>' +
            '<div class="grid-2" style="gap:6px;">' +
                '<label style="font-size:0.76rem; display:flex; align-items:center; gap:6px;"><input type="checkbox" id="negOfferDeputyPM" checked> Zëvendëskryeministri i Parë</label>' +
                '<label style="font-size:0.76rem; display:flex; align-items:center; gap:6px;"><input type="checkbox" id="negOfferSpeaker" ' + (tone === "PRESIDENT_PACKAGE" ? "checked" : "") + '> Kryetari i Kuvendit</label>' +
                '<label style="font-size:0.76rem; display:flex; align-items:center; gap:6px;"><input type="checkbox" id="negOfferPresConsensus" ' + (tone === "PRESIDENT_PACKAGE" ? "checked" : "") + '> Marrëveshje për Presidentin (80+)</label>' +
                '<label style="font-size:0.76rem; display:flex; align-items:center; gap:6px;"><input type="checkbox" id="negOfferProgramBudget" checked> Harmonizim i Buxhetit (€35M)</label>' +
            '</div>' +
        '</div>' +
        '<div id="negCounterFeedbackBox" style="margin-bottom:10px;"></div>' +
        '<div style="display:flex; gap:8px; flex-wrap:wrap; justify-content:space-between;">' +
            '<button class="action-btn btn-gold" onclick="evaluateCoalitionRound3(\'' + targetPartyId + '\')">Paraqit Ofertën (Raundi 3) ▶</button>' +
            '<button class="action-btn btn-danger" onclick="toggleModal(\'interactiveActionModal\', false)">Ndërprit Negociatat</button>' +
        '</div>';
}

function evaluateCoalitionRound3(targetPartyId) {
    var p = state.parties[targetPartyId];
    if (!p) return;
    var myP = state.parties[state.playerParty];
    var isMandatar = (state.mandatar === state.playerParty);
    var rel = myP.relations[targetPartyId] || 40;

    var checkedMins = Array.from(document.querySelectorAll(".neg-min-check:checked")).map(function(el) { return parseInt(el.value, 10); });
    var offerDepPMEl = document.getElementById("negOfferDeputyPM");
    var offerSpeakerEl = document.getElementById("negOfferSpeaker");
    var offerPresEl = document.getElementById("negOfferPresConsensus");
    var offerProgEl = document.getElementById("negOfferProgramBudget");
    var offerDepPM = offerDepPMEl ? offerDepPMEl.checked : false;
    var offerSpeaker = offerSpeakerEl ? offerSpeakerEl.checked : false;
    var offerPres = offerPresEl ? offerPresEl.checked : false;
    var offerProg = offerProgEl ? offerProgEl.checked : false;

    var referenceSeats = isMandatar ? p.seats : myP.seats;
    var minDemand = referenceSeats >= 20 ? 4 : (referenceSeats >= 15 ? 3 : (referenceSeats >= 7 ? 2 : 1));
    var offerScore = rel * 0.45 + checkedMins.length * 14 + (offerDepPM ? 10 : 0) + (offerSpeaker ? 20 : 0) + (offerPres ? 8 : 0) + (offerProg ? 12 : 0);
    var requiredScore = referenceSeats >= 20 ? 82 : (referenceSeats >= 15 ? 74 : (referenceSeats >= 7 ? 50 : 35));
    var fb = document.getElementById("negCounterFeedbackBox");
    if (!fb) return;

    if (checkedMins.length < minDemand && !offerSpeaker) {
        fb.innerHTML = '<div class="chat-bubble chat-them" style="border-left-color:var(--danger);"><strong>⚠️ KUNDËROFERTË NGA ' + p.short + ':</strong><br>"Kjo marrëveshje me vetëm <strong>' + checkedMins.length + ' ministri</strong> nuk përputhet me peshën prej <strong>' + referenceSeats + ' deputetësh</strong>! Kërkojmë të paktën <strong>' + minDemand + ' ministri</strong> OSE postin e <strong>Kryetarit të Kuvendit</strong>!"</div>';
        return;
    }

    if (offerScore >= requiredScore) {
        if (!state.coalitionParties.includes(targetPartyId)) state.coalitionParties.push(targetPartyId);
        if (!state.coalitionParties.includes(state.playerParty)) state.coalitionParties.push(state.playerParty);

        if (offerPres) {
            if (!state.quorumPledgedParties) state.quorumPledgedParties = [];
            if (!state.quorumPledgedParties.includes(targetPartyId)) state.quorumPledgedParties.push(targetPartyId);
            if (!state.quorumPledgedParties.includes(state.playerParty)) state.quorumPledgedParties.push(state.playerParty);
        }

        var receivingParty = isMandatar ? targetPartyId : state.playerParty;
        var receivingCands = state.parties[receivingParty].candidates;
        checkedMins.forEach(function(mIdx, i) {
            state.ministries[mIdx].party = receivingParty;
            var cand = receivingCands[i % receivingCands.length];
            state.ministries[mIdx].minister = cand ? cand.name : state.parties[receivingParty].leader;
        });

        if (offerSpeaker) state.speakerOfAssembly = state.parties[receivingParty].candidates[0].name + " (" + state.parties[receivingParty].short + ")";
        if (offerProg) state.budgetTotalB = +(state.budgetTotalB - 0.035).toFixed(2);

        myP.relations[targetPartyId] = clamp(rel + 18, 0, 100);
        state.coalitionAgreements.push({
            partner: targetPartyId,
            ministriesCount: checkedMins.length,
            deputyPM: offerDepPM,
            speaker: offerSpeaker,
            conditions: checkedMins.length + " Ministri" + (offerSpeaker ? " + Kryeparlamentari" : ""),
            honored: true
        });

        toggleModal("interactiveActionModal", false);
        addMediaNews("Klan Kosova / KOHA", "Nënshkruhet Marrëveshja e Koalicionit mes " + myP.short + " dhe " + p.short + " pas raundeve intensive!", "POSITIVE");
        refreshAllUI();
        showMajorAnnouncement({
            badge: "MARRËVESHJE KOALICIONI (RAUNDI 3)",
            title: "Arrihet Marrëveshja: " + myP.short + " & " + p.short,
            reason: "Ndarja e përgjegjësive u pranua. Subjekti mori " + checkedMins.length + " ministri" + (offerSpeaker ? " dhe Kryetarin e Kuvendit" : "") + ".",
            immediateImpact: "Shumica parlamentare e koalicionit rritet në " + getCoalitionSeats() + " / 120 deputetë."
        });
    } else {
        fb.innerHTML = '<div class="chat-bubble chat-them" style="border-left-color:var(--warning);"><strong>' + p.leader + ' (' + p.short + '):</strong> "Ende jemi larg marrëveshjes finale (Pikët: ' + Math.round(offerScore) + '/' + requiredScore + '). Shtoni edhe një ministri ose përfshini harmonizimin buxhetor."</div>';
    }
}

function removePartnerFromCoalition(targetPartyId) {
    state.coalitionParties = state.coalitionParties.filter(function(x) { return x !== targetPartyId; });
    state.quorumPledgedParties = (state.quorumPledgedParties || []).filter(function(x) { return x !== targetPartyId; });

    state.ministries.forEach(function(m) {
        if (m.party === targetPartyId) {
            m.party = "NONE";
            m.minister = "I/E paemëruar";
        }
    });

    addMediaNews("KOHA", state.parties[targetPartyId].short + " braktis koalicionin! Numrat ulen në " + getCoalitionSeats() + " vota.", "CRITICAL");
    refreshAllUI();
}

/* ============================================================================
   29. RENDER KUVENDI
   ============================================================================ */

function getBillStatusLabel(status) {
    var labels = {
        DRAFT: "📝 Draft",
        SUBMITTED: "📤 Dorëzuar",
        UNDER_REVIEW: "🔍 Në Shqyrtim",
        SCHEDULED: "📅 Caktuar për Seancë",
        PASSED: "✅ I Miratuar",
        FAILED: "❌ I Rrëzuar"
    };
    return labels[status] || status;
}

function getBillStatusTagClass(status) {
    var classes = {
        DRAFT: "tag-sl",
        SUBMITTED: "tag-pdk",
        UNDER_REVIEW: "tag-aak",
        SCHEDULED: "tag-gold",
        PASSED: "tag-min",
        FAILED: "tag-lvv"
    };
    return classes[status] || "tag-sl";
}

function getMajorityLabel(law) {
    if (!law) return "";
    if (law.majorityType === "INTL_80") return "2/3 (80/120 vota)";
    if (law.majorityType === "VITAL_DOUBLE") return "Shumicë e Dyfishtë (61+ & 14/20 Komunitetet)";
    return "Shumicë e Thjeshtë (61+ vota)";
}

function getMajorityBadgeClass(law) {
    if (!law) return "";
    if (law.majorityType === "INTL_80") return "two-thirds";
    if (law.majorityType === "VITAL_DOUBLE") return "vital";
    return "";
}

function renderAssemblySection() {
    var speakerEl = document.getElementById("speakerNameBadge");
    if (speakerEl) speakerEl.textContent = "Kryetar/e: " + state.speakerOfAssembly;

    var grid = document.getElementById("parliamentSeats");
    if (grid) {
        grid.innerHTML = state.mps.map(function(mp, idx) {
            var p = state.parties[mp.party];
            return '<div class="seat-dot ' + (mp.rebelRisk ? 'rebel' : '') + '" style="background:' + (p ? p.color : '#64748b') + ';" onclick="openMpProfile(' + idx + ')" title="#' + mp.seatNumber + ' ' + mp.name + ' (' + (p ? p.short : '') + ')"></div>';
        }).join("");
    }

    var legend = document.getElementById("parliamentLegend");
    if (legend) {
        legend.innerHTML = Object.values(state.parties).map(function(p) {
            return '<div class="legend-item"><div class="legend-color" style="background:' + p.color + ';"></div><span>' + p.short + ': <strong>' + p.seats + '</strong></span></div>';
        }).join("");
    }

    var summaryEl = document.getElementById("parliamentCompositionSummary");
    if (summaryEl) {
        var govSeats = getCoalitionSeats();
        var oppSeats = 120 - govSeats;
        var needSimple = govSeats >= 61 ? "✔ Shumica e thjeshtë" : ("Mungojnë " + (61 - govSeats) + " vota");
        var needTwoThirds = govSeats >= 80 ? "✔ Shumica 2/3" : ("Mungojnë " + (80 - govSeats) + " vota");

        summaryEl.innerHTML =
            '<div class="grid-3" style="margin-bottom:10px;">' +
                '<div class="card" style="background:#0f172a; margin-bottom:0; text-align:center;">' +
                    '<div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Pozita (Qeveria)</div>' +
                    '<div style="font-size:1.4rem; font-weight:900; color:var(--success);">' + govSeats + '</div>' +
                    '<div style="font-size:0.7rem; color:var(--text-muted);">' + state.coalitionParties.map(function(k) { return state.parties[k] ? state.parties[k].short : k; }).join(" + ") + '</div>' +
                '</div>' +
                '<div class="card" style="background:#0f172a; margin-bottom:0; text-align:center;">' +
                    '<div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Opozita</div>' +
                    '<div style="font-size:1.4rem; font-weight:900; color:var(--danger);">' + oppSeats + '</div>' +
                '</div>' +
                '<div class="card" style="background:#0f172a; margin-bottom:0; text-align:center;">' +
                    '<div style="font-size:0.7rem; color:var(--text-muted); text-transform:uppercase;">Totali</div>' +
                    '<div style="font-size:1.4rem; font-weight:900; color:#fff;">120</div>' +
                '</div>' +
            '</div>' +
            '<div style="background:#0f172a; padding:10px; border-radius:8px; font-size:0.78rem; line-height:1.6;">' +
                '<div>• <strong>Shumicë e thjeshtë (61 vota):</strong> <span style="color:' + (govSeats >= 61 ? 'var(--success)' : 'var(--danger)') + ';">' + needSimple + '</span></div>' +
                '<div>• <strong>Shumicë 2/3 (80 vota):</strong> <span style="color:' + (govSeats >= 80 ? 'var(--success)' : 'var(--danger)') + ';">' + needTwoThirds + '</span></div>' +
                '<div>• <strong>Shumicë e dyfishtë për ligje vitale:</strong> Kërkon mbështetje të MIN_MULTI</div>' +
            '</div>';
    }

    var groupsTable = document.getElementById("parliamentGroupsTable");
    if (groupsTable) {
        groupsTable.innerHTML =
            '<div class="table-responsive"><table class="data-table">' +
                '<thead><tr><th>Grupi</th><th>Kryetari</th><th>Ulëse</th><th>Kategoria</th><th>Statusi</th></tr></thead>' +
                '<tbody>' +
                    Object.values(state.parties).map(function(p) {
                        var inCoal = state.coalitionParties.includes(p.id);
                        var statusBadge = !state.governmentFormed ? '<span class="tag tag-warning">Në Negociata</span>' : (inCoal ? '<span class="tag tag-min">Pozitë</span>' : '<span class="tag tag-sl">Opozitë</span>');
                        return '<tr>' +
                            '<td data-label="Grupi"><strong>' + p.short + '</strong></td>' +
                            '<td data-label="Kryetari">' + p.leader + '</td>' +
                            '<td data-label="Ulëse"><strong>' + p.seats + '</strong></td>' +
                            '<td data-label="Kategoria">' + (p.community === "GENERAL" ? "100 Ulëset" : "20 të Garantuara") + '</td>' +
                            '<td data-label="Statusi">' + statusBadge + '</td>' +
                        '</tr>';
                    }).join("") +
                '</tbody>' +
            '</table></div>';
    }

    renderMPsDirectory();
    renderBillAgenda();
    renderParliamentarySessions();
    renderMotions();
    renderPresidentialSection();
    renderOppositionSection();
}

function renderMPsDirectory() {
    var container = document.getElementById("mpsDirectoryGrid");
    if (!container) return;
    var partyFilterEl = document.getElementById("mpFilterParty");
    var searchQEl = document.getElementById("mpSearchInput");
    var partyFilter = partyFilterEl ? partyFilterEl.value : "ALL";
    var searchQ = searchQEl ? searchQEl.value.toLowerCase() : "";

    var filtered = state.mps.filter(function(mp) {
        var matchP = (partyFilter === "ALL" || mp.party === partyFilter);
        var matchS = (!searchQ || mp.name.toLowerCase().includes(searchQ) || mp.region.toLowerCase().includes(searchQ));
        return matchP && matchS;
    });

    container.innerHTML = filtered.map(function(mp) {
        var realIdx = mp.seatNumber - 1;
        var p = state.parties[mp.party];
        return '<div class="card" style="background:#0f172a; margin-bottom:0; border-color:' + (mp.promisedVoteNext ? 'var(--success)' : 'var(--border-glass)') + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                '<strong style="font-size:0.84rem;">👤 #' + mp.seatNumber + ' ' + mp.name + '</strong>' +
                '<span class="tag ' + p.tagClass + '">' + p.short + '</span>' +
            '</div>' +
            '<div style="font-size:0.73rem; color:var(--text-muted); line-height:1.5; margin-bottom:8px;">' +
                '<div>• Statusi: <strong style="color:#fff;">' + mp.role + '</strong> (' + mp.region + ')</div>' +
                '<div>• Besnikëria: <strong>' + mp.loyalty + '%</strong> | Besimi: <strong>' + (mp.trustPlayer || 60) + '/100</strong></div>' +
                '<div>• ' + mp.stance + '</div>' +
            '</div>' +
            '<div style="display:flex; gap:6px;">' +
                '<button class="action-btn" style="flex:1; justify-content:center;" onclick="openMpProfile(' + realIdx + ')">💬 Profili</button>' +
                '<button class="btn-top" onclick="openScheduleMeetingModal(\'MPS_120\', \'' + mp.name.replace(/'/g, "") + '\')">📅</button>' +
            '</div>' +
        '</div>';
    }).join("");
}

function openMpProfile(mpIdx, chatStep, lastFeedback) {
    var mp = state.mps[mpIdx];
    if (!mp) return;
    var p = state.parties[mp.party];
    var box = document.getElementById("mpModalContent");
    if (!box) return;
    var vHist = (mp.votingHistory || ["Seanca Konstituive: Pjesëmarrës"]).slice(-3).join(" • ");
    var fbText = lastFeedback || ("Përshëndetje. Si deputet i Legjislaturës XI nga rajoni i " + mp.region + ", jam i gatshëm të diskutojmë për projektligjet dhe prioritetet e zonës sime.");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">👤 #' + mp.seatNumber + ': ' + mp.name + ' (' + p.short + ')</div>' +
            '<button class="btn-top" onclick="toggleModal(\'mpModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="grid-2" style="font-size:0.78rem; line-height:1.6; margin-bottom:10px; background:#0f172a; padding:10px; border-radius:8px;">' +
            '<div>' +
                '<div>• <strong>Grupi:</strong> <span class="tag ' + p.tagClass + '">' + p.short + '</span></div>' +
                '<div>• <strong>Rajoni:</strong> ' + mp.region + '</div>' +
                '<div>• <strong>Historiku:</strong> ' + vHist + '</div>' +
            '</div>' +
            '<div>' +
                '<div>• <strong>Besnikëria:</strong> ' + mp.loyalty + '%</div>' +
                '<div>• <strong>Raporti me Ju:</strong> <strong style="color:var(--accent-gold);">' + (mp.trustPlayer || 60) + '/100</strong></div>' +
                '<div>• <strong>Prioriteti:</strong> ' + mp.ambition + '</div>' +
            '</div>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + mp.name + ':</strong> "' + fbText + '"</div>' +
        '<div style="margin-bottom:10px;">' +
            '<div style="display:flex; gap:6px;">' +
                '<input type="text" id="mpCustomArgument" placeholder="Argumenti juaj..." style="flex:1;">' +
                '<button class="action-btn btn-gold" onclick="interactWithMP(' + mpIdx + ', \'CUSTOM_MSG\')">Dërgo ▶</button>' +
            '</div>' +
        '</div>' +
        '<div style="display:flex; flex-direction:column; gap:6px;">' +
            '<button class="choice-btn" onclick="interactWithMP(' + mpIdx + ', \'CONVINCE_LAW\')">' +
                '<span class="choice-title">1. Argumento rëndësinë shtetërore (kërko votë PRO)</span>' +
                '<span class="choice-impact">+10 Besim, siguron votën</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="interactWithMP(' + mpIdx + ', \'REGIONAL_GRANT\')">' +
                '<span class="choice-title">2. Premto grant €10M për rajonin ' + mp.region + '</span>' +
                '<span class="choice-impact">+16 Besnikëri, votë e garantuar (-€10M)</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="interactWithMP(' + mpIdx + ', \'MEDIATE_PARTY\')">' +
                '<span class="choice-title">3. Ndërmjetëso me ' + p.short + '</span>' +
                '<span class="choice-impact">+5 raport ndërpartiak</span>' +
            '</button>' +
        '</div>';
    toggleModal("mpModal", true);
}

function interactWithMP(mpIdx, actionType) {
    var mp = state.mps[mpIdx];
    if (!mp) return;
    var customTxtEl = document.getElementById("mpCustomArgument");
    var customTxt = customTxtEl ? customTxtEl.value.trim() : "";
    var reply = "";
    if (actionType === "CUSTOM_MSG" && customTxt) {
        mp.trustPlayer = clamp((mp.trustPlayer || 60) + 8, 0, 100);
        mp.promisedVoteNext = mp.trustPlayer >= 62;
        reply = "E vlerësoj mesazhin (\"" + customTxt + "\"). Do ta kem parasysh!";
    } else if (actionType === "CONVINCE_LAW") {
        mp.trustPlayer = clamp((mp.trustPlayer || 60) + 10, 0, 100);
        mp.loyalty = clamp(mp.loyalty + 6, 0, 100);
        mp.rebelRisk = false;
        mp.promisedVoteNext = true;
        reply = "Argumentet janë bindëse. Mund të llogarisni në votën time PRO!";
    } else if (actionType === "REGIONAL_GRANT") {
        if (!assertGovernmentAuthority("Grantet rajonale për deputetë")) return;
        state.budgetTotalB = +(state.budgetTotalB - 0.01).toFixed(2);
        mp.trustPlayer = clamp((mp.trustPlayer || 60) + 16, 0, 100);
        mp.loyalty = clamp(mp.loyalty + 12, 0, 100);
        mp.rebelRisk = false;
        mp.promisedVoteNext = true;
        reply = "Mbështetja €10M për " + mp.region + " është lajm i shkëlqyer. Vota ime është e garantuar!";
    } else {
        state.parties[state.playerParty].relations[mp.party] = clamp((state.parties[state.playerParty].relations[mp.party] || 50) + 5, 0, 100);
        reply = "Do të bisedoj me kryetarin e grupit (" + mp.party + ").";
    }
    mp.meetingHistory.push(MONTHS_SQ[state.monthIndex] + " " + state.year + ": " + actionType);
    refreshAllUI();
    openMpProfile(mpIdx, 2, reply);
}

function renderOppositionSection() {
    var container = document.getElementById("oppositionSectionContainer");
    if (!container) return;
    var oppSeats = 120 - getCoalitionSeats();
    container.innerHTML =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">⚡ Veprimtaria e Opozitës, Interpelancat & Mocioni i Mosbesimit</div>' +
                '<span class="tag tag-pdk">Vota të Opozitës: ' + oppSeats + ' / 120</span>' +
            '</div>' +
            '<div class="grid-2">' +
                '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                    '<h4 style="font-size:0.85rem; margin-bottom:8px; color:var(--accent-gold);">Mjetet e Kontrollit Parlamentar</h4>' +
                    '<button class="choice-btn" onclick="runParliamentaryInterpellation()">' +
                        '<span class="choice-title">Thirr Interpelancë Parlamentare për Ekzekutivin</span>' +
                        '<span class="choice-impact">Debat në Kuvend mbi punën e ministrive</span>' +
                    '</button>' +
                    '<button class="choice-btn" onclick="organizePublicProtest()">' +
                        '<span class="choice-title">Mobilizo Protestë Qytetare</span>' +
                        '<span class="choice-impact">Ndikon në sondazhet e partive</span>' +
                    '</button>' +
                '</div>' +
                '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                    '<h4 style="font-size:0.85rem; margin-bottom:8px; color:var(--danger);">Mocioni i Mosbesimit</h4>' +
                    '<button class="action-btn btn-danger" onclick="openMotionModal()">🗳️ Propozo Mocion Mosbesimi</button>' +
                '</div>' +
            '</div>' +
        '</div>';
}

function runParliamentaryInterpellation() {
    if (!assertAssemblyFunctional("Interpelanca parlamentare")) return;
    state.approval = clamp(state.approval + 1.2, 5, 95);
    addMediaNews("Kuvendi Live", "Seancë maratonë me interpelanca parlamentare mes Qeverisë dhe deputetëve të opozitës.", "NEUTRAL");
    refreshAllUI();
    showToast("Interpelanca parlamentare u zhvillua në Kuvend!");
}

function organizePublicProtest() {
    var p = state.parties[state.playerParty];
    p.poll = clamp(p.poll + 1.4, 2, 85);
    addMediaNews("T7", "Tubim masiv në Sheshin e Prishtinës i organizuar nga " + p.short + ".", "NEUTRAL");
    refreshAllUI();
    showToast("Tubimi në Prishtinë rriti mbështetjen e " + p.short + " në sondazhe me +1.4%!");
}

/* ============================================================================
   30. RENDER PROJEKTLIGJET
   ============================================================================ */

function renderBillAgenda() {
    var container = document.getElementById("billAgendaContainer");
    if (!container) return;
    var filterEl = document.getElementById("billStatusFilter");
    var filter = filterEl ? filterEl.value : "ALL";

    var filtered = state.laws.filter(function(l) {
        return filter === "ALL" || l.status === filter;
    });

    if (filtered.length === 0) {
        container.innerHTML = '<div style="padding:14px; background:#0f172a; border-radius:8px; font-size:0.8rem; color:var(--text-muted);">Nuk ka projektligje me këtë status. Klikoni "+ Propozo Projektligj të Ri" për të zgjedhur nga katalogu.</div>';
        return;
    }

    var groups = { DRAFT: [], SUBMITTED: [], UNDER_REVIEW: [], SCHEDULED: [], PASSED: [], FAILED: [] };
    filtered.forEach(function(l) { if (groups[l.status]) groups[l.status].push(l); });

    var statusTitles = {
        DRAFT: "📝 Draftet (nuk janë dorëzuar)",
        SUBMITTED: "📤 Dorëzuar në Kuvend",
        UNDER_REVIEW: "🔍 Në Shqyrtim Parlamentar",
        SCHEDULED: "📅 Të Caktuara për Seancë",
        PASSED: "✅ Të Miratuara",
        FAILED: "❌ Të Rrëzuara"
    };

    var html = "";
    ["DRAFT", "SUBMITTED", "UNDER_REVIEW", "SCHEDULED", "PASSED", "FAILED"].forEach(function(stKey) {
        if (groups[stKey].length === 0) return;
        html += '<div style="margin-bottom:14px;">' +
            '<h4 style="font-size:0.85rem; color:var(--accent-gold); margin-bottom:6px;">' + statusTitles[stKey] + ' (' + groups[stKey].length + ')</h4>' +
            groups[stKey].map(function(law) {
                var realIdx = state.laws.indexOf(law);
                return renderBillCard(law, realIdx);
            }).join("") +
        '</div>';
    });

    container.innerHTML = html;
}

function renderBillCard(law, idx) {
    var tagCls = getBillStatusTagClass(law.status);
    var tagTxt = getBillStatusLabel(law.status);
    var majLabel = getMajorityLabel(law);
    var majCls = getMajorityBadgeClass(law);
    var costM = (law.costB * 1000).toFixed(0);
    var sectorName = "—";
    var sec = (state.stateSectors || []).find(function(s) { return s.id === law.sector; });
    if (sec) sectorName = sec.name;

    var assemblyOK = state.assemblyConstituted && state.speakerElected;

    var actionsHtml = "";
    if (law.status === "DRAFT") {
        actionsHtml = '<button class="action-btn btn-gold" onclick="submitBillToAssembly(' + idx + ')" ' + (!assemblyOK ? "disabled" : "") + '>📤 Dorëzo në Kuvend</button>' +
                     '<button class="action-btn btn-danger" onclick="deleteDraftBill(' + idx + ')">🗑️ Fshij Draftin</button>';
    } else if (law.status === "SUBMITTED") {
        actionsHtml = '<button class="action-btn btn-gold" onclick="sendBillToReview(' + idx + ')" ' + (!assemblyOK ? "disabled" : "") + '>🔍 Dërgo në Shqyrtim</button>';
    } else if (law.status === "UNDER_REVIEW") {
        actionsHtml = '<button class="action-btn btn-gold" onclick="scheduleBillForSession(' + idx + ')" ' + (!assemblyOK ? "disabled" : "") + '>📅 Cakto për Seancë</button>';
    } else if (law.status === "SCHEDULED") {
        actionsHtml = '<button class="action-btn btn-gold" onclick="voteLawInAssembly(' + idx + ')" ' + (!assemblyOK ? "disabled" : "") + '>🗳️ Voto në Seancë</button>' +
                     '<button class="action-btn btn-outline" onclick="unscheduleBill(' + idx + ')">↩ Hiq nga Seanca</button>';
    }

    var breakdownHtml = "";
    if (law.voteHistory && law.voteHistory.length > 0) {
        var lastVote = law.voteHistory[law.voteHistory.length - 1];
        breakdownHtml = '<div style="margin-top:6px; padding:6px 8px; background:rgba(255,255,255,0.03); border-radius:6px; font-size:0.73rem;">' +
            '<strong>Votimi i fundit (Java ' + lastVote.week + '):</strong> ' +
            '<span style="color:var(--success);">🟢 ' + lastVote.pro + '</span> | ' +
            '<span style="color:var(--danger);">🔴 ' + lastVote.kunder + '</span> | ' +
            '<span style="color:#94a3b8;">⚪ ' + lastVote.abstenim + '</span> | ' +
            '<span style="color:#475569;">⚫ ' + lastVote.mungese + '</span>' +
        '</div>';
    }

    var historyHtml = (law.stageHistory || []).map(function(h) {
        return '<span style="font-size:0.68rem; background:rgba(255,255,255,0.06); padding:2px 6px; border-radius:4px; margin-right:4px; display:inline-block; margin-bottom:2px;">' + getBillStatusLabel(h.stage).split(" ")[0] + ' (J' + h.week + ')</span>';
    }).join("");

    var sourceHtml = law.source ? '<div style="font-size:0.68rem; color:var(--text-muted); margin-top:3px; font-style:italic;">📚 ' + law.source + '</div>' : '';

    return '<div class="card" style="background:#0f172a; margin-bottom:10px; border-left:4px solid ' +
            (law.status === "PASSED" ? 'var(--success)' : (law.status === "FAILED" ? 'var(--danger)' : (law.status === "SCHEDULED" ? 'var(--accent-gold)' : (law.status === "DRAFT" ? '#64748b' : 'var(--accent-blue)')))) + ';">' +
        '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:8px; margin-bottom:6px; flex-wrap:wrap;">' +
            '<div style="flex:1; min-width:200px;">' +
                '<strong style="font-size:0.88rem;">' + law.title + '</strong>' +
                '<div style="font-size:0.72rem; color:var(--accent-gold); margin-top:3px;">📌 Propozues: ' + (law.proposer || law.ministry) + ' • Sektori: ' + sectorName + '</div>' +
                '<div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">' +
                    '<span class="majority-badge ' + majCls + '">' + majLabel + '</span> • Kosto: €' + costM + 'M' +
                '</div>' +
            '</div>' +
            '<span class="tag ' + tagCls + '">' + tagTxt + '</span>' +
        '</div>' +
        '<p style="font-size:0.79rem; color:var(--text-muted); margin-bottom:8px;">' + law.desc + '</p>' +
        sourceHtml +
        '<div style="font-size:0.74rem; color:#cbd5e1; margin-bottom:6px;">Grupet mbështetëse: <strong>' + (law.supportParties || []).join(", ") + '</strong>' +
            (law.lastVoteResult ? '<br>Rezultati: <strong style="color:var(--accent-gold);">' + law.lastVoteResult + '</strong>' : '') +
        '</div>' +
        '<div style="margin-bottom:6px;">' + historyHtml + '</div>' +
        breakdownHtml +
        (actionsHtml ? '<div style="display:flex; gap:6px; flex-wrap:wrap; margin-top:8px;">' + actionsHtml + '</div>' : '') +
    '</div>';
}

function openNewBillModal() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var fields = [];
    LAW_CATALOG.forEach(function(law) {
        if (fields.indexOf(law.field) === -1) fields.push(law.field);
    });

    var fieldOptions = fields.map(function(f) { return '<option value="' + f + '">' + f + '</option>'; }).join("");
    var lawCardsHtml = LAW_CATALOG.map(function(catLaw) {
        var costLabel = catLaw.defaultCostM > 0 ? ('€' + catLaw.defaultCostM + 'M') : (catLaw.defaultCostM < 0 ? ('+€' + Math.abs(catLaw.defaultCostM) + 'M të hyra') : 'Pa kosto');
        var impactLabel = catLaw.impactMagnitude > 0 ? ('+' + catLaw.impactMagnitude + '% mbështetje') : (catLaw.impactMagnitude + '% mbështetje');
        var typeLabel = catLaw.lawType === "VITAL" ? "Interes Vital" : (catLaw.lawType === "BUDGET" ? "Buxhetor" : "I Zakonshëm");
        return '<div class="card" style="background:#0f172a; margin-bottom:6px; padding:10px;" data-law-field="' + catLaw.field + '" data-law-type="' + catLaw.lawType + '">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:4px;">' +
                '<strong style="font-size:0.84rem; flex:1;">' + catLaw.title + '</strong>' +
                '<span class="tag ' + (catLaw.lawType === "VITAL" ? "tag-gold" : (catLaw.lawType === "BUDGET" ? "tag-pdk" : "tag-sl")) + '">' + typeLabel + '</span>' +
            '</div>' +
            '<div style="font-size:0.73rem; color:var(--text-muted); line-height:1.5; margin-bottom:6px;">' + catLaw.desc + '</div>' +
            '<div style="font-size:0.72rem; color:var(--accent-gold); margin-bottom:6px;">' +
                '📌 ' + catLaw.field + ' • ' + catLaw.ministry + ' • ' + costLabel + ' • ' + impactLabel + '<br>' +
                '<span style="color:var(--text-muted);">Burimi: ' + catLaw.source + '</span>' +
            '</div>' +
            '<div style="font-size:0.72rem; color:var(--danger); margin-bottom:8px;">⚠️ ' + catLaw.riskText + '</div>' +
            '<div style="display:flex; gap:6px;">' +
                '<button class="action-btn btn-gold" onclick="createBillFromCatalog(\'' + catLaw.id + '\', \'SUBMITTED\')">📤 Dorëzo në Kuvend</button>' +
                '<button class="action-btn btn-outline" onclick="createBillFromCatalog(\'' + catLaw.id + '\', \'DRAFT\')">💾 Ruaj si Draft</button>' +
            '</div>' +
        '</div>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📝 Katalogu i Projektligjeve</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;">Zgjidhni një projektligj nga katalogu. Ndikimi në mbështetje dhe kosto llogariten automatikisht. Katalogu përmban projekte historike realë (të verifikuar) dhe tema të simuluara.</p>' +
        '<div class="grid-2" style="margin-bottom:10px;">' +
            '<div>' +
                '<label style="font-size:0.73rem; color:var(--text-muted); display:block; margin-bottom:3px;">Filtro sipas fushës:</label>' +
                '<select id="lawCatFieldFilter" style="width:100%;" onchange="filterLawCatalog()">' +
                    '<option value="ALL">Të gjitha fushat</option>' + fieldOptions +
                '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.73rem; color:var(--text-muted); display:block; margin-bottom:3px;">Filtro sipas llojit:</label>' +
                '<select id="lawCatTypeFilter" style="width:100%;" onchange="filterLawCatalog()">' +
                    '<option value="ALL">Të gjitha llojet</option>' +
                    '<option value="ORDINARY">I Zakonshëm</option>' +
                    '<option value="BUDGET">Buxhetor</option>' +
                    '<option value="VITAL">Interes Vital</option>' +
                '</select>' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:8px;">' +
            '<input type="text" id="lawCatSearch" placeholder="Kërko me titull ose përshkrim..." style="width:100%;" oninput="filterLawCatalog()">' +
        '</div>' +
        '<div id="lawCatalogList" style="max-height:500px; overflow-y:auto;">' + lawCardsHtml + '</div>';
    toggleModal("interactiveActionModal", true);
}

function filterLawCatalog() {
    var fieldEl = document.getElementById("lawCatFieldFilter");
    var typeEl = document.getElementById("lawCatTypeFilter");
    var searchEl = document.getElementById("lawCatSearch");
    if (!fieldEl || !typeEl || !searchEl) return;
    var field = fieldEl.value;
    var type = typeEl.value;
    var search = (searchEl.value || "").toLowerCase();
    var cards = document.querySelectorAll("#lawCatalogList [data-law-field]");
    cards.forEach(function(card) {
        var matchField = (field === "ALL" || card.getAttribute("data-law-field") === field);
        var matchType = (type === "ALL" || card.getAttribute("data-law-type") === type);
        var matchSearch = (!search || card.textContent.toLowerCase().indexOf(search) !== -1);
        card.style.display = (matchField && matchType && matchSearch) ? "block" : "none";
    });
}

function createBillFromCatalog(catalogId, targetStatus) {
    if (!assertAssemblyFunctional("Dorëzimi i projektligjit")) return;
    var catLaw = LAW_CATALOG.find(function(l) { return l.id === catalogId; });
    if (!catLaw) { showToast("Projektligji nuk u gjet në katalog!"); return; }

    var isPlayerGov = isPlayerInGovernment();
    var proposerText = isPlayerGov ? ("Qeveria e Kosovës (" + catLaw.ministry + ")") : ("Deputetë të " + state.parties[state.playerParty].short);

    var impact = calculateLawImpact(catLaw);
    var cost = catLaw.defaultCostM;
    var majorityType = catLaw.lawType === "VITAL" ? "VITAL_DOUBLE" : (catLaw.lawType === "BUDGET" ? "BUDGET" : "SIMPLE_61");
    var requiredVotes = majorityType === "VITAL_DOUBLE" ? 61 : (catLaw.lawType === "BUDGET" ? 61 : 61);

    var dup = state.laws.find(function(l) {
        return l.catalogId === catLaw.id && l.status !== "FAILED" && l.status !== "PASSED";
    });
    if (dup) {
        showToast("Ky projektligj është tashmë në agjendë!");
        return;
    }

    state.billCounter = (state.billCounter || 0) + 1;
    var newBill = {
        id: "law_cat_" + Date.now() + "_" + state.billCounter,
        catalogId: catLaw.id,
        title: catLaw.title,
        ministry: catLaw.ministry,
        proposer: proposerText,
        sector: catLaw.sectorId,
        desc: catLaw.desc,
        field: catLaw.field,
        source: catLaw.source,
        historicNote: catLaw.historicNote || null,
        majorityType: majorityType,
        requiredVotes: requiredVotes,
        costB: +(cost / 1000).toFixed(3),
        approvalEffect: impact.approvalEffect,
        impactExplanation: impact.explanation,
        supportParties: [state.playerParty],
        stage: targetStatus === "DRAFT" ? "Draft i Papërpunuar" : "Dorëzuar në Kuvend",
        status: targetStatus,
        submittedWeek: targetStatus === "SUBMITTED" ? state.turnCount : null,
        scheduledWeek: null,
        applied: false,
        voteHistory: [],
        stageHistory: [{ stage: targetStatus, week: state.turnCount }],
        lastVoteResult: null
    };

    state.laws.unshift(newBill);
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "PROJEKTLIGJ " + (targetStatus === "DRAFT" ? "I RUAJTUR SI DRAFT" : "I DORËZUAR"),
        title: catLaw.title,
        reason: "Propozues: " + proposerText + ". Fusha: " + catLaw.field + ".",
        statsHtml: '<div style="text-align:center; font-size:0.86rem;">' +
            '<div>Kosto: <strong style="color:var(--accent-gold);">€' + cost + 'M</strong></div>' +
            '<div>Ndikimi i pritshëm: <strong style="color:' + (impact.approvalEffect >= 0 ? 'var(--success)' : 'var(--danger)') + ';">' + (impact.approvalEffect >= 0 ? '+' : '') + impact.approvalEffect.toFixed(1) + '%</strong></div>' +
            '<div>Shumica e nevojshme: <strong>' + getMajorityLabel({ majorityType: majorityType }) + '</strong></div>' +
        '</div>',
        immediateImpact: impact.explanation
    });
}

function calculateLawImpact(catLaw) {
    var base = catLaw.impactMagnitude || 1.0;
    var econModifier = 1.0;
    if (catLaw.field === "Buxheti" && state.budgetTotalB < 3.0) econModifier = 0.7;
    if (catLaw.field === "Ekonomia" && state.gdpGrowth < 2.5) econModifier = 1.2;
    if (catLaw.field === "Buxheti" && state.inflation > 4) econModifier = 0.8;

    var politicalModifier = 1.0;
    var playerParty = state.parties[state.playerParty];
    if (catLaw.field === "Drejtësia" && playerParty.ideology.toLowerCase().includes("konservator")) politicalModifier = 0.9;
    if (catLaw.field === "Komunitetet" && !state.coalitionParties.includes("MIN_MULTI")) politicalModifier = 0.85;

    var finalImpact = base * econModifier * politicalModifier;
    finalImpact = clamp(finalImpact, -8, 8);

    var explanation = "Ndikimi u llogarit nga: " + base + "% bazë × " + econModifier.toFixed(2) + " (ekonomi) × " + politicalModifier.toFixed(2) + " (politikë) = " + finalImpact.toFixed(1) + "%.";

    return { approvalEffect: +finalImpact.toFixed(1), explanation: explanation };
}

function submitBillToAssembly(lawIdx) {
    if (!assertAssemblyFunctional("Dorëzimi i projektligjit")) return;
    var law = state.laws[lawIdx];
    if (!law || law.status !== "DRAFT") return;
    law.status = "SUBMITTED";
    law.stage = "Dorëzuar në Kuvend";
    law.submittedWeek = state.turnCount;
    law.stageHistory.push({ stage: "SUBMITTED", week: state.turnCount });
    addMediaNews("Kuvendi i Kosovës", "Projektligji \"" + law.title + "\" u dorëzua në Kuvend.", "NEUTRAL");
    state.historyLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + " [Kuvend]: Dorëzohet \"" + law.title + "\".");
    refreshAllUI();
    showToast("Projektligji u dorëzua!");
}

function deleteDraftBill(idx) {
    var law = state.laws[idx];
    if (!law || law.status !== "DRAFT") return;
    state.laws.splice(idx, 1);
    refreshAllUI();
    showToast("Drafti u fshi.");
}

function sendBillToReview(lawIdx) {
    if (!assertAssemblyFunctional("Dërgimi i projektligjit në shqyrtim")) return;
    var law = state.laws[lawIdx];
    if (!law || law.status !== "SUBMITTED") return;
    law.status = "UNDER_REVIEW";
    law.stage = "Në Shqyrtim në Komision";
    law.stageHistory.push({ stage: "UNDER_REVIEW", week: state.turnCount });
    refreshAllUI();
    showToast("Projektligji u dërgua për shqyrtim.");
}

function scheduleBillForSession(lawIdx) {
    if (!assertAssemblyFunctional("Caktimi i projektligjit për seancë")) return;
    var law = state.laws[lawIdx];
    if (!law || law.status !== "UNDER_REVIEW") return;
    law.status = "SCHEDULED";
    law.stage = "Caktuar për Seancë Plenare";
    law.scheduledWeek = state.turnCount;
    law.stageHistory.push({ stage: "SCHEDULED", week: state.turnCount });
    addMediaNews("Kuvendi i Kosovës", "Projektligji \"" + law.title + "\" u caktua për seancë plenare.", "POSITIVE");
    refreshAllUI();
    showToast("Projektligji u caktua për seancë!");
}

function unscheduleBill(idx) {
    var law = state.laws[idx];
    if (!law || law.status !== "SCHEDULED") return;
    law.status = "UNDER_REVIEW";
    law.stage = "Në Shqyrtim";
    law.scheduledWeek = null;
    law.stageHistory.push({ stage: "UNDER_REVIEW", week: state.turnCount });
    refreshAllUI();
    showToast("Projektligji u hoq nga seanca.");
}

function voteLawInAssembly(lawIdx) {
    if (!assertAssemblyFunctional("Votimi i projektligjit")) return;
    if (_voteInProgress) {
        showToast("Një votim është në zhvillim e sipër!");
        return;
    }
    var law = state.laws[lawIdx];
    if (!law) return;
    if (law.status === "PASSED" || law.status === "FAILED") {
        showToast("Ky projektligj është votuar tashmë.");
        return;
    }

    _voteInProgress = true;

    var pro = 0, kunder = 0, abstenim = 0, mungese = 0, minorityYes = 0;
    var neededVotes = law.requiredVotes || 61;
    var isGovBill = (law.proposer && law.proposer.indexOf("Qeveria") === 0);

    state.mps.forEach(function(mp) {
        if (!mp.votingHistory) mp.votingHistory = [];
        var partyInCoalition = state.coalitionParties.includes(mp.party);
        var partyInSupport = law.supportParties.includes(mp.party);
        var relToPlayer = (state.parties[state.playerParty].relations[mp.party] || 50);

        if (partyInCoalition) {
            if (isGovBill || partyInSupport) {
                var rebellionChance = (mp.rebelRisk && !mp.promisedVoteNext) ? (0.08 + Math.random() * 0.07) : 0.02;
                if (Math.random() < rebellionChance) {
                    if (Math.random() < 0.6) { abstenim++; mp.votingHistory.push(law.id + ": ABSTENIM"); }
                    else { mungese++; mp.votingHistory.push(law.id + ": MUNGON"); }
                } else {
                    pro++;
                    mp.votingHistory.push(law.id + ": PRO");
                    if (mp.party === "MIN_MULTI" || mp.party === "SL") minorityYes++;
                }
            } else {
                var supportChance = relToPlayer / 200 + (mp.trustPlayer || 60) / 400 + 0.15;
                if (Math.random() < supportChance) { pro++; mp.votingHistory.push(law.id + ": PRO"); }
                else if (Math.random() < 0.35) { abstenim++; mp.votingHistory.push(law.id + ": ABSTENIM"); }
                else { kunder++; mp.votingHistory.push(law.id + ": KUNDËR"); }
            }
        } else {
            if (mp.promisedVoteNext) {
                pro++;
                mp.votingHistory.push(law.id + ": PRO (premtuar)");
                mp.promisedVoteNext = false;
            } else if (partyInSupport && !isGovBill) {
                if (Math.random() < 0.65) { pro++; mp.votingHistory.push(law.id + ": PRO"); }
                else if (Math.random() < 0.5) { abstenim++; mp.votingHistory.push(law.id + ": ABSTENIM"); }
                else { kunder++; mp.votingHistory.push(law.id + ": KUNDËR"); }
            } else {
                if (Math.random() < 0.15) { mungese++; mp.votingHistory.push(law.id + ": MUNGON"); }
                else if (Math.random() < 0.10) { abstenim++; mp.votingHistory.push(law.id + ": ABSTENIM"); }
                else { kunder++; mp.votingHistory.push(law.id + ": KUNDËR"); }
            }
        }
    });

    var total = pro + kunder + abstenim + mungese;
    if (total < 120) { mungese += (120 - total); }
    else if (total > 120) {
        var excess = total - 120;
        if (mungese >= excess) mungese -= excess;
        else if (abstenim >= excess) abstenim -= excess;
        else if (kunder >= excess) kunder -= excess;
        else pro -= excess;
    }

    var passed = false;
    if (law.majorityType === "INTL_80") passed = (pro >= 80);
    else if (law.majorityType === "VITAL_DOUBLE") passed = (pro >= 61 && minorityYes >= 14);
    else passed = (pro >= 61);

    law.lastVoteResult = pro + " PËR, " + kunder + " KUNDËR, " + abstenim + " ABSTENIME, " + mungese + " MUNGESA" +
        (law.majorityType === "VITAL_DOUBLE" ? (" (Komunitetet: " + minorityYes + "/20)") : "");

    law.voteHistory = law.voteHistory || [];
    law.voteHistory.push({ week: state.turnCount, pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, passed: passed });

    var resHtml = passed
        ? '<span style="color:var(--success);">✅ LIGJI U MIRATUA ME ' + pro + ' VOTA PRO!</span>'
        : '<span style="color:var(--danger);">❌ LIGJI U RRËZUA (' + pro + ' PRO / ' + neededVotes + ' të nevojshme)</span>';

    var explanation = passed
        ? "Koalicioni (" + getCoalitionSeats() + " vota) dhe mbështetësit arritën shumicën e nevojshme."
        : "Munguan " + Math.max(0, neededVotes - pro) + " vota për të arritur shumicën.";

    startVotingAnimation("⚖️ Votimi i Projektligjit", law.title, {
        pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, resultHtml: resHtml
    }, function() {
        if (passed) {
            law.status = "PASSED";
            law.stage = "Dekretuar dhe publikuar";
            law.stageHistory.push({ stage: "PASSED", week: state.turnCount });
            if (!law.applied) {
                law.applied = true;
                applyLawEffects(law);
            }
            addMediaNews("Kuvendi Live", "Miratohet \"" + law.title + "\" me " + pro + " vota PËR!", "POSITIVE");
            state.historyLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + " [Kuvend]: Miratohet ligji \"" + law.title + "\" me " + pro + " vota.");
        } else {
            law.status = "FAILED";
            law.stage = "I Rrëzuar në Votim";
            law.stageHistory.push({ stage: "FAILED", week: state.turnCount });
            addMediaNews("KOHA", "Dështon \"" + law.title + "\" (" + law.lastVoteResult + ").", "CRITICAL");
            state.historyLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + " [Kuvend]: Rrëzohet ligji \"" + law.title + "\".");
        }

        _voteInProgress = false;
        refreshAllUI();
        showMajorAnnouncement({
            badge: passed ? "✔ LIGJ I MIRATUAR" : "✕ PROJEKTLIGJ I RRËZUAR",
            title: law.title,
            reason: "Shumica e nevojshme: " + neededVotes + " vota" + (law.majorityType === "VITAL_DOUBLE" ? " + 14 vota të komuniteteve" : "") + ". " + explanation,
            statsHtml: '<div style="text-align:center; font-size:0.95rem; font-weight:800;">🟢 PËR: ' + pro + ' &nbsp;|&nbsp; 🔴 KUNDËR: ' + kunder + ' &nbsp;|&nbsp; ⚪ ABSTENIM: ' + abstenim + ' &nbsp;|&nbsp; ⚫ MUNGESA: ' + mungese + '</div>',
            immediateImpact: passed
                ? ("Ligji u aplikua: mbështetja " + (law.approvalEffect >= 0 ? "+" : "") + law.approvalEffect + "%, buxheti €" + ((law.costB || 0) * 1000).toFixed(0) + "M.")
                : "Ligji nuk zbatohet. Mund të ripropozohet si draft i ri ose të lihet."
        });
    });
}

function applyLawEffects(law) {
    if (law.applied !== true) return;
    if (law.costB && law.costB !== 0) {
        state.budgetTotalB = +(state.budgetTotalB - law.costB).toFixed(3);
    }
    if (law.approvalEffect) {
        state.approval = clamp(state.approval + law.approvalEffect, 5, 95);
    }
    if (law.sector) {
        var sec = (state.stateSectors || []).find(function(s) { return s.id === law.sector; });
        if (sec) sec.score = clamp(sec.score + 8, 10, 100);
    }
}

/* ============================================================================
   31. VOTIMI ANIMACION
   ============================================================================ */

function startVotingAnimation(title, desc, voteData, onComplete) {
    var titleEl = document.getElementById("votingModalTitle");
    var descEl = document.getElementById("votingModalDesc");
    if (!titleEl) return;
    titleEl.innerHTML = title;
    if (descEl) descEl.innerHTML = desc;
    ["voteCountPro", "voteCountKunder", "voteCountAbstenim", "voteCountMungese"].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.textContent = "0";
    });
    var progTxt = document.getElementById("votingProgressText");
    if (progTxt) progTxt.textContent = "0 / 120";
    var progBar = document.getElementById("votingProgressBar");
    if (progBar) progBar.style.width = "0%";
    var resEl = document.getElementById("votingModalResult");
    if (resEl) resEl.innerHTML = "";
    var skipBtn = document.getElementById("votingSkipBtn");
    if (skipBtn) skipBtn.style.display = "inline-block";
    var proceedBtn = document.getElementById("votingProceedBtn");
    if (proceedBtn) proceedBtn.style.display = "none";

    toggleModal("votingModal", true);

    currentVotingData = {
        targetPro: voteData.pro,
        targetKunder: voteData.kunder,
        targetAbstenim: voteData.abstenim,
        targetMungese: voteData.mungese,
        currentPro: 0, currentKunder: 0, currentAbstenim: 0, currentMungese: 0,
        totalCounted: 0,
        onCompleteCallback: onComplete,
        finalResultHtml: voteData.resultHtml,
        completed: false
    };

    clearInterval(votingAnimInterval);
    votingAnimInterval = setInterval(animateVoteStep, 35);
}

function animateVoteStep() {
    var v = currentVotingData;
    if (!v || v.completed) return;
    if (v.totalCounted >= 120) {
        clearInterval(votingAnimInterval);
        showVotingResult();
        return;
    }
    var available = [];
    if (v.currentPro < v.targetPro) available.push("pro");
    if (v.currentKunder < v.targetKunder) available.push("kunder");
    if (v.currentAbstenim < v.targetAbstenim) available.push("abstenim");
    if (v.currentMungese < v.targetMungese) available.push("mungese");
    if (available.length > 0) {
        var pick = available[Math.floor(Math.random() * available.length)];
        if (pick === "pro") v.currentPro++;
        else if (pick === "kunder") v.currentKunder++;
        else if (pick === "abstenim") v.currentAbstenim++;
        else if (pick === "mungese") v.currentMungese++;
        v.totalCounted++;
        var elPro = document.getElementById("voteCountPro");
        var elKunder = document.getElementById("voteCountKunder");
        var elAbs = document.getElementById("voteCountAbstenim");
        var elMung = document.getElementById("voteCountMungese");
        if (elPro) elPro.textContent = v.currentPro;
        if (elKunder) elKunder.textContent = v.currentKunder;
        if (elAbs) elAbs.textContent = v.currentAbstenim;
        if (elMung) elMung.textContent = v.currentMungese;
        var progTxt = document.getElementById("votingProgressText");
        if (progTxt) progTxt.textContent = v.totalCounted + " / 120";
        var progBar = document.getElementById("votingProgressBar");
        if (progBar) progBar.style.width = Math.round((v.totalCounted / 120) * 100) + "%";
    } else {
        clearInterval(votingAnimInterval);
        showVotingResult();
    }
}

function skipVotingAnimation() {
    if (!currentVotingData || currentVotingData.completed) return;
    clearInterval(votingAnimInterval);
    var v = currentVotingData;
    v.currentPro = v.targetPro;
    v.currentKunder = v.targetKunder;
    v.currentAbstenim = v.targetAbstenim;
    v.currentMungese = v.targetMungese;
    v.totalCounted = 120;
    var elPro = document.getElementById("voteCountPro");
    var elKunder = document.getElementById("voteCountKunder");
    var elAbs = document.getElementById("voteCountAbstenim");
    var elMung = document.getElementById("voteCountMungese");
    if (elPro) elPro.textContent = v.currentPro;
    if (elKunder) elKunder.textContent = v.currentKunder;
    if (elAbs) elAbs.textContent = v.currentAbstenim;
    if (elMung) elMung.textContent = v.currentMungese;
    var progTxt = document.getElementById("votingProgressText");
    if (progTxt) progTxt.textContent = "120 / 120";
    var progBar = document.getElementById("votingProgressBar");
    if (progBar) progBar.style.width = "100%";
    showVotingResult();
}

function showVotingResult() {
    if (!currentVotingData) return;
    var skipBtn = document.getElementById("votingSkipBtn");
    if (skipBtn) skipBtn.style.display = "none";
    var proceedBtn = document.getElementById("votingProceedBtn");
    if (proceedBtn) proceedBtn.style.display = "inline-block";
    var resEl = document.getElementById("votingModalResult");
    if (resEl) resEl.innerHTML = currentVotingData.finalResultHtml;
}

function finishVotingProcess() {
    if (!currentVotingData) { toggleModal("votingModal", false); return; }
    if (currentVotingData.completed) return;
    currentVotingData.completed = true;
    var cb = currentVotingData.onCompleteCallback;
    toggleModal("votingModal", false);
    currentVotingData = null;
    if (cb) cb();
}

/* ============================================================================
   32. SEANCAT PARLAMENTARE
   ============================================================================ */

function openSessionSchedulerModal() {
    if (!assertAssemblyFunctional("Caktimi i seancës")) return;
    var eligibleBills = state.laws.filter(function(l) { return l.status === "SCHEDULED"; });
    if (eligibleBills.length === 0) {
        showToast("Nuk ka projektligje të gatshme për seancë.");
        return;
    }
    var checkboxes = eligibleBills.map(function(l) {
        var idx = state.laws.indexOf(l);
        return '<label style="font-size:0.76rem; display:flex; align-items:flex-start; gap:6px; background:rgba(255,255,255,0.03); padding:6px 8px; border-radius:6px; cursor:pointer; margin-bottom:4px;">' +
            '<input type="checkbox" class="session-bill-check" value="' + idx + '" checked>' +
            '<span><strong>' + l.title + '</strong><br><span style="color:var(--text-muted); font-size:0.7rem;">Shumica: ' + l.requiredVotes + ' vota • Kosto: €' + (l.costB * 1000).toFixed(0) + 'M</span></span>' +
        '</label>';
    }).join("");

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📅 Cakto Seancë të Re Parlamentare</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;">Zgjidhni projektligjet që do të jenë në agjendën e seancës.</p>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">Tema Kryesore:</label>' +
            '<input type="text" id="sessionTopic" value="Seancë Plenare e Kuvendit të Kosovës" style="width:100%;">' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">Projektligjet në Agjendë:</label>' +
            '<div style="max-height:220px; overflow-y:auto;">' + checkboxes + '</div>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="executeSessionScheduling()">▶ Nis Seancën Parlamentare</button>';
    toggleModal("interactiveActionModal", true);
}

function executeSessionScheduling() {
    if (!assertAssemblyFunctional("Mbajtja e seancës")) return;
    var checks = Array.from(document.querySelectorAll(".session-bill-check:checked"));
    if (checks.length === 0) {
        showToast("Zgjidhni të paktën një projektligj për seancën!");
        return;
    }
    var topicEl = document.getElementById("sessionTopic");
    var topic = topicEl ? (topicEl.value.trim() || "Seancë Plenare") : "Seancë Plenare";
    var billIndices = checks.map(function(c) { return parseInt(c.value, 10); });

    state.sessionCounter = (state.sessionCounter || 0) + 1;
    var session = {
        id: "sess_" + Date.now(),
        number: state.sessionCounter,
        topic: topic,
        week: state.turnCount,
        billIds: billIndices.map(function(i) { return state.laws[i].id; }),
        status: "SCHEDULED",
        results: []
    };
    if (!state.parliamentarySessions) state.parliamentarySessions = [];
    state.parliamentarySessions.unshift(session);

    toggleModal("interactiveActionModal", false);
    addMediaNews("Kuvendi i Kosovës", "Kryesia cakton seancën plenare nr. " + state.sessionCounter + " me " + billIndices.length + " pika të rendit të ditës.", "NEUTRAL");
    refreshAllUI();

    voteSessionItems(session.id, billIndices, 0);
}

function voteSessionItems(sessionId, billIndices, currentPos) {
    if (currentPos >= billIndices.length) {
        var sess = state.parliamentarySessions.find(function(s) { return s.id === sessionId; });
        if (sess) sess.status = "COMPLETED";
        _voteInProgress = false;
        refreshAllUI();
        showToast("Seanca plenare përfundoi!");
        return;
    }
    var lawIdx = billIndices[currentPos];
    var law = state.laws[lawIdx];
    if (!law || law.status === "PASSED" || law.status === "FAILED") {
        voteSessionItems(sessionId, billIndices, currentPos + 1);
        return;
    }

    var pro = 0, kunder = 0, abstenim = 0, mungese = 0, minorityYes = 0;
    var neededVotes = law.requiredVotes || 61;
    var isGovBill = (law.proposer && law.proposer.indexOf("Qeveria") === 0);

    state.mps.forEach(function(mp) {
        if (!mp.votingHistory) mp.votingHistory = [];
        var partyInCoalition = state.coalitionParties.includes(mp.party);
        var partyInSupport = law.supportParties.includes(mp.party);
        var relToPlayer = (state.parties[state.playerParty].relations[mp.party] || 50);

        if (partyInCoalition) {
            if (isGovBill || partyInSupport) {
                var rebellionChance = (mp.rebelRisk && !mp.promisedVoteNext) ? 0.10 : 0.02;
                if (Math.random() < rebellionChance) {
                    if (Math.random() < 0.6) abstenim++;
                    else mungese++;
                } else {
                    pro++;
                    if (mp.party === "MIN_MULTI" || mp.party === "SL") minorityYes++;
                }
            } else {
                var supportChance = relToPlayer / 200 + (mp.trustPlayer || 60) / 400 + 0.15;
                if (Math.random() < supportChance) pro++;
                else if (Math.random() < 0.35) abstenim++;
                else kunder++;
            }
        } else {
            if (mp.promisedVoteNext) { pro++; mp.promisedVoteNext = false; }
            else if (partyInSupport && !isGovBill) {
                if (Math.random() < 0.65) pro++;
                else if (Math.random() < 0.5) abstenim++;
                else kunder++;
            } else {
                if (Math.random() < 0.15) mungese++;
                else if (Math.random() < 0.10) abstenim++;
                else kunder++;
            }
        }
    });

    var total = pro + kunder + abstenim + mungese;
    if (total < 120) mungese += (120 - total);
    else if (total > 120) mungese = Math.max(0, mungese - (total - 120));

    var passed = false;
    if (law.majorityType === "INTL_80") passed = (pro >= 80);
    else if (law.majorityType === "VITAL_DOUBLE") passed = (pro >= 61 && minorityYes >= 14);
    else passed = (pro >= 61);

    law.lastVoteResult = pro + " PËR, " + kunder + " KUNDËR, " + abstenim + " ABSTENIME, " + mungese + " MUNGESA" + (law.majorityType === "VITAL_DOUBLE" ? (" (Komunitetet: " + minorityYes + "/20)") : "");
    law.voteHistory = law.voteHistory || [];
    law.voteHistory.push({ week: state.turnCount, pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, passed: passed });

    var resHtml = passed
        ? '<span style="color:var(--success);">✅ MIRATUAR ME ' + pro + ' VOTA</span>'
        : '<span style="color:var(--danger);">❌ RRËZUAR (' + pro + ' / ' + neededVotes + ')</span>';

    startVotingAnimation("⚖️ " + (currentPos + 1) + "/" + billIndices.length + " — Votimi", law.title, {
        pro: pro, kunder: kunder, abstenim: abstenim, mungese: mungese, resultHtml: resHtml
    }, function() {
        if (passed) {
            law.status = "PASSED";
            law.stage = "I dekretuar dhe publikuar";
            law.stageHistory.push({ stage: "PASSED", week: state.turnCount });
            if (!law.applied) { law.applied = true; applyLawEffects(law); }
            addMediaNews("Kuvendi Live", "Miratohet \"" + law.title + "\" me " + pro + " vota!", "POSITIVE");
        } else {
            law.status = "FAILED";
            law.stage = "I Rrëzuar në Votim";
            law.stageHistory.push({ stage: "FAILED", week: state.turnCount });
            addMediaNews("KOHA", "Dështon \"" + law.title + "\".", "CRITICAL");
        }
        var sess = state.parliamentarySessions.find(function(s) { return s.id === sessionId; });
        if (sess) {
            sess.results.push({ billId: law.id, title: law.title, status: law.status, resultText: law.lastVoteResult });
        }
        refreshAllUI();
        setTimeout(function() {
            voteSessionItems(sessionId, billIndices, currentPos + 1);
        }, 400);
    });
}

function renderParliamentarySessions() {
    var container = document.getElementById("parliamentSessionsContainer");
    if (!container) return;
    var sessions = state.parliamentarySessions || [];
    if (sessions.length === 0) {
        container.innerHTML = '<div style="padding:14px; background:#0f172a; border-radius:8px; font-size:0.8rem; color:var(--text-muted);">Nuk ka seanca të regjistruara.</div>';
        return;
    }

    container.innerHTML = sessions.map(function(sess) {
        var statusCls = sess.status === "COMPLETED" ? "tag-min" : "tag-gold";
        var statusTxt = sess.status === "COMPLETED" ? "✔ PËRFUNDUAR" : "📅 PLANIFIKUAR";
        var resultsHtml = (sess.results || []).map(function(r) {
            var rCls = r.status === "PASSED" ? "var(--success)" : (r.status === "FAILED" ? "var(--danger)" : "var(--text-muted)");
            return '<div style="font-size:0.75rem; padding:4px 8px; background:rgba(255,255,255,0.04); border-radius:4px; margin-bottom:3px;">' +
                '<strong style="color:' + rCls + ';">' + (r.status === "PASSED" ? "✅" : (r.status === "FAILED" ? "❌" : "📋")) + '</strong> ' + r.title +
                (r.resultText ? ' <span style="color:var(--text-muted);">(' + r.resultText + ')</span>' : '') + '</div>';
        }).join("");

        return '<div class="card" style="background:#0f172a; margin-bottom:8px; border-left:4px solid ' + (sess.status === "COMPLETED" ? 'var(--success)' : 'var(--accent-gold)') + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:6px;">' +
                '<div>' +
                    '<strong style="font-size:0.86rem;">🗓️ Seanca nr. ' + sess.number + ' — ' + sess.topic + '</strong>' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Java ' + sess.week + ' • ' + sess.billIds.length + ' pika</div>' +
                '</div>' +
                '<span class="tag ' + statusCls + '">' + statusTxt + '</span>' +
            '</div>' +
            (resultsHtml ? '<div style="margin-top:6px;">' + resultsHtml + '</div>' : '') +
        '</div>';
    }).join("");
}

function openExtraordinarySessionModal() {
    if (!assertAssemblyFunctional("Thirrja e seancës së jashtëzakonshme")) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var lawsOpts = state.laws.filter(function(l) {
        return l.status === "FAILED" || l.status === "SCHEDULED" || l.status === "UNDER_REVIEW";
    }).map(function(l) {
        var idx = state.laws.indexOf(l);
        return '<option value="' + idx + '">' + l.title + ' (' + getBillStatusLabel(l.status) + ')</option>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">⚡ Thirr Seancë të Jashtëzakonshme</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;">Seanca e jashtëzakonshme mund të thirret nga Qeveria ose 1/3 e deputetëve.</p>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">1. Arsyeja:</label>' +
            '<select id="extraSessReason" style="width:100%;">' +
                '<option value="Rishqyrtimi urgjent i Projektligjeve të Bllokuara">Rishqyrtimi urgjent</option>' +
                '<option value="Rezoluta për Sigurinë Kombëtare">Rezoluta për Sigurinë</option>' +
                '<option value="Ratifikimi i Marrëveshjeve Ndërkombëtare">Ratifikimi i Marrëveshjeve</option>' +
                '<option value="Pakoja Emergjente kundër Inflacionit">Pakoja Emergjente</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">2. Objekti:</label>' +
            '<select id="extraSessLawIdx" style="width:100%;">' +
                '<option value="-1">Rezolutë Parlamentare e Përbashkët</option>' + lawsOpts +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">3. Argumentimi:</label>' +
            '<input type="text" id="extraSessObjective" value="Interes i lartë shtetëror" style="width:100%;">' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="executeExtraordinarySession()">🏛️ Hap Seancën ▶</button>';
    toggleModal("interactiveActionModal", true);
}

function executeExtraordinarySession() {
    if (!assertAssemblyFunctional("Ekzekutimi i seancës së jashtëzakonshme")) return;
    var reasonEl = document.getElementById("extraSessReason");
    var lawIdxEl = document.getElementById("extraSessLawIdx");
    var objEl = document.getElementById("extraSessObjective");
    var reason = reasonEl ? reasonEl.value : "Seancë e jashtëzakonshme";
    var lawIdx = lawIdxEl ? parseInt(lawIdxEl.value, 10) : -1;
    var objText = objEl ? objEl.value.trim() : "";

    toggleModal("interactiveActionModal", false);

    if (lawIdx >= 0 && state.laws[lawIdx]) {
        var law = state.laws[lawIdx];
        if (law.status === "FAILED") {
            law.status = "SCHEDULED";
            law.stage = "Rikthyer në Seancë të Jashtëzakonshme";
            law.stageHistory.push({ stage: "SCHEDULED", week: state.turnCount });
        }
        state.sessionCounter = (state.sessionCounter || 0) + 1;
        if (!state.parliamentarySessions) state.parliamentarySessions = [];
        state.parliamentarySessions.unshift({
            id: "sess_extra_" + Date.now(),
            number: state.sessionCounter,
            topic: reason,
            week: state.turnCount,
            billIds: [law.id],
            status: "SCHEDULED",
            results: []
        });
        voteSessionItems(state.parliamentarySessions[0].id, [lawIdx], 0);
        return;
    }

    state.approval = clamp(state.approval + 2.2, 5, 95);
    state.sessionCounter = (state.sessionCounter || 0) + 1;
    if (!state.parliamentarySessions) state.parliamentarySessions = [];
    state.parliamentarySessions.unshift({
        id: "sess_extra_" + Date.now(),
        number: state.sessionCounter,
        topic: reason,
        week: state.turnCount,
        billIds: [],
        status: "COMPLETED",
        results: [{ title: "Rezolutë: " + reason, status: "PASSED", resultText: "U miratua me shumicë" }]
    });
    addMediaNews("Kuvendi Live", "Mbahet Seanca e Jashtëzakonshme për: " + reason + ".", "POSITIVE");
    refreshAllUI();
    showMajorAnnouncement({
        badge: "SEANCË E JASHTËZAKONSHME",
        title: reason,
        reason: "Objektivi: " + objText,
        immediateImpact: "Rezoluta u miratua (+2.2% mbështetje)."
    });
}

/* ============================================================================
   33. MOCIONET
   ============================================================================ */

function openMotionModal() {
    if (!assertAssemblyFunctional("Propozimi i mocionit")) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">⚡ Propozo Mocion</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">1. Lloji:</label>' +
            '<select id="motionType" style="width:100%;">' +
                '<option value="DEBATE">Mocion për Debat Parlamentar</option>' +
                '<option value="INQUIRY">Interpelancë</option>' +
                '<option value="NO_CONFIDENCE">Mocion Mosbesimi ndaj Qeverisë</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">2. Titulli:</label>' +
            '<input type="text" id="motionTitle" placeholder="p.sh. Mocion për rritjen e pensioneve" style="width:100%;">' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">3. Përshkrimi:</label>' +
            '<textarea id="motionDesc" rows="3" placeholder="Përshkruani arsyen dhe kërkesat..." style="width:100%;"></textarea>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="proposeMotion()">⚡ Regjistro Mocionin</button>';
    toggleModal("interactiveActionModal", true);
}

function proposeMotion() {
    if (!assertAssemblyFunctional("Propozimi i mocionit")) return;
    var typeEl = document.getElementById("motionType");
    var titleEl = document.getElementById("motionTitle");
    var descEl = document.getElementById("motionDesc");
    var type = typeEl ? typeEl.value : "DEBATE";
    var title = titleEl ? (titleEl.value || "").trim() : "";
    var desc = descEl ? (descEl.value || "").trim() : "";

    if (!title || title.length < 5) {
        showToast("Titulli i mocionit duhet të jetë të paktën 5 karaktere!");
        return;
    }

    var dup = state.motions.find(function(m) {
        return m.status === "PENDING" && m.title.toLowerCase() === title.toLowerCase();
    });
    if (dup) {
        showToast("Ekziston tashmë një mocion me këtë titull!");
        return;
    }

    state.motionCounter = (state.motionCounter || 0) + 1;
    var motion = {
        id: "mot_" + Date.now(),
        number: state.motionCounter,
        type: type,
        title: title,
        desc: desc,
        proposer: state.parties[state.playerParty].short,
        week: state.turnCount,
        status: "PENDING",
        result: null
    };
    if (!state.motions) state.motions = [];
    state.motions.unshift(motion);

    toggleModal("interactiveActionModal", false);

    if (type === "NO_CONFIDENCE") {
        voteNoConfidenceMotion(motion.id);
    } else if (type === "DEBATE" || type === "INQUIRY") {
        state.approval = clamp(state.approval + 1.0, 5, 95);
        if (!state.coalitionParties.includes(state.playerParty)) {
            state.parties[state.playerParty].poll = clamp(state.parties[state.playerParty].poll + 0.5, 2, 85);
        }
        motion.status = "DEBATED";
        motion.result = "Debati u zhvillua në Kuvend. Qeveria u thirr për llogaridhënie.";
        addMediaNews("Kuvendi Live", "Mocioni \"" + title + "\" u debatua në seancë plenare.", "NEUTRAL");
        refreshAllUI();
        showToast("Mocioni u debatua në Kuvend!");
    }
}

function renderMotions() {
    var container = document.getElementById("motionsContainer");
    if (!container) return;
    var motions = state.motions || [];
    if (motions.length === 0) {
        container.innerHTML = '<div style="padding:14px; background:#0f172a; border-radius:8px; font-size:0.8rem; color:var(--text-muted);">Nuk ka mocione të regjistruara.</div>';
        return;
    }
    container.innerHTML = motions.map(function(m) {
        var typeLabel = m.type === "NO_CONFIDENCE" ? "Mocion Mosbesimi" : (m.type === "INQUIRY" ? "Interpelancë" : "Mocion Debat");
        var statusCls = m.status === "PASSED" ? "tag-lvv" : (m.status === "FAILED" ? "tag-min" : (m.status === "DEBATED" ? "tag-gold" : "tag-pdk"));
        var statusTxt = m.status === "PASSED" ? "✔ MIRATUAR" : (m.status === "FAILED" ? "✕ RRËZUAR" : (m.status === "DEBATED" ? "💬 DEBATUAR" : "⏳ NË PRITJE"));
        return '<div class="card" style="background:#0f172a; margin-bottom:8px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:6px; margin-bottom:6px;">' +
                '<div>' +
                    '<span class="tag tag-gold" style="margin-right:6px;">' + typeLabel + '</span>' +
                    '<strong style="font-size:0.86rem;">' + m.title + '</strong>' +
                    '<div style="font-size:0.72rem; color:var(--text-muted); margin-top:2px;">Propozues: ' + m.proposer + ' • Java ' + m.week + '</div>' +
                '</div>' +
                '<span class="tag ' + statusCls + '">' + statusTxt + '</span>' +
            '</div>' +
            '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:6px;">' + (m.desc || "—") + '</p>' +
            (m.result ? '<div style="font-size:0.74rem; color:var(--accent-gold); padding:6px 8px; background:rgba(245,158,11,0.08); border-radius:6px;"><strong>Rezultati:</strong> ' + m.result + '</div>' : '') +
        '</div>';
    }).join("");
}

/* VAZHDON në pjesën 6 */
/* ============================================================================
   34. PRESIDENTI
   ============================================================================ */

function renderPresidentialSection() {
    var container = document.getElementById("presidentialSectionContainer");
    if (!container) return;
    var allCands = getAllPresCandidates();
    var cand = allCands[state.presidentialCandidateId] || allCands.cand_pula;

    var quorumSeats = (state.quorumPledgedParties || []).reduce(function(a, pId) { return a + (state.parties[pId] ? state.parties[pId].seats : 0); }, 0);
    var expectedYesSeats = state.mps.filter(function(mp) {
        var inQuorum = (state.quorumPledgedParties || []).includes(mp.party);
        var acceptsCand = cand.acceptParties.includes(mp.party) || mp.promisedVoteNext;
        return inQuorum && acceptsCand;
    }).length;

    var candOptions = Object.values(allCands).map(function(c) {
        return '<option value="' + c.id + '" ' + (c.id === state.presidentialCandidateId ? "selected" : "") + '>' + c.name + ' — ' + c.type + '</option>';
    }).join("");

    var negotiationActive = state.presidentialNegotiations !== null;
    var negHtml = '';
    if (negotiationActive) {
        negHtml = '<div style="background:rgba(245,158,11,0.12); padding:8px 10px; border-radius:6px; font-size:0.76rem; margin-bottom:10px;">🤝 <strong>Negociatë në vazhdim</strong> me ' + state.parties[state.presidentialNegotiations.partnerParty].short + ' — <button class="btn-top" style="margin-left:6px;" onclick="openPresidentialNegotiationModal(\'' + state.presidentialNegotiations.partnerParty + '\')">Vazhdo ▶</button></div>';
    }

    var availablePartners = Object.keys(state.parties).filter(function(k) {
        return k !== state.playerParty;
    });

    var partnerBtns = availablePartners.map(function(k) {
        var p = state.parties[k];
        var already = (state.quorumPledgedParties || []).includes(k);
        return '<button class="btn-top" style="' + (already ? 'opacity:0.6;' : '') + '" onclick="openPresidentialNegotiationModal(\'' + k + '\')">🤝 ' + p.short + '</button>';
    }).join("");

    var mandateInfo = "";
    if (state.presidentElected && state.presidentMandateStartYear) {
        mandateInfo = '<div style="font-size:0.74rem; color:var(--success); margin-top:4px;">Mandati: ' + state.presidentMandateStartYear + '–' + state.presidentMandateEndYear + '</div>';
    }

    container.innerHTML =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">🎖️ Zgjedhja e Presidentit të Republikës (Neni 86)</div>' +
                '<span class="tag ' + (state.presidentElected ? 'tag-min' : 'tag-lvv') + '">' +
                    (state.presidentElected ? ("Në Detyrë: " + state.presidentName) : ("Raundi " + state.presidentialRound + " / 3 • Afati: " + state.presidentialDeadlineWeeks + " javë")) +
                '</span>' +
            '</div>' +
            negHtml +
            '<div class="grid-2" style="margin-bottom:12px;">' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; border:1px solid var(--border-glass);">' +
                    '<label style="font-size:0.76rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:6px;">1. Kandidati për President/e:</label>' +
                    '<select style="width:100%; margin-bottom:8px;" onchange="changePresidentialCandidate(this.value)">' + candOptions + '</select>' +
                    '<div style="font-size:0.76rem; color:var(--text-muted); margin-bottom:10px;">' +
                        '• Pranueshmëria: <strong style="color:#fff;">' + cand.acceptParties.join(", ") + '</strong><br>' +
                        '• Partitë me kuorum: <strong style="color:var(--accent-gold);">' + (state.quorumPledgedParties || []).join(", ") + ' (' + quorumSeats + ' deputetë)</strong><br>' +
                        '• Vota PRO të parashikuara: <strong style="color:var(--success);">~' + expectedYesSeats + ' vota</strong>' +
                        mandateInfo +
                    '</div>' +
                    '<div style="border-top:1px solid var(--border-glass); padding-top:8px;">' +
                        '<label style="font-size:0.72rem; color:var(--text-muted); display:block; margin-bottom:4px;">➕ Propozo Kandidat të Ri:</label>' +
                        '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
                            '<input type="text" id="newPresCandName" placeholder="Emri..." style="flex:2;">' +
                            '<select id="newPresCandProfile" style="flex:1;">' +
                                '<option value="CONSENSUAL">Jopartiak</option>' +
                                '<option value="PARTISAN">Politik</option>' +
                            '</select>' +
                            '<button class="action-btn btn-success" onclick="addCustomPresidentialCandidate()">+ Shto</button>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; border:1px solid var(--border-glass);">' +
                    '<div style="font-size:0.76rem; color:var(--accent-gold); font-weight:700; margin-bottom:8px;">2. Veprimet:</div>' +
                    '<div style="display:flex; flex-direction:column; gap:7px;">' +
                        '<button class="action-btn btn-gold" onclick="runPresidentialVoteRound()">🗳️ Mbaj Votimin (Raundi ' + state.presidentialRound + ')</button>' +
                        (!state.presidentElected ? '<div style="font-size:0.72rem; color:var(--text-muted); margin-top:4px;">🤝 Negocio kuorumin ose votën PRO me partitë:</div>' + '<div style="display:flex; gap:4px; flex-wrap:wrap; margin-top:4px;">' + partnerBtns + '</div>' : '') +
                        (state.presidentElected ? '<button class="action-btn" onclick="openNewPresidentialProcedure()">🔄 Hap Procedurë të Re (Testim)</button>' : '') +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
}

function changePresidentialCandidate(candId) {
    state.presidentialCandidateId = candId;
    state.presidentialRound = 1;
    refreshAllUI();
}

function addCustomPresidentialCandidate() {
    var nameEl = document.getElementById("newPresCandName");
    var profEl = document.getElementById("newPresCandProfile");
    if (!nameEl) return;
    var nameInput = nameEl.value.trim();
    var prof = profEl ? profEl.value : "CONSENSUAL";
    if (!nameInput) { showToast("Shkruani emrin e kandidatit!"); return; }
    var newId = "cand_custom_" + Date.now();
    if (!state.customPresCandidates) state.customPresCandidates = {};
    state.customPresCandidates[newId] = {
        id: newId,
        name: nameInput,
        type: prof === "CONSENSUAL" ? "Kandidat Jopartiak" : "Kandidat Politik",
        acceptParties: prof === "CONSENSUAL" ? ["LVV", "PDK", "LDK", "AAK", "MIN_MULTI"] : [state.playerParty, "MIN_MULTI"],
        popBonus: 4.0
    };
    state.presidentialCandidateId = newId;
    state.presidentialRound = 1;
    refreshAllUI();
    showToast("Kandidati \"" + nameInput + "\" u shtua në listë!");
}

function openNewPresidentialProcedure() {
    state.presidentElected = false;
    state.presidentName = "Ushtrues/e Detyre — Seanca për Zgjedhjen e Presidentit";
    state.presidentialDeadlineWeeks = 8;
    state.presidentialRound = 1;
    state.quorumPledgedParties = state.coalitionParties.slice();
    refreshAllUI();
}

/* ============================================================================
   35. QEVERIA
   ============================================================================ */

function renderGovernmentSection() {
    var ministriesGrid = document.getElementById("ministriesGrid");
    if (ministriesGrid) {
        ministriesGrid.innerHTML = state.ministries.map(function(m, idx) {
            var p = state.parties[m.party] || { tagClass: 'tag-sl', short: 'Bosh' };
            return '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:6px;">' +
                    '<strong style="font-size:0.83rem;">' + m.name + '</strong>' +
                    '<span class="tag ' + p.tagClass + '">' + p.short + '</span>' +
                '</div>' +
                '<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px; line-height:1.5;">' +
                    '• Ministër/e: <strong style="color:#fff;">' + m.minister + '</strong><br>' +
                    '• Kompetenca: <strong>' + m.competence + '/100</strong> • Besnikëria: <strong>' + m.loyalty + '%</strong><br>' +
                    '• Dosja: <span style="color:var(--accent-gold);">' + (m.currentIssue || "Zbatimi i planit") + '</span>' +
                '</div>' +
                '<div style="display:flex; align-items:center; gap:8px; margin-bottom:8px;">' +
                    '<span style="font-size:0.73rem;">Buxheti: <strong>€' + m.budget + 'M</strong></span>' +
                    '<input type="range" min="30" max="950" step="5" value="' + m.budget + '" style="flex:1;" onchange="adjustMinistryBudget(' + idx + ', this.value)">' +
                '</div>' +
                '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
                    '<button class="action-btn btn-gold" onclick="openMinisterOneOnOneModal(' + idx + ')">🤝 Thirr Ministrin</button>' +
                    '<button class="btn-top" onclick="reshuffleMinister(' + idx + ', \'EXPERT\')">Ekspert</button>' +
                    '<button class="btn-top" onclick="reshuffleMinister(' + idx + ', \'PARTY\')">Kuadër Partie</button>' +
                '</div>' +
            '</div>';
        }).join("");
    }

    renderStateSectorsGrid();

    var cabAgenda = document.getElementById("cabinetAgendaContainer");
    if (cabAgenda) {
        cabAgenda.innerHTML = state.cabinetAgenda.map(function(item, idx) {
            var costM = (item.costB * 1000).toFixed(0);
            return '<div class="card" style="background:#0f172a; margin-bottom:10px;">' +
                '<div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:6px;">' +
                    '<div>' +
                        '<div style="font-size:0.88rem; font-weight:700;">Pika #' + (idx + 1) + ': ' + item.title + '</div>' +
                        '<div style="font-size:0.74rem; color:var(--accent-gold);">Propozues: ' + (item.ministerName || item.ministry) + ' • Kosto: €' + costM + 'M</div>' +
                    '</div>' +
                    (!item.done ? '<button class="action-btn btn-gold" onclick="openCabinetDebateModal(' + idx + ')">🗂️ Hap Diskutimin ▶</button>' : '<span class="tag tag-min">✔ Miratuar</span>') +
                '</div>' +
                '<div style="font-size:0.77rem; color:var(--text-muted);">' + item.note + '</div>' +
            '</div>';
        }).join("");
    }

    var macro = document.getElementById("macroEconomyContainer");
    if (macro) {
        macro.innerHTML =
            '<div class="card">' +
                '<div class="card-header"><div class="card-title">💶 Bilanci Makroekonomik</div></div>' +
                '<div class="grid-3" style="margin-bottom:14px;">' +
                    '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                        '<span class="stat-label">Buxheti</span>' +
                        '<div style="font-size:1.1rem; font-weight:800; color:var(--accent-gold);">€' + state.budgetTotalB.toFixed(2) + ' Mld</div>' +
                        '<small style="color:var(--text-muted);">ATK & Dogana: €' + state.taxRevenueB.toFixed(2) + ' Mld</small>' +
                    '</div>' +
                    '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                        '<span class="stat-label">BPV & Inflacioni</span>' +
                        '<div style="font-size:1.1rem; font-weight:800; color:var(--success);">+' + state.gdpGrowth + '% | ' + state.inflation + '%</div>' +
                        '<small style="color:var(--text-muted);">Papunësia: ' + state.unemployment + '%</small>' +
                    '</div>' +
                    '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                        '<span class="stat-label">Remitancat & Borxhi</span>' +
                        '<div style="font-size:1.1rem; font-weight:800; color:var(--ldk);">€' + state.remittancesB + ' Mld</div>' +
                        '<small style="color:var(--text-muted);">Borxhi: ' + state.publicDebtPct + '%</small>' +
                    '</div>' +
                '</div>' +
                '<div class="grid-2">' +
                    '<button class="choice-btn" onclick="applyFiscalPolicy(\'DIGITAL_ATK\')">' +
                        '<span class="choice-title">Digjitalizo ATK-në dhe Doganat</span>' +
                        '<span class="choice-impact">+€0.12 Mld të hyra</span>' +
                    '</button>' +
                    '<button class="choice-btn" onclick="applyFiscalPolicy(\'LOWER_VAT_FOOD\')">' +
                        '<span class="choice-title">Ul TVSH-në në 8% për Ushqimin</span>' +
                        '<span class="choice-impact">-0.6% Inflacion, +3.5% Popullaritet</span>' +
                    '</button>' +
                '</div>' +
            '</div>';
    }
}

function openMinisterOneOnOneModal(minIdx) {
    if (!assertGovernmentAuthority("Takimi me ministrin")) return;
    openMinisterChat(minIdx);
}

function openMinisterChat(minIdx) {
    var m = state.ministries[minIdx];
    if (!m) return;
    var chatKey = "minister_" + minIdx;
    if (!state.chatHistories) state.chatHistories = {};
    if (!state.chatHistories[chatKey]) state.chatHistories[chatKey] = [];

    var box = document.getElementById("chatModalContent");
    if (!box) return;
    var chatHtml = state.chatHistories[chatKey].map(function(msg) {
        var cls = msg.from === "player" ? "chat-you" : "chat-them";
        return '<div class="chat-bubble ' + cls + '">' + (msg.from === "player" ? "" : "<strong>" + m.minister + ":</strong> ") + msg.text + '</div>';
    }).join("");

    if (state.chatHistories[chatKey].length === 0) {
        chatHtml = '<div class="chat-bubble chat-them"><strong>' + m.minister + ':</strong> "Përshëndetje. Si mund t\'ju ndihmoj në lidhje me ' + m.name + '? Dosja aktuale: \'' + m.currentIssue + '\'."</div>';
        state.chatHistories[chatKey].push({ from: "minister", text: "Përshëndetje. Si mund t'ju ndihmoj në lidhje me " + m.name + "? Dosja aktuale: '" + m.currentIssue + "'." });
    }

    box.innerHTML =
        '<div class="chat-modal-header">' +
            '<div class="chat-modal-avatar">👔</div>' +
            '<div class="chat-modal-info">' +
                '<div class="chat-modal-name">' + m.minister + '</div>' +
                '<div class="chat-modal-role">' + m.name + '</div>' +
            '</div>' +
            '<button class="chat-modal-close" onclick="toggleModal(\'chatModal\', false)">✕</button>' +
        '</div>' +
        '<div class="chat-modal-body" id="chatModalBody">' + chatHtml + '</div>' +
        '<div class="chat-modal-input-area">' +
            '<input type="text" id="chatInputField" class="chat-input" placeholder="Shkruani mesazhin..." onkeypress="if(event.key===\'Enter\') submitMinisterChat(' + minIdx + ')">' +
            '<button class="chat-send-btn" onclick="submitMinisterChat(' + minIdx + ')">▶</button>' +
        '</div>' +
        '<div style="margin-top:8px; display:flex; flex-direction:column; gap:5px;">' +
            '<button class="choice-btn" onclick="ministerChatQuick(' + minIdx + ', \'REPORT\')">' +
                '<span class="choice-title">📊 Kërko Raport mbi Dosjen Aktuale</span>' +
                '<span class="choice-impact">Merr përditësim</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="ministerChatQuick(' + minIdx + ', \'BUDGET\')">' +
                '<span class="choice-title">💰 Diskuto Buxhetin</span>' +
                '<span class="choice-impact">Aktual: €' + m.budget + 'M</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="ministerChatQuick(' + minIdx + ', \'DECISION\')">' +
                '<span class="choice-title">⚖️ Kërko Vendim Ekzekutiv</span>' +
                '<span class="choice-impact">Hap mundësinë për vendim</span>' +
            '</button>' +
        '</div>';
    toggleModal("chatModal", true);
    setTimeout(function() {
        var body = document.getElementById("chatModalBody");
        if (body) body.scrollTop = body.scrollHeight;
    }, 50);
}

function submitMinisterChat(minIdx) {
    var m = state.ministries[minIdx];
    var input = document.getElementById("chatInputField");
    if (!input || !m) return;
    var text = input.value.trim();
    if (!text) return;
    var chatKey = "minister_" + minIdx;
    state.chatHistories[chatKey].push({ from: "player", text: text });

    var reply = "";
    var lower = text.toLowerCase();
    if (lower.indexOf("buxhet") !== -1) {
        reply = "Buxheti aktual i " + m.name + " është €" + m.budget + "M. Prioriteti: " + m.currentIssue + ".";
    } else if (lower.indexOf("raport") !== -1 || lower.indexOf("gjendje") !== -1) {
        reply = "Raport: Kompetenca " + m.competence + "/100, Besnikëria " + m.loyalty + "%. Rreziku: " + m.risk + "/100. Dosja: " + m.currentIssue + ".";
    } else if (lower.indexOf("vendim") !== -1 || lower.indexOf("aprovoj") !== -1) {
        reply = "Klikoni 'Kërko Vendim Ekzekutiv' për detaje.";
    } else if (lower.indexOf("përshëndetje") !== -1 || lower.indexOf("faleminderit") !== -1) {
        reply = "Gjithmonë në dispozicion, Kryeministër.";
    } else {
        reply = "E marr shënim për \"" + text.substring(0, 50) + (text.length > 50 ? "..." : "") + "\". Prioriteti: " + m.currentIssue + ".";
    }

    state.chatHistories[chatKey].push({ from: "minister", text: reply });
    input.value = "";
    openMinisterChat(minIdx);
}

function ministerChatQuick(minIdx, code) {
    var m = state.ministries[minIdx];
    if (!m) return;
    if (code === "REPORT") {
        var reply = "Raport: Kompetenca " + m.competence + "/100. Besnikëria " + m.loyalty + "%. Dosja: " + m.currentIssue + ".";
        if (!state.chatHistories["minister_" + minIdx]) state.chatHistories["minister_" + minIdx] = [];
        state.chatHistories["minister_" + minIdx].push({ from: "minister", text: reply });
        openMinisterChat(minIdx);
    } else if (code === "BUDGET") {
        toggleModal("chatModal", false);
        openBudgetAllocationModal();
    } else if (code === "DECISION") {
        toggleModal("chatModal", false);
        var box = document.getElementById("interactiveActionModalContent");
        if (!box) return;
        box.innerHTML =
            '<div class="card-header">' +
                '<div class="card-title">💼 Takim me ' + m.minister + '</div>' +
                '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
            '</div>' +
            '<div class="chat-bubble chat-them"><strong>' + m.minister + ':</strong> "Sfida kryesore: ' + (m.currentIssue || "investimet kapitale") + '. Kemi tri opsione."</div>' +
            '<div style="display:flex; flex-direction:column; gap:7px; margin-top:10px;">' +
                '<button class="choice-btn" onclick="resolveMinisterMeeting(' + minIdx + ', \'EXTRA_BUDGET\')">' +
                    '<span class="choice-title">1. Aprovo €15M buxhet shtesë</span>' +
                    '<span class="choice-impact">+6 Kompetencë, +1.8% (-€15M)</span>' +
                '</button>' +
                '<button class="choice-btn" onclick="resolveMinisterMeeting(' + minIdx + ', \'REPLACE_CONTRACTOR\')">' +
                    '<span class="choice-title">2. Auditim dhe zëvendësim operatorësh</span>' +
                    '<span class="choice-impact">-8% Rrezik, +4 Kompetencë</span>' +
                '</button>' +
                '<button class="choice-btn" onclick="resolveMinisterMeeting(' + minIdx + ', \'SEND_TO_CABINET\')">' +
                    '<span class="choice-title">3. Shtyje për Mbledhjen e Qeverisë</span>' +
                    '<span class="choice-impact">Vendim kolektiv</span>' +
                '</button>' +
            '</div>';
        toggleModal("interactiveActionModal", true);
    }
}

function resolveMinisterMeeting(minIdx, choice) {
    if (!assertGovernmentAuthority("Takimi me ministrin")) return;
    var m = state.ministries[minIdx];
    toggleModal("interactiveActionModal", false);
    if (choice === "EXTRA_BUDGET") {
        m.budget += 15;
        state.budgetTotalB = +(state.budgetTotalB - 0.015).toFixed(3);
        m.competence = clamp(m.competence + 6, 40, 100);
        m.loyalty = clamp(m.loyalty + 6, 40, 100);
        state.approval = clamp(state.approval + 1.8, 5, 95);
        addMediaNews("Kryeministria", "Kryeministri zhvilloi takim me " + m.minister + "; miratohen mjete shtesë.", "POSITIVE");
    } else if (choice === "REPLACE_CONTRACTOR") {
        m.risk = Math.max(2, m.risk - 8);
        m.competence = clamp(m.competence + 4, 40, 100);
        addMediaNews("Kallxo.com", "Auditim dhe masa të reja menaxheriale në " + m.name + ".", "POSITIVE");
    } else {
        state.cabinetAgenda.push({
            id: "cab_dyn_" + Date.now(),
            title: "Propozim-Vendim nga " + m.name + ": " + m.currentIssue,
            ministry: m.name,
            ministerName: m.minister,
            costB: 0.015,
            approvalGain: 2.2,
            done: false,
            note: "E përcjellë nga takimi dypalësh."
        });
    }
    refreshAllUI();
    showToast("Takimi me " + m.minister + " përfundoi me detyra konkrete!");
}

function openInternalGovMeetingModal(mode) {
    if (!assertGovernmentAuthority("Mbledhja e brendshme")) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var isDep = mode === "DEPUTY_PMS";
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">' + (isDep ? "🤝 Takim me Zëvendëskryeministrat" : "⚡ Mbledhje Ndërministrore") + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + (isDep ? "Zëvendëskryeministrat" : "Koordinatori") + ':</strong> "Ku ta përqendrojmë fokusin?"</div>' +
        '<div style="display:flex; flex-direction:column; gap:7px; margin-top:10px;">' +
            '<button class="choice-btn" onclick="resolveInternalGroupMeeting(\'EXECUTION_SPEED\')">' +
                '<span class="choice-title">1. Përshpejtim i projekteve</span>' +
                '<span class="choice-impact">+15% progres, +1.5% Mbështetje</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="resolveInternalGroupMeeting(\'COALITION_HARMONY\')">' +
                '<span class="choice-title">2. Koordinim me partitë</span>' +
                '<span class="choice-impact">+6 Disiplinë, +6 raport</span>' +
            '</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function resolveInternalGroupMeeting(code) {
    if (!assertGovernmentAuthority("Mbledhja e brendshme")) return;
    toggleModal("interactiveActionModal", false);
    if (code === "EXECUTION_SPEED") {
        (state.stateSectors || []).forEach(function(s) {
            if (s.active && s.weeksLeft > 0) s.weeksLeft = Math.max(1, s.weeksLeft - 1);
        });
        state.approval = clamp(state.approval + 1.5, 5, 95);
    } else {
        state.parties[state.playerParty].partyDiscipline = clamp(state.parties[state.playerParty].partyDiscipline + 6, 40, 100);
        state.parties[state.playerParty].relations.MIN_MULTI = clamp((state.parties[state.playerParty].relations.MIN_MULTI || 75) + 6, 0, 100);
    }
    refreshAllUI();
    showToast("Udhëzimet u dërguan për zbatim!");
}

function renderStateSectorsGrid() {
    var container = document.getElementById("stateSectorsGrid");
    if (!container) return;
    var sectors = state.stateSectors || [];
    container.innerHTML = sectors.map(function(sec, idx) {
        var progPct = sec.active ? Math.round(((sec.weeksTotal - sec.weeksLeft) / sec.weeksTotal) * 100) : 0;
        return '<div class="card" style="background:#0f172a; margin-bottom:0; border-color:' + (sec.active ? 'var(--accent-gold)' : 'var(--border-glass)') + ';">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                '<strong style="font-size:0.83rem;">' + sec.name + '</strong>' +
                '<span class="tag ' + (sec.score >= 75 ? 'tag-min' : 'tag-pdk') + '">' + sec.score + '/100</span>' +
            '</div>' +
            '<div style="font-size:0.73rem; color:var(--text-muted); margin-bottom:6px; line-height:1.45;">' +
                '• ' + sec.ministry + '<br>• ' + sec.problem +
            '</div>' +
            '<div class="prog-row" style="margin-bottom:8px;">' +
                '<div class="prog-label"><span>Gjendja</span><span>' + sec.score + '%</span></div>' +
                '<div class="prog-track"><div class="prog-fill" style="width:' + sec.score + '%; background:var(--success);"></div></div>' +
            '</div>' +
            (sec.active
                ? '<div style="background:rgba(245,158,11,0.12); padding:6px 8px; border-radius:6px; font-size:0.73rem;">🏗️ ' + sec.projectTitle + ' (' + sec.weeksLeft + ' javë • ' + progPct + '%)</div>'
                : '<button class="action-btn" style="width:100%; justify-content:center;" onclick="launchStateSectorProject(' + idx + ')">🚀 Nis: ' + sec.projectTitle + ' (-€' + sec.costM + 'M)</button>') +
        '</div>';
    }).join("");
}

function launchStateSectorProject(secIdx) {
    if (!assertGovernmentAuthority("Nisja e reformës sektoriale")) return;
    var sec = state.stateSectors[secIdx];
    if (!sec || sec.active) return;
    if (sec.competence.includes("KUVENDI") && getCoalitionSeats() < 61) {
        showToast("Ky sektor kërkon 61+ vota në Kuvend!");
        return;
    }
    var check = checkFinancialConstraint(sec.costM / 1000, "projektin \"" + sec.projectTitle + "\"");
    if (!check.allowed) {
        showToast("❌ " + check.message);
        return;
    }
    if (check.useReserve) {
        state.fiscalReserve = +(state.fiscalReserve - check.shortfall).toFixed(3);
    }
    state.budgetTotalB = +(state.budgetTotalB - (sec.costM / 1000)).toFixed(3);
    sec.active = true;
    sec.weeksLeft = sec.weeksTotal;
    addMediaNews("Ekonomia Online", "Nis projekti \"" + sec.projectTitle + "\" (€" + sec.costM + "M).", "POSITIVE");
    refreshAllUI();
    showToast("Projekti nisi zbatimin!");
}

function openCabinetDebateModal(idx) {
    if (!assertGovernmentAuthority("Mbledhja e kabinetit")) return;
    var item = state.cabinetAgenda[idx];
    if (!item) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var fullM = (item.costB * 1000).toFixed(0);
    var modM = (item.costB * 700).toFixed(0);
    var modGain = (item.approvalGain * 0.7).toFixed(1);

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🗂️ Mbledhja e Qeverisë — Pika #' + (idx + 1) + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<h3 style="font-size:0.96rem; margin-bottom:10px; color:var(--accent-gold);">' + item.title + '</h3>' +
        '<div class="chat-bubble chat-them"><strong>🗣️ ' + (item.ministerName || item.ministry) + ':</strong><br>"' + (item.ministerArgument || item.note) + ' Kërkojmë €' + fullM + 'M."</div>' +
        '<div class="chat-bubble chat-them" style="border-left-color:var(--warning);"><strong>⚖️ Financat:</strong><br>"' + (item.financeObjection || "Disiplinë buxhetore.") + '"</div>' +
        '<div style="margin-top:12px; display:flex; flex-direction:column; gap:7px;">' +
            '<button class="choice-btn" onclick="resolveCabinetDecision(' + idx + ', \'FULL_APPROVE\')">' +
                '<span class="choice-title">1. Mirato plotësisht (-€' + fullM + 'M)</span>' +
                '<span class="choice-impact">+' + item.approvalGain + '% Mbështetje</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="resolveCabinetDecision(' + idx + ', \'MODIFIED_BUDGET\')">' +
                '<span class="choice-title">2. Mirato me rishikim (-€' + modM + 'M)</span>' +
                '<span class="choice-impact">+' + modGain + '% Mbështetje</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="resolveCabinetDecision(' + idx + ', \'POSTPONE\')">' +
                '<span class="choice-title">3. Shtyj</span>' +
                '<span class="choice-impact">Pa shpenzim</span>' +
            '</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function resolveCabinetDecision(idx, mode) {
    if (!assertGovernmentAuthority("Vendimi në kabinet")) return;
    var item = state.cabinetAgenda[idx];
    if (!item) return;
    toggleModal("interactiveActionModal", false);
    if (mode === "POSTPONE") { showToast("Pika u shty!"); return; }

    var actualCost = mode === "MODIFIED_BUDGET" ? +(item.costB * 0.7).toFixed(3) : item.costB;
    var check = checkFinancialConstraint(actualCost, "\"" + item.title + "\"");
    if (!check.allowed) {
        showToast("❌ " + check.message);
        return;
    }
    if (check.useReserve) {
        state.fiscalReserve = +(state.fiscalReserve - check.shortfall).toFixed(3);
        showToast("ℹ️ Përdorur rezerva: €" + (check.shortfall * 1000).toFixed(0) + "M.");
    }
    item.done = true;
    var actualGain = mode === "MODIFIED_BUDGET" ? +(item.approvalGain * 0.7).toFixed(1) : item.approvalGain;
    state.budgetTotalB = +(state.budgetTotalB - actualCost).toFixed(2);
    state.approval = clamp(state.approval + actualGain, 5, 95);
    addMediaNews("Kryeministria", "Procesverbali: Miratohet \"" + item.title + "\".", "POSITIVE");
    refreshAllUI();
    showMajorAnnouncement({
        badge: "VENDIM I MBLEDHJES",
        title: item.title,
        reason: "Vendim i miratuar në kabinet.",
        immediateImpact: "Buxheti: €" + (actualCost * 1000).toFixed(0) + "M | Mbështetja: +" + actualGain + "%."
    });
}

function adjustMinistryBudget(idx, newVal) {
    if (!assertGovernmentAuthority("Ndryshimi i buxhetit")) return;
    var m = state.ministries[idx];
    if (!m) return;
    var diffB = (parseInt(newVal, 10) - m.budget) / 1000;
    m.budget = parseInt(newVal, 10);
    state.budgetTotalB = +(state.budgetTotalB - diffB).toFixed(2);
    refreshAllUI();
}

function reshuffleMinister(idx, mode) {
    if (!assertGovernmentAuthority("Rikandidimi ministerial")) return;
    var m = state.ministries[idx];
    if (!m) return;
    var prevParty = m.party;
    if (prevParty !== state.playerParty && state.coalitionParties.includes(prevParty)) {
        state.parties[state.playerParty].relations[prevParty] = clamp((state.parties[state.playerParty].relations[prevParty] || 60) - 20, 0, 100);
        addMediaNews("Gazeta Express", "Tension pas shkarkimit të ministrit të " + state.parties[prevParty].short + "!", "CRITICAL");
    }
    if (mode === "EXPERT") {
        m.minister = "Dr. Ekspert Jopartiak"; m.competence = 92; m.risk = 6;
        state.approval = clamp(state.approval + 1.5, 5, 95);
    } else {
        var myP = state.parties[state.playerParty];
        var randomCand = myP.candidates[idx % myP.candidates.length];
        m.minister = randomCand ? randomCand.name : myP.leader;
        m.party = state.playerParty; m.competence = 85;
    }
    refreshAllUI();
    showToast("U emërua " + m.minister + " në krye të " + m.name + "!");
}

function applyFiscalPolicy(code) {
    if (!assertGovernmentAuthority("Politika fiskale")) return;
    if (code === "DIGITAL_ATK") {
        state.taxRevenueB = +(state.taxRevenueB + 0.12).toFixed(2);
        state.budgetTotalB = +(state.budgetTotalB + 0.12).toFixed(2);
        showToast("Digjitalizimi i ATK-së rriti inkasimin me +€120M!");
    } else {
        state.inflation = +(Math.max(1.0, state.inflation - 0.6)).toFixed(1);
        state.budgetTotalB = +(state.budgetTotalB - 0.07).toFixed(2);
        state.approval = clamp(state.approval + 3.5, 5, 95);
        showToast("TVSH për shportën bazë u ul!");
    }
    refreshAllUI();
}

/* ============================================================================
   36. BUXHETI DHE EKONOMIA (FAZA 8 + RREGULLIM)
   ============================================================================ */

function calculateBudgetBalance() {
    var rev = state.realizedRevenues || state.taxRevenueB || 3.05;
    var exp = state.realizedExpenses || state.budgetTotalB || 3.32;
    return +(rev - exp).toFixed(3);
}

function getDeficitRatio() {
    var rev = state.realizedRevenues || state.taxRevenueB || 3.05;
    var bal = calculateBudgetBalance();
    if (rev <= 0) return 0;
    return +((Math.abs(Math.min(0, bal)) / rev) * 100).toFixed(1);
}

function calculatePlannedMinistriesBudget() {
    var mTotal = (state.ministries || []).reduce(function(acc, m) { return acc + (m.budget || 0); }, 0);
    return +(mTotal / 1000).toFixed(3);
}

function calculateExpectedRevenues() {
    var baseRev = 3.05;
    var vatEffect = (state.taxPolicy.vat - 18) * 0.012;
    var incEffect = (state.taxPolicy.incomeTax - 10) * 0.008;
    var corpEffect = (state.taxPolicy.corporateTax - 15) * 0.010;
    var custEffect = (state.taxPolicy.customs - 10) * 0.006;
    var growthEffect = (state.gdpGrowth - 3.9) * 0.035;
    var unemploymentEffect = (10.8 - state.unemployment) * 0.015;
    var expected = baseRev + vatEffect + incEffect + corpEffect + custEffect + growthEffect + unemploymentEffect;
    return +clamp(expected, 2.4, 4.5).toFixed(3);
}

function processWeeklyFiscalReport(weekNumber) {
    if (!state.fiscalHistory) state.fiscalHistory = [];
    if (!state.weeklyReports) state.weeklyReports = [];
    var weeklyRevenues = +((state.taxRevenueB || 3.05) / 52).toFixed(4);
    var weeklyExpenses = +((state.budgetTotalB || 3.32) / 52).toFixed(4);
    var debtAmount = +((state.publicDebtPct / 100) * 10).toFixed(2);
    var weeklyInterest = +((debtAmount * (state.debtInterestRate / 100)) / 52).toFixed(4);
    weeklyExpenses = +(weeklyExpenses + weeklyInterest).toFixed(4);
    state.lastWeekRevenues = weeklyRevenues;
    state.lastWeekExpenses = weeklyExpenses;
    state.realizedRevenues = +(weeklyRevenues * Math.min(state.turnCount, 52) + (state.taxRevenueB || 3.05) - weeklyRevenues * Math.min(state.turnCount, 52)).toFixed(3);
    state.realizedExpenses = +(weeklyExpenses * Math.min(state.turnCount, 52) + (state.budgetTotalB || 3.32) - weeklyExpenses * Math.min(state.turnCount, 52)).toFixed(3);
    var fiscalEntry = {
        week: weekNumber,
        revenues: weeklyRevenues,
        expenses: weeklyExpenses,
        balance: +(weeklyRevenues - weeklyExpenses).toFixed(4),
        interest: weeklyInterest,
        debtPct: state.publicDebtPct,
        reserve: state.fiscalReserve,
        gdpGrowth: state.gdpGrowth,
        inflation: state.inflation
    };
    state.fiscalHistory.unshift(fiscalEntry);
    if (state.fiscalHistory.length > 52) state.fiscalHistory.pop();

    var report = {
        week: weekNumber,
        month: MONTHS_SQ[state.monthIndex],
        year: state.year,
        revenues: weeklyRevenues,
        expenses: weeklyExpenses,
        balance: +(weeklyRevenues - weeklyExpenses).toFixed(4),
        interest: weeklyInterest,
        debtPct: state.publicDebtPct,
        events: []
    };
    var last3 = state.fiscalHistory.slice(0, 3);
    if (last3.length >= 3 && last3.every(function(e) { return e.balance < 0; })) {
        report.events.push("⚠️ Deficit 3 javë rresht!");
    }
    if (getDeficitRatio() > 3) {
        report.events.push("⚠️ Deficiti kalon 3%!");
        state.debtInterestRate = +Math.min(6.5, state.debtInterestRate + 0.1).toFixed(1);
    }
    if (calculateBudgetBalance() > 0.01 && state.publicDebtPct > 5) {
        state.publicDebtPct = +Math.max(5, state.publicDebtPct - 0.05).toFixed(2);
    } else if (calculateBudgetBalance() < -0.01) {
        state.publicDebtPct = +Math.min(45, state.publicDebtPct + 0.08).toFixed(2);
    }
    if (report.events.length > 0) {
        state.weeklyReports.unshift(report);
        if (state.weeklyReports.length > 20) state.weeklyReports.pop();
    }
}

function renderFiscalPanel() {
    var container = document.getElementById("fiscalPanelContainer");
    if (!container) return;
    var balance = calculateBudgetBalance();
    var balanceColor = balance >= 0 ? "var(--success)" : "var(--danger)";
    var ministriesTotal = calculatePlannedMinistriesBudget();
    var deficitRatio = getDeficitRatio();

    container.innerHTML =
        '<div class="fiscal-kpi-grid">' +
            '<div class="fiscal-kpi positive">' +
                '<div class="fiscal-kpi-label">Buxheti Vjetor</div>' +
                '<div class="fiscal-kpi-value">€' + (state.budgetTotalB || 0).toFixed(2) + ' Mld</div>' +
                '<div class="fiscal-kpi-sub">Planifikuar</div>' +
            '</div>' +
            '<div class="fiscal-kpi positive">' +
                '<div class="fiscal-kpi-label">Të Hyrat</div>' +
                '<div class="fiscal-kpi-value">€' + (state.realizedRevenues || state.taxRevenueB || 0).toFixed(2) + ' Mld</div>' +
                '<div class="fiscal-kpi-sub">Realizuar</div>' +
            '</div>' +
            '<div class="fiscal-kpi negative">' +
                '<div class="fiscal-kpi-label">Shpenzimet</div>' +
                '<div class="fiscal-kpi-value">€' + (state.realizedExpenses || state.budgetTotalB || 0).toFixed(2) + ' Mld</div>' +
                '<div class="fiscal-kpi-sub">Realizuar</div>' +
            '</div>' +
            '<div class="fiscal-kpi ' + (balance >= 0 ? 'positive' : 'negative') + '">' +
                '<div class="fiscal-kpi-label">Bilanci</div>' +
                '<div class="fiscal-kpi-value" style="color:' + balanceColor + ';">€' + balance.toFixed(2) + ' Mld</div>' +
                '<div class="fiscal-kpi-delta ' + (balance >= 0 ? 'up' : 'down') + '">' + (balance >= 0 ? 'SUFICIT' : 'DEFICIT') + '</div>' +
            '</div>' +
            '<div class="fiscal-kpi ' + (state.publicDebtPct < 25 ? 'positive' : 'warning') + '">' +
                '<div class="fiscal-kpi-label">Borxhi Publik</div>' +
                '<div class="fiscal-kpi-value">' + state.publicDebtPct.toFixed(1) + '%</div>' +
                '<div class="fiscal-kpi-sub">e BPV-së</div>' +
            '</div>' +
            '<div class="fiscal-kpi ' + (state.fiscalReserve > 0.1 ? 'positive' : 'warning') + '">' +
                '<div class="fiscal-kpi-label">Rezerva</div>' +
                '<div class="fiscal-kpi-value">€' + (state.fiscalReserve || 0).toFixed(2) + ' Mld</div>' +
                '<div class="fiscal-kpi-sub">Financim</div>' +
            '</div>' +
        '</div>' +
        '<div class="card">' +
            '<div class="card-header"><div class="card-title">📈 Treguesit Makroekonomikë</div></div>' +
            '<div class="grid-3">' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Rritja BPV</div>' +
                    '<div style="font-size:1.2rem; font-weight:900; color:var(--success);">+' + state.gdpGrowth.toFixed(1) + '%</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Inflacioni</div>' +
                    '<div style="font-size:1.2rem; font-weight:900; color:' + (state.inflation > 4 ? 'var(--danger)' : 'var(--accent-gold)') + ';">' + state.inflation.toFixed(1) + '%</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Papunësia</div>' +
                    '<div style="font-size:1.2rem; font-weight:900; color:' + (state.unemployment > 15 ? 'var(--danger)' : 'var(--accent-gold)') + ';">' + state.unemployment.toFixed(1) + '%</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Interesi</div>' +
                    '<div style="font-size:1.2rem; font-weight:900; color:var(--accent-gold);">' + state.debtInterestRate.toFixed(1) + '%</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Remitancat</div>' +
                    '<div style="font-size:1.2rem; font-weight:900; color:var(--ldk);">€' + state.remittancesB.toFixed(2) + ' Mld</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Deficit / Të Hyrat</div>' +
                    '<div style="font-size:1.2rem; font-weight:900; color:' + (deficitRatio > 3 ? 'var(--danger)' : 'var(--success)') + ';">' + deficitRatio.toFixed(1) + '%</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">💼 Ndarja e Buxhetit për Ministritë</div>' +
                '<div style="font-size:0.76rem; color:var(--text-muted);">Totali: <strong style="color:var(--accent-gold);">€' + ministriesTotal.toFixed(2) + ' Mld</strong></div>' +
            '</div>' +
            '<div style="margin-bottom:10px;">' +
                (state.ministries || []).map(function(m) {
                    var partyClass = "party-" + (m.party === "MIN_MULTI" ? "min" : m.party.toLowerCase());
                    var pctOfTotal = ministriesTotal > 0 ? (m.budget / 1000 / ministriesTotal * 100) : 0;
                    var party = state.parties[m.party];
                    return '<div class="budget-row ' + partyClass + '">' +
                        '<div class="budget-row-info">' +
                            '<div class="budget-row-title">' + m.name.replace("Ministria e ", "M. ") + '</div>' +
                            '<div class="budget-row-meta">' + (party ? party.short : 'Bosh') + ' • ' + m.minister + '</div>' +
                            '<div class="budget-row-bar"><div class="budget-row-bar-fill" style="width:' + pctOfTotal.toFixed(1) + '%;"></div></div>' +
                        '</div>' +
                        '<div class="budget-row-value">€' + m.budget + 'M</div>' +
                    '</div>';
                }).join("") +
            '</div>' +
            '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
                '<button class="action-btn btn-gold" onclick="openBudgetAllocationModal()">✏️ Rishiko Ndarjen</button>' +
                '<button class="action-btn btn-outline" onclick="openTaxPolicyModal()">💰 Taksat</button>' +
                '<button class="action-btn btn-outline" onclick="openBorrowingModal()">🏦 Huamarrje</button>' +
            '</div>' +
        '</div>' +
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">📊 Raportet Javore</div>' +
                '<span class="tag tag-min">' + (state.weeklyReports || []).length + ' raporte</span>' +
            '</div>' +
            ((state.weeklyReports || []).length === 0
                ? '<div style="padding:12px; background:#0f172a; border-radius:8px; font-size:0.8rem; color:var(--text-muted);">Nuk ka raporte javore ende.</div>'
                : state.weeklyReports.slice(0, 6).map(function(r) {
                    return '<div class="card" style="background:#0f172a; margin-bottom:6px;">' +
                        '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">' +
                            '<strong style="font-size:0.82rem;">Java ' + r.week + ' • ' + r.month + ' ' + r.year + '</strong>' +
                            '<span class="tag ' + (r.balance >= 0 ? 'tag-min' : 'tag-lvv') + '">' + (r.balance >= 0 ? 'SUFICIT' : 'DEFICIT') + ' €' + Math.abs(r.balance).toFixed(3) + '</span>' +
                        '</div>' +
                        '<div style="font-size:0.74rem; color:var(--text-muted);">' +
                            'Të hyra: €' + r.revenues.toFixed(3) + ' • Shpenzime: €' + r.expenses.toFixed(3) + ' • Interes: €' + r.interest.toFixed(3) + ' • Borxhi: ' + r.debtPct.toFixed(1) + '%' +
                        '</div>' +
                        (r.events && r.events.length > 0 ? '<div style="margin-top:4px; font-size:0.74rem; color:var(--warning);">' + r.events.join(" ") + '</div>' : '') +
                    '</div>';
                }).join("")
            ) +
        '</div>' +
        '<div class="card">' +
            '<div class="card-header"><div class="card-title">⚡ Veprime të Shpejta Fiskale</div></div>' +
            '<div class="grid-2">' +
                '<button class="choice-btn" onclick="applyFiscalPolicy(\'DIGITAL_ATK\')">' +
                    '<span class="choice-title">💻 Digjitalizo ATK-në</span>' +
                    '<span class="choice-impact">+€0.12 Mld</span>' +
                '</button>' +
                '<button class="choice-btn" onclick="applyFiscalPolicy(\'LOWER_VAT_FOOD\')">' +
                    '<span class="choice-title">🛒 Ul TVSH-në në 8%</span>' +
                    '<span class="choice-impact">-0.6% Inflacion, +3.5% Popullaritet</span>' +
                '</button>' +
                '<button class="choice-btn" onclick="transferToReserve()">' +
                    '<span class="choice-title">💰 Transfero në Rezervë</span>' +
                    '<span class="choice-impact">Forcon rezervën</span>' +
                '</button>' +
                '<button class="choice-btn" onclick="auditPublicSpending()">' +
                    '<span class="choice-title">🔍 Auditim i Shpenzimeve</span>' +
                    '<span class="choice-impact">+€0.03 Mld kursime</span>' +
                '</button>' +
            '</div>' +
        '</div>';
}

function openBudgetAllocationModal() {
    if (!assertGovernmentAuthority("Rishikimi i ndarjes së buxhetit")) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var totalMinistryBudget = (state.ministries || []).reduce(function(a, m) { return a + m.budget; }, 0);
    var availableInBillions = (state.budgetTotalB || 0);
    var usedInBillions = totalMinistryBudget / 1000;
    var freeBillions = +(availableInBillions - usedInBillions).toFixed(3);
    var freeForMinistries = freeBillions * 1000;

    var rowsHtml = (state.ministries || []).map(function(m, idx) {
        var party = state.parties[m.party];
        return '<div style="background:#0f172a; padding:10px; border-radius:8px; margin-bottom:8px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                '<div><strong style="font-size:0.82rem;">' + m.name.replace("Ministria e ", "M. ") + '</strong>' +
                    '<span style="font-size:0.7rem; color:var(--text-muted); margin-left:6px;">(' + (party ? party.short : 'Bosh') + ')</span></div>' +
                '<div class="budget-slider-value" id="minBudgetVal' + idx + '">€' + m.budget + 'M</div>' +
            '</div>' +
            '<div class="budget-slider-row">' +
                '<input type="range" min="20" max="1200" step="10" value="' + m.budget + '" ' +
                    'oninput="document.getElementById(\'minBudgetVal' + idx + '\').textContent = \'€\' + this.value + \'M\'; updateBudgetRemaining();" ' +
                    'data-idx="' + idx + '" class="min-budget-slider">' +
            '</div>' +
        '</div>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">✏️ Rishiko Ndarjen e Buxhetit</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:10px; border-radius:8px; margin-bottom:12px; font-size:0.8rem;">' +
            '<div>Buxheti total: <strong style="color:var(--accent-gold);">€' + availableInBillions.toFixed(2) + ' Mld</strong></div>' +
            '<div>Shpërndarë: <strong>€' + usedInBillions.toFixed(2) + ' Mld</strong></div>' +
            '<div id="budgetRemainingDisplay">Mbetur: <strong style="color:' + (freeForMinistries >= 0 ? 'var(--success)' : 'var(--danger)') + ';">€' + freeForMinistries.toFixed(0) + 'M</strong></div>' +
        '</div>' +
        '<div style="max-height:400px; overflow-y:auto; margin-bottom:12px;">' + rowsHtml + '</div>' +
        '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="confirmBudgetAllocation()">💾 Konfirmo</button>' +
            '<button class="action-btn btn-outline" onclick="toggleModal(\'interactiveActionModal\', false)">Anulo</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function updateBudgetRemaining() {
    var sliders = document.querySelectorAll(".min-budget-slider");
    var newTotal = 0;
    sliders.forEach(function(s) { newTotal += parseInt(s.value, 10); });
    var newTotalB = newTotal / 1000;
    var freeB = (state.budgetTotalB || 0) - newTotalB;
    var display = document.getElementById("budgetRemainingDisplay");
    if (display) {
        display.innerHTML = 'Mbetur: <strong style="color:' + (freeB >= 0 ? 'var(--success)' : 'var(--danger)') + ';">€' + (freeB * 1000).toFixed(0) + 'M</strong>';
    }
}

function confirmBudgetAllocation() {
    if (!assertGovernmentAuthority("Konfirmimi i ndarjes")) return;
    var sliders = document.querySelectorAll(".min-budget-slider");
    var newTotal = 0;
    var changes = [];
    sliders.forEach(function(s) {
        var idx = parseInt(s.getAttribute("data-idx"), 10);
        var newVal = parseInt(s.value, 10);
        newTotal += newVal;
        if (state.ministries[idx].budget !== newVal) {
            changes.push({ idx: idx, oldVal: state.ministries[idx].budget, newVal: newVal });
        }
    });
    var newTotalB = newTotal / 1000;
    if (newTotalB > (state.budgetTotalB || 0) + 0.001) {
        showToast("❌ Shuma kalon buxhetin total!");
        return;
    }
    if (changes.length === 0) {
        showToast("Nuk ka ndryshime.");
        toggleModal("interactiveActionModal", false);
        return;
    }
    changes.forEach(function(c) {
        state.ministries[c.idx].budget = c.newVal;
    });
    var freedMoney = (state.budgetTotalB || 0) - newTotalB;
    if (freedMoney > 0.01) {
        state.fiscalReserve = +((state.fiscalReserve || 0) + freedMoney).toFixed(3);
        addMediaNews("Ministria e Financave", "Rishikohet buxheti: €" + (freedMoney * 1000).toFixed(0) + "M transferuar në rezervë.", "POSITIVE");
    }
    var healthBudget = state.ministries.find(function(m) { return m.id === "msh"; });
    var eduBudget = state.ministries.find(function(m) { return m.id === "mashti"; });
    if (healthBudget && healthBudget.budget < 250) {
        state.approval = clamp(state.approval - 2.5, 5, 95);
    }
    if (eduBudget && eduBudget.budget < 250) {
        state.approval = clamp(state.approval - 2.0, 5, 95);
    }
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("✔ Ndarja u konfirmua! " + changes.length + " ministri u ndryshuan.");
}

function openBorrowingModal() {
    if (!assertGovernmentAuthority("Huamarrja dhe menaxhimi i borxhit")) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var currentDebtB = +((state.publicDebtPct / 100) * 10).toFixed(2);

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🏦 Huamarrje & Menaxhim i Borxhit</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; margin-bottom:12px; font-size:0.8rem; line-height:1.6;">' +
            '<div>• <strong>Borxhi aktual:</strong> ' + state.publicDebtPct.toFixed(1) + '% (~€' + currentDebtB.toFixed(2) + ' Mld)</div>' +
            '<div>• <strong>Norma e interesit:</strong> ' + state.debtInterestRate.toFixed(1) + '% vjetore</div>' +
            '<div>• <strong>Deficiti aktual:</strong> €' + Math.abs(Math.min(0, calculateBudgetBalance())).toFixed(2) + ' Mld</div>' +
            '<div>• <strong>Rezerva:</strong> €' + (state.fiscalReserve || 0).toFixed(2) + ' Mld</div>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Shuma e huasë:</label>' +
            '<select id="borrowAmountSelect" style="width:100%;">' +
                '<option value="0.1">€100 Milionë</option>' +
                '<option value="0.2">€200 Milionë</option>' +
                '<option value="0.3">€300 Milionë</option>' +
                '<option value="0.5">€500 Milionë</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Qëllimi:</label>' +
            '<select id="borrowPurposeSelect" style="width:100%;">' +
                '<option value="INFRASTRUCTURE">Investime infrastrukturore</option>' +
                '<option value="DEFICIT_COVER">Mbulim i deficitit</option>' +
                '<option value="EMERGENCY">Fond emergjence</option>' +
                '<option value="HEALTH_EDU">Financim i shëndetësisë/arsimit</option>' +
            '</select>' +
        '</div>' +
        '<div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:10px; padding:8px; background:rgba(239,68,68,0.08); border-radius:6px;">' +
            '⚠️ Huamarrja shton borxhin publik.' +
        '</div>' +
        '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="issueGovernmentBond()">📄 Emeto Obligacion</button>' +
            '<button class="action-btn btn-outline" onclick="repayPublicDebt()">💵 Pago Borxh</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function issueGovernmentBond() {
    if (!assertGovernmentAuthority("Emetimi i obligacionit")) return;
    var amountEl = document.getElementById("borrowAmountSelect");
    var purposeEl = document.getElementById("borrowPurposeSelect");
    if (!amountEl) return;
    var amountB = parseFloat(amountEl.value);
    var purpose = purposeEl ? purposeEl.value : "INFRASTRUCTURE";

    var currentDebtB = +((state.publicDebtPct / 100) * 10).toFixed(2);
    var newDebtB = currentDebtB + amountB;
    state.publicDebtPct = +((newDebtB / 10) * 100).toFixed(2);
    state.budgetTotalB = +((state.budgetTotalB || 0) + amountB).toFixed(3);

    if (state.publicDebtPct > 30) {
        state.debtInterestRate = +Math.min(7, state.debtInterestRate + 0.3).toFixed(1);
        state.approval = clamp(state.approval - 1.5, 5, 95);
        addMediaNews("Kallxo", "Borxhi kalon 30% të BPV-së!", "CRITICAL");
    }

    var purposeText = "";
    if (purpose === "INFRASTRUCTURE") {
        purposeText = "Investime kapitale";
        state.gdpGrowth = +Math.min(6, state.gdpGrowth + 0.05).toFixed(1);
    } else if (purpose === "DEFICIT_COVER") {
        purposeText = "Mbulim deficiti";
    } else if (purpose === "EMERGENCY") {
        purposeText = "Fond emergjence";
        state.fiscalReserve = +((state.fiscalReserve || 0) + amountB * 0.5).toFixed(3);
    } else {
        purposeText = "Shëndetësi/arsim";
        state.approval = clamp(state.approval + 1.5, 5, 95);
    }

    addMediaNews("Ministria e Financave", "Qeveria emeton obligacion €" + (amountB * 1000).toFixed(0) + "M për: " + purposeText + ".", "POSITIVE");
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "EMETIM OBLIGACIONI",
        title: "Huamarrje €" + (amountB * 1000).toFixed(0) + " Milionë",
        reason: "Qeveria emetoi obligacion për: " + purposeText + ".",
        immediateImpact: "Borxhi u rrit në " + state.publicDebtPct.toFixed(1) + "%. Buxheti u rrit me €" + amountB.toFixed(2) + " Mld."
    });
}

function repayPublicDebt() {
    if (!assertGovernmentAuthority("Pagimi i borxhit")) return;
    var reserveAvailable = state.fiscalReserve || 0;
    if (reserveAvailable < 0.05) {
        showToast("Nuk ka rezervë të mjaftueshme!");
        return;
    }
    var repayAmount = Math.min(0.15, reserveAvailable);
    var currentDebtB = +((state.publicDebtPct / 100) * 10).toFixed(2);
    var newDebtB = Math.max(0.5, currentDebtB - repayAmount);
    state.publicDebtPct = +((newDebtB / 10) * 100).toFixed(2);
    state.fiscalReserve = +(reserveAvailable - repayAmount).toFixed(3);
    addMediaNews("Ministria e Financave", "Qeveria pagoi €" + (repayAmount * 1000).toFixed(0) + "M borxh.", "POSITIVE");
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("✔ Paguar €" + (repayAmount * 1000).toFixed(0) + "M. Borxhi: " + state.publicDebtPct.toFixed(1) + "%.");
}

function openTaxPolicyModal() {
    if (!assertGovernmentAuthority("Ndryshimi i politikës fiskale")) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var tp = state.taxPolicy || { vat: 18, incomeTax: 10, corporateTax: 15, customs: 10 };

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">💰 Politika Fiskale</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">TVSH:</label>' +
            '<select id="taxVatSelect" style="width:100%;">' +
                '<option value="15" ' + (tp.vat === 15 ? 'selected' : '') + '>15%</option>' +
                '<option value="18" ' + (tp.vat === 18 ? 'selected' : '') + '>18% (aktuale)</option>' +
                '<option value="20" ' + (tp.vat === 20 ? 'selected' : '') + '>20%</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Tatim mbi të Ardhurat:</label>' +
            '<select id="taxIncomeSelect" style="width:100%;">' +
                '<option value="8" ' + (tp.incomeTax === 8 ? 'selected' : '') + '>8%</option>' +
                '<option value="10" ' + (tp.incomeTax === 10 ? 'selected' : '') + '>10% (aktual)</option>' +
                '<option value="12" ' + (tp.incomeTax === 12 ? 'selected' : '') + '>12%</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Tatim mbi Korporatat:</label>' +
            '<select id="taxCorpSelect" style="width:100%;">' +
                '<option value="12" ' + (tp.corporateTax === 12 ? 'selected' : '') + '>12%</option>' +
                '<option value="15" ' + (tp.corporateTax === 15 ? 'selected' : '') + '>15% (aktual)</option>' +
                '<option value="18" ' + (tp.corporateTax === 18 ? 'selected' : '') + '>18%</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:12px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">Doganat:</label>' +
            '<select id="taxCustomsSelect" style="width:100%;">' +
                '<option value="8" ' + (tp.customs === 8 ? 'selected' : '') + '>8%</option>' +
                '<option value="10" ' + (tp.customs === 10 ? 'selected' : '') + '>10% (aktual)</option>' +
                '<option value="12" ' + (tp.customs === 12 ? 'selected' : '') + '>12%</option>' +
            '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="applyTaxPolicyChange()">💾 Apliko</button>';
    toggleModal("interactiveActionModal", true);
}

function applyTaxPolicyChange() {
    if (!assertGovernmentAuthority("Ndryshimi i normave tatimore")) return;
    var newVat = parseInt(document.getElementById("taxVatSelect").value, 10);
    var newIncome = parseInt(document.getElementById("taxIncomeSelect").value, 10);
    var newCorp = parseInt(document.getElementById("taxCorpSelect").value, 10);
    var newCustoms = parseInt(document.getElementById("taxCustomsSelect").value, 10);
    var oldVat = state.taxPolicy.vat;
    var oldIncome = state.taxPolicy.incomeTax;
    var oldCorp = state.taxPolicy.corporateTax;
    var oldCustoms = state.taxPolicy.customs;
    state.taxPolicy = { vat: newVat, incomeTax: newIncome, corporateTax: newCorp, customs: newCustoms };
    var expectedRevChange = (newVat - oldVat) * 0.012 + (newIncome - oldIncome) * 0.008 + (newCorp - oldCorp) * 0.010 + (newCustoms - oldCustoms) * 0.006;
    state.taxRevenueB = +clamp((state.taxRevenueB || 3.05) + expectedRevChange, 2.4, 4.5).toFixed(2);
    state.budgetTotalB = +((state.budgetTotalB || 0) + expectedRevChange).toFixed(2);
    var taxIncrease = (newVat - oldVat) + (newIncome - oldIncome) + (newCorp - oldCorp);
    if (taxIncrease > 0) state.approval = clamp(state.approval - (taxIncrease * 0.5), 5, 95);
    else if (taxIncrease < 0) state.approval = clamp(state.approval + (Math.abs(taxIncrease) * 0.4), 5, 95);
    if (newVat > 18) state.inflation = +Math.min(5, state.inflation + 0.2).toFixed(1);
    if (newVat < 18) state.inflation = +Math.max(1.5, state.inflation - 0.2).toFixed(1);
    addMediaNews("Ministria e Financave", "Rishikohet politika fiskale.", "NEUTRAL");
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "Ndryshim Fiskal",
        title: "Taksat u Rishikuan",
        reason: "Qeveria ndryshoi normat tatimore.",
        immediateImpact: "Të hyrat: €" + state.taxRevenueB.toFixed(2) + " Mld."
    });
}

function transferToReserve() {
    if (!assertGovernmentAuthority("Transferimi në rezervë")) return;
    var amount = 0.05;
    if ((state.budgetTotalB || 0) < amount + 2.5) {
        showToast("Buxheti shumë i ulët!");
        return;
    }
    state.budgetTotalB = +((state.budgetTotalB || 0) - amount).toFixed(3);
    state.fiscalReserve = +((state.fiscalReserve || 0) + amount).toFixed(3);
    addMediaNews("Ministria e Financave", "€" + (amount * 1000).toFixed(0) + "M u transferuan në rezervë.", "POSITIVE");
    refreshAllUI();
    showToast("✔ Transferuar €" + (amount * 1000).toFixed(0) + "M në rezervë.");
}

function auditPublicSpending() {
    if (!assertGovernmentAuthority("Auditimi i shpenzimeve")) return;
    var savings = 0.03;
    state.budgetTotalB = +((state.budgetTotalB || 0) + savings).toFixed(3);
    state.approval = clamp(state.approval + 1.2, 5, 95);
    addMediaNews("ZKA", "Auditimi zbuloi €" + (savings * 1000).toFixed(0) + "M kursime.", "POSITIVE");
    refreshAllUI();
    showToast("✔ €" + (savings * 1000).toFixed(0) + "M kursime!");
}

function checkFinancialConstraint(costB, description) {
    if ((state.budgetTotalB || 0) < costB) {
        var shortfall = costB - (state.budgetTotalB || 0);
        if ((state.fiscalReserve || 0) >= shortfall) {
            return { allowed: true, useReserve: true, shortfall: shortfall };
        }
        return { allowed: false, shortfall: shortfall, message: "Nuk ka fonde të mjaftueshme për: " + description + ". Mungon €" + (shortfall * 1000).toFixed(0) + "M." };
    }
    return { allowed: true, useReserve: false, shortfall: 0 };
}

/* ============================================================================
   37. KOMUNAT (FAZA 9)
   ============================================================================ */

function scoreToLevel(score) { return clamp(Math.round(score / 10), 1, 10); }
function levelLabel(level) { return DEVELOPMENT_PROJECT_LEVELS[level] || "I panjohur"; }
function levelColor(level) {
    if (level >= 8) return "var(--success)";
    if (level >= 6) return "var(--accent-gold)";
    if (level >= 4) return "var(--warning)";
    return "var(--danger)";
}

function renderElectionsSection() {
    var myP = state.parties[state.playerParty];
    var campaignContainer = document.getElementById("campaignCenterContainer");
    if (campaignContainer) {
        campaignContainer.innerHTML =
            '<div class="grid-2">' +
                '<div class="card">' +
                    '<div class="card-header"><div class="card-title">📢 Aktivitetet e Fushatës</div><span class="tag tag-gold">Fondi: €' + myP.partyFunds.toLocaleString() + '</span></div>' +
                    '<button class="choice-btn" onclick="runCampaignAction(\'SOCIAL_MEDIA\', 18000)"><span class="choice-title">📱 Fushatë Digjitale (-€18,000)</span><span class="choice-impact">+1.1% në sondazhe</span></button>' +
                    '<button class="choice-btn" onclick="runCampaignAction(\'DIASPORA_RALLY\', 35000)"><span class="choice-title">✈️ Tubime me Mërgatën (-€35,000)</span><span class="choice-impact">+1.8% në sondazhe</span></button>' +
                '</div>' +
                '<div class="card">' +
                    '<div class="card-header"><div class="card-title">📺 Debat Televiziv</div></div>' +
                    '<button class="choice-btn" onclick="participateTvDebate(\'ECONOMY_NUMBERS\')"><span class="choice-title">Ekonomia & Pagat</span><span class="choice-impact">+1.6%</span></button>' +
                    '<button class="choice-btn" onclick="participateTvDebate(\'SOVEREIGNTY_LAW\')"><span class="choice-title">Sovraniteti & FSK</span><span class="choice-impact">+1.8%</span></button>' +
                '</div>' +
            '</div>';
    }

    renderMunicipalities();

    var cecContainer = document.getElementById("cecElectionContainer");
    if (cecContainer) {
        var electionPhase = state.electionPhase || "NONE";
        var electionStatusHtml = "";
        if (electionPhase === "CAMPAIGN") {
            electionStatusHtml = '<div style="background:rgba(245,158,11,0.12); padding:10px; border-radius:6px; margin-bottom:12px; font-size:0.8rem;">' +
                '📢 <strong>Fushata në vazhdim</strong> — Kanë mbetur ' + (state.electionCampaign ? state.electionCampaign.weeksRemaining : 0) + ' javë deri në ditën e zgjedhjeve.' +
                '<div style="margin-top:8px;"><button class="action-btn btn-gold" onclick="advanceCampaignWeek()">▶ Vazhdo Fushatën (1 Javë)</button></div>' +
            '</div>';
        } else if (electionPhase === "VOTING") {
            electionStatusHtml = '<div style="background:rgba(37,99,235,0.12); padding:10px; border-radius:6px; margin-bottom:12px; font-size:0.8rem;">' +
                '🗳️ <strong>Dita e zgjedhjeve</strong> — Procesi i votimit në vazhdim.' +
                '<div style="margin-top:8px;"><button class="action-btn btn-gold" onclick="runElectionDay()">▶ Përfundo Votimin</button></div>' +
            '</div>';
        } else {
            electionStatusHtml = '<div style="background:#0f172a; padding:10px; border-radius:6px; margin-bottom:12px; font-size:0.8rem; color:var(--text-muted);">' +
                'Nuk ka proces zgjedhor aktiv. Për të nisur zgjedhjet, Presidenti duhet të shpallë zgjedhjet ose Qeveria të rrëzohet me mocion mosbesimi.' +
            '</div>' +
            '<div style="margin-bottom:12px;"><button class="action-btn btn-gold" onclick="startParliamentaryElectionProcess(\'Presidenti\')">🗳️ Shpall Zgjedhjet Parlamentare</button></div>';
        }

        cecContainer.innerHTML =
            '<div class="card">' +
                '<div class="card-header"><div class="card-title">🗳️ KQZ — Zgjedhjet Parlamentare</div><span class="tag tag-min">100 + 20 Ulëse</span></div>' +
                electionStatusHtml +
                '<div id="cecPollProjection">' +
                    Object.values(state.parties).map(function(p) {
                        return '<div class="prog-row"><div class="prog-label"><span>' + p.name + '</span><span>Sondazhi: ' + p.poll.toFixed(2) + '% | Mandatet: ' + p.seats + '</span></div><div class="prog-track"><div class="prog-fill" style="width:' + Math.min(100, p.poll * 1.6) + '%; background:' + p.color + ';"></div></div></div>';
                    }).join("") +
                '</div>' +
            '</div>';
    }
}

function renderMunicipalities() {
    var filterEl = document.getElementById("muniRegionFilter");
    var searchEl = document.getElementById("muniSearchInput");
    var filter = filterEl ? filterEl.value : "ALL";
    var searchQ = searchEl ? searchEl.value.toLowerCase() : "";
    var list = state.municipalities.filter(function(m) {
        var matchRegion = filter === "ALL" || m.region === filter;
        var matchSearch = !searchQ || m.name.toLowerCase().includes(searchQ) || (m.issue || "").toLowerCase().includes(searchQ);
        return matchRegion && matchSearch;
    });

    var counts = {};
    state.municipalities.forEach(function(m) { counts[m.mayorParty] = (counts[m.mayorParty] || 0) + 1; });
    var summaryBar = document.getElementById("municipalitiesSummaryBar");
    if (summaryBar) {
        summaryBar.innerHTML =
            '<div style="display:flex; gap:8px; flex-wrap:wrap; font-size:0.76rem; background:#0f172a; padding:8px 12px; border-radius:8px;">' +
                '<span>Kryetarët në 38 Komuna:</span>' +
                Object.entries(counts).map(function(entry) {
                    var pKey = entry[0]; var cnt = entry[1];
                    var pObj = state.parties[pKey];
                    return '<span class="tag ' + (pObj ? pObj.tagClass : 'tag-min') + '">' + (pObj ? pObj.short : pKey) + ': ' + cnt + '</span>';
                }).join("") +
            '</div>';
    }

    var grid = document.getElementById("municipalitiesGrid");
    if (!grid) return;
    grid.innerHTML = list.map(function(m) {
        var realIdx = state.municipalities.findIndex(function(x) { return x.id === m.id; });
        var p = state.parties[m.mayorParty] || state.parties.LVV;
        var prof = (state.municipalityProfiles || {})[m.id] || {};
        var projs = m.projects || [];
        var projsHtml = projs.length > 0
            ? '<div style="background:rgba(255,255,255,0.03); padding:6px 8px; border-radius:6px; margin-bottom:8px; font-size:0.72rem;"><strong style="color:var(--success);">🏗️ Projekte (' + projs.length + '):</strong>' +
              projs.map(function(pr) { return '<div>• ' + pr.title + ' (€' + pr.costM + 'M) — ' + pr.status + ' (' + pr.progress + '%)</div>'; }).join("") + '</div>'
            : '';

        return '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                '<strong style="font-size:0.86rem;">📍 ' + m.name + '</strong>' +
                '<span class="tag ' + p.tagClass + '">' + p.short + '</span>' +
            '</div>' +
            '<div style="font-size:0.74rem; color:var(--text-muted); margin-bottom:8px; line-height:1.5;">' +
                '• Kryetar: <strong style="color:#fff;">' + m.mayorName + '</strong><br>' +
                '• Buxheti: <strong>€' + m.budgetM + 'M</strong> • Raporti: <strong>' + (m.relationWithGov || 60) + '/100</strong>' +
            '</div>' +
            '<div class="muni-levels-grid">' +
                '<div class="muni-level-item"><span>🏗️ Infra</span><span class="muni-level-val">' + (prof.infrastructure || 5) + '/10</span></div>' +
                '<div class="muni-level-item"><span>🏥 Shërbime</span><span class="muni-level-val">' + (prof.services || 5) + '/10</span></div>' +
                '<div class="muni-level-item"><span>💼 Punësim</span><span class="muni-level-val">' + (prof.employment || 5) + '/10</span></div>' +
                '<div class="muni-level-item"><span>📈 Zhvillim</span><span class="muni-level-val">' + (prof.development || 5) + '/10</span></div>' +
            '</div>' +
            '<div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:6px;">Prioriteti: <em>' + m.issue + '</em></div>' +
            projsHtml +
            '<div style="display:flex; gap:6px;">' +
                '<button class="action-btn" style="flex:1; justify-content:center;" onclick="openMuniProjectModal(' + realIdx + ')">🏗️ Projekt</button>' +
                '<button class="btn-top" onclick="openMuniProfile(' + realIdx + ')" title="Profili">👁️</button>' +
                '<button class="btn-top" onclick="openScheduleMeetingModal(\'MAYORS_38\', \'' + m.mayorName.replace(/'/g, "") + '\')" title="Takim">📅</button>' +
            '</div>' +
        '</div>';
    }).join("");
}

function openMuniProfile(mIdx) {
    var m = state.municipalities[mIdx];
    if (!m) return;
    var prof = (state.municipalityProfiles || {})[m.id] || {};
    var p = state.parties[m.mayorParty] || state.parties.LVV;
    var muniDevProjs = (state.developmentProjects || []).filter(function(dp){ return dp.municipalityId === m.id; });

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📍 Profili i Komunës: ' + m.name + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; margin-bottom:12px; font-size:0.8rem; line-height:1.6;">' +
            '<div>• <strong>Rajoni:</strong> ' + m.region + ' • <strong>Buxheti:</strong> €' + m.budgetM + 'M</div>' +
            '<div>• <strong>Kryetari:</strong> ' + m.mayorName + ' (' + p.short + ')</div>' +
            '<div>• <strong>Raporti:</strong> ' + (m.relationWithGov || 60) + '/100 • <strong>Mbështetja:</strong> ' + (m.localSupportPlayer || 35) + '%</div>' +
            '<div>• <strong>Prioriteti:</strong> ' + m.issue + '</div>' +
            '<div>• <strong>Nevojat:</strong> ' + (prof.needs || []).join(" • ") + '</div>' +
        '</div>' +
        '<h4 style="font-size:0.85rem; color:var(--accent-gold); margin-bottom:6px;">📊 Treguesit e Zhvillimit</h4>' +
        '<div class="grid-2" style="margin-bottom:12px; font-size:0.76rem;">' +
            '<div class="card" style="background:#0f172a; margin-bottom:0; padding:8px;">' +
                '<div>🏗️ Infrastrukturë: <strong>' + (prof.infrastructure || 5) + '/10</strong></div>' +
                '<div>🏥 Shërbime: <strong>' + (prof.services || 5) + '/10</strong></div>' +
                '<div>💼 Punësim: <strong>' + (prof.employment || 5) + '/10</strong></div>' +
                '<div>📈 Zhvillim: <strong>' + (prof.development || 5) + '/10</strong></div>' +
            '</div>' +
            '<div class="card" style="background:#0f172a; margin-bottom:0; padding:8px;">' +
                '<div>🎓 Arsim: <strong>' + (prof.education || 5) + '/10</strong></div>' +
                '<div>💧 Uji: <strong>' + (prof.water || 5) + '/10</strong></div>' +
                '<div>🛣️ Lidhshmëri: <strong>' + (prof.connectivity || 5) + '/10</strong></div>' +
                '<div>🏥 Shëndetësi: <strong>' + (prof.health || 5) + '/10</strong></div>' +
            '</div>' +
        '</div>' +
        '<h4 style="font-size:0.85rem; color:var(--accent-gold); margin-bottom:6px;">🏗️ Projektet Zhvillimore (' + muniDevProjs.length + ')</h4>' +
        (muniDevProjs.length === 0
            ? '<div style="font-size:0.76rem; color:var(--text-muted); margin-bottom:10px;">Nuk ka projekte zhvillimore.</div>'
            : muniDevProjs.map(function(dp) {
                return '<div style="background:#0f172a; padding:6px 10px; border-radius:6px; margin-bottom:4px; font-size:0.75rem;">' +
                    '• <strong>' + dp.name + '</strong> — €' + dp.costM + 'M, ' + (dp.weeksLeft || 0) + ' javë, ' + dp.status +
                '</div>';
            }).join("")) +
        '<div style="display:flex; gap:6px; margin-top:10px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="openMuniProjectModal(' + mIdx + ')">🏗️ Nis Projekt</button>' +
            '<button class="action-btn btn-outline" onclick="openMuniNeedsRequest(' + mIdx + ')">📩 Paraqit Nevojë</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function openMuniProjectModal(mIdx) {
    var m = state.municipalities[mIdx];
    if (!m) return;
    var p = state.parties[m.mayorParty] || state.parties.LVV;
    var prof = (state.municipalityProfiles || {})[m.id] || {};
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;

    var relevantProjects = MUNICIPAL_PROJECT_CATALOG.filter(function(proj) {
        var projNeeds = proj.needs || [];
        var muniNeeds = prof.needs || [];
        return projNeeds.some(function(pn) {
            return muniNeeds.some(function(mn) {
                return mn.toLowerCase().indexOf(pn.toLowerCase()) !== -1 || pn.toLowerCase().indexOf(mn.toLowerCase()) !== -1;
            });
        });
    });
    if (relevantProjects.length === 0) relevantProjects = MUNICIPAL_PROJECT_CATALOG.slice(0, 6);

    var cardsHtml = relevantProjects.map(function(proj) {
        var costMid = Math.round((proj.costRangeM[0] + proj.costRangeM[1]) / 2);
        var weeksMid = Math.round((proj.weeksRange[0] + proj.weeksRange[1]) / 2);
        return '<div class="card" style="background:#0f172a; margin-bottom:6px; padding:10px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:4px;">' +
                '<strong style="font-size:0.84rem;">' + proj.icon + ' ' + proj.name + '</strong>' +
                '<span class="tag ' + (proj.simulated ? 'tag-sl' : 'tag-min') + '">' + (proj.simulated ? "Simuluar" : "Real") + '</span>' +
            '</div>' +
            '<div style="font-size:0.73rem; color:var(--text-muted); margin-bottom:6px;">' +
                '📍 ' + m.name + ' • 🏗️ ' + proj.sectorId + '<br>' +
                '💰 €' + proj.costRangeM[0] + '–€' + proj.costRangeM[1] + 'M (mesatare €' + costMid + 'M)<br>' +
                '⏱️ ' + proj.weeksRange[0] + '–' + proj.weeksRange[1] + ' javë<br>' +
                '📈 ' + Object.keys(proj.benefits).map(function(k) { return k + ' +' + proj.benefits[k]; }).join(', ') +
            '</div>' +
            '<button class="action-btn btn-gold" onclick="approveMuniCatalogProject(' + mIdx + ', \'' + proj.type + '\', ' + costMid + ', ' + weeksMid + ')">✔ Aprovo & Financo</button>' +
        '</div>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🏗️ Projektet Kapitale — ' + m.name + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:12px;">Kryetari aktual: <strong>' + m.mayorName + ' (' + p.short + ')</strong>. Zgjidhni nga katalogu i projekteve të përshtatshme.</div>' +
        '<div style="max-height:500px; overflow-y:auto;">' + cardsHtml + '</div>';
    toggleModal("interactiveActionModal", true);
}

function approveMuniCatalogProject(mIdx, type, costM, weeks) {
    if (!assertGovernmentAuthority("Financimi i projektit komunal")) return;
    var m = state.municipalities[mIdx];
    var proj = MUNICIPAL_PROJECT_CATALOG.find(function(p) { return p.type === type; });
    if (!proj || !m) return;

    var check = checkFinancialConstraint(costM / 1000, "projektin në " + m.name);
    if (!check.allowed) {
        showToast("❌ " + check.message);
        return;
    }
    if (check.useReserve) {
        state.fiscalReserve = +(state.fiscalReserve - check.shortfall).toFixed(3);
    }
    state.budgetTotalB = +(state.budgetTotalB - (costM / 1000)).toFixed(3);
    m.budgetM += costM;
    m.relationWithGov = clamp((m.relationWithGov || 60) + 18, 0, 100);
    m.localSupportPlayer = clamp((m.localSupportPlayer || 35) + 12, 5, 90);
    if (!m.projects) m.projects = [];
    m.projects.push({ id: "prj_" + Date.now(), title: proj.name, costM: costM, weeksLeft: weeks, totalWeeks: weeks, progress: 10, status: "Në Ndërtim" });

    toggleModal("interactiveActionModal", false);
    addMediaNews("MAPL", "Qeveria ndan €" + costM + "M për \"" + proj.name + "\" në " + m.name + ".", "POSITIVE");
    refreshAllUI();
    showToast("✔ Projekti \"" + proj.name + "\" nisi punimet!");
}

function openMuniNeedsRequest(mIdx) {
    var m = state.municipalities[mIdx];
    if (!m) return;
    var prof = (state.municipalityProfiles || {})[m.id] || {};
    var needs = prof.needs || ["Infrastrukturë", "Shërbime publike"];
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;

    var needOptions = needs.map(function(n) {
        return '<option value="' + n + '">' + n + '</option>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📩 Kërkesë Komunale — ' + m.name + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;">Kryetari i ' + m.name + ' (' + m.mayorName + ') kërkon angazhim për nevojën prioritare.</p>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">1. Nevoja prioritare:</label>' +
            '<select id="muniNeedsSelect" style="width:100%;">' + needOptions + '</select>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">2. Veprimi:</label>' +
            '<select id="muniNeedsAction" style="width:100%;">' +
                '<option value="APPROVE">✅ Prano & financo (€8M)</option>' +
                '<option value="DEFER">⏳ Shty për 3 javë</option>' +
                '<option value="REJECT">❌ Refuzo</option>' +
            '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="submitMuniNeedsRequest(' + mIdx + ')">📤 Dërgo Vendimin</button>';
    toggleModal("interactiveActionModal", true);
}

function submitMuniNeedsRequest(mIdx) {
    if (!assertGovernmentAuthority("Vendimi për kërkesën komunale")) return;
    var m = state.municipalities[mIdx];
    if (!m) return;
    var needEl = document.getElementById("muniNeedsSelect");
    var actionEl = document.getElementById("muniNeedsAction");
    var need = needEl ? needEl.value : "Infrastrukturë";
    var action = actionEl ? actionEl.value : "APPROVE";

    if (action === "APPROVE") {
        var check = checkFinancialConstraint(0.008, "nevojën në " + m.name);
        if (!check.allowed) {
            showToast("❌ " + check.message);
            return;
        }
        if (check.useReserve) {
            state.fiscalReserve = +(state.fiscalReserve - check.shortfall).toFixed(3);
        }
        state.budgetTotalB = +(state.budgetTotalB - 0.008).toFixed(3);
        m.relationWithGov = clamp((m.relationWithGov || 60) + 8, 0, 100);
        m.localSupportPlayer = clamp((m.localSupportPlayer || 35) + 5, 5, 90);
        state.approval = clamp(state.approval + 0.8, 5, 95);
        addMediaNews("MAPL", "Qeveria miraton €8M për \"" + need + "\" në " + m.name + ".", "POSITIVE");
    } else if (action === "DEFER") {
        state.approval = clamp(state.approval - 0.3, 5, 95);
        m.relationWithGov = clamp((m.relationWithGov || 60) - 2, 0, 100);
        showToast("Kërkesa u shty për 3 javë.");
    } else {
        state.approval = clamp(state.approval - 0.8, 5, 95);
        m.relationWithGov = clamp((m.relationWithGov || 60) - 5, 0, 100);
        addMediaNews("KOHA", "Kryetari i " + m.name + " kritikon Qeverinë për refuzimin.", "CRITICAL");
    }
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
}

function runLocalElections() {
    var wonByPlayer = 0;
    var genParties = ["LVV", "PDK", "LDK", "AAK"];
    state.municipalities.forEach(function(m) {
        if (m.mayorParty === "SL" || m.mayorParty === "MIN_MULTI") return;
        var playerSupport = m.localSupportPlayer || state.parties[state.playerParty].poll;
        if (playerSupport >= 48 || Math.random() * 100 < playerSupport) {
            m.mayorParty = state.playerParty;
            m.mayorName = "Kryetar i zgjedhur (" + state.parties[state.playerParty].short + ")";
            wonByPlayer++;
        } else {
            var others = genParties.filter(function(k) { return k !== state.playerParty; });
            m.mayorParty = others[Math.floor(Math.random() * others.length)];
        }
    });
    addMediaNews("KQZ Lokale", "Përfundojnë zgjedhjet lokale; " + state.parties[state.playerParty].short + " fiton " + wonByPlayer + " komuna!", "POSITIVE");
    refreshAllUI();
    showMajorAnnouncement({
        badge: "ZGJEDHJET LOKALE",
        title: "KQZ Certifikon: " + state.parties[state.playerParty].short + " Fiton " + wonByPlayer + " Komuna",
        reason: "Qytetarët votuan bazuar në projektet kapitale.",
        immediateImpact: "Harta e pushtetit lokal u përditësua."
    });
}

function runCampaignAction(type, cost) {
    var myP = state.parties[state.playerParty];
    if (myP.partyFunds < cost) { showToast("Fondi i partisë nuk mjafton!"); return; }
    myP.partyFunds -= cost;
    myP.poll = clamp(myP.poll + (type === "DIASPORA_RALLY" ? 1.8 : 1.2), 2, 75);
    normalizePartyPolls();
    refreshAllUI();
}

function participateTvDebate(strategy) {
    var myP = state.parties[state.playerParty];
    myP.poll = clamp(myP.poll + (strategy === "SOVEREIGNTY_LAW" ? 1.8 : 1.6), 2, 75);
    normalizePartyPolls();
    addMediaNews("Debat Plus", "Sondazhet pas debatit tregojnë rritje për " + myP.leader + ".", "POSITIVE");
    refreshAllUI();
}

function normalizePartyPolls() {
    var genKeys = ["LVV", "PDK", "LDK", "AAK"];
    var totalGen = genKeys.reduce(function(acc, k) { return acc + state.parties[k].poll; }, 0);
    genKeys.forEach(function(k) { state.parties[k].poll = +((state.parties[k].poll / totalGen) * 90.0).toFixed(2); });
}

/* ============================================================================
   38. PANELI I ZHVILLIMIT
   ============================================================================ */

function renderDevelopmentPanel() {
    var container = document.getElementById("developmentPanelContainer");
    if (!container) return;
    var sectors = state.stateSectors || [];
    var avgScore = sectors.length > 0 ? Math.round(sectors.reduce(function(a, s) { return a + s.score; }, 0) / sectors.length) : 0;
    var avgLevel = scoreToLevel(avgScore);
    var activeProjs = (state.developmentProjects || []).filter(function(p) { return p.status === "IN_PROGRESS"; });
    var completedProjs = (state.developmentProjects || []).filter(function(p) { return p.status === "COMPLETED"; });

    var sectorCardsHtml = sectors.map(function(sec) {
        var level = scoreToLevel(sec.score);
        var initialLevel = scoreToLevel(state.sectorInitialScores[sec.id] || sec.score);
        var delta = level - initialLevel;
        var deltaHtml = delta > 0 ? '<span style="color:var(--success);">▲ +' + delta + '</span>' :
                        (delta < 0 ? '<span style="color:var(--danger);">▼ ' + delta + '</span>' :
                        '<span style="color:var(--text-muted);">▬ 0</span>');
        return '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">' +
                '<strong style="font-size:0.82rem;">' + sec.name + '</strong>' +
                '<div style="text-align:right;"><span style="font-size:1.15rem; font-weight:900; color:' + levelColor(level) + ';">' + level + '/10</span><br>' + deltaHtml + '</div>' +
            '</div>' +
            '<div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:4px;">' +
                'Nivel: <strong style="color:' + levelColor(level) + ';">' + levelLabel(level) + '</strong> • ' + sec.score + '/100' +
            '</div>' +
            '<div class="prog-track" style="height:6px; margin-bottom:6px;">' +
                '<div class="prog-fill" style="width:' + sec.score + '%; background:' + levelColor(level) + ';"></div>' +
            '</div>' +
        '</div>';
    }).join("");

    var devProjectsHtml = (state.developmentProjects || []).length === 0
        ? '<div style="padding:12px; background:#0f172a; border-radius:8px; font-size:0.8rem; color:var(--text-muted);">Nuk ka projekte zhvillimore.</div>'
        : state.developmentProjects.slice(0, 10).map(function(p) {
            var statusTag = p.status === "COMPLETED" ? '<span class="tag tag-min">✔</span>' :
                            (p.status === "IN_PROGRESS" ? '<span class="tag tag-gold">🏗️</span>' :
                            (p.status === "DELAYED" ? '<span class="tag tag-lvv">⚠</span>' : '<span class="tag tag-sl">💤</span>'));
            var muni = state.municipalities.find(function(m) { return m.id === p.municipalityId; });
            return '<div class="card" style="background:#0f172a; margin-bottom:6px;">' +
                '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:4px;">' +
                    '<strong style="font-size:0.82rem;">' + p.name + '</strong>' + statusTag +
                '</div>' +
                '<div style="font-size:0.72rem; color:var(--text-muted);">' +
                    '📍 ' + (muni ? muni.name : "—") + ' • €' + p.costM + 'M • ' + (p.status === "COMPLETED" ? "Përfunduar" : (p.weeksLeft + " javë")) +
                '</div>' +
            '</div>';
        }).join("");

    container.innerHTML =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">🏗️ Zhvillimi i Shtetit</div>' +
                '<span class="tag tag-gold">Niveli Kombëtar: ' + avgLevel + '/10</span>' +
            '</div>' +
            '<div class="grid-3" style="margin-bottom:12px;">' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Projekte Aktive</div>' +
                    '<div style="font-size:1.5rem; font-weight:900; color:var(--accent-gold);">' + activeProjs.length + '</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Përfunduar</div>' +
                    '<div style="font-size:1.5rem; font-weight:900; color:var(--success);">' + completedProjs.length + '</div>' +
                '</div>' +
                '<div style="background:#0f172a; padding:12px; border-radius:8px; text-align:center;">' +
                    '<div style="font-size:0.72rem; color:var(--text-muted);">Total</div>' +
                    '<div style="font-size:1.5rem; font-weight:900; color:var(--accent-blue);">' + (state.developmentProjects || []).length + '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div class="card">' +
            '<div class="card-header"><div class="card-title">📊 Sektorët (Niveli 1–10)</div></div>' +
            '<div class="grid-3">' + sectorCardsHtml + '</div>' +
        '</div>' +
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">🏗️ Projektet Zhvillimore</div>' +
                '<button class="action-btn btn-gold" onclick="openDevelopmentProjectModal()">+ Projekto</button>' +
            '</div>' +
            devProjectsHtml +
        '</div>';
}

function openDevelopmentProjectModal() {
    if (!assertGovernmentAuthority("Projektimi i zhvillimit")) return;
    var munis = (state.municipalities || []).slice().sort(function(a, b) { return a.name.localeCompare(b.name); });
    var muniOptions = munis.map(function(m) { return '<option value="' + m.id + '">' + m.name + '</option>'; }).join("");
    var typeOptions = DEVELOPMENT_PROJECT_CATALOG.map(function(t) {
        return '<option value="' + t.type + '">' + t.icon + ' ' + t.name + '</option>';
    }).join("");

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🏗️ Projektim i Ri Zhvillimor</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="grid-2" style="margin-bottom:8px;">' +
            '<div>' +
                '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">1. Komuna:</label>' +
                '<select id="devProjMuni" style="width:100%;">' + muniOptions + '</select>' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">2. Lloji:</label>' +
                '<select id="devProjType" style="width:100%;" onchange="updateDevProjectPreview()">' + typeOptions + '</select>' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:8px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">3. Emri (nga katalogu):</label>' +
            '<input type="text" id="devProjName" placeholder="Zgjidh nga katalogu më poshtë" style="width:100%;" readonly>' +
        '</div>' +
        '<div style="margin-bottom:8px;">' +
            '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">4. Përshkrimi:</label>' +
            '<textarea id="devProjDesc" rows="2" readonly style="width:100%;"></textarea>' +
        '</div>' +
        '<div class="grid-2" style="margin-bottom:8px;">' +
            '<div>' +
                '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">5. Kosto (€M):</label>' +
                '<input type="number" id="devProjCost" min="1" max="100" step="1" value="15" style="width:100%;">' +
            '</div>' +
            '<div>' +
                '<label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">6. Kohëzgjatja (javë):</label>' +
                '<input type="number" id="devProjWeeks" min="4" max="40" step="1" value="10" style="width:100%;">' +
            '</div>' +
        '</div>' +
        '<div id="devProjPreview" style="background:rgba(245,158,11,0.08); padding:8px; border-radius:6px; font-size:0.74rem; margin-bottom:10px;"></div>' +
        '<div style="margin-bottom:10px;">' +
            '<button class="action-btn btn-gold" onclick="openMunicipalProjectCatalogForDev()">📋 Zgjidh Projekt nga Katalogu</button>' +
        '</div>' +
        '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="createDevelopmentProject()">💰 Financo & Nis</button>' +
            '<button class="action-btn btn-outline" onclick="saveDevelopmentProjectAsDraft()">💾 Ruaj si Draft</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
    updateDevProjectPreview();
}

function updateDevProjectPreview() {
    var typeEl = document.getElementById("devProjType");
    if (!typeEl) return;
    var typeVal = typeEl.value;
    var cat = DEVELOPMENT_PROJECT_CATALOG.find(function(t) { return t.type === typeVal; });
    if (!cat) return;
    var muniIdEl = document.getElementById("devProjMuni");
    var muniId = muniIdEl ? muniIdEl.value : "";
    var muni = state.municipalities.find(function(m) { return m.id === muniId; });
    var costEl = document.getElementById("devProjCost");
    var weeksEl = document.getElementById("devProjWeeks");
    var costVal = parseInt(costEl ? costEl.value : 15, 10);
    var weeksVal = parseInt(weeksEl ? weeksEl.value : 10, 10);
    if (costVal < cat.costRangeM[0] && costEl) { costVal = cat.costRangeM[0]; costEl.value = costVal; }
    if (costVal > cat.costRangeM[1] && costEl) { costVal = cat.costRangeM[1]; costEl.value = costVal; }
    var box = document.getElementById("devProjPreview");
    if (!box) return;
    box.innerHTML =
        '📊 <strong>' + cat.icon + ' ' + cat.name + '</strong>' + (muni ? (' në <strong>' + muni.name + '</strong>') : '') + '<br>' +
        '• Kosto: €' + cat.costRangeM[0] + 'M–€' + cat.costRangeM[1] + 'M (aktualisht €' + costVal + 'M)<br>' +
        '• Kohëzgjatja: ' + cat.weeksRange[0] + '–' + cat.weeksRange[1] + ' javë (aktualisht ' + weeksVal + ' javë)<br>' +
        '• Përfitimet: +' + cat.sectorGain + ' pikë sektori<br>' +
        '• Rreziku: ' + cat.riskText;
}

function openMunicipalProjectCatalogForDev() {
    var muniIdEl = document.getElementById("devProjMuni");
    if (!muniIdEl) return;
    var muniId = muniIdEl.value;
    var muni = state.municipalities.find(function(m) { return m.id === muniId; });
    if (!muni) return;
    var prof = (state.municipalityProfiles || {})[muni.id] || {};

    var relevantProjects = MUNICIPAL_PROJECT_CATALOG.filter(function(proj) {
        var projNeeds = proj.needs || [];
        var muniNeeds = prof.needs || [];
        return projNeeds.some(function(pn) {
            return muniNeeds.some(function(mn) {
                return mn.toLowerCase().indexOf(pn.toLowerCase()) !== -1 || pn.toLowerCase().indexOf(mn.toLowerCase()) !== -1;
            });
        });
    });
    if (relevantProjects.length === 0) relevantProjects = MUNICIPAL_PROJECT_CATALOG;

    var cardsHtml = relevantProjects.map(function(proj) {
        var costMid = Math.round((proj.costRangeM[0] + proj.costRangeM[1]) / 2);
        var weeksMid = Math.round((proj.weeksRange[0] + proj.weeksRange[1]) / 2);
        return '<div class="card" style="background:#0f172a; margin-bottom:6px; padding:10px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:flex-start; gap:6px; margin-bottom:4px;">' +
                '<strong style="font-size:0.84rem;">' + proj.icon + ' ' + proj.name + '</strong>' +
            '</div>' +
            '<div style="font-size:0.73rem; color:var(--text-muted); margin-bottom:6px;">' +
                '📍 ' + muni.name + ' • €' + proj.costRangeM[0] + '–€' + proj.costRangeM[1] + 'M (mesatare €' + costMid + 'M)<br>' +
                '⏱️ ' + proj.weeksRange[0] + '–' + proj.weeksRange[1] + ' javë' +
            '</div>' +
            '<button class="action-btn btn-gold" onclick="selectCatalogProjectForDev(\'' + proj.type + '\', ' + costMid + ', ' + weeksMid + ')">✅ Zgjidh</button>' +
        '</div>';
    }).join("");

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📋 Katalogu — ' + muni.name + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="max-height:500px; overflow-y:auto;">' + cardsHtml + '</div>';
    toggleModal("interactiveActionModal", true);
}

function selectCatalogProjectForDev(type, costM, weeks) {
    var proj = MUNICIPAL_PROJECT_CATALOG.find(function(p) { return p.type === type; });
    if (!proj) return;
    var devCat = DEVELOPMENT_PROJECT_CATALOG.find(function(t) { return t.sectorId === proj.sectorId; });
    if (!devCat) {
        var typeMap = { ROAD_RURAL: "ROAD", SCHOOL_RENOVATION: "SCHOOL", HEALTH_CENTER: "HEALTH", WATER_SUPPLY: "WATER", URBAN_TRAFFIC: "ROAD", PUBLIC_TRANSPORT: "TRANSPORT", ECONOMIC_PARK: "ECONOMIC_ZONE", GREEN_SPACE: "ENVIRONMENT", DIGITAL_SERVICES: "DIGITAL", AGRICULTURE_SUPPORT: "AGRICULTURE", CULTURAL_HERITAGE: "ENVIRONMENT", TOURISM_INFRA: "ENVIRONMENT" };
        devCat = DEVELOPMENT_PROJECT_CATALOG.find(function(t) { return t.type === typeMap[type]; });
    }
    if (!devCat) return;
    toggleModal("interactiveActionModal", false);
    setTimeout(function() {
        openDevelopmentProjectModal();
        setTimeout(function() {
            var typeEl = document.getElementById("devProjType");
            var nameEl = document.getElementById("devProjName");
            var descEl = document.getElementById("devProjDesc");
            var costEl = document.getElementById("devProjCost");
            var weeksEl = document.getElementById("devProjWeeks");
            if (typeEl) typeEl.value = devCat.type;
            if (nameEl) nameEl.value = proj.icon + ' ' + proj.name;
            if (descEl) descEl.value = "Projekt i simuluar për " + proj.name + ".";
            if (costEl) costEl.value = costM;
            if (weeksEl) weeksEl.value = weeks;
            updateDevProjectPreview();
        }, 50);
    }, 50);
}

function createDevelopmentProject() {
    if (!assertGovernmentAuthority("Krijimi i projektit zhvillimor")) return;
    var muniIdEl = document.getElementById("devProjMuni");
    var typeEl = document.getElementById("devProjType");
    var nameEl = document.getElementById("devProjName");
    var descEl = document.getElementById("devProjDesc");
    var costEl = document.getElementById("devProjCost");
    var weeksEl = document.getElementById("devProjWeeks");
    if (!muniIdEl || !typeEl || !nameEl) return;
    var muniId = muniIdEl.value;
    var typeVal = typeEl.value;
    var name = (nameEl.value || "").trim();
    var desc = descEl ? (descEl.value || "").trim() : "";
    var costM = parseInt(costEl ? costEl.value : "15", 10);
    var weeksTotal = parseInt(weeksEl ? weeksEl.value : "10", 10);
    if (!name || name.length < 5) { showToast("Zgjidhni një projekt nga katalogu!"); return; }
    var cat = DEVELOPMENT_PROJECT_CATALOG.find(function(t) { return t.type === typeVal; });
    if (!cat) { showToast("Lloj projekti i pavlefshëm!"); return; }
    costM = clamp(costM, cat.costRangeM[0], cat.costRangeM[1]);
    weeksTotal = clamp(weeksTotal, cat.weeksRange[0], cat.weeksRange[1]);

    var check = checkFinancialConstraint(costM / 1000, "projektin \"" + name + "\"");
    if (!check.allowed) { showToast("❌ " + check.message); return; }
    if (check.useReserve) { state.fiscalReserve = +(state.fiscalReserve - check.shortfall).toFixed(3); }
    state.budgetTotalB = +(state.budgetTotalB - (costM / 1000)).toFixed(3);
    state.developmentProjectCounter = (state.developmentProjectCounter || 0) + 1;

    var proj = {
        id: "proj_" + Date.now() + "_" + state.developmentProjectCounter,
        name: name, desc: desc, type: typeVal, sectorId: cat.sectorId, municipalityId: muniId,
        ministry: "MMPHI", costM: costM, weeksTotal: weeksTotal, weeksLeft: weeksTotal, progress: 0,
        status: "IN_PROGRESS", createdWeek: state.turnCount, completedWeek: null,
        benefits: { sectorGain: cat.sectorGain, muniGains: { infrastructure: cat.muniInfraGain || 0, services: cat.muniServGain || 0, employment: cat.muniEmpGain || 0, development: cat.devGain || 0, education: cat.muniEducGain || 0, health: cat.muniHealthGain || 0, water: cat.muniWaterGain || 0, connectivity: cat.muniConnectGain || 0 } }
    };
    state.developmentProjects.unshift(proj);
    var muni = state.municipalities.find(function(m) { return m.id === muniId; });
    addMediaNews("Ekonomia Online", "Nis projekti \"" + name + "\" në " + (muni ? muni.name : "—") + ".", "POSITIVE");
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("✔ Projekti nisi zbatimin!");
}

function saveDevelopmentProjectAsDraft() {
    if (!assertGovernmentAuthority("Ruajtja e propozimit")) return;
    var muniIdEl = document.getElementById("devProjMuni");
    var typeEl = document.getElementById("devProjType");
    var nameEl = document.getElementById("devProjName");
    if (!muniIdEl || !typeEl || !nameEl) return;
    var name = (nameEl.value || "").trim();
    if (!name) { showToast("Zgjidhni projekt nga katalogu!"); return; }
    state.developmentProjectCounter = (state.developmentProjectCounter || 0) + 1;
    state.developmentProjects.unshift({
        id: "proj_draft_" + Date.now(),
        name: name, type: typeEl.value, municipalityId: muniIdEl.value,
        costM: parseInt(document.getElementById("devProjCost").value, 10),
        weeksTotal: parseInt(document.getElementById("devProjWeeks").value, 10),
        weeksLeft: parseInt(document.getElementById("devProjWeeks").value, 10),
        status: "PROPOSED", progress: 0
    });
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("💾 Projekti u ruajt si propozim.");
}

function processDevelopmentWeek() {
    if (!state.developmentProjects) state.developmentProjects = [];
    var updatedProjects = [];
    var reportLines = [];
    var totalSpentM = 0;

    state.developmentProjects.forEach(function(p) {
        if (p.status === "IN_PROGRESS") {
            p.weeksLeft = Math.max(0, (p.weeksLeft || 0) - 1);
            p.progress = Math.min(100, Math.round(((p.weeksTotal - p.weeksLeft) / p.weeksTotal) * 100));
            var weeklyCostB = (p.costM / 1000) / p.weeksTotal;
            if ((state.budgetTotalB || 0) < weeklyCostB) {
                p.status = "DELAYED";
                p.delayReason = "Mungesë financimi";
                updatedProjects.push({ name: p.name, status: "DELAYED", reason: p.delayReason });
                return;
            }
            state.budgetTotalB = +(state.budgetTotalB - weeklyCostB).toFixed(3);
            totalSpentM += (p.costM / p.weeksTotal);

            if (p.weeksLeft === 0) {
                p.status = "COMPLETED";
                p.completedWeek = state.turnCount;
                p.progress = 100;
                var sec = (state.stateSectors || []).find(function(s) { return s.id === p.sectorId; });
                if (sec) {
                    sec.score = clamp(sec.score + (p.benefits.sectorGain || 5), 10, 100);
                    if (!state.sectorHistory[sec.id]) state.sectorHistory[sec.id] = [];
                    state.sectorHistory[sec.id].push({ week: state.turnCount, score: sec.score });
                }
                var prof = state.municipalityProfiles[p.municipalityId];
                if (prof) {
                    var gains = p.benefits.muniGains || {};
                    if (gains.infrastructure) prof.infrastructure = clamp((prof.infrastructure || 5) + Math.round(gains.infrastructure / 5), 1, 10);
                    if (gains.services) prof.services = clamp((prof.services || 5) + Math.round(gains.services / 5), 1, 10);
                    if (gains.employment) prof.employment = clamp((prof.employment || 5) + Math.round(gains.employment / 5), 1, 10);
                    if (gains.development) prof.development = clamp((prof.development || 5) + Math.round(gains.development / 5), 1, 10);
                }
                state.approval = clamp(state.approval + 1.2, 5, 95);
                var muniObj = state.municipalities.find(function(m) { return m.id === p.municipalityId; });
                var muniName = muniObj ? muniObj.name : "—";
                addMediaNews("Ekonomia Online", "Përfundoi projekti \"" + p.name + "\" në " + muniName + "!", "POSITIVE");
                updatedProjects.push({ name: p.name, status: "COMPLETED", reason: "U dorëzua me sukses" });
            }
        }
    });

    if (updatedProjects.length > 0 || totalSpentM > 0) {
        var reportHtml = '<strong>📊 Raporti Javor i Zhvillimit (Java ' + state.turnCount + ')</strong><br>';
        if (totalSpentM > 0) reportHtml += '💸 Shpenzuar: <strong>€' + totalSpentM.toFixed(1) + 'M</strong>.<br>';
        updatedProjects.forEach(function(u) {
            var icon = u.status === "COMPLETED" ? "✅" : (u.status === "DELAYED" ? "⚠️" : "•");
            reportHtml += icon + ' <strong>' + u.name + '</strong> — ' + u.reason + '<br>';
        });
        state.sectorWeeklyReport = reportHtml;
        state.municipalityWeeklyReport = reportHtml;
        state._developmentReportPending = true;
        state.lastDevelopmentReportWeek = state.turnCount;
    } else {
        state._developmentReportPending = false;
    }
}

function updateMunicipalityProfilesWeek() {
    if (!state.municipalityProfiles) return;
    (state.municipalities || []).forEach(function(m) {
        var prof = state.municipalityProfiles[m.id];
        if (!prof) return;
        var activeProjects = (m.projects || []).filter(function(p) { return p.status === "Në Ndërtim"; });
        if (activeProjects.length > 0) {
            prof.infrastructure = clamp((prof.infrastructure || 5) + 0.05, 1, 10);
        }
    });
}

/* VAZHDON në pjesën 7 */
/* ============================================================================
   39. DIPLOMACIA DHE DIALOGU NË BRUKSEL
   ============================================================================ */

function renderDiplomacySection() {
    var step = state.dialogueChronologyStep || 1;
    var inv = state.dialogueInvitation || {};

    var stepLabels = [
        "1. Ftesa & Konteksti",
        "2. Konsultimet me Aleatët",
        "3. Propozimi i Kosovës",
        "4. Raundi në Bruksel",
        "5. Rezultati & Monitorimi"
    ];

    var pillsHtml = stepLabels.map(function(lbl, idx) {
        var cls = (step === idx + 1) ? "tag-gold" : (step > idx + 1 ? "tag-min" : "tag-sl");
        return '<span class="tag ' + cls + '" style="font-size:0.7rem;">' + lbl + '</span>';
    }).join(" ");

    var invStatusHtml = "";
    if (inv.active && inv.responseStatus === "PENDING") {
        invStatusHtml = '<div style="background:rgba(245,158,11,0.12); padding:12px; border-radius:8px; margin-bottom:10px; border-left:4px solid var(--accent-gold);">' +
            '<div style="font-size:0.85rem; font-weight:700; color:var(--accent-gold); margin-bottom:6px;">📨 Ftesë Aktive</div>' +
            '<div style="font-size:0.78rem; line-height:1.6;">' +
                '• <strong>Dërguesi:</strong> ' + inv.inviter + '<br>' +
                '• <strong>Afati:</strong> edhe ' + inv.deadlineWeeks + ' javë<br>' +
                '• <strong>Arsyeja:</strong> ' + inv.reason +
            '</div>' +
            '<div style="display:flex; gap:6px; margin-top:10px; flex-wrap:wrap;">' +
                '<button class="action-btn btn-success" onclick="respondToInvitation(\'ACCEPTED\')">✔ Prano</button>' +
                '<button class="action-btn btn-outline" onclick="respondToInvitation(\'POSTPONED\')">⏳ Shty</button>' +
                '<button class="action-btn btn-danger" onclick="respondToInvitation(\'REFUSED\')">✕ Refuzo</button>' +
            '</div>' +
        '</div>';
    } else if (inv.responseStatus === "ACCEPTED") {
        invStatusHtml = '<div style="background:rgba(16,185,129,0.12); padding:10px; border-radius:8px; margin-bottom:10px; font-size:0.78rem; border-left:3px solid var(--success);">✔ Ftesa u pranua (' + inv.respondedAt + ')</div>';
    } else if (inv.responseStatus === "POSTPONED") {
        invStatusHtml = '<div style="background:rgba(245,158,11,0.12); padding:10px; border-radius:8px; margin-bottom:10px; font-size:0.78rem; border-left:3px solid var(--warning);">⏳ Ftesa u shty</div>';
    } else if (inv.responseStatus === "REFUSED") {
        invStatusHtml = '<div style="background:rgba(239,68,68,0.12); padding:10px; border-radius:8px; margin-bottom:10px; font-size:0.78rem; border-left:3px solid var(--danger);">✕ Ftesa u refuzua</div>';
    } else {
        invStatusHtml = '<div style="background:#0f172a; padding:10px; border-radius:8px; margin-bottom:10px; font-size:0.78rem; color:var(--text-muted);">📭 Nuk ka ftesë aktive.</div>';
    }

    var consultKeys = ["USA", "EU", "GERMANY", "UK"];
    var consultList = consultKeys.map(function(k) {
        var d = state.diplomacy[k];
        if (!d) return "";
        var c = state.dialogueConsultations[k];
        var statusTxt = c ? ('<span style="color:var(--success);">✔ ' + c.method + '</span>') : '<span style="color:var(--text-muted);">Nuk është konsultuar</span>';
        return '<div style="background:#0f172a; padding:6px 8px; border-radius:6px; margin-bottom:4px; font-size:0.76rem;">' +
            '<strong>' + d.name.split("(")[0].trim() + '</strong> (' + d.score + '/100) — ' + statusTxt +
        '</div>';
    }).join("");

    var logHtml = (state.dialogueNegotiationLog || []).slice(0, 3).map(function(l) {
        return '<div style="font-size:0.73rem; color:var(--text-muted); margin-bottom:2px;">• ' + l + '</div>';
    }).join("");

    var proposalHtml = state.dialogueProposal
        ? '<div style="background:#0f172a; padding:8px 10px; border-radius:6px; font-size:0.76rem; margin-bottom:8px;">' +
            '<div><strong>Tema:</strong> ' + state.dialogueProposal.topic + '</div>' +
            '<div><strong>Qëndrimi:</strong> ' + state.dialogueProposal.stance + '</div>' +
            '<div><strong>Garancia:</strong> ' + state.dialogueProposal.guarantee + '</div>' +
            '<div><strong>Vija e kuqe:</strong> ' + state.dialogueProposal.redLine + '</div>' +
          '</div>'
        : '<div style="font-size:0.76rem; color:var(--text-muted); margin-bottom:8px;">Nuk është përgatitur propozim.</div>';

    var dialogueContainer = document.getElementById("dialogueBrusselsContainer");
    if (dialogueContainer) {
        dialogueContainer.innerHTML =
            '<div class="card">' +
                '<div class="card-header">' +
                    '<div class="card-title">🇪🇺 Dialogu me Brukselin — Proces 5-Hapësh</div>' +
                    '<span class="tag tag-pdk">Faza ' + step + ' / 5 • Progresi: ' + state.dialogueProgress + '%</span>' +
                '</div>' +
                '<div style="display:flex; gap:5px; flex-wrap:wrap; margin-bottom:12px;">' + pillsHtml + '</div>' +
                invStatusHtml +
                '<div class="grid-2">' +
                    '<div>' +
                        '<div style="font-size:0.8rem; font-weight:700; color:var(--accent-gold); margin-bottom:6px;">🤝 Konsultimet me Aleatët:</div>' +
                        consultList +
                        '<button class="action-btn btn-gold" style="margin-top:8px;" onclick="openDialogueStepModal()">▶ Vepro në Fazën ' + step + '</button>' +
                    '</div>' +
                    '<div>' +
                        '<div style="font-size:0.8rem; font-weight:700; color:var(--accent-gold); margin-bottom:6px;">📋 Propozimi:</div>' +
                        proposalHtml +
                        '<div style="font-size:0.8rem; font-weight:700; color:var(--accent-gold); margin-bottom:4px;">📜 Historiku:</div>' +
                        logHtml +
                    '</div>' +
                '</div>' +
                '<div style="margin-top:10px; display:flex; gap:6px; flex-wrap:wrap;">' +
                    '<button class="action-btn btn-outline" onclick="executeNorthSecurityOperation()">🛡️ Forco Rendin në Veri</button>' +
                    '<button class="action-btn btn-outline" onclick="consultAlliesOffTable()">🤝 Konsultim i Shpejtë</button>' +
                '</div>' +
            '</div>';
    }

    var bilatContainer = document.getElementById("diplomacyBilateralContainer");
    if (bilatContainer) {
        var bilatHtml = Object.entries(state.diplomacy).map(function(entry) {
            var k = entry[0];
            var d = entry[1];
            var tagCls = d.score >= 75 ? "tag-min" : "tag-aak";
            var cityTxt = d.city || "Kryeqytet";
            var offTxt = d.official || "Homologu";
            return '<div class="card" style="background:#0f172a; margin-bottom:0;">' +
                '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                    '<strong>' + d.name + '</strong>' +
                    '<span class="tag ' + tagCls + '">' + d.score + ' / 100</span>' +
                '</div>' +
                '<div style="font-size:0.74rem; color:var(--accent-gold); margin-bottom:4px;">📍 ' + cityTxt + ' • ' + offTxt + '</div>' +
                '<p style="font-size:0.76rem; color:var(--text-muted); margin-bottom:10px;">' + d.note + '</p>' +
                '<button class="action-btn btn-gold" onclick="openBilateralVisitModal(\'' + k + '\')">✈️ Vizitë në ' + cityTxt + ' ▶</button>' +
            '</div>';
        }).join("");
        bilatContainer.innerHTML = '<div class="grid-2">' + bilatHtml + '</div>';
    }

    renderDialogueMonitoring();
}

function renderDialogueMonitoring() {
    var container = document.getElementById("dialogueMonitoringContainer");
    if (!container) return;
    var agreements = state.dialogueAgreements || [];
    var history = state.dialogueRoundHistory || [];

    var agreeHtml = agreements.length === 0
        ? '<div style="padding:14px; background:#0f172a; border-radius:8px; color:var(--text-muted); font-size:0.8rem;">Nuk ka marrëveshje në monitorim.</div>'
        : agreements.map(function(a) {
            var statusBadge = a.status === "FULFILLED" ? '<span class="tag tag-min">✔ ZBATUAR</span>'
                : (a.status === "FAILED" ? '<span class="tag tag-sl">✕ DËSHTOI</span>' : '<span class="tag tag-gold">⏳ NË ZBATIM</span>');
            return '<div class="card" style="background:#0f172a; margin-bottom:8px;">' +
                '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">' +
                    '<strong style="font-size:0.84rem;">📋 ' + a.title + '</strong>' + statusBadge +
                '</div>' +
                '<div style="font-size:0.75rem; color:var(--text-muted); line-height:1.5;">' +
                    '• Partneri: <strong>' + a.partner + '</strong><br>' +
                    '• Nënshkruar: ' + a.signedDate + '<br>' +
                    '• Afati: ' + a.deadlineWeeks + ' javë<br>' +
                    '• Përmbajtja: ' + a.summary +
                '</div>' +
            '</div>';
        }).join("");

    var histHtml = history.length === 0
        ? '<div style="font-size:0.78rem; color:var(--text-muted);">Nuk ka raunde të kryera.</div>'
        : history.slice(0, 5).map(function(h) {
            return '<div style="padding:6px 8px; background:#0f172a; border-radius:6px; margin-bottom:4px; font-size:0.75rem;">' +
                '• <strong>' + h.date + '</strong> — ' + h.result +
            '</div>';
        }).join("");

    container.innerHTML =
        '<div class="card">' +
            '<div class="card-header">' +
                '<div class="card-title">📋 Monitorimi i Marrëveshjeve</div>' +
                '<span class="tag tag-min">' + agreements.length + ' aktive</span>' +
            '</div>' +
            '<h4 style="font-size:0.85rem; color:var(--accent-gold); margin-bottom:8px;">Marrëveshjet:</h4>' +
            agreeHtml +
            '<h4 style="font-size:0.85rem; color:var(--accent-gold); margin-top:12px; margin-bottom:8px;">Historiku:</h4>' +
            histHtml +
        '</div>';
}

function openDialogueStepModal() {
    var step = state.dialogueChronologyStep || 1;
    var inv = state.dialogueInvitation;

    if (step === 1 && inv && inv.responseStatus === "PENDING" && inv.active) {
        openInvitationResponseModal();
        return;
    }
    if (step === 1) { openDialogueStep1_Context(); }
    else if (step === 2) { openDialogueStep2_Consultations(); }
    else if (step === 3) { openDialogueStep3_Proposal(); }
    else if (step === 4) { openDialogueStep4_BrusselsRound(); }
    else { openDialogueStep5_Result(); }
}

function openInvitationResponseModal() {
    var inv = state.dialogueInvitation;
    if (!inv) return;
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">📨 Ftesa për Dialogun</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; margin-bottom:10px; font-size:0.82rem; line-height:1.6;">' +
            '<div><strong>Dërguesi:</strong> ' + inv.inviter + '</div>' +
            '<div><strong>Arsyeja:</strong> ' + inv.reason + '</div>' +
            '<div><strong>Rendi i ditës:</strong> ' + inv.agenda + '</div>' +
            '<div><strong>Afati:</strong> edhe <strong style="color:var(--accent-gold);">' + inv.deadlineWeeks + ' javë</strong></div>' +
        '</div>' +
        '<div style="display:flex; flex-direction:column; gap:7px;">' +
            '<button class="choice-btn" onclick="respondToInvitation(\'ACCEPTED\')">' +
                '<span class="choice-title">1. ✔ Prano ftesën</span>' +
                '<span class="choice-impact">+3 pikë BE/SHBA, +1.5% mbështetje</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="respondToInvitation(\'POSTPONED\')">' +
                '<span class="choice-title">2. ⏳ Kërko shtyrje</span>' +
                '<span class="choice-impact">-2 pikë BE, +1% popullaritet vendor</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="respondToInvitation(\'REFUSED\')" style="border-color:rgba(239,68,68,0.4);">' +
                '<span class="choice-title" style="color:var(--danger);">3. ✕ Refuzo</span>' +
                '<span class="choice-impact">-8 pikë BE, -5 SHBA, +2.5% popullaritet vendor</span>' +
            '</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function respondToInvitation(decision) {
    var inv = state.dialogueInvitation;
    if (!inv || inv.responseStatus !== "PENDING") {
        toggleModal("interactiveActionModal", false);
        showToast("Kjo ftesë është trajtuar tashmë!");
        return;
    }
    inv.responseStatus = decision;
    inv.respondedAt = MONTHS_SQ[state.monthIndex] + " " + state.year + " (Java " + state.week + ")";

    if (decision === "ACCEPTED") {
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + 3, 10, 100);
        state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 2, 10, 100);
        state.approval = clamp(state.approval + 1.5, 5, 95);
        state.dialogueChronologyStep = 2;
        addMediaNews("RTK / Bruksel", "Kosova pranon ftesën për raundin e dialogut.", "POSITIVE");
        state.dialogueNegotiationLog.unshift(inv.respondedAt + ": Ftesa u pranua; kalon në konsultime.");
        showToast("Ftesa u pranua!");
    } else if (decision === "POSTPONED") {
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 2, 10, 100);
        state.approval = clamp(state.approval + 1.0, 5, 95);
        inv.deadlineWeeks = Math.max(1, inv.deadlineWeeks - 1);
        addMediaNews("Klan Kosova", "Kosova kërkon shtyrje; BE shpreh shqetësim.", "NEUTRAL");
        state.dialogueNegotiationLog.unshift(inv.respondedAt + ": Ftesa u shty.");
        showToast("Ftesa u shty! BE u prek (-2 pikë).");
    } else {
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 8, 10, 100);
        state.diplomacy.USA.score = clamp(state.diplomacy.USA.score - 5, 10, 100);
        state.diplomacy.GERMANY.score = clamp(state.diplomacy.GERMANY.score - 5, 10, 100);
        state.approval = clamp(state.approval + 2.5, 5, 95);
        addMediaNews("KOHA", "Kosova refuzon ftesën; QUINT shpreh zhgënjim.", "CRITICAL");
        state.dialogueNegotiationLog.unshift(inv.respondedAt + ": Ftesa u refuzua.");
        state.dialogueChronologyStep = 1;
        showToast("Ftesa u refuzua! Pasoja diplomatike.");
    }

    toggleModal("interactiveActionModal", false);
    refreshAllUI();
}

function openDialogueStep1_Context() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var inv = state.dialogueInvitation;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🇪🇺 Hapi 1 / 5: Ftesa & Konteksti</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:12px; border-radius:8px; margin-bottom:10px; font-size:0.82rem; line-height:1.6;">' +
            '<div><strong>Dërguesi:</strong> ' + inv.inviter + '</div>' +
            '<div><strong>Statusi:</strong> <span style="color:var(--success);">' + inv.responseStatus + '</span> (' + inv.respondedAt + ')</div>' +
            '<div><strong>Arsyeja:</strong> ' + inv.reason + '</div>' +
            '<div><strong>Rendi i ditës:</strong> ' + inv.agenda + '</div>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="advanceDialogueStep(2)">Kalo në Konsultimet me Aleatët ▶</button>';
    toggleModal("interactiveActionModal", true);
}

function openDialogueStep2_Consultations() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var consultKeys = ["USA", "EU", "GERMANY", "UK"];
    var consultCards = consultKeys.map(function(k) {
        var d = state.diplomacy[k];
        if (!d) return "";
        var already = state.dialogueConsultations[k];
        var statusBadge = already ? '<span class="tag tag-min">✔ Konsultuar</span>' : '<span class="tag tag-gold">Nuk është konsultuar</span>';
        var actionBtns = already
            ? '<div style="font-size:0.74rem; color:var(--text-muted);">Metoda: ' + already.method + '</div>'
            : '<div style="display:flex; gap:5px; flex-wrap:wrap;">' +
                '<button class="btn-top" onclick="startConsultationSession(\'' + k + '\')">🤝 Nis Konsultimin (3 Hapa)</button>' +
              '</div>';
        return '<div class="card" style="background:#0f172a; margin-bottom:6px;">' +
            '<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">' +
                '<strong style="font-size:0.82rem;">' + d.name.split("(")[0].trim() + '</strong>' +
                statusBadge +
            '</div>' +
            '<div style="font-size:0.73rem; color:var(--text-muted); margin-bottom:6px;">Raporti: <strong>' + d.score + '/100</strong></div>' +
            actionBtns +
        '</div>';
    }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🇪🇺 Hapi 2 / 5: Konsultimet me Aleatët</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:10px;">Konsultohu me partnerët strategjikë përmes një procesi 3-hapësh.</p>' +
        consultCards +
        '<div style="margin-top:10px; display:flex; gap:6px;">' +
            '<button class="action-btn btn-gold" onclick="advanceDialogueStep(3)">Kalo në Propozim (Hapi 3) ▶</button>' +
            '<button class="action-btn btn-outline" onclick="toggleModal(\'interactiveActionModal\', false)">Mbylle</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function startConsultationSession(partnerKey) {
    var d = state.diplomacy[partnerKey];
    if (!d) return;
    if (state.dialogueConsultations[partnerKey]) {
        showToast("Ky partner është konsultuar tashmë!");
        return;
    }
    state.consultationSessions[partnerKey] = {
        partnerKey: partnerKey,
        partnerName: d.name,
        step: 1,
        maxSteps: 3,
        purpose: "",
        offer: "",
        response: null
    };

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🤝 Konsultim me ' + d.name.split("(")[0].trim() + ' — Hapi 1/3</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="background:#0f172a; padding:10px; border-radius:6px; margin-bottom:10px; font-size:0.78rem;">' +
            'Raporti: <strong>' + d.score + '/100</strong>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + d.name.split("(")[0].trim() + ':</strong> "Për çfarë dëshironi të konsultoheni?"</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">1. Qëllimi:</label>' +
            '<select id="consultPurpose" style="width:100%;">' +
                '<option value="SUPPORT">Mbështetje diplomatike për dialogun</option>' +
                '<option value="SECURITY">Koordinim për sigurinë në veri</option>' +
                '<option value="ECONOMIC">Bashkëpunim ekonomik</option>' +
                '<option value="EU_PATH">Mbështetje për rrugën evropiane</option>' +
            '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="consultationStep2(\'' + partnerKey + '\')">Vazhdo në Hapin 2 ▶</button>';
    toggleModal("interactiveActionModal", true);
}

function consultationStep2(partnerKey) {
    var session = state.consultationSessions[partnerKey];
    if (!session) return;
    var purposeEl = document.getElementById("consultPurpose");
    session.purpose = purposeEl ? purposeEl.value : "SUPPORT";
    session.step = 2;

    var d = state.diplomacy[partnerKey];
    var purposeLabels = {
        SUPPORT: "mbështetje diplomatike",
        SECURITY: "koordinim për sigurinë",
        ECONOMIC: "bashkëpunim ekonomik",
        EU_PATH: "mbështetje për rrugën evropiane"
    };

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🤝 Konsultim me ' + d.name.split("(")[0].trim() + ' — Hapi 2/3</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + d.name.split("(")[0].trim() + ':</strong> "Për ' + purposeLabels[session.purpose] + ', çka ofroni?"</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">2. Oferta:</label>' +
            '<select id="consultOffer" style="width:100%;">' +
                '<option value="RECIPROCITY">Reciprocitet i plotë</option>' +
                '<option value="TRANSPARENCY">Transparencë e plotë</option>' +
                '<option value="COORDINATION">Koordinim me QUINT</option>' +
                '<option value="NOTHING">Pa ofertë</option>' +
            '</select>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.74rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:4px;">3. Qëndrimi:</label>' +
            '<select id="consultStance" style="width:100%;">' +
                '<option value="FIRM">I vendosur</option>' +
                '<option value="FLEXIBLE">Fleksibël</option>' +
                '<option value="CAUTIOUS">I kujdesshëm</option>' +
            '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="consultationStep3(\'' + partnerKey + '\')">Vazhdo në Hapin 3 ▶</button>';
}

function consultationStep3(partnerKey) {
    var session = state.consultationSessions[partnerKey];
    if (!session) return;
    var offerEl = document.getElementById("consultOffer");
    var stanceEl = document.getElementById("consultStance");
    session.offer = offerEl ? offerEl.value : "RECIPROCITY";
    session.stance = stanceEl ? stanceEl.value : "CAUTIOUS";
    session.step = 3;

    var d = state.diplomacy[partnerKey];
    var baseGain = session.stance === "FLEXIBLE" ? 4 : (session.stance === "FIRM" ? 3 : 2);
    if (session.offer === "NOTHING") baseGain = 1;

    var successChance = 0.5;
    if (d.score >= 80) successChance = 0.9;
    else if (d.score >= 65) successChance = 0.75;
    else if (d.score >= 50) successChance = 0.55;
    else successChance = 0.3;

    if (session.stance === "FLEXIBLE") successChance += 0.1;
    if (session.stance === "FIRM") successChance -= 0.05;

    var success = Math.random() < successChance;
    var actualGain = success ? baseGain : Math.max(0, baseGain - 2);

    var reactionText = "";
    if (success) {
        reactionText = "Konsultimi ishte konstruktiv. " + d.name.split("(")[0].trim() + " vlerësoi qasjen tuaj. (+" + actualGain + " pikë)";
    } else {
        reactionText = "Aleati shprehu rezerva. Kërkon më shumë angazhim konkret. (+" + actualGain + " pikë)";
    }

    d.score = clamp(d.score + actualGain, 10, 100);
    session.response = { success: success, gain: actualGain, text: reactionText };

    state.dialogueConsultations[partnerKey] = {
        method: "MEETING_3STEP",
        topic: session.purpose,
        gain: actualGain,
        date: MONTHS_SQ[state.monthIndex] + " " + state.year
    };

    state.dialogueNegotiationLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + ": Konsultim me " + d.name.split("(")[0].trim() + " (" + actualGain + " pikë).");

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🤝 Rezultati i Konsultimit</div>' +
            '<span class="tag ' + (success ? 'tag-min' : 'tag-aak') + '">' + (success ? "KONSTRUKTIV" : "REZERVË") + '</span>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>' + d.name.split("(")[0].trim() + ':</strong> "' + reactionText + '"</div>' +
        '<div style="background:#0f172a; padding:10px; border-radius:6px; margin-bottom:10px; font-size:0.76rem;">' +
            '• <strong>Raporti i ri:</strong> ' + d.score + '/100<br>' +
            '• <strong>Qëllimi:</strong> ' + session.purpose +
        '</div>' +
        '<div style="display:flex; gap:6px;">' +
            '<button class="action-btn btn-gold" onclick="openDialogueStep2_Consultations()">Kthehu</button>' +
            '<button class="action-btn btn-outline" onclick="toggleModal(\'interactiveActionModal\', false); refreshAllUI();">Mbylle</button>' +
        '</div>';
    refreshAllUI();
}

function openDialogueStep3_Proposal() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var topicOptions = [
        "Zbatimi i Marrëveshjes së Ohrit",
        "Siguria në Veri dhe integrimi institucional",
        "Të drejtat e komuniteteve dhe Asociacioni",
        "Plani i Rritjes i BE-së",
        "Koordinimi me NATO dhe SHBA"
    ];
    var stanceOptions = [
        "Kërkojmë njohje de-facto",
        "Kërkojmë reciprocitet të plotë",
        "Kërkojmë sekuencim gradual",
        "Kërkojmë zbatim paralel"
    ];
    var guaranteeOptions = [
        "Verifikim nga Gjykata Kushtetuese",
        "Garanci sigurie nga NATO",
        "Monitorim i BE-së",
        "Zbatim hap-pas-hapi"
    ];
    var offerOptions = [
        "Angazhim për dialog të vazhdueshëm",
        "Hapje e zyrës rajonale",
        "Zbatim i masave të besimit",
        "Pjesëmarrje në forumin rajonal"
    ];
    var redLineOptions = [
        "Asnjë asociacion me kompetenca ekzekutive",
        "Asnjë njohje që cenon sovranitetin",
        "Asnjë tërheqje e Policisë nga veriu",
        "Asnjë ndryshim kushtetues"
    ];

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🇪🇺 Hapi 3 / 5: Propozimi i Kosovës</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div class="grid-2" style="gap:8px;">' +
            '<div><label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">1. Tema:</label>' +
                '<select id="dlgPropTopic" style="width:100%; margin-bottom:6px;">' + topicOptions.map(function(o) { return '<option value="' + o + '">' + o + '</option>'; }).join("") + '</select></div>' +
            '<div><label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">2. Qëndrimi:</label>' +
                '<select id="dlgPropStance" style="width:100%; margin-bottom:6px;">' + stanceOptions.map(function(o) { return '<option value="' + o + '">' + o + '</option>'; }).join("") + '</select></div>' +
            '<div><label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">3. Garancia:</label>' +
                '<select id="dlgPropGuarantee" style="width:100%; margin-bottom:6px;">' + guaranteeOptions.map(function(o) { return '<option value="' + o + '">' + o + '</option>'; }).join("") + '</select></div>' +
            '<div><label style="font-size:0.73rem; color:var(--accent-gold); font-weight:700; display:block; margin-bottom:3px;">4. Oferta:</label>' +
                '<select id="dlgPropOffer" style="width:100%; margin-bottom:6px;">' + offerOptions.map(function(o) { return '<option value="' + o + '">' + o + '</option>'; }).join("") + '</select></div>' +
        '</div>' +
        '<div style="margin-bottom:10px;">' +
            '<label style="font-size:0.73rem; color:var(--danger); font-weight:700; display:block; margin-bottom:3px;">5. Vija e Kuqe:</label>' +
            '<select id="dlgPropRedLine" style="width:100%;">' + redLineOptions.map(function(o) { return '<option value="' + o + '">' + o + '</option>'; }).join("") + '</select>' +
        '</div>' +
        '<button class="action-btn btn-gold" onclick="saveDialogueProposalAndAdvance()">📋 Ruaj & Kalo në Hapin 4 ▶</button>';
    toggleModal("interactiveActionModal", true);
}

function saveDialogueProposalAndAdvance() {
    var topicEl = document.getElementById("dlgPropTopic");
    var stanceEl = document.getElementById("dlgPropStance");
    var guaranteeEl = document.getElementById("dlgPropGuarantee");
    var offerEl = document.getElementById("dlgPropOffer");
    var redLineEl = document.getElementById("dlgPropRedLine");

    state.dialogueProposal = {
        topic: topicEl ? topicEl.value : "",
        stance: stanceEl ? stanceEl.value : "",
        guarantee: guaranteeEl ? guaranteeEl.value : "",
        offer: offerEl ? offerEl.value : "",
        redLine: redLineEl ? redLineEl.value : "",
        preparedAt: MONTHS_SQ[state.monthIndex] + " " + state.year + " (Java " + state.week + ")"
    };
    state.dialogueChronologyStep = 4;
    state.dialogueNegotiationLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + ": Propozimi u hartua.");
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("Propozimi u ruajt!");
}

function openDialogueStep4_BrusselsRound() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var prop = state.dialogueProposal;
    if (!prop) {
        box.innerHTML = '<div class="card-header"><div class="card-title">⚠️ Nuk ka propozim</div></div>' +
            '<p style="font-size:0.82rem;">Duhet të hartosh propozimin në Hapin 3.</p>' +
            '<button class="action-btn" onclick="toggleModal(\'interactiveActionModal\', false); state.dialogueChronologyStep = 3; openDialogueStep3_Proposal();">Kthehu</button>';
        toggleModal("interactiveActionModal", true);
        return;
    }
    var usaScore = state.diplomacy.USA.score;
    var euScore = state.diplomacy.EU.score;
    var consulted = Object.keys(state.dialogueConsultations).length;
    var totalScore = (usaScore + euScore) / 2 + consulted * 3 + state.dialogueProgress * 0.3;

    var counterText, counterType;
    if (totalScore >= 85) {
        counterType = "FAVORABLE";
        counterText = 'Ndërmjetësuesit vlerësojnë pozitivisht propozimin. Ofrojnë: <strong>pranim të pjesshëm të vijës suaj të kuqe, zhbllokim të €50M, sekuencim me monitorim</strong>. Kërkojnë: <em>deklaratë publike për Asociacionin</em>.';
    } else if (totalScore >= 70) {
        counterType = "BALANCED";
        counterText = 'Ndërmjetësuesit propozojnë kompromis: <strong>garanci kushtetuese për Asociacionin, €30M, zbatim paralel</strong>. Kërkojnë: <em>hapje e zyrës ndërlidhëse</em>.';
    } else if (totalScore >= 55) {
        counterType = "TOUGH";
        counterText = 'Palët janë të rezervuara. BE kërkon: <strong>lëshime shtesë në Asociacion</strong> para se të lëshojë fonde.';
    } else {
        counterType = "VERY_TOUGH";
        counterText = 'Situata është e tensionuar. Kërkojnë: <strong>tërheqje të plotë të propozimit ose lëshime thelbësore</strong>.';
    }

    state.dialogueCounterOffer = { type: counterType, text: counterText, generatedAt: MONTHS_SQ[state.monthIndex] + " " + state.year };

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🇪🇺 Hapi 4 / 5: Raundi në Bruksel</div>' +
            '<span class="tag tag-gold">' + counterType + '</span>' +
        '</div>' +
        '<div style="background:#0f172a; padding:10px; border-radius:8px; margin-bottom:10px; font-size:0.78rem; line-height:1.6;">' +
            '<div><strong>Propozimi:</strong> ' + prop.topic + '</div>' +
            '<div><strong>Vija e kuqe:</strong> ' + prop.redLine + '</div>' +
            '<div><strong>Konsultime:</strong> ' + consulted + ' aleatë</div>' +
        '</div>' +
        '<div class="chat-bubble chat-them"><strong>Ndërmjetësuesit:</strong><br>"' + counterText + '"</div>' +
        '<div style="margin-top:12px; display:flex; flex-direction:column; gap:7px;">' +
            '<button class="choice-btn" onclick="resolveBrusselsRound(\'ACCEPT\')">' +
                '<span class="choice-title">1. Prano kundërofertën</span>' +
                '<span class="choice-impact">+' + (counterType === "FAVORABLE" ? "8" : (counterType === "BALANCED" ? "5" : "2")) + ' pikë</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="resolveBrusselsRound(\'COUNTER_MODIFY\')">' +
                '<span class="choice-title">2. Propozo modifikim</span>' +
                '<span class="choice-impact">Rezultat i pasigurt</span>' +
            '</button>' +
            '<button class="choice-btn" onclick="resolveBrusselsRound(\'REFUSE\')" style="border-color:rgba(239,68,68,0.4);">' +
                '<span class="choice-title" style="color:var(--danger);">3. Refuzo</span>' +
                '<span class="choice-impact">+2.5% popullaritet, -5 pikë BE/SHBA</span>' +
            '</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function resolveBrusselsRound(decision) {
    var prop = state.dialogueProposal;
    var counter = state.dialogueCounterOffer;
    if (!prop || !counter) { toggleModal("interactiveActionModal", false); return; }
    var today = MONTHS_SQ[state.monthIndex] + " " + state.year;

    if (decision === "ACCEPT") {
        if (counter.type === "FAVORABLE") {
            state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 8, 10, 100);
            state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + 8, 10, 100);
            state.budgetTotalB = +(state.budgetTotalB + 0.05).toFixed(2);
            state.approval = clamp(state.approval - 1.0, 5, 95);
            state.dialogueProgress = clamp(state.dialogueProgress + 20, 0, 100);
            state.dialogueAgreements.push({ id: "agr_" + Date.now(), title: "Marrëveshje e sekuencimit", partner: "BE & SHBA", signedDate: today, deadlineWeeks: 12, summary: prop.topic + ". €50M.", status: "ACTIVE" });
            state.dialogueRoundHistory.unshift({ date: today, result: "Marrëveshje e favorshme — €50M." });
            addMediaNews("RTK", "Marrëveshje e favorshme në Bruksel: €50M.", "POSITIVE");
        } else if (counter.type === "BALANCED") {
            state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 5, 10, 100);
            state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + 5, 10, 100);
            state.budgetTotalB = +(state.budgetTotalB + 0.03).toFixed(2);
            state.approval = clamp(state.approval - 1.5, 5, 95);
            state.dialogueProgress = clamp(state.dialogueProgress + 15, 0, 100);
            state.dialogueAgreements.push({ id: "agr_" + Date.now(), title: "Kompromis i balancuar", partner: "BE & SHBA", signedDate: today, deadlineWeeks: 14, summary: prop.topic + ". €30M.", status: "ACTIVE" });
            state.dialogueRoundHistory.unshift({ date: today, result: "Kompromis: €30M." });
            addMediaNews("KOHA", "Kompromis në Bruksel: €30M.", "POSITIVE");
        } else if (counter.type === "TOUGH") {
            state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 2, 10, 100);
            state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + 2, 10, 100);
            state.approval = clamp(state.approval - 3.0, 5, 95);
            state.dialogueProgress = clamp(state.dialogueProgress + 5, 0, 100);
            state.dialogueAgreements.push({ id: "agr_" + Date.now(), title: "Marrëveshje minimale", partner: "BE & SHBA", signedDate: today, deadlineWeeks: 10, summary: "Lëshime pa fonde.", status: "ACTIVE" });
            state.dialogueRoundHistory.unshift({ date: today, result: "Marrëveshje minimale." });
            addMediaNews("Klan Kosova", "Marrëveshje minimale.", "NEUTRAL");
        } else {
            state.diplomacy.USA.score = clamp(state.diplomacy.USA.score - 3, 10, 100);
            state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 4, 10, 100);
            state.approval = clamp(state.approval - 4.0, 5, 95);
            state.dialogueAgreements.push({ id: "agr_" + Date.now(), title: "Marrëveshje e imponuar", partner: "BE & SHBA", signedDate: today, deadlineWeeks: 8, summary: "Kushte të rënda.", status: "ACTIVE" });
            state.dialogueRoundHistory.unshift({ date: today, result: "Marrëveshje në kushte të pafavorshme." });
            addMediaNews("T7", "Kritika të ashpra.", "CRITICAL");
        }
    } else if (decision === "COUNTER_MODIFY") {
        var success = Math.random() < 0.55;
        if (success) {
            state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 4, 10, 100);
            state.diplomacy.EU.score = clamp(state.diplomacy.EU.score + 4, 10, 100);
            state.budgetTotalB = +(state.budgetTotalB + 0.02).toFixed(2);
            state.approval = clamp(state.approval + 0.8, 5, 95);
            state.dialogueProgress = clamp(state.dialogueProgress + 10, 0, 100);
            state.dialogueAgreements.push({ id: "agr_" + Date.now(), title: "Marrëveshje e modifikuar", partner: "BE & SHBA", signedDate: today, deadlineWeeks: 12, summary: "€20M.", status: "ACTIVE" });
            state.dialogueRoundHistory.unshift({ date: today, result: "Modifikimi u pranua: €20M." });
            addMediaNews("RTK", "Modifikimi u pranua.", "POSITIVE");
        } else {
            state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 3, 10, 100);
            state.approval = clamp(state.approval + 1.5, 5, 95);
            state.dialogueRoundHistory.unshift({ date: today, result: "Modifikimi u refuzua." });
            addMediaNews("KOHA", "Modifikimi refuzohet.", "NEUTRAL");
        }
    } else {
        state.diplomacy.USA.score = clamp(state.diplomacy.USA.score - 5, 10, 100);
        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 5, 10, 100);
        state.approval = clamp(state.approval + 2.5, 5, 95);
        state.dialogueProgress = clamp(state.dialogueProgress - 5, 0, 100);
        state.dialogueRoundHistory.unshift({ date: today, result: "Refuzim; raundi dështoi." });
        addMediaNews("Klan Kosova", "Refuzim i kundërofertës.", "CRITICAL");
    }

    state.dialogueChronologyStep = 5;
    state.dialogueNegotiationLog.unshift(today + ": Raundi u mbyll me: " + decision + ".");
    state.dialogueCounterOffer = null;

    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showMajorAnnouncement({
        badge: "RAUNDI NË BRUKSEL — PËRFUNDOI",
        title: decision === "ACCEPT" ? "Marrëveshja u pranua" : (decision === "COUNTER_MODIFY" ? "Modifikim i propozuar" : "Refuzim"),
        reason: "Propozimi: " + prop.topic,
        immediateImpact: "Shiko rezultatin në tab 'Diplomacia'."
    });
}

function openDialogueStep5_Result() {
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var lastRound = (state.dialogueRoundHistory || [])[0];
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">🇪🇺 Hapi 5 / 5: Rezultati</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        (lastRound
            ? '<div style="background:#0f172a; padding:12px; border-radius:8px; margin-bottom:10px; font-size:0.82rem; line-height:1.6;">' +
                '<div><strong>Data:</strong> ' + lastRound.date + '</div>' +
                '<div><strong>Rezultati:</strong> ' + lastRound.result + '</div>' +
              '</div>'
            : '<div style="font-size:0.82rem;">Nuk ka raund të përfunduar.</div>') +
        '<div style="background:rgba(245,158,11,0.08); padding:10px; border-radius:6px; font-size:0.78rem; margin-bottom:10px;">' +
            '<strong>📋 Monitorimi:</strong> ' + (state.dialogueAgreements || []).length + ' marrëveshje aktive.' +
        '</div>' +
        '<div style="display:flex; gap:6px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-gold" onclick="resetDialogueForNextRound()">🔄 Përgatit Raund të Ri</button>' +
            '<button class="action-btn btn-outline" onclick="toggleModal(\'interactiveActionModal\', false)">Mbylle</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function resetDialogueForNextRound() {
    state.dialogueChronologyStep = 1;
    state.dialogueInvitation = {
        active: true,
        inviter: "Bashkimi Evropian (BE) & Shtetet e Bashkuara",
        inviterKey: "EU",
        reason: "Raund i ri dialogu për zbatimin e marrëveshjeve paraprake.",
        agenda: "Monitorimi i zbatimit, siguria në veri, integrimi i komuniteteve",
        deadlineWeeks: 3,
        responseStatus: "PENDING",
        respondedAt: null
    };
    state.dialogueConsultations = {};
    state.dialogueProposal = null;
    state.dialogueCounterOffer = null;
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("Raundi i ri u përgatit!");
}

function advanceDialogueStep(newStep) {
    state.dialogueChronologyStep = newStep;
    toggleModal("interactiveActionModal", false);
    refreshAllUI();
    showToast("Kaluat në Hapin " + newStep + ".");
}

function consultAlliesOffTable() {
    state.dialogueAlliesConsulted = true;
    state.diplomacy.USA.score = clamp(state.diplomacy.USA.score + 4, 10, 100);
    state.dialogueNegotiationLog.unshift(MONTHS_SQ[state.monthIndex] + " " + state.year + ": Konsultim i shpejtë me SHBA.");
    refreshAllUI();
    showToast("Konsultimet u zhvilluan!");
}

function openBilateralVisitModal(countryKey) {
    var d = state.diplomacy[countryKey];
    if (!d) return;
    var cityTxt = d.city || d.name;
    var offTxt = d.official || "Homologu";
    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">✈️ Vizitë: ' + cityTxt + '</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="font-size:0.78rem; color:var(--accent-gold); margin-bottom:8px;">Pritësi: <strong>' + offTxt + '</strong> • Raporti: <strong>' + d.score + '/100</strong></div>' +
        '<div class="chat-bubble chat-them"><strong>' + offTxt + ':</strong> "Cila është marrëveshja prioritare?"</div>' +
        '<div style="display:flex; flex-direction:column; gap:7px;">' +
            '<button class="choice-btn" onclick="finalizeBilateralVisit(\'' + countryKey + '\', \'DEFENSE_SECURITY\')"><span class="choice-title">1. Mbrojtje & Siguri (-€10M)</span><span class="choice-impact">+10 pikë, +5 Siguri</span></button>' +
            '<button class="choice-btn" onclick="finalizeBilateralVisit(\'' + countryKey + '\', \'TRADE_INVESTMENT\')"><span class="choice-title">2. Investime (+€40M)</span><span class="choice-impact">+8 pikë, +0.2% BPV</span></button>' +
            '<button class="choice-btn" onclick="finalizeBilateralVisit(\' + countryKey + \', \'DIPLOMATIC_LOBBY\')"><span class="choice-title">3. Lobim politik</span><span class="choice-impact">+9 pikë, +2%</span></button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
}

function finalizeBilateralVisit(countryKey, dealType) {
    var d = state.diplomacy[countryKey];
    if (!d) return;
    var cityTxt = d.city || d.name;
    toggleModal("interactiveActionModal", false);

    var achievedText = "";
    if (dealType === "DEFENSE_SECURITY") {
        state.budgetTotalB = +(state.budgetTotalB - 0.010).toFixed(3);
        d.score = clamp(d.score + 10, 10, 100);
        state.securityNorth = clamp(state.securityNorth + 4, 10, 100);
        achievedText = "Marrëveshje Mbrojtjeje në " + cityTxt + ".";
    } else if (dealType === "TRADE_INVESTMENT") {
        state.budgetTotalB = +(state.budgetTotalB + 0.040).toFixed(3);
        state.gdpGrowth = +(state.gdpGrowth + 0.2).toFixed(1);
        d.score = clamp(d.score + 8, 10, 100);
        achievedText = "Memorandum Ekonomik (+€40M).";
    } else {
        state.budgetTotalB = +(state.budgetTotalB - 0.005).toFixed(3);
        d.score = clamp(d.score + 9, 10, 100);
        state.approval = clamp(state.approval + 2.0, 5, 95);
        achievedText = "Mbështetje për Këshillin e Evropës.";
    }

    addMediaNews("MPJD / RTK", "Përfundon vizita në " + cityTxt + ": " + achievedText, "POSITIVE");
    refreshAllUI();
    showMajorAnnouncement({
        badge: "VIZITË ZYRTARE — " + cityTxt.toUpperCase(),
        title: "Takim Dypalësh",
        reason: "Vizitë shtetërore.",
        immediateImpact: achievedText + " Marrëdhëniet: " + d.score + "/100."
    });
}

function executeNorthSecurityOperation() {
    state.securityNorth = clamp(state.securityNorth + 6, 10, 100);
    state.approval = clamp(state.approval + 2.5, 5, 95);
    addMediaNews("RTK", "Forcohen shërbimet në 4 komunat veriore.", "POSITIVE");
    refreshAllUI();
    showToast("Siguria në veri u rrit me +6%!");
}

/* ============================================================================
   40. ADVANCE TIME
   ============================================================================ */

window.promptAdvanceTime = function(weeks) {
    if (!state) return;
    var expiringTasks = (state.pmInboxRequests || []).filter(function(req) {
        return req.status === "PENDING" && req.deadlineWeeks <= weeks;
    });
    var expiringDossiers = (state.weeklyDossiers || []).filter(function(d) {
        return d.status === "PENDING" && d.deadlineWeeks <= weeks;
    });
    var dueMeetings = (state.scheduledMeetings || []).filter(function(m) {
        return m.status === "SCHEDULED" && m.dueTurn < (state.turnCount + weeks);
    });

    if (expiringTasks.length === 0 && dueMeetings.length === 0 && expiringDossiers.length === 0) {
        advanceTime(weeks);
        return;
    }

    var box = document.getElementById("interactiveActionModalContent");
    if (!box) return;
    var tasksHtml = expiringTasks.map(function(t) { return '<li><strong>Kërkesë:</strong> ' + t.title + '</li>'; }).join("");
    var dossiersHtml = expiringDossiers.map(function(d) { return '<li><strong>Dosje:</strong> ' + d.title + '</li>'; }).join("");
    var meetsHtml = dueMeetings.map(function(m) { return '<li><strong>Takim:</strong> ' + m.targetName + '</li>'; }).join("");

    box.innerHTML =
        '<div class="card-header">' +
            '<div class="card-title">⚠️ Paralajmërim (+' + weeks + ' Javë)</div>' +
            '<button class="btn-top" onclick="toggleModal(\'interactiveActionModal\', false)">Mbyll ✕</button>' +
        '</div>' +
        '<div style="font-size:0.85rem; margin-bottom:12px; color:#cbd5e1;">Keni detyra që do të skadojnë:</div>' +
        '<ul style="font-size:0.8rem; color:var(--danger); margin-bottom:16px; padding-left:20px; line-height:1.6;">' +
            tasksHtml + dossiersHtml + meetsHtml +
        '</ul>' +
        '<div style="display:flex; gap:8px; flex-wrap:wrap;">' +
            '<button class="action-btn btn-outline" onclick="toggleModal(\'interactiveActionModal\', false)">Kthehu</button>' +
            '<button class="action-btn btn-danger" onclick="toggleModal(\'interactiveActionModal\', false); advanceTime(' + weeks + ');">Vazhdo gjithsesi ▶</button>' +
        '</div>';
    toggleModal("interactiveActionModal", true);
};

function advanceTime(weeksCount, silentToast) {
    if (typeof weeksCount === "undefined") weeksCount = 1;
    if (typeof silentToast === "undefined") silentToast = false;
    var dueMeetingIdx = -1;

    for (var i = 0; i < weeksCount; i++) {
        state.week++;
        state.turnCount++;
        state.weeksToNextRegularElection--;

        if (state.electionPhase === "CAMPAIGN" && state.electionCampaign) {
            state.electionCampaign.weeksRemaining--;
            if (state.electionCampaign.weeksRemaining <= 0) {
                runElectionDay();
                return;
            }
        }

        if (state.week > 4) {
            state.week = 1;
            state.monthIndex++;
            if (state.monthIndex > 11) {
                state.monthIndex = 0;
                state.year++;
                var yearlyRev = +(3.25 + (state.gdpGrowth * 0.06)).toFixed(2);
                state.budgetTotalB = yearlyRev;
                addMediaNews("Ministria e Financave", "Nis viti fiskal " + state.year + ".", "POSITIVE");
            }
        }

        processWeeklyFiscalReport(state.turnCount);
        processDevelopmentWeek();
        updateMunicipalityProfilesWeek();

        checkPresidentialMandateExpiry();

        if (state.dialogueInvitation && state.dialogueInvitation.active && state.dialogueInvitation.responseStatus === "PENDING") {
            state.dialogueInvitation.deadlineWeeks--;
            if (state.dialogueInvitation.deadlineWeeks <= 0) {
                state.dialogueInvitation.responseStatus = "REFUSED";
                state.dialogueInvitation.respondedAt = "Afati skadoi";
                state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 6, 10, 100);
                state.diplomacy.USA.score = clamp(state.diplomacy.USA.score - 4, 10, 100);
                state.approval = clamp(state.approval - 1.0, 5, 95);
                addMediaNews("Koha", "Afati skadoi pa përgjigje.", "CRITICAL");
            }
        }

        (state.dialogueAgreements || []).forEach(function(agr) {
            if (agr.status === "ACTIVE") {
                agr.deadlineWeeks--;
                if (agr.deadlineWeeks <= 0) {
                    var implChance = 0.6 + (state.diplomacy.EU.score / 200);
                    if (Math.random() < implChance) {
                        agr.status = "FULFILLED";
                        state.approval = clamp(state.approval + 1.5, 5, 95);
                        addMediaNews("RTK", "Marrëveshja \"" + agr.title + "\" u zbatua.", "POSITIVE");
                    } else {
                        agr.status = "FAILED";
                        state.approval = clamp(state.approval - 1.0, 5, 95);
                        state.diplomacy.EU.score = clamp(state.diplomacy.EU.score - 2, 10, 100);
                        addMediaNews("Kallxo", "Marrëveshja nuk u zbatua.", "CRITICAL");
                    }
                }
            }
        });

        (state.stateSectors || []).forEach(function(sec) {
            if (sec.active && sec.weeksLeft > 0) {
                sec.weeksLeft--;
                if (sec.weeksLeft === 0) {
                    sec.active = false;
                    sec.score = clamp(sec.score + 12, 10, 100);
                    if (!state.sectorHistory[sec.id]) state.sectorHistory[sec.id] = [];
                    state.sectorHistory[sec.id].push({ week: state.turnCount, score: sec.score });
                    state.approval = clamp(state.approval + 2.4, 5, 95);
                    state.gdpGrowth = +(state.gdpGrowth + 0.1).toFixed(1);
                    addMediaNews("RTK", "Përfundon reforma \"" + sec.projectTitle + "\".", "POSITIVE");
                }
            }
        });

        state.municipalities.forEach(function(m) {
            if (!m.projects) return;
            m.projects.forEach(function(pr) {
                if (pr.status !== "I Përfunduar") {
                    pr.weeksLeft = Math.max(0, pr.weeksLeft - 1);
                    pr.progress = Math.min(100, Math.round(((pr.totalWeeks - pr.weeksLeft) / pr.totalWeeks) * 100));
                    if (pr.weeksLeft === 0) {
                        pr.status = "I Përfunduar";
                        state.approval = clamp(state.approval + 1.5, 5, 95);
                        addMediaNews("Ekonomia Online", "Përfundon \"" + pr.title + "\" në " + m.name + "!", "POSITIVE");
                    }
                }
            });
        });

        (state.pmInboxRequests || []).forEach(function(req) {
            if (req.status === "PENDING") {
                req.deadlineWeeks--;
                if (req.deadlineWeeks <= 0) {
                    req.status = "EXPIRED";
                    req.outcomeMsg = "Afati kaloi pa vendim.";
                    state.approval = clamp(state.approval - 2.2, 5, 95);
                    addMediaNews("Kallxo", "Skadon afati i kërkesës së " + req.senderName + ".", "CRITICAL");
                }
            }
        });

        (state.weeklyDossiers || []).forEach(function(d) {
            if (d.status === "PENDING") {
                d.deadlineWeeks--;
                if (d.deadlineWeeks <= 0) {
                    d.status = "EXPIRED";
                    state.approval = clamp(state.approval - 1.8, 5, 95);
                    addMediaNews("Kallxo", "Skadon afati i dosjes: " + d.title, "CRITICAL");
                }
            }
        });

        if (state.turnCount % 2 === 0 && (state.pmInboxRequests || []).filter(function(r){return r.status==="PENDING";}).length < 4 && isPlayerInGovernment()) {
            generateDynamicIncomingRequest(false);
        }

        if (state.turnCount % 3 === 0 && isPlayerInGovernment()) {
            generateWeeklyDossiers();
        }

        if (state.scheduledMeetings) {
            state.scheduledMeetings.forEach(function(m) {
                if (m.status === "SCHEDULED" && m.dueTurn < state.turnCount) {
                    m.status = "MISSED";
                    m.outcome = "Takimi u anashkalua.";
                }
            });
            state.scheduledMeetings.forEach(function(m, idx) {
                if (m.status === "SCHEDULED" && m.dueTurn === state.turnCount && dueMeetingIdx === -1) {
                    dueMeetingIdx = idx;
                }
            });
        }

        if (!state.presidentElected) {
            state.presidentialDeadlineWeeks--;
            if (state.presidentialDeadlineWeeks <= 0) {
                state.presidentElected = true;
                setInstitutionalPhase(INSTITUTIONAL_PHASES.SNAP_ELECTION, "Skadoi afati për Presidentin.");
                startParliamentaryElectionProcess("Skadimi i afatit për zgjedhjen e Presidentit");
                return;
            }
        }

        state.promises.forEach(function(pr) {
            if (!pr.fulfilled) {
                pr.deadlineWeeks--;
                if (pr.deadlineWeeks === 0) {
                    state.approval = clamp(state.approval - 4.0, 5, 95);
                    addMediaNews("Kallxo", "Qeveria thyen afatin për \"" + pr.title + "\".", "CRITICAL");
                }
            }
        });

        (state.parliamentarySessions || []).forEach(function(sess) {
            if (sess.status === "SCHEDULED" && sess.week <= state.turnCount) {
                sess.status = "READY";
            }
        });

        if (state.weeksToNextRegularElection <= 0) {
            startParliamentaryElectionProcess("Përfundimi i mandatit katërvjeçar");
            return;
        }
    }

    var myP = state.parties[state.playerParty];
    var delta = (state.approval - 46) * 0.03;
    myP.poll = clamp(myP.poll + delta, 4, 72);
    normalizePartyPolls();

    refreshAllUI();

    if (dueMeetingIdx !== -1) {
        conductScheduledMeeting(dueMeetingIdx);
    } else if (!silentToast) {
        showToast("Kaluan " + weeksCount + " javë • " + MONTHS_SQ[state.monthIndex] + " " + state.year);
    }
}

/* ============================================================================
   41. TAB NAVIGATION
   ============================================================================ */

function switchMainTab(tabId, navBtn) {
    document.querySelectorAll(".tab-view").forEach(function(el) { el.classList.remove("active"); });
    var target = document.getElementById(tabId);
    if (target) target.classList.add("active");

    if (navBtn) {
        document.querySelectorAll(".bottom-nav .nav-item").forEach(function(b) { b.classList.remove("active"); });
        navBtn.classList.add("active");
    } else {
        var mapIdx = { "tab-dashboard": 0, "tab-party": 1, "tab-assembly": 2, "tab-government": 3, "tab-elections": 4, "tab-diplomacy": 5 };
        var btns = document.querySelectorAll(".bottom-nav .nav-item");
        btns.forEach(function(b) { b.classList.remove("active"); });
        if (btns[mapIdx[tabId]]) btns[mapIdx[tabId]].classList.add("active");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function switchSubTab(prefix, subKey, pillBtn) {
    if (!pillBtn) return;
    var parentSection = pillBtn.closest(".tab-view");
    if (!parentSection) return;
    parentSection.querySelectorAll(".sub-content").forEach(function(el) { el.style.display = "none"; });
    parentSection.querySelectorAll(".sub-pill").forEach(function(b) { b.classList.remove("active"); });

    var target = document.getElementById(prefix + "-" + subKey);
    if (target) target.style.display = "block";
    pillBtn.classList.add("active");

    if (prefix === "gov" && subKey === "fiscal") {
        if (typeof renderFiscalPanel === "function") renderFiscalPanel();
    }
    if (prefix === "dash" && subKey === "development") {
        if (typeof renderDevelopmentPanel === "function") renderDevelopmentPanel();
    }
}

window.addEventListener("DOMContentLoaded", initApp);
