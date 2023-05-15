/// Register any kind of Services in here

// You can also make that functions Staterty here you are already appplying but i ma using types stratergy here

// in functions stration i have to import extra function in my file while in type stratergy i just have to pass type and payload in object÷÷÷

// Use FUnctions Cases like in scenerios like If you have  an API call and you want to update the data in redux as soon as you get
//  1)  Make a function for the api call anywhere like in services Folder Or API folder

// 2) Then export that function  from this file in here like

// example:: export {loadUser,loadUserWallet,register,} from "../../Services/authServices";

// 4) Then if you are Submitting a FOrm Like in some Other file

// Not Directly import that function from services folder to that file
// import that from actions.js to that file like

// import {loadUser} from actions.js

// now time to dispactch

// dispatch(loaduser(*userdata*))
