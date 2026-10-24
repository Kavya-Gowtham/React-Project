import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About Us</h1>
            <h2>This is Online Food Delivery App</h2>
            <User name={"Kavya (function)"}/>
            <UserClass name={"Kavya (class)"}/>
            <UserClass name={"Kavya (class2)"}/>

        </div>
    )
}

export default About;

/*
parent constructor
parent render
1st child constructor
1st child render
2nd child constructor
2nd child render
component is loadedi.e., dom is updated and component is loaded
didmount is basically used to perform dom manipulations like making api calls, getting data etc.,
1st chid componentdidmount
2nd child componentdidmount
parent componentdidmount

*/