const ProgressBlock = ({ progress }) => {
  return (
    <div
      className="w-full h-2.5 bg-gray-200 rounded-full"
      style={{ background: 'white' }}
    >
      <div
        className="h-2.5 rounded-full"
        style={{ width: `${progress}%`, background: '#0084d4' }}
      ></div>
    </div>
  );
};

export default ProgressBlock;
