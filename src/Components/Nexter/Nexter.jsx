import React, { Component } from "react"
import { FaGlobe, FaTrophy, FaMapMarkerAlt, FaKey, FaChartLine, FaLock, FaHeart, FaUserAlt, FaExpand } from "react-icons/fa"
import "./sass/main.scss";

class Nexter extends Component {
    render() {
        return (
            <body className="container">
                <div className="sidebar">
                    <button className="nav-btn"></button>
                </div>
                <header className="header">
                    <img src={require("../../Image/logo.png")} alt="Nexter logo" className="header__logo" />
                    <h3 className="heading-3">Your own home:</h3>
                    <h1 className="heading-1">The Ultimate personal free dom</h1>
                    <button className="btn header__btn">View our properties</button>
                    <div className="header__seenon-text">Seen on</div>
                    <div className="header__seenon-logos">
                        <img src={require("../../Image/logo-bbc.png")} alt="Seen on logo 1" />
                        <img src={require("../../Image/logo-forbes.png")} alt="Seen on logo 2" />
                        <img src={require("../../Image/logo-techcrunch.png")} alt="Seen on logo 3" />
                        <img src={require("../../Image/logo-bi.png")} alt="Seen on logo 4" />
                    </div>
                </header>
                <div className="realtors">
                    <h3 className="heading-3">Top 3 Realtors</h3>
                    <div className="realtors__list">
                        <img src={require("../../Image/realtor-1.jpeg")} alt="Realtor 1" className="realtors__img" />
                        <div className="realtors__details">
                            <h4 className="heading-4 heading-4--light">Erik Feinman</h4>
                            <p className="realtors__sold">245 houses sold</p>
                        </div>
                        <img src={require("../../Image/realtor-2.jpeg")} alt="Realtor 2" className="realtors__img" />
                        <div className="realtors__details">
                            <h4 className="heading-4 heading-4--light">Kim Brown</h4>
                            <p className="realtors__sold">212 houses sold</p>
                        </div>
                        <img src={require("../../Image/realtor-3.jpeg")} alt="Realtor 3" className="realtors__img" />
                        <div className="realtors__details">
                            <h4 className="heading-4 heading-4--light">Toby Ramsey</h4>
                            <p className="realtors__sold">198 houses sold</p>
                        </div>
                    </div>
                </div>
                <section className="features">
                    <div className="feature">
                        <FaGlobe className="feature__icon" />
                        <h4 className="heading-4 heading-4--dark">Worlds best luxury homes</h4>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae et quia ipsa odit neque.</p>
                    </div>
                    <div className="feature">
                        <FaTrophy className="feature__icon" />
                        <h4 className="heading-4 heading-4--dark">Only the best properties</h4>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae et quia ipsa odit neque.</p>
                    </div>
                    <div className="feature">
                        <FaMapMarkerAlt className="feature__icon" />
                        <h4 className="heading-4 heading-4--dark">All homes in top locations</h4>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae et quia ipsa odit neque.</p>
                    </div>
                    <div className="feature">
                        <FaKey className="feature__icon " />
                        <h4 className="heading-4 heading-4--dark">New home in one week</h4>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae et quia ipsa odit neque.</p>
                    </div>
                    <div className="feature">
                        <FaChartLine className="feature__icon" />
                        <h4 className="heading-4 heading-4--dark">Top 1% realtors</h4>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae et quia ipsa odit neque.</p>
                    </div>
                    <div className="feature">
                        <FaLock className="feature__icon" />
                        <h4 className="heading-4 heading-4--dark">Source Payments on nexter</h4>
                        <p className="feature__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora molestiae et quia ipsa odit neque.</p>
                    </div>
                </section>
                <div className="story__pictures">
                    <img src={require("../../Image/story-1.jpeg")} alt="Couple with new house" className="story__img--1" />
                    <img src={require("../../Image/story-2.jpeg")} alt="New house" className="story__img--2" />
                </div>
                <div className="story__content">
                    <h3 className="heading-3 mb-sm">Happy Customers</h3>
                    <h2 className="heading-2 heading-2--dark mb-md ">&ldquo;The best decision of our lives&rdquo;</h2>
                    <p className="story__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, iure facere cupiditate
                        aliquid molestiae.
                    </p>
                    <button className="btn">Find your own home</button>
                </div>
                <section className="homes">
                    <div className="home">
                        <img src={require("../../Image/house-1.jpeg")} alt="house-1" className="home__img" />
                        <FaHeart className="home__like" />
                        <h5 className="home__name">Beautiful Familiy House</h5>
                        <div className="home__location">
                            <FaMapMarkerAlt className="icon" />
                            <p>USA</p>
                        </div>
                        <div className="home__rooms">
                            <FaUserAlt className="icon" />
                            <p>5 rooms</p>
                        </div>
                        <div className="home__area">
                            <FaExpand className="icon" />
                            <p>325 m<sup>2</sup></p>
                        </div>
                        <div className="home__price">
                            <FaKey className="icon" />
                            <p>$1.200.000</p>
                        </div>
                        <button className="btn home__btn">Contact realtor</button>
                    </div>
                    <div className="home">
                        <img src={require("../../Image/house-2.jpeg")} alt="house-2" className="home__img" />
                        <FaHeart className="home__like" />
                        <h5 className="home__name">Modern Glass Villa</h5>
                        <div className="home__location">
                            <FaMapMarkerAlt className="icon" />
                            <p>Canada</p>
                        </div>
                        <div className="home__rooms">
                            <FaUserAlt className="icon" />
                            <p>6 rooms</p>
                        </div>
                        <div className="home__area">
                            <FaExpand className="icon" />
                            <p>450 m<sup>2</sup></p>
                        </div>
                        <div className="home__price">
                            <FaKey className="icon" />
                            <p>$2.750.000</p>
                        </div>
                        <button className="btn home__btn">Contact realtor</button>
                    </div>
                    <div className="home">
                        <img src={require("../../Image/house-3.jpeg")} alt="house-3" className="home__img" />
                        <FaHeart className="home__like" />
                        <h5 className="home__name">Cozy Country House</h5>
                        <div className="home__location">
                            <FaMapMarkerAlt className="icon" />
                            <p>UK</p>
                        </div>
                        <div className="home__rooms">
                            <FaUserAlt className="icon" />
                            <p>4 rooms</p>
                        </div>
                        <div className="home__area">
                            <FaExpand className="icon" />
                            <p>250 m<sup>2</sup></p>
                        </div>
                        <div className="home__price">
                            <FaKey className="icon" />
                            <p>$850.000</p>
                        </div>
                        <button className="btn home__btn">Contact realtor</button>
                    </div>
                    <div className="home">
                        <img src={require("../../Image/house-4.jpeg")} alt="house-4" className="home__img" />
                        <FaHeart className="home__like" />
                        <h5 className="home__name">Large Rustical Villa</h5>
                        <div className="home__location">
                            <FaMapMarkerAlt className="icon" />
                            <p>Portugal</p>
                        </div>
                        <div className="home__rooms">
                            <FaUserAlt className="icon" />
                            <p>6 rooms</p>
                        </div>
                        <div className="home__area">
                            <FaExpand className="icon" />
                            <p>480 m<sup>2</sup></p>
                        </div>
                        <div className="home__price">
                            <FaKey className="icon" />
                            <p>$1.950.000</p>
                        </div>
                        <button className="btn home__btn">Contact realtor</button>
                    </div>
                    <div className="home">
                        <img src={require("../../Image/house-5.jpeg")} alt="house-5" className="home__img" />
                        <FaHeart className="home__like" />
                        <h5 className="home__name">Majestic Place House</h5>
                        <div className="home__location">
                            <FaMapMarkerAlt className="icon" />
                            <p>Germany</p>
                        </div>
                        <div className="home__rooms">
                            <FaUserAlt className="icon" />
                            <p>18 rooms</p>
                        </div>
                        <div className="home__area">
                            <FaExpand className="icon" />
                            <p>4230 m<sup>2</sup></p>
                        </div>
                        <div className="home__price">
                            <FaKey className="icon" />
                            <p>$9.500.000</p>
                        </div>
                        <button className="btn home__btn">Contact realtor</button>
                    </div>
                    <div className="home">
                        <img src={require("../../Image/house-6.jpeg")} alt="house-6" className="home__img" />
                        <FaHeart className="home__like" />
                        <h5 className="home__name">Modern family apartment</h5>
                        <div className="home__location">
                            <FaMapMarkerAlt className="icon" />
                            <p>Italy</p>
                        </div>
                        <div className="home__rooms">
                            <FaUserAlt className="icon" />
                            <p>3 rooms</p>
                        </div>
                        <div className="home__area">
                            <FaExpand className="icon" />
                            <p>180 m<sup>2</sup></p>
                        </div>
                        <div className="home__price">
                            <FaKey className="icon" />
                            <p>$600.000</p>
                        </div>
                        <button className="btn home__btn">Contact realtor</button>
                    </div>
                </section>

                <section className="gallery">
                    <figure className="gallery__item gallery__item--1">
                        <img src={require("../../Image/gal-1.jpeg")} alt="Gallery image 1" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                        <img src={require("../../Image/gal-2.jpeg")} alt="Gallery image 2" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--3">
                        <img src={require("../../Image/gal-3.jpeg")} alt="Gallery image 3" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <img src={require("../../Image/gal-4.jpeg")} alt="Gallery image 4" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--5">
                        <img src={require("../../Image/gal-5.jpeg")} alt="Gallery image 5" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--6">
                        <img src={require("../../Image/gal-6.jpeg")} alt="Gallery image 6" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--7">
                        <img src={require("../../Image/gal-7.jpeg")} alt="Gallery image 7" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--8">
                        <img src={require("../../Image/gal-8.jpeg")} alt="Gallery image 8" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--9">
                        <img src={require("../../Image/gal-9.jpeg")} alt="Gallery image 9" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--10">
                        <img src={require("../../Image/gal-10.jpeg")} alt="Gallery image 10" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--11">
                        <img src={require("../../Image/gal-11.jpeg")} alt="Gallery image 11" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--12">
                        <img src={require("../../Image/gal-12.jpeg")} alt="Gallery image 12" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--13">
                        <img src={require("../../Image/gal-13.jpeg")} alt="Gallery image 13" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--14">
                        <img src={require("../../Image/gal-14.jpeg")} alt="Gallery image 14" className="gallery__img" />
                    </figure>
                </section>

                <footer className="footer">
                    <ul className="nav">
                        <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                        <li className="nav__item"><a href="#" className="nav__link">Come work with us!</a></li>
                    </ul>
                    <p className="copyright">
                        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes.
                        This does NOT apply if you plan to produce your own course or tutorials based on this project.
                    </p>
                </footer>
            </body>
        )
    }
}
export default Nexter