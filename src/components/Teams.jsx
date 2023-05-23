import React from 'react';

const Teams = () => {
  return (
    <div>


<div class="container">
      <div class="row">
        <div class="col-md-12" style={{ backgroundColor: 'midnightblue' }}>
          <h1 class="banner">Find just-right plans <br />for individuals and small teams</h1>
          <div class="plans">See our plans</div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h2>Easy <br />ahead</h2>
          <p>We take the work out of connecting with <br />others so you can accomplish more</p>
        </div>

        <div class="col-md-3">
          <p class="about">About</p>
          <p>About Calendly</p>
          <p>Contact sales</p>
          <p>Newsroom</p>
          <p>Careers</p>
          <p>Security</p>
        </div>
        <div class="col-md-3">
          <p class="about">Solutions</p>
          <p>About Customer success</p>
          <p>Sales</p>
          <p>Recruiting</p>
          <p>Education</p>
          <p>Marketing</p>
        </div>
        <div class="col-md-3">
          <p class="about">Popular Features</p>
          <p>Embedded calendly</p>
          <p>Availability</p>
          <p>Sending Notifications</p>
          <p>Using calendly mobile</p>
        </div>
      </div>
    </div>

      <div className="container">
        <div className="row justify-content-around">
          <div className="col-md-6">
            <img src="calendly-images/Calendly-3.webp" className="img-responsive" />
          </div>

          <div className="col-md-6">
            <h1>The genius way <br />to work better</h1>
            <p>Calendly makes it easy to work smarter when you are <br />working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals</p>
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
            <img src="calendly-images/Calendly-4.webp" className="img-responsive" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;