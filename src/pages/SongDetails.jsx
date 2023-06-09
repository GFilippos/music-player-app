import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const [isFetching, setIsFetching] = useState(true);
  const dispatch = useDispatch();
  const { songid } = useParams();
  const searchParams = new URLSearchParams(window.location.search);
  const adamid = searchParams.get('adamid');
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery(songid);
  // const {
  //   data: relatedData,
  //   isFetching: isFetchingRelatedSongs,
  //   error,
  // } = useGetSongRelatedQuery(adamid, { skip: isFetching });
  const songLyrics = data?.sections[1]?.text;
  const songData = data;
  // const relatedDataResult = relatedData?.result;
  console.log(data);
  setTimeout(() => {
    setIsFetching(false);
  }, 1500);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  if (isFetchingSongDetails) return <Loader title="Searching song details" />;
  //   too many requests lead to errors making the page not working properly
  //   if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songLyrics ? (
            songLyrics.map((line, i) => (
              <p key={i} className="text-gray-400 text-base my-1">
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
          )}
        </div>
      </div>
      {/* <RelatedSongs
        data={relatedDataResult}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      /> */}
    </div>
  );
};
export default SongDetails;
