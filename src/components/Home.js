import React, { useState } from "react";
import ReactDom from "react-dom";
import ReactPlayer from "react-player";

import Hero from "./Hero";
import projects from './projects'
import Project from "./Project";

// FAQ module 
import Question from './faqs/Questions'
import faq from './faqs/faq'

// Reviews Component

import Review from "./Review";
import reviews from './data.js'
import Portfolio from './portfolio/Portfolio'

//CSS
import "../index.css";
import "../review.css";

function Home() {

  // FAQ
  const [questions, setQuestions] = useState(faq);

  return (
    <>
      <Hero />
      <section>
        <h1 className="section-title">Showreel</h1>
        <div className="video-wrapper">
          <ReactPlayer
            url="https://player.vimeo.com/video/534020193?h=958583227"
            className="video-frame"
          />
        </div>
      </section>
      <section>
        <h1 className="section-title">Our works</h1>
        <div className="container projectList isNovedad">
          {projects
            .filter((project) => project.isNovedad === true)
            .map((filteredProject) => (
              <Project
                img={filteredProject.img}
                title={filteredProject.title}
                author={filteredProject.author}
                id={filteredProject.id}
                category={filteredProject.category}
                key={filteredProject.id}
                className="isNovedad"
              />
            ))}
        </div>
      </section>
      <section className="section-team container">
        <h1 className="section-title">Our team</h1>
        <div className="video-wrapper">
          <img
            src="https://images.unsplash.com/photo-1613579917953-d35e6b72d32b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="team"
          />
        </div>
      </section>
      <section className="container video-wrapper">
        {/* {reviews.map((review) => (
          <Review />
        ))} */}

        <Review />
      </section>
      <section>
        <Portfolio />
      </section>

      <section>
          <div className="container">
            <section className="info">
              {faq.map((question) => {
                return <Question key={question.id} {...question} />;
              })}
            </section>
          </div>
      </section>
      
      <section className="container video-wrapper">
        <div>
          <h3>Contacto: guillef33@gmail.com</h3>
          <p>Corrientes 745</p>
          <p>Microcentro de Buenos Aires</p>
          <p>11 67083592</p>
        </div>
      </section>
    </>
  );
}

export default Home;
