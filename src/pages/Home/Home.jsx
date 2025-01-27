import React from 'react'
import Slider from 'react-slick'
import './Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import iithLogo from "../../assets/iith.png"



const Home = () => {

  const settings = {
    dots: true,         // Show navigation dots
    infinite: true,     // Infinite looping
    speed: 500,         // Transition speed
    slidesToShow: 1,    // Number of slides to show at once
    slidesToScroll: 1,  // Number of slides to scroll
    autoplay: true,     // Auto slide
    autoplaySpeed: 3000 // Auto slide speed in milliseconds
  };

  const images = [
    'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=',
    'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=',
    'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=',
    'https://media.istockphoto.com/id/485371557/photo/twilight-at-spirit-island.jpg?s=612x612&w=0&k=20&c=FSGliJ4EKFP70Yjpzso0HfRR4WwflC6GKfl4F3Hj7fk=',
  ];

  return (
    <div className=''>
      <div className='bg-image flex flex-col md:flex-row items-center justify-center'>
        <img src={iithLogo} alt="" className='rounded-[50%] mb-4 md:mb-0 md:mr-8'/>
        <p className='text-white text-2xl md:text-4xl font-bold text-center'>Indian Institue of Technology Hyderabad</p>
      </div>
      <div className="welcomeMessage flex flex-col items-center p-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-8">Welcome</h1>
        <p className="max-w-4xl leading-relaxed text-lg">
          Welcome to the <span className="font-semibold">Corteks</span> (Computational Researchers on Thermodynamics & Kinetics of Materials) Group website,
          School of Engineering Sciences and Technology, University of Hyderabad, India.
        </p>
        <br />
        <p className="max-w-4xl leading-relaxed text-lg">
          The research area focuses on improving materials and manufacturing processes using computational tools
          based on thermodynamics and kinetics with minimal experiments. Additionally, creating thermodynamic and
          kinetic databases through experiments and theory is part of the research.
        </p>
        <br />
        <div className='flex flex-col items-start md:w-[70%] lg:w-[47%]'>
        <p className="max-w-4xl leading-relaxed text-2xl font-semibold">
          Some key research areas include:
        </p>
        <ul className="list-disc list-inside mt-2 text-xl">
          <li>Calphad (calculation of phase diagram)</li>
          <li>Thermodynamic assessment</li>
          <li>Phase diagram simulation</li>
          <li>Thermokinetic simulation</li>
          <li>Alloy design / compositional design</li>
          <li>High-throughput composition screening</li>
          <li>Microstructure prediction</li>
          <li>Phase evolution / stability / transformation studies</li>
          <li>Oxidation studies</li>
        </ul> 
        <br />
        <p className="max-w-4xl leading-relaxed text-2xl font-semibold">
          Some key research areas include:
        </p>
        <ul className="list-disc list-inside mt-2 text-xl">
          <li>Calphad (calculation of phase diagram)</li>
          <li>Thermodynamic assessment</li>
          <li>Phase diagram simulation</li>
          <li>Thermokinetic simulation</li>
          <li>Alloy design / compositional design</li>
          <li>High-throughput composition screening</li>
          <li>Microstructure prediction</li>
          <li>Phase evolution / stability / transformation studies</li>
          <li>Oxidation studies</li>
        </ul>
        </div>
      </div>
      <div className="w-sm md:w-1/2 mx-auto p-8">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Home
