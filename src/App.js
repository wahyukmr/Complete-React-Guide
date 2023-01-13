import React, { useState } from "react";

import FormInput from "./components/UserInputs/FormInput";
import UserList from "./components/UserLists/UserList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const onSaveUserDataHandler = (dataUser) => {
        setUsersList((prevUserList) => {
            return [...prevUserList, dataUser];
        });
    };
    return (
        <div>
            <FormInput onSaveUserData={onSaveUserDataHandler} />
            <UserList users={usersList} />
        </div>
    );
}

export default App;
