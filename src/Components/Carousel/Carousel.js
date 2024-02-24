import React from 'react'
import './Carousel.css';
const Carousel = () => {
  return (
    <div id='home'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className='carousel-container'>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval={1000}>
              <img src="https://images.fnlondon.com/im-882676/?width=1280&height=853" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src="https://img.rasset.ie/001e2da3-500.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-label ">
            <h1>BLUETICKS CONSULTANTS</h1><br/><br/>
            <h3>Founded in 2017, Bluetick Consultants is a technology-driven firm that has made a
              significant impact in the Indian and US startup ecosystems.</h3><br/>
              <p>Transforming Enterprises
with cutting-edge, scalable, privacy-focused Generative AI Solutions</p>
            <p>
              <a href="https://www.bluetickconsultants.com/generative-ai.html" className="explore-more-link" target="_blank">Learn More</a>
            </p>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
        <br/><br/>
      </div>

    </div>
  )
}

export default Carousel