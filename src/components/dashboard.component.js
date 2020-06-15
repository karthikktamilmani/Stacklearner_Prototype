import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./dashboard.scss";
import htmlBanner from "../assets/html5-banner.png";
import cssBanner from "../assets/css3-banner.jpg";
import jsBanner from "../assets/javaScript-banner.png";
import reactBanner from "../assets/react-logo.png";
import Swal from "sweetalert2";
import rightArrow from "../assets/arrow.svg";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          title: "Intro to CSS3",
          currentChapter: 6,
          banner: cssBanner,
          progress: 80,
          class: "complete",
        },
        {
          title: "Babel JS",
          currentChapter: 10,
          banner: jsBanner,
          progress: 60,
          class: "intermediate",
        },
        {
          title: "Intro to React JS",
          currentChapter: 2,
          banner: reactBanner,
          progress: 20,
          class: "start",
        },
        {
          title: "HTML5 - Advanced",
          currentChapter: 5,
          banner: htmlBanner,
          progress: 40,
          class: "start",
        },
      ],
    };
  }

  resumeCourse = () => {
    Swal.fire("WIP", "Oops..This feature is work in progress.", "info");
  };
  render() {
    return (
      <div class="dashboard-wrapper">
        <h3 class="text-left mt-3">Learn</h3>
        <div class="card-deck row">
          {this.state.cards.map((item) => (
            <div class="card px-0">
              <img src={item.banner} class="card-img-top" alt="course-banner" />
              <div class="card-body">
                <div class="card-title mb-1">
                  <span class="text">{item.title}</span>
                  <div
                    className={"progress " + item.class}
                    data-percentage={item.progress}
                  >
                    <span class="progress-left">
                      <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                      <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">
                      <div>{item.progress}%</div>
                    </div>
                  </div>
                </div>
                <p class="card-subheading mb-3">
                  Currently on chapter {item.currentChapter}
                </p>
                <p class="list-inline-item float-right">
                  <button
                    class="btn btn-link resume-link"
                    onClick={this.resumeCourse}
                  >
                    Resume <img src={rightArrow} class="right-arrow" alt="" />{" "}
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 class="text-left mt-3 mb-2">New & Noteworthy</h3>
        <div class="carousel-wrapper">
          <div
            class="carousel slide py-3"
            id="carouselExampleCaptions"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="w-100 d-block">
                  <h5>Connect with the coding community</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Phasellus vestibulum lorem sed risus aliquet.
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="w-100 d-block">
                  <h5>Learn by doing</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Amet porttitor eget dolor morbi..
                  </p>
                </div>
              </div>
              <div class="carousel-item">
                <div class="w-100 d-block">
                  <h5>Real time feedback</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Et leo duis ut diam quam nulla.
                  </p>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
