import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Modal from './modal'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iptString: '',
            optString: '',
            skips: 0,
            fCase: true
        }

    }

    handleTextAreaChange = (event) => {
        this.setState({iptString: event.target.value});
    }

    handleSkipsChange = (event) => {
        this.setState({skips: event.target.value});
    }

    handleRadioChange = (event) => {
        this.setState({skips: event.target.value});
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();

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

        console.log(!this.state.fCase)
    }



    render() {
        return (
            <React.Fragment>

            <Modal textContent={this.state.optString}/>

            <form class='form d-flex flex-column justify-content-center' onSubmit={this.handleSubmit}>
            
            <label for="text" class='title d-flex justify-content-center'>Cole o texto aqui!</label>
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
                            <input class="skips form-control" id='skips' type="text" placeholder=""/>
                        </div>
                    </div>

                    
                    <div class='row'>
                        <div class='col col d-flex justify-content-end'>
                            <label for='upperLower'>Início:</label>
                        </div>

                        <div class='col' onChange={this.handleRadioChange}>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="fCase" id="true" value="true"></input>
                                <label class="form-check-label" for="true"> M </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="fCase" id="false" value="false"></input>
                                <label class="form-check-label" for="false"> m </label>
                            </div>
                        </div>
                        
                    </div>

                </div>
                
                <div class='submitDiv col-md'> 
                    <button type="submit" class="button btn-primary"  data-bs-toggle="modal" data-bs-target="#staticBackdrop">GERAR</button>
                </div>

            </div>
            </form>
            </React.Fragment>
        )
  }
}

export default Form;