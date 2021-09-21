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
    <SectionTitle>Tools</SectionTitle>
    <SectionText>
      I've used a range of technologies in the email marketing world.
    </SectionText>
    <List>
      <ListItem>
        <DiHtml5 size="3rem" />
        <ListContainer>
          <ListTitle>Email Layout</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML Tables and Inline CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaMailBulk size="3rem" />
        <ListContainer>
          <ListTitle>Email Services</ListTitle>
          <ListParagraph>
            Experience with <br />
            Litmus and ConvertKit
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size="3rem" />
        <ListContainer>
          <ListTitle>Design Software</ListTitle>
          <ListParagraph>
            Experience with <br />
            Photoshop and AdobeXD
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
