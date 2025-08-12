import DropDown from "react-dropdown"


const options = [
  'one', 'two', 'three'
];
const defaultOption = options[0];


export default DropDown












































// import { useState } from "react";

 
 
//  function DropDown() { 
//                    const [USD,setUSD]=useState("");
//                    const [language,setLanguage]=useState("");
//                    const [setting,setSetting]=useState("");

//                    const handleUSDChange = (event) => {
//                     USD(event.target.value);
//                    };
                   
//                    const handleLanguageChange = (event) => {
//                     setLanguage(event.target.value);
//                    };

//                    const handleSettingChange = (event) => {
//                     setSetting(event.target.value);
//                    };


//                    return (
//                     <>
                      

//                     <select value={language}  onChange={handleLanguageChange}>
//                         <option value="english">English</option>
//                         <option value="spanish">Spanish</option>
//                         <option value="russian">Russian</option>
//                         <option value="portuguese">Portuguese</option>
//                     </select>

                    
//                     <select value={USD}  onChange={handleUSDChange}>
//                         <option value="usd">USD</option>
//                         <option value="eur">EUR</option>
//                         <option value="chf">CHF</option>
//                         <option value="gbp">GBP</option>
//                         <option value="kwd">KWD</option>
//                     </select>


//                     <select value={language}  onChange={handleSettingChange}>
//                         <option value="setting">Setting</option>
//                         <option value="myprofile">My Profile</option>
//                         <option value="wishlist">Wishlist</option>
//                         <option value="cart">Cart</option>
//                         <option value="logout">Logout</option>
//                     </select>

//                     {USD && <p> you selected:{USD}</p>}
//                     {language && <p> you selected:{language}</p>}
//                     {setting && <p> you selected:{setting}</p>}
                
//                     </>

//                     );

                    
//                 }                  
//                    export default DropDown;

