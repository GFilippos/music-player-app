import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const artistName = sessionStorage.getItem('artistName'); //can get it from attributes of artistData
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);
  console.log(artistData?.data[0]?.attributes);
  // const artistObj = artistData?.result.hits;
  // const artistImgUrl = artistObj?.map((item) => item.track.share.image);
  // const artistImg = artistImgUrl?.map((img) => img);
  // const type = artistObj?.map((item) => item.track.hub.type);
  // const artistHits = artistObj?.map((track) => track);
  // const artistHits = artistData?.result.hits[0].track.share;

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />;
  // console.log(artistHits);
  // if (error) return <Error />;

  // console.log(artistHits);
  return (
    <>
      <div className="flex flex-col">
        <DetailsHeader
          artistId={artistId}
          // artistData={artistObj}
          // artistImg={artistImg}
          artistName={artistName}
          type={type}
        />
        {/* <RelatedSongs
          data={Object.values(artistHits)}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          artistFlag={true}
        /> */}
      </div>
    </>
  );
};
export default ArtistDetails;
