import multimedia from './public/images/image multimedia@2x.png';
import management from './public/images/image management@2x.png';
import referring from './public/images/image ref vet@2x.png';
import petOwner from './public/images/image patient satisfaction@2x.png';
import patient from './public/images/image patient db@2x.png';
import feedSharing from './public/images/image Share@2x.png';

export const lightGrey = '#fafafa';
export const washedGreen = '#eaf0eb';

export const menu = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'How it works', path: '/howItWorks' },
  { id: 4, name: 'Contact us', path: '/contact' },
];

export const appButtons = {
  apple: {
    id: 'apple_store_click',
    href: 'https://apps.apple.com/ro/app/gemma-vet/id1567008819',
    src: '/svg/appStore.svg',
    dimensions: {
      desktop: {
        width: 169,
        height: 57,
      },
      mobile: {
        width: 148,
        height: 50,
      },
    },
    alt: 'app store icon',
  },
  google: {
    id: 'google_play_click',
    href: 'https://play.google.com/store/apps/details?id=vet.gemma.app',
    src: '/svg/googlePlay.svg',
    dimensions: {
      desktop: {
        width: 182,
        height: 57,
      },
      mobile: {
        width: 160,
        height: 50,
      },
    },
    alt: 'google play icon',
  },
};

export const benefits = [
  {
    id: 1,
    title: 'A Brilliant Solution to Save Time',
    description: `Gemma’s unique one-way multimedia messaging feature lets veterinary staff share their patients’ health progress with owners and post updates on their feed. The feature allows practice teams to focus on patient care by communicating with clients more efficiently.`,
    source: '/svg/benefit1.svg',
    alt: 'benefit image',
    dimensions: {
      width: 444,
      height: 343,
    },
    first: 0,
  },
  {
    id: 2,
    title: 'An Invaluable Communication Tool',
    description: `Invite your practice team to Gemma to stay up-to-date and collaborate on your patients’ profiles by sharing photos, videos, and text updates. Gemma’s simple and secure communication tool keeps teams in the loop and pet families connected with your patients.`,
    source: '/svg/benefit2.svg',
    alt: 'benefit image',
    dimensions: {
      width: 444,
      height: 345,
    },
    first: 1,
  },
  {
    id: 3,
    title: 'A One-of-a-Kind Community of Veterinary Providers',
    description: `Update referring vets on mutual patients by sharing the patients’ feeds. Customize your messages, and share the latest patient updates with any veterinary provider involved in your patient’s care. Gemma helps patients’ well-being even after they’ve been discharged.`,
    source: '/svg/benefit3.svg',
    alt: 'benefit image',
    dimensions: {
      width: 444,
      height: 324,
    },
    first: 0,
  },
  {
    id: 4,
    title: 'A Loyal Friend to Help You Improve Pet Owner Satisfaction',
    description: `Rely on Gemma to reduce pet families' anxiety triggered by health emergencies and restricted in-person visits. Build trust and give families the peace of mind they need with real-time updates on their pets' health and the ability to share the feed with loved ones. Track pet owner satisfaction through surveys and reviews.`,
    source: '/svg/benefit4.svg',
    alt: 'benefit image',
    dimensions: {
      width: 444,
      height: 354,
    },
    first: 1,
  },
];

export const features = [
  {
    id: 1,
    title: 'One-Way Multimedia Messaging',
    description: 'Streamline client communication and optimize staff time.',
    source: '/svg/one_way_ico.svg',
    alt: 'right arrow icon',
    passingRef: 'oneWay',
  },
  {
    id: 2,
    title: 'Pet Owner Satisfaction Tracking',
    description: 'Strengthen your overall understanding of your clients’ experience.',
    source: '/svg/heart_icon.svg',
    alt: 'heart icon',
    passingRef: 'petOwner',
  },
  {
    id: 3,
    title: 'Team Management',
    description: 'Manage, collaborate, and communicate with your team.',
    source: '/svg/team_icon.svg',
    alt: 'team icon',
    passingRef: 'team',
  },
  {
    id: 4,
    title: 'Patient Database Access',
    description: 'Store, organize, and manage patient information.',
    source: '/svg/database_icon.svg',
    alt: 'database icon',
    passingRef: 'patient',
  },
  {
    id: 5,
    title: 'Referring Vets Communication',
    description:
      'Facilitate referrals and collaboration with other professionals to ensure the best veterinary care, even after pets are discharged.',
    source: '/svg/ref_vet_icon.svg',
    alt: 'veterinary icon',
    passingRef: 'referring',
  },
  {
    id: 6,
    title: 'Feed-Sharing Across Contacts',
    description: 'Build a community, exchange ideas, and share your experiences with your contacts.',
    source: '/svg/share _feed.svg',
    alt: 'share feed icon',
    passingRef: 'feedShare',
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      'I love the fact that you send pictures and videos of our beloved pets. So appreciative of the kindness you have for all animals under your care.',
    author: 'Barbara R.',
  },
  {
    id: 2,
    quote:
      'It was great to have a connection with Beau since we weren’t able to visit. This was a helpful tool for staying in touch!',
    author: 'Joseph E.',
  },
  {
    id: 3,
    quote: 'Really amazing staff. Your skills and dedication are superlative.',
    author: 'Lisa W.',
  },
  {
    id: 4,
    quote:
      'Thank you so much for helping us navigate what was one of the most traumatic days we have personally experienced. The thorough updates and pictures and videos brought us so much peace. We love the video of him eating and all of you showing him so much support and love. We’ve watched it so many times!',
    author: 'Zoe',
  },
  {
    id: 5,
    quote:
      'I deeply appreciate the gesture of sending me a photo about my baby’ status. It’s good to know that he is in good hands.',
    author: 'Joana O.',
  },
];

export const bullets = [0, 1, 2, 3, 4];

export const boardTemplates = [
  {
    id: 1,
    quote:
      "Gemma is the easiest way to keep owners in the loop on their pet's care. Nothing comes close. It’s a multimedia record of patients that brings families so much joy.",
    author: 'Elisa McEntee',
    jobPositon: 'Internal Medicine Specialist',
    facility: 'BluePearl Veterinary Partners',
    source: '/images/pic Elisa@2x.png',
    order: 1,
  },
  {
    id: 2,
    quote:
      'Gemma has been a game-changer for me allowing me to focus more on patient care while providing peace of mind to pet owners that can actually see how their pet is doing, in the easiest way possible using my mobile phone. This app was designed to make the lives of everyone in the veterinary community easier by keeping owners informed in the smartest way possible.',
    author: 'Alex Blutinger',
    jobPositon: 'Critical Care Specialist',
    facility: 'BluePearl Veterinary Partners',
    source: '/images/pic Alex@2x.png',
    order: 0,
  },
  {
    id: 3,
    quote:
      'Gemma has revolutionized the way I communicate with pet owners and my team. The app was incredibly easy to integrate into my day-to-day and the benefits of using it were reaped almost immediately. Families feel close to their pets even when they are away!',
    author: 'Emily Dozeman',
    jobPositon: ' DVM, DACVECC, Critical Care Doctor and Co-department Chair',
    facility: 'Philadelphia Animal Specialty and Emergency',
    source: '/images/Emily@2x.png',
    order: 1,
  },
  {
    id: 4,
    quote:
      'Nothing could be easier communicating with pet owners throughout the pandemic. A simple photo or video of my patients makes owners happier and more engaged. It’s a brilliant tool. I can spend more time delivering quality care.',
    author: 'Phil Hyndman',
    jobPositon: 'BVSc, MVM',
    facility: 'The Animal Medical Center',
    source: '/images/pic Phil@2x.png',
    order: 0,
  },
];

export const stages = [
  {
    id: 1,
    preTitle: 'The Challenge',
    title: 'Unprecedented Demand in the Veterinary Care Industry',
    description: `2020 was a year unlike any other. As the world drastically changed during the Covid-19 pandemic, pet adoptions and sales soared. In some cities, <a href="https://docs.google.com/spreadsheets/d/1toWG0mIGuvnRQMj544hgFK6S783VJDTIOCC8Zr_haK0/edit?pli=1#gid=1699505889"><span class="greenUnderline">fostering rates increased by as much as 90%</span></a>, and some shelters saw their application numbers increase by <a href="https://docs.google.com/spreadsheets/d/1toWG0mIGuvnRQMj544hgFK6S783VJDTIOCC8Zr_haK0/edit?pli=1#gid=1699505889"><span class="greenUnderline">ten times the normal rate, with over 11 million households adopting a pet during the pandemic.</span></a> Consequently, the veterinary care industry rapidly escalated.`,
    source: '/svg/IconFlag.svg',
    alt: 'flag icon',
    noLine: false,
    cta: false,
  },
  {
    id: 2,
    preTitle: 'Covid 19 Impact',
    title: 'Coping With All-Time High Pet Owner Anxiety',
    description: `While most of the country sheltered in place, 76% of veterinary staff worked throughout the pandemic, while implementing safety measures, such as limiting human visitation. According to the AVMA,<a href="https://docs.google.com/spreadsheets/d/1toWG0mIGuvnRQMj544hgFK6S783VJDTIOCC8Zr_haK0/edit?pli=1#gid=1699505889"><span class="greenUnderline"> 98% of veterinarians were limiting client contact</span/><a/>, increasing pet owner anxiety to an all-time high.`,
    source: '/svg/IconCovid.svg',
    alt: 'covid icon',
    noLine: false,
    cta: false,
  },
  {
    id: 3,
    preTitle: 'The Need',
    title: 'Efficient Owner Communications',
    description: `With social distancing measures in place, phone and email client communications grew by 79% and 69%, respectively. In addition to managing client communications, implementing safety measures, and caring for animals, veterinarians also had to face changing team dynamics, as staff was forced to adapt to their new roles.`,
    source: '/svg/IconCommunication.svg',
    alt: 'communication icon',
    noLine: false,
    cta: false,
  },
  {
    id: 4,
    preTitle: 'The Solution',
    title: 'Gemma, a Nimble Veterinary Care Software Solution',
    description: `With vets' mission in mind and pets' best interest at heart, we created Gemma, a smart, secure and easy-to-use mobile app that will help you deliver remarkable veterinary care and keep owners anxiety at bay.`,
    source: '/svg/IconSolution.svg',
    alt: 'light bulb icon',
    noLine: true,
    cta: true,
  },
];

export const advisors = [
  {
    id: 1,
    description:
      'Elisa is a veterinary internist living in Philadelphia, PA. She graduated from UC Davis School of Veterinary Medicine in 2016, and moved to New York City for a small animal rotating internship and subsequent small animal Internal Medicine residency at the Animal Medical Center in Manhattan. Professionally, Elisa enjoys gastrointestinal, hematologic, infectious and immune-mediated diseases.',
    quote:
      "Gemma is the easiest way to keep owners in the loop on their pet's care. Nothing comes close. It’s a multimedia record of patients that brings families so much joy.",
    author: 'Elisa McEntee',
    jobPositon: 'DVM, DACVIM, Internal Medicine Specialist at BluePearl Veterinary Partners',
    source: '/images/pic Elisa@2x.png',
  },
  {
    id: 2,
    description:
      'Alex Blutinger obtained his BS in Biology, Neuroscience, and Italian at Brandeis University before completing his VMD at the University of Pennsylvania in 2015. He completed a rotating internship at BluePearl Veterinary Partners in New York City, followed by a small animal emergency and critical care residency at the Animal Medical Center in Manhattan. Outside of veterinary medicine, Alex enjoys playing basketball, soccer, surfing, traveling, and playing piano. A dual national of the US and Italy, Alex spent many years living in Italy, where he developed a passion for Italian culture; cooking, speaking the language, and European football. Alex collaborates with his brother as a DJ duo and music producer, where they perform in NYC.',
    quote:
      'Gemma has been a game-changer for me, allowing me to focus more on patient care while providing peace of mind to pet owners that can actually see how their pet is doing. This app was designed to make the lives of everyone in the veterinary community easier by keeping owners informed in the smartest way possible.',
    author: 'Alex Blutinger',
    jobPositon: 'VMD, DACVECC, Critical Care Specialist at BluePearl Veterinary Partners',
    source: '/images/pic Alex@2x.png',
  },
  {
    id: 3,
    description:
      'Emily Dozeman is a board-certified emergency and critical care doctor. She is one of the managing partners and co-department chair of the emergency and critical care service at Philadelphia Animal Specialty and Emergency. Dr. Dozeman attended the Ohio State University where she earned a Bachelor of Animal Science and a DVM degree. Following veterinary school, Dr. Dozeman completed a small animal rotating medicine and surgery internship at VCA SouthPaws in Fairfax, VA. She then worked as an emergency doctor in Chicago before deciding to pursue a residency. Dr. Dozeman completed a three-year residency at The Animal Medical Center in NYC. She is experienced in all aspects of emergency medicine and critical care with a particular interest in the management of polytrauma patients, sepsis, and transfusion medicine. When not treating patients, Dr. Dozeman enjoys being outdoors, spending time with her husband, and being active. She has two rescue French bulldogs and a cat named Petry.',
    quote:
      'Gemma has revolutionized the way I communicate with pet owners and my team. The app was incredibly easy to integrate into my day-to-day and the benefits of using it were reaped almost immediately. Families feel close to their pets even when they are away!',
    author: 'Emily Dozeman',
    jobPositon:
      'DVM, DACVECC, Critical Care Doctor and Co-department Chair at Philadelphia Animal Specialty and Emergency',
    source: '/images/Emily@2x.png',
  },
  {
    id: 4,
    description:
      'Phil graduated from Massey University’s Bachelor of Veterinary Science in 2012. He started his career in mixed animal practice in rural New Zealand. He then directed his focus to become a Diplomate of the American College of Veterinary Surgeons. He completed two rotating internships, a surgical internship, and a Master’s of Veterinary Medicine. Today, Phil serves as a surgical resident at the Animal Medical Center.',
    quote:
      'Nothing could be easier communicating with pet owners throughout the pandemic. A simple photo or video of my patients makes owners happier and more engaged. It’s a brilliant tool. I can spend more time delivering quality care.',
    author: 'Phil Hyndman',
    jobPositon: 'BVSc, MVM at The Animal Medical Center',
    source: '/images/pic Phil@2x.png',
  },
  {
    id: 5,
    description:
      'Dr. Tara Bellis graduated from the Royal Veterinary College in 2007 and completed a small animal rotating internship there in 2008. She worked as an Emergency Veterinarian in Southeast England before moving to New York City to complete a residency in Emergency and Critical Care. Dr. Bellis became a Diplomate of the American College of Emergency and Critical Care in 2015. She has since spent a number of years directing a residency program and is an active member of the ACVECC exam committee. Dr Bellis is currently the Medical Director at Garden State Veterinary Services in Iselin, New Jersey. Her professional interests include sepsis, mechanical ventilation and CPR.',
    quote: '',
    author: 'Tara Bellis',
    jobPositon: 'Medical Director at Garden State Veterinary Services',
    source: '/images/pic Tara@2x.png',
  },
  {
    id: 6,
    description:
      'Raluca has spent the better part of her professional life in journalism and technology, working with leading technology players in the US and Europe. She currently serves as Director of Strategic Partnerships at [e-spres-oh] providing strategic marketing expertise and project planning. Prior to [e-spres-oh], Raluca served as the Chief Operating Officer of the Institute for Education, a DC-based mission-driven organization, harnessing the power of data, innovation, and soft diplomacy. In her role as the Editor-in-Chief of IFE magazine, she has interviewed ambassadors, Nobel Prize winners, and key tech innovators and disruptors in the nation’s capital. Previously, Raluca served as a Washington DC news correspondent, reporting for an international press agency headquartered in Bucharest, Romania. Raluca has an M.A. degree in Management in Media Institutions from the University of Bucharest and speaks English, Spanish and Romanian.',
    quote:
      'When vets came to us and asked for our help to build a tool that would enable them to solve the breakdown in client communication and fight the burnout triggered by the increased patient influx, we knew that we could augment their time resources through technology. So, after speaking with tens of critical care specialists and listening to their needs, we built Gemma. Gemma acts as a digital personal assistant for veterinary teams and helps them have the latest updates on their patients in one place, accessible on their mobile phones.',
    author: 'Raluca Popa',
    jobPositon: 'Director of Strategic Partnerships at [e-spres-oh]',
    source: '/images/pic Ralu@2x.png',
  },
];

export const howItWorksStages = [
  {
    id: 1,
    title: 'One-Way Multimedia Messaging',
    source: { src: multimedia.src, blurDataURL: multimedia.blurDataURL },
    dimensions: {
      width: 415,
      height: 614,
    },
    list: [
      {
        id: 1,
        text: '> Streamline communications',
      },
      {
        id: 2,
        text: '> Improve client satisfaction',
      },
      {
        id: 3,
        text: '> Optimize staff time',
      },
    ],
    paragraph_one:
      '<strong>Streamline client communication and optimize staff time</strong> with Gemma’s one-way multimedia messaging feature.',
    paragraph_two:
      'Gemma lets you show pet owners that their pets are receiving exceptional care, reducing anxiety and improving client satisfaction. You can send texts, videos, and pictures to pet families, all within the app.',
    background: '#fafafa',
    order: 0,
    passingRef: 'oneWay',
  },
  {
    id: 2,
    title: 'Team Management',
    source: { src: management.src, blurDataURL: management.blurDataURL },
    dimensions: {
      width: 550,
      height: 672,
    },
    list: [
      {
        id: 1,
        text: '> Efficient Communication',
      },
      {
        id: 2,
        text: ' > Strategic Collaboration',
      },
      {
        id: 3,
        text: '> Seamless Integration',
      },
    ],
    paragraph_one:
      '<strong>Manage, collaborate, and communicate with your team</strong> with Gemma’s team management feature.',
    paragraph_two:
      'Gemma allows you to create a team for your practice, manage your hospital’s team, or invite a specialist to join your department’s team in order to facilitate collaboration. Stay up-to-date with your patients’ progress and your teams’ activity from the convenience of your cell phone.',
    background: 'washedGreen',
    order: 1,
    passingRef: 'team',
  },
  {
    id: 3,
    title: 'Referring Vet Communications',
    source: { src: referring.src, blurDataURL: referring.blurDataURL },
    dimensions: {
      width: 456,
      height: 615,
    },
    list: [
      {
        id: 1,
        text: '> Facilitate referrals',
      },
      {
        id: 2,
        text: '> Real-time updates',
      },
      {
        id: 3,
        text: '> Engage with fellow experts',
      },
    ],
    paragraph_one:
      '<strong>Gemma facilitates referrals and collaboration with other professionals</strong> to ensure the best veterinary care, even after pets are discharged..',
    paragraph_two:
      'With Gemma, you can draft updates and share patients’ multimedia feeds with referring vets straight from the app. Gemma’s unique feature organizes and enhances communication between vets, improving care coordination and client satisfaction.',
    background: '#fafafa',
    order: 0,
    passingRef: 'referring',
  },
  {
    id: 4,
    title: 'Pet Owner Satisfaction Tracking',
    source: { src: petOwner.src, blurDataURL: petOwner.blurDataURL },
    dimensions: {
      width: 415,
      height: 614,
    },
    list: [
      {
        id: 1,
        text: '> Increase Client Reviews',
      },
      {
        id: 2,
        text: '> Strengthen Credibility',
      },
      {
        id: 3,
        text: '> Improve Client Satisfaction',
      },
    ],
    paragraph_one:
      '<strong>Strengthen your overall understanding of your clients’ experience </strong> with Gemma’s feedback form feature.',
    paragraph_two:
      'Gemma notifies you to send out a short survey straight from the app once you archive a patient. The data collected allows you to improve client satisfaction, and increasing positive reviews strengthens your credibility.',
    background: 'washedGreen',
    order: 1,
    passingRef: 'petOwner',
  },

  {
    id: 5,
    title: 'Patient Database Access',
    source: { src: patient.src, blurDataURL: patient.blurDataURL },
    dimensions: {
      width: 415,
      height: 614,
    },
    list: [
      {
        id: 1,
        text: '> Organize data',
      },
      {
        id: 2,
        text: '> Manage patient records',
      },
      {
        id: 3,
        text: '> Search for recurring patients',
      },
    ],
    paragraph_one:
      '<strong>Store, organize, and manage patient information </strong>  with Gemma’s easy-to-navigate patient database access feature.',
    paragraph_two:
      'Access your archived patient records and use Gemma’s efficient search feature to recall a previous patient, or scroll through your unarchived patient records and provide updates to pet owners, all from your cell phone.',
    background: '#fafafa',
    order: 0,
    passingRef: 'patient',
  },
  {
    id: 6,
    title: 'Feed-Sharing Across Contacts',
    source: { src: feedSharing.src, blurDataURL: feedSharing.blurDataURL },
    dimensions: {
      width: 415,
      height: 614,
    },
    list: [
      {
        id: 1,
        text: '> Build a community',
      },
      {
        id: 2,
        text: '> Share experiences',
      },
      {
        id: 3,
        text: '> Exchange ideas',
      },
    ],
    paragraph_one:
      '<strong>Build a community, exchange ideas, and share your experiences</strong> with your contacts with Gemma’s feed-sharing feature.',
    paragraph_two:
      'Take advantage of Gemma’s unique multimedia messaging and make someone’s day by sharing an adorable photo or video of one of your patients. Build your own community using Gemma and to get support or just spread smiles.',
    background: 'washedGreen',
    order: 1,
    passingRef: 'feedShare',
  },
];
