"use client";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function HomePage({ onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showNextSection, setShowNextSection] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [strip1Visible, setStrip1Visible] = useState(false);
  const [strip2Visible, setStrip2Visible] = useState(false);
  const [strip3Visible, setStrip3Visible] = useState(false);
  const [royalPromiseSlide, setRoyalPromiseSlide] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Royal Promises content
  const ROYAL_PROMISES = [
    {
      title: "THE ROYAL PROMISE",
      description: "At Raajsi, luxury meets responsibility. Our royal promise is built on integrity, transparency, and timeless care — for you and the planet.",
      highlight: "Time-tested formulas derived from ancient sciences and scriptures",
      detail: "Rooted in Ayurveda and proven through generations of ritual wisdom.",
      image: "/image4.png"
    },
    {
      title: "THE ROYAL PROMISE",
      description: "At Raajsi, luxury meets responsibility. Our royal promise is built on integrity, transparency, and timeless care — for you and the planet.",
      highlight: "Time-tested formulas derived from ancient sciences and scriptures",
      detail: "Rooted in Ayurveda and proven through generations of ritual wisdom.",
      image: "/image4.png"
    },
    {
      title: "THE ROYAL PROMISE",
      description: "At Raajsi, luxury meets responsibility. Our royal promise is built on integrity, transparency, and timeless care — for you and the planet.",
      highlight: "Time-tested formulas derived from ancient sciences and scriptures",
      detail: "Rooted in Ayurveda and proven through generations of ritual wisdom.",
      image: "/image4.png"
    }
  ];
  
  const SECTIONS = [
    {
      key: "body-therapy",
      badge: "BODY THERAPY",
      badgeStyle: { backgroundColor: "#4C0A2E", color: "#fff" },
    },
    {
      key: "skin-therapy",
      badge: "SKIN THERAPY",
      badgeStyle: { backgroundColor: "#4C0A2E", color: "#fff" },
    },
    {
      key: "hair-therapy",
      badge: "HAIR THERAPY",
      badgeStyle: { backgroundColor: "#4C0A2E", color: "#fff" },
    },
    {
      key: "ritual-kit",
      badge: "RITUAL KIT",
      badgeStyle: { backgroundColor: "#4C0A2E", color: "#fff" },
    },
  ];
  const CARDS = [
    {
      image: "/card11.png",
      title: "COSMIC BODY OIL",
      desc:
        "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm.",
      price: "₹1800",
      oldPrice: "₹2400",
    },
    {
      image: "/card12.png",
      title: "LAVISH BODY SCRUB",
      desc:
        "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin.",
      price: "₹1600",
      oldPrice: "₹2000",
    },
    {
      image: "/card21.png",
      title: "ROYAL FACE SERUM",
      desc:
        "A luxurious blend of natural ingredients designed to rejuvenate and brighten your skin, revealing your natural radiance.",
      price: "₹2200",
      oldPrice: "₹2800",
    },
    {
      image: "/card22.png",
      title: "DIVINE HAIR OIL",
      desc:
        "Nourish your hair with this ancient formula that strengthens roots and promotes healthy, lustrous hair growth.",
      price: "₹1400",
      oldPrice: "₹1800",
    },
    {
      image: "/card11.png",
      title: "SACRED BATH SALT",
      desc:
        "Transform your bathing experience with these therapeutic salts that relax your mind and soothe your body.",
      price: "₹1200",
      oldPrice: "₹1500",
    },
  ];
  const [sectionIdx, setSectionIdx] = useState(0);
  const [cardStartIndex, setCardStartIndex] = useState(0);
  const section = SECTIONS[sectionIdx];
  
  // Background images for slides
  const backgroundImages = [
    "/home-bg.png",
    "/featured-bg.png", // You can replace with different images
    "/home-bg.png"  // You can replace with different images
  ];
  
  const handlePrev = () => {
    setSectionIdx((prev) => (prev === 0 ? SECTIONS.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setSectionIdx((prev) => (prev === SECTIONS.length - 1 ? 0 : prev + 1));
  };
  
  // Card carousel functions
  const handleCardPrev = () => {
    setCardStartIndex((prev) => {
      const newIndex = Math.max(0, prev - 1);
      // Update section index based on card position
      const newSectionIndex = Math.floor(newIndex / 2);
      setSectionIdx(newSectionIndex);
      return newIndex;
    });
  };
  const handleCardNext = () => {
    setCardStartIndex((prev) => {
      const newIndex = Math.min(CARDS.length - 1, prev + 1); // Changed to stop at last card
      // Update section index based on card position
      const newSectionIndex = Math.floor(newIndex / 2);
      setSectionIdx(newSectionIndex);
      return newIndex;
    });
  };
  const handleTabClick = (idx) => {
    setSectionIdx(idx);
    // Update card position based on section
    setCardStartIndex(idx * 2);
  };

  // Card navigation functions
  const handleCardClick = (cardIndex) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentCardIndex(cardIndex);
    
    // If this is the last card (index 2), show next section after animation
    if (cardIndex === 2) {
      setTimeout(() => {
        setShowNextSection(true);
        // Scroll to next section
        document.getElementById('featured-products-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }, 1000);
    }
    
    // Reset transition after animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const resetToOriginal = () => {
    setCurrentCardIndex(0);
    setShowNextSection(false);
  };

  // Touch/swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 80; // Increased threshold to prevent accidental scrolls
    const isRightSwipe = distance < -80; // Increased threshold to prevent accidental scrolls

    if (isLeftSwipe && cardStartIndex < CARDS.length - 1) { // Changed to stop at last card
      handleCardNext();
    }
    if (isRightSwipe && cardStartIndex > 0) {
      handleCardPrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag functionality
  const [mouseStart, setMouseStart] = useState(null);
  const [mouseEnd, setMouseEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setMouseStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setMouseEnd(e.clientX);
  };

  const handleMouseUp = () => {
    if (!mouseStart || !mouseEnd || !isDragging) return;
    
    const distance = mouseStart - mouseEnd;
    const isLeftSwipe = distance > 80; // Increased threshold
    const isRightSwipe = distance < -80; // Increased threshold

    if (isLeftSwipe && cardStartIndex < CARDS.length - 1) { // Changed to stop at last card
      handleCardNext();
    }
    if (isRightSwipe && cardStartIndex > 0) {
      handleCardPrev();
    }

    setMouseStart(null);
    setMouseEnd(null);
    setIsDragging(false);
  };

  // Wheel event for touchpad scrolling
  const handleWheel = (e) => {
    e.preventDefault();
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 50) { // Added minimum threshold
      // Horizontal scroll detected with minimum threshold
      if (e.deltaX > 0 && cardStartIndex < CARDS.length - 1) { // Changed to stop at last card
        handleCardNext();
      } else if (e.deltaX < 0 && cardStartIndex > 0) {
        handleCardPrev();
      }
    }
  };

  // Parallax scroll handler for card animations
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);
      
      // Get the royal indulgence section
      const royalSection = document.getElementById('royal-indulgence-section');
      if (royalSection) {
        const sectionTop = royalSection.offsetTop;
        const sectionHeight = royalSection.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Parallax effect calculations
        const scrollProgress = (scrollPosition - sectionTop) / (sectionHeight - windowHeight);
        const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Staggered card reveal with parallax
        const strip1Threshold = 0.2; // 20% scroll progress
        const strip2Threshold = 0.5; // 50% scroll progress
        const strip3Threshold = 0.8; // 80% scroll progress
        
        setStrip1Visible(normalizedProgress >= strip1Threshold);
        setStrip2Visible(normalizedProgress >= strip2Threshold);
        setStrip3Visible(normalizedProgress >= strip3Threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className="position-relative text-white"
        style={{
          height: "100vh",
          backgroundImage: `url('${backgroundImages[currentSlide]}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => console.log('Current slide:', currentSlide, 'Image:', backgroundImages[currentSlide])}
      >
        <div
          className="custom-overlay-text position-absolute text-center"
          style={{
            width: "634px",
            height: "171px",
            top: "210px",
            left: "774px",
            color: "#FFFFFF",
            fontFamily: "Abel, sans-serif",
            fontSize: "30px",
            lineHeight: "140%",
            letterSpacing: "0%",
            textAlign: "center",
            textShadow: "0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2), 0 0 60px rgba(255, 255, 255, 0.1)",
            mixBlendMode: "soft-light",
          }}
        >
          <p>
            मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
            यया विध्यसि चेतांसि गुणैरेव न सायकैः
          </p>
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <Link href="#our-essence" style={{ textDecoration: "none" }}>
            <span
              style={{
                width: "32px",
                height: "32px",
                border: "1px solid #FFFFFF",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
              }}
            >
              &#8595;
            </span>
          </Link>
        </div>
        
        {/* Slider Lines - Horizontal */}
        <div className="position-absolute bottom-0 end-0 mb-4 me-4">
          <div className="d-flex gap-2">
            <div
              onClick={() => setCurrentSlide(0)}
              style={{
                width: currentSlide === 0 ? "50px" : "30px",
                height: "5px",
                backgroundColor: currentSlide === 0 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            ></div>
            <div
              onClick={() => setCurrentSlide(1)}
              style={{
                width: currentSlide === 1 ? "50px" : "30px",
                height: "5px",
                backgroundColor: currentSlide === 1 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            ></div>
            <div
              onClick={() => setCurrentSlide(2)}
              style={{
                width: currentSlide === 2 ? "50px" : "30px",
                height: "5px",
                backgroundColor: currentSlide === 2 ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.4)",
                borderRadius: "3px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            ></div>
          </div>
        </div>
      </div>

      <div
        className="position-relative my-5 py-5"
        id="our-essence"
        style={{
          paddingTop: "80px",
          paddingBottom: "80px",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <div
          className="d-none d-sm-block"
          style={{
            position: "absolute",
            top: "90%",
            left: "-50px",
            transform: "translateY(-50%)",
            height: "380px",
            width: "200px",
            backgroundImage: 'url("/right-side-card.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "12px",
            zIndex: 1,
          }}
        ></div>

        <div
          className="d-none d-sm-block"
          style={{
            position: "absolute",
            top: "90%",
            right: "-50px",
            transform: "translateY(-50%)",
            height: "380px",
            width: "200px",
            backgroundImage: 'url("/left-card.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "12px",
            zIndex: 1,
          }}
        ></div>

        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div
                style={{
                  height: "410px",
                  width: "310px",
                  backgroundImage: 'url("/card1.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "12px",
                }}
              ></div>
            </div>

            <div className="col-12 col-md-4 mb-4">
              <h2 style={{ color: "#61003C", fontWeight: "600" }}>
                OUR ESSENCE
              </h2>
              <p style={{ color: "#6B4A18", fontSize: "1.1rem" }}>
                मृदुः धातूनां केममपूर्वं त्वचि दृश्यते
                <br />
                यथा विद्यास्ति चैतन्यं गुणैरेव न सायकेः
              </p>
              <p className="fst-italic mt-2">
                Raajsi is a premium ayurvedic beauty and wellness brand with a
                royal touch.
              </p>
              <Link href="/our-essence" passHref legacyBehavior>
                <a
                  className="btn btn-warning mt-3 px-4 py-2"
                  style={{ borderRadius: "25px" }}
                >
                  EXPLORE ESSENCE
                </a>
              </Link>
            </div>

            <div className="col-12 col-md-4 mb-4 d-flex justify-content-center">
              <div
                style={{
                  height: "410px",
                  width: "310px",
                  top: "90%",
                  backgroundImage: 'url("/card2.png")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "12px",
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
            max-width: 30%;
            right: 1rem;
            left: 4rem;
            font-size: 0.4rem;
            line-height: 0.8rem;
            padding-top: 8rem;
            padding-right: 2rem;
          }
        }

        @media (max-width: 480px) {
          .custom-overlay-text {
            max-width: 30%;
            right: 0.5rem;
            left: 1rem;
            font-size: 0.2rem;
            line-height: 0.7rem;
            padding-top: 6rem;
            padding-right: 0.5rem;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 768px) {
          #our-essence {
            padding-top: 80px !important;
            padding-bottom: 80px !important;
            margin-top: 40px !important;
            margin-bottom: 40px !important;
          }
          #our-essence .container {
            max-width: 100vw !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
          }
          #our-essence .row {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            gap: 0 !important;
            min-width: 960px !important;
            width: 960px !important;
          }
          #our-essence .col-12.col-md-4 {
            max-width: 33.3333% !important;
            min-width: 320px !important;
            flex: 0 0 33.3333% !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            margin-bottom: 0 !important;
            padding: 0 !important;
          }
          #our-essence h2 {
            font-size: 2rem !important;
            color: #61003C !important;
            font-weight: 600 !important;
          }
          #our-essence p {
            font-size: 1.1rem !important;
            color: #6B4A18 !important;
          }
          #our-essence .fst-italic {
            font-size: 1rem !important;
          }
          #our-essence .btn {
            border-radius: 25px !important;
            font-size: 1rem !important;
            padding: 0.5rem 1.5rem !important;
          }
          #our-essence [style*='background-image'] {
            height: 410px !important;
            width: 310px !important;
            border-radius: 12px !important;
            background-size: cover !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
        }
      `}</style>

      <section
        id="royal-indulgence-section"
        className="position-relative"
        style={{
          backgroundImage: "url('/background3.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          marginTop: "170px",
          minHeight: "106vh",
          paddingTop: "190px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="position-absolute w-100"
          style={{
            top: "30px",
            left: 0,
            textAlign: "center",
          }}
        >
          <div className="row step-royal-row justify-content-center align-items-center">
            <div className="col-auto d-flex justify-content-end">
              <img
                src="/right-design.png"
                alt="Left Icon"
                style={{
                  maxWidth: "40px",
                  transform: "rotate(180deg)",
                  opacity: 0.8,
                }}
              />
            </div>

            <div className="col-auto">
              <h2
                style={{
                  color: "#61003C",
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  fontSize: "1.8rem",
                  letterSpacing: "1px",
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
                  maxWidth: "40px",
                  opacity: 0.8,
                }}
              />
            </div>
          </div>

          <div className="container" style={{ marginTop: "50px" }}>
            <div
              className="row mx-auto shadow-lg p-4"
              style={{
                borderRadius: "20px",
                backgroundColor: "white",
                maxWidth: "80%",
                position: "relative",
                overflow: "hidden",
                minHeight: "400px",
                transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: (strip1Visible || strip2Visible || strip3Visible) ? "translateY(-5px)" : "translateY(0)",
                boxShadow: (strip1Visible || strip2Visible || strip3Visible) ? "0 8px 25px rgba(0,0,0,0.15)" : "0 4px 15px rgba(0,0,0,0.1)"
              }}
            >
              <div
                className="col-md-7 d-flex flex-column align-items-start fade-in-left"
                style={{ 
                  marginTop: "40px",
                  transform: (strip1Visible || strip2Visible || strip3Visible) ? "translateY(0)" : "translateY(20px)",
                  opacity: (strip1Visible || strip2Visible || strip3Visible) ? 1 : 0.8,
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                                  <h5
                    style={{
                      color: "#4C0A2E",
                      fontFamily: "Rose Velt",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    {strip1Visible ? "Radiance of the Rajput Ranis — Skin Alchemy" :
                     strip2Visible ? "Hair Elixirs — Tresses of Tradition" :
                     strip3Visible ? "Ritual Kits — Anointing Grace" :
                     "From Palace to You: A Body Ritual"}
                  </h5>

                <div className="col-md-7 px-0 d-flex flex-column align-items-start text-start">
                  <p
                    style={{
                      fontSize: "14px",
                      font: "Avenir",
                      fontStyle: "roman",
                      fontWeight: "400",
                      color: "#333",
                      lineHeight: "114%",
                      letterSpacing: "0%",
                    }}
                  >
                    Rani Padmavati of Chittor indulged in luxurious urban
                    rituals — an age-old body remedy made with sandalwood,
                    turmeric, lentils, and rose petals. Applied before her
                    ceremonial baths, this exfoliating paste, followed by herbal
                    oil massages, wasn’t just for beauty — it was a sacred act
                    of self-rejuvenation. At Raajsi, we revive this royal
                    tradition through our body oils, scrubs, and soaps, bringing
                    timeless radiance to your modern-day rituals.
                  </p>
                </div>

                <p className="fst-italic" style={{ fontSize: "0.95rem" }}>
                  {strip1Visible ? "Discover your royal radiance." :
                   strip2Visible ? "Nourish your royal tresses." :
                   strip3Visible ? "Experience royal rituals." :
                   "Step into royal indulgence."}
                </p>

                <button
                  className="btn mt-3 px-4 py-2"
                  style={{
                    backgroundColor: "#4C0A2E",
                    color: "white",
                    borderRadius: "20px",
                    width: "fit-content",
                  }}
                >
                  <Link href="/featured-products" legacyBehavior>
                    <a style={{ color: 'white', textDecoration: 'none', display: 'block' }}>VIEW PRODUCTS</a>
                  </Link>
                </button>
              </div>

              <div className="col-md-5 text-center mt-4 mt-md-0">
                <img
                  src={strip1Visible ? "/image3.png" : 
                       strip2Visible ? "/image4.png" : 
                       strip3Visible ? "/image5.png" : "/image3.png"}
                  alt={strip1Visible ? "Skin Alchemy" : 
                       strip2Visible ? "Hair Elixirs" : 
                       strip3Visible ? "Ritual Kits" : "Royal Ritual"}
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: "100px",
                    borderTopRightRadius: "100px",
                    maxHeight: "380px",
                    objectFit: "cover",
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: (strip1Visible || strip2Visible || strip3Visible) ? "translateY(0)" : "translateY(15px)",
                    opacity: (strip1Visible || strip2Visible || strip3Visible) ? 1 : 0.9,
                  }}
                />
              </div>
            </div>

            <section>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12">
                    {/* Scroll-triggered Cards */}
                    
                    {/* Strip 1 - Skin Alchemy */}
                    <div
                      className="left-text-strip px-4 py-4"
                      style={{
                        backgroundColor: "#6A5013",
                        color: "#FFD700",
                        fontFamily: "Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "0",
                        borderBottomRightRadius: "0",
                        textAlign: "center",
                        maxWidth: "82%",
                        margin: "0 auto",
                        marginTop: "-30px",
                        cursor: "pointer",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 10,
                        opacity: strip1Visible ? 0 : 1,
                        transform: strip1Visible ? "translateY(20px)" : "translateY(0)",
                        pointerEvents: strip1Visible ? "none" : "auto"
                      }}
                    >
                      Radiance of the Rajput Ranis — Skin Alchemy
                    </div>

                    {/* Strip 2 - Hair Elixirs */}
                    <div
                      className="left-text-strip px-4 py-4"
                      style={{
                        backgroundColor: "#8F7B4C",
                        color: "#fff",
                        fontFamily: "Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "0",
                        borderBottomRightRadius: "0",
                        textAlign: "center",
                        maxWidth: "82%",
                        margin: "0 auto",
                        marginTop: "-20px",
                        cursor: "pointer",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 10,
                        opacity: strip2Visible ? 0 : 1,
                        transform: strip2Visible ? "translateY(20px)" : "translateY(0)",
                        pointerEvents: strip2Visible ? "none" : "auto"
                      }}
                    >
                      Hair Elixirs Tresses of Tradition
                    </div>

                    {/* Strip 3 - Ritual Kits */}
                    <div
                      className="left-text-strip px-4 py-4"
                      style={{
                        backgroundColor: "#978864",
                        color: "#4e3b00",
                        fontFamily: "Georgia, serif",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        borderTopLeftRadius: "20px",
                        borderTopRightRadius: "20px",
                        borderBottomLeftRadius: "0",
                        borderBottomRightRadius: "0",
                        textAlign: "center",
                        maxWidth: "82%",
                        margin: "0 auto",
                        marginTop: "-20px",
                        cursor: "pointer",
                        transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                        position: "relative",
                        zIndex: 10,
                        opacity: strip3Visible ? 0 : 1,
                        transform: strip3Visible ? "translateY(20px)" : "translateY(0)",
                        pointerEvents: strip3Visible ? "none" : "auto"
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

      <style jsx>{`
        @media (max-width: 600px) {
          section.position-relative {
            margin-top: 40px !important;
            min-height: unset !important;
            padding-top: 40px !important;
            padding-bottom: 30px !important;
          }
          .position-absolute.w-100 {
            position: static !important;
            top: unset !important;
            left: unset !important;
            text-align: center !important;
          }
          .row.justify-content-center.align-items-center {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .row.mx-auto.shadow-lg.p-4 {
            flex-direction: column !important;
            max-width: 100% !important;
            padding: 12px !important;
            border-radius: 12px !important;
          }
          .col-md-7.d-flex.flex-column.align-items-start.fade-in-left {
            align-items: center !important;
            margin-top: 0 !important;
            width: 100% !important;
            text-align: center !important;
          }
          .col-md-7.px-0.d-flex.flex-column.align-items-start.text-start {
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            padding: 0 !important;
          }
          .col-md-5.text-center.mt-4.mt-md-0 {
            margin-top: 18px !important;
            width: 100% !important;
          }
          .col-md-5.text-center.mt-4.mt-md-0 img {
            max-height: 280px !important;
            border-top-left-radius: 50px !important;
            border-top-right-radius: 50px !important;
          }
          /* Move Royal Indulge strips upward on mobile */
          .left-text-strip {
            margin-top: -30px !important;
          }
          .left-text-strip:nth-child(2) {
            margin-top: -20px !important;
          }
          .left-text-strip:nth-child(3) {
            margin-top: -20px !important;
          }
          /* Mobile: Make Royal Indulge strips wider to match card */
          .left-text-strip {
            max-width: 100% !important;
          }
          /* Mobile: Fix Royal Promises section images */
          .royal-promise-section {
            height: auto !important;
            min-height: 400px !important;
            max-width: 95% !important;
            margin: 30px auto !important;
          }
          .royal-promise-section .row {
            flex-direction: column !important;
            height: auto !important;
          }
          .royal-promise-section .col-md-6 {
            width: 100% !important;
            height: auto !important;
            margin-bottom: 20px !important;
          }
          .royal-promise-section img {
            max-width: 100% !important;
            height: auto !important;
            max-height: 300px !important;
            object-fit: contain !important;
          }
        }
      `}</style>
      <style jsx>{`
        @media (max-width: 600px) {
          .step-royal-row {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 4px !important;
            flex-wrap: nowrap !important;
            white-space: nowrap !important;
            width: 100vw !important;
            max-width: 100vw !important;
            overflow: hidden !important;
            padding: 0 4vw !important;
            margin: 0 auto !important;
            min-height: 38px !important;
          }
          .step-royal-row h2 {
            font-size: 0.92rem !important;
            margin: 0 !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            letter-spacing: 0.2px !important;
            font-weight: 700 !important;
            display: inline-block !important;
            vertical-align: middle !important;
            max-width: 60vw !important;
          }
          .step-royal-row .col-auto {
            flex: 0 0 auto !important;
            max-width: none !important;
            display: flex !important;
            align-items: center !important;
          }
          .step-royal-row img {
            max-width: 18px !important;
            height: 18px !important;
            min-width: 16px !important;
            min-height: 16px !important;
            display: inline-block !important;
            vertical-align: middle !important;
          }
        }
      `}</style>

      {/* Replace the featured products section with the carousel */}
      <section id="featured-products-section" className="featured-products-section py-5" style={{ backgroundColor: "#fff" }}>
        <div className="container">
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col-auto d-flex justify-content-end">
              <img src="/left-design.png" alt="Left Decor" style={{ maxWidth: "30px", opacity: 0.8 }} />
            </div>
            <div className="col-auto text-center">
              <h2 style={{ fontFamily: "Georgia, serif", color: "#4C0A2E", fontWeight: "bold", fontSize: "1.6rem", letterSpacing: "1px", margin: 0, textTransform: "uppercase" }}>
                Featured Products
              </h2>
            </div>
            <div className="col-auto d-flex justify-content-start">
              <img src="/right-design.png" alt="Right Decor" style={{ maxWidth: "30px", opacity: 0.8 }} />
            </div>
          </div>
        </div>
        {/* Tabs for section switching */}
        <div className="row justify-content-center my-4">
          <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f5f0eb", borderRadius: "30px", padding: "6px 10px", maxWidth: "600px" }}>
            {SECTIONS.map((s, idx) => (
              <button
                key={s.key}
                className="me-2"
                style={{
                  backgroundColor: idx === sectionIdx ? "#4C0A2E" : "transparent",
                  color: idx === sectionIdx ? "#fff" : "#4C0A2E",
                  border: "none",
                  borderRadius: "25px",
                  padding: "6px 18px",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  transition: "background 0.2s, color 0.2s",
                }}
                onClick={() => handleTabClick(idx)}
              >
                {s.badge}
              </button>
            ))}
          </div>
        </div>
        <div className="container-fluid text-center">
          <div className="container-fluid mt-4">
            <div className="d-flex justify-content-center align-items-center gap-3 featured-carousel-row" style={{ position: "relative", width: "100%" }}>
              <button 
                className="btn btn-outline-dark rounded-circle" 
                style={{ 
                  width: 48, 
                  height: 48, 
                  alignSelf: 'center',
                  opacity: cardStartIndex === 0 ? 0.5 : 1,
                  cursor: cardStartIndex === 0 ? 'not-allowed' : 'pointer',
                  border: '2px solid #333',
                  backgroundColor: cardStartIndex === 0 ? '#f5f5f5' : 'white',
                  transition: 'all 0.3s ease',
                  position: "absolute",
                  left: "20px",
                  zIndex: 10
                }} 
                onClick={handleCardPrev} 
                disabled={cardStartIndex === 0}
                aria-label="Previous"
              >
                &#x276E;
              </button>
              
              {/* Mobile: Show only one card */}
              <div className="d-block d-md-none">
                <div className="col-12 d-flex flex-column align-items-center mb-4" style={{ minWidth: 0 }}>
                  <div className="card" style={{ width: "85vw", maxWidth: "85vw", height: "350px", borderRadius: "15px", backgroundImage: `url(${CARDS[sectionIdx % CARDS.length].image})`, backgroundSize: "cover", backgroundPosition: "center", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: "10px", left: "10px", color: "#fff", fontSize: "0.75rem", fontFamily: "Georgia, serif", maxWidth: "65%", lineHeight: "1.4", padding: "6px 8px", borderRadius: "6px" }}>
                      मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                      यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                    </div>
                    <div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff", padding: "4px 10px", fontSize: "0.7rem", borderRadius: "20px", fontWeight: 500, fontFamily: "Arial, sans-serif" }}>
                      Ingredients & Benefits
                    </div>
                    <div style={{ position: "absolute", bottom: "0", width: "100%", color: "#fff", padding: "1rem", fontFamily: "Georgia, serif", marginTop: "40px" }}>
                      <h5 style={{ fontWeight: "bold", paddingLeft: "10px", marginBottom: "8px", marginTop: "18px", textAlign: "left" }}>{CARDS[sectionIdx % CARDS.length].title}</h5>
                      <p style={{ fontSize: "14px", paddingLeft: "10px", marginBottom: "10px", textAlign: "left" }}>{CARDS[sectionIdx % CARDS.length].desc}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between w-100 px-4 mt-2">
                    <Link href="/featured-products" className="btn btn-sm d-flex align-items-center justify-content-center" style={{ backgroundColor: "#8B5E3C", color: "white", borderRadius: "30px", maxWidth: "194px", maxHeight: "52px", height: "40px", minHeight: "40px", lineHeight: "40px", padding: "0 24px", fontWeight: 500, fontSize: "1rem" }}>VIEW PRODUCT</Link>
                    <div className="text-end">
                      <strong>{CARDS[sectionIdx % CARDS.length].price}</strong>
                      <div style={{ fontSize: "0.75rem", textDecoration: "line-through", color: "gray" }}>Get 50% OFF {CARDS[sectionIdx % CARDS.length].oldPrice}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop: Show carousel cards */}
              <div 
                className="d-none d-md-flex" 
                style={{ 
                  gap: "70px", 
                  overflow: "hidden", 
                  width: "100%",
                  position: "relative",
                  padding: "0 80px",
                  cursor: isDragging ? "grabbing" : "grab"
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
              >
                {/* Carousel indicator */}
                <div style={{ 
                  position: "absolute", 
                  top: "-25px", 
                  left: "50%", 
                  transform: "translateX(-50%)", 
                  fontSize: "12px", 
                  color: "#666",
                  backgroundColor: "rgba(255,255,255,0.9)",
                  padding: "2px 8px",
                  borderRadius: "4px"
                }}>
                  Card {cardStartIndex + 1} of {CARDS.length} • Swipe or scroll to navigate
                </div>
                <div style={{ 
                  display: "flex", 
                  gap: "70px", 
                  transform: `translateX(-${cardStartIndex * 100}%)`,
                  transition: "transform 0.5s ease-in-out",
                  width: "100%"
                }}>
                  {CARDS.map((card, index) => (
                    <div key={index} className="d-flex flex-column align-items-center mb-4" style={{ minWidth: "calc(50vw - 160px)", maxWidth: "600px", flex: "1" }}>
                      <div className="card" style={{ width: "100%", height: "350px", backgroundImage: `url(${card.image})`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "15px", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: "10px", left: "10px", color: "#fff", fontSize: "0.75rem", fontFamily: "Georgia, serif", maxWidth: "65%", lineHeight: "1.4", padding: "6px 8px", borderRadius: "6px" }}>
                          मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                          यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                        </div>
                        <div style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "rgba(0, 0, 0, 0.4)", color: "#fff", padding: "4px 10px", fontSize: "0.7rem", borderRadius: "20px", fontWeight: 500, fontFamily: "Arial, sans-serif" }}>
                          Ingredients & Benefits
                        </div>
                        <div style={{ position: "absolute", bottom: "0", width: "100%", color: "#fff", padding: "1rem", fontFamily: "Georgia, serif", marginTop: "40px" }}>
                          <h5 style={{ fontWeight: "bold", paddingLeft: "10px", marginBottom: "8px", marginTop: "18px", textAlign: "left" }}>{card.title}</h5>
                          <p style={{ fontSize: "14px", paddingLeft: "10px", marginBottom: "10px", textAlign: "left" }}>{card.desc}</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between w-100 px-4 mt-2">
                        <Link href="/featured-products" className="btn btn-sm d-flex align-items-center justify-content-center" style={{ backgroundColor: "#8B5E3C", color: "white", borderRadius: "30px", maxWidth: "194px", maxHeight: "52px", height: "40px", minHeight: "40px", lineHeight: "40px", padding: "0 24px", fontWeight: 500, fontSize: "1rem" }}>VIEW PRODUCT</Link>
                        <div className="text-end">
                          <strong>{card.price}</strong>
                          <div style={{ fontSize: "0.75rem", textDecoration: "line-through", color: "gray" }}>Get 50% OFF {card.oldPrice}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <button 
                className="btn btn-outline-dark rounded-circle" 
                style={{ 
                  width: 48, 
                  height: 48, 
                  alignSelf: 'center',
                  opacity: cardStartIndex >= CARDS.length - 1 ? 0.5 : 1,
                  cursor: cardStartIndex >= CARDS.length - 1 ? 'not-allowed' : 'pointer',
                  border: '2px solid #333',
                  backgroundColor: cardStartIndex >= CARDS.length - 1 ? '#f5f5f5' : 'white',
                  transition: 'all 0.3s ease',
                  position: "absolute",
                  right: "20px",
                  zIndex: 10
                }} 
                onClick={handleCardNext} 
                disabled={cardStartIndex >= CARDS.length - 1}
                aria-label="Next"
              >
                &#x276F;
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="royal-promise-section my-5"
        style={{
          backgroundImage: "url('/background4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          overflow: "hidden",
          margin: "60px auto",
          maxWidth: "78%",
          height: "530px",
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
                  position: "absolute",
                  bottom: "10px",
                  left: "400px",
                  width: "242px",
                  height: "192px",
                  opacity: 1,
                  zIndex: 2,
                }}
              />

              {/* Text Content */}
              <h3
                style={{
                  fontFamily: "Rose Velt Personal Use Only",
                  color: "#FFD700",
                  position: "relative",
                  left: "20px",
                  fontWeight: "400",
                  fontSize: "32px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textTransform: "uppercase",
                  marginBottom: "20px",
                }}
              >
                {ROYAL_PROMISES[royalPromiseSlide].title}
              </h3>

              <p
                style={{
                  fontFamily: "Roman",
                  color: "white",
                  position: "relative",
                  zIndex: 1,
                  left: "20px",
                  fontSize: "16px",
                }}
              >
                {ROYAL_PROMISES[royalPromiseSlide].description}
              </p>

              <p
                className="fst-italic"
                style={{
                  color: "#fff",
                  fontWeight: "500",
                  position: "relative",
                  zIndex: 1,
                  left: "20px",
                }}
              >
                <strong>
                  <em>
                    {ROYAL_PROMISES[royalPromiseSlide].highlight}
                  </em>
                </strong>
              </p>

              <p
                style={{
                  fontFamily: "Avenir",
                  fontStyle: "Roman",
                  color: "white",
                  position: "relative",
                  zIndex: 1,
                  left: "20px",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                {ROYAL_PROMISES[royalPromiseSlide].detail}
              </p>

              {/* Decorative dots - Now functional slider */}
              <div className="d-flex gap-2 my-3 ms-4">
                <span
                  onClick={() => setRoyalPromiseSlide(0)}
                  style={{
                    height: "5px",
                    width: royalPromiseSlide === 0 ? "30px" : "18px",
                    borderRadius: "20%",
                    backgroundColor: "#fff",
                    opacity: royalPromiseSlide === 0 ? 1 : 0.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                ></span>
                <span
                  onClick={() => setRoyalPromiseSlide(1)}
                  style={{
                    height: "5px",
                    width: royalPromiseSlide === 1 ? "30px" : "18px",
                    borderRadius: "20%",
                    backgroundColor: "#fff",
                    opacity: royalPromiseSlide === 1 ? 1 : 0.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                ></span>
                <span
                  onClick={() => setRoyalPromiseSlide(2)}
                  style={{
                    height: "5px",
                    width: royalPromiseSlide === 2 ? "30px" : "18px",
                    borderRadius: "20%",
                    backgroundColor: "#fff",
                    opacity: royalPromiseSlide === 2 ? 1 : 0.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                ></span>
              </div>

              {/* Explore Button */}
              <Link href="/royal-promises" passHref legacyBehavior>
                <a
                  className="btn mt-3 d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#BA7E38",
                    color: "#FFFFFF",
                    borderRadius: "30px",
                    padding: "8px 24px",
                    fontWeight: "400",
                    position: "relative",
                    height: "52px",
                    width: "192px",
                    zIndex: 1,
                    left: "20px",
                    fontSize: "1.1rem"
                  }}
                >
                  EXPLORE
                </a>
              </Link>
            </div>

            {/* Right Image */}
            <div className="col-md-6 h-100 d-flex justify-content-end align-items-center">
              <img
                src={ROYAL_PROMISES[royalPromiseSlide].image}
                alt="Royal Promise"
                style={{
                  height: "100%",
                  width: "auto",
                  borderRadius: "20px",
                  objectFit: "contain",
                  transition: "all 0.5s ease",
                  marginLeft: "80px",
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h2
            className="text-center mb-5"
            style={{ fontFamily: "Georgia, serif", color: "#2c1e1e" }}
          >
            BLOGS
          </h2>

          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <img
                  src="/card51.png"
                  alt="Blog 1"
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    Natural Ingredients connect it to actual people
                  </h6>
                  <div className="d-flex justify-content-between text-muted small mb-2">
                    <span>June 28, 2018</span>
                    <span>
                      <i className="bi bi-share-fill me-1"></i> 1K shares
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-decoration-underline text-dark fw-semibold"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4 position-relative">
                <img
                  src="/card52.png"
                  alt="Blog 2"
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    Royalties - rituals, fact boxes Rani Padmavati
                  </h6>
                  <div className="d-flex justify-content-between text-muted small mb-2">
                    <span>June 28, 2018</span>
                    <span>
                      <i className="bi bi-share-fill me-1"></i> 1K shares
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-decoration-underline text-dark fw-semibold"
                  >
                    Read Blog
                  </a>
                </div>
                <span
                  style={{
                    position: "absolute",
                    bottom: "60px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                  }}
                />
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0 rounded-4">
                <img
                  src="/card53.png"
                  alt="Blog 3"
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body">
                  <h6 className="card-title">
                    Royalties - rituals, fact boxes Rani Padmavati
                  </h6>
                  <div className="d-flex justify-content-between text-muted small mb-2">
                    <span>June 28, 2018</span>
                    <span>
                      <i className="bi bi-share-fill me-1"></i> 1K shares
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-decoration-underline text-dark fw-semibold"
                  >
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <button
              className="btn px-5 py-2"
              style={{
                backgroundColor: "#4C0A2E",
                color: "#fff",
                borderRadius: "25px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </section>

      <section className="faq-section py-5 my-5">
        <div className="container text-center">
          <p className="text-muted mb-1" style={{ fontSize: "24px", fontWeight: "500" }}>
            Frequently asked questions
          </p>
          <h2 style={{ fontFamily: "Georgia, serif", fontWeight: "300" }}>
            HAVE QUESTIONS?
            <br />
            GET ANSWERS
          </h2>

          <div
            className="accordion mt-5 mx-auto"
            id="faqAccordion"
            style={{ maxWidth: "700px" }}
          >
            {[
              "Is Raajsi for me?",
              "Is Raajsi safe?",
              "Do you offer free shipping?",
              "Where do you ship?",
              "How long does delivery take?",
              "What if Raajsi doesn't work for me?",
            ].map((question, index) => (
              <div
                className="border-0 border-bottom"
                style={{ borderBottom: "2px solid #2e2e2e" }}
                key={index}
              >
                <div className="px-0 py-3 d-flex justify-content-between align-items-center">
                  <button
                    className="btn p-0 text-start"
                    type="button"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      border: "none",
                      flex: 1,
                      textAlign: "left"
                    }}
                  >
                    <span>{question}</span>
                  </button>
                  <span
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      backgroundColor: "#E0E0E0",
                      fontSize: "14px",
                      fontWeight: "bold",
                      color: "#333",
                      cursor: "pointer"
                    }}
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    {expandedFaq === index ? <FaChevronDown /> : "+"}
                  </span>
                </div>
                {expandedFaq === index && (
                  <div
                    className="text-start px-0 py-2 text-muted"
                    style={{ fontSize: "15px" }}
                  >
                    This is the answer to the question. You can customize this
                    content.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
