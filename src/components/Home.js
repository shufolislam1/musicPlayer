import React, { useEffect, useState } from 'react';
import SingelHome from './SingelHome'

const Home = () => {
    const [music, setMusic] = useState([])
    useEffect(() => {
        fetch("music.json")
            .then(res => res.json())
            .then(data => setMusic(data))
    }, [])
    return (
        <div>
            {
                music?.map(Home => <SingelHome Home={Home}></SingelHome>
                )
            }
        </div>
    );
};

export default Home;