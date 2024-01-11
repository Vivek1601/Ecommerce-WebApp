import logo from "../img/logo.png";
import Search from "./Search";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import useProductList from "../utils/useProductList";
import { Link } from "react-router-dom";
import cart_img from "../img/shopping_cart_FILL0_wght400_GRAD0_opsz24.png";
import wishlist_img from "../img/favorite_FILL0_wght400_GRAD0_opsz24.png";
import { useSelector } from "react-redux";
import { useState,useEffect } from "react";
import account_img from "../img/person_FILL0_wght400_GRAD0_opsz24.png";

 const Head = () => {

  const checkUserInDatabase = async (email, password) => {
    const res = await fetch("https://ecommerce-website-257fe-default-rtdb.firebaseio.com/userSignupForm.json");
    const data = await res.json();

    // Check if user with given email and password exists in the database
    const foundUser = Object.values(data).find(
      (user) => user.email === email && user.password === password
    );

    return foundUser;
  };

  const [userDetails, setUserDetails] = useState(null);

  const loginUser = async (email, password) => {
    const userInDatabase = await checkUserInDatabase(email, password);

    if (userInDatabase) {
      setIsLoggedIn(true);
      setUserDetails(userInDatabase);
      alert("Login Successful");
      // Handle the login logic (e.g., set user in Redux state)
      // ...
      setIsOpenLogin(false); // Close the login modal
    } else {
      // If user not found, show popup to create a new user
      alert("User not found. Please create a new account.");
      openSignupModal(); // Open the signup modal
    }
  };

  const handleLoginSubmit = async (e) => {

    e.preventDefault();

    // Get email and password from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Call loginUser function
    loginUser(email, password);
  };

    // const [products, actualData, crouselCards, setProducts,isLoaded] = useProductList();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    // const cartItems = useSelector(store => store.cart.items);
    // const wishlistItems = useSelector(store => store.wishlist.items);

    const openSignupModal = () => {
        setIsOpen(true);
        setIsOpenLogin(false); // Close login modal if open
      };
    
      const openLoginModal = () => {
        setIsOpen(false); // Close signup modal if open
        setIsOpenLogin(true);
      };

      const [user,setUser] = useState({
        name: "",
        phone:"",
        email:"",
        password:""
      })

      const [formErrors,setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
      const [isLoggedIn,setIsLoggedIn] =  useState(false);

      let name,value
      const getUserData = (event) => {
        name = event.target.name;
         value = event.target.value;

         setUser({...user,[name]:value});
      }

      const postData = async(e) => {
       e.preventDefault();

       setFormErrors(validate(user));
       setIsSubmit(true);

       const {name, phone, email, password} = user;

       if (Object.keys(formErrors).length === 0 && isSubmit) {
       const res = await fetch("https://ecommerce-website-257fe-default-rtdb.firebaseio.com/userSignupForm.json",
       {
       method: "POST",
       headers: {
        "Content-Type": "application/json"
       },
       body: JSON.stringify({
        name,
        phone,
        email,
        password
       }),
    }
       );
       if(res){
        setUser({
            name:"",
            phone:"",
            email:"",
            password:"",
        })
        alert("Data Stored Successfully")
        // setIsLoggedIn(true);
       }
      }else{
        // alert("Form submission failed due to validation errors");
        <p>{formErrors}</p>
      }
      }

      let validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!values.name){
          errors.name = "Username is required";
        }
        if(!values.phone){
          errors.phone = "Mobile Number is required";
        }else if(!values.phone.match(/^\d{10}$/)){
          errors.phone = "Mobile Number is invalid";
        }
        if(!values.email){
          errors.email = "Email is required";
        }else if(!regex.test(values.email)){
          errors.email = "This is not a valid email format";
        }
        if(!values.password){
          errors.password = "Password is required";
        }
        return errors;
    }
      
    const renderAccountInfo = () => {
      const handleLogout = () => {
        setIsLoggedIn(false);
        setUserDetails(null);
      };
    
      return (
        <div>
          <img
            src={account_img}
            className="w-10 h-25 rounded-md cursor-pointer"
            onClick={isLoggedIn ? handleLogout : openSignupModal}
            alt="Account"
          />
          {isLoggedIn && 
          <div>
            <p className="font-bold  capitalize">{userDetails?.name}</p>
            <button className="font-bold p-1 bg-white rounded-md text-red-500" onClick={handleLogout}>
              Logout
            </button>
            
            </div>
          }
        </div>
      );
    };

  

         return (
        <div className="flex justify-evenly bg-pink-100">
        <div className="p-2">
            <img src={logo} alt="NA" className="w-20 h-30 rounded-md"></img>
        </div>
        <div className="p-5 relative">
  {/* <img src={account_img} className="w-10 h-25 rounded-md cursor-pointer" onClick={openSignupModal} alt="Account" /> */}
  {renderAccountInfo()}
  {isOpen && (
    <div>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-20"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-30">
        <div className="bg-pink-100 p-8 shadow-lg rounded-lg relative">
          {/* Close button */}
          <div className="absolute top-2 right-4 cursor-pointer">
            <span class="material-symbols-outlined" onClick={() => setIsOpen(false)}>
              cancel
            </span>
          </div>

          {/* Form */}
          <form className="space-y-4" method="POST">
            <label className="block">
              Name:
              <input
                type="text"
                placeholder="Name"
                value = {user.name}
                onChange={getUserData}
                name="name"
                className="border p-2 w-full"
                required
              />
              <p>{formErrors.name}</p>
            </label>
            <label className="block">
              Mobile Number:
              <input
                type="tel"
                placeholder="Enter 10 digit mobile number"
                value = {user.phone}
                onChange={getUserData}
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                className="border p-2 w-full"
                required
              />
              <p>{formErrors.phone}</p>
            </label>
            <label className="block">
              Email Id:
              <input
                type="email"
                placeholder="Email"
                value = {user.email}
                onChange={getUserData}
                name="email"
                className="border p-2 w-full"
                required
              />
              <p>{formErrors.email}</p>
            </label>
            <label className="block">
              Password:
              <input
                type="password"
                placeholder="Enter your password"
                value = {user.password}
                onChange={getUserData}
                name="password"
                className="border p-2 w-full"
                required
              />
              <p>{formErrors.password}</p>
            </label>
            <button
              type="submit"
              className="bg-pink-500 text-white px-16 rounded-md "onClick={postData}
            >
              SignUp
            </button>
          </form>
          <div className="flex justify-center">
          <p className="">Already an Account?</p>
          <button className="font-bold text-pink-700"onClick= {openLoginModal}>Login</button>

        </div>
      </div>
    </div>
    </div>
  )}
            {isOpenLogin && (
    <div>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black opacity-50 z-20"></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-30">
        <div className="bg-pink-100 p-8 shadow-lg rounded-lg relative">
          {/* Close button */}
          <div className="absolute top-2 right-4 cursor-pointer">
            <span class="material-symbols-outlined" onClick={() => setIsOpenLogin(false)}>
              cancel
            </span>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            <label className="block">
              Email Id:
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="border p-2 w-full"
                required
              />
            </label>
            <label className="block">
              Password:
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                className="border p-2 w-full"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-pink-500 text-white px-16 rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )}
          
</div>
        <Link to="/wishlist">
        <div className="flex p-4">
<img className="h-10 w-8" src={wishlist_img}></img>
{/* <p className="font-bold">{wishlistItems.length}</p> */}
        </div>
        </Link>
        <Link to="/cart">
        <div className="flex p-4">
        {/* <span class="material-symbols-outlined">
shopping_cart
</span> */}
<img className="h-10 w-8" src={cart_img}></img>
 {/* <p className="font-bold">{cartItems.length}</p> */}
        </div>
        </Link>

        </div>

    )
  
}


export default Head;