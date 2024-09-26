import React from "react";
import { Link } from "react-router-dom";
import imgConvert from "../../Assets/convert.png";
import imgLearnSign from "../../Assets/learn-sign.jpg";
import imgVideos from "../../Assets/videos.png";

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row mt-5">
          <div
            className="col-md-12 d-flex justify-content-center align-items-center"
            style={{ flexDirection: "column" }}
          >
            <div className="h2 section-heading">Our Services</div>
            <div className="col-lg-4 divider my-2" />
            <div className="text-center normal-text">
            SiLIA represents a significant advancement in assistive technology for deaf individuals, offering a practical and effective solution for communication challenges. 
<br></br>
By combining cutting-edge technology with a focus on user experience, this project aims to make a meaningful impact on the lives of deaf individuals and foster a more inclusive society.
            </div>
          </div>
        </div>
        <div className="card-deck">
          <div className="row">
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgConvert} alt="Convert Clipart" />
                <div className="card-body">
                  <h5 className="card-title">Convert</h5>
                  <p className="card-text">
                    Want to convert audio or text into Vietnamese Sign Language?
                    Then, you are in the right place! Provide your audio by
                    speaking into your mic or type the text that you want to
                    convert into VSL and within a few clicks watch the magic
                    happen!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/convert"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgLearnSign} alt="Learn Sign Clipart" />
                <hr className="m-0"></hr>
                <div className="card-body">
                  <h5 className="card-title">Learn Sign</h5>
                  <p className="card-text">
                    Curious about Vietnamese Sign Language? Then, learn VSL from us!
                    Select a sign from the list, watch it as many times as you
                    want and learn VSL. Learning something is always a good
                    thing, you know!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/learn-sign"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="card col-lg-12 h-100 d-flex flex-column justify-content-between card-background">
                <img className="card-img-top" src={imgVideos} alt="Videos Clipart" />
                <div className="card-body">
                  <h5 className="card-title">Videos</h5>
                  <p className="card-text">
                    Interested in creating wonderful videos using Vietnamese Sign
                    Language? Upload your transcript as a text file, type your
                    text in the provided area or speak through your mic and the
                    system will automatically create a video using VSL for your
                    content! Share your videos with the entire community!
                  </p>
                </div>
                <div className="card-footer p-0 m-0" style={{ border: "none" }}>
                  <Link
                    to="/sign-kit/all-videos"
                    className="btn btn-info w-100 p-3"
                    style={{ fontSize: "large" }}
                  >
                    EXPLORE NOW!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
