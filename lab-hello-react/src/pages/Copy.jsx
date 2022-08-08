import Iconscard from "../compenents/Iconscard"
import logo1 from '../images/ironhack-logo-xs.png'
import logo2 from '../images/menu-top-xs.png'
function copy(){

    return(
        
 
     <div>
       <div className="App-header">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <h1>Say hello to ReactJS </h1>
            <p>You will learn how to use the most popular frontend
            library, and become a super Ninja developer.</p>

            <button> Awesome!</button>

           
        </div>
        <hr />
        <div className="Iconscard">
             <Iconscard/>
        </div>
     </div>
    )

}

export default copy