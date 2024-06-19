import styled from 'styled-components'

export const InfoForm = () => {
  return (
    <>
      <InfoFormInner>
        <Title>Info</Title>
      </InfoFormInner>
    </>
  )
}

const InfoFormInner = styled.section`
  position: absolute;
  width: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  color: white;
  font-size: 45px;
`
