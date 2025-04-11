function Todoitem1() {
    let tn='buymilk';
    let td='10/2/2025';
    return <div class="container text-center">

        <div class="row">
            <div class="col-6">
               {tn}
            </div>
            <div class="col-4">
               {td}
            </div>
            <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
    </div>
}
export default Todoitem1;