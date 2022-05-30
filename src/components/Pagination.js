import React from 'react';

function Pagination({ postsPerPage, totalPosts, paginate }) {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <div className="footerPage">
      <div className="paginationDiv">
        <nav className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="/!#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Pagination;
