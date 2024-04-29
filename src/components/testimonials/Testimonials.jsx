import React from "react";
import { useState } from "react";
import "./Testimonials.css";
import images from "../../constants/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let review = {
  yashvi:
    "I am delighted to share my review for talented Ishita who provided me with an extraordinary facial experience. From start to finish, her exceptional skills and dedication to her craft were evident, making it an unforgettable and rejuvenating session. Her warm and friendly demeanor made me feel instantly comfortable, and she took the time to listen attentively to my skincare concerns and goals. During the facial, her expertise and attention to detail were remarkable. She carefully examined my skin, analyzing its needs and determining the most suitable products and techniques to use. Her extensive knowledge of skincare was evident as she explained each step of the process and the benefits behind the products she applied. ",
  shivani:
    "Ish is truly amazing and so professional! From the beginning to end she cares about you and takes care of you. She and her team were beyond prepared for you making your day stress free. Ish gets to know what you want, creates mood inspirations and then will move forward ensuring you get the results you want. I got so many compliments on my makeup the day of my engagement party. She is truly the best and I would definitely recommend her for any facial or makeup needs!! ",
};
const Testimonials = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [seeMore, setSeeMore] = useState(false);
  const [seeMore2, setSeeMore2] = useState(false);

  return (
    <div className="home-testi-sec">
      <div className="home-testi-flex container">
        <div className="home-test-part1">
          <p style={{ fontWeight: "700" }} className="home-testi-part1-heading">
            LOVED BY OUR CUSTOMERS
          </p>
          <p className="home-test-part1-txt">
            Don't just take our word for it! Here's what our clients have to say
            about working with Mortgage Titans:
            {/* What our clients are <br /> saying about our luxury <br /> services */}
          </p>
        </div>
        <div className="home-test-part2">
          <Slider {...settings}>
            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    alt=""
                    // src={images.Nisha_Karia}
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    className="home-testi-img"
                    style={{ width: "180px", height: "180px" }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nulla tempore porro quam quisquam nesciunt! Omnis, iure.
                  </p>
                  <p class="home-testi-auth">John English</p>
                  {/* <p class="home-testi-auth-desg">Sales manager</p> */}
                </div>
              </div>
            </div>

            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    alt=""
                    // src={images.Sheetal}
                    src="https://t3.ftcdn.net/jpg/02/68/56/00/360_F_268560006_F2fIixDnlVRNGwCyne9EMQJhaAxalKTq.jpg"
                    className="home-testi-img"
                    style={{
                      width: "180px",
                      height: "180px",
                    }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Omnis velit inventore perferendis sint.
                  </p>
                  <p class="home-testi-auth">Sheetal</p>
                  {/* <p class="home-testi-auth-desg">Microsoft Design</p> */}
                </div>
              </div>
            </div>

            <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    //   src={images.Ashita_Karia}
                    alt=""
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    className="home-testi-img"
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Perferendis, distinctio?
                  </p>
                  <p class="home-testi-auth">Ashita</p>
                  {/* <p class="home-testi-auth-desg">Creative director</p> */}
                </div>
              </div>
            </div>

            {/* <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    src={images.Yashvi_Buch}
                    className="home-testi-img"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    {review.yashvi === "" ||
                    review.yashvi == null ||
                    review.yashvi === undefined ? null : (
                      <>
                        {seeMore
                          ? review.yashvi
                          : `${review.yashvi.substring(0, 170)}...`}

                        <button
                          className="btn-readmore"
                          style={{
                            background: "none",
                            color: "#000",
                            border: "none",
                            cursor: "pointer",
                            padding: "0px",
                            fontWeight: "600",
                          }}
                          onClick={() => setSeeMore(!seeMore)}>
                          {seeMore ? "Show less" : "  Read more"}
                        </button>
                      </>
                    )}
                  </p>
                  <p class="home-testi-auth">Yashvi Buch</p>
                </div>
              </div>
            </div> */}

            {/* <div>
              <div className="home-testi-inner-flex">
                <div className="home-testi-imgbox">
                  <img
                    src={images.Shivani_Patel}
                    className="home-testi-img"
                    style={{
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div>
                  <p className="home-testi-txt">
                    {review.shivani === "" ||
                    review.shivani == null ||
                    review.shivani === undefined ? null : (
                      <>
                        {seeMore2
                          ? review.shivani
                          : `${review.shivani.substring(0, 170)}...`}

                        <button
                          className="btn-readmore"
                          style={{
                            background: "none",
                            color: "#000",
                            border: "none",
                            cursor: "pointer",
                            padding: "0px",
                            fontWeight: "600",
                          }}
                          onClick={() => setSeeMore2(!seeMore2)}>
                          {seeMore2 ? "Show less" : "  Read more"}
                        </button>
                      </>
                    )}
                  </p>
                  <p class="home-testi-auth">Shivani Patel</p>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
