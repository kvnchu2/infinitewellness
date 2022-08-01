/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Car from 'assets/key-feature/car.png';
import Calendar from 'assets/key-feature/calendar.png';
import Customize from 'assets/key-feature/customize.png';
import DirectBilling from 'assets/key-feature/direct-billing.png';

const data = [
  {
    id: 1,
    imgSrc: Car,
    altText: 'Mobile',
    title: 'Mobile',
    text:
      'No need to visit a clinic! Sessions take place at your home, community center gym, or pool.',
  },
  {
    id: 2,
    imgSrc: Calendar,
    altText: 'Flexible',
    title: 'Flexible',
    text:
      'Scheduling is convenient to accommodate your availability.',
  },
  {
    id: 3,
    imgSrc: Customize,
    altText: 'Customize',
    title: 'Customized',
    text:
      'Offering personalized care according to your unique needs.',
  },
  {
    id: 4,
    imgSrc: DirectBilling,
    altText: 'DirectBilling',
    title: 'Direct Billing',
    text:
      'Insurance-covered services billed directly to ICBC, WSBC, MSP and major insurance providers.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="about">
      <Container>
        <SectionHeader
          slogan="Why patients choose us"
          title="Insurance-covered mobile health care"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
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
