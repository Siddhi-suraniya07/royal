'use client';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  return (
    <>
      <div
        className="position-relative text-white"
        style={{
          height: '98vh',
          backgroundImage: "url('/home-bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          className="custom-overlay-text position-absolute top-50 end-0 translate-middle-y text-end"
          style={{
            maxWidth: '60rem',
            paddingRight: '4rem',
            color: '#ffd700',
            fontFamily: 'Georgia, serif',
            fontSize: '1.8rem',
            lineHeight: '2.5rem',
          }}
        >
          <p>
            मुखं धामुष्कता कस्यपपूर्वां त्वचि दृश्यते <br />
            यया विद्यास्ति चेतसि गुणैर्येव न सायकेः
          </p>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <Link href="#our-essence">
            <i
              className="bi bi-arrow-down-circle"
              style={{
                fontSize: '2rem',
                color: 'rgba(255, 255, 255, 0.8)',
                cursor: 'pointer',
              }}
            ></i>
          </Link>
        </div>
      </div>

      <div
        className="position-relative my-5 py-5"
        id="our-essence"
        style={{ paddingTop: '80px', paddingBottom: '80px', marginTop: '40px', marginBottom: '40px' }}
      >
        <div
          className="d-none d-sm-block"
          style={{
            position: 'absolute',
            top: '90%',
            left: '-50px',
            transform: 'translateY(-50%)',
            height: '380px',
            width: '200px',
            backgroundImage: 'url("/right-side-card.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
            zIndex: 1,
          }}
        ></div>

        <div
          className="d-none d-sm-block"
          style={{
            position: 'absolute',
            top: '90%',
            right: '-50px',
            transform: 'translateY(-50%)',
            height: '380px',
            width: '200px',
            backgroundImage: 'url("/left-card.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
            zIndex: 1,
          }}
        ></div>

        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div
                style={{
                  height: '410px',
                  width: '310px',
                  backgroundImage: 'url("/card1.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '12px',
                }}
              ></div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <h2 style={{ color: '#61003C', fontWeight: '600' }}>OUR ESSENCE</h2>
              <p style={{ color: '#6B4A18', fontSize: '1.1rem' }}>
                मृदुः धातूनां केममपूर्वं त्वचि दृश्यते<br />
                यथा विद्यास्ति चैतन्यं गुणैरेव न सायकेः
              </p>
              <p className="fst-italic mt-2">
                Raajsi is a premium ayurvedic beauty and wellness brand with a royal touch.
              </p>
              <button
                className="btn btn-warning mt-3 px-4 py-2"
                style={{ borderRadius: '25px' }}
              >
                EXPLORE ESSENCE
              </button>
            </div>

            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div
                style={{
                  height: '410px',
                  width: '310px',
                  top: '90%',
                  backgroundImage: 'url("/card2.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  borderRadius: '12px',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-overlay-text {
          max-width: 60rem;
          color: #ffd700;
          font-family: Georgia, serif;
          font-size: 1.8rem;
          line-height: 2.5rem;
        }

        @media (max-width: 768px) {
          .custom-overlay-text {
            max-width: 90%;
            right: 1rem;
            left: 1rem;
            font-size: 1.3rem;
            line-height: 2rem;
          }
        }

        @media (max-width: 480px) {
          .custom-overlay-text {
            font-size: 1.1rem;
            line-height: 1.6rem;
          }
        }
      `}</style>

      <section
        className="position-relative"
        style={{
          backgroundImage: "url('/background3.png')",
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          marginTop: '170px',
          minHeight: '106vh',
          paddingTop: '190px',
          paddingBottom: '80px',
        }}
      >
        <div
          className="position-absolute w-100"
          style={{
            top: '30px',
            left: 0,
            textAlign: 'center',
          }}
        >
          <div className="row justify-content-center align-items-center">
            <div className="col-auto d-flex justify-content-end">
              <img
                src="/right-design.png"
                alt="Left Icon"
                style={{
                  maxWidth: '40px',
                  transform: 'rotate(180deg)',
                  opacity: 0.8,
                }}
              />
            </div>

            <div className="col-auto">
              <h2
                style={{
                  color: '#61003C',
                  fontFamily: 'Georgia, serif',
                  fontWeight: 'bold',
                  fontSize: '1.8rem',
                  letterSpacing: '1px',
                  margin: 0,
                }}
              >
                STEP INTO ROYAL INDULGENCE
              </h2>
            </div>

            <div className="col-auto d-flex justify-content-start">
              <img
                src="/right-design.png"
                alt="Right Icon"
                style={{
                  maxWidth: '40px',
                  opacity: 0.8,
                }}
              />
            </div>
          </div>

          <div className="container" style={{ marginTop: '50px' }}>
            <div
              className="row mx-auto shadow-lg p-4"
              style={{
                borderRadius: '20px',
                backgroundColor: 'white',
                maxWidth: '80%',
              }}
            >
              <div className="col-md-7 d-flex flex-column align-items-start fade-in-left" style={{ marginTop: '40px' }}>
                <h5
                  style={{
                    color: '#4C0A2E',
                    fontFamily: 'Rose Velt',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                  }}
                >
                  From Palace to You: A Body Ritual
                </h5>

                <div className="col-md-7 px-0 d-flex flex-column align-items-start text-start">
                  <p
                    style={{
                      fontSize: '14px',
                      font: 'Avenir',
                      fontStyle: 'roman',
                      fontWeight: '400',
                      color: '#333',
                      lineHeight: '114%',
                      letterSpacing: '0%',
                    }}
                  >
                    Rani Padmavati of Chittor indulged in luxurious urban rituals — an age-old body remedy made with
                    sandalwood, turmeric, lentils, and rose petals. Applied before her ceremonial baths, this exfoliating paste, followed by herbal oil massages, wasn’t just for beauty — it was a sacred act of self-rejuvenation. At Raajsi, we revive this royal tradition through our body oils, scrubs, and soaps, bringing timeless radiance to your modern-day rituals.
                  </p>
                </div>

                <p className="fst-italic" style={{ fontSize: '0.95rem' }}>
                  Step into royal indulgence.
                </p>

                <button
                  className="btn mt-3 px-4 py-2"
                  style={{
                    backgroundColor: '#61003C',
                    color: 'white',
                    borderRadius: '20px',
                    width: 'fit-content',
                  }}
                >
                  VIEW PRODUCTS
                </button>
              </div>

              <div className="col-md-5 text-center mt-4 mt-md-0">
                <img
                  src="/image3.png"
                  alt="Royal Ritual"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: '100px',
                    borderTopRightRadius: '100px',
                    maxHeight: '380px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

            <section>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div
                      className="left-text-strip px-4 py-4"
                      style={{
                        backgroundColor: '#4e3b00',
                        color: '#FFD700',
                        fontFamily: 'Georgia, serif',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        textAlign: 'center',
                        maxWidth: '82%',
                        margin: '0 auto',
                        marginTop: '-30px',
                      }}
                    >
                      Radiance of the Rajput Ranis — Skin Alchemy
                    </div>

                    <div
                      className="left-text-strip px-4 py-4"
                      style={{
                        backgroundColor: '#a18b5a',
                        color: '#fff',
                        fontFamily: 'Georgia, serif',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        textAlign: 'center',
                        maxWidth: '82%',
                        margin: '0 auto',
                        marginTop: '-20px',
                      }}
                    >
                      Hair Elixirs Tresses of Tradition
                    </div>

                    <div
                      className="left-text-strip px-4 py-4"
                      style={{
                        backgroundColor: '#cab88e',
                        color: '#4e3b00',
                        fontFamily: 'Georgia, serif',
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        borderTopLeftRadius: '20px',
                        borderTopRightRadius: '20px',
                        borderBottomLeftRadius: '0',
                        borderBottomRightRadius: '0',
                        textAlign: 'center',
                        maxWidth: '82%',
                        margin: '0 auto',
                        marginTop: '-20px',
                      }}
                    >
                      Ritual Kits Anointing Grace
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="featured-products-section py-5" style={{ backgroundColor: '#fff' }}>
  <div className="container">
    <div className="row justify-content-center align-items-center mb-4">
      {/* Left Icon */}
      <div className="col-auto d-flex justify-content-end">
        <img
          src="/left-design.png" // replace with your actual path
          alt="Left Decor"
          style={{ maxWidth: '30px', opacity: 0.8 }}
        />
      </div>

      {/* Heading Text */}
      <div className="col-auto text-center">
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            color: '#4C0A2E',
            fontWeight: 'bold',
            fontSize: '1.6rem',
            letterSpacing: '1px',
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          Featured Products
        </h2>
      </div>

      {/* Right Icon */}
      <div className="col-auto d-flex justify-content-start">
        <img
          src="/right-design.png" // replace with your actual path
          alt="Right Decor"
          style={{ maxWidth: '30px', opacity: 0.8 }}
        />
      </div>
    </div>
  </div>
  <div className="row justify-content-center my-4">
  <div
    className="d-flex justify-content-center align-items-center"
    style={{
      backgroundColor: '#f5f0eb',
      borderRadius: '30px',
      padding: '6px 10px',
      maxWidth: '600px',
    }}
  >
    <button
      className="me-2"
      style={{
        backgroundColor: '#4C0A2E',
        color: '#fff',
        border: 'none',
        borderRadius: '25px',
        padding: '6px 18px',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}
    >
      BODY THERAPY
    </button>
    <button
      className="me-2"
      style={{
        backgroundColor: 'transparent',
        color: '#4C0A2E',
        border: 'none',
        borderRadius: '25px',
        padding: '6px 18px',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}
    >
      SKIN THERAPY
    </button>
    <button
      className="me-2"
      style={{
        backgroundColor: 'transparent',
        color: '#4C0A2E',
        border: 'none',
        borderRadius: '25px',
        padding: '6px 18px',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}
    >
      HAIR THERAPY
    </button>
    <button
      style={{
        backgroundColor: 'transparent',
        color: '#4C0A2E',
        border: 'none',
        borderRadius: '25px',
        padding: '6px 18px',
        fontSize: '0.9rem',
        fontWeight: '500',
      }}
    >
      RITUAL KIT
    </button>
  </div>
</div>
<div className="container mt-4">
  <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-md-6 d-flex flex-column align-items-center mb-4">
            <div
              className="card"
              style={{
                width: '100%',
                maxWidth: '90%',
                height: '350px',
                backgroundImage: `url('/card11.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
              }}
            >
                {/* Shloka at top-left */}
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: '#fff',
        fontSize: '0.75rem',
        fontFamily: 'Georgia, serif',
        maxWidth: '65%',
        lineHeight: '1.4',
        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '6px 8px',
        borderRadius: '6px',
      }}
    >
      मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
      यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
    </div>
    {/* Button at top-right */}
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        // backgroundColor: 'rgba(255,255,255,0.7)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#333',
        padding: '4px 10px',
        fontSize: '0.7rem',
        borderRadius: '20px',
        fontWeight: 500,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      Ingredients & Benefits
    </div>


              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                //   background: 'rgba(0, 0, 0, 0.4)',
                  color: '#fff',
                  padding: '1rem',
                  fontFamily: 'Georgia, serif',
                }}
              >
                <h5>COSMIC BODY OIL</h5>
                <p style={{ fontSize: '18px' }}>
                  Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt melt in you body and leaving you nourishing and calm
                </p>
              </div>
            </div>
            {/* Button & Price */}
            <div className="d-flex justify-content-between w-100 px-4 mt-2">
              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: '#8B5E3C',
                  color: 'white',
                  borderRadius: '30px',
                  maxWidth: '194px',
                  maxHeight: '52px',
                  top: '3109px',
                  left: '901px'
                }}
              >
                VIEW PRODUCT
              </button>
              <div className="text-end">
                <strong>₹1800</strong>
                <div style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: 'gray' }}>
                 Get 50% OFF  ₹2400
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 d-flex flex-column align-items-center mb-4">
            <div
              className="card"
              style={{
                width: '100%',
                maxWidth: '90%',
                height: '350px',
                backgroundImage: `url('/card12.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '15px',
              }}
            >
                {/* Shloka at top-left */}
    <div
      style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: '#fff',
        fontSize: '0.75rem',
        fontFamily: 'Georgia, serif',
        maxWidth: '65%',
        lineHeight: '1.4',
        // backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: '6px 8px',
        borderRadius: '6px',
      }}
    >
      मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
      यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
    </div>
    {/* Button at top-right */}
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        // backgroundColor: 'rgba(255,255,255,0.7)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',

        color: '#333',
        padding: '4px 10px',
        fontSize: '0.7rem',
        borderRadius: '20px',
        fontWeight: 500,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      Ingredients & Benefits
    </div>


              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  width: '100%',
                //   background: 'rgba(0, 0, 0, 0.4)',
                  color: '#fff',
                  padding: '1rem',
                  fontFamily: 'Georgia, serif',
                  fontSize: '25px',
                }}
              >
                <h5>LAVISH BODY SCRUB</h5>
                <p style={{ fontSize: '18px' }}>
                  A royal touch to desi household ingredients crafted for indulgence suitable for all skin types and achieve smmothness
                </p>
              </div>
            </div>
            {/* Button & Price */}
            <div className="d-flex justify-content-between w-100 px-4 mt-2">
              <button
                className="btn btn-sm"
                style={{
                  backgroundColor: '#8B5E3C',
                  color: 'white',
                //   borderRadius: '20px',
                 borderRadius: '30px',
                  maxWidth: '194px',
                  maxHeight: '52px',
                  top: '3109px',
                  left: '901px'
                }}
              >
                VIEW PRODUCT
              </button>
              <div className="text-end">
                <strong>₹1600</strong>
                <div style={{ fontSize: '0.75rem', textDecoration: 'line-through', color: 'gray' }}>
                  Get 50% off ₹2000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Item 2 with Card 3 & 4 — replicate structure as above */}
    </div>

    {/* Carousel Controls */}
   <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#productCarousel"
  data-bs-slide="prev"
  style={{
    width: '60px',
    height: '60px',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '0.4px',
    backgroundColor: '#000000',
    color: '#000000',
    border: 'none',
    position: 'absolute',
    zIndex: 10,
  }}
>
  <span
    className="carousel-control-prev-icon"
    aria-hidden="true"
    style={{
      filter: 'invert(20%)',
      width: '100%',
      height: '100%',
    }}
  />
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#productCarousel"
  data-bs-slide="next"
  style={{
    width: '60px',
    height: '60px',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '-3px',
    backgroundColor: '#000000',
    color : '#000000',
    border: 'none',
    position: 'absolute',
    // zIndex: 10,
  }}
>
  <span
    className="carousel-control-next-icon"
    aria-hidden="true"
    style={{
      filter: 'invert(20%)',
      width: '100%',
      height: '100%',
    }}
  />
</button>

  </div>
</div>

</section>

<section
  className="royal-promise-section my-5"
  style={{
    backgroundImage: "url('/background4.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px',
    overflow: 'hidden',
    margin: '60px auto',
    maxWidth: '78%',
    height: '530px',
  }}
>
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      
      {/* Left Text + Decorative Image */}
      <div className="col-md-6 text-white px-4 d-flex flex-column justify-content-center h-100 position-relative">
        
        {/* Decorative image in background */}
        <img
          src="/design.png"
          alt="Floral Design"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '400px',
            width: '242px',
            height: '192px',
            opacity: 1,
            zIndex: 2,
          }}
        />

        {/* Text Content */}
        <h3
          style={{
            fontFamily: 'Rose Velt',
            color: '#FFD700',
            position: 'relative',
            left: '20px',
            fontWeight: '400px',
            fontSize: '32px',
            lineHeight: '100%',
            letterSpacing: '0%',
            font: 'regular',
            top: '0.5',
          }}
        >
          THE ROYAL PROMISE
        </h3>

        <p
          style={{
            fontFamily: 'Roman',
            color: 'white',
            position: 'relative',
            zIndex: 1,
            left: '20px',
            fontSize: '16px',
          }}
        >
          At Raajsi, luxury meets responsibility. Our royal promise is built on integrity, transparency,
          and timeless care — for you and the planet.
        </p>

        <p
          className="fst-italic"
          style={{
            color: '#fff',
            fontWeight: '500',
            position: 'relative',
            zIndex: 1,
            left: '20px',
          }}
        >
          <strong>
            <em>Time-tested formulas derived from ancient sciences and scriptures</em>
          </strong>
        </p>

        <p
          style={{
            fontFamily: 'Avenir',
            fontStyle: 'Roman',
            color: 'white',
            position: 'relative',
            zIndex: 1,
            left: '20px',
            fontSize: '20px',
            fontWeight: '400',
          }}
        >
          Rooted in Ayurveda and proven through generations of ritual wisdom.
        </p>

        {/* Decorative dots */}
        <div className="d-flex gap-2 my-3 ms-4">
          <span
            style={{
              height: '5px',
              width: '18px',
              borderRadius: '20%',
              backgroundColor: '#fff',
              opacity: 0.5,
            }}
          ></span>
          <span
            style={{
              height: '5px',
              width: '18px',
              borderRadius: '20%',
              backgroundColor: '#fff',
              opacity: 0.5,
            }}
          ></span>
          <span
            style={{
              height: '5px',
              width: '18px',
              borderRadius: '20%',
              backgroundColor: '#fff',
              opacity: 0.5,
            }}
          ></span>
          <span
            style={{
              height: '5px',
              width: '18px',
              borderRadius: '20%',
              backgroundColor: '#fff',
            }}
          ></span>
        </div>

        {/* Explore Button */}
        <button
          className="btn mt-3"
          style={{
            backgroundColor: '#BA7E38',
            color: '#4C0A2E',
            borderRadius: '20px',
            padding: '8px 24px',
            fontWeight: 'bold',
            position: 'relative',
            height: '52px',
            width: '192px',
            zIndex: 1,
            left: '20px',
          }}
        >
          EXPLORE
        </button>
      </div>

      {/* Right Image */}
      <div className="col-md-6 h-100 d-flex justify-content-end align-items-center">
        <img
          src="/image4.png"
          alt="Royal Rani"
          style={{
            height: '100%',
            width: 'auto',
            borderRadius: '20px',
            objectFit: 'contain',
          }}
        />
      </div>
    </div>
  </div>
</section>


<section
  className="blog-section py-5"
  style={{
    backgroundImage: "url('/background3.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="container">
    <h2 className="text-center mb-5" style={{ fontFamily: 'Georgia, serif', color: '#2c1e1e' }}>
      BLOGS
    </h2>

    <div className="row justify-content-center g-4">
      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0 rounded-4">
          <img src="/card51.png" alt="Blog 1" className="card-img-top rounded-top-4" />
          <div className="card-body">
            <h6 className="card-title">Natural Ingredients connect it to actual people</h6>
            <div className="d-flex justify-content-between text-muted small mb-2">
              <span>June 28, 2018</span>
              <span><i className="bi bi-share-fill me-1"></i> 1K shares</span>
            </div>
            <a href="#" className="text-decoration-underline text-dark fw-semibold">Read Blog</a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 position-relative">
          <img src="/card52.png" alt="Blog 2" className="card-img-top rounded-top-4" />
          <div className="card-body">
            <h6 className="card-title">Royalties - rituals, fact boxes Rani Padmavati</h6>
            <div className="d-flex justify-content-between text-muted small mb-2">
              <span>June 28, 2018</span>
              <span><i className="bi bi-share-fill me-1"></i> 1K shares</span>
            </div>
            <a href="#" className="text-decoration-underline text-dark fw-semibold">Read Blog</a>
          </div>
          <span
            style={{
              position: 'absolute',
              bottom: '60px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'red',
            }}
          />
        </div>
      </div>

      <div className="col-md-4">
        <div className="card h-100 shadow-sm border-0 rounded-4">
          <img src="/card53.png" alt="Blog 3" className="card-img-top rounded-top-4" />
          <div className="card-body">
            <h6 className="card-title">Royalties - rituals, fact boxes Rani Padmavati</h6>
            <div className="d-flex justify-content-between text-muted small mb-2">
              <span>June 28, 2018</span>
              <span><i className="bi bi-share-fill me-1"></i> 1K shares</span>
            </div>
            <a href="#" className="text-decoration-underline text-dark fw-semibold">Read Blog</a>
          </div>
        </div>
      </div>
    </div>

    <div className="text-center mt-5">
      <button
        className="btn px-5 py-2"
        style={{
          backgroundColor: '#4C0A2E',
          color: '#fff',
          borderRadius: '25px',
          fontWeight: '600',
          letterSpacing: '1px',
        }}
      >
        VIEW ALL
      </button>
    </div>
  </div>
</section>

<section className="faq-section py-5 my-5">
  <div className="container text-center">
    <p className="text-muted mb-1" style={{ fontSize: '24px' }}>
      Frequently asked questions
    </p>
    <h2 style={{ fontFamily: 'Georgia, serif', fontWeight: '300' }}>
      HAVE QUESTIONS?
      <br />
      GET ANSWERS
    </h2>

    <div className="accordion mt-5 mx-auto" id="faqAccordion" style={{ maxWidth: '700px' }}>
      {[
        'Is Raajsi for me?',
        'Is Raajsi safe?',
        'Do you offer free shipping?',
        'Where do you ship?',
        'How long does delivery take?',
        "What if Raajsi doesn't work for me?",
      ].map((question, index) => (
        <div
          className="accordion-item border-0 border-bottom"
          style={{ borderBottom: '2px solid #2e2e2e' }}
          key={index}
        >
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed px-0 py-3 d-flex justify-content-between align-items-center"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
              style={{
                fontWeight: '600',
                fontSize: '18px',
                backgroundColor: 'transparent',
                boxShadow: 'none',
              }}
            >
              <span>{question}</span>
              <span
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#E0E0E0',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: '#333',
                }}
              >
                +
              </span>
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#faqAccordion"
          >
            <div
              className="accordion-body text-start px-0 py-2 text-muted"
              style={{ fontSize: '15px' }}
            >
              This is the answer to the question. You can customize this content.
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>






    </>
  );
}
