import React from "react";
import { Container, Row } from "react-bootstrap";
import logo from "../assets/img/svg/footer-logo.svg";
import Upperarrow from "../assets/img/png/Uppperarrow.png";
function Footer() {
  return (
    <>
      <section className="bg_blue py-4 py-md-5">
        <Container>
          {" "}
          <div className="row justify-content-between border-1 my-lg-5 align-items-center">
            <div className="col-md-8">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    className="bg_primary outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_xl text_greyLight"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="bg_primary outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_xl text_greyLight mt-2"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="d-flex justify-content-between gap-xl-2 gap-1 mt-2">
                    <a
                      className=" fw-semibold fs_xl services_btn px-xl-3 px-1 px-sm-4 px-lg-2  py_13_custom rounded-1 white_space"
                      href="#"
                    >
                      <svg
                        className="pe-2"
                        width="25"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                          fill="white"
                        />
                      </svg>
                      Financial Services
                    </a>
                    <a
                      className=" fw-semibold fs_xl services_btn px-xl-4 px-2 px-sm-5 px-lg-2 py_13_custom rounded-1 white_space"
                      href="#"
                    >
                      <svg
                        className="pe-2"
                        width="25"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.7"
                          d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                          fill="white"
                        />
                      </svg>
                      Real Estate
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <textarea
                    className=" w-100 pt_cuztum pb-5 px-2 rounded-2 mb-1 bg_primary outline_none fw-semibold fs_xl text-white opacity_07 mt-4 mt-lg-0"
                    placeholder="Message.."
                  ></textarea>
                  <a
                    className="py-3 bg_green w-100 d-inline-block text-center fw-semibold fs_xl text-white rounded-1 submit_btn"
                    href="#"
                  >
                    Submit
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h2 className=" fw-semibold fs_4xl text-white mt-4 mt-md-0">
                Contact us
              </h2>
              <p className=" fw-normal fs_xl text-white opacity_07 mt-4">
                Our Predictive Analytics utilize a combination of event-driven
                data, historical data.
              </p>
            </div>
          </div>
        </Container>
        <div className="border_bottom w-100 mx-lg-5 "></div>
        <Container>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="d-flex flex-column">
                <span>
                  <a href="#">
                    <img src={logo} alt="footer-logo" />
                  </a>
                </span>
                <span className="mt-2">
                  <a
                    className=" fw-semibold fs_xl text-white"
                    href="mailto:info@catalyzeai.com"
                  >
                    info@catalyzeai.com
                  </a>
                </span>
                <h2 className=" fw-semibold fs_xl text-white mb-0">
                  (941) 867-1761
                </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <Row className=" mt-4 mt-lg-0">
                <div className="col-lg-3 col-5">
                  <div className="d-flex flex-column gap-2">
                    <span>
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        {" "}
                        Financial Services
                      </a>
                    </span>
                    <span className="mt-2">
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        Pricing
                      </a>
                    </span>
                    <span className="">
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        Blog
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-4">
                  <div className="d-flex flex-column gap-2">
                    <span>
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        {" "}
                        Real Estate
                      </a>
                    </span>
                    <span className="mt-2">
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        Pricing
                      </a>
                    </span>
                    <span className="">
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        Blog
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-3">
                  <div className="d-flex flex-column gap-2">
                    <span>
                      <a className=" fw-semibold fs_xl text-white" href="#">
                        {" "}
                        LinkedIn
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-3 col-3">
                  <div className="d-flex justify-content-end align-items-center h-100">
                    <span>
                      <img src={Upperarrow} alt="" />
                    </span>
                  </div>
                </div>
              </Row>
            </div>
          </div>
          .
          <Row>
            <div className="col-xl-6 col-lg-7">
              <div className="d-flex justify-content-between">
                <p className="text-white fw-normal fs_lg opacity_07 mb-0">
                  All rights reserved. ©20022 Catalyze AI
                </p>
                <p className="text-white fw-normal fs_lg opacity_07 border-2 border-bottom mb-0 me-xl-5">
                  Do not sell my data
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-xl-6">
              <div className="d-flex justify-content-lg-center justify-content-between gap-5 ps-lg-5 ms-lg-5">
                <p className="text-white fw-normal fs_lg opacity_07 border-2 border-bottom mb-0">
                  Terms & Conditions
                </p>
                <p className="text-white fw-normal fs_lg opacity_07 border-2 border-bottom mb-0 ">
                  Privacy Policy
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
