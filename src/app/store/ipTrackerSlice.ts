import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getIp } from 'shared/api'

import { IpResponse, IpTracker } from 'shared/types/response'

const initialState: IpTracker = {
  ip: '',
  city: '',
  region_code: '',
  postal: '',
  isp: '',
  utc: '',
}

export const fetchIpInfo = createAsyncThunk<IpResponse, string, { rejectValue: RejectedDataType }>(
  'ipTracker/fetchIpInfo',
  async (ip: string) => {
    try {
      const response = await getIp(ip)

      return response.data
    } catch (error) {
      if (axios.isAxiosError(error) && !error.response) {
        throw new Error('Network error occurred')
      }
      throw error
    }
  }
)

const ipTrackerSlice = createSlice({
  name: 'ipTracker',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchIpInfo.fulfilled, (state, action) => {
      state.ip = action.payload.ip
      state.city = action.payload.city
      state.region_code = action.payload.region_code
      state.postal = action.payload.postal
      state.isp = action.payload.connection.isp
      state.utc = action.payload.timezone.utc
    })
  },
})

export const ipTrackerReducer = ipTrackerSlice.reducer
export const ipTrackerActions = ipTrackerSlice.actions

type RejectedDataType = {
  error: string
}
