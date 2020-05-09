import React from "react";
import "../styles.css";
// import { API } from "../backend";
import Base from "./Base";

const Home = () => {
  return (
    <Base>
      <section id="hero" className="d-flex align-items-center">
        <div className="carousel slide w-100" data-ride="carousel" id="carousel-1" style={{ height: '100%' }}>
          <div className="carousel-inner" role="listbox" style={{ height: '100%' }}>
            <div className="carousel-item active d-flex align-items-center" id="hero-1">
              <div className="container">
                <div><img className="hero-img" src="/uploads/img/Untitled.png?h=4a83efd85dd0c967e59c4eac984fc851" /></div>
              </div>
            </div>
            <div className="carousel-item" id="hero-2"></div>
          </div>
          <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button"
            data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
          <ol className="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-1" data-slide-to="1"></li>
          </ol>
        </div>
      </section>
      <section id="about-us" className="px-sm-0 px-xs-0 py-5" style={{ background: 'linear-gradient(rgba(255,255,255,0.9),#ffffff),url("quot;/uploads/img/18704.jpg?h=71eb9edd692e68138d258d82eaba9965")' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-10 text-center">
              <div id="About-main">
                <h1 className="about-heading font-weight-boldest display-3" style={{fontFamily:'Archivo Black'}}>About Us</h1>
              </div>
            </div>
            <div className="col-lg-8 col-sm-10">
              <p className="lead font-weight-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada iaculis felis. Phasellus interdum ante fermentum, suscipit ante vitae, consectetur diam. Sed eu purus et urna hendrerit congue semper et enim. Nunc lacinia nec
              nunc et pretium. Nullam id neque vel eros dapibus mollis. Integer eu commodo dolor. Vestibulum ac sollicitudin ante. Maecenas orci arcu, tincidunt ac libero vel, porttitor tristique mauris.Vivamus aliquam sem varius dolor pulvinar,
                        sodales tristique lorem ullamcorper.<br /><br />&nbsp;Nunc eget luctus neque, ut fermentum ex. Praesent sed neque in nunc ornare auctor. Ut justo urna, consectetur at lacus sit amet, bibendum vulputate arcu. Mauris ac faucibus massa,
                consequat facilisis nisl. Proin sed ultrices ex. Donec eleifend id eros ut vehicula. Nunc venenatis venenatis sem non consequat. Ut euismod lacus vitae porta semper. Donec interdum vestibulum felis eget pellentesque. Duis vel placerat
                        ligula. Mauris consectetur semper quam sed semper. Etiam auctor posuere interdum.<br /></p>
            </div>
          </div>
        </div>
      </section>
      <section id="our-mission" className="p-5">
        <div className="container">
          <div className="row justify-content-center my-5">
            <div className="col-12 mb-5">
              <div>
                <h1 className="font-weight-bolder display-4">Our Mission</h1>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card mission-card">
                <img className="card-img w-100 d-block" />
                <div className="card-img-overlay" id="mission1" >
                  
                  <h2 className="font-weight-bolder">Mission&nbsp;</h2>
                  <p className="font-weight-bolder">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada iaculis felis. Phasellus interdum ante fermentum, suscipit ante vitae, consectetur diam. Sed eu purus et urna hendrerit congue&nbsp;<br /><br /></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card mission-card"><img className="card-img w-100 d-block" />
                <div className="card-img-overlay font-weight-bolder" id="mission2">
                  
                  <h2 className="font-weight-bolder">Mission</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada iaculis felis. Phasellus interdum ante fermentum, suscipit ante vitae, consectetur diam. Sed eu purus et urna hendrerit congue&nbsp;<br /><br /></p>

                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="card mission-card"><img className="card-img w-100 d-block" />
                <div className="card-img-overlay font-weight-bolder" id="mission3">
                
                  <h2 className="font-weight-bolder">MIssion</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada iaculis felis. Phasellus interdum ante fermentum, suscipit ante vitae, consectetur diam. Sed eu purus et urna hendrerit congue&nbsp;<br /><br /><br /></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="team" className="bg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading font-weight-bolder">Our Amazing Team</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur. </h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4 border team-card">
              <div className="team-member"><img className="rounded-circle img-fluid" src="/uploads/img/3660471.jpg?h=8e212c36460746f00441d3c0641b127d" />
                <h4>Lorem Ipsum</h4>
                <p className="text-muted">Lead Designer</p>
                <ul className="list-inline social-buttons text-center">
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-twitter"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-facebook"></i></a></li>
                  <li className="w-25 d-inline-block"> <a className="mx-auto" href="#"><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Home;

// Whenever there is a curly brace in function return keyword is necessary
