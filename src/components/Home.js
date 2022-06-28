import React, { useEffect, useState } from 'react';

const Home = () => {
    const [music, setMusic] = useState({})
    useEffect(() => {
        fetch("music.json")
            .then(res => res.json())
            .then(data => setMusic(data))
    }, [])
    return (
        <div>
            <h2>{music.length}</h2>
        </div>
    );
};

export default Home;