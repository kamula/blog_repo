import React from 'react';

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example py-2">
            <ul className="flex items-center space-x-1">
                <li>
                    <a onClick={() => paginate(pageNumbers[0] > 1 ? pageNumbers[0] - 1 : 1)} href="#" className="px-3 py-2 border border-black text-black hover:bg-gray-100 dark:text-black">
                        <span className="sr-only">Previous</span>
                        &laquo;
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <a onClick={() => paginate(number)} href="#" className="px-3 py-2 border border-black text-black dark:text-black">
                            {number}
                        </a>
                    </li>
                ))}
                <li>
                    <a onClick={() => paginate(pageNumbers[pageNumbers.length - 1] < totalPosts ? pageNumbers[pageNumbers.length - 1] + 1 : totalPosts)} href="#" className="px-3 py-2 border border-black text-black dark:text-black ">
                        <span className="sr-only">Next</span>
                        &raquo;
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
