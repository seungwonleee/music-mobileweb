import produce from 'immer';

export const initialState = {
  play: false,
  stop: true,
  playNow: {
    musicId: null,
    playTime: null,
  },
  musicList: [],
  loadMusicListLoading: false,
  loadMusicListDone: false,
  loadMusicListError: null,
  uploadMusicLoading: false,
  uploadMusicDone: false,
  uploadMusicError: null,
};

export const PLAY_MUSIC = 'PLAY_MUSIC';
export const STOP_MUSIC = 'STOP_MUSIC';

export const LOAD_MUSIC_LIST_REQUEST = 'LOAD_MUSIC_LIST_REQUEST';
export const LOAD_MUSIC_LIST_SUCCESS = 'LOAD_MUSIC_LIST_SUCCESS';
export const LOAD_MUSIC_LIST_FAILURE = 'LOAD_MUSIC_LIST_FAILURE';

export const UPLOAD_MUSIC_REQUEST = 'UPLOAD_MUSIC_REQUEST';
export const UPLOAD_MUSIC_SUCCESS = 'UPLOAD_MUSIC_SUCCESS';
export const UPLOAD_MUSIC_FAILURE = 'UPLOAD_MUSIC_FAILURE';

const music = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PLAY_MUSIC:
        draft.play = true;
        draft.stop = false;
        draft.playNow = action.data; //재생중인 음악 및 시간
        break;
      case STOP_MUSIC:
        draft.play = false;
        draft.stop = true;
        draft.playNow = action.data; //멈춘 음악 및 시간
        break;
      case LOAD_MUSIC_LIST_REQUEST:
        draft.loadMusicListLoading = true;
        draft.loadMusicListDone = false;
        draft.loadMusicListError = null;
        break;
      case LOAD_MUSIC_LIST_SUCCESS:
        draft.loadMusicListLoading = false;
        draft.loadMusicListDone = true;
        draft.loadMusicListError = null;
        draft.musicList = action.data.musicList;
        break;
      case LOAD_MUSIC_LIST_FAILURE:
        draft.loadMusicListLoading = false;
        draft.loadMusicListDone = false;
        draft.loadMusicListError = null;
        break;
      case UPLOAD_MUSIC_REQUEST:
        draft.uploadMusicLoading = true;
        draft.uploadMusicDone = false;
        draft.uploadMusicError = null;
        break;
      case UPLOAD_MUSIC_SUCCESS:
        draft.uploadMusicLoading = false;
        draft.uploadMusicDone = true;
        draft.uploadMusicError = null;
        break;
      case UPLOAD_MUSIC_FAILURE:
        draft.uploadMusicLoading = false;
        draft.uploadMusicDone = false;
        draft.uploadMusicError = null;
        break;
      default:
        break;
    }
  });

export default music;
