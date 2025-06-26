import React from 'react';




import BannerLogo from '../images/restauranfood.jpg';

const Header = () => {

    
    return (
        <header className="header">
            <section>
              <div className='banner'>
                 <h2>Little Lemon</h2>
                 <h3>Chicago</h3>
                 <p>We are a family-owned Mediterranean restaurant, focused on<br/>
                    traditional recipes served with a modern twist.</p>
              </div>
              <a href="/Reservations"><button aria-label='On Click'>Reserve a Table</button></a>
              

              <div className='banner-img'>
                <img src = {BannerLogo} alt='bannerlogo'/>
              </div>
            </section>
        </header>
    );
}
export default Header;