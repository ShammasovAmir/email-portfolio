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
        Создание и запуск
        <br />
        успешных <br /> email-кампаний.
      </SectionTitle>
      <SectionText>
        Полный процесс создания почтовой рассылки - от дизайна и верстки до
        массовой отправки рекламных писем покупателям.
      </SectionText>
      <Button onClick={() => (window.location = '#about')}>
        Узнать больше
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
