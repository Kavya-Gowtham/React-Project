import React from "react";

class UserClass extends React.Component {
    //first constructor is called or rendered and then render() is called. and then componentDidMout() is called
    constructor(props){
        //super(props) is used inside the constructor to call the constructor of the parent class (React.Component). This initializes the this keyword and binds the component's props directly to the instance, ensuring that this.props works reliably.
        super(props)

        // creating a state
        this.state={
            count : 0,
            count2 : 0,
        }
        // console.log("props");
    }


    
    render(){
        const {name} = this.props;
        const {count,count2} = this.state;
        return(
            <div className="user-card">
                <h1>Count:{count} & Count2:{count2}</h1>
                <button onClick={()=>{
                    //Never update state variables directly as functional. update using object
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+1
                    })
                }}>
                   Count Increase 
                </button>
                <h2>Name:{name}</h2>
                <h3>Location:</h3>
                <h4>Contact:</h4>
            </div>
        );
}
}
export default UserClass;