import React, { useState } from 'react';
import './CloudSolution.css';
import CloudSolution1 from './../../Images/CloudSolution1.jpeg'
import CloudSolution2 from './../../Images/CloudSolution2.jpg';

import { BsCloudsFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { SiSetapp } from "react-icons/si";
import { ImArrowRight2 } from "react-icons/im";
import { BsFileEarmarkText } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";
import { RiTimer2Line } from "react-icons/ri";
import { FaCreativeCommonsNc } from "react-icons/fa6";
import { FaFileContract } from "react-icons/fa6";
import { AiOutlineRise } from "react-icons/ai";
import { AiFillFlag } from "react-icons/ai";
import { BiSolidSpreadsheet } from "react-icons/bi";
import { DiNetbeans } from "react-icons/di";
import { TiMediaEjectOutline } from "react-icons/ti";
export default function CloudSolution() {
    const benefitesCloud = [
      {title:"Improved performance", shortdes:"You can use cloud computing resources together to gain greater performance than with your own dedicated server hardware.", icons: AiOutlineRise},
      {title:"Data loss prevention", shortdes:"Cloud providers offer backup and disaster recovery features.", icons: BsFileEarmarkText},
      {title:"Quality control", shortdes:"You can use cloud computing resources together to gain greater performance than with your own dedicated server hardware.", icons: FaFileContract},
      {title:"Faster time to market", shortdes:"You can quickly deploy new applications and test new ideas. ", icons: RiTimer2Line},
      {title:"Cost savings", shortdes:"You only pay for the resources you use, and you can avoid the cost of purchasing and maintaining hardware and software. ", icons: FaCreativeCommonsNc},
      {title:"Security", shortdes:"Cloud services offer advanced security features, such as encryption, authentication, and security patches.  ", icons: MdOutlineSecurity},
    ]
    const cloudservices = [
      {
        title: "Cloud Objective",
        description: `Wee help you define what your business wants to achieve by transitioning to the cloud.`,
        icon: BiSolidSpreadsheet,
        style: {},
      },
      {
        title: "Current context",
        description: ` We identify gaps bestween your current capabilities and those required for cloud enablement`,
        icon: DiNetbeans,
        style: { marginTop: "80px" },
      },
      {
        title: "IT Consulting and Strategy",
        description: ` We identify gaps bestween your current capabilities and those required for cloud enablement`,

        icon: AiFillFlag,
        style: { marginTop: "160px" },
      },
      {
        title: "Advanced Strategies",
        description: `Unlock new potentials for your business with cutting-edge solutions tailored to your unique needs.`,
        icon: TiMediaEjectOutline,
        style: { marginTop: "240px" },
      },
    ];
  return (
    <div style={{ marginTop: "85px" }}>
      <section className="CloudSol_top">
        <img src={CloudSolution1} className="CloudTop1" alt="responsive top" />
        <div className="overlay">
          <h1 className="Bussiness_top-header">Cloud Solution</h1>
          <h6 className='Bussiness_top_subtitle'>
          Start Designs is an emerging web development company that offerswebsite development services. Our in-house team and professional web developers uses new technologies
          </h6>     
        </div>
      </section>

      <section>
      <div className='row m-1'>
      <div className='col-12 col-lg-6 ps-5'>
          <h3 className='cloud_cus_head '>Cloud Computing Solutions</h3>

          <p className='fs-4 mb-3'>Our Custom Software Development services
          focus on creating applications uniquely
          designed for your business goals. Whether you
          need a web, mobile, or desktop application, we
          deliver solutions that integrate seamlessly into
          your operations."</p>
      </div>
      <div className='col-12 col-lg-6 d-flex justify-content-center'>
        <div className='cloud_computing_container'>
        <img src={CloudSolution2}  className='cloud_copute' alt='design-process' />
        </div>
          
      </div>
    </div>
      </section>
      
      <section>
      <div className='Cloud_mid' >

            <h1 className='mb-4'>The Benefits of Cloud Business Solutions</h1>
            <div className='row'>
              {
                benefitesCloud.map(({title, shortdes, icons: Icons}, index ) => (
                  <div key={index} className='col-12 col-md-4 '>
                  <p className='text-center mb-3'><Icons  className='cloud_icon'/></p>
                <h4 className='ps-3 mb-3'>{title}</h4>
                  <p className=' text-light px-3'>{shortdes}</p>
                  </div>
                ))
              }
      </div>

    </div>
      </section>


      <div className="Cloud_mid_sec">
      <div className='row mb-5'>
        <div className='col-lg-6 text-center'>
          <h5 className='text-white'>Reduce risk exposure,</h5>
          <h5 className='text-white'>Increase business agility</h5>
        </div>
        <div className='col-lg-6'>
          <p className='px-5 text-white fs-5'>Cloud services have an important role to play in making companies more agile and as a result. more likely to ceed. Here's how we help:</p>
        </div>
      </div>
      <div className="row justify-content-center">
        {cloudservices.map(({ title, description, icon: Icon, style }, index) => (
          <div key={index} className="col-12 col-md-2 cloud_service" style={style}>
            <p className="mb-3">
              <Icon className="cloud_ser_icon" />
            </p>
            <h5 className="ps-3 mb-3 text-white">{title}</h5>
            <p className="text-light px-3 ">{description}</p>
          </div>
        ))}
      </div>
    </div>

  <div className="container mt-5">
  <div class="accordion" id="cloudsolution">
  <div class="accordion-item">

      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#cloud_solution" aria-expanded="true" aria-controls="cloud_solution">
      1. What is a Cloud Solution?
      </button>
    <div id="cloud_solution" class="accordion-collapse collapse show">
      <div class="accordion-body">

        <strong>Answer</strong> A cloud solution refers to services and resources provided over the internet (cloud), including software, infrastructure, and platform services. Examples include cloud storage, cloud computing (e.g., AWS, Azure), and SaaS (Software as a Service) offerings.
      </div>
    </div>
  </div>
  <div class="accordion-item">

      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#benifit_cloud" aria-expanded="false" aria-controls="benifit_cloud">
      2. What are the Benefits of Cloud Solutions?
      </button>
    <div id="benifit_cloud" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Ans.</strong> <ul>
          <li><b>Scalability:</b> Easily scale up or down based on your needs.</li>
          <li><b>Cost-Efficiency :</b> Pay only for what you use, avoiding upfront infrastructure costs.</li>
          <li><b>Flexibility:</b> Access your services from anywhere with an internet connection.</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cloud_secure" aria-expanded="false" aria-controls="cloud_secure">
      3. How Secure Are Cloud Solutions?
      </button>
    </h2>
    <div id="cloud_secure" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Answer</strong> Cloud providers implement high-level security measures, such as encryption, multi-factor authentication, and regular audits. However, it's essential for users to configure settings correctly and maintain good security practices, such as using strong passwords.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cloud_secure" aria-expanded="false" aria-controls="cloud_secure">
      4 . How Do Cloud Solutions Impact Business Operations?
      </button>
    </h2>
    <div id="cloud_secure" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Answer</strong> Cloud solutions enable businesses to be more agile, improve collaboration, reduce costs, and enhance scalability. They allow teams to work remotely, share data efficiently, and adapt quickly to market changes.
      </div>
    </div>
  </div>
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
