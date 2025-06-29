import './Topstyle.css';


function Top() {
    return (
        <div className= "topbar">
            <h1>TeraByte</h1>
            <nav className= "terabytebar">
                <ul className= "terabytebarlist">
                    <li className= "terabyteitems">Deals</li>
                    <li className= "terabyteitems">Computers</li>
                    <li className= "terabyteitems">Gaming</li>
                    <li className= "terabyteitems">

                         
        <div className="search">
            <label>search the site</label>
            <input type="search" name="site search" />
        </div>
        <button>search</button>

                    </li>
                    <li className= "terabyteitems">Accessories</li>
                    <li className= "terabyteitems">Contact</li>
                    <li className= "terabyteitems">About us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Top;