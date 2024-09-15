export const Loading = () => {
    return (
        <div className={"w-100 d-flex align-items-center justify-content-center"} style={{height:'100vh'}}>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}