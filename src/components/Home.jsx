import React from 'react';

const Home = () => {
  return (
    <>
    <div className="container">
      <div className="row justify-content-around">
        <div className="col-md-6" style={{ backgroundColor: 'white' }}>
          <h1>Calendly is the modern scheduling platform that makes "finding time" a breeze.</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter your email" />
              <button type="submit" className="btn btn-default">Submit</button>
              <p>Create your free account. No credit card required.</p>
            </div>
          </form>
        </div>

        <div className="col-md-6" style={{ backgroundColor: 'white' }}>
          <img src="calendly-images/calendly-1.webp" className="img-responsive" />
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-12" style={{ backgroundColor: 'ghostwhite' }}>
          <h3>Simplifies Scheduling for more than <br />10,000,000 users worldwide</h3>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;