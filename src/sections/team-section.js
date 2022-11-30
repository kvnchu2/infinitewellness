/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import TeamCard from 'components/team-card';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

import Johnny from 'assets/team/johnny-guan.png';
import Bruno from 'assets/team/bruno-savino.jpg';
import Patrick from 'assets/team/patrick-tung.png';
import Eunice from 'assets/team/eunice-lu.png';
import Dilek from 'assets/team/dilek-kacar.png';
import RuthAnn from 'assets/team/ruth-ann.png';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  // {
  //   id: 1,
  //   imgSrc: Johnny,
  //   altText: 'Johnny Guan',
  //   title: 'Johnny Guan',
  //   designation: 'Physiotherapist',
  //   languages: 'English, Cantonese, Mandarin',
  //   socialProfile: [
  //     {
  //       id: 1,
  //       name: 'facebook',
  //       path: '#',
  //       icon: <FaFacebookF />,
  //     },
  //     {
  //       id: 2,
  //       name: 'twitter',
  //       path: '#',
  //       icon: <FaTwitter />,
  //     },
  //     {
  //       id: 3,
  //       name: 'instagram',
  //       path: '#',
  //       icon: <FaInstagram />,
  //     },
  //   ],
  //   description: 'Johnny completed his Master’s degree in Physical Therapy at Queen’s University, and bachelor’s degree in Kinesiology at the University of British Columbia. Johnny started his career in public practice (hospitals) and private clinics in Kingston and the Greater Toronto Area. In addition to his clinical experience, Johnny spent four years as a behavioral interventionist, and was a research assistant for a Parkinson’s disease and concussion study at UBC. Johnny has a variety of interests including treating patients with MSK (musculoskeletal), cardiopulmonary diseases, neurological conditions, vestibular issues, and concussion. He also enjoys helping patients who have injuries from sports, motor vehicle accidents, and other chronic conditions. In his spare time Johnny enjoys playing basketball, table tennis, tennis and badminton.'
  // },
  {
    id: 2,
    imgSrc: Bruno,
    altText: 'Bruno Savino',
    title: 'Bruno Savino',
    designation: 'Kinesiologist',
    languages: 'English, Spanish, Portugese',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
    description: 'Coming soon!'
  },
  {
    id: 3,
    imgSrc: Eunice,
    altText: 'Eunice Lu',
    title: 'Eunice Lu',
    designation: 'Physiotherapist',
    languages: 'English, Mandarin, Taiwanese',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
    description: 'Eunice graduated from the University of Sydney with a Masters of Physiotherapy and she has also completed a Bachelor of Kinesiology at the University of British Columbia (UBC).She has recently moved back to Vancouver to be closer to her family and friends after studying and working in Sydney, Australia for the past 3 years. She is passionate about helping people obtain an active, independent, and healthy lifestyle by applying evidence-based practice knowledge. Prior to pursuing her interest in becoming a physiotherapist, she has worked in a multidisciplinary physiotherapy clinic as a clinical kinesiologist for 5 years. As a clinical kinesiologist, she has worked on implementing rehabilitation programs with various strengthening and stretching exercises in assisting patients return to work and return to sports. When she isn’t at work, she likes to go for outdoor hikes, watch Netflix, and explore new restaurants in the neighbourhood. Eunice is fluent in English and Mandarin/Taiwanese.'
  },
  {
    id: 4,
    imgSrc: Patrick,
    altText: 'Patrick Tung',
    title: 'Patrick Tung',
    designation: 'Kinesiologist',
    languages: 'English, Mandarin, Cantonese',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
    description: 'Graduating from the University of British Columbia with a Human Kinetics degree in 2006, Patrick has been with Ackroyd Physiotherapy for 9 years. He brings with him a wealth of knowledge and experience in physical rehabilitation for individuals with various abilities to reduce pain and restore function. He also has ample experience in implementing functional assessments and active rehabilitation programs, and designing return-to-work programs for individuals who have suffered injuries. He enjoys making use of hydrotherapy and self-myofascial release as tools in his exercise program design. When not assisting clients, Patrick is an avid participant in various sporting activities. He is fluent in English, Mandarin, and Cantonese.'
  },
  {
    id: 5,
    imgSrc: Dilek,
    altText: 'Dilek Kacar',
    title: 'Dilek Kacar',
    designation: 'Physiotherapist',
    languages: 'English, Turkish',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
    description: 'Dilek Kacar is practicing as a Physical Therapist at Synergy Health, Vancouver. She completed her Bachelor of Science in Physiotherapy and Rehabilitation at the University of Marmara in 2017. She graduated as a high honor student with a degree and worked with many patients at any ages who have neurological and orthopedic problems. She strongly believes that patient should take an active role in the treatment and cares the importance of the exercises along with the manual therapy, education and the modalities. She also cares the ongoing learning to help her patients. She has attended Soft Tissue Release Course and K-Taping course to improve her knowledge and skill. In her spare time, she plays volleyball, tennis and she loves biking during the summer time.'
  },
  {
    id: 6,
    imgSrc: RuthAnn,
    altText: 'Ruth-Ann Chau',
    title: 'Ruth-Ann Chau',
    designation: 'Acupuncturist',
    languages: 'English, Mandarin',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
    description: 'Graduated from Beijing University of Chinese Medicine, certified acupuncturists in BC (R.Ac.) Skills in treating various pain problems, emotional distress, and sports injuries. '
  },
];

export default function TeamSection() {
  return (
    <section id="teamsection" sx={{ variant: 'section.teamsection' }}>
      <Container>
        <SectionHeader
          slogan="our team"
          title="Your team of dedicated health professionals"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={`team--key${item.id}`}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
              languages={item.languages}
              description={item.description}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
