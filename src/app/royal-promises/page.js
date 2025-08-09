"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoyalPromise() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState([true, true, true, true]); // Default all visible

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          // Calculate which items should be visible based on scroll position
          const section = document.querySelector('section:nth-child(2)');
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress within the section with smoother threshold
            const scrollProgress = (currentScrollY - sectionTop + windowHeight * 0.8) / (sectionHeight + windowHeight * 0.6);
            const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // Determine which items should be visible with improved threshold
            const totalItems = 4;
            const itemsToShow = Math.ceil(normalizedProgress * totalItems);
            const newVisibleItems = Array.from({ length: totalItems }, (_, i) => i < itemsToShow);
            setVisibleItems(newVisibleItems);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call to set visible items
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "80vh",
          paddingTop: "120px",
          paddingBottom: "60px",
          position: "relative",
          backgroundColor: "#fff",
          backgroundImage: "url('/im1.png')",
          backgroundSize: "400px 400px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          style={{
            fontFamily: "'Rose Velt Personal Use Only', serif",
            fontSize: "32px",
            color: "#B48338",
            fontWeight: 400,
            lineHeight: "1.06",
            zIndex: 1,
            opacity: 1,
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          AT RAAJSI, LUXURY MEETS RESPONSIBILITY.
        </h2>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            maxWidth: "700px",
            zIndex: 1,
            opacity: 1,
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: "transform 0.3s ease-out",
          }}
          className="text-dark mt-2"
        >
          OUR ROYAL PROMISE IS BUILT ON INTEGRITY, TRANSPARENCY, AND TIMELESS
          CARE  <br /> -FOR YOU AND THE PLANET.
        </p>

        <div className="mt-5 d-flex justify-content-center" style={{ marginTop: "384px" }}>
          <button
            onClick={() => {
              const cardSection = document.querySelector('#card-section');
              if (cardSection) {
                // Scroll to the middle of the card section
                const sectionTop = cardSection.offsetTop;
                const sectionHeight = cardSection.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollTo = sectionTop + (sectionHeight / 2) - (windowHeight / 2);
                
                window.scrollTo({
                  top: scrollTo,
                  behavior: 'smooth'
                });
              }
            }}
            style={{
              fontSize: "1.4rem",
              border: "2px solid #B48338",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "#B48338",
              transition: "all 0.3s ease",
              outline: "none",
              fontWeight: "bold",
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.15)";
              e.target.style.borderColor = "#8B5A2B";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = `scale(1) translateY(${scrollY * 0.02}px)`;
              e.target.style.borderColor = "#B48338";
            }}
          >
            &#8595;
          </button>
        </div>
      </section>

      {/* Card Section - Second Section */}
      <section
        id="card-section"
        className="d-flex align-items-center justify-content-center"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 15px",
          minHeight: "120vh",
          position: "relative",
          borderRadius: "30px",
          overflow: "hidden",
          top: "-50px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/background3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            zIndex: -1,
            opacity: 0.5,
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <img
                src="/image5.png"
                alt="Royal Promise Art"
                className="img-fluid"
                style={{
                  width: "400px",
                  height: "550px",
                  objectFit: "cover",
                  borderRadius: "200px",
                  position: "relative",
                  marginTop: "50px",
                  marginLeft: "80px",
                  // Image stays static
                }}
              />
            </div>

            <div className="col-md-8">
              <div 
                className="ps-md-5 pt-5"
                style={{
                  transform: `translateY(${-scrollY * 0.1}px) rotateX(${scrollY * 0.0005}deg)`,
                  transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  position: "relative",
                  zIndex: 2,
                  perspective: "1000px",
                }}
              >
                {[
                  {
                    title:
                      "TIME-TESTED FORMULAS DERIVED FROM ANCIENT SCIENCES AND SCRIPTURES",
                    desc: "Rooted in Ayurveda and proven through generations of ritual wisdom",
                  },
                  {
                    title:
                      "HIGH-QUALITY, ORGANIC INGREDIENTS FOR OPTIMAL EFFICACY",
                    desc: "Sourced from certified farms to ensure purity and potency in every drop.",
                  },
                  {
                    title: "ECO-FRIENDLY MANUFACTURING PROCESSES",
                    desc: "Produced in small batches using low-impact, conscious methods.",
                  },
                  {
                    title: "CRUELTY-FREE AND SUSTAINABLE PRACTICES",
                    desc: "Approved by ethical standards—never tested on animals, always kind to nature.",
                  },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="mb-4"
                    style={{
                      opacity: visibleItems[idx] ? 1 : 0.75,
                      transform: visibleItems[idx] 
                        ? `translateY(${-scrollY * 0.03 * (idx + 1)}px) scale(1) rotateZ(${scrollY * 0.0002 * (idx + 1)}deg)` 
                        : `translateY(${3 - scrollY * 0.03 * (idx + 1)}px) scale(0.995) rotateZ(${scrollY * 0.0002 * (idx + 1)}deg)`,
                      transition: `all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                      // Minimize height for second and fourth items
                      marginBottom: idx === 1 || idx === 3 ? "20px" : "40px",
                      filter: visibleItems[idx] ? "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.05))",
                    }}
                  >
                    {/* Decorative Icon */}
                    <div className="mb-2" style={{ marginBottom: idx === 1 || idx === 3 ? "8px" : "16px" }}>
                      <img
                        src="/dot.png"
                        alt="Design"
                        style={{ 
                          width: "12px",
                          transform: visibleItems[idx] 
                            ? `scale(1.15) translateY(${scrollY * 0.004}px) rotate(${scrollY * 0.01}deg)` 
                            : `scale(1) translateY(${scrollY * 0.004}px) rotate(${scrollY * 0.01}deg)`,
                          transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                          filter: visibleItems[idx] ? "drop-shadow(0 1px 2px rgba(180, 131, 56, 0.2))" : "none",
                        }}
                      />
                    </div>

                    <h6
                      style={{
                        color: "#B48338",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "1.4",
                        marginBottom: idx === 1 || idx === 3 ? "4px" : "8px",
                        transform: visibleItems[idx] 
                          ? `translateX(${scrollY * 0.012}px) translateY(${scrollY * 0.002}px)` 
                          : `translateX(${-2 + scrollY * 0.012}px) translateY(${scrollY * 0.002}px)`,
                        transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        textShadow: visibleItems[idx] ? "0 1px 2px rgba(180, 131, 56, 0.1)" : "none",
                      }}
                    >
                      {item.title}
                    </h6>

                    <ul className="mt-2 ps-3" style={{ marginTop: idx === 1 || idx === 3 ? "8px" : "16px" }}>
                      <li 
                        style={{ 
                          fontSize: "13px", 
                          color: "#333", 
                          lineHeight: "1.5",
                          transform: visibleItems[idx] 
                            ? `translateX(${scrollY * 0.006}px) translateY(${scrollY * 0.001}px)` 
                            : `translateX(${-1 + scrollY * 0.006}px) translateY(${scrollY * 0.001}px)`,
                          transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.15s",
                          opacity: visibleItems[idx] ? 1 : 0.85,
                        }}
                      >
                        {item.desc}
                      </li>
                    </ul>

                    <div className="my-3" style={{ 
                      marginTop: idx === 1 || idx === 3 ? "12px" : "24px",
                      marginBottom: idx === 1 || idx === 3 ? "12px" : "24px"
                    }}>
                      <img
                        src="/line.png"
                        alt="Divider"
                        style={{ 
                          height: idx === 1 || idx === 3 ? "40px" : "60px", 
                          width: "1px",
                          opacity: visibleItems[idx] ? 1 : 0.5,
                          transform: visibleItems[idx] 
                            ? `scaleY(1) translateY(${scrollY * 0.002}px) rotate(${scrollY * 0.005}deg)` 
                            : `scaleY(0.95) translateY(${scrollY * 0.002}px) rotate(${scrollY * 0.005}deg)`,
                          transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s",
                          filter: visibleItems[idx] ? "drop-shadow(0 1px 1px rgba(0,0,0,0.1))" : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
