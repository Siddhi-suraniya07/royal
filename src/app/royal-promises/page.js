'use client';

import Image from 'next/image';

export default function RoyalPromise() {
  return (
    <>
      {/* Section 1 - Main Intro Section */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: '80vh',
          paddingTop: '120px',
          position: 'relative',
          backgroundColor: '#fff',
        }}
      >
        {/* Background Floral Icon */}
        <Image
          src="/floral-bg-icon.png"
          alt="Floral Background"
          width={200}
          height={200}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.05,
            zIndex: 0,
          }}
        />

        {/* Heading */}
        <h2
          style={{
            fontFamily: 'Rose Velt Personal Use, serif',
            fontSize: '32px',
            color: '#B48338',
            fontWeight: 400,
            lineHeight: '1.06',
            zIndex: 1,
          }}
        >
          AT RAAJSI, LUXURY MEETS RESPONSIBILITY.
        </h2>

        {/* Subheading */}
        <p
          style={{
            fontSize: '14px',
            fontWeight: '500',
            maxWidth: '700px',
            zIndex: 1,
          }}
          className="text-dark mt-2"
        >
          OUR ROYAL PROMISE IS BUILT ON INTEGRITY, TRANSPARENCY, AND TIMELESS CARE – FOR YOU AND THE PLANET.
        </p>

        {/* Down Arrow */}
        <div className="mt-4 d-flex justify-content-center">
          <span
            style={{
              fontSize: '1.2rem',
              border: '1px solid #000',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backgroundColor: '#fff',
            }}
          >
            &#8595;
          </span>
        </div>
      </section>

      {/* Section 2 - Your Next Section (e.g., Promise Features) */}
<section
  className="d-flex align-items-center justify-content-center"
  style={{
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 15px',
    minHeight: '170vh',
    position: 'relative',
    borderRadius: '30px',
    overflow: 'hidden',      // <-- add this
    top: '-50px',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: '-20px',  // can keep this to shift bg image upward
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/background3.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '30px',
      zIndex: -1,
       opacity: 0.5, 
    }}
  ></div>


  <div className="container">
    {/* Your inner content (like image + text column) will go here */}
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center">
        {/* Left image or artwork */}
        <img
          src="/image5.png" // Replace with your circular art image
          alt="Royal Promise Art"
          className="img-fluid"
          style={{
            width: '455px',
            height: '492px',
            objectFit: 'cover',
            borderRadius:'200px',
             position: 'relative',        // <-- make position relative so margin works
    marginTop: '-400px',          // <-- move image upwards
    marginLeft: '150px',   
          }}
        />
        
      </div>
      
       
    </div>
  </div>
</section>

    </>
  );
}
