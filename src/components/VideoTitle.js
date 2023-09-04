const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-3 px-10 rounded-sm text-center">
          Play
        </button>
        <button className="bg-white text-black p-3 px-10 rounded-sm text-center bg-opacity-50 mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
