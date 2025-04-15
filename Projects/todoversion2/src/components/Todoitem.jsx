function Todoitem({ti,td}) {
    
    return <div className="container">

        <div className="row kg-row">
            <div className="col-6">
               {ti}
            </div>
            <div className="col-4">
               {td}
            </div>
            <div className="col-2"><button type="button" class="btn btn-danger kg-button">Delete</button></div>
        </div>
    </div>
}
export default Todoitem;