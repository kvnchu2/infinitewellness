import React from 'react';
import { ThemeProvider } from 'theme-ui';
import Link from "next/link"
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Modal from 'components/modal';
import Banner from '../sections/banner2';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import WorkFlow from '../sections/workflow';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import BlogSection from '../sections/blog-section';
import Subscribe from '../sections/subscribe';
import { VideoProvider } from '../contexts/video/video.provider';
import Contact from '../sections/contact';
import Services from '../sections/services';

export default function IndexPage() {
  return (

    
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO title="Infinite Wellness" />
            <Banner />
            <KeyFeature />
            <Services />
            {/* <ServiceSection /> */}
            {/* <Feature /> */}
            {/* <CoreFeature /> */}
            {/* <WorkFlow /> */}
            {/* <Package /> */}
            <TeamSection />
            <Contact />
            {/* <TestimonialCard />
            <BlogSection />
            <Subscribe /> */}
            <Modal/>
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}
