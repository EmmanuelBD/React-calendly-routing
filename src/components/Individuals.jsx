import React from 'react';

const Individuals = () => {
  return (
    
       <>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-3">
            <p className="title-1">1. Create <br />Simple Rules</p>
          </div>
          <div className="col-md-3">
            <p className="title-1">2. Share <br />your link</p>
          </div>
          <div className="col-md-3">
            <p className="title-1">3. Get booked</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>

          <div className="col-md-3">
            <p>Let Calendly know your<br />availability preferences and<br />it'll do the work for you</p>
          </div>
          <div className="col-md-3">
            <p>Send guests your Calendly <br />link or embed it on your website</p>
          </div>
          <div className="col-md-3">
            <p>They pick a time and the <br />event is added to your calendar</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-6">
            <h1>The genius way <br />to work better</h1>
            <p>Calendly makes it easy to work smarter when you are <br />working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals</p>
          </div>

          <div className="col-md-6">
            <img src="calendly-images/Calendly-2.webp" className="img-responsive" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Individuals;
