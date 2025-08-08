import './Mainpagestyle.css';


function Mainpage() {
    return (
        <div className="Homepage">
            <div className="IMGcontainer">
            <button className="Mainpage-button">
                <h2 className="Buy-button-text">Buy Now</h2>
                {/* <a href="/upload" className="Mainpage-link">Upload</a> */}
            </button>
            </div>
            <div className="Carousel-button">
                <button className="Carousel-buttons"></button>
                <button className="Carousel-buttons"></button>
                <button className="Carousel-buttons"></button>
                <button className="Carousel-buttons"></button>
            </div>
        </div>
    );
}

export default Mainpage;