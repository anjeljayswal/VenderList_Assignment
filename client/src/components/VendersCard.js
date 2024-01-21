
import VenderSingleCard from './VenderSingleCard';

const VendersCard = ({ venders }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {venders.map((item) => (
        <VenderSingleCard key={item._id} book={item} />

      ))}
    </div>
  );
};

export default VendersCard;
