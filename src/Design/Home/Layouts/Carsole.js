import React from "react";
import { Carousel } from "react-bootstrap";
import { carasoleTexts } from "../../../DataStore";
import img1 from "./img1.png";
import img2 from "./img1.png";
import img3 from "./img1.png";

const imageSet = [img1, img2, img3];

export default function Carsole() {
  return (
    <div>
      <Carousel
        style={{
          width: "90%",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        {carasoleTexts.map((val, key) => {
          return (
            <Carousel.Item interval={1500} key={key}>
              <img
                className="d-block w-100"
                src={imageSet[key]}
                alt={val.altText}
                width="100vh"
                height="350vh"
              />
              <Carousel.Caption>
                <h3>{val.topic}</h3>
                <p>{val.text}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
