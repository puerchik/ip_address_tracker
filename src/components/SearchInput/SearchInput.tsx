import { fetchIpInfo } from 'app/store/ipTrackerSlice'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAppDispatch } from 'shared/hooks/reduxHooks'
import styled from 'styled-components'

type Inputs = {
  ip: string
}

export const SearchInput = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = data => {
    dispatch(fetchIpInfo(data.ip))
  }

  return (
    <>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input {...register('ip')} />
        <S.Button type="submit">search</S.Button>
      </S.Form>
    </>
  )
}

const S = {
  Form: styled.form``,
  Input: styled.input``,
  Button: styled.button``,
}
