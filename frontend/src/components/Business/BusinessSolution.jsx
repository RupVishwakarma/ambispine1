import React from 'react';
import './BusinessSolution.css';
import BusinessSolution1 from './../../Images/BusinessSolution1.jpg'
import BusinessSolutio2 from './../../Images/BusinessSolution2.jpeg';

import { BsCloudsFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { SiSetapp } from "react-icons/si";
import { ImArrowRight2 } from "react-icons/im";


export default function BusinessSolution() {
  const services = [
    {
      title: "Cloud Solutions and Migration",
      description: `Your Journey to the Cloud Made Simple. Leverage our expertise to migrate your business to the cloud with minimal disruption. 
      We specialize in cloud architecture, deployment, and management.`,
      icon: BsCloudsFill,
      style: {}
    },
    {
      title: "Cybersecurity and Compliance",
      description: `Secure Your Business, Protect Your Future. Defend your organization against evolving cyber threats. 
      Our comprehensive security services ensure compliance while protecting sensitive data.`,
      icon: SiSetapp,
      style: { marginTop: "80px" }
    },
    {
      title: "IT Consulting and Strategy",
      description: `Your Journey to the Cloud Made Simple. Leverage our expertise to migrate your business to the cloud with minimal disruption. 
      We specialize in cloud architecture, deployment, and management.`,
      icon: FaUsers,
      style: { marginTop: "160px" }
    },
  ];

  return (
    <div style={{ marginTop: "90px" }}>
      <section className="Bussiness_top">
        <img src={BusinessSolution1} className="Business1" alt="responsive top" />
        <div className="overlay">
          <h1 className="Bussiness_top-header">Business Solution</h1>
          <h6 className='Bussiness_top_subtitle'>
            Find out what great work can do to your business. At AKS Websoft, we help customize your website
            to increase your business visibility worldwide.
            Find out what great work can do to your business. At AKS Websoft, we help customize your website
            to increase your business visibility worldwide.
          </h6>     
        </div>
      </section>

      <section>
      <div className='row m-1'>
      <div className='col-12 col-lg-6 ps-5'>
          <h3 className='bus_cus_head '>Custom Software Development</h3>

          <p className='fs-4 mb-3'>Our Custom Software Development services
          focus on creating applications uniquely
          designed for your business goals. Whether you
          need a web, mobile, or desktop application, we
          deliver solutions that integrate seamlessly into
          your operations."</p>
      </div>
      <div className='col-12 col-lg-6 d-flex justify-content-center'>
        <div className='bussiness_desing_container'>
        <img src={BusinessSolutio2}  className='business_design' alt='design-process' />
        </div>
          
      </div>
    </div>
    
    <div className='row mt-4'>
    <div className='col-12 col-lg-6 ps-5'>
        <div className='bussiness_desing_container  ps-3 ms-3'>
        <img src={BusinessSolutio2}  className='business_design' alt='design-process' />
        </div>
          
      </div>

      <div className='col-12 col-lg-6 ' style={{marginLeft:"-100px"}}>
          <h3 className='bus_cus_head '>Data Analysis</h3>

          <p className='fs-4 mb-3'>"Gain a competitive edge with datadriven
          insights. Our Data Analytics
          services enable businesses to uncover
          trends, optimize processes, and make
          informed decisions."</p>
      </div>
      
    </div>
      </section>
      
      <section>
      <div className='business_mid' >

            <h1 className='mb-4'>The Benefits of Our Business Continuity Solutions</h1>
            <p className='fs-5 text-white mb-3 '>Our customized E-Commerce website designing services provides you with
            options to update your website content yourself, and to use other customized
            features to add photo galleries, form builders, news managers to your ECommerce
            website. We are amongst the few website designing companies in India
            that provide excepti</p>

            <p className='fs-5 text-white mb-3 '>Our web designing services includes E-Commerce web design, website
            maintenance, web redesign, small Business web design, and database dynamic
            admin panel web sites. Our web designing services have provided assistance to
            several local, national a</p>
                      
            <p className='fs-5 text-white mb-3 '>Our web designing services includes E-Commerce web design, website
            maintenance, web redesign, small Business web design, and database dynamic
            admin panel web sites. Our web designing services have provided assistance to
            several local, national a</p>
            <p className='fs-5 text-white mb-3 '>Our web designing services includes E-Commerce web design, website
            maintenance, web redesign, small Business web design, and database dynamic
            admin panel web sites. Our web designing services have provided assistance to
            several local, national a</p>

    </div>
      </section>

      <div className="bussiness_services text-white">
      <h3 className="mb-5">Business Solution Services</h3>
      <div className="row justify-content-center gap-4">
        {services.map(({ title, description, icon: Icon, style }, index) => (
          <div key={index} className="col-md-3 bussiness_ser_cont" style={style}>
            <h4 className="ps-3 mb-3">{title}</h4>
            <p className="text-center mb-3">
              <Icon className="busines_icon" />
            </p>
            <p className="text-light px-3">{description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="container mt-5 py-4 rounded-3 bg-secondary" style={{width:"70%"}}>
      <h4 className='text-dark fw-semibold fs-3 ps-3'>Get Free Consultation Now!.</h4>
      <p className='text-dark ps-3'>Let’s create a powerful website that grows with your business</p>
      <div className='text-end' style={{marginTop:"-20px"}}>
        <button className="con_now_btn">Consult Now <ImArrowRight2 className='arro_icon'/> </button>
      </div>
    </div>
    </div>
  );
}
