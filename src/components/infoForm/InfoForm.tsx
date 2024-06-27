import { useEffect } from 'react'
import styled from 'styled-components'

import { fetchIpInfo } from 'app/store/ipTrackerSlice'

import { IPinfo } from 'components/IPinfo'
import { SearchInput } from 'components/SearchInput'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

export const InfoForm = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchIpInfo('194.58.112.174'))
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
    row-gap: 30px;
    padding-inline: 51px;

    @media (max-width: 780px) {
      row-gap: 15px;
    }
  `,

  Title: styled.h1`
    color: white;
    font-size: 36px;
    font-weight: 500;
    padding-top: 30px;

    @media (max-width: 780px) {
      padding-top: 10px;
      font-size: 26px;
    }
  `,
}
