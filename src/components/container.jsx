import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './header';
import Form from './form';
import Footer from './footer';

class Container extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div class='myContainer container-fluid' >

                <div class='row' >
                    <div class='col p-0 '><Header/></div>
                </div>

                <div class='contentRow row'>
                    <div class='formCol col d-flex justify-content-center align-items-center'>
                        <Form/>
                    </div>
                </div>

                <div class='row'>
                    <div class='col p-0'> <Footer/> </div>
                </div>
            </div>
        </React.Fragment>
        
    )
  }
}

export default Container;