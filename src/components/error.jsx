import React from 'react';
import ReactDOM, { render } from 'react-dom';


class Error extends React.Component {    

    render() {
        return (
            <div class="alert alert-danger alert-dismissible" role="alert" id='myError' hidden={this.props.hideThis}>
            Errrrr,<strong> algo deu errado</strong>, melhor você preencher esse formulário direito!
            <button type="button" class="btn-close" aria-label="Close" onClick={this.props.onClick}></button>
            </div>
        )
    }
}

export default Error;