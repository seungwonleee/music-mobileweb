import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_MUSIC_LIST_REQUEST,
  LOAD_MUSIC_LIST_SUCCESS,
  LOAD_MUSIC_LIST_FAILURE,
  UPLOAD_MUSIC_REQUEST,
  UPLOAD_MUSIC_SUCCESS,
  UPLOAD_MUSIC_FAILURE,
} from '../reducers/music';

// 음악 목록 호출
function loadMusicListAPI() {
  return axios.get('/music');
}

function* loadMusicList() {
  try {
    const result = yield call(loadMusicListAPI);

    yield put({
      type: LOAD_MUSIC_LIST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MUSIC_LIST_FAILURE,
      error: err.response.data,
    });
  }
}

// 음악 업로드
function uploadMusicAPI(data) {
  return axios.post('/music/upload', data);
}

function* uploadMusic(action) {
  try {
    const result = yield call(uploadMusicAPI, action.data);
    yield put({
      type: UPLOAD_MUSIC_SUCCESS,
      data: result.data,
    });
    alert('업로드에 성공했습니다.');
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_MUSIC_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMusicList() {
  yield takeLatest(LOAD_MUSIC_LIST_REQUEST, loadMusicList);
}

function* watchUploadMusic() {
  yield takeLatest(UPLOAD_MUSIC_REQUEST, uploadMusic);
}

export default function* musicSaga() {
  yield all([fork(watchLoadMusicList), fork(watchUploadMusic)]);
}
