import React from 'react';
import {Navbar,NavbarBrand,Jumbotron, Nav,} from 'reactstrap';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import '../App.css';


function Header(){

    return(
      <>
            <Navbar dark color="primary" expand="md">
              <div className="container">
                  <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/sezzle.jpg" height="100" width="100" alt="Restuarant confusion"/>
                  </NavbarBrand>
              </div>
          </Navbar>
          <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1 className="App-header">Calculator App</h1>
                        </div>
                    </div>
                </div>
            </Jumbotron>
      </>
     );

  }


export default Header;
