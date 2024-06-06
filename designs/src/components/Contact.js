import React from "react";
import "./ContactStyle.css";
import "./ContactStyleResponsive.css";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <div style={{ marginTop: "50px" }}>
    <div className="new_home_web">
    <div className="responsive-container-block big-container">
      <div className="responsive-container-block textContainer">
        <div className="topHead">
          <p className="text-blk heading">
            Get in
            <span className="orangeText">touch</span>
          </p>
          <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
        </div>
      </div>
      <div className="responsive-container-block container">
        <div
          className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
          id="i69b"
        >
          <form className="form-box">
            <div className="container-block form-wrapper">
              <div className="responsive-container-block">
                <div className="left4">
                  <div
                    className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                    id="i10mt-2"
                  >
                    <input
                      className="input"
                      id="ijowk-2"
                      name="FirstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input
                      className="input"
                      id="indfi-2"
                      name="Last Name"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                    <input
                      className="input"
                      id="ipmgh-2"
                      name="Email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                    <input
                      className="input"
                      id="imgis-2"
                      name="PhoneNumber"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div
                  className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                  id="i634i-2"
                >
                  <textarea
                    className="textinput"
                    id="i5vyy-2"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
              </div>
              <a className="send" href="/" id="w-c-s-bgc_p-1-dm-id">
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  </>
  );
}

export default Contact;