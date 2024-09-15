export const Pagination = ({totalPage, api, nowPage}) => {
    const paginate = []
    for (let i = 1; i <= totalPage; i++) {
        paginate.push(i)
    }
    return (
        <div className={"w-100 d-flex align-items-center justify-content-end"}>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className={`page-item ${nowPage == 0 ? "disabled" : ""}`}>
                        <a className="page-link" href={`${api}/${nowPage - 1}`}>Previous</a>
                    </li>
                    {paginate.map(item => (
                        <li className={`page-item ${nowPage == (item - 1) ? "active" : ""}`}>
                            <a className="page-link" href={api + "/" + (item - 1)}>{item}</a>
                        </li>
                    ))}
                    <li className={`page-item ${nowPage == (totalPage - 1) ? "disabled" : ""}`}>
                        <a className="page-link" href={`${api}/${nowPage + 1}`}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}