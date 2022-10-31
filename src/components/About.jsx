import React from 'react'
import { FaGlobeAmericas, FaHeadset, FaBookOpen } from "react-icons/fa";

const About = () => {
  return (
    <article className='container p-3'>
      <h1 className='text-center'>ABOUT US</h1>
      <div className='row text-center d-flex justify-content-center'>
        <i className="fas fa-globe-americas fa-2x"></i>
        <h4>OnlineCourses</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          amet pariatur odio sequi in numquam. Asperiores consequuntur,
          delectus, cum expedita culpa neque atque iste, porro ipsum inventore
          nam odio pariatur!
        </p>
      </div>

      <div>
        <i className="fas fas fa-headset fa-2x"></i>
        <h4>Full-Time Mentoring</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          amet pariatur odio sequi in numquam. Asperiores consequuntur,
          delectus, cum expedita culpa neque atque iste, porro ipsum inventore
          nam odio pariatur!
        </p>
      </div>

      <div>
        <i className="fas fa-book-open fa-2x"></i>
        <h4>Learn Yourself</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          amet pariatur odio sequi in numquam. Asperiores consequuntur,
          delectus, cum expedita culpa neque atque iste, porro ipsum inventore
          nam odio pariatur!
        </p>
      </div>
    </article>
  );
}

export default About