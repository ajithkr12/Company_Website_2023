import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () =>  {

  return (
    <section className="section error-page">
    <div className="container">
        <div className="row abc">
      <div className="col-lg-8 col-md-6 col-10 align-self-center">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <Link to="/" className="btn">Home</Link>
      </div>
    </div>
    </div>
    </section>

  );}


export default PageNotFound;