function Addtodo() {
   return <div className="container text-center">

        <div className="row kg-row">
            <div class="col-6">
                <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div className="col-3">
                <input type="date" />
            </div>
            <div className="col-3"><button type="button" className="btn btn-success kg-button">Success</button></div>
        </div>

    </div>;

}
export  default Addtodo;