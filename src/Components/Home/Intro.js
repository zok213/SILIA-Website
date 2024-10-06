import React from "react";

function Intro() {
  return (
    <section id="intro">
      <div className="container">
        <div className="row my-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="h2 section-heading">We've what you need!</div>
            <div className="col-lg-4 divider my-2" />
            <div className="text-center normal-text">
            Inspired by the story "A Silent Voice", we plan to develop an intelligent translation app that will help bridge communication between the hearing-impaired and the world.

2 million people with hearing impairments but there is a severe lack of qualified sign language interpreters.



Our initiative seeks to close this gap by providing tools and support to help hearing-impaired individuals engage fully in society. 

By enhancing accessibility, increasing job opportunities, and leveraging technology, we aim to empower the community.            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
