import React, { useEffect, useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import MyModal from './modal';
import Error from './error';
import NewModal from './newmodal'


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,

            iptString: '',
            optString: '',
            skips: 1,
            fCase: '',
        }
    }

    componentDidMount= () => {
        //Radio starts checked
        let fCaseCheck = document.getElementsByName('fCase');
        fCaseCheck[0].checked = true;
    }

    handleTextAreaChange = (event) => {
        this.setState({iptString: event.target.value});
    }

    handleSkipsChange = (event) => {
        this.setState({skips: event.target.value});
    }

    handleRadioChange = (event) => {
        if (event.target.value === 'true') this.setState({fCase: true});
        else if (event.target.value === 'false') this.setState({fCase: false});
    }


    showError = () => {
        ReactDOM.render(<Error/>, document.getElementById('errorDiv'));
    }

    copyToClipboard = () => {
        var copyText = this.state.optString;
        navigator.clipboard.writeText(copyText);
        this.handleCloseModal();
    }

    //Modal funcs
    handleCloseModal = () => this.setState({showModal: false});
    handleShowModal = () => this.setState({showModal: true});
    
    handleSubmit = (e) =>{
        e.preventDefault();

        //Modal validation
        const cond1 = this.state.iptString === '';
        const cond2 = this.state.skips === '';

        if (cond1 || cond2){
            this.showError();
        }

        //Opens Modal
        else this.handleShowModal();


        //Modal content 
        let skips = this.state.skips;
        let fCase = this.state.fCase;

        let iptString = this.state.iptString;
        let optString = '';

        function upperOrLower(char, timesLooped){
            if (timesLooped % skips === 0) fCase = !fCase;

            if (fCase === true) return char.toUpperCase();
            if (fCase === false) return char.toLowerCase();
        }

        for (let i=0; i < iptString.length; i++){
            optString += upperOrLower(iptString[i], i);
        }

        this.setState({optString: optString})    
        
    }

    render() {
        return (
        <React.Fragment>

            <NewModal show={this.state.showModal}
            onShowModal={this.handleSubmit}
            onCloseModal={this.handleCloseModal}
            textContent={this.state.optString}
            onCopyToClipboard={this.copyToClipboard}/>

            <form class='form d-flex flex-column justify-content-center' onSubmit={this.handleSubmit}>
            
            <div class='title d-flex justify-content-center'>Ironizador de Texto</div>
            <div class='textAreaRow row'>
                <textarea class="textarea form-control" id="text" rows="3" name={this.state.iptString} onChange={this.handleTextAreaChange}/>
            </div>

            
            <div class='row'>
                <div class='col-md'>

                    <div class='row'>
                        <div class='col'> 
                            <label>Intervalo</label>
                        </div>
                        <div class='col' onChange={this.handleSkipsChange}>
                            <input class="skips form-control" id='skips' value={this.state.skips} type="number" maxlength="2"/>
                        </div>
                        </div>

                        <div class='row'>
                        <div class='col'>
                            <label for='upperLower'>Início</label>
                        </div>

                        <div class='col' onChange={this.handleRadioChange}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="fCase" id="trueRad" value="false"></input>
                                <label class="form-check-label" for="trueRad"> M </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="fCase" id="falseRad" value="true"></input>
                                <label class="form-check-label" for="falseRad"> m </label>
                            </div>
                        </div>  
                    </div>
                        
                </div>
                <div class='col-md'></div>
                <div class='submitDiv col-md'> 
                    <button type="submit" class="button btn-primary" id='formInput' onClick={this.handleSubmit}>GERAR</button>
                </div>

                <div id='errorDiv'></div>
                
            </div>
            </form>
        </React.Fragment>
        )
   }
}

export default Form;