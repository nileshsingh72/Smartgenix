import './pagination.css'
import {Box} from '@chakra-ui/react'
import ReactPaginate from "react-paginate";
function Pagination({totalPage,pageChange,page}){
    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        pageChange(currentPage)
    }
 return  <Box mb='80px'>
        <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        forcePage={page-1}
        breakLabel={"..."}
        pageCount={totalPage}
        marginPagesDisplayed={2}
        pageRangeDisplayed={0}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
</Box>
}

export default Pagination;