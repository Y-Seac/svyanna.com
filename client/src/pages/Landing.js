import React from "react";

const Landing = () => {
  return (
    <section className="hero-banner position-relative hero-shape2 custom-py-1 overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-lg-5">
            <h1 className="mb-4">
              Hi, I'm Yanna lets{" "}
              <span className="font-w-6 brand-blue">smarter</span>, not{" "}
              <span className="font-w-6 brand-blue">harder</span>
            </h1>
            <p className="lead mb-4">
              Build a Beautiful, Clean &amp; Modern Design website with flexible
              Bootstrap components.
            </p>
            {/* Buttons */}{" "}
            <a href="#" className="btn btn-primary">
              Start Now
            </a>
          </div>
          <div className="col-12 col-lg-6 mt-5 mt-lg-0">
            <div className="bg-white shadow-primary overflow-hidden p-3 mr-n8 card">
              <div
                className="owl-carousel no-pb"
                data-dots="false"
                data-items={1}
                data-autoplay="true"
              >
                <div className="item">
                  <img
                    className="img-fluid border border-light"
                    src="assets/images/about/03.jpg"
                    alt=""
                  />
                </div>
                <div className="item">
                  <img
                    className="img-fluid border border-light"
                    src="assets/images/about/02.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* / .row */}
        <div className="row align-items-center justify-content-between ">
          <div className="col">
            <h1>I make designs that are bold & fresh.</h1>
            <h2 className="text-muted">Stay a bit and check it out</h2>
          </div>
        </div>
        <div className="row my-5">
          <div className="col">
            <div className="p-4 mb-5">
              <h2>create the lifestyle you really desire.</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia a leo nulla ve elementum lacus et mi posuere
                pulvinar nec pulvin.
              </p>
              <ul>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
              </ul>
              <div className="btn btn-primary">LEARN MORE</div>
            </div>
          </div>
          <div className="col">
            <div className="card card-3d rounded p-4 mb-5">
              <h2>create the lifestyle you really desire.</h2>
              <p>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia a leo nulla ve elementum lacus et mi posuere
                pulvinar nec pulvin.
              </p>
              <ul>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
                <li>beautiful and easy to professional animations</li>
              </ul>
              <div className="btn btn-primary">LEARN MORE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
