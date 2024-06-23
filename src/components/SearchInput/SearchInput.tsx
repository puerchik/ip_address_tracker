import { SubmitHandler, useForm } from 'react-hook-form'
import styled from 'styled-components'

import { fetchIpInfo } from 'app/store/ipTrackerSlice'
import { useAppDispatch } from 'shared/hooks/reduxHooks'

import { ResetButton, VisuallyHidden } from 'styles/common'

import arrowIcon from 'assets/images/icon-arrow.svg'

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<{ ip: string }>()

  const onSubmit: SubmitHandler<{ ip: string }> = data => {
    dispatch(fetchIpInfo(data.ip))
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input {...register('ip')} placeholder="Search for any IP address or domain" />
        <S.Button type="submit">
          <S.HiddenText>search</S.HiddenText>
        </S.Button>
      </S.Form>
    </>
  )
}

const S = {
  Form: styled.form`
    position: relative;
    width: 100%;
    max-width: 550px;
    margin-bottom: 10px;
  `,

  Input: styled.input`
    width: 100%;
    padding: 20px;
    padding-right: 80px;
    border: none;
    border-radius: 15px;

    @media (max-width: 780px) {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 25px;
      padding: 15px;
      padding-right: 70px;

      &::placeholder {
        font-size: 10px;
      }
    }
  `,

  Button: styled.button`
    ${ResetButton}
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    aspect-ratio: 1;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #000000;
    transition: 0.2s;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 15px;
      aspect-ratio: 1;
      background: url(${arrowIcon}) center/contain no-repeat;
    }

    @media (hover: none) {
      &:active {
        opacity: 0.8;
      }
    }

    @media (hover: hover) {
      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  `,

  HiddenText: styled.span`
    ${VisuallyHidden}
  `,
}
