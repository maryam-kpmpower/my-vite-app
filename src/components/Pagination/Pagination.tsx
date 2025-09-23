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

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handleClick = (e: React.MouseEvent, number: number) => {
        e.preventDefault();
        paginate(number);
    };

    return (
        <nav className="pagination">
            <ul className="pagination">
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={`page-item ${
                            currentPage === number ? 'active' : ''
                        }`}
                    >
                        <a
                            onClick={(e) => handleClick(e, number)}
                            href="!#"
                            className="page-link"
                        >
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
