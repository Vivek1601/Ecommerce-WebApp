import upiLogo from "../img/UPI-Logo.png";
import masterCardLogo from "../img/787_mastercard.jpg";
import visaLogo from "../img/visa-logo-800x450.jpg";
import hdfcLogo from "../img/hdfc-logo-hdfc-icon-free-free-vector.jpg";
import iciciLogo from "../img/ICICI-Logo-iyd.jpg";

const Footer = () => {
    return ( 
        // relative bottom-0 left-0 w-full
        <div className="p-4 bg-pink-100">
    
            <div className="flex">
            <p className="pb-2 text-2xl">Contact Us :-</p>
            <p className="pt-2 pl-2 font-bold">8860979021</p>
            </div>
            <div>
            <p className="pb-2 text-2xl">Payment Options available :-</p>
            <div className="pb-2 flex justify-evenly h-20 w-100">
            <img src={upiLogo}></img>
            <img src={masterCardLogo}></img>
            <img src={visaLogo}></img>
            <img src={hdfcLogo}></img>
            <img src={iciciLogo}></img>
            </div>
            </div>
          
         </div>
    )
}
export default Footer;