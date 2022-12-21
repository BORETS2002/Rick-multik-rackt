import ReactPaginate from "react-paginate";

export function PAginsyion({ pags, setactivPage, activPage }) {
  return (
    <>
      <ReactPaginate
        className='pagination justify-content-center pb-5 text-white gap-2'
        forcePage={activPage === 1 ? 0 : activPage - 1}
        previousLinkClassName='btn btn-info text-white'
        nextLinkClassName='btn btn-info text-white'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        pageCount={pags}
        previousLabel='Prev'
        nextLabel='next'
        activeClassName='active'
        onPageChange={(data) => {
          setactivPage(data.selected + 1);
        }}
      />
    </>
  );
}
