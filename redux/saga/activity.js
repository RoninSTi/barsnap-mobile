/* eslint-disable import/prefer-default-export */
import { put, takeEvery, select } from 'redux-saga/effects'

import { REFRESH_ACTIVITY, SET_AUTH_USER } from '../actions/types'
import { fetchActivityAction } from '../actions/activity'

const getAuthUser = (state) => state.auth.user

const getActivityParams = (state) => {
  const { page, pageSize } = state.activity

  return { page, pageSize }
}

function* fetchActivity() {
  const { id: userId, token } = yield select(getAuthUser)

  if (!userId) return

  const activityParams = yield select(getActivityParams)

  yield put(fetchActivityAction({ ...activityParams, token, userId }))
}

function* onRefreshActivity() {
  yield fetchActivity()
}

function* onSetAuthUser() {
  const authUser = yield select(getAuthUser)

  const id = authUser?.id

  if (!id) return

  yield fetchActivity()
}

export function* watchActivity() {
  yield takeEvery(REFRESH_ACTIVITY, onRefreshActivity)
  yield takeEvery(SET_AUTH_USER, onSetAuthUser)
}
