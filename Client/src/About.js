import './index.css';

import Nav from './Nav';
export default function Home() {

  return (
    <div>
      <Nav/>
      <div className="" >

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1504450075628-39777da238ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block m-auto">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1559574945-aa4e651b5b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1795&q=80" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1594811827098-0af4cfc30ee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="masthead1">
        <div className="container-fluid text-center my-5">

          <div className="text-center h2 fw-bold mb-5 ">SERVICES</div>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-off"></span>
              <h4>POWER</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-heart"></span>
              <h4>LOVE</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-lock"></span>
              <h4>JOB DONE</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
          <br /><br />
          <div className="row">
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-leaf"></span>
              <h4>GREEN</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-certificate"></span>
              <h4>CERTIFIED</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
            <div className="col-sm-4">
              <span className="glyphicon glyphicon-wrench"></span>
              <h4 style={{ color: '#303030' }}>HARD WORK</h4>
              <p>Lorem ipsum dolor sit amet..</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Container (Portfolio Section) --> */}

      <div className="masthead1 bg-light">
        <div className="container px-5 text-center bg-grey">
          <div className="text-center h2 fw-bold mb-5 ">Portfolio</div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <img src="https://images.unsplash.com/photo-1594811827098-0af4cfc30ee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><strong>Paris</strong></h5>
                  <p className="card-text">Yes, San Fran is ours</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://images.unsplash.com/photo-1594811827098-0af4cfc30ee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><strong>Paris</strong></h5>
                  <p className="card-text">This is a short card.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://images.unsplash.com/photo-1594811827098-0af4cfc30ee6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title"><strong>Paris</strong></h5>
                  <p className="card-text">Yes, San Fran is ours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTAINER */}
      </div>
      {/* MASTER */}

    </div>
  )
}