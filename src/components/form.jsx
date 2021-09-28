import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Modal from './modal';
import Error from './error';

class Form extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            iptString: '',
            optString: '',
            skips: '1',
            fCase: '',
        }

    }

    showError = () => {
        let errorDiv = document.getElementById('errorDiv');
        ReactDOM.render(<Error/>, errorDiv);
    }

    copyToClipboard = () => {
        var copyText = this.state.optString;
        navigator.clipboard.writeText(copyText);
    }

    componentDidMount(){
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
    
    handleSubmit = (e) =>{
        e.preventDefault();

        if (2>1){
            this.showError();
        }
        else {

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
    }






    render() {
        return (
        <React.Fragment>

            <Modal textContent={this.state.optString} onCopyToClipboard={this.copyToClipboard}/>

            <form class='form d-flex flex-column justify-content-center' onSubmit={this.handleSubmit}>
            
            <label for="text" class='title d-flex justify-content-center'>Ironizador de Texto</label>
            <div class='textAreaRow row'>
                <textarea class="textarea form-control" id="text" rows="3" name={this.state.iptString} onChange={this.handleTextAreaChange}/>
            </div>

            
            <div class='row'>
                <div class='col-md a'>
                    <div class='row'>
                        <div class='col d-flex justify-content-end'> 
                            <label>Intervalo:</label>
                        </div>
                        <div class='col' onChange={this.handleSkipsChange}>
                            <input class="skips form-control" id='skips' value={this.state.skips} type="number" maxlength="2"/>
                        </div>
                    </div>

                    
                    <div class='row'>
                        <div class='col col d-flex justify-content-end'>
                            <label for='upperLower'>Início:</label>
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
                
                <div class='submitDiv col-md'> 
                    <button type="submit" class="button btn-primary" id='submitButton' data-bs-toggle="modal" data-bs-target="#staticBackdrop">GERAR</button>
                </div>

                <div id='errorDiv'></div>
                
            </div>
            </form>
        </React.Fragment>
        )
   }
}

export default Form;