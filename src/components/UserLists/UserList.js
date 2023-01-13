import styles from "./UserList.module.css";
import Card from "../UI/Card";

function UserList(props) {
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.userName} ({user.userAge} Years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default UserList;
