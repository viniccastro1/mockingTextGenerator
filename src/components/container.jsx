import React from 'react';
import ReactDOM, { render } from 'react-dom';
import Header from './header';
import Form from './form';
import Footer from './footer';

class Container extends React.Component {
  render() {
    return (
        <React.Fragment>
            <div class='myContainer container-fluid d-flex flex-column' >
                <div class='row' >
                    <div class='col p-0 '><Header/></div>
                </div>

                <div class='contentRow row d-flex p-3'>
                    <div class='col d-flex justify-content-center'><Form/></div>
                </div>

                <div class='row'>
                    {/*<div class='col p-0'><Footer/></div>*/}
                </div>
            </div>
        </React.Fragment>
        
    )
  }
}

export default Container;