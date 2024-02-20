"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-5 mt-3 row">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Product</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="/" className="nav-link p-0 text-body-secondary">
                Overview
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Features
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Solutions
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Tutorials
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Releases
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                About us
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Careers
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Press
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                News
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Media kit
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3">
          <h5>Legal</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Terms
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Privacy
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="#" className="nav-link p-0 text-body-secondary">
                Cookies
              </Link>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Licenses
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Settings
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="text"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>&copy; 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
