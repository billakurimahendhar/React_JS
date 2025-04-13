function Addtodo() {
   return <div class="container text-center">

        <div class="row kg-row">
            <div class="col-6">
                <input type="text" placeholder="Enter Todo Here" />
            </div>
            <div class="col-3">
                <input type="date" />
            </div>
            <div class="col-3"><button type="button" class="btn btn-success kg-button">Success</button></div>
        </div>

    </div>;

}
export  default Addtodo;