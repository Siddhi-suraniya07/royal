"use client";

import React from 'react';
import './Footer.css'; 
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
              <span style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>No Tests On Animals</span>
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
              <img src="/f2.png" alt="No Animal Ingredients" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>No Animal-Derived Ingredients</span>
            </Col>
            <Col md={3} xs={6} className="mb-3 mb-md-0 d-flex align-items-center justify-content-center">
              <img src="/f3.png" alt="No Gluten" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>No Gluten, Or Gluten Byproducts</span>
            </Col>
            <Col md={3} xs={6} className="d-flex align-items-center justify-content-center">
              <img src="/f4.png" alt="Recyclable Packaging" style={{ height: '30px', marginRight: '10px' }} />
              <span style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>Recyclable Packaging</span>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Section */}
      <div style={{ backgroundColor: '#4C0A2E', color: 'white', padding: '40px 0', height: '300px' }}>
        <Container>
          <Row className="text-md-left">
            {/* Logo */}
            <Col md={3} className="mb-8 d-flex flex-column align-items-start justify-content-start">
              <img src="/royal-logo.png" alt="Raajsi Logo" style={{ width: '120px', marginTop: '20px' }} />
            </Col>

            {/* About */}
            <Col md={3} className="mb-4 d-flex flex-column align-items-start">
              <h5 style={{ fontWeight: '600', marginBottom: '15px' }}>About</h5>
              <ul className="list-unstyled" style={{ lineHeight: '1.6', fontSize: '0.95rem', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '6px' }}>Our Essence</li>
                <li style={{ marginBottom: '6px' }}>The Royal Promise</li>
                <li style={{ marginBottom: '6px' }}>Rediscover Ayurveda</li>
              </ul>
            </Col>

            {/* Products */}
            <Col md={3} className="mb-4 d-flex flex-column align-items-start">
              <h5 style={{ fontWeight: '600', marginBottom: '15px' }}>Products</h5>
              <ul className="list-unstyled" style={{ lineHeight: '1.6', fontSize: '0.95rem', margin: 0, padding: 0 }}>
                <li style={{ marginBottom: '6px' }}>Ritual Kits</li>
                <li style={{ marginBottom: '6px' }}>Hair Care</li>
                <li style={{ marginBottom: '6px' }}>Body Care</li>
                <li style={{ marginBottom: '6px' }}>Skin Care</li>
              </ul>
            </Col>

            {/* Subscription */}
            <Col md={3} className="mb-4 d-flex flex-column align-items-start">
              <h5 style={{ fontWeight: '600', marginBottom: '15px' }}>Keep In Touch With Raajsi</h5>
              <p style={{ fontSize: '0.8rem', marginBottom: '20px', lineHeight: '1.2', width: '100%', maxWidth: '320px' }}>
                Join The Raajsi Newsletter And Be First To Hear About News, Offers And Skincare Advice
              </p>

              <Form>
                <div className="mb-3">
                  <div className="d-flex mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      style={{
                        borderRadius: 0,
                        border: 'none',
                        color: 'white',
                        borderBottom: '1px solid #ccc',
                        backgroundColor: 'transparent',
                        flex: 1,
                        padding: '8px 0'
                      }}
                      className="me-3 white-placeholder"
                    />
                    <Button
                      variant="light"
                      size="sm"
                      style={{ 
                        borderRadius: 0, 
                        paddingLeft: '20px', 
                        paddingRight: '20px',
                        backgroundColor: 'white',
                        color: '#4C0A2E',
                        border: 'none',
                        fontWeight: '500'
                      }}
                    >
                      Subscribe
                    </Button>
                  </div>
                   <style >{`
    .white-placeholder::placeholder {
      color: white;      /* Makes placeholder visible */
      opacity: 1;        /* Full opacity so it's bright */
    }
  `}</style>
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
              <FaRegCopyright style={{ marginRight: '5px' }} /> 2025 Raajsi. All Rights Reserved.
            </Col>
            <Col md={6} className="d-flex justify-content-center justify-content-md-end">
              <a href="#" className="text-white mx-3" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>Terms & Conditions</a>
              <a href="#" className="text-white mx-3" style={{ fontSize: '0.9rem', textDecoration: 'none' }}>Privacy Policy</a>
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .white-placeholder::placeholder {
          color: white;
          opacity: 0.9;
        }

        @media (max-width: 600px) {
          .py-3, .py-3 > .container, .py-3 > .container > .row {
            padding: 10px 0 !important;
          }
          .py-3 .col-6, .py-3 .col-md-3 {
            flex: 0 0 100% !important;
            max-width: 100% !important;
            margin-bottom: 8px !important;
            justify-content: flex-start !important;
          }
          .py-3 img {
            height: 22px !important;
            margin-right: 6px !important;
          }
          .py-3 span {
            font-size: 0.85rem !important;
          }
          .py-3 .row {
            flex-wrap: wrap !important;
          }
          .py-3 .col-6:last-child, .py-3 .col-md-3:last-child {
            margin-bottom: 0 !important;
          }
          /* Main footer */
          div[style*='#4C0A2E'] {
            padding: 18px 0 !important;
          }
          div[style*='#4C0A2E'] .row {
            flex-direction: column !important;
            text-align: left !important;
            gap: 10px !important;
          }
          div[style*='#4C0A2E'] .col-md-3 {
            margin-bottom: 12px !important;
            justify-content: flex-start !important;
            align-items: flex-start !important;
            display: flex !important;
            flex-direction: column !important;
          }
          div[style*='#4C0A2E'] img {
            width: 80px !important;
            top: 0 !important;
            margin-bottom: 8px !important;
          }
          div[style*='#4C0A2E'] h5 {
            font-size: 1.05rem !important;
            margin-bottom: 6px !important;
          }
          div[style*='#4C0A2E'] ul, div[style*='#4C0A2E'] p {
            font-size: 0.92rem !important;
            margin-bottom: 6px !important;
          }
          div[style*='#4C0A2E'] .btn, div[style*='#4C0A2E'] input {
            font-size: 0.92rem !important;
            padding: 6px 8px !important;
          }
          /* Contact & Social */
          div[style*='#631E44'] .row {
            flex-direction: column !important;
            gap: 8px !important;
            text-align: left !important;
          }
          div[style*='#631E44'] .col-md-6 {
            justify-content: flex-start !important;
            align-items: flex-start !important;
            font-size: 0.88rem !important;
            margin-bottom: 4px !important;
          }
          div[style*='#631E44'] a {
            font-size: 1.1rem !important;
            margin: 0 4px !important;
          }
          /* Bottom bar */
          div[style*='#14010A'] .row {
            flex-direction: column !important;
            gap: 6px !important;
            text-align: left !important;
          }
          div[style*='#14010A'] .col-md-6 {
            justify-content: flex-start !important;
            align-items: flex-start !important;
            font-size: 0.82rem !important;
            margin-bottom: 2px !important;
          }
          div[style*='#14010A'] a {
            font-size: 0.88rem !important;
            margin: 0 2px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
