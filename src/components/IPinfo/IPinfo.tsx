import { useAppSelector } from 'shared/hooks/reduxHooks'
import styled from 'styled-components'

export const IPinfo = () => {
  const info = useAppSelector(state => state.ipTracker.ipInfo)
  console.log(info)

  return (
    <>
      <S.InfoList>
        <S.Item>
          <S.InfoTitle>IP address</S.InfoTitle>
          <S.Info>{info.ip}</S.Info>
        </S.Item>
        <S.Item>
          <S.InfoTitle>Location</S.InfoTitle>
          <S.Info>
            {info.country}, {info.city}
          </S.Info>
          <S.Info>{info.postal}</S.Info>
        </S.Item>
        <S.Item>
          <S.InfoTitle>Timezone</S.InfoTitle>
          <S.Info>UTC {info.utc}</S.Info>
        </S.Item>
        <S.Item>
          <S.InfoTitle>ISP</S.InfoTitle>
          <S.Info>{info.isp}</S.Info>
        </S.Item>
      </S.InfoList>
    </>
  )
}

const S = {
  InfoList: styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 1100px;
    column-gap: 70px;
    padding: 35px;
    background-color: #ffffff;
    border-radius: 15px;

    -webkit-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 5px 20px -10px rgba(0, 0, 0, 0.75);

    @media (max-width: 980px) {
      grid-template-columns: repeat(2, 1fr);
      row-gap: 15px;
    }

    @media (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 10px;
      padding: 20px;
    }
  `,

  Item: styled.li`
    position: relative;

    &:not(:first-child)::after {
      content: '';
      position: absolute;
      top: 0;
      left: -35px;
      width: 1px;
      height: 100%;
      background-color: #2b2b2b;

      @media (max-width: 980px) {
        content: none;
      }
    }

    @media (max-width: 780px) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `,

  InfoTitle: styled.h3`
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #969696;
    margin-bottom: 25px;

    @media (max-width: 780px) {
      margin-bottom: 5px;
      font-size: 12px;
    }
  `,

  Info: styled.p`
    font-size: 26px;
    font-weight: 700;

    @media (max-width: 780px) {
      font-size: 18px;
    }
  `,
}
