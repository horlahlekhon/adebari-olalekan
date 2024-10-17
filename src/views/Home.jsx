import React from "react";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Hero from "../components/hero/Hero";
import Index from "../components/about";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/Contact";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
    {icon: "fa-home", menuName: "Home"},
    {icon: "fa-user", menuName: "About"},
    {icon: "fa-briefcase", menuName: "Portfolio"},
    {icon: "fa-envelope-open", menuName: "Contact"},
];

const SocialShare = [
    {
        iconName: "fa fa-github",
        link: "https://github.com/horlahlekhon",
    },
    {iconName: "fa fa-twitter", link: "https://x.com/1nesAndZer0s"},
    {
        iconName: "fa fa-linkedin",
        link: "https://www.linkedin.com/in/olalekan-adebari/",
    },
];

const Home = () => {

    return (
        <div className="yellow">
            <SwitchDark/>
            <Tabs>
                <div className="header">
                    <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
                        {menuItem.map((item, i) => (
                            <Tab className="icon-box" key={i}>
                                <i className={`fa ${item.icon}`}></i>
                                <h2>{item.menuName}</h2>
                            </Tab>
                        ))}
                    </TabList>
                </div>

                <div className="tab-panel_list">
                    <TabPanel className="home ">
                        <div
                            className="container-fluid main-container container-home p-0 "
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="color-block d-none d-lg-block"></div>
                            <Hero/>
                        </div>
                    </TabPanel>

                    <TabPanel className="about">
                        <div data-aos="fade-up" data-aos-duration="1200">
                            <div className="title-section text-left text-sm-center">
                                <h1>
                                    ABOUT <span>ME</span>
                                </h1>
                                <span className="title-bg">Resume</span>
                            </div>
                            <Index/>
                        </div>
                    </TabPanel>
                    <TabPanel className="portfolio professional">
                        <div
                            className="title-section text-left text-sm-center"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h1>
                                my <span>portfolio</span>
                            </h1>
                            <span className="title-bg">works</span>
                        </div>
                        <Portfolio/>
                    </TabPanel>
                    <TabPanel className="contact">
                        <div
                            className="title-section text-left text-sm-center"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <h1>
                                get in <span>touch</span>
                            </h1>
                            <span className="title-bg">contact</span>
                        </div>
                        <div
                            className="container"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        >
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                                        Don't be shy !
                                    </h3>
                                    <p className="open-sans-font mb-4">
                                        Feel free to get in touch with me. I am always open to
                                        discussing new projects, creative ideas or opportunities to
                                        be part of your visions.
                                    </p>
                                    <>
                                        <p className="open-sans-font custom-span-contact position-relative">
                                            <i className="fa fa-envelope-open position-absolute"></i>
                                            <span className="d-block">mail me</span>{" "}
                                            <a href="mailto:Adebari.olalekan.oluwaseun@gmail.com">Adebari.olalekan.oluwaseun@gmail.com</a>
                                        </p>

                                        <p className="open-sans-font custom-span-contact position-relative">
                                            <i className="fa fa-phone-square position-absolute"></i>
                                            <span className="d-block">call me</span>{" "}
                                            <a href="Tel: +2348129014778">+234 812 901 4778</a>
                                        </p>
                                    </>

                                    <ul className="social list-unstyled pt-1 mb-5">
                                        {SocialShare.map((val, i) => (
                                            <li key={i}>
                                                <a href={val.link} target="_blank" rel="noreferrer">
                                                    <i className={val.iconName}></i>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-8">
                                    <Contact/>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default Home;
