import classes from "./User.module.css";
import { Component } from "react";

/* Class-based Component */
class User extends Component {
    componentWillUnmount() {
        console.log("Component will Unmount");
    }
    
    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
}

/* Functional Component */
// const User = (props) => {
//     return <li className={classes.user}>{props.name}</li>;
// };

export default User;
