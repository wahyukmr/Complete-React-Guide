import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
        }
    }
    // Jika menambahkan method ini ke class-based component, maka komponen itu akan menjadi error boundary. Method ini akan ditrigger setiap kali salah satu komponen anak throw error atau menghasilkan kesalahan
    // Dengan meneruskan error parameter pada method ini kita bisa melihat error untuk mencari tahu apa yang salah dan mungkin menjalankan logika berbeda berdasarkan kesalahan yang berbeda, meskipun kita juga bisa mempertimbangkan untuk membuat error boundary yang berbeda untuk error yang berbeda 
    componentDidCatch(error) {
        console.log(Error);
        this.setState({ hasError: true })
    }
    
    render() {
        if (this.state.hasError) {
            return <p>Something went wrong</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;