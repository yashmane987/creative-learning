import React from 'react'
import aboutusimg from "../images/aboutusimg.png";



const AboutUspage = () => {
  return (
  <div>
   <div className="container-aboutus">
     <h2 id="title"> Welcome To Creative-Learning </h2>
     <br/>
     <div className="main-div1">
       <div className="row1">
         <div className="col-6">
           <img src={aboutusimg} className="img-box1"alt='' />
         </div>
         <div className="col-6">
           <h2>About Us</h2>
           <p>
             Creative-Learning is one of the largest online learning
             platforms for web development and cyber security, offering a
             comprehensive collection of pre-recorded practical
             implementation videos with one year of access and dedicated
             support.
           </p>
           <p>
             Over the past ten years since its inception, the company has
             grown into a leading online platform for web development
             training. Our mission is to revolutionize the digital security
             sector by reshaping the way people perceive and approach it. We
             are committed to empowering 1,000,000 individuals with the
             skills needed to achieve financial stability and lead a
             fulfilling life.
           </p>
           <p>
             We are on the mission to help 10,00,000 people to develop their
             skills to live a healthy life with financial stability.
           </p>
         </div>
       </div>
     </div>
   </div> 
   <br/>
   <div>
   <h2 id="title">WHY JOIN CREATIVE-LEARNING</h2>
   <br/>
   <div className="why-join-content">
  <ul>
    <li>
      <strong>ISO Certified:</strong> Creative-Learning is an ISO 9001:2015
      certified platform known for its high-quality education standards.
    </li>
    <li>
      <strong>Authorized Partnerships:</strong> We collaborate with leading
      tech companies and educational organizations to provide the most
      up-to-date and industry-relevant learning resources.
    </li>
    <li>
      <strong>Excellent Customer Satisfaction:</strong> We have an outstanding
      track record of customer satisfaction, reflecting our commitment to
      delivering exceptional educational experiences.
    </li>
    <li>
      <strong>Comprehensive Course Offerings:</strong> We offer a wide range of
      courses in Web Development and Cyber Security, empowering Business
      Owners, Job Seekers, and Students to advance their careers through
      systematic and organized online learning.
    </li>
    <li>
      <strong>Internationally Recognized Certifications:</strong> Our
      certificates are accepted both nationally and internationally, enhancing
      our students' career opportunities in the global market.
    </li>
    <li>
      <strong>Experienced Instructors:</strong> Our team of expert instructors
      has over 8+ years of experience in the tech industry, ensuring that our
      students learn from professionals with real-world knowledge.
    </li>
    <li>
      <strong>Proven Track Record:</strong> Creative-Learning has successfully
      completed numerous projects and helped countless students achieve their
      career goals.
    </li>
    <li>
      <strong>Successful Alumni:</strong> Under Creative-Learning, over 2000+
      students have been trained, securing their futures and achieving their
      career aspirations.
    </li>
    <li>
      <strong>State-of-the-Art Learning Platform:</strong> Our interactive
      learning platform is equipped with the latest tools and technologies,
      providing an immersive educational experience.
    </li>
  </ul>
</div>
   </div>
 </div>
  )
}

export default AboutUspage
