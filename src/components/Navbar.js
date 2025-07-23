'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import '../styles/Navbar.css'; // keep your custom styles if needed

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-1 fixed-top">
      <div className="container-fluid px-5">
        <div className="row w-100 align-items-center">

          {/* Left Side Nav */}
          <div className="col-4 d-flex justify-content-start gap-4 align-items-center">
  <Link href="/" className={`nav-link nav-item fw-semibold fs-6 nudge-right ${isActive('/') ? 'active-link' : ''}`}>
  ROYAL HOME
</Link>

  <Link href="/royal-promises" className={`nav-link nav-item fw-semibold fs-6 nudge-rig ${isActive('/royal-promises') ? 'active-link' : ''}`}>
  THE ROYAL PROMISE
</Link>
</div>



          {/* Center Logo */}
          <div className="col-4 d-flex justify-content-center">
            <Link href="/" className="navbar-brand mx-auto">
              <Image
                src="/royal-logo.png"
                alt="Royal Logo"
                width={50}
                height={50}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>

          {/* Right Side Nav */}
          <div className="col-4 d-flex justify-content-end gap-5">
            <Link
  href="/our-essence"
  className={`nav-link ${isActive('/our-essence') ? 'active-link' : ''}`}
>
  OUR ESSENCE
</Link>

            <Link href="/featured-products" className={`nav-link nav-item fw-semibold fs-8  ${isActive('/featured-products') ? 'active-link' : ''}`}>
              FEATURED PRODUCTS
            </Link>
            <Link href="#" className="nav-link nav-icon">
              <i className="bi bi-person fs-5"></i>
            </Link>
            <Link href="#" className="nav-link nav-icon">
              <i className="bi bi-cart fs-5"></i>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}
