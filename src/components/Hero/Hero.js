import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Email Marketing
        <br />
        Campaigns That Lead <br />
        to Results
      </SectionTitle>
      <SectionText>Meet Amir.</SectionText>
      <Button onClick={() => (window.location = '#about')}>Learn More</Button>
    </LeftSection>
  </Section>
)

export default Hero
