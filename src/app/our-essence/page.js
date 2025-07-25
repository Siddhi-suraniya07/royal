"use client";

import Image from "next/image";

export default function OurEssence() {
  return (
    <>
      <style jsx>{`
        @media (max-width: 600px) {
          section.d-flex.flex-column.justify-content-center.align-items-center.position-relative.text-center {
            padding-top: 48px !important;
          }
          h2 {
            font-size: 1.2rem !important;
            line-height: 1.2 !important;
            padding: 0 8px !important;
          }
          p.mt-2.text-dark {
            font-size: 0.98rem !important;
            max-width: 98vw !important;
            padding: 0 8px !important;
          }
          .mt-4 span {
            width: 32px !important;
            height: 32px !important;
            font-size: 1rem !important;
          }
          .my-5.d-flex.justify-content-center > div {
            flex-direction: column !important;
            width: 98vw !important;
            min-width: 0 !important;
            height: auto !important;
            border-radius: 12px !important;
            margin-bottom: 18px !important;
          }
          .my-5.d-flex.justify-content-center .p-4, .my-5.d-flex.justify-content-center .p-md-5 {
            padding: 18px 10px !important;
            margin-top: 0 !important;
          }
          .my-5.d-flex.justify-content-center h5 {
            font-size: 1.05rem !important;
            margin-top: 0 !important;
            margin-bottom: 8px !important;
          }
          .my-5.d-flex.justify-content-center p {
            font-size: 0.95rem !important;
            line-height: 1.5 !important;
            margin-top: 0 !important;
            margin-bottom: 8px !important;
          }
          .my-5.d-flex.justify-content-center img {
            width: 100% !important;
            height: 160px !important;
            object-fit: cover !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
      <section
        className="d-flex flex-column justify-content-center align-items-center position-relative text-center"
        style={{
          minHeight: "60vh",
          paddingTop: "120px",
          backgroundColor: "#fff",
        }}
      >


        {/* Main Heading */}
        <h2
          style={{
            fontFamily: "Rose Velt Personal Use, serif",
            fontSize: "32px",
            color: "#B48338",
            fontWeight: 400,
            lineHeight: "1.06",
            zIndex: 1,
          }}
        >
          AT RAAJSI, LUXURY MEETS RESPONSIBILITY.
        </h2>

        {/* Subheading */}
        <p
          className="mt-2 text-dark"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            maxWidth: "700px",
            zIndex: 1,
          }}
        >
          OUR ROYAL PROMISE IS BUILT ON INTEGRITY, TRANSPARENCY, AND TIMELESS
          CARE – FOR YOU AND THE PLANET.
        </p>

        {/* Circular Down-Arrow Button */}
        <div className="mt-4 d-flex justify-content-center">
          <span
            style={{
              fontSize: "1.2rem",
              border: "1px solid #000",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "#fff",
            }}
          >
            &#8595;
          </span>
        </div>

        {/* Placeholder for Next Section Anchor */}
        <div id="essence-next"></div>
      </section>
      <section className="my-5 d-flex justify-content-center">
        <div
          className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
          style={{
            backgroundColor: "#4D0B2F", 
            width: "1205px", 
            height: "400px",
            borderRadius: "20px",
          }}
        >
          {/* Left Text Section */}
          <div className="p-4 p-md-5 text-white" style={{ flex: 1 }}>
            <h5
              className="fw-semibold"
              style={{ letterSpacing: "1px", marginTop: "60px" }}
            >
              GENESIS
            </h5>
            <p
              style={{ fontSize: "18px", lineHeight: "1.9", marginTop: "10px" }}
            >
              Raajsi is a premium Ayurvedic wellness and beauty brand, crafted
              for those who seek grace, balance, and timeless elegance in their
              self-care. Rooted in the sacred traditions of Indian royalty and
              ancient healing, Raajsi is where Ayurveda meets regal ritual,
              creating an experience that is as restorative as it is luxurious.
            </p>
          </div>

          {/* Right Image Section */}
          <div style={{ flex: 1, height: "400px" }}>
            <img
              src="/o1.png" 
              alt="Genesis Artwork"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0px",
              }}
            />
          </div>
        </div>
      </section>
      <section className="my-5 d-flex justify-content-center">
        <div
          className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
          style={{
            width: "1210px",
            minHeight: "300px",
            backgroundColor: "#6A5013", 
          }}
        >
          {/* Left Image */}
          <div style={{ flex: 1 }}>
            <img
              src="/o1.png" 
              alt="Creative Artistic Description"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Content */}
          <div
            className="p-4 p-md-5 text-white d-flex flex-column justify-content-center"
            style={{
              flex: 1,
              color: "white",
              paddingTop: "30px", 
            }}
          >
            <h5
              className="fw-semibold mb-3"
              style={{
                letterSpacing: "1px",
                fontFamily: "Rose Velt Personal Use, serif",
              }}
            >
              CREATIVE / ARTISTIC DESCRIPTION
            </h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
              Bathed in the golden glow of tradition, Raajsi is a sensory
              journey through time — where the velvet touch of uttaras, the
              aroma of pure rose, and the soothing whispers of sandalwood evoke
              the grandeur of palatial rituals.
              <br />
              <br />
              Every drop, every grain, every scent is a nod to a time when
              beauty was sacred and rituals were revered. Here, skincare is
              poetry, and self-care is an ode to your inner queen.
            </p>
          </div>
        </div>
      </section>

      <section className="my-5 d-flex justify-content-center">
        <div
          className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
          style={{
            backgroundColor: "#BA7E38",
            width: "1205px",
            height: "400px",
            borderRadius: "20px",
          }}
        >
          <div className="p-4 p-md-5 text-white" style={{ flex: 1 }}>
            <h5
              className="fw-semibold"
              style={{ letterSpacing: "1px", marginTop: "60px" }}
            >
              GENESIS
            </h5>
            <p
              style={{ fontSize: "18px", lineHeight: "1.9", marginTop: "10px" }}
            >
              Raajsi is a premium Ayurvedic wellness and beauty brand, crafted
              for those who seek grace, balance, and timeless elegance in their
              self-care. Rooted in the sacred traditions of Indian royalty and
              ancient healing, Raajsi is where Ayurveda meets regal ritual,
              creating an experience that is as restorative as it is luxurious.
            </p>
          </div>

          <div style={{ flex: 1, height: "400px" }}>
            <img
              src="/o1.png"
              alt="Genesis Artwork"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "0px",
              }}
            />
          </div>
        </div>
      </section>

      <section className="my-5 d-flex justify-content-center">
        <div
          className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
          style={{
            width: "1210px",
            minHeight: "300px",
            backgroundColor: "#631E44",
          }}
        >
          <div style={{ flex: 1 }}>
            <img
              src="/o1.png"
              alt="Creative Artistic Description"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Content */}
          <div
            className="p-4 p-md-5 text-white d-flex flex-column justify-content-center"
            style={{
              flex: 1,
              color: "white",
              paddingTop: "30px", // You can tweak top spacing here
            }}
          >
            <h5
              className="fw-semibold mb-3"
              style={{
                letterSpacing: "1px",
                fontFamily: "Rose Velt Personal Use, serif",
              }}
            >
              CREATIVE / ARTISTIC DESCRIPTION
            </h5>
            <p style={{ fontSize: "14px", lineHeight: "1.7" }}>
              Bathed in the golden glow of tradition, Raajsi is a sensory
              journey through time — where the velvet touch of uttaras, the
              aroma of pure rose, and the soothing whispers of sandalwood evoke
              the grandeur of palatial rituals.
              <br />
              <br />
              Every drop, every grain, every scent is a nod to a time when
              beauty was sacred and rituals were revered. Here, skincare is
              poetry, and self-care is an ode to your inner queen.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
