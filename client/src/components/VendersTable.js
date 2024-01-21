
import Pagination from './Pagination';

const VendersTable = ({ venders }) => {
  return (
    <Pagination data={venders} itemsPerPage={10}/>
  );
};

export default VendersTable;
