type PaginationProps = {
    productsPerPage: number;
    totalProducts: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
    productsPerPage,
    totalProducts,
    currentPage,
    paginate,
}) => {
    const pageNumbers: number[] = [];
    const totalPages: number = Math.ceil(totalProducts / productsPerPage);

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (e: React.MouseEvent, number: number) => {
        e.preventDefault();
        paginate(number);
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentPage > 1) paginate(currentPage - 1);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.preventDefault();
        if (currentPage < totalPages) paginate(currentPage + 1);
    };

    // if (totalPages <= 1) return null;

    return (
        <nav className="pagination">
            <ul className="pagination">
                {/* prev button */}
                <li
                    className={`page-item ${
                        currentPage === 1 ? 'disabled' : ''
                    }`}
                >
                    <a
                        href="!#"
                        className="page-link"
                        onClick={(e) => handlePrev(e)}
                    >
                        Prev
                    </a>
                </li>
                {/* pagination numbers */}
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${
                            currentPage === number ? 'active' : ''
                        }`}
                    >
                        <a
                            href="!#"
                            className="page-link"
                            onClick={(e) => handleClick(e, number)}
                        >
                            {number}
                        </a>
                    </li>
                ))}
                {/* prev button */}
                <li
                    className={`page-item ${
                        currentPage === totalPages ? 'disabled' : ''
                    }`}
                >
                    <a
                        href="!#"
                        className="page-link"
                        onClick={(e) => handleNext(e)}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
