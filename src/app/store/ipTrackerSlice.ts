import { isAxiosError } from 'axios'
import { getIp } from 'shared/api'

import { IpTracker } from 'shared/types/response'
import { createAppSlice } from 'shared/utils/createAppSlice'

type StateType = {
  ipInfo: IpTracker
  loading: boolean
  error: string | undefined | unknown | boolean
}

const initialState: StateType = {
  ipInfo: {
    ip: '',
    city: '',
    country: '',
    postal: '',
    isp: '',
    utc: '',
    longitude: 0,
    latitude: 0,
  },
  loading: false,
  error: false,
}

const ipTrackerSlice = createAppSlice({
  name: 'ipTracker',
  initialState,
  reducers: create => ({
    setError: create.reducer<boolean | string>((state, action) => {
      state.error = action.payload
    }),
    fetchIpInfo: create.asyncThunk(
      async (ip: string, thunkApi) => {
        const { rejectWithValue } = thunkApi
        try {
          const response = await getIp(ip)

          if (!response.data.success) {
            return rejectWithValue(response.data.message)
          }

          const ipInfo = {
            ip: response.data.ip,
            city: response.data.city,
            country: response.data.country,
            postal: response.data.postal,
            isp: response.data.connection.isp,
            utc: response.data.timezone.utc,
            longitude: response.data.longitude,
            latitude: response.data.latitude,
          }

          return ipInfo
        } catch (error) {
          if (isAxiosError(error)) {
            return rejectWithValue(error.message)
          }

          return rejectWithValue('Error')
        }
      },
      {
        pending: state => {
          state.loading = true
          state.error = false
        },
        rejected: (state, action) => {
          state.loading = false
          state.error = action.payload
        },
        fulfilled: (state, action) => {
          state.loading = false
          state.ipInfo = action.payload
        },
      }
    ),
  }),
})

export const ipTrackerReducer = ipTrackerSlice.reducer
export const { fetchIpInfo, setError } = ipTrackerSlice.actions
