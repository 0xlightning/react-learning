import {configureStore} from '@reduxjs/toolkit'
import currencyReducer from './currencyReducer'

export const store = configureStore({
    reducer: {
        currency: currencyReducer
    }
})