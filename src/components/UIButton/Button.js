// import styled from "styled-components";

// // menggunakan paket styled components untuk membuat desain dengan cara yang lebih mudah (apapun yang disampaikan diantara backticks akan langsung mempengaruhi method di depannya, kemudian methodnya akan mengembalikan komponen elemen HTML baru)
// // Pada akhirnya paket ini akan melihat style yang disiapkan dan kemudian membungkus style itu menjadi nama kelas yang  unik. Jadi memungkinkan dapat menggunakan style yang sama dengan nama kelas yang berbeda antar komponen lain
// const Button = styled.button`
//     width: 100%;
//     font: inherit;
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     color: white;
//     background: #8b005d;
//     box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//     cursor: pointer;

//     @media (min-width: 768px) {
//         width: auto;
//     }

//     &:focus {
//         outline: none;
//     }

//     &:hover,
//     &:active {
//         background: #ac0e77;
//         border-color: #ac0e77;
//         box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//     }
// `;

// USE CSS MODULES (cara implementasi terbaik untuk mengatur style pada komponent react, karena dengan ini kita memiliki file yang mengatur style pada komponent dan memiliki skope di komponen tempat kita menggunakannya)
import styles from "./Button.module.css";

function Button(props) {
    return (
        <button
            type={props.type}
            className={styles.button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

export default Button;
