import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Modal from './modal'

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputTxt: '',
        }

    }


    handleChange = (event) =>{
        this.setState({inputTxt: event.target.value});
    }
    
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({inputTxt: this.state.inputTxt});        
    }
    

    render() {
        return (
            <React.Fragment>

            <Modal textContent={this.state.inputTxt}/>
            
            <form class='form d-flex flex-column justify-content-center' onSubmit={this.handleSubmit}>
            
            <label for="text" class='title d-flex justify-content-center'>Cole o texto aqui!</label>
            <div class='textAreaRow row'>
                <textarea class="textarea form-control" id="text" rows="3" name={this.state.inputTxt} onChange={this.handleChange}/>
            </div>

            
            <div class='row'>
                <div class='col-md a'>
                    <div class='row'>
                        <div class='col d-flex justify-content-end'> 
                            <label>Intervalo:</label>
                        </div>
                        <div class='col'>
                            <input class="skips form-control" id='skips' type="text" placeholder="" value='1'/>
                        </div>
                    </div>

                    
                    <div class='row'>
                        <div class='col col d-flex justify-content-end'>
                            <label for='upperLower'>Início:</label>
                        </div>

                        <div class='col'>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="upperOrLower" id="upper" value="upper"checked></input>
                                <label class="form-check-label" for="upper"> M </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="upperOrLower" id="lower" value="lower" checked></input>
                                <label class="form-check-label" for="lower"> m </label>
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