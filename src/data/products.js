const products = [
    {
        id: "prod1",
        name: "Ollipet City Lux sæt | Små Roser z1",
        image: "/images/product1.jpg",
        alt: "Billedet viser sele-sættet med små røde roser på hvid baggrund.",
        brand: "Ollipet",
      
        // Pris & tilbud
        price: "329.40",
        oldPrice: "366.00",       // ← bruges til visning af førpris
        rabat: 10,                // ← procentvis rabat (bruges til badge)
      
        // Highlights vises som liste
        highlights: [
            
          "1 stk Ollipet City Lux Step-in hundesele | Små Roser",
          "1 stk Ollipet City Lux line | Små Roser",
          "1 stk. Ollipet City Lux høm-høm taske | Små Roser",
          "1 stk Ollipet City Lux bandana | Små Roser"
        ],
      
        // HTML-beskrivelse (renderes med dangerouslySetInnerHTML)
        description: `
         
        <p>
<strong>Ollipet City Lux sæt | Små Roser</strong></p> <p>Træd ind i byens pulserende liv med din firbenede kammerat ved din side og vores fortryllende Ollipet City Lux Serie med Små Roser!
Dette unikke tilbehørssæt tilbyder både stil og funktionalitet til jeres urbane eventyr og gåture.

          </p>
          <p>
       Den delikate City Lux Serie prydes med små rosendetaljer, der tilføjer en subtil elegance til din hunds udseende. De smukke roser er ikke kun en æstetisk detalje, men også et udtryk for den omsorg og kærlighed, du giver din hund. Kvaliteten af materialerne sikrer en holdbarhed, der matcher byens hektiske tempo.
          </p><p>Hold byens gader rene med den elegante høm høm-taske. Den diskrete fastgørelse til selen eller linen sikrer, at du altid er klar til at tage ansvar, uanset hvor I går.</p>
          <p>Oplev byen med et strejf af elegance og praktisk design med Ollipet City Lux Serie med Små Roser. Dette sæt er skabt til at gøre jeres byeventyr mindeværdige og behagelige.
Vælg stil, funktionalitet og kvalitet med Ollipet City Lux Serie med Små Roser.</p>
         
          <ul>
            <li>Lækkert design</li>
            <li>God pasform</li>
             <li>Også god hvalpesele</li>
            <li>Step-in sele, der ikke skal over hovedet</li>
             <li>Med indvendig åndbar mesh</li>
            <li>Med kliklås og D-ringe til linen</li>
             <li>Med refleks</li>
          </ul>
         
        `,
      
        // Filtrering og navigation
        kategorier: [
          "/hundetilbehoer",
          "/hundetilbehoer/seler",
          "/tilbud",
          "/tilbud/saet",
          "/maerker/ollipet"
        ],
      
        // Tags bruges til fx “populær”, “anbefalet”, “nyhed”
        tags: ["nyhed", "populaer"]
      }
      ,
      {
        id: "prod2",
        name: "Rund Hvalpe kravlegård | Kanvas",
        image: "/images/product2.jpg",
        alt: "Hvalpegården, der har lynlåsåbning i den ene sektion og i toppen, er også perfekt på campingferien eller hundeudstilling med din voksne hund (af små racer). I gården kan den/de få skygge og ligge i fred og ro mens den sover, uden du skal bekymre dig om, hvor den er henne.",
        brand: "Ollipet",
      
        // Pris & tilbud
        price: "199.00",
     
      
        // Highlights som punktopstilling
        highlights: [
          "En stor og rummelig model",
          "En lille model der giver mulighed for nærhed",
          "Perfekt til hvalpe og voksne hunde af små racer",
          "Løbegården er ideel til indendørs og udendørs brug",
          "Foldes let sammen og tages med på tur."
        ],
      
        // HTML-beskrivelse
        description: `
          <p><strong>Smart hvalpegård i kraftig kanvas</strong></p>
          <p>I denne hvalpegård giver du dine små hvalpe et frirum, når de begynder at komme med ud i den store verden.</p>
          <p>Hvalpegården, der har lynlåsåbning i den ene sektion og i toppen, er også perfekt på campingferien eller hundeudstilling med din voksne hund (af små racer). I gården kan den/de få skygge og ligge i fred og ro mens den sover, uden du skal bekymre dig om, hvor den er henne.</p>
          <p>Vi anbefaler at lægge et lækkert Vetbed tæppe ned i hvalpegården, for at gøre den ekstra hyggelig at være i.</p>
          <p><strong>Hvorfor vælge en Ollipet Hvalpe kravlegård?</strong></p>
          <ul>
            <li>Perfekt til hvalpe og voksne hunde af små racer</li>
            <li>Large er stor og rummelig</li>
            <li>Small er lille og giver mulighed for at have hvalpene tæt på moren</li>
            <li>Løbegården er ideel til indendørs og udendørs brug</li>
            <li>Net i toppen forhindrer hunden i at springe ud (dette kan lynes helt af, så toppen er helt åben)</li>
            <li>Holdes sammenklappet med et elastikbånd som er fastsyet</li>
          </ul>
          <p>Den stilrene hvalpegård kan også bruges som trygt sted for den voksne hund eller tages med på ferie – den er let at folde og fylder minimalt.</p>
        `,
      
        // Navigation og kategorier
        kategorier: [
          "/nyheder",
          "/hvalpeudstyr",
          "/hvalpeudstyr/hvalpegård",
          "/maerker/ollipet"
        ],
      
        // Tags bruges til labels (populær, nyhed, anbefalet osv.)
        tags: ["populaer"]
      },
      
      {
        id: "prod3",
        name: "Aarhus Hundejakke & dressurline | z1",
        image: "/images/product3.jpg",
        alt: "Hundjakke i farven khaki med matchende line. Fås i blød teddy-stof eller et quiltet look.",
        brand: "Ollipet",
      
        // Pris og evt. førpris
        price: "357.00",
        oldPrice: "397.00",       // Valgfri: førpris
        rabat: 10,                // Beregnet rabatprocent
      
        // Highlights vises som liste
        highlights: [
          "Matchende sæt med hundejakke og dressurline",
          "Vælg mellem teddy fleece eller quiltet jakke",
          "Blødt inderfor skåner pelsen",
          "Justerbar dressurline med håndfri funktion",
          "Smukke gulddetaljer",
          "Perfekt til overgangsvejr og lettere kulde"
        ],
      
        // HTML-beskrivelse (bruges med dangerouslySetInnerHTML)
        description: `
          <p><strong>Aarhus Hundejakke & dressurline</strong></p>
          <p>Dette sæt er det perfekte valg til hundeejeren, der ønsker en balance mellem æstetik og praktiske egenskaber. En smuk og funktionel hundejakke kombineret med en matchende dressurline.</p>
          <p>Dette sæt er skabt til stilfulde gåture i overgangsperioder og lettere kulde, hvor komfort, funktionalitet og design går hånd i hånd.</p>
          <p><strong>To varianter af jakken:</strong></p>
          <ul>
            <li>Diamantquiltet jakke med glat ydermateriale</li>
            <li>Lun teddyfleece-model med blødt inderfor</li>
          </ul>
          <p>Dressurlinen er justerbar og kan bæres håndfrit. Den er elegant designet med guldfarvede detaljer, der matcher jakken og fuldender looket.</p>
          <p>Et perfekt valg for den stilbevidste hundeejer.</p>
        `,
      
        // Navigationskategorier
        kategorier: [
          "/hundetilbehoer",
          "/hundetilbehoer/tøj",
          "/maerker/ollipet",
          "/tilbud",
          "/tilbud/sæt",
          "/nyheder"
        ],
      
        // Tags til labels som "anbefalet", "populær", osv.
        tags: ["anbefalet"]
      },
      {
        id: "prod4",
        name: "Ollipet Bella Bloom Donutseng",
        image: "/images/product4.jpg",
        alt: "Rund, fyldig og blød donut hundekurv i plys for maksimal komfort, med syninger der giver kurven et stilfuldt blomsterdesign.",
        brand: "Ollipet",
      
        // Pris og evt. førpris (kan tilføjes senere hvis ønsket)
        price: "159.00",
        oldPrice: "199.00",
        rabat: 20,
      
        // Highlights vises som punktopstilling
        highlights: [
          "Blød og rund donutseng i plys",
          "Blomsterformet design for ekstra stil",
          "Kaninkarakteristisk stof for maksimal komfort",
          "Giver omsluttende tryghed til hunden",
          "Fås i 3 størrelser og 5 elegante farver",
          "Velegnet til små racer og ældre hunde"
        ],
      
        // HTML-beskrivelse (vises i `ProductPage`)
        description: `
          <p><strong>Giv din hund den ultimative soveoplevelse med Ollipet Bella Bloom seng</strong></p>
          <p>En luksuriøs hundeseng designet til både komfort og stil. Med sit smukke, blomsterformede design og ekstra bløde “kaninbløde” stof er denne seng det perfekte hvilested for hunde, der elsker at putte og føle sig trygge.</p>
          <p>De runde, bløde kanter giver en indbydende følelse af omsluttende tryghed, der beroliger både krop og sjæl – ideel til både hvalpe, voksne og ældre hunde.</p>
          <p>Sengen fås i tre størrelser, så du nemt kan finde den perfekte pasform til din firbenede ven. Vælg mellem fem elegante farver – grøn, lyserød, khaki, mørkebrun og mørkegrå – som smukt matcher enhver indretning.</p>
          <p><strong>Ollipet Bella Bloom</strong> kombinerer moderne æstetik med praktisk komfort, og er et uundværligt valg for den kræsne hundeejer.</p>
        `,
      
        // Kategorier til navigation/filtrering
        kategorier: [
          "/nyheder",
          "/hvalpeudstyr",
          "/hundetilbehoer",
          "/hundetilbehoer/sengogkurv",
          "/maerker/ollipet"
        ],
      
        // Tags bruges til “populær”, “anbefalet”, “nyhed” badges m.m.
        tags: ["populaer"]
      },
      
        {
          id: "prod5",
          name: "Yaki Tyggeben",
          image: "/images/product5.jpg",
          alt: "100% naturlig hundetyggeben med lang tyggetid",
          brand: "Yaki dog snacks",
          price: "35.95",
          highlights: [
            "Lang tyggetid – reducerer stress",
            "Forebygger plak og tandsten",
            "100% naturligt – ingen tilsætningsstoffer",
            "Laktose- og glutenfri",
            "Meget lavt fedtindhold"
          ],
          description: `
            <p><strong>Yaki tyggeben</strong> er en lækker og naturlig snack til din hund.</p>
            <p>Fremstillet af skummetmælk og citronsyre, og uden farvestoffer, konserveringsmidler, gluten, lactose eller kemi.</p>
            <p>Benet har en lang tyggetid og bidrager til at reducere stress samt forebygger plak og tandsten.</p>
          `,
          kategorier: [
            "/hundefoder",
            "/hundefoder/godbidderogben",
            "/maerker/yaki"
          ],
          tags: ["anbefalet"]
        },
        {
          id: "prod6",
          name: "Ollipet Hvil og Spis Brown Kit | z1",
          image: "/images/product6.jpg",
          alt: "Matchende sæt i skandinavisk stil. Inkluderer seng, skåle og underlag i jordnære farver.",
          brand: "Ollipet",
          price: "572.60",
          oldPrice: "636.00",
          rabat: 10,
          highlights: [
            "Komplet sæt: seng, skåle og underlag",
            "Jordnære farver i skandinavisk stil",
            "Blød og støttende Ollipet Teddy seng",
            "Praktisk spiseunderlag og stilfulde skåle",
            "Designet til både komfort og æstetik"
          ],
          description: `
            <p><strong>Ollipet Hvil & Spis Brown Kit</strong> er perfekt til den kvalitetsbevidste hundeejer.</p>
            <p>Sættet indeholder en blød seng, to skåle og et praktisk underlag i matchende, jordnære farver. Skaber ro og funktionalitet i hjemmet.</p>
          `,
          kategorier: [
            "/tilbud",
            "/tilbud/sæt",
            "/maerker/ollipet",
            "/hundetilbehoer/sengogkurv",
            "/hundetilbehoer",
            "/nyheder"
          ],
          tags: ["anbefalet"]
        },
        {
          id: "prod7",
          name: "KW Pelsplejesæt | Filter i pelsen",
          image: "/images/product7.jpg",
          alt: "Sæt med 2-i-1 shampoo, tanglefix, filtknuser og rullekam",
          brand: "KW",
          price: "316.80",
          highlights: [
            "Velegnet til langhårede racer",
            "2-i-1 shampoo og balsam",
            "Effektiv Tanglefix til filt",
            "Filtknuser og rullekam inkluderet",
            "Reducerer statisk elektricitet"
          ],
          description: `
            <p><strong>Pelsplejesæt fra KW</strong> til langhårede hunde med tendens til filt.</p>
            <p>Indeholder 2-i-1 shampoo, Tanglefix, filtknuser og rullekam. Skånsom og effektiv pleje af pels og filtre.</p>
          `,
          kategorier: [
            "/hundepleje",
            "/hundepleje/pelspleje",
            "/maerker/kw",
            "/hundepleje/sæt"
          ]
        },
        {
          id: "prod8",
          name: "Ollipet Poteklipper og potevoks",
          image: "/images/product8.jpg",
          alt: "Sæt med poteklippemaskine, neglefil og potevoks.",
          brand: "Ollipet",
          price: "366.30",
          oldPrice: "429.00",
          rabat: 15,
          highlights: [
            "2-i-1 poteklipper og neglefil",
            "Støjsvag og handy maskine",
            "Inkl. afstandskamme og tilbehør",
            "Velegnet til detaljeret klip",
            "Med potevoks til pleje"
          ],
          description: `
            <p><strong>Smart 2-i-1 løsning</strong> fra Ollipet til klip og pleje af poter.</p>
            <p>Med poteklippemaskine, neglefil og potevoks. Brugervenlig og ideel til små detaljer og sarte områder.</p>
          `,
          kategorier: [
            "/hundepleje",
            "/hundepleje/poterogklør",
            "/maerker/ollipet",
            "/hundepleje/trimmerogklippemaskiner",
            "/tilbud",
            "/tilbud/sæt",
            "/hundepleje/sæt"
          ]
        },
        {
          id: "prod9",
          name: "John Paul Pet | Ear & Eye Pet Wipes",
          image: "/images/product9.jpg",
          alt: "Renseservietter til øjne og ører hos hunde",
          brand: "John Paul Pet",
          price: "149.00",
          highlights: [
            "Milde og fugtgivende servietter",
            "Til øjne og ydre øre",
            "Med aloe vera og natriumklorid",
            "Let at bruge og tage med",
            "pH-tilpasset til dyr"
          ],
          description: `
            <p><strong>John Paul Pet Wipes</strong> er skånsomme renseservietter til øjne og ører.</p>
            <p>Med aloe vera og natriumklorid for nænsom rengøring. Praktisk til daglig brug og rejser.</p>
          `,
          kategorier: [
            "/hundepleje",
            "/hundepleje/øjneogører",
            "/maerker/johnpaulpet"
          ]
        },
        {
          id: "prod10",
          name: "Tandplejesæt til hunde",
          image: "/images/product10.jpg",
          alt: "Sæt med tyggeben, tandpasta, tandbørste, pulver og legetøj",
          brand: "Diverse",
          price: "384.76",
          oldPrice: "429.00",
          rabat: 10,
          highlights: [
            "Komplet mundplejesæt til hunde",
            "Whimzees tyggeben og tandpasta med oksekød",
            "Plaque Off-pulver og bambustandbørste",
            "AFP Dental Cactus legetøj",
            "Velegnet til hunde i alle aldre"
          ],
          description: `
            <p><strong>Tandplejesæt</strong> – alt du behøver til din hunds tandpleje i ét kit.</p>
            <p>Effektiv rengøring og forebyggelse af tandproblemer med tyggeben, tandpasta, pulver, legetøj og børste.</p>
          `,
          kategorier: [
            "/hundepleje",
            "/hundepleje/tandpleje",
            "/hundepleje/sæt",
            "/tilbud",
            "/tilbud/sæt"
          ]
        },
        {
          id: "prod11",
          name: "Ollipet Hundetrimmer Pakke | Ceramic Pro og Poteklippemaskine 2i1",
          image: "/images/product11.jpg",
          alt: "Komplet sæt med to klippemaskiner, opladere, afstandskamme og børste",
          brand: "Ollipet",
          price: "654.30",
          oldPrice: "729.00",
          rabat: 10,
          highlights: [
            "Professionel trimmerpakke",
            "Inkl. Ceramic Pro og Poteklippemaskine 2-i-1",
            "Afstandskamme og opladere medfølger",
            "Til både krop og poter",
            "God til hjemmebrug og detaljeklip"
          ],
          description: `
            <p><strong>Komplet klippepakke fra Ollipet</strong> – Ceramic Pro og Poteklipper 2-i-1.</p>
            <p>Med alt nødvendigt tilbehør til trimning af både pels og poter. Ideel til hjemmebrug.</p>
          `,
          kategorier: [
            "/hundepleje",
            "/hundepleje/trimmerogklippemaskiner",
            "/maerker/ollipet",
            "/hundepleje/sæt"
          ]
        },
      
        {
            id: "prod12",
            name: "MiniBlue Hundebadekar | Phoenix",
            image: "/images/product12.jpg",
            alt: "Billede af hundebadekar i farven blå",
            brand: "PHOENIX",
            price: "1649.00",
            highlights: [
              "Kompakt og praktisk hundebadekar",
              "Ideel til mindre racer",
              "Let at rengøre og flytte",
              "Stabil konstruktion",
              "Blå farve – passer ind i moderne hjem"
            ],
            description: `
              <p><strong>MiniBlue Hundebadekar fra PHOENIX</strong> er et praktisk og stilfuldt valg til hjemmebrug.</p>
              <p>Det kompakte design og den stabile opbygning gør det nemt og sikkert at bade din hund – især de mindre racer.</p>
              <p>Let at rengøre, og passer perfekt ind i hjem med fokus på både funktionalitet og æstetik.</p>
            `,
            kategorier: [
              "/hundepleje",
              "/hundepleje/diverse",
              "/maerker/phonix"
            ]
          },
          {
            id: "prod13",
            name: "Aeolus Trimmebord Sammenklappeligt | Medium",
            image: "/images/product13.jpg",
            alt: "Trimmebord i sort og metal, sammenklappeligt",
            brand: "AEOLUS",
            price: "1469.00",
            highlights: [
              "Professionelt trimmebord i medium størrelse",
              "89 x 60 cm bordplade med skridsikkert underlag",
              "Justerbare gummifødder og rustfrit stel",
              "Sammenklappeligt uden værktøj",
              "Trimmebordsgalge og galgestrop medfølger"
            ],
            description: `
              <p><strong>Aeolus Trimmebord</strong> er et fuldprofessionelt bord til pelspleje og grooming.</p>
              <p>Robust design med rustfrit stel og gummibelagt bordplade. Let at folde sammen uden værktøj – perfekt til både salon og udstilling.</p>
            `,
            kategorier: [
              "/hundepleje",
              "/hundepleje/diverse",
              "/maerker/aeolus"
            ]
          },
          {
            id: "prod14",
            name: "Ollipet Fødekassesæt",
            image: "/images/product14.jpg",
            alt: "Fødekasse, vetbed-tæppe og tisseunderlag i ét sæt",
            brand: "Ollipet",
            price: "609.30",
            highlights: [
              "Komplet sæt til hvalpefødsel",
              "Vetbed tæppe og tisseunderlag",
              "Genanvendelig og rengøringsvenlig fødekasse",
              "Skridsikkert underlag for sikkerhed",
              "Giver tryghed til mor og hvalpe"
            ],
            description: `
              <p><strong>Ollipet Fødekassesæt</strong> gør hvalpenes første tid tryg og hygiejnisk.</p>
              <p>Sættet inkluderer fødekasse, vetbed og tisseunderlag – klar til brug og nemt at rengøre.</p>
            `,
            kategorier: [
              "/hvalpeudstyr",
              "/hvalpeudstyr/opdrættere",
              "/tilbud",
              "/tilbud/sæt",
              "/maerker/ollipet"
            ]
          },
          {
            id: "prod15",
            name: "Nordic Star Hvalpesæt Deluxe",
            image: "/images/product15.jpg",
            alt: "Seng, godbidder, slikkeskål og bamse i ét sæt",
            brand: "Ollipet",
            price: "456.25",
            highlights: [
              "Blød og støttende seng i Nordic Star design",
              "Lækre godbidder fra Ficcaro",
              "Slikkeskål der stimulerer langsom spisning",
              "Sødt krammedyr til hvalpen",
              "Perfekt til nye hundeejere"
            ],
            description: `
              <p><strong>Hvalpesæt Deluxe</strong> fra Ollipet giver din hvalp den bedste start.</p>
              <p>Indeholder seng, godbidder, slikkeskål og krammedyr i matchende stil og farver.</p>
            `,
            kategorier: [
              "/hvalpeudstyr",
              "/hvalpeudstyr/sæt",
              "/hundelegetøj",
              "/tilbud",
              "/tilbud/sæt",
              "/nyheder",
              "/maerker/ollipet"
            ],
            tags: ["anbefalet"]
          },
          {
            id: "prod16",
            name: "Puppy Reb med Kødben",
            image: "/images/product16.jpg",
            alt: "Reb med gummi-kødben i lyserød og blå",
            brand: "NAYECO",
            price: "35.00",
            highlights: [
              "Holdbart legetøj til hvalpe",
              "Kødben med dutter for tandrens",
              "Godt for tyggebehov",
              "Fås i flere farver",
              "Ideelt til leg og stimulering"
            ],
            description: `
              <p><strong>Puppy Reb med Kødben</strong> er et slidstærkt og sjovt legetøj til hvalpe.</p>
              <p>Rebet og kødbenet stimulerer tyggeinstinktet og hjælper med tandrens. Fås i lyserød og blå.</p>
            `,
            kategorier: [
              "/hvalpeudstyr",
              "/hvalpeudstyr/legetøj",
              "/hundelegetøj",
              "/hundelegetøj/slidestærkt",
              "/hundelegetøj/tandrens",
              "/maerker/nayco"
            ]
          },
          {
            id: "prod17",
            name: "CORE Puppy Original - Small/Medium Breed | Tørfoder",
            image: "/images/product17.jpg",
            alt: "CORE Puppy Original tørfoder til hvalpe",
            brand: "Wellness CORE",
            price: "169.00",
            highlights: [
              "73% proteinkilder med kylling",
              "Sund ernæring til hvalpe",
              "Afbalanceret protein, fedt og kulhydrat",
              "Støtter energi og vækst",
              "Velegnet til små/mellemstore racer"
            ],
            description: `
              <p><strong>CORE Puppy Original</strong> er et komplet hvalpefoder med høj kvalitet.</p>
              <p>Indeholder smagsfuld kylling og næringsstoffer der understøtter sund vækst og energi hos små og mellemstore racer.</p>
            `,
            kategorier: [
              "/hvalpeudstyr",
              "/hvalpeudstyr/foder",
              "/hundefoder",
              "/hundefoder/tørfoder",
              "/maerker/wellnesscore"
            ]
          },
          {
            id: "prod18",
            name: "Puppy Aid Training Spray",
            image: "/images/product18.jpg",
            alt: "Puppy Aid Spray til renlighedstræning",
            brand: "simple solution",
            price: "75.00",
            highlights: [
              "Gør renlighedstræning lettere",
              "Stimulerer hunden til at tisse et bestemt sted",
              "Kan bruges både inde og ude",
              "Nem at anvende",
              "Videnskabeligt formuleret"
            ],
            description: `
              <p><strong>Puppy Aid Training Spray</strong> gør renlighedstræning lettere og hurtigere.</p>
              <p>Bruges til at få hvalpen til at tisse samme sted. Velegnet til både indendørs og udendørs brug.</p>
            `,
            kategorier: [
              "/hvalpeudstyr",
              "/hvalpeudstyr/renlighedstræning",
              "/maerker/simplesolution"
            ]
          },
          {
            id: "prod19",
            name: "Trixie Puppy Dog hvalpesele og line",
            image: "/images/product19.jpg",
            alt: "Hvalpesele i grå mesh med line",
            brand: "Trixie",
            price: "89.50",
            highlights: [
              "Step-in sele til små hvalpe",
              "Justerbart bryst- og halsmål",
              "Linen måler 2m x 10mm",
              "Ingen sele over hovedet",
              "Perfekt fra 8 uger"
            ],
            description: `
              <p><strong>Trixie Puppy Dog hvalpesele</strong> er perfekt til de første gåture.</p>
              <p>Med justerbar pasform og praktisk sele i step-in design. Komfortabel og nem at bruge.</p>
            `,
            kategorier: [
              "/hvalpeudstyr",
              "/hvalpeudstyr/snorogsele",
              "/hundetilbehoer",
              "/hundetilbehoer/halsbaandogsele",
              "/hvalpeudstyr/sæt",
              "/maerker/trixie"
            ]
          },
          
          {
            id: "prod20",
            name: "CORE Senior Original | All Breeds",
            image: "/images/product20.jpg",
            alt: "Billede af CORE Senior Original",
            brand: "Wellness CORE",
            price: "199.00",
            highlights: [
              "Letfordøjeligt og afbalanceret",
              "Til ældre hunde af alle racer",
              "Proteinrig uden overskydende kalorier",
              "Kornfrit og uden fyldstoffer",
              "Støtter sund vægt og energiniveau"
            ],
            description: `
              <p><strong>CORE Senior Original</strong> fra Wellness CORE er skræddersyet til ældre hunde.</p>
              <p>Med en balanceret sammensætning og gode ingredienser giver det energi uden at overbelaste kroppen – kornfrit og sundt.</p>
            `,
            kategorier: [
              "/hundefoder",
              "/hundefoder/tørfoder",
              "/maerker/wellnesscore"
            ]
          },
          {
            id: "prod21",
            name: "Little Big Paw Duck Vådfoder",
            image: "/images/product21.jpg",
            alt: "Billede af Little Big Paw Duck Vådfoder",
            brand: "Little Big Paw",
            price: "29.00",
            highlights: [
              "100% naturlige ingredienser",
              "Med and, grøntsager og urtesovs",
              "Nærende og letfordøjeligt",
              "Velegnet som fuldfoder eller topping",
              "Uden tilsætningsstoffer"
            ],
            description: `
              <p><strong>Little Big Paw Duck</strong> er et naturligt vådfoder med and, grøntsager og urtesovs.</p>
              <p>Let at fordøje og fyldt med smag – perfekt som fuldfoder eller supplement.</p>
            `,
            kategorier: [
              "/hundefoder",
              "/hundefoder/vådfoder",
              "/maerker/littlebigpaw"
            ]
          },
          {
            id: "prod22",
            name: "Oil'it Lakseolie | 500ml",
            image: "/images/product22.jpg",
            alt: "Billede af Oil'it Lakseolie",
            brand: "Snack'it",
            price: "85.95",
            highlights: [
              "Naturlig lakseolie til hunde",
              "Rig på omega 3 og 6 fedtsyrer",
              "Støtter pels, hud og led",
              "Velegnet til alle racer",
              "Nem at dosere og blande i foder"
            ],
            description: `
              <p><strong>Oil'it Lakseolie</strong> er et næringstilskud til hundens daglige kost.</p>
              <p>Giver en sundere pels og hud og er let at bruge sammen med tørfoder eller vådfoder.</p>
            `,
            kategorier: [
              "/hundefoder",
              "/hundefoder/tilskud",
              "/maerker/snackit"
            ]
          },
          {
            id: "prod23",
            name: "Starmark Everlasting Treat Fireplug",
            image: "/images/product23.jpg",
            alt: "Billede af Everlasting Treat Fireplug i rød",
            brand: "Starmark",
            price: "99.00",
            highlights: [
              "Slidstærkt aktivitetslegetøj",
              "Tandrensende overflade",
              "Kan fyldes med snacks og foder",
              "Punkterfrit gummimateriale",
              "Inkl. 1 Everlasting Treat"
            ],
            description: `
              <p><strong>Starmark Fireplug</strong> tilbyder langvarig underholdning og tyggeglæde.</p>
              <p>Fyld den med godbidder eller tørfoder og lad din hund arbejde for belønningen – sjov og sund aktivering.</p>
            `,
            kategorier: [
              "/hundefoder",
              "/hundefoder/godbidderogben",
              "/hundelegetøj",
              "/hundelegetøj/slidestærkt",
              "/hundelegetøj/aktivitet",
              "/hundelegetøj/snuseogslikmåtte",
              "/hundepleje",
              "/hundepleje/tandpleje",
              "/hundelegetøj/tandrens",
              "/maerker/starmark"
            ]
          },
          {
            id: "prod24",
            name: "Ollipet Hide-a-Treat | Croissant",
            image: "/images/product24.jpg",
            alt: "Legetøj formet som croissant med skjult hulrum",
            brand: "Ollipet",
            price: "39.00",
            highlights: [
              "Interaktivt gemme-legetøj med lyde",
              "Croissant og smør-del kan skilles ad",
              "Skjul godbidder indeni",
              "Med knitre- og pivelyd",
              "Styrker bånd og stimulerer mental aktivitet"
            ],
            description: `
              <p><strong>Ollipet Hide-a-Treat</strong> er en croissantformet legeoplevelse med skjulte godbidder og knitrelyde.</p>
              <p>Holder hunden engageret og aktiveret med sjov og stimulering.</p>
            `,
            kategorier: [
              "/hundelegetøj",
              "/hundelegetøj/plys",
              "/hundelegetøj/aktivitet",
              "/hundefoder/tørfoder",
              "/hvalpeudstyr",
              "/hvalpeudstyr/legetøj",
              "/nyheder",
              "/maerker/ollipet"
            ],
            tags: ["anbefalet"]
          },
          {
            id: "prod25",
            name: "Ollipet HoliMoli Snusebold hundelegetøj",
            image: "/images/product25.jpg",
            alt: "Fleecestykker i latexbold til gemmeleg",
            brand: "Ollipet",
            price: "119.00",
            highlights: [
              "Snusebold med skjulte godbidder",
              "Fleecestykker indbygget i latexskjold",
              "Stimulerer hundens sanser",
              "Tåler kaste- og ruskeleg",
              "Aktiv og mentalt stimulerende leg"
            ],
            description: `
              <p><strong>HoliMoli Snusebold</strong> fra Ollipet aktiverer din hund med gemmeleg og tyggetid.</p>
              <p>Fremmer mental og fysisk stimulering – perfekt til regnvejrsdage og indendørs hygge.</p>
            `,
            kategorier: [
              "/hundelegetøj",
              "/hundelegetøj/aktivitet",
              "/hundelegetøj/snuseogslikmåtte",
              "/hundelegetøj/ikkepiv",
              "/nyheder",
              "/maerker/ollipet",
              "/hundelegetøj/blodt"
            ],
            tags: ["populaer"]
          },
          {
            id: "prod26",
            name: "Ollipet Art Deco slikkeskål | 19 cm",
            image: "/images/product26.jpg",
            alt: "Slikkeskål i silikone med sugekop og mønster",
            brand: "Ollipet",
            price: "99.00",
            highlights: [
              "Slowfeeder til våd- og tørfoder",
              "Sugekop i bunden for stabilitet",
              "Stimulerer mental aktivitet under måltider",
              "Let at rengøre – tåler opvaskemaskine",
              "Fås i flere stilfulde farver"
            ],
            description: `
              <p><strong>Art Deco slikkeskål</strong> forlænger spisetiden og stimulerer din hund mentalt.</p>
              <p>Elegant og praktisk med skridsikker bund og slidstærkt silikone – perfekt til daglig brug.</p>
            `,
            kategorier: [
              "/hundelegetøj",
              "/hundelegetøj/snuseogslikmåtte",
              "/hundelegetøj/aktivitet",
              "/hundetilbehoer",
              "/hundetilbehoer/skåle",
              "/hundefoder/tørfoder",
              "/hundelegetøj/slidestærkt",
              "/nyheder",
              "/maerker/ollipet"
            ],
            tags: ["populaer"]
          },
          {
            id: "prod27",
            name: "Ollipet Funky Fodbold | ORIGINAL",
            image: "/images/product27.jpg",
            alt: "Hundefodbold med stropper og pumpe",
            brand: "Ollipet",
            price: "129.00",
            highlights: [
              "Bold med stropper for bedre greb",
              "Kan flyde og tåler ruskeleg",
              "Perfekt til både små og store hunde",
              "Medfølgende pumpe til tilpasning",
              "PU-læder og sjovt design"
            ],
            description: `
              <p><strong>Ollipet Funky Fodbold</strong> er den perfekte bold til sjov og fysisk aktivitet.</p>
              <p>Stropperne giver godt greb for både hund og ejer – brug den til kaste-, ruske- og vandleg.</p>
            `,
            kategorier: [
              "/hundelegetøj",
              "/hundelegetøj/slidestærkt",
              "/hundelegetøj/blodt",
              "/hundelegetøj/aktivitet",
              "/hundefoder/tørfoder",
              "/maerker/ollipet"
            ],
            tags: ["populaer"]
          },
          {
            id: "prod28",
            name: "Trixie Mintfresh Ring",
            image: "/images/product28.jpg",
            alt: "Mintblå bidering i naturgummi",
            brand: "Trixie",
            price: "63.00",
            highlights: [
              "Naturgummi med tandrensende dutter",
              "Frisk myntesmag",
              "Masserer tandkød og styrker tænder",
              "Ideel til tyggeinstinkt",
              "Holdbart og sikkert materiale"
            ],
            description: `
              <p><strong>Mintfresh Ring</strong> fra Trixie er tyggelegetøj med sundhedsfordele.</p>
              <p>Stimulerer tænder og tandkød og opretholder frisk ånde. Lavet af slidstærkt naturgummi.</p>
            `,
            kategorier: [
              "/hundelegetøj",
              "/hundelegetøj/slidestærkt",
              "/hundelegetøj/tandrens",
              "/hvalpeudstyr",
              "/hvalpeudstyr/legetøj",
              "/nyheder",
              "/maerker/trixie"
            ]
          },
          {
            id: "prod29",
            name: "Ollipet hundespisesæt | grå",
            image: "/images/product29.jpg",
            alt: "Spisesæt med grå silikoneunderlag og rustfri skåle",
            brand: "Ollipet",
            price: "317.74",
            highlights: [
              "Stilfuldt sæt med to skåle og underlag",
              "Rustfri skåle med skridsikker bund",
              "Gråt silikoneunderlag med forhøjet kant",
              "Tåler opvaskemaskine",
              "Praktisk og æstetisk design"
            ],
            description: `
              <p><strong>Ollipet Spisesæt</strong> kombinerer funktion og stil med praktiske skåle og underlag.</p>
              <p>Hold måltidet rent og pænt – perfekt til moderne hjem.</p>
            `,
            kategorier: [
              "/hundetilbehoer",
              "/hundetilbehoer/skåle",
              "/hundefoder/tørfoder",
              "/tilbud",
              "/tilbud/sæt",
              "/nyheder",
              "/maerker/ollipet"
            ],
            tags: ["populaer"]
          },
          {
            id: "prod30",
            name: "Ollipet For Wagging Tails | Step in Sele",
            image: "/images/product30.jpg",
            alt: "Step-in hundesele i khaki nylon mesh – åndbart og komfortabelt",
            brand: "Ollipet",
            price: "139.00",
            highlights: [
              "Step-in design – undgå at trække selen over hovedet",
              "Let og åndbart mesh-materiale",
              "Komfortabel og nem at tage på",
              "Stilrent design – perfekt til daglige gåture",
              "Fås i flotte farver"
            ],
            description: `
              <p><strong>Ollipet Step-in Sele</strong> er en smart løsning til gåture uden besvær.</p>
              <p>Hunden træder blot i selen, og du lukker den nemt – perfekt til hunde der ikke bryder sig om seler over hovedet.</p>
            `,
            kategorier: [
              "/nyheder",
              "/hundetilbehoer",
              "/hundetilbehoer/halsbaandogsele",
              "/hvalpeudstyr",
              "/hvalpeudstyr/snorogsele",
              "/maerker/wellnesscore"
            ],
            tags: ["populaer"]
          },
          {
            id: "prod31",
            name: "Ollipet For Wagging Tails | Hundesnor",
            image: "/images/product31.jpg",
            alt: "Slidstærk hundesnor i nylon – farven mocca",
            brand: "Ollipet",
            price: "79.00",
            highlights: [
              "Slidstærk og let nylonline",
              "Polstret greb for komfort",
              "Matchende til Ollipet step-in seler",
              "D-ring til karabinhage eller poseholder",
              "Fås i 5 smukke farver"
            ],
            description: `
              <p><strong>Ollipet Hundesnor</strong> matcher din sele og kombinerer design med funktion.</p>
              <p>Komfortabel og praktisk med D-ring til poseholder eller crossbody-funktion – perfekt til hverdagsture.</p>
            `,
            kategorier: [
              "/nyheder",
              "/hundetilbehoer",
              "/hundetilbehoer/hundesnor",
              "/hvalpeudstyr",
              "/hvalpeudstyr/snorogsele",
              "/maerker/ollipet"
            ],
            tags: ["populaer"]
          },
          {
            id: "prod32",
            name: "Ollipet Luxor Halsbånd",
            image: "/images/product32.jpg",
            alt: "Elegant læderhalsbånd i mocca med guldfarvede detaljer",
            brand: "Ollipet",
            price: "169.00",
            highlights: [
              "Eksklusivt læderdesign",
              "Guldfarvede detaljer for stilfuldt look",
              "Komfortabel pasform",
              "Egnet til både hverdag og fest",
              "Passer til mange racer og størrelser"
            ],
            description: `
              <p><strong>Ollipet Luxor Halsbånd</strong> kombinerer klassisk stil og komfort.</p>
              <p>Det perfekte valg til hundeejere, der ønsker noget særligt – både praktisk og flot.</p>
            `,
            kategorier: [
              "/nyheder",
              "/hundetilbehoer",
              "/hundetilbehoer/halsbaandogsele",
              "/maerker/ollipet"
            ],
            tags: ["anbefalet"]
          },
          {
            id: "prod33",
            name: "iMarc Rundt Hundetegn",
            image: "/images/product33.jpg",
            alt: "Enkelt rundt hundetegn i guld",
            brand: "iMarc",
            price: "79.00",
            highlights: [
              "Elegant og enkelt design",
              "Let og slidstærkt",
              "Lovpligtigt med navn og kontaktinfo",
              "Velegnet til alle hunderacer"
            ],
            description: `
              <p><strong>iMarc Hundetegn</strong> i rund form – elegant og vigtigt.</p>
              <p>Lovpligtigt tegn med plads til kontaktoplysninger – let at fastgøre og passer til enhver halsbåndstype.</p>
            `,
            kategorier: [
              "/hundetilbehoer",
              "/hundetilbehoer/hundetegn",
              "/maerker/imarc"
            ]
          },
          {
            id: "prod34",
            name: "Ollipet Flora høm-høm taske | Sand",
            image: "/images/product34.jpg",
            alt: "Sød og stilren hundeposetaske i sandfarve med blomsterprint",
            brand: "Ollipet",
            price: "79.00",
            highlights: [
              "Matchende taske til Flora-serien",
              "Plads til en rulle poser",
              "Karabinhage og guld-lynlås",
              "Let at åbne og genfylde",
              "Praktisk og æstetisk løsning"
            ],
            description: `
              <p><strong>Flora Høm-Høm taske</strong> fra Ollipet – både smart og diskret.</p>
              <p>Med karabinhage til nem fastgørelse og flot design i match med Flora-serien. Praktisk til hverdagens gåture.</p>
            `,
            kategorier: [
              "/nyheder",
              "/hundetilbehoer",
              "/hundetilbehoer/poser",
              "/maerker/ollipet"
            ]
          },
          {
            id: "prod35",
            name: "Ollipet Flora Step-in hundesele",
            image: "/images/product35.jpg",
            alt: "Sandfarvet step-in hundesele med hvidt blomsterdesign",
            brand: "Ollipet",
            price: "189.00",
            highlights: [
              "Step-in funktion for nem påføring",
              "Stilfuldt blomsterdesign",
              "Blødt og åndbart mesh-for",
              "Velegnet til små og mellemstore hunde",
              "Dejligt komfortabel og moderne"
            ],
            description: `
              <p><strong>Flora Step-in Sele</strong> er en elegant og praktisk løsning til din hunds gåture.</p>
              <p>Med floralt mønster, mesh og nem lukning – perfekt for både funktion og stil.</p>
            `,
            kategorier: [
              "/nyheder",
              "/hundetilbehoer",
              "/hundetilbehoer/halsbaandogsele",
              "/hvalpeudstyr",
              "/hvalpeudstyr/snorogsele",
              "/maerker/ollipet"
            ],
            tags: ["anbefalet"]
          },
          {
            id: "prod36",
            name: "Vandtætte strømpestøvler m. velcrobånd",
            image: "/images/product36.jpg",
            alt: "Strømpestøvler med velcro og slidstærk sål – sort og sandfarvet",
            brand: "Ollipet",
            price: "97.20",
            highlights: [
              "Beskytter mod sne, grus og varme",
              "Velegnet til alle årstider",
              "Slidstærkt og vandtæt design",
              "Velcrobånd holder dem på plads",
              "Ideel til ældre eller sarte poter"
            ],
            description: `
              <p><strong>Vandtætte strømpestøvler</strong> fra Ollipet beskytter din hunds poter mod vejr og underlag.</p>
              <p>Let at tage på og behagelig pasform – især god til ældre hunde med ledproblemer.</p>
            `,
            kategorier: [
              "/nyheder",
              "/hundetilbehoer",
              "/hundetilbehoer/sko",
              "/hundetilbehoer/tøj",
              "/maerker/ollipet"
            ]
          }, {
            id: "prod37",
            name: "",
            image: "/images/product37.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "", // valgfri
            rabat: "",    // valgfri
            highlights: [
              "",
              "",
              "",
              "",
              ""
            ],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [
              ""
            ],
            tags: [] // fx ["populaer", "anbefalet", "nyhed"]
          },
          {
            id: "prod38",
            name: "",
            image: "/images/product38.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod39",
            name: "",
            image: "/images/product39.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod40",
            name: "",
            image: "/images/product40.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod41",
            name: "",
            image: "/images/product41.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod42",
            name: "",
            image: "/images/product42.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod43",
            name: "",
            image: "/images/product43.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod44",
            name: "",
            image: "/images/product44.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod45",
            name: "",
            image: "/images/product45.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod46",
            name: "",
            image: "/images/product46.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod47",
            name: "",
            image: "/images/product47.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod48",
            name: "",
            image: "/images/product48.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod49",
            name: "",
            image: "/images/product49.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod50",
            name: "",
            image: "/images/product50.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          },
          {
            id: "prod51",
            name: "",
            image: "/images/product51.jpg",
            alt: "",
            brand: "",
            price: "",
            oldPrice: "",
            rabat: "",
            highlights: ["", "", "", "", ""],
            description: `
              <p><strong></strong></p>
              <p></p>
            `,
            kategorier: [""],
            tags: []
          }
          
            
     
    // ... (fortsætter op til prod70)
  ];
  
  export default products;
  