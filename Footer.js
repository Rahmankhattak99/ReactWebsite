import React from 'react';

import svg from '../image/facebook svg.svg';
import svg1 from '../image/instagram svg.svg';
import svg2 from '../image/tiktok svg.svg';
import svg3 from '../image/whatspp svg.svg';
import svg4 from '../image/youtube svg.svg';

function Footer() {
    return (
        <>
            <footer>
                <h1>Programmer's.</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, rem! Nisi nobis ipsa eius recusandae. Rem quia doloribus fugit nobis beatae architecto? Tempore vel possimus atque. Sit ipsa mollitia quisquam.</p>
                <div className='icon'>
                    <img src={svg} style={{ animationDelay: '1s' }} />
                    <img src={svg1} style={{ animationDelay: '2s' }} />
                    <img src={svg2} style={{ animationDelay: '3s' }} />
                    <img src={svg3} style={{ animationDelay: '4s' }} />
                    <img src={svg4} style={{ animationDelay: '1s' }} />
                </div>
                <div className='copyrightholder'>
                    <span>Copyright @2023 Programmer's</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
