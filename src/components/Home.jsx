import React from 'react';
import Vg from "../assets/2 (1).webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className='home'>

      <main>
        <h1>TechyStar</h1>
        <p>Solutions to all your problems</p>
      </main>
    </div>

    <div className='home2'>
      <img src={Vg} alt='Graphics'/>

      <div>
        <p>
        We are your one and only solution to the tech problems you face
        every day. We are leading tech company whose aim is to increase the
        problem solving ability in children.
        </p>
      </div>
    </div>

    <div className='home3' id='about'>
      <div>
        <h1>Who we are?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit maiores ducimus quaerat ad illum sunt aliquid quod iusto, expedita ab obcaecati quidem ipsum, provident atque nobis omnis eos, laborum earum! Quasi officiis animi ipsum impedit perferendis deserunt quod corrupti dicta accusantium. Totam expedita illum, quas assumenda ad vel maiores iure!
        </p>

      </div>
    </div>

    <div className="home4" id='brands'>
      <div>
        <h1>Brands</h1>
          <article>
            <div style={{animationDelay: "0.3s",}}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{animationDelay: "0.5s",}}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{animationDelay: "0.7s",}}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>

             <div style={{animationDelay: "1s",}}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
      </div>
    </div>

    </>
  )
}

export default Home;
