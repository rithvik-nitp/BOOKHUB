import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your ultimate destination for all things books! At BookHub, we believe that reading is not just a hobby; it's a way of life. Whether you're a dedicated bookworm, an occasional reader, or someone who's just getting started, we've got you covered.Our mission is simple: to connect readers with the books they're searching for and create a vibrant community where literary enthusiasts can come together to explore, discover, and share their love for the written word. </p>
            <p className='fs-17'>We understand that finding the perfect book can be a thrilling yet challenging endeavor, and that's why we've designed BookHub to be your trusted companion on this literary journey.

At BookHub, we boast an extensive and diverse collection of books from various genres, ensuring that there's something for everyone. From timeless classics to contemporary bestsellers, from fiction to non-fiction, from mysteries to romance, and everything in between, our library is brimming with literary treasures waiting to be discovered.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
