const deals = [
  {
    id: "0",
    title: "Florence by Mills",
    subtitle: "Plump to it! Hydrating facial Moisturizer",
    oldPrice: 700.0,
    price: 650.0,
    rating: 4.3,
    image: require("../assets/products/florencemoistruizer/moist.png"),
    carouselImages: [
      require("../assets/products/florencemoistruizer/moist.png"),
      require("../assets/products/florencemoistruizer/moist1.png"),
      require("../assets/products/florencemoistruizer/moist2.png"),
      require("../assets/products/florencemoistruizer/moist3.png"),
      require("../assets/products/florencemoistruizer/moist4.png"),
    ],
    description: `Size: Net Wt.: 50.0 gm | 1.8 oz.

Suitable for: All Skin Types
      
A lightweight moisturizer that gives parched skin the essential hydration it's been dreaming of! Made with hydrolyzed hyaluronic acid and a potent combination of skin-loving fruit and sustainably-sourced plant extracts to help hydrate, plump, and strengthen the skin's natural moisture barrier. So, get with it and Plump to It!`,

    ingredients: `Hydrolyzed Hyaluronic Acid: features a low molecular weight that penetrates deeper into the epidermis (or surface layers of skin) to help hydrate visibly plump skin.​
Fruit Extract Blend: consisting of grape, apple, plum and papaya helps hyaluronic acid work better to further hydrate skin.​
Adaptogen and Survivalist Plants: helps strengthen skin’s natural barrier function, restore balance to stressed skin and improve hydration.
 
Water/Aqua/Eau, Glycerin, 2,3-Butanediol, 1,2-Hexanediol, Cetyl Ethylhexanoate, Dimethicone, Methyl Trimethicone, Betaine, Hydrolyzed Hyaluronic Acid, Carica Papaya (Papaya) Fruit Extract, Prunus Mume Fruit Extract, Pyrus Malus (Apple) Fruit Extract, Vitis Vinifera (Grape) Fruit Extract, Acanthopanax Senticosus (Eleuthero) Root Extract, Inonotus Obliquus (Mushroom) Extract, Rhaponticum Uniflorum Root Extract, Rhodiola Rosea Extract, Selaginella Lepidophylla Extract, Stearic Acid, Glyceryl Stearate Citrate, C14-22 Alcohols, Glyceryl Stearate, Silica, Butylene Glycol, Ammonium Acryloyldimethyltaurate/VP Copolymer, Polyacrylate Crosspolymer-6, C12-20 Alkyl Glucoside, Phenoxyethanol, Cetyl Alcohol, Arachidic Acid, Palmitic Acid, T-Butyl Alcohol, Glucose, Oleic Acid, Sodium Benzoate.`,

    additionalInfo: `Manufacturer:  Give Back Beauty LLC
Address:  Give Back Beauty LLC 8 The Green, Suite #4220 Dover, Delaware, 199001 USA`,
  },
  {
    id: "1",
    title: "Kylie Cosmetics",
    subtitle: "High Gloss - Posie K",
    oldPrice: 750.0,
    price: 695.0,
    rating: 4.8,
    image: require("../assets/products/kyliecosmetics/kyliegloss.png"),
    carouselImages: [
      require("../assets/products/kyliecosmetics/kyliegloss.png"),
      require("../assets/products/kyliecosmetics/kyliegloss1.png"),
      require("../assets/products/kyliecosmetics/kyliegloss2.png"),
      require("../assets/products/kyliecosmetics/kyliegloss3.png"),
      require("../assets/products/kyliecosmetics/kyliegloss4.png"),
    ],
    description: `Size: Net Vol.: 2.9 ml | 0.1 fl. oz.
      
Suitable for: All Skin Types | Dermatologically Tested | Ultra-shine + Comfort
      
A cult-fave lip gloss, now with pure, creamy color and incredible shine, that instantly leaves lips looking smoother and more voluminous. The favorite feel-good, look-great lip gloss now comes in medium- to full-coverage color and zero shimmer. It's buildable with full-intensity pigment and brilliant shine. The XXL wand applies in just one swipe with a non-sticky feel. It has an addictive peach-vanilla scent plus vitamin A to nourish lips. This product is an Allure Best of Beauty award winner.`,

    ingredients: `Polybutene, octyldodecanol, mica, silica dimethyl silylate, caprylic/capric triglyceride, silica silylate, dicalcium phosphate, glyceryl behenate/eicosadioate, stearalkonium bentonite, aroma/flavor, pentaerythrityl tetra-di-t-butyl hydroxyhydrocinnamate, propylene carbonate, calcium aluminum borosilicate, aluminum calcium sodium silicate, calcium titanium borosilicate, alumina, calcium sodium borosilicate, caesalpinia sappan bark extract, silica, synthetic fluorphlogopite, tin oxide, [+/-:titanium dioxide (ci 77891), red 7 lake (ci 15850), iron oxides (ci 77491, ci 77492, ci 77499), blue 1 lake (ci 42090), yellow 5 lake (ci 19140)].`,
    additionalInfo: `Manufacturer: Kylie Cosmetics
Address: 425 Market Street, 19Th Floor, San Francisco , California, United States`,
  },
  {
    id: "2",
    title: "Ariana Grande",
    subtitle: `thank you,next`,
    oldPrice: 999.0,
    price: 699.0,
    rating: 4.6,
    image: require("../assets/products/fragrance/arifragrance1.png"),
    carouselImages: [
      require("../assets/products/fragrance/arifragrance.png"),
      require("../assets/products/fragrance/arifragrance1.png"),
      require("../assets/products/fragrance/arifragrance2.png"),
      require("../assets/products/fragrance/arifragrance3.png"),
      require("../assets/products/fragrance/arifragrance4.png"),
    ],
    description: `The fragrance for learning, loving, and living life to the fullest with your besties by your side. Ariana’s newest creation is a reflection of her journey - inspiring, strong and full of sass. thank u, next is about going out and getting what you want. Just like Ari, it’s about growing from the past, living life on your own terms and not being afraid to say &emdash; thank u, next!

    Thank u, next bursts open with juicy notes of sparkling white pear and wild raspberry that soften with a heart of creamy coconut and delicate pink rose petals. Divine velvety musk infuses classic Ari sass, while macaroon sugar adds playful femininity. Full of attitude, full of sweetness.`,
    ingredients: `Fragrance Notes
Top: White Pear, White Raspberry
Mid: Creme de Coconut, Pink Rose Petals
Base: Macaroon Sugar, Velvet Musk`,
    additionalInfo: `Manufacturer:  Ariana Grande Fragrances
Address: Fapagau Et Compagnie 4, Rue Jules Vercruysse Fr-02430 Gauchy, France`,
  },
  {
    id: "3",
    title: "Kérastase Paris",
    subtitle: "Chronologiste Masque Intense Régénérant Hair Mask",
    oldPrice: 1499.0,
    price: 999.0,
    rating: 4.5,
    image: require("../assets/products/hair/kerasmask.png"),
    carouselImages: [
      require("../assets/products/hair/kerasmask.png"),
      require("../assets/products/hair/kerasmask1.png"),
      require("../assets/products/hair/kerasmask2.png"),
      require("../assets/products/hair/kerasmask3.png"),
      require("../assets/products/hair/kerasmask4.png"),
    ],
    description: `Chronologiste Masque Intense Régénérant is a youth revitalizing hair mask that provides intense nourishment. Powered with Hyaluronic acid, Abyssine and Vitamin E, this hair mask hydrates hair, imparts shine and gives long-lasting frizz-control. Infused with the signature Chronologiste scent of fine fragrances, including tea rose, light woods and musk, Masque Intense Régénérant is a luxurious sensorial experience that adds youthful bounce and voluptuosity to hair.`,

    ingredients: `Aqua / Water / Eau • Cetearyl Alcohol • Amodimethicone • Behentrimonium Chloride • Cetyl Esters • Isopropyl Alcohol • Peg/Ppg/Polybutylene Glycol-8/5/3 Glycerin • Trideceth-6 • Bisabolol • Caprylyl Glycol • Benzoic Acid • Tocopherol • Cetrimonium Chloride • Benzyl Salicylate • Hexyl Cinnamal • Benzyl Alcohol • Limonene • Butylene Glycol • Sodium Hydroxide • Citronellol • Farnesol • 2-Oleamido-1,3-Octadecanediol • Geraniol • Sodium Hyaluronate • Safflower Glucoside • Hydroxycitronellal • Octyldodecanol • Lecithin • Phenethyl Alcohol • Polycaprolactone • Phenoxyethanol • Poloxamer 188 • Ceramide Np • Hydroxypalmitoyl Sphinganine • Alteromonas Ferment Extract • Bht • Sodium Citrate • Parfum / Fragrance.`,

    additionalInfo: `Manufacturer & Packer Name and Address:- L’Oréal S.A, Productos Capilares, Calle López Bravo, 78, Polígono Industrial Villalonquéjar, 09001 Burgos, Spain.
 Importer name and Address:- L'Oréal India Pvt Ltd, A Wing, 8th Floor, Marathon Futurex, N M Joshi Marg, Lower Parel, Mumbai, India, 400013`,
  },
  {
    id: "4",
    title: "TYMO ROTA",
    subtitle: "Tymo Rota Curling Iron",
    oldPrice: 3000.0,
    price: 2699.0,
    rating: 4.5,
    image: require("../assets/products/appliances/curl.png"),
    carouselImages: [
      require("../assets/products/appliances/curl.png"),
      require("../assets/products/appliances/curl1.png"),
      require("../assets/products/appliances/curl2.png"),
      require("../assets/products/appliances/curl3.png"),
      require("../assets/products/appliances/curl4.png"),
    ],
    description: `“Clamp, Rotate, Release ”, TYMO ROTA is that EASY for anyone even with zero hair style experience!Ends clamped, button pressed, consider your perfect bouncy curl is done!

This one of a kind automatic rotating curler can create both inner and outer waves, it takes just one pass to effortless frizz-free curls, full head styling time within 10 mins.
    
Enhanced with built-in ionic technology, the TYMO ROTA is designed with 5 customized heat settings from 280°F – 430°F and a smart microchip that keeps temperature fluctuations in check 50 times per second.
    
The curling wand is engineered with our unique T-GLOSS ceramic finish, ensuring long-lasting waves that stay in place for up to 48 hours. Compared to conventional ceramic surfaces, our specialized coating is twice as smooth and cuts down on frizz by 50% due to reduced friction.
    
The results? Smooth, soft, healthy-looking waves that just won’t quit.`,

    ingredients: ``,

    additionalInfo: `Manufacturer: TYMO Beauty
Address: United States: TYMO Beauty Inc. 663 Brea Canyon Road, Suite 4, Walnut CA , 91789

Hong Kong SAR: TYMO Beauty Limited, Flat B07, Floor23, Hover Industrial Building, No.26-38 Kwai Cheong Road. NT, Hong Kong`,
  },
  {
    id: "5",
    title: "H&M",
    subtitle: "Ruffle A-Line Dress",
    oldPrice: 1500.0,
    price: 800.0,
    rating: 4.3,
    image: require("../assets/products/fashion/bluedress.png"),
    carouselImages: [
      require("../assets/products/fashion/bluedress.png"),
      require("../assets/products/fashion/bluedress1.png"),
      require("../assets/products/fashion/bluedress2.png"),
      require("../assets/products/fashion/bluedress3.png"),
      require("../assets/products/fashion/bluedress4.png"),
    ],
    description: `Short A-line dress made of chiffon featuring a sweetheart neckline, ruffle and lace-up design detail, sheer long puff sleeves, flared hem, and a floral print pattern.`,
    ingredients: `Polyester
Polyester is a synthetic fibre made from crude oil (a fossil resource).
Recycled polyester
Recycled polyester is polyester made from PET bottles or end-of-life textile waste. The PET bottles or textile waste is mechanically recycled and processed into new yarn.`,
    additionalInfo: `Manufacturer: H & M Hennes & Mauritz Retail Private Limited
Address: Prakhhyat Infraprojects PVT. LTD., BUILDING 6, K-Square Logistics Park C/O LF LogisticsNear Padgha Toll Naka on MUMBAI-NASIKThane , Maharashtra - 421101`,
  },
  // {
  //   id: "",
  //   title: "",
  //   subtitle: "",
  //   oldPrice: 600,
  //   price: 550,
  //   image: require("../assets/products/"),
  //   carouselImages: [require("../assets/products/")],
  //   description: ``,
  // },
];

export { deals };
