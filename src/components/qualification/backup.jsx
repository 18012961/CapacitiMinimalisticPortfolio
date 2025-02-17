import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">My Qualification</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification_active button--flex"
                : "qualification__button button---flex"
            }>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className="qualification__button button--flex">
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification__content">
            <div className="qualification__data qualification__content-activate">
              <div>
                <h3 className="qualification__title"> Ux/Ui designer</h3>
                <span className="qualification__subtitle">
                  South Africa-Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 20021-present
                </div>
              </div>
              <div>
                <span className="qualification rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front end developer</h3>
                <span className="qualification__subtitle">
                  South Africa-Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 20021-present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Backend developer</h3>
                <span className="qualification__subtitle">
                  South Africa-Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 20021-present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
