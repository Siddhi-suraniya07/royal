import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaRedditAlien,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCopyright,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Golden Strip */}
      <div style={{ backgroundColor: '#BA7E38' }} className="py-3">
        <Container>
          <Row className="text-center text-md-left justify-content-center">
            <Col md={3} xs={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
              <img src="/f1.png" alt="No Tests On Animals" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#000' }}>No Tests On Animals</span>
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
              <img src="/f2.png" alt="No Animal Ingredients" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#000' }}>No Animal-Derived Ingredients</span>
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
              <img src="/f3.png" alt="No Gluten" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#000' }}>No Gluten, Or Gluten Byproducts</span>
            </Col>
            <Col md={3} xs={6} className="d-flex align-items-center justify-content-center">
              <img src="/f4.png" alt="Recyclable Packaging" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#000' }}>Recyclable Packaging</span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Section */}
      <div style={{ backgroundColor: '#4C0A2E', color: 'white', padding: '40px 0' }}>
        <Container>
          <Row className="text-md-left text-center">
            {/* Logo */}
            <Col md={3} className="mb-8 d-flex align-items-center justify-content-center justify-content-md-start">
              <img src="/royal-logo.png" alt="Raajsi Logo" style={{ width: '120px',position: 'relative', top: '-50px' }} />
            </Col>

            {/* About */}
            <Col md={3} className="mb-4">
              <h5 style={{ fontWeight: '600' }}>About</h5>
              <ul className="list-unstyled" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                <li>Our Essence</li>
                <li>The Royal Promise</li>
                <li>Rediscover Ayurveda</li>
              </ul>
            </Col>

            {/* Products */}
            <Col md={3} className="mb-4">
              <h5 style={{ fontWeight: '600' }}>Products</h5>
              <ul className="list-unstyled" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                <li>Ritual Kits</li>
                <li>Hair Care</li>
                <li>Body Care</li>
                <li>Skin Care</li>
              </ul>
            </Col>

            {/* Subscription */}
            <Col md={3} className="mb-4">
              <h5 style={{ fontWeight: '600' }}>Keep In Touch With Raajsi</h5>
              <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                Join The Raajsi Newsletter And Be First To Hear About News, Offers And Skincare Advice
              </p>

              <Form>
                <div className="d-flex mb-2">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    style={{
                      borderRadius: 0,
                      border: 'none',
                      borderBottom: '1px solid #ccc',
                      backgroundColor: 'transparent',
                      color: 'white',
                    }}
                    className="me-2"
                  />
                  <Button
                    variant="light"
                    size="sm"
                    style={{ borderRadius: 0, paddingLeft: '15px', paddingRight: '15px' }}
                  >
                    Subscribe
                  </Button>
                </div>

                <Form.Check
                  type="checkbox"
                  label={
                    <small style={{ fontSize: '0.7rem', color: '#ccc', lineHeight: '1.3' }}>
                      By Submitting Your Email, You Agree To Receive Advertising Emails From Raajsi. Please Review Our
                      Privacy Policy, Which Includes Our Financial Incentive Notice For CA Residents.
                    </small>
                  }
                  id="privacy-checkbox"
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contact & Social Strip */}
      <div style={{ backgroundColor: '#631E44', color: 'white', padding: '10px 0' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ fontSize: '0.9rem' }}>
              <FaMapMarkerAlt style={{ marginRight: '5px' }} />
              Indore, Vijay Nagar, Palasia
              <span style={{ margin: '0 10px' }}>|</span>
              <FaPhoneAlt style={{ marginRight: '5px' }} />
              1-802-526-2463
            </Col>
            <Col md={6} className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-white mx-2" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="text-white mx-2" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="text-white mx-2" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="text-white mx-2" aria-label="Pinterest"><FaPinterestP /></a>
              <a href="#" className="text-white mx-2" aria-label="Reddit"><FaRedditAlien /></a>
              <a href="#" className="text-white mx-2" aria-label="TikTok"><FaTiktok /></a>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom-most Bar */}
      <div style={{ backgroundColor: '#14010A', color: 'white', fontSize: '0.8rem', padding: '10px 0' }}>
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center justify-content-center justify-content-md-start">
              <FaRegCopyright style={{ marginRight: '5px' }} /> 2024 Raajsi. All Rights Reserved.
            </Col>
            <Col md={6} className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-white mx-3" style={{ fontSize: '0.9rem' }}>Terms & Conditions</a>
              <a href="#" className="text-white mx-3" style={{ fontSize: '0.9rem' }}>Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
