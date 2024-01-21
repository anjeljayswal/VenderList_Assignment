import PaginationCard from './PaginationCard';

const VendersCard = ({ venders }) => {
  return (
    <>
    <PaginationCard data={venders} itemsPerPage={8}/>    
    </>
    
  );
};

export default VendersCard;
