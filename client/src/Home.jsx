
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const Home = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand animate_animated animate_fadeInLeft" href="#">PlatformName</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item animate_animated animate_fadeInRight">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item animate_animated animatefadeInRight animate_delay-1s">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item animate_animated animatefadeInRight animate_delay-2s">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item animate_animated animatefadeInRight animate_delay-3s">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center text-light d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'url(https://via.placeholder.com/1920x1080) center/cover no-repeat', color: '#fff' }}>
        <div className="animate_animated animate_fadeInDown">
          <h1 className="display-4">Welcome to Our Platform</h1>
          <p className="lead">We offer the best services for your business needs</p>
          <button className="btn btn-primary btn-lg animate_animated animate_bounceIn">Get Started</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container my-5">
        <div className="row text-center">
          <h2 className="animate_animated animate_fadeInUp">Our Features</h2>
          <div className="col-md-4 mb-4 animate_animated animatezoomIn animate_delay-1s">
            <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1530908158103-e2d2bf40c235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="Feature 1"/>
              <div className="card-body">
                <h5 className="card-title">Feature 1</h5>
                <p className="card-text">A brief description of the first feature.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 animate_animated animatezoomIn animate_delay-2s">
            <div className="card shadow-sm">
              <img src="https://images.unsplash.com/photo-1726510114046-b7938cdc1bd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D" className="card-img-top" alt="Feature 2"/>
              <div className="card-body">
                <h5 className="card-title">Feature 2</h5>
                <p className="card-text">A brief description of the second feature.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 animate_animated animatezoomIn animate_delay-3s">
            <div className="card shadow-sm">
              <img src="https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zmxvd2VyfGVufDB8fDB8fHww" className="card-img-top" alt="Feature 3"/>
              <div className="card-body">
                <h5 className="card-title">Feature 3</h5>
                <p className="card-text">A brief description of the third feature.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h2 className="animate_animated animate_fadeInUp">What Our Clients Say</h2>
          <div id="carouselExampleControls" className="carousel slide animate_animated animatefadeInUp animate_delay-1s" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="blockquote">
                  <p>This platform has changed our business for the better!</p>
                  <footer className="blockquote-footer">John Doe, CEO</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>Their customer service and product quality are top-notch.</p>
                  <footer className="blockquote-footer">Jane Smith, COO</footer>
                </blockquote>
              </div>
              <div className="carousel-item">
                <blockquote className="blockquote">
                  <p>Highly recommend this platform for all your needs.</p>
                  <footer className="blockquote-footer">Mike Johnson, Founder</footer>
                </blockquote>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="container my-5 text-center">
        <h2 className="animate_animated animate_fadeInUp">Pricing Plans</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4 animate_animated animateflipInX animate_delay-1s">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Basic Plan"/>
              <div className="card-body">
                <h5 className="card-title">Basic Plan</h5>
                <p className="card-text">$9.99/month</p>
                <a href="#" className="btn btn-outline-primary">Get Started</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 animate_animated animateflipInX animate_delay-2s">
            <div className="card">
              <img src="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1lfGVufDB8fDB8fHww" className="card-img-top" alt="Premium Plan"/>
              <div className="card-body">
                <h5 className="card-title">Premium Plan</h5>
                <p className="card-text">$29.99/month</p>
                <a href="#" className="btn btn-outline-primary">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="bg-dark text-light py-5">
        <div className="container text-center">
          <h2 className="animate_animated animate_fadeInUp">Subscribe to Our Newsletter</h2>
          <p className="animate_animated animatefadeInUp animate_delay-1s">Stay updated with our latest news and offers!</p>
          <form className="form-inline d-flex justify-content-center">
            <input type="email" className="form-control me-2" placeholder="Enter your email" />
            <button type="submit" className="btn btn-primary animate_animated animatebounceIn animate_delay-2s">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 bg-light border-top">
        <p className="animate_animated animatefadeIn animate_delay-3s">© 2024 Platform Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;