import React from 'react'

   const Footer = () => {
   return (
    <footer >
      <div className="footerContainer">
        <div className="socialIcons">
          <a href="#"><i className="fa-brands fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-google-plus"></i></a>
          <a href="#"><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="footerNav">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Reviews</a></li>
            <li><a href="#">Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footerBottom">
        <p>
          Copyright &copy;2025; Designed by <span className="designer">Creative learning</span>
        </p>
      </div>
    </footer>
  );
}

 export default Footer
