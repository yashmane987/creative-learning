import React from "react";
import { Dropdown, Button, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import imgcard1 from '../images/imgcard1.jpeg';
import imgcard2 from '../images/imgcard2.jpeg';
import imgcard3 from '../images/imgcard3.jpeg';
import imgcard4 from '../images/imgcard4.jpeg';
import imgcard5 from '../images/imgcard5.jpeg';
import imgcard6 from '../images/imgcard6.jpeg';


const Coursespage = () => {
  return (
    <div>
      <div className="container">
        {/* Category Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-category">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/cybersecurity">Cyber Security</Dropdown.Item>
          <Dropdown.Item as={Link} to="/webdevelopment">Web Development</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* Cards Section */}
        <div className="card-grid mt-4">
          <Row className='my-5'>
            {/* Card 1 */}
            <Col md={4}>
              <Card className="card-box">
                <Card.Img variant="top" src={imgcard1} />
                <Card.Body>
                  <Card.Title>Beginner</Card.Title>
                  <Card.Text>
                    8 Best Webdevelopment Courses For Beginner
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col md={4}>
              <Card className="card-box">
                <Card.Img variant="top" src={imgcard2} />
                <Card.Body>
                  <Card.Title>Google CyberSecurity</Card.Title>
                  <Card.Text>
                    Stay connected with unlimited possibilities in the world of tech
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col md={4}>
              <Card className="card-box">
                <Card.Img variant="top" src={imgcard3} />
                <Card.Body>
                  <Card.Title>W D Training & Course</Card.Title>
                  <Card.Text>
                    Web Development Treaining & Certification Course
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Add more rows if needed */}
          <Row className='my-5'>
            {/* Card 4 */}
            <Col md={4}>
              <Card className="card-box">
                <Card.Img variant="top" src={imgcard4} />
                <Card.Body>
                  <Card.Title>Intro Of Cyber Security</Card.Title>
                  <Card.Text>
                    Introduction to cyber security in tech world
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 5 */}
            <Col md={4}>
              <Card className="card-box">
                <Card.Img variant="top" src={imgcard5} />
                <Card.Body>
                  <Card.Title>Web Development Cource</Card.Title>
                  <Card.Text>
                    Build responsive web applications that work seamlessly on any device.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 6 */}
            <Col md={4}>
              <Card className="card-box">
                <Card.Img variant="top" src={imgcard6} />
                <Card.Body>
                  <Card.Title>Cyber Solutions</Card.Title>
                  <Card.Text>
                    Secure your online presence with advanced cyber solutions.
                  </Card.Text>
                  <Button variant="primary">Read More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Coursespage;
