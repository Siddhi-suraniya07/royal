'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import '../styles/Navbar.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (path) => pathname === path;
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const handleCartClick = (e) => {
    e.preventDefault();
    setCartOpen((open) => !open);
  };
  const handleCloseCart = () => setCartOpen(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const idx = prev.findIndex((item) => item.title === product.title);
      if (idx !== -1) {
        const updated = [...prev];
        updated[idx].qty += 1;
        return updated;
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };
  const handleRemoveItem = (title) => {
    setCartItems((prev) => prev.filter((item) => item.title !== title));
  };
  const handleClearCart = () => setCartItems([]);
  const handleQtyChange = (title, delta) => {
    setCartItems((prev) => prev.map((item) =>
      item.title === title ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNav = (href) => {
    setMobileMenuOpen(false);
    router.push(href); // ✅ FIXED: replaced router.replace() + setTimeout
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-1 fixed-top">
        <div className="container-fluid px-5">
          <div className="row w-100 align-items-center position-relative">
            <div className="col-4 d-none d-lg-flex justify-content-start gap-4 align-items-center nav-links-left">
              <Link href="/" className={`nav-link nav-item fs-6 nudge-right ${isActive("/") ? "active-link" : ""}`}>ROYAL HOME</Link>
              <Link href="/royal-promises" className={`nav-link nav-item fs-6 nudge-rig ${isActive("/royal-promises") ? "active-link" : ""}`}>THE ROYAL PROMISE</Link>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <Link href="/" className="navbar-brand mx-auto">
                <Image src="/royal-logo.png" alt="Royal Logo" width={50} height={50} style={{ objectFit: "contain" }} />
              </Link>
            </div>
            <div className="col-4 d-none d-lg-flex justify-content-end gap-5 position-relative nav-links-right">
              <Link href="/our-essence" className={`nav-link ${isActive("/our-essence") ? "active-link" : ""}`}>OUR ESSENCE</Link>
              <Link href="/featured-products" className={`nav-link nav-item fs-8  ${isActive("/featured-products") ? "active-link" : ""}`}>FEATURED PRODUCTS</Link>
              <Link href="#" className="nav-link nav-icon"><i className="bi bi-person fs-5"></i></Link>
              <button className="nav-link nav-icon bg-transparent border-0 p-0" style={{ outline: "none", boxShadow: "none" }} onClick={handleCartClick} aria-label="Open cart">
                <i className="bi bi-cart fs-5"></i>
              </button>
              {cartOpen && (
                <div
                  className="cart-popup position-absolute"
                  style={{
                    top: '48px',
                    right: 0,
                    minWidth: '340px',
                    background: '#fff',
                    borderRadius: '18px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                    zIndex: 9999,
                    padding: '1.5rem 1.5rem 1.2rem 1.5rem',
                    color: '#2c1e1e',
                    maxWidth: '95vw',
                  }}
                >
                  <button
                    onClick={handleCloseCart}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '14px',
                      background: 'none',
                      border: 'none',
                      fontSize: '1.2rem',
                      color: '#888',
                      cursor: 'pointer',
                    }}
                    aria-label="Close cart"
                  >
                    &times;
                  </button>
                  <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.5rem', color: '#5c0b28' }}>
                    SHOPPING CART
                  </div>
                  <div style={{ fontSize: '0.98rem', color: '#444', marginBottom: '1.2rem' }}>
                    {cartItems.length === 0 ? (
                      <>Your Cart is Currently Empty.</>
                    ) : (
                      <>
                        Currently {cartItems.reduce((sum, item) => sum + item.qty, 0)} Item{cartItems.reduce((sum, item) => sum + item.qty, 0) > 1 ? 's' : ''} Were Added in Cart
                      </>
                    )}
                  </div>
                  {cartItems.length > 0 && (
                    <div style={{ maxHeight: '220px', overflowY: 'auto', marginBottom: '1rem' }}>
                      {cartItems.map((item, idx) => (
                        <div key={item.title} className="d-flex align-items-center mb-3" style={{ borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                          <img src={item.image} alt={item.title} style={{ width: 54, height: 54, borderRadius: 8, objectFit: 'cover', marginRight: 12 }} />
                          <div className="flex-grow-1">
                            <div style={{ fontWeight: 600, fontSize: '1rem', color: '#5c0b28' }}>{item.title}</div>
                            <div style={{ fontSize: '0.98rem', color: '#444' }}>{item.price}</div>
                            <div className="d-flex align-items-center mt-1">
                              <button className="btn btn-sm btn-outline-secondary px-2 py-0 me-1" style={{ fontSize: '0.9rem', borderRadius: '50%' }} onClick={() => handleQtyChange(item.title, -1)}>-</button>
                              <span style={{ minWidth: 22, textAlign: 'center' }}>{item.qty}</span>
                              <button className="btn btn-sm btn-outline-secondary px-2 py-0 ms-1" style={{ fontSize: '0.9rem', borderRadius: '50%' }} onClick={() => handleQtyChange(item.title, 1)}>+</button>
                              <button className="btn btn-sm btn-link text-danger ms-2" style={{ fontSize: '0.9rem' }} onClick={() => handleRemoveItem(item.title)}>&times;</button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {cartItems.length > 0 && (
                    <div className="text-center mb-2">
                      <button className="btn btn-link text-danger p-0" style={{ fontSize: '0.95rem' }} onClick={handleClearCart}>Clear All Items</button>
                    </div>
                  )}
                  <Link
                    href="/featured-products"
                    className="btn btn-dark w-100"
                    style={{
                      background: '#5c0b28',
                      color: '#fff',
                      borderRadius: '22px',
                      fontWeight: 500,
                      fontSize: '1rem',
                      padding: '8px 0',
                    }}
                  >
                    VIEW PRODUCTS
                  </Link>
                </div>
              )}
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center d-lg-none" style={{ position: "absolute", right: 0, top: 0, height: "100%" }}>
              <button
                className="navbar-toggler"
                style={{ border: "none", background: "transparent", fontSize: "2rem", padding: "0.5rem 1rem" }}
                onClick={() => setMobileMenuOpen((open) => !open)}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" style={{ fontSize: "2rem" }}>
                  <i className={`bi ${mobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile right-side drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""} d-lg-none`}>
        <div className="drawer-content">
          <button type="button" className="drawer-close" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <i className="bi bi-x" style={{ fontSize: "2rem" }}></i>
          </button>
          <Link href="/" className="drawer-logo" onClick={() => setMobileMenuOpen(false)}>
            <Image src="/royal-logo.png" alt="Royal Logo" width={44} height={44} style={{ objectFit: "contain", marginBottom: 24 }} />
          </Link>
          <Link 
            href="/" 
            className={`drawer-link ${isActive("/") ? "active-link" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            ROYAL HOME
          </Link>
          <Link 
            href="/royal-promises" 
            className={`drawer-link ${isActive("/royal-promises") ? "active-link" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            THE ROYAL PROMISE
          </Link>
          <Link 
            href="/our-essence" 
            className={`drawer-link ${isActive("/our-essence") ? "active-link" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            OUR ESSENCE
          </Link>
          <Link 
            href="/featured-products" 
            className={`drawer-link ${isActive("/featured-products") ? "active-link" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            FEATURED PRODUCTS
          </Link>
          <button type="button" className="drawer-link" onClick={() => { setMobileMenuOpen(false); }}><i className="bi bi-person"></i> Account</button>
          <button type="button" className="drawer-link drawer-cart" onClick={() => { setMobileMenuOpen(false); handleCartClick({preventDefault:()=>{}}); }}><i className="bi bi-cart"></i> Cart</button>
        </div>
        <div className="drawer-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
      </div>


      {children && React.cloneElement(children, { onAddToCart: handleAddToCart })}
    </>
  );
}
