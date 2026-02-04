export interface Brand {
    name: string;
    logo: string;
    website: string;
}

export interface BrandCategory {
    id: string;
    title: { PT: string, EN: string };
    brands: Brand[];
}

export const brandCategories: BrandCategory[] = [
    {
        id: 'argamassas',
        title: { PT: 'Argamassas Técnicas', EN: 'Technical Mortars' },
        brands: [
            { name: 'WEBER', logo: '/img/logo-weber.png', website: 'https://www.quartzolit.weber' },
            { name: 'KERAKOLL', logo: '/img/logo-kerakoll.webp', website: 'https://www.kerakoll.com/' },
        ]
    },
    {
        id: 'banheiras',
        title: { PT: 'Banheiras e Bases de Duche', EN: 'Bathtubs & Shower Trays' },
        brands: [
            { name: 'ORBU', logo: '/img/logo-orbu.png', website: 'https://www.orbubath.com/' },
            { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png', website: 'https://www.sanindusa.pt/' },
            { name: 'SANITANA', logo: '/img/logo-sanitana.png', website: 'https://www.sanitana.com/' },
            { name: 'VALADARES', logo: '/img/logo-valadares.png', website: 'https://www.valadares.pt/' },
            { name: 'AQUORE', logo: '/img/logo-aquore.jpg', website: 'https://aquore.es/pt/inicio-pt/' },
        ]
    },
    {
        id: 'flutuante',
        title: { PT: 'Pavimentos Flutuantes e Vinílicos', EN: 'Floating & Vinyl Flooring' },
        brands: [
            { name: 'TERCOCER', logo: '/img/logo-tercocer.svg', website: 'https://www.tercocer.com/' },
        ]
    },
    {
        id: 'isolamentos',
        title: { PT: 'Isolamentos Térmicos e Acústicos', EN: 'Thermal & Acoustic Insulation' },
        brands: [
            { name: 'DANOSA', logo: '/img/logo-danosa.svg', website: 'https://www.danosa.com/' },
            { name: 'SOPREMA', logo: '/img/logo-soprema.webp', website: 'https://www.soprema.pt/' },
            { name: 'IBERFIBRAN', logo: '/img/logo-fibran.png', website: 'https://www.fibran.pt/' },
        ]
    },
    {
        id: 'estruturais',
        title: { PT: 'Materiais Estruturais', EN: 'Structural Materials' },
        brands: [
            { name: 'CIMPOR', logo: '/img/logo-cimpor.png', website: 'https://www.cimpor.com/' },
            { name: 'SECIL', logo: '/img/logo-secil.svg', website: 'https://www.secil.pt/' },
            { name: 'VERDASCA', logo: '/img/logo-verdasca.svg', website: 'https://www.verdasca.pt/' },
            { name: 'TORREENSE', logo: '/img/logo-torreense.svg', website: 'https://www.torreense.pt/' },
        ]
    },
    {
        id: 'mob-banho',
        title: { PT: 'Mobiliários de casa de banho', EN: 'Bathroom Furniture' },
        brands: [
            { name: 'MOVILUX', logo: '/img/logo-moovlux.svg', website: 'https://www.moovlux.com/' },
            { name: 'BANHOAZIS', logo: '/img/logo-banhoazis.svg', website: 'https://www.banhoazis.pt/' },
            { name: 'VISOBATH', logo: '/img/logo-viso.svg', website: 'https://www.visobath.com/' },
            { name: 'AQUORE', logo: '/img/logo-aquore.jpg', website: 'https://aquore.es/pt/inicio-pt/' },
            { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png', website: 'https://www.sanindusa.pt/' },
            { name: 'AVILA DOS', logo: '/img/logo-avilados.png', website: 'https://www.avilados.com/' },
            { name: 'EXBANHO', logo: '/img/logo-eban.webp', website: 'https://www.exbanho.pt/' },
            { name: 'VALADARES', logo: '/img/logo-valadares.png', website: 'https://www.valadares.pt/' },
        ]
    },
    {
        id: 'rev-pav',
        title: { PT: 'Pavimentos e Azulejos', EN: 'Tiles & Flooring' },
        brands: [
            { name: 'PAVIGRÉS', logo: '/img/logo-pavigres.svg', website: 'https://www.pavigres.com/' },
            { name: 'CINCA', logo: '/img/logo-cinca.png', website: 'https://www.cinca.pt/' },
            { name: 'GRESART', logo: '/img/logo-gresart.svg', website: 'https://www.gresart.pt/' },
            { name: 'GRESCO', logo: '/img/logo-gresco.webp', website: 'https://www.gresco.pt/' },
            { name: 'MARGRES', logo: '/img/logo-margres.svg', website: 'https://www.margres.com/' },
            { name: 'LOVE TILES', logo: '/img/logo-love.svg', website: 'https://www.lovetiles.com/' },
            { name: 'PAMESA', logo: '/img/logo-pamesa.png', website: 'https://www.pamesa.com/' },
            { name: 'CERTECA', logo: '/img/logo-certeca.png', website: 'https://www.certeca.pt/' },
        ]
    },
    {
        id: 'resguardos',
        title: { PT: 'Resguardos de Duche', EN: 'Shower Enclosures' },
        brands: [
            { name: 'ITALBOX', logo: '/img/logo-italbox.webp', website: 'https://www.italbox.pt/' },
            { name: 'H-DUO', logo: '/img/logo-hduo.png', website: 'https://www.h-duo.com/' },
            { name: 'AQUORE', logo: '/img/logo-aquore.jpg', website: 'https://aquore.es/pt/inicio-pt/' },
            { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png', website: 'https://www.sanindusa.pt/' },
        ]
    },
    {
        id: 'revestimentos-piscinas',
        title: { PT: 'Revestimentos de Piscinas', EN: 'Pool Coatings' },
        brands: [
            { name: 'REVIGLASS', logo: '/img/logo-reviglass.webp', website: 'https://www.reviglass.pt/' },
            { name: 'MOSAVIT', logo: '/img/logo-mosavit.jpg', website: 'https://www.mosavit.com/' },
            { name: 'EZARRI', logo: '/img/logo-ezarri.svg', website: 'https://www.ezarri.com/' },
        ]
    },
    {
        id: 'sanitarias',
        title: { PT: 'Sanitárias', EN: 'Sanitary Ware' },
        brands: [
            { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png', website: 'https://www.sanindusa.pt/' },
            { name: 'SANITANA', logo: '/img/logo-sanitana.png', website: 'https://www.sanitana.com/' },
            { name: 'AQUORE', logo: '/img/logo-aquore.jpg', website: 'https://aquore.es/pt/inicio-pt/' },
            { name: 'VALADARES', logo: '/img/logo-valadares.png', website: 'https://www.valadares.pt/' },
        ]
    },
    {
        id: 'toalheiros',
        title: { PT: 'Toalheiros', EN: 'Towel Rails' },
        brands: [
            { name: 'MIRTAK', logo: '/img/logo-mirtak.webp', website: 'https://www.mirtak.com/' },
            { name: 'IMEX', logo: '/img/logo-imex.webp', website: 'https://www.imexproducts.es/' },
            { name: 'AQUORE', logo: '/img/logo-aquore.jpg', website: 'https://aquore.es/pt/inicio-pt/' },
        ]
    },
    {
        id: 'torneiras',
        title: { PT: 'Torneiras', EN: 'Taps & Faucets' },
        brands: [
            { name: 'SANINDUSA', logo: '/img/logo-sanindusa.png', website: 'https://www.sanindusa.pt/' },
            { name: 'SANITANA', logo: '/img/logo-sanitana.png', website: 'https://www.sanitana.com/' },
            { name: 'IMEX', logo: '/img/logo-imex.webp', website: 'https://www.imexproducts.es/' },
            { name: 'KLUDI', logo: '/img/logo-kludi.png', website: 'https://www.kludi.com/' },
            { name: 'TRES', logo: '/img/logo-tres.svg', website: 'https://www.tresgriferia.com/' },
            { name: 'VALADARES', logo: '/img/logo-valadares.png', website: 'https://www.valadares.pt/' },
            { name: 'MIRTAK', logo: '/img/logo-mirtak.webp', website: 'https://www.mirtak.com/' },
        ]
    },
];
