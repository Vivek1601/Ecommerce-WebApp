import upiLogo from "../img/UPI-Logo.png";
import masterCardLogo from "../img/787_mastercard.jpg";
import visaLogo from "../img/visa-logo-800x450.jpg";
import hdfcLogo from "../img/hdfc-logo-hdfc-icon-free-free-vector.jpg";
import iciciLogo from "../img/ICICI-Logo-iyd.jpg";

const Footer = () => {
    return ( 

        <div className="p-4 bg-pink-100">
    
            <div className="flex">
            <p className="pb-2 text-2xl">Contact Us :-</p>
            <p className="pt-2 pl-2 font-bold">8860979021</p>
            </div>
            <div>
            <p className="pb-2 text-2xl">Payment Options available :-</p>
            <div className="pb-2 flex justify-evenly h-20 w-100">
            <img src={upiLogo} alt="payment_methods"></img>
            <img src={masterCardLogo} alt = "payment_methods"></img>
            <img src={visaLogo} alt = "payment_methods"></img>
            <img src={hdfcLogo} alt = "payment_methods"></img>
            <img src={iciciLogo} alt = "payment_methods"></img>
            </div>
            </div>
          
         </div>
    )
}
export default Footer;