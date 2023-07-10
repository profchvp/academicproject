import Busca from "../../components/busca/busca.js";
import Menu from '../../components/menu/menu'

function Home(){
    return(
        <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
                <Menu page="dashboard" />
            </div>
            <div className="col py-3 me-3">
                
                
                <div className="row">
                    
                    <h1>Home</h1>
                    
                </div>
            </div>
        </div>
    </div>)
}
export default Home;