import SongBar from './SongBar';

const RelatedSongs = ({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId, artistFlag }) => {
  let relatedData = data?.tracks;
  if (artistFlag) {
    relatedData = data;
  }
  // const myData = relatedData?.map((song, i) => console.log(song.track, i));
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
        {!artistFlag && (
          <div className="mt-6 w-full flex flex-col">
            {relatedData?.map((song, i) => (
              <SongBar
                key={`${song.key}-${artistId}-${Math.random() * 3.14}`}
                song={song}
                i={i}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            ))}
          </div>
        )}
        {artistFlag && (
          <div className="mt-6 w-full flex flex-col">
            {relatedData?.map((song, i) => (
              <SongBar
                key={`${song.key}-${artistId}-${Math.random() * 3.14}`}
                song={song.track}
                i={i}
                artistId={artistId}
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RelatedSongs;
