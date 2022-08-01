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
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

const data = [
  {
    id: 1,
    imgSrc: Johnny,
    altText: 'Johnny Guan',
    title: 'Johnny Guan',
    designation: 'Physiotherapist',
    languages: 'English, Cantonese, Mandarin',
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
  },
  {
    id: 1,
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
  },
  {
    id: 1,
    imgSrc: Eunice,
    altText: 'Eunice Lu',
    title: 'Eunice Lu',
    designation: 'Physiotherapist',
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
  },
  {
    id: 1,
    imgSrc: Patrick,
    altText: 'Patrick Tung',
    title: 'Patrick Tung',
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
  },
  {
    id: 1,
    imgSrc: Dilek,
    altText: 'Dilek Kacar',
    title: 'Dilek Kacar',
    designation: 'Physiotherapist',
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
  },
  // {
  //   id: 2,
  //   imgSrc: Member2,
  //   altText: 'Aaron Nunez',
  //   title: 'Aaron Nunez',
  //   designation: 'Founder',
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
  // },
  // {
  //   id: 3,
  //   imgSrc: Member3,
  //   altText: 'Aaron Nunez',
  //   title: 'Aaron Nunez',
  //   designation: 'Web Designer',
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
  // },
  // {
  //   id: 4,
  //   imgSrc: Member4,
  //   altText: 'Lina Jutila',
  //   title: 'Lina Jutila',
  //   designation: 'Web Developer',
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
  // },
  // {
  //   id: 5,
  //   imgSrc: Member5,
  //   altText: 'Saimon Harmer',
  //   title: 'Saimon Harmer',
  //   designation: 'CEO and Founder',
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
  // },
  // {
  //   id: 6,
  //   imgSrc: Member6,
  //   altText: 'Aaron Nunez',
  //   title: 'Aaron Nunez',
  //   designation: 'Web Designer',
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
  // },
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
