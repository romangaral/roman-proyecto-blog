import React, { Fragment } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import "../styles/logout.css"

function Logout({credentials}) {

    const onSubmit = {}
    
    if(credentials.isLogged){

        return (
            <Fragment>
                <div className="logout container-fluid">
                    <div className="logout row">
                        <div className="logout col-md-12">
                            <h1 className="titleLogout">Cerrar Sesión:</h1>
                            <Form className="logoutForm" onSubmit={onSubmit} >
                                <Button type="submit" variant="outline-danger">LOGOUT</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        );

    }else{
        return <Redirect to="/"/>
    }
        
  
};

export default Logout;