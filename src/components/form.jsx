import React from 'react';
import ReactDOM, { render } from 'react-dom';

class Form extends React.Component {



    render() {
        return (
                <form class='form d-flex flex-column justify-content-center'>
                    <div class='row'>
                        <div class="form-group">
                            <label for="text" class='title d-flex justify-content-center'>Cole o texto aqui!</label>
                            <textarea class="textarea form-control" id="text" rows="3"></textarea>
                            
                        </div>
                    </div>
                    
                    <div class='row'>
                        <div class='col-sm a'>
                            <div class='row'>
                                <div class='col d-flex justify-content-end'> 
                                    <label>Intervalo:</label>
                                </div>
                                <div class='col'>
                                    <input class="skips form-control" id='skips' type="text" placeholder=""/>
                                </div>
                            </div>
                            <div class='row'>
                                <div class='col col d-flex justify-content-end'>
                                    <label for='upperLower'>Início:</label>
                                </div>

                                <div class='col'>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="upperlower" id="radio1" value="M" checked/>
                                        <label class="form-check-label" for="M"> M </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="upperlower" id="m" value="option2"/>
                                        <label class="form-check-label" for="m"> m </label>
                                    </div>
                                </div>
                                
                            </div>

                        </div>

                        <div class='col-sm d-inline-flex justify-content-end'> 
                            <button type="submit" class="button btn">GERAR</button>
                        </div>

                    </div>
                </form>
        )
  }
}

export default Form;