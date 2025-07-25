"use client";

import Image from "next/image";
export default function RoyalPromise() {
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
      </section>

      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 15px",
          minHeight: "170vh",
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
                  width: "455px",
                  height: "492px",
                  objectFit: "cover",
                  borderRadius: "200px",
                  position: "relative",
                  marginTop: "100px",
                  marginLeft: "80px",
                }}
              />
            </div>

           
            <div className="col-md-8">
              <div className="ps-md-5 pt-5">
                {[
                  {
                    title:
                      "TIME–TESTED FORMULAS DERIVED FROM ANCIENT SCIENCES AND SCRIPTURES",
                    desc: "Rooted in Ayurveda and proven through generations of ritual wisdom.",
                  },
                  {
                    title:
                      "HIGH–QUALITY, ORGANIC INGREDIENTS FOR OPTIMAL EFFICACY",
                    desc: "Sourced from certified farms to ensure purity and potency in every drop.",
                  },
                  {
                    title: "ECO–FRIENDLY MANUFACTURING PROCESSES",
                    desc: "Produced in small batches using local ingredients, seasonal methods.",
                  },
                  {
                    title: "CRUELTY–FREE AND SUSTAINABLE PRACTICES",
                    desc: "All products are ethically sourced—never tested on animals, always kind to the Earth.",
                  },
                  {
                    title: "ECO–FRIENDLY MANUFACTURING PROCESSES",
                    desc: "Produced in small batches using local ingredients, seasonal methods.",
                  },
                  {
                    title: "CRUELTY–FREE AND SUSTAINABLE PRACTICES",
                    desc: "All products are ethically sourced—never tested on animals, always kind to the Earth.",
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
                        fontSize: "13px",
                      }}
                    >
                      {item.title}
                    </h6>

                  
                    <ul className="mt-2 ps-3">
                      <li style={{ fontSize: "13px", color: "#333" }}>
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
