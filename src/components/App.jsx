import React from 'react';
import { useState, useEffect } from 'react';
import DogDisplay from './DogDisplay';
import FetchButton from './FetchButton';
function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function fetchDogImage() {
        setLoading(true);
        setError(null);
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }
    

    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
        <div>
            <DogDisplay data={data} loading={loading} error={error} />
            <FetchButton fetchDogImage={fetchDogImage} />
        </div>
    );
}

export default App;

