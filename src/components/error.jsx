import React from 'react';
import ReactDOM, { render } from 'react-dom';


class Error extends React.Component {    

    render() {
        return (
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            Errrrr,<strong> algo deu errado</strong>, melhor você preencher esse formulário direito!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    }
}

export default Error;