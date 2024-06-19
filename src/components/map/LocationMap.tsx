import styled from 'styled-components'

import { Flex } from 'styles/common'

import heagerImgDesktop from 'assets/images/pattern-bg-desktop.png'
import heagerImgMobile from 'assets/images/pattern-bg-mobile.png'

export const LocationMap = () => {
  return (
    <>
      <Wrapper>
        <picture>
          <source srcSet={heagerImgMobile} media="(max-width: 375px)" />
          <HeaderImage src={heagerImgDesktop} />
        </picture>
        <Location />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  ${Flex}
  flex-direction: column;
  min-height: 100%;
`

const HeaderImage = styled.img`
  width: 100%;
  height: auto;
`
const Location = styled.div`
  flex-grow: 1;
  background-color: green;
  width: 100%;
`
