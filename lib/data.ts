import innovation from '@/public/innovation.svg';
import empowerment from '@/public/empowerment.svg';
import transformation from '@/public/transformation.svg';
import commitment from '@/public/commitment.svg';
import mission from '@/public/mission.svg';
import vision from '@/public/vision.svg';
import partner1 from '@/public/partners/ecom.svg';
import partner2 from '@/public/partners/global-communities.svg';
import partner3 from '@/public/partners/mastercard.svg';
import partner4 from '@/public/partners/newmont.svg';
import partner5 from '@/public/partners/smiles.svg';
import partner6 from '@/public/partners/zoomlion.svg';
import facebook from '@/public/facebook.svg';
import instagram from '@/public/instagram.svg';
import youtube from '@/public/youtube.svg';
import linkedin from '@/public/linkedin.svg';
import x from '@/public/x.svg';
import ecobank from '@/public/payment/ecobank.svg';
import fidelity from '@/public/payment/fidelity.svg';
import momo from '@/public/payment/momo.svg';
import culture from '@/public/thematic/culture.jpg';
import education from '@/public/thematic/education.jpg';
import entrepreneurship from '@/public/thematic/entrepreneurship.jpeg';
import health from '@/public/thematic/health.jpg';
import water from '@/public/thematic/water.jpg';

export const coreValues = [
  { src: transformation, label: 'Transformation' },
  { src: innovation, label: 'Innovation' },
  { src: empowerment, label: 'Empowerment' },
  { src: commitment, label: 'Commitment' },
];

export const cardData = [
  {
    id: 1,
    image: mission,
    title: 'the mission',
    description:
      'Our mission is to improve the quality of life of Ghanaians by enhancing access to good quality education, health, and sustainable infrastructure while promoting programs in ICT, tourism, and socio-economic empowerment.',
  },
  {
    id: 2,
    image: vision,
    title: 'the vision',
    description:
      'The Otumfuo Osei Tutu II Foundation seeks to build sustainable programs, services and projects in Ghana to improve the quality of life of Ghanaians.',
  },
];

export const paymentData = [
  {
    id: 1,
    image: ecobank,
    cedititle: 'Cedi A/C No.',
    usdtitle: 'USD A/C No.',
    swifttitle: 'Swift Code',
    cedi: 1441000703293,
    dollar: 3441000703294,
    swift: 'ECOCGHAC',
  },
  {
    id: 2,
    image: fidelity,
    cedititle: 'Cedi A/C No.',
    swifttitle: 'Swift Code',
    cedi: 1050781993617,
    swift: 'FBLIGHAC',
  },
  {
    id: 3,
    image: momo,
    cedititle: 'MoMo No.',
    usdtitle: 'Merchant I.D.',
    swifttitle: '',
    cedi: '0597402464',
    dollar: 3441000703294,
    swift: '',
  },
];

export const partnersData = [
  {
    id: 1,
    image: partner1,
    alt: '',
  },
  {
    id: 2,
    image: partner2,
    alt: '',
  },
  {
    id: 3,
    image: partner3,
    alt: '',
  },
  {
    id: 4,
    image: partner4,
    alt: '',
  },
  {
    id: 5,
    image: partner5,
    alt: 'company-1',
  },
  {
    id: 6,
    image: partner6,
    alt: '',
  },
];

export const homeData = [
  {
    id: 1,
    title:
      '25TH ANNIVERSARY: OTUMFUO OSEI TUTU II FOUNDATION FUNDRAISING GALA.',
    description:
      'In 25 Years, we have improved the lives of Ghanaians by implementing the ideals, values and visions of its patron, the Asantehene and the Asante Kingdom, using this medium to accelerate the transformation of Africa.',
    image: '/banners/1.jpeg',
  },
  {
    id: 2,
    title: 'Welcome to the Otumfuo Osei Tutu II Foundation',
    description:
      'The Otumfuo Osei Tutu II Foundation seeks to improve the lives of Ghanaians by implementing the ideals, values and visions of its patron, the Asantehene and the Asante Kingdom, using this medium to accelerate the transformation of Africa.',
    image: '/banners/2.jpeg',
  },
  {
    id: 3,
    title: 'LADY JULIA’S MENTORSHIP MASTERCLASS',
    description:
      'Lady Julia Osei Tutu has commemorated the 2025 International Women’s Day with the Lady Julia’s Mentorship Masterclass, under the theme: “Accelerate Action: Together we can forge women’s equality”, at the Great Hall of KNUST on March 7, 2025.',
    image: '/banners/3.jpeg',
  },
  {
    id: 4,
    title:
      'Lady Julia Cuts Sod For Kumasi Children’s Park Redevelopment',
    description:
      'Lady Julia, the wife of Asantehene Otumfuo Osei Tutu II has performed the sod-cutting ceremony for the redevelopment of Kumasi Children’s Park.',
    image: '/banners/4.jpeg',
  },
];

export const thematicData = [
  {
    id: 4,
    title: 'Education',
    description:
      'Providing equal learning opportunities to support education of children from pre-school age through to adolescence.',
    image: education,
  },
  {
    id: 2,
    title: 'Health',
    description:
      'Providing sustainable health care services to protect vulnerable populations in Ghana from infectious disease.',
    image: health,
  },
  {
    id: 1,
    title: 'Water & Sanitation',
    description:
      'Providing potable water in rural areas to help eradicate water-borne disease to foster healthier communities.',
    image: water,
  },
  {
    id: 3,
    title: 'Culture & Heritage',
    description:
      'Promoting and preserving the culture and natural heritage of the Asante Kingdom for development in tourism.',
    image: culture,
  },
  {
    id: 5,
    title: 'Entrepreneurship',
    description:
      'Rallying partners in business, academia, and the wider society to drive a unique rejuvenation of Ghanaian entrepreneurship.',
    image: entrepreneurship,
  },
];

export const statsData = [
  {
    id: 1,
    number: 25,
    description: 'Years of Impact',
  },
  {
    id: 2,
    number: 30,
    description: 'Life-Changing Projects',
  },
  {
    id: 3,
    number: 86,
    description: 'Volunteers',
  },
  {
    id: 4,
    number: '1 Million',
    description: 'Student Beneficiaries',
  },
  {
    id: 5,
    number: 500,
    description: 'Beneficiary Schools',
  },
  {
    id: 6,
    number: 8,
    description: 'Regions',
  },
];

export const accordionItems = [
  {
    id: 'item-1',
    number: '01',
    title: 'Water & Sanitation',
    content:
      'Water is Life and there is no equal substitute for it. “When the last tree dies, man also dies.”\n\nThese adages inform the need for effective programme to ensure environmental conservation and protection as well as provision of portable water. Achieving rapid social development cannot be at poles with having the needed care and responsibility towards the environment.\n\nGoal 7 of MDGs is to ensure environmental sustainability. The provision of portable water in rural areas, will foster a healthy population as a result of the eradication of guinea worm in endemic areas, and water borne diseases which is a reflective of the attainment of the GPRS 1 and 2.\n\nAgain, the conservation and preservation of its natural resources, ecosystems and habitats will not only enhance the reduction of the effects of climate change emission, but alleviate long term poverty as indicated in the MDGs.',
  },
  {
    id: 'item-2',
    number: '02',
    title: 'Health',
    content:
      'Health is a key component in human development. The provision of good and sustainable health care services and protecting its vulnerable population from infectious disease such as malaria, HIV/AIDS, Tuberculosis and others through advocacy programmes, provision of infrastructure etc; will not only help reduce mortality rate but also save the country’s productivity labour force.\n\nThe Foundation’s projects and programmes in health supports Ghana’s realization of Goals 4, 5 and 6 of MDG and GPRS 2, for not only a better and health Asanteman but fostering a better Ghana.',
  },
  {
    id: 'item-3',
    number: '03',
    title: 'Culture & Heritage',
    content:
      'The Foundation’s projects and programmes on culture which aims at the promotion and preservation of culture and natural heritage of the Asante Kingdom holds countless opportunities for tourism development not only to Asanteman but Ghana as a whole.\n\nThe Foundation’s programmes on capacity building is to empower traditional authorities and their secretariats to play effective and efficient role in Ghana’s decentralization agenda and community development within the context of a modern Ghana. ',
  },
  {
    id: 'item-4',
    number: '04',
    title: 'Education',
    content:
      'Education is one to the major keys to the economic growth and development for every society. It is a necessary tool for the empowerment of the individual in maximizing his creative ability, increase his sense of self-worth, esteem and reliance. Investment in human capital, especially girls and women’s education and health raises productivity, thereby enabling the individual to engage in productive activities, find formal employment, earn higher income and enjoy greater returns.\n\nThe Foundation believes that education is critical to a child’s development and well-being. It’s projects and programmes in education will support different initiatives that educate children from pre-school age through adolescence.\n\nThe Foundation therefore aims at giving girls and boys equal learning opportunities, to build a better future for themselves, their families and help to alleviate poverty.\n\nThe is in consonance with goals 2 and 3 of the Millennium Development Goals which ensures that children everywhere will be able to complete a full course of primary school, thereby eliminating gender disparity in primary and secondary education by 2015.\n\nAgain, it also reflects on the national development agenda GPRS 2 which improves human resource development.',
  },
  {
    id: 'item-5',
    number: '05',
    title: 'Entrepreneurship',
    content:
      'We are launching the Otumfuo Entrepreneurship Challenge (OEC) to identify, recruit and support Ghanaian businesses into becoming big enterprises. Our goal is to engage 10,000 ventures over the next five years.\n\nThe Otumfuo Charity Foundation commits to contributing to realizing this. We aim to promote the formation and growth of businesses that exploit unique Ghanaian innovation and advantages to create the wealth and jobs that our peoples need.',
  },
];

export const socials = [
  {
    name: 'Facebook',
    img: facebook,
    url: 'https://www.facebook.com/Otumfuofdn/',
  },
  {
    name: 'Instagram',
    img: instagram,
    url: 'https://instagram.com/otumfuofdn?igshid=NDRkN2NkYzU=',
  },
  {
    name: 'Youtube',
    img: youtube,
    url: 'https://youtube.com/channel/UCWApAPrduu1E5BXmRGDu8kQ',
  },
  {
    name: 'LinkedIn',
    img: linkedin,
    url: 'https://www.linkedin.com/company/otumfuo-osei-tutu-ii-foundation/',
  },
  {
    name: 'X',
    img: x,
    url: 'https://twitter.com/otumfuofdn?s=11&t=IhjRHVHsMWf13X2ckbk4vA',
  },
];

export const contactDetails = [
  {
    number: 1,
    title: 'Meet Us',
    description: 'Suite# 307, Cocobod Jubilee House, Adum-Kumasi.',
  },
  {
    number: 2,
    title: 'Call Us',
    description: `+233 322 005 892 
       + 233 593 105 205
       + 233 257 152 176`,
  },
  {
    number: 3,
    title: 'Email Us',
    description: `info@otumfuofoundation.org.gh
       hkodua@otumfuofoundation.org.gh`,
  },
];
