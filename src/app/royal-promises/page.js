"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoyalPromise() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
            fontFamily: "Abel, sans-serif",
            fontSize: "32px",
            color: "#B48338",
            fontWeight: 400,
            lineHeight: "1.06",
            zIndex: 1,
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
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.15)";
              e.target.style.borderColor = "#8B5A2B";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
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
                  transform: "none",
                }}
              />
            </div>

            <div className="col-md-8">
              <div 
                className="ps-md-5 pt-5"
                style={{
                  transform: `translateY(${-scrollY * 0.2}px)`,
                  transition: "transform 0.1s ease-out",
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
                  <div key={idx} className="mb-4">
                    {/* Decorative Icon */}
                    <div className="mb-2">
                      <img
                        src="/dot.png"
                        alt="Design"
                        style={{ width: "12px" }}
                      />
                    </div>

                    <h6
                      style={{
                        color: "#B48338",
                        fontWeight: "600",
                        fontSize: "14px",
                        lineHeight: "1.4",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h6>

                    <ul className="mt-2 ps-3">
                      <li style={{ fontSize: "13px", color: "#333", lineHeight: "1.5" }}>
                        {item.desc}
                      </li>
                    </ul>

                    <div className="my-3">
                      <img
                        src="/line.png"
                        alt="Divider"
                        style={{ height: "60px", width: "1px" }}
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
