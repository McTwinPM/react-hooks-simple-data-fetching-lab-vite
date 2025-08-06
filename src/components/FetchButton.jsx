const FetchButton = ({ fetchDogImage }) => {
    return (
        <button onClick={fetchDogImage}>Fetch New Dog Image</button>
    );
}

export default FetchButton;