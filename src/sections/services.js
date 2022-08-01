/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import ServicesCardColumn from 'components/services-card-column.js';
import Kinesiology from 'assets/services/kinesiology.jpg';
import Physiotherapy from 'assets/services/physiotherapy.jpg';
import Cupping from 'assets/services/cupping.jpg';
import Acupuncture from 'assets/services/acupuncture.jpg';
import ElderCare from 'assets/services/elderCare.jpg';
import KinesioTaping from 'assets/services/kinesioTaping.jpg';
import PostSurgicalRehabilitation from 'assets/services/postSurgicalRehabilitation.jpg';
import PosturalCorrection from 'assets/services/posturalCorrection.jpg';

const data = [
  {
    id: 1,
    imgSrc: Kinesiology,
    altText: 'Kinesiology',
    title: 'Kinesiology',
    text:
      'Kinesiology',
  },
  {
    id: 2,
    imgSrc: Physiotherapy,
    altText: 'Physiotherapy',
    title: 'Physiotherapy',
    text:
      'Scheduling is convenient to accommodate your availability.',
  },
  {
    id: 3,
    imgSrc: Cupping,
    altText: 'Cupping',
    title: 'Cupping',
    text:
      'Offering personalized care according to your unique needs.',
  },
  {
    id: 4,
    imgSrc: Acupuncture,
    altText: 'Acupuncture',
    title: 'Acupuncture',
    text:
      'Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.',
  },
  {
    id: 5,
    imgSrc: ElderCare,
    altText: 'Elder Care',
    title: 'Elder Care',
    text:
      'Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.',
  },
  {
    id: 6,
    imgSrc: PostSurgicalRehabilitation,
    altText: 'Post Surgical Rehabilitation',
    title: 'Post Surgical Rehabilitation',
    text:
      'Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.',
  },
  {
    id: 7,
    imgSrc: PosturalCorrection,
    altText: 'Postural Correction',
    title: 'Postural Correction',
    text:
      'Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.',
  },
  {
    id: 8,
    imgSrc: KinesioTaping,
    altText: 'Kinesio Taping',
    title: 'Kinesio Taping',
    text:
      'Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="services">
      <Container>
        <SectionHeader
          slogan="Our Services"
          title="Discover your path to recovery through"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <ServicesCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
