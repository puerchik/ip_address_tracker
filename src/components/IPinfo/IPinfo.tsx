import styled from 'styled-components'

export const IPinfo = () => {
  return (
    <>
      <S.InfoList>
        <li>IP address</li>
        <li>Location</li>
        <li>Timezone</li>
        <li>ISP</li>
      </S.InfoList>
    </>
  )
}

const S = {
  InfoList: styled.ul`
    display: flex;
    column-gap: 15px;
  `,
}
