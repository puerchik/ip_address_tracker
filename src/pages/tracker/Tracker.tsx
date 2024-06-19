import styled from 'styled-components'

import { LocationMap } from 'components/locationMap'
import { InfoForm } from 'components/infoForm'

export const Tracker = () => {
  return (
    <>
      <S.Main>
        <LocationMap />
        <InfoForm />
      </S.Main>
    </>
  )
}

const S = {
  Main: styled.main`
    position: relative;
    height: 100%;
  `,
}
