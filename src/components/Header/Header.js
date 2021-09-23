import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { HiMail } from 'react-icons/hi'

import {
  Container,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <HiMail size="3rem" /> <Span>Портфолио</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Проекты</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Технологии</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>Обо мне</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ShammasovAmir">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/amir-shammasov-174b6b204">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
