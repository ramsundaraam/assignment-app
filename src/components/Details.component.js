import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdChevronLeft } from "react-icons/md";
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';


export default class DetailComponent extends Component {
    
    // state = {
    //     isLoading: true,
    //     display: true,
    //     users: [],
    //     width: 98
    // };

    render() {

        window.scrollTo(0, 0)
        return (
            <div className="carousel-wrapper">
                <div className="home" style={{ display: 'flex', justifyContent: 'left', alignItems: 'left', paddingLeft: '2.1rem', color: 'hsl(265, 74%, 23%)', backgroundColor: 'hsl(247, 69%, 97%)', paddingTop: '0.5rem' }}>
                    <p className="drpsh"><b> <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}> <MdChevronLeft size={60}  /></Link> Details </b> </p>
                </div>
                <div className="bomar1" >
                    <Card className="bgopac" style={{ backgroundColor: 'transparent', border: 'transparent' }}>
                        <Card.Img style={{ borderRadius: '10px', border: '1px solid black', width: 'auto', height: '30rem' }} variant="top" src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Madurai-tank.jpg" />
                        <Card.Body>
                            <Card.Title>Triambakeshwar</Card.Title>
                            <Card.Text>
                                <div style={{ color: 'red' }}>
                                    <IoLocationSharp /> <span className="mahfo"> Maharashtra</span>
                                </div><br />
                                <div>
                                    <p>Tryambakeshwar Shiva Temple (श्री त्र्यंबकेश्वर ज्योतिर्लिंग मंदिर) is an ancient Hindu temple in the town of Trimbak, in the Trimbakeshwar tehsil in the Nashik District of Maharashtra, India, 28 km from the city of Nashik and 40 km from Nashik road. It is dedicated to Hindu god Shiva and is one of the twelve jyotirlingas where the Hindu genealogy registers at Trimbakeshwar, Maharashtra are kept. The origin of the sacred Godavari river is near Trimbak.

Kusavarta kunda (sacred pond) in the temple premises, built by Shrimant Sardar Raosaheb Parnerkar who was the Fadnavis of Indore State, is the source of the Godavari River, the second longest river in peninsular India. A bust of Sardar Fadnavis and his wife can be seen on the edge of the kunda. The current temple was built by Peshwa Balaji Baji Rao after it was destroyed by invaders.<br />The temple is located between three hills namely Brahmagiri, Nilagiri and Kalagiri. The temple has three lingas (an iconic form of Shiv) representing Shiv, Vishnu and Brahma. The temple tank is called Amritavarshini, which measured 28 m (92 ft) by 30 m (98 ft). There are three other bodies of water, namely, Bilvatheertha, Viswananthirtha and Mukundathirtha. There are images of various deities, namely, Gangadevi, Jaleswara, Rameswara, Gautameswara, Kedarnatha, Rama, Krishna, Parasurama and Lakshmi Narayana. The temple has also several monasteries and samadhis of saints.[1]
                                    </p>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

