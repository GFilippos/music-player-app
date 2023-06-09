import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData, artistImg, artistName, type }) => {
  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28 " />
      <div className="absolute inset-0 flex items-center">
        <img
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
          src={artistId ? artistImg[0] : songData?.images?.coverart}
          alt="art"
        />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistId ? artistName : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">{artistId ? type[0] : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  );
};

export default DetailsHeader;
