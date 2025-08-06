const DogDisplay = ({ data, loading, error }) => {
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <img src={data.message} alt="A random dog" />}
        </div>
    );
}

export default DogDisplay;