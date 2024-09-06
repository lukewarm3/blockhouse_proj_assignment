import { configureStore } from '@reduxjs/toolkit'
import ChartReducer from '@/slices/ChartSlice'

export default configureStore({
    reducer: {
       chart: ChartReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})