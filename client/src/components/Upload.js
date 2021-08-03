import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useInput from './hooks/useInput';
import { UPLOAD_MUSIC_REQUEST } from '../reducers/music';

const Upload = () => {
  const dispatch = useDispatch();

  const [album, setAlbum] = useState('');
  const [musicFile, setMusicFile] = useState('');
  const [title, setTitle] = useInput('');
  const [genre, setGenre] = useInput('');
  const [author, setAuthor] = useInput('');
  const [composor, setComposer] = useInput('');
  const [releaseDate, setReleaseDate] = useInput('');

  const handleChangeFile = (event) => {
    const target = event.target.name;
    const file = event.target.files[0];
    if (target === 'album') {
      setAlbum(file);
    }
    if (target === 'musicFile') {
      setMusicFile(file);
    }
  };

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (
        album === '' ||
        musicFile === '' ||
        title === '' ||
        genre === '' ||
        author === '' ||
        composor === '' ||
        releaseDate === ''
      ) {
        return alert('모든 항목을 입력해주세요.');
      }

      let formData = new FormData();

      formData.append('album', album);
      formData.append('musicFile', musicFile);
      formData.append('title', title);
      formData.append('genre', genre);
      formData.append('author', author);
      formData.append('composor', composor);
      formData.append('releaseDate', releaseDate);

      dispatch({
        type: UPLOAD_MUSIC_REQUEST,
        data: formData, //{ Content : formData} 같이 객체 형식으로는 못보낸다.
      });
    },
    [album, musicFile, title, genre, author, composor, releaseDate]
  );

  return (
    <div style={{ height: '100vh' }}>
      <form encType="multipart/form-data">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>커버 사진</label>
          <input
            type="file"
            name="album"
            onChange={handleChangeFile}
            multiple={false}
            accept="image/*"
          />

          <br />
          <label>음악 파일</label>
          <input
            type="file"
            name="musicFile"
            onChange={handleChangeFile}
            multiple={false}
            accept="audio/*"
          />
          <br />

          <label>제목</label>
          <input onChange={setTitle} value={title} />
          <br />
          <label>장르</label>
          <input onChange={setGenre} value={genre} />
          <br />
          <label>저자</label>
          <input onChange={setAuthor} value={author} />
          <br />
          <label>작곡가</label>
          <input onChange={setComposer} value={composor} />
          <br />
          <label>기록된 해</label>
          <input onChange={setReleaseDate} value={releaseDate} type="number" />
          <br />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button style={{ width: '30%' }} onClick={handleSubmit}>
            업로드
          </button>
        </div>
      </form>
    </div>
  );
};

export default Upload;
