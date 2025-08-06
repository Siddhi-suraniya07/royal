"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoyalPromise() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Calculate which items should be visible based on scroll position
      const section = document.querySelector('section:nth-child(2)');
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate scroll progress within the section
        const scrollProgress = (currentScrollY - sectionTop + windowHeight) / (sectionHeight + windowHeight);
        const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Determine which items should be visible
        const totalItems = 4;
        const itemsToShow = Math.floor(normalizedProgress * totalItems);
        const newVisibleItems = Array.from({ length: totalItems }, (_, i) => i < itemsToShow);
        setVisibleItems(newVisibleItems);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "60vh",
          paddingTop: "120px",
          position: "relative",
          backgroundColor: "#fff",
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
          CARE – FOR YOU AND THE PLANET.
        </p>

        <div className="mt-4 d-flex justify-content-center">
          <button
            onClick={() => {
              const nextSection = document.querySelector('section:nth-child(2)');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
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

      <section
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
                  transform: `translateY(${-scrollY * 0.15}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              />
            </div>

            <div className="col-md-8">
              <div 
                className="ps-md-5 pt-5"
                style={{
                  transform: `translateY(${-scrollY * 0.1}px)`,
                  transition: "transform 0.3s ease-out",
                  position: "relative",
                  zIndex: 2,
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
                      opacity: visibleItems[idx] ? 1 : 0.3,
                      transform: visibleItems[idx] 
                        ? `translateY(0) scale(1)` 
                        : `translateY(20px) scale(0.95)`,
                      transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1)`,
                      filter: visibleItems[idx] ? "blur(0px)" : "blur(1px)",
                      // Minimize height for second and fourth items
                      marginBottom: idx === 1 || idx === 3 ? "20px" : "40px",
                    }}
                  >
                    {/* Decorative Icon */}
                    <div className="mb-2" style={{ marginBottom: idx === 1 || idx === 3 ? "8px" : "16px" }}>
                      <img
                        src="/dot.png"
                        alt="Design"
                        style={{ 
                          width: "12px",
                          transform: visibleItems[idx] ? "scale(1.2)" : "scale(1)",
                          transition: "transform 0.4s ease-out",
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
                        transform: visibleItems[idx] ? "translateX(0)" : "translateX(-10px)",
                        transition: "transform 0.5s ease-out",
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
                          transform: visibleItems[idx] ? "translateX(0)" : "translateX(-5px)",
                          transition: "transform 0.5s ease-out 0.1s",
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
                          opacity: visibleItems[idx] ? 1 : 0.3,
                          transform: visibleItems[idx] ? "scaleY(1)" : "scaleY(0.8)",
                          transition: "all 0.4s ease-out 0.2s",
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
