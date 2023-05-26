import React from 'react';
import png from '../image/background image-2.png';
import svg from '../image/facebook svg.svg';
import svg1 from '../image/instagram svg.svg';
import svg2 from '../image/tiktok svg.svg';
import svg3 from '../image/whatspp svg.svg';
import svg4 from '../image/youtube svg.svg';

const Home = () => {
  return (
    <>

      <div className="home1" id='Home'>
        <main>
          <h1>Welcome To Programming Center.</h1>
          <p>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, tempore.</div>
            <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</div>
          </p>
        </main>
      </div>

      <div className="home2" id='Home'>

        <img src={png} />
        <div className='para'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, eius velit neque quas porro, accusantium temporibus dolore nobis inventore voluptas nulla iure rerum recusandae nesciunt pariatur exercitationem autem possimus nihil!
          </p>
        </div>

      </div>

      <div className="home3" id='About'>

        <div>
          <h1>Who Are You?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nemo debitis cupiditate, repudiandae provident veniam maxime, similique minima sit repellat recusandae, deserunt facere. Totam doloribus porro, sint consequuntur laudantium optio? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum necessitatibus quod nihil quibusdam veritatis fugit enim molestiae fuga praesentium. Obcaecati, vero dolore iusto nam velit a harum doloribus quidem esse? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel voluptatibus fugit sit! Eum, nesciunt dolorem magni nobis incidunt assumenda repellat fugiat saepe reprehenderit quis minima quo neque sunt officia consequuntur? </p>
        </div>

      </div>

      <div className="home4" id='Service'>

        <div className='first-div'>

          <h1>Brand</h1>

          <article>

            <div style={{ animationDelay: '1s' }}>
              <img src={svg} />
            </div>

            <div style={{ animationDelay: '2s' }}>
              <img src={svg1} />
            </div>

            <div style={{ animationDelay: '3s' }}>
              <img src={svg2} />
            </div>

            <div style={{ animationDelay: '4s' }}>
              <img src={svg3} />
            </div>

            <div style={{ animationDelay: '1s' }}>
              <img src={svg4} />
            </div>

          </article>

        </div>

      </div>

    </>
  )
}

export default Home
