import React from 'react'
import { DiHtml5, DiPhotoshop } from 'react-icons/di'
import { FaMailBulk } from 'react-icons/fa'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Инструменты</SectionTitle>
    <SectionText>
      Я использовал ряд технологий в индустрии email-маркетинга.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Верстка писем</ListTitle>
          <ListParagraph>
            Опыт работы с <br />
            HTML-таблицами и внутренним CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaMailBulk size="3rem" />
        <ListContainer>
          <ListTitle>Email-сервисы</ListTitle>
          <ListParagraph>
            Опыт работы с <br />
            Litmus и ConvertKit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Графические редакторы</ListTitle>
          <ListParagraph>
            Опыт работы с <br />
            Photoshop и AdobeXD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
