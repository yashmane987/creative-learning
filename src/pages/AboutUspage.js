import React from 'react'
import aboutusimg from "../images/aboutusimg.png";



const AboutUspage = () => {
  return (
  <div>
   <div className="container-aboutus">
     <h2 id="title"> Welcome To Creative-Learning </h2>
     <hr></hr>
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
 </div>
  )
}

export default AboutUspage
