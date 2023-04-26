import React from "react";
import arrow from "../assets/img/svg/arrow.svg";
import rectangle from "../assets/img/svg/Rectangle.svg";
import mm from "../assets/img/svg/400.svg";
import tn from "../assets/img/svg/t3.svg";
import bn from "../assets/img/svg/77bn.svg";
import next from "../assets/img/svg/next.svg";
import watch from "../assets/img/svg/watch.svg";
import curve from "../assets/img/png/curve.png";
import user from "../assets/img/png/user.png";
import dots from "../assets/img/png/dots.png";
import firstline from "../assets/img/png/line1.png";
import secline from "../assets/img/png/line2.png";
import thirdline from "../assets/img/png/line3.png";
import downarrow from "../assets/img/png/downarrow.png";

function Hero() {
  return (
    <>
      <section className="py-4 py-lg-5">
        <div className="container">
          <div className="row">
            {" "}
            <div className="col-lg-5">
              <div className="pe-lg-5">
                <div className="d-flex justify-content-end">
                  <div className="AnimatBox1">
                    <img
                      style={{ maxWidth: "163px", minHeight: "105px" }}
                      src={curve}
                      alt="img"
                    />
                  </div>
                  <div
                    style={{ width: "130px", borderRadius: "6px" }}
                    className="bg-white p-2 AnimatBox2 "
                  >
                    <div className="d-flex justify-content-end gap-1 align-items-center mb-2">
                      <img style={{ width: "15px" }} src={watch} alt="img" />
                      <h4 className="fs_md fw-normal text-black mb-0 ">
                        2 days ago
                      </h4>
                    </div>
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_md fw-normal text-black">
                        Mihail Lacusta
                      </h3>
                    </div>
                    <h3 className="fs_md fw-normal  text_green py-1 mb-0">
                      $1,293,200
                    </h3>
                    <h5 className="fs_sm fw-normal text_lightBlack py-1 mb-0">
                      Business Sale
                    </h5>
                    <div className="d-flex gap-3 align-items-center mt-4">
                      <div
                        style={{
                          height: "14px",
                          width: "14px",
                          border: "1px solid #808080",
                        }}
                        className="rounded-1"
                      ></div>
                      <h3 className="fs_sm fw-normal text-black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div
                    className="AnimatBox3 bg-white px-2 py-2 d-flex flex-column justify-content-between d-none d-md-flex"
                    style={{ maxWidth: "160px", borderRadius: "8px" }}
                  >
                    <div className="d-flex justify-content-between w-100">
                      <h3 className=" fs_lg fw-semibold text-black">
                        Jordan Wentworth
                      </h3>
                      <div>
                        <h4
                          className="fs_md rounded-1 fw-semibold p-1 d-inline-block "
                          style={{ background: "#D4EAF2" }}
                        >
                          New
                        </h4>
                      </div>
                    </div>
                    <h3 className="fs_lg text_green  fw-semibold py-1 mb-0">
                      $1,293,200
                    </h3>
                    <p
                      className="fs_md fw-normal text_lightBlack "
                      style={{ maxWidth: "60px" }}
                    >
                      Boston, MA Inheritance
                    </p>
                    <div className="d-flex gap-3 align-items-center">
                      <div
                        style={{
                          height: "18px",
                          width: "18px",
                          border: "2px solid #808080",
                        }}
                        className="rounded-1"
                      ></div>
                      <h3 className="fs_md fw-semibold text-black mb-0 ">
                        Contacted
                      </h3>
                    </div>
                  </div>
                  <div
                    className="bg-white p-3 AnimatBox4"
                    style={{ width: "228px", borderRadius: "8px" }}
                  >
                    <div
                      className="d-flex justify-content-between align-items-center pb-2 mb-2"
                      style={{ borderBottom: "1px solid #CCCCCC" }}
                    >
                      <div className="d-flex align-items-center gap-2">
                        <img style={{ width: "30px" }} src={user} alt="img" />
                        <div>
                          <h3 className=" fs_md fw-semibold text-black mb-0">
                            Ciera Thomas
                          </h3>
                          <h6 className=" text_grey  fs_sm fw-semibold text-black">
                            Edit
                          </h6>
                        </div>
                      </div>
                      <img style={{ height: "16px" }} src={dots} alt="img" />
                    </div>
                    <div className="d-flex gap-3 flex-column">
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md fw-semibold ">1.</span>{" "}
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={firstline}
                          alt="img"
                        />
                        <img
                          style={{ width: "10px" }}
                          src={downarrow}
                          alt="img"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md fw-semibold ">2.</span>{" "}
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={secline}
                          alt="img"
                        />
                        <img
                          style={{ width: "10px" }}
                          src={downarrow}
                          alt="img"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className=" fs_md fw-semibold ">3.</span>{" "}
                        <img
                          style={{ width: "140px", height: "5px" }}
                          src={thirdline}
                          alt="img"
                        />
                        <img
                          style={{ width: "10px" }}
                          src={downarrow}
                          alt="img"
                        />
                      </div>
                    </div>
                    <div
                      className="AnimatBox5 p-2 position-absolute rounded-2"
                      style={{ maxWidth: "100px" }}
                    >
                      {" "}
                      <h3 className=" fs_sm fw-normal text-black">
                        5500 72nd Ave N
                      </h3>
                      <h4 className=" fs_sm fw-normal text_green">$150,000</h4>
                      <p className=" fs_xsm fw-normal text_lightBlack opacity-75 mb-0">
                        Pinellas Park, FL inheritance
                      </p>
                      <div className="d-flex justify-content-center">
                        <a href="">
                          <img style={{ width: "10px" }} src={next} alt="img" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pe-xl-5 me-xxl-5 mt-lg-5 pt-sm-5 pt-4">
                <div className="col-4">
                  <div
                    style={{ zIndex: "-1" }}
                    className="d-flex flex-column position-relative align-items-center"
                  >
                    <span>
                      <img src={mm} alt="400MM+" />
                    </span>
                    <p className="mt-4 pt-1 fw-normal fs_xl text-black text-center opacity_07">
                      Data point used for analytics
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{ zIndex: "-1" }}
                    className="d-flex flex-column position-relative align-items-center "
                  >
                    <span>
                      <img src={tn} alt="400MM+" />
                    </span>
                    <p className="mt-4 pt-1 fw-normal fs_xl text-black text-center opacity_07">
                      Investable assets predicted per year
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    style={{ zIndex: "-1" }}
                    className="d-flex flex-column position-relative align-items-center"
                  >
                    <span>
                      <img src={bn} alt="400MM+" />
                    </span>
                    <p className="mt-4 pt-1 fw-normal fs_xl text-black text-center opacity_07 px-xl-3">
                      Predicted home value transacted per year
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div>
                <h1 className=" fw-semibold fs_5xl text-black">
                  Grow your business with Event-Driven Predictive Analytics
                </h1>
                <p
                  style={{ zIndex: "-1" }}
                  className=" fw-normal position-relative fs_xl text-black opacity_07 mb-0 pb-xl-4 mt-3"
                >
                  It is a long established fact that a reader will be distracted
                  by the using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here,
                  content here', making it the look at you.
                </p>
                <div className="d-flex gap-2 mt-lg-5 mt-4 z_index-1">
                  <div
                    style={{ zIndex: "-1" }}
                    className="bg_green rounded-2 px-sm-4 px-3 py-sm-4 py-2 w-50 position-relative overflow-hidden z_index-1"
                  >
                    <div className="overlay transition400"></div>

                    <p className=" fw-semibold fs_xl text-white opacity_07 pt-2 mb-0 px-sm-3">
                      boost your
                    </p>
                    <h2 className=" fw-semibold text-white fs_2xl mb-sm-4 mb-2 px-sm-3">
                      Financial <span className="d-block">Services</span>
                    </h2>
                    <div className="pt-2 px-sm-3 pb-3 d-flex justify-content-between cursor_pointer align-items-center">
                      <a className=" fw-semibold text-white fs_xl" href="#">
                        Learn more
                      </a>
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                  <div
                    style={{ zIndex: "-1" }}
                    className="bg_blue position-relative rounded-2 px-sm-4 px-3 py-sm-4 py-2 w-50 d-flex flex-column justify-content-between overflow-hidden"
                  >
                    <article>
                      <div className="overlay transition400"></div>
                      <p className=" fw-semibold fs_xl text-white opacity_07 pt-2 mb-0 px-sm-3">
                        boost your
                      </p>
                      <h2 className=" fw-semibold text-white fs_2xl mb-sm-4 mb-2 px-sm-3 pt-2">
                        Real Estate
                      </h2>
                    </article>
                    <div className="pt-2 px-sm-3 d-flex justify-content-between cursor_pointer align-items-center">
                      <a className=" fw-semibold text-white fs_xl" href="#">
                        Learn more
                      </a>
                      <img src={arrow} alt="arrow" />
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

export default Hero;
