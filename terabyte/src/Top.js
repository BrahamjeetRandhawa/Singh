import './Topstyle.css';
import React, { useState, useEffect } from 'react';


function Top() {
        const [scrollPercent, setScrollPercent] = useState(0);
        const [compact, setCompact] = useState(false);
    
        useEffect(() => {
            const handleScroll = () => {
                const scrollTop = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrolled = (scrollTop / docHeight) * 100;
                setScrollPercent(scrolled);
                setCompact(scrollTop > 20);
            };
        window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const blur = Math.min(scrollPercent / 10, 1) * 3;
    const bgOpacity = Math.min(scrollPercent / 10, 1);

    const styleVars = {
        '--topbar-blur' : `${blur}px`,
        '--topbar-bg': `linear-gradient(to top, rgba(255,255,255, ${0.1 * bgOpacity}), rgba(0,0,0 ${0.2 * bgOpacity}) 100%)`
    };

    const topbarClass = `topbar ${compact ? 'compact' : ''}`;
        

    return (
        <div className={topbarClass} style={styleVars}>
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
    );
}


export default Top;