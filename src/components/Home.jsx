import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import portada from '../image/portada.jpg'
import { Image } from "react-bootstrap";
import Cards from './Cards';
import '../styles/home.css'
import Footer from './Footer';

function Home() {
    return (
        <>
            <Image className="img" src={portada} />
            <Cards/>
            <Footer/>
        </>
    )
}

export default Home
