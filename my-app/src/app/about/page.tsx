"use client";
import React from "react";

export default function About() {
  return (
    <section
      className="about h-screen flex items-center justify-center bg-cover bg-center text-white px-10 text-2xl relative"
      
    >
      <div className="bg-gray-600 bg-opacity-60 p-8 rounded-2xl max-w-lg">
        <h2 className="text-4xl font-bold mb-6 text-center" data-aos="fade-up">
          About Us
        </h2>
        <p>
          Welcome to Blogging App, the platform where ideas come to life and
          stories find a home. We empower creators, thinkers, and dreamers to
          share their perspectives with the world. Whether you &apos; re a seasoned
          writer or just starting your journey, our intuitive tools make it easy
          to craft, publish, and grow your audience. At Blogging App, every
          voice matters, and every story has the power to inspire. Join us and
          turn your thoughts into a thriving digital presence.
        </p>
      </div>
    </section>
  );
}
