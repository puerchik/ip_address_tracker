import { IPinfo } from 'components/IPinfo'
import { SearchInput } from 'components/SearchInput'
import { useEffect } from 'react'
import { getIp } from 'shared/api'
import styled from 'styled-components'

export const InfoForm = () => {
  const setIp = async () => {
    const res = await getIp('192.212.174.101')
    console.log(res.data)
  }

  useEffect(() => {
    setIp()
  }, [])

  return (
    <>
      <S.InfoFormInner>
        <S.Title>IP Address Tracker</S.Title>
        <SearchInput />
        <IPinfo />
      </S.InfoFormInner>
    </>
  )
}

const S = {
  InfoFormInner: styled.section`
    position: absolute;
    width: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.h1`
    color: white;
    font-size: 36px;
    font-weight: 500;
  `,
}
