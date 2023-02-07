// import { useEffect, useState } from "react";
import { Component } from "react";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

import classes from "./UserFinder.module.css";
import Users from "./Users";

class UserFinder extends Component {
    /* Menggunakan useContext pada class-based component (hanya dapat menghubungkan satu useState), jadi jika memiliki lebih dari satu useContext yang harus dihubungkan dalam satu komponen yang sama maka cara ini kurang cocok */
    static contextType = UsersContext;

    constructor(props) {
        super(props);
        this.state = {
            filteredUsers: [],
            searchTerm: "",
        };
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }

    // Contoh penggunaan componentDidMount (mengirim HTTP Request)
    componentDidMount() {
        this.setState({ filteredUsers: this.context.users });
    }

    // Contoh penggunaan componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) {
            this.setState({
                filteredUsers: this.context.users.filter((user) =>
                    user.name.includes(this.state.searchTerm)
                ),
            });
        }
    }

    searchChangeHandler(event) {
        this.setState({
            searchTerm: event.target.value,
        });
    }

    render() {
        return (
            <>
                <div className={classes.finder}>
                    <input type="search" onChange={this.searchChangeHandler} />
                </div>
                {/* Kita bisa menggunakan error boundaries lebih satu, tepatnya pada komponen apapun yang mungkin menimbulkan error yang ingin ditangani */}
                <ErrorBoundary>
                    <Users users={this.state.filteredUsers} />
                </ErrorBoundary>
            </>
        );
    }
}

// const UserFinder = () => {
//     const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//     const [searchTerm, setSearchTerm] = useState("");

//     useEffect(() => {
//         setFilteredUsers(
//             DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//         );
//     }, [searchTerm]);

//     const searchChangeHandler = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <>
//             <div className={classes.finder}>
//                 <input type="search" onChange={searchChangeHandler} />
//             </div>
//             <Users users={filteredUsers} />
//         </>
//     );
// };

export default UserFinder;
