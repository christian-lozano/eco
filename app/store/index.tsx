import type { ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import type { Action } from 'redux'

import productReducer from './slices/product'
import profileReducer from './slices/profile'

const makeStore = () =>
  configureStore({
    reducer: {
      profile: profileReducer,
      product: productReducer,
    },
    devTools: true,
  })

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>

export const wrapper = createWrapper<AppStore>(makeStore)
