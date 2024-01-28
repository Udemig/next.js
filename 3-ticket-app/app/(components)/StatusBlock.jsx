const StatusBlock = ({ status }) => {
  const getColor = () => {
    let color = 'gray';

    switch (status.toLowerCase()) {
      case 'bitti':
        return (color = 'green');

      case 'başladı':
        return (color = 'orange');

      case 'başlamadı':
        return (color = 'red');
    }
  };

  return (
    <span
      style={{ background: getColor() }}
      className={`inline-block rounded-full px-2 py-1 font-semibold text-gray-700 text-xs`}
    >
      {status}
    </span>
  );
};

export default StatusBlock;
