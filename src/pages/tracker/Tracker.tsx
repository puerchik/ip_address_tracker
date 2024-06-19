import styled from 'styled-components'

import { LocationMap } from 'components/locationMap'
import { InfoForm } from 'components/infoForm'

export const Tracker = () => {
  return (
    <>
      <Main>
        <LocationMap />
        <InfoForm />
      </Main>
    </>
  )
}

const Main = styled.main`
  position: relative;
  height: 100%;
`
