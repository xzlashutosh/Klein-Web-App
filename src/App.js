import React, { useEffect, useState } from 'react';
import './App.css';
import bodyImage from './images/body.jpeg';
import ecgImage from './images/ecg.jpeg';
import pulseImage from './images/pulse.jpeg';
import tempImage from './images/temp.jpeg';
import firebase from './util/firebase.js';
import "firebase/database";

export default function App() {
    const [temp, setTemp] = useState(0);
    const [heart, setHeart] = useState(0);
    const [spo2, setSpo2] = useState(0);

    useEffect(() => {
        const soldierRef = firebase.database().ref("Soldier");
        soldierRef.on('value', (snapshot) => {
            setTemp(snapshot.val().temp);
            setHeart(snapshot.val().hr);
            setSpo2(snapshot.val().spo2);
        })
    });

    return (
        <div className="container">
            <img src={bodyImage} style={{height: "35rem"}} />
            <div className="data">
                <div className="value">
                    <img src={tempImage} style={{height: "5rem", marginRight: "2rem"}} />
                    <h3 style={{border: "1px solid gray", padding: "1rem"}}>Body Temperature - {temp}</h3>
                </div>
                <div className="value">
                    <img src={ecgImage} style={{height: "5rem", marginRight: "2rem"}} />
                    <h3 style={{border: "1px solid gray", padding: "1rem"}}>Heart Rate - {heart}</h3>
                </div>
                <div className="value">
                    <img src={pulseImage} style={{height: "5rem", marginRight: "2rem"}} />
                    <h3 style={{border: "1px solid gray", padding: "1rem"}}>SPO2 - {spo2}</h3>
                </div>
            </div>
        </div>
    )
}
