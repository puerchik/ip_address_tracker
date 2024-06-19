import axios from 'axios'

import { IpResponse } from 'shared/types/response'

const instance = axios.create({
  baseURL: 'https://ipwho.is/',
})

export const getIp = (ip: string) => instance.get<IpResponse>(ip)
