module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define(
    'Music',
    {
      //MySQL musics 테이블 생성
      // id 자동 생성
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      genre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      author: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      composor: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      releaseDate: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      album: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      musicFile: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci', // utf8 한글, mb4 이모티콘 저장
    }
  );
  return Music;
};
