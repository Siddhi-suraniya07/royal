'use client';

import Image from 'next/image';

export default function OurEssence() {
  return (
  <>
    <section
      className="d-flex flex-column justify-content-center align-items-center position-relative text-center"
      style={{
        minHeight: '60vh',
        paddingTop: '120px',     // for fixed navbar offset
        backgroundColor: '#fff',
      }}
    >
      {/* Decorative Watermark */}
      <Image
        src="/watermark.png"      // replace with your watermark asset
        alt="Watermark"
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

      {/* Main Heading */}
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
        className="mt-2 text-dark"
        style={{
          fontSize: '14px',
          fontWeight: 500,
          maxWidth: '700px',
          zIndex: 1,
        }}
      >
        OUR ROYAL PROMISE IS BUILT ON INTEGRITY, TRANSPARENCY, AND TIMELESS CARE – FOR YOU AND THE PLANET.
      </p>

      {/* Circular Down-Arrow Button */}
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

      {/* Placeholder for Next Section Anchor */}
      <div id="essence-next"></div>
    </section>
      <section className="my-5 d-flex justify-content-center">
  <div
    className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
    style={{
      backgroundColor: '#4D0B2F', // You can change this to your desired background color
       width: '1205px',           // Fixed width of the section box
      height: '400px',           // Fixed height of the section box
      borderRadius: '20px',
    }}
  >
    {/* Left Text Section */}
    <div className="p-4 p-md-5 text-white" style={{ flex: 1 }}>
      <h5 className="fw-semibold" style={{ letterSpacing: '1px', marginTop: '60px' }}>
        GENESIS
      </h5>
      <p style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '10px' }}>
        Raajsi is a premium Ayurvedic wellness and beauty brand, crafted for those who seek grace, balance, and timeless elegance in their self-care. Rooted in the sacred traditions of Indian royalty and ancient healing, Raajsi is where Ayurveda meets regal ritual, creating an experience that is as restorative as it is luxurious.
      </p>
    </div>

    {/* Right Image Section */}
    <div style={{ flex: 1,height: '400px' }}>
      <img
        src="/o1.png" // Replace with your actual image path
        alt="Genesis Artwork"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
      borderRadius: '0px',

        }}
      />
    </div>
  </div>
</section>
<section className="my-5 d-flex justify-content-center">
  <div
    className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
    style={{
      width: '1210px',
      minHeight: '300px',
      backgroundColor: '#6A5013', // <- Update this to your custom background
    }}
  >
    {/* Left Image */}
    <div style={{ flex: 1 }}>
      <img
        src="/o1.png" // <- Replace with your actual image path
        alt="Creative Artistic Description"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Right Content */}
    <div
      className="p-4 p-md-5 text-white d-flex flex-column justify-content-center"
      style={{
        flex: 1,
        color: 'white',
        paddingTop: '30px', // You can tweak top spacing here
      }}
    >
      <h5 className="fw-semibold mb-3" style={{ letterSpacing: '1px', fontFamily: 'Rose Velt Personal Use, serif' }}>
        CREATIVE / ARTISTIC DESCRIPTION
      </h5>
      <p style={{ fontSize: '14px', lineHeight: '1.7' }}>
        Bathed in the golden glow of tradition, Raajsi is a sensory journey through time — where the velvet touch
        of uttaras, the aroma of pure rose, and the soothing whispers of sandalwood evoke the grandeur of palatial
        rituals.
        <br /><br />
        Every drop, every grain, every scent is a nod to a time when beauty was sacred and rituals were revered.
        Here, skincare is poetry, and self-care is an ode to your inner queen.
      </p>
    </div>
  </div>
</section>

      <section className="my-5 d-flex justify-content-center">
  <div
    className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
    style={{
      backgroundColor: '#BA7E38', // You can change this to your desired background color
       width: '1205px',           // Fixed width of the section box
      height: '400px',           // Fixed height of the section box
      borderRadius: '20px',
    }}
  >
    {/* Left Text Section */}
    <div className="p-4 p-md-5 text-white" style={{ flex: 1 }}>
      <h5 className="fw-semibold" style={{ letterSpacing: '1px', marginTop: '60px' }}>
        GENESIS
      </h5>
      <p style={{ fontSize: '18px', lineHeight: '1.9', marginTop: '10px' }}>
        Raajsi is a premium Ayurvedic wellness and beauty brand, crafted for those who seek grace, balance, and timeless elegance in their self-care. Rooted in the sacred traditions of Indian royalty and ancient healing, Raajsi is where Ayurveda meets regal ritual, creating an experience that is as restorative as it is luxurious.
      </p>
    </div>

    {/* Right Image Section */}
    <div style={{ flex: 1,height: '400px' }}>
      <img
        src="/o1.png" // Replace with your actual image path
        alt="Genesis Artwork"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
      borderRadius: '0px',

        }}
      />
    </div>
  </div>
</section>

<section className="my-5 d-flex justify-content-center">
  <div
    className="d-flex flex-column flex-md-row rounded-4 overflow-hidden"
    style={{
      width: '1210px',
      minHeight: '300px',
      backgroundColor: '#631E44', // <- Update this to your custom background
    }}
  >
    {/* Left Image */}
    <div style={{ flex: 1 }}>
      <img
        src="/o1.png" // <- Replace with your actual image path
        alt="Creative Artistic Description"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Right Content */}
    <div
      className="p-4 p-md-5 text-white d-flex flex-column justify-content-center"
      style={{
        flex: 1,
        color: 'white',
        paddingTop: '30px', // You can tweak top spacing here
      }}
    >
      <h5 className="fw-semibold mb-3" style={{ letterSpacing: '1px', fontFamily: 'Rose Velt Personal Use, serif' }}>
        CREATIVE / ARTISTIC DESCRIPTION
      </h5>
      <p style={{ fontSize: '14px', lineHeight: '1.7' }}>
        Bathed in the golden glow of tradition, Raajsi is a sensory journey through time — where the velvet touch
        of uttaras, the aroma of pure rose, and the soothing whispers of sandalwood evoke the grandeur of palatial
        rituals.
        <br /><br />
        Every drop, every grain, every scent is a nod to a time when beauty was sacred and rituals were revered.
        Here, skincare is poetry, and self-care is an ode to your inner queen.
      </p>
    </div>
  </div>
</section>


</>

  );
}
