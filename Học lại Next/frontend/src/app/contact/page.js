"use client";
import React from "react";
// Import the components from Next.js
import Head from "next/head";
import Link from "next/link";

// Define the component for the contact page
export default function Contact() {
  // Define the state variables for the form fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  // Define the state variables for the form validation and feedback
  const [validated, setValidated] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // Define the handler function for the form submission
  const handleSubmit = async (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Check the validity of the form fields
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Set the loading state to true
      setLoading(true);

      // Create the data object for the form fields
      const data = {
        name,
        email,
        subject,
        message,
      };

      // Send the data to a server-side function or a third-party service
      // For example, you can use Next.js API routes or SB Forms
      // Here we use a mock API for demonstration purposes
      try {
        const response = await fetch("https://reqres.in/api/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        // If the response is successful, set the success state to true
        if (response.ok) {
          setSuccess(true);
        } else {
          // If the response is not successful, set the error state to the error message
          setError(result.error);
        }
      } catch (error) {
        // If there is an error, set the error state to the error message
        setError(error.message);
      }

      // Set the loading state to false
      setLoading(false);
    }

    // Set the validated state to true
    setValidated(true);
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Contact Form</h2>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper border border-5 border-primary p-1 rounded-3">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Get in touch</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form method="POST" id="contactForm" name="contactForm">
                        <div className="row">
                          <div className="col-md-6 py-3">
                            <div className="form-group">
                              {" "}
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 py-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 py-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 py-3">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder="Message"
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="submit"
                                value="Send Message"
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex align-items-stretch text-white">
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4 rounded">
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-center gap-2">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text p-3">
                          <p>
                            <span>Address: </span>{" "}
                            <a href="tel://1234567920" className="text-white">
                              198 West 21th Street, Suite 721 New York NY 10016
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center gap-2">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text p-3">
                          <p>
                            <span>Phone: </span>{" "}
                            <a href="tel://1234567920" className="text-white">
                              + 1235 2355 98
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center gap-2">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text p-3">
                          <p>
                            <span>Email: </span>{" "}
                            <a
                              href="email://apeironisme@gmail.com"
                              className="text-white"
                            >
                              apeironisme@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center gap-2">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text p-3">
                          <p>
                            <span>Website: </span>
                            <a href="#" className="text-white">
                              web chưa có
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
