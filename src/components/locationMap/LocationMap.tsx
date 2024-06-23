import styled from 'styled-components'

import { Flex } from 'styles/common'

import heagerImgDesktop from 'assets/images/pattern-bg-desktop.png'
import heagerImgMobile from 'assets/images/pattern-bg-mobile.png'
import { MapComponent } from 'components/mapComponent'

export const LocationMap = () => {
  return (
    <>
      <S.Wrapper>
        <picture>
          <source srcSet={heagerImgMobile} media="(max-width: 375px)" />
          <S.HeaderImage src={heagerImgDesktop} />
        </picture>
        <S.Location>
          <MapComponent />
        </S.Location>
      </S.Wrapper>
    </>
  )
}

const S = {
  Wrapper: styled.div`
    ${Flex}

    flex-direction: column;
    min-height: 100%;
  `,

  HeaderImage: styled.img`
    width: 100%;
    height: auto;
  `,

  Location: styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #fff;
  `,
}
