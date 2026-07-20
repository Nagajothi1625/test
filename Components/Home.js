
import { Link } from "react-router-dom";
import "../App.css";
import Carousel from "./cauroselItems/Carousel";

const Home= () =>
    {
    return(
        <>
        <header> 
                 
                {/* <div><Link to="/carousel"  ></Link>Home</div> */}
                <Carousel/>
           
        </header>
        </>

    );

};
export default Home;