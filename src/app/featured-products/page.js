// src/app/featured-products/page.js
"use client";
import React from "react";
import Image from "next/image";
import styles from "./featured.module.css"; // optional custom styling

export default function FeaturedProducts() {
  return (
    <div className="position-relative text-white">
      {/* Background image */}
      <div
        className={`${styles.heroSection} d-flex align-items-center justify-content-center text-center`}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: -1 }}
        >
          <Image
            src="/featured-bg.png" // ✅ Save your image as 'public/featured-bg.jpg'
            alt="Featured Background"
            width={1920}
            height={1080}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            quality={100}
          />
        </div>

        {/* Text Overlay */}
        <div className="container">
          <h2 className="display-6 fw-bold">
            Explore our wide range of luxurious skincare and wellness products
            to celebrate beauty that is timeless.
          </h2>
          <p className="fs-4 mt-3">शरीरमाद्यं खलु धर्मसाधनम्</p>

          {/* Circular Down Arrow */}
          <div className="mt-4 d-flex justify-content-center">
            <button
              onClick={() => {
                const nextSection = document.querySelector('.py-5.bg-light');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                fontSize: "1.2rem",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.8)",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "scale(1)";
              }}
            >
              &#8595;
            </button>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Heading + Ornaments */}
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
            <img src="/FD1.png" alt="left" className={styles.ornament} />
            <div>
              <span className="badge rounded-pill text-bg-warning px-4 py-2 mb-2 fw-semibold">
                BODY THERAPY
              </span>
              <h2 className="fw-bold fs-5 m-0 text-dark">
                दिव्य चांदनं त्वं मम त्वचायै च शुभम् <br />
                सौन्दर्यसाधनं मम मनःसुखदायकम्
              </h2>
            </div>
            <img src="/FD2.png" alt="right" className={styles.ornament} />
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          position: "relative",
          marginTop: "-80px",
        }}
      >
        {/* Background Container - Now Responsive */}
        <div className={`w-100 ${styles.responsiveContainer}`}>
          {/* Background Image (absolute, full cover) */}
          <Image
            src="/background3.png"
            alt="Featured Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "30px",
            }}
          />

          {/* Foreground content on top of image */}
          <div className={styles.responsiveContent}>
            {/* Grid of Cards */}
            <div className="container">
              <div className="row gy-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 d-flex flex-column align-items-center"
                  >
                    <div
                      className="card w-100"
                      style={{
                        height: "350px",
                        backgroundImage: `url(${
                          index % 2 === 0 ? "/card11.png" : "/card12.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Shloka */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          color: "#fff",
                          fontSize: "0.6rem",
                          fontFamily: "Georgia, serif",
                          maxWidth: "65%",
                          lineHeight: "1.4",
                        }}
                      >
                        मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                        यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                      </div>

                      {/* Top-right label */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: "#fff",
                          padding: "4px 10px",
                          fontSize: "0.6rem",
                          borderRadius: "20px",
                          fontWeight: 500,
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Ingredients & Benefits
                      </div>

                      {/* Bottom Content */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          color: "#fff",
                          padding: "1rem",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "14px" }}>
                          {index % 2 === 0
                            ? "COSMIC BODY OIL"
                            : "LAVISH BODY SCRUB"}
                        </h5>
                        <p style={{ fontSize: "12px" }}>
                          {index % 2 === 0
                            ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                            : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                        </p>
                      </div>
                    </div>

                    {/* Button & Price */}
                    <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#8B5E3C",
                          color: "white",
                          borderRadius: "30px",
                          padding: "8px 20px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                      <div className="text-end">
                        <strong style={{ fontSize: "14px" }}>₹1800</strong>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          Get 50% OFF ₹2400
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Heading + Ornaments */}
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
            <img src="/FD1.png" alt="left" className={styles.ornament} />
            <div>
              <span
                className="badge rounded-pill px-4 py-2 mb-2 fw-semibold"
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                }}
              >
                HAIR THERAPY
              </span>

              <h2 className="fw-bold fs-5 m-0 text-dark">
                दिव्य चांदनं त्वं मम त्वचायै च शुभम् <br />
                सौन्दर्यसाधनं मम मनःसुखदायकम्
              </h2>
            </div>
            <img src="/FD2.png" alt="right" className={styles.ornament} />
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          position: "relative",
          marginTop: "-80px",
        }}
      >
        {/* Background Container - Now Responsive */}
        <div className={`w-100 ${styles.responsiveContainer}`}>
          {/* Background Image (absolute, full cover) */}
          <Image
            src="/background3.png"
            alt="Featured Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "30px",
            }}
          />

          {/* Foreground content on top of image */}
          <div className={styles.responsiveContent}>
            {/* Grid of Cards */}
            <div className="container">
              <div className="row gy-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 d-flex flex-column align-items-center"
                  >
                    <div
                      className="card w-100"
                      style={{
                        height: "350px",
                        backgroundImage: `url(${
                          index % 2 === 0 ? "/card11.png" : "/card12.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Shloka */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          color: "#fff",
                          fontSize: "0.6rem",
                          fontFamily: "Georgia, serif",
                          maxWidth: "65%",
                          lineHeight: "1.4",
                        }}
                      >
                        मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                        यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                      </div>

                      {/* Top-right label */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: "#fff",
                          padding: "4px 10px",
                          fontSize: "0.6rem",
                          borderRadius: "20px",
                          fontWeight: 500,
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Ingredients & Benefits
                      </div>

                      {/* Bottom Content */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          color: "#fff",
                          padding: "1rem",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "14px" }}>
                          {index % 2 === 0
                            ? "COSMIC BODY OIL"
                            : "LAVISH BODY SCRUB"}
                        </h5>
                        <p style={{ fontSize: "12px" }}>
                          {index % 2 === 0
                            ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                            : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                        </p>
                      </div>
                    </div>

                    {/* Button & Price */}
                    <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#8B5E3C",
                          color: "white",
                          borderRadius: "30px",
                          padding: "8px 20px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                      <div className="text-end">
                        <strong style={{ fontSize: "14px" }}>₹1800</strong>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          Get 50% OFF ₹2400
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Heading + Ornaments */}
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
            <img src="/FD1.png" alt="left" className={styles.ornament} />
            <div>
              <span
                className="badge rounded-pill px-4 py-2 mb-2 fw-semibold"
                style={{
                  backgroundColor: "#BA7E38", // 💡 Replace with your desired color
                  color: "white", // 👈 Set text color to contrast
                }}
              >
                HAIR THERAPY
              </span>

              <h2 className="fw-bold fs-5 m-0 text-dark">
                दिव्य चांदनं त्वं मम त्वचायै च शुभम् <br />
                सौन्दर्यसाधनं मम मनःसुखदायकम्
              </h2>
            </div>
            <img src="/FD2.png" alt="right" className={styles.ornament} />
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          position: "relative",
          marginTop: "-80px",
        }}
      >
        {/* Background Container - Now Responsive */}
        <div className={`w-100 ${styles.responsiveContainer}`}>
          {/* Background Image (absolute, full cover) */}
          <Image
            src="/background3.png"
            alt="Featured Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "30px",
            }}
          />

          {/* Foreground content on top of image */}
          <div className={styles.responsiveContent}>
            {/* Grid of Cards */}
            <div className="container">
              <div className="row gy-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 d-flex flex-column align-items-center"
                  >
                    <div
                      className="card w-100"
                      style={{
                        height: "350px",
                        backgroundImage: `url(${
                          index % 2 === 0 ? "/card11.png" : "/card12.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Shloka */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          color: "#fff",
                          fontSize: "0.6rem",
                          fontFamily: "Georgia, serif",
                          maxWidth: "65%",
                          lineHeight: "1.4",
                        }}
                      >
                        मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                        यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                      </div>

                      {/* Top-right label */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: "#fff",
                          padding: "4px 10px",
                          fontSize: "0.6rem",
                          borderRadius: "20px",
                          fontWeight: 500,
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Ingredients & Benefits
                      </div>

                      {/* Bottom Content */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          color: "#fff",
                          padding: "1rem",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "14px" }}>
                          {index % 2 === 0
                            ? "COSMIC BODY OIL"
                            : "LAVISH BODY SCRUB"}
                        </h5>
                        <p style={{ fontSize: "12px" }}>
                          {index % 2 === 0
                            ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                            : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                        </p>
                      </div>
                    </div>

                    {/* Button & Price */}
                    <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#8B5E3C",
                          color: "white",
                          borderRadius: "30px",
                          padding: "8px 20px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                      <div className="text-end">
                        <strong style={{ fontSize: "14px" }}>₹1800</strong>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          Get 50% OFF ₹2400
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white text-center">
        {/* Heading with left and right decorative images */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
          <Image
            src="/left-design.png"
            alt="left decorative"
            width={32}
            height={32}
          />
          <h2
            className="text-dark"
            style={{
              fontFamily: "'Cinzel', serif",
              fontWeight: "600",
              fontSize: "2rem",
              letterSpacing: "0.05em",
              margin: 0,
            }}
          >
            TESTIMONIALS
          </h2>
          <Image
            src="/right-design.png"
            alt="right decorative"
            width={32}
            height={32}
          />
        </div>
        {/* Subtitle */}
        <p
          className="text-muted mb-5"
          style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
        >
          Some quotes from our happy customers
        </p>

        {/* Cards and arrows container */}
        <div className="d-flex justify-content-center align-items-center gap-3">
          {/* Left arrow */}
          <button
            className="btn btn-link p-0"
            style={{
              color: "#5c0b28",
              fontSize: "2rem",
              userSelect: "none",
              marginLeft: "100px",
            }}
            aria-label="Previous"
          >
            &#x276E;
          </button>

          {/* Cards container */}
          <div className="container p-0" style={{ maxWidth: "1000px" }}>
            <div className="row justify-content-center gy-4">
              {[1, 2, 3].map((_, idx) => (
                <div key={idx} className="col-12 col-md-4">
                  <div
                    className="card shadow-sm"
                    style={{
                      minHeight: "220px",
                      borderRadius: "8px",
                      padding: "20px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.4",
                        fontFamily: "Georgia, serif",
                      }}
                    >
                      <span style={{ fontWeight: "bold" }}>&ldquo;</span> I love
                      this Vitamin C serum, I can see my skin becomes brighter
                      after one to two days only which is remarkable.{" "}
                      <span style={{ fontWeight: "bold" }}>&rdquo;</span>
                    </p>
                    <div className="d-flex align-items-center mt-4">
                      <div
                        className="rounded-circle "
                        style={{
                          width: "40px",
                          height: "40px",
                          backgroundColor: "#D9D9D9",
                        }}
                      />
                      <span
                        className="ms-2 text-secondary"
                        style={{
                          fontFamily: "Arial, sans-serif",
                          fontWeight: "500",
                        }}
                      >
                        — Luisa
                      </span>
                    </div>
                    <div
                      className="mt-3 text-danger"
                      style={{ fontSize: "1rem" }}
                    >
                      <span
                        style={{
                          position: "relative",
                          left: "-90px",
                          display: "inline-block",
                        }}
                      >
                        &#9733;&#9733;&#9733;&#9733;&#9734;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            className="btn btn-link p-2"
            style={{
              color: "#5c0b28",
              fontSize: "2rem",
              userSelect: "none",
              marginRight: "100px",
            }}
            aria-label="Next"
          >
            &#x276F;
          </button>
        </div>
      </section>
    </div>
  );
}
