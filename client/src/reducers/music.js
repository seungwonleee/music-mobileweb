import produce from 'immer';

export const initialState = {
  play: false,
  stop: true,
  playNow: {
    musicId: null,
    playTime: null,
  },
  loadMusicListLoading: false,
  loadMusicListDone: false,
  loadMusicListError: null,
  loadMusicLoading: false,
  loadMusicDone: false,
  loadMusicError: null,
};

export const PLAY_MUSIC = 'PLAY_MUSIC';
export const STOP_MUSIC = 'STOP_MUSIC';

export const LOAD_MUSIC_LIST_REQUEST = 'LOAD_MUSIC_LIST_REQUEST';
export const LOAD_MUSIC_LIST_SUCCESS = 'LOAD_MUSIC_LIST_SUCCESS';
export const LOAD_MUSIC_LIST_FAILURE = 'LOAD_MUSIC_LIST_FAILURE';

export const LOAD_MUSIC_REQUEST = 'LOAD_MUSIC_REQUEST';
export const LOAD_MUSIC_SUCCESS = 'LOAD_MUSIC_SUCCESS';
export const LOAD_MUSIC_FAILURE = 'LOAD_MUSIC_FAILURE';

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
      case LOAD_MUSIC_REQUEST:
        draft.loadMusicLoading = true;
        draft.loadMusicDone = false;
        draft.loadMusicError = null;
        break;
      case LOAD_MUSIC_SUCCESS:
        draft.loadMusicLoading = false;
        draft.loadMusicDone = true;
        draft.loadMusicError = null;
        break;
      case LOAD_MUSIC_FAILURE:
        draft.loadMusicLoading = false;
        draft.loadMusicDone = false;
        draft.loadMusicError = null;
        break;
      default:
        break;
    }
  });

export default music;
