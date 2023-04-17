import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light text-center text-white mt-5">
    
      <div className="container p-4 pb-0">
      
        <section className="mb-4 flex justify-center space-x-6">
          
          {/* Facebook */}
          
          <Link
            className="btn text-white btn-floating m-1 rounded-full px-2"
            style={{ backgroundColor: "#3b5998" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
          
          {/* Twitter */}
          
          <Link
            className="btn text-white btn-floating m-1  rounded-full px-1.5 py-0.5"
            style={{ backgroundColor: "#55acee" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </Link>
          
          {/* Google */}
          
          <Link
            className="btn text-white btn-floating m-1  rounded-full px-1.5 py-0.5"
            style={{ backgroundColor: "#dd4b39" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </Link>
          
          {/* Instagram */}
          
          <Link
            className="btn text-white btn-floating m-1  rounded-full px-1.5 py-0.5"
            style={{ backgroundColor: "#ac2bac" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          {/*Linkedin*/}
          
          <Link
            className="btn text-white btn-floating m-1  rounded-full px-1.5 py-0.5"
            style={{ backgroundColor: "#0082ca" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
          
          {/* Github */}
          
          <Link
            className="btn text-white btn-floating m-1  rounded-full px-1.5 py-0.5"
            style={{ backgroundColor: "#333333" }}
            to="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </Link>

        </section>
        
      </div>
     
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <Link className="text-white" to="https://mdbootstrap.com/">
          MDBootstrap.com
        </Link>
      </div>
      
    </footer>
  );
}
