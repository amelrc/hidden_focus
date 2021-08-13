import React, { useState } from "react";
import styled from "styled-components";
import ImageSlider from "../../components/imageSlider";
import { info } from "./dataInfluences";

const Dot = styled.div`
  background: ${({ selected, past }) =>
    selected
      ? `transparent linear-gradient(180deg, #B3C53F 0%, #444B18 100%) 0% 0% no-repeat padding-box;`
      : past
        ? `transparent linear-gradient(180deg, #8A33B9 0%, #531F6F 100%) 0% 0% no-repeat padding-box;`
        : `#14091A 0% 0% no-repeat padding-box`};
     
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: ${({ selected, past }) =>
    selected ? `solid 1px #B3C53F` : past ? `solid 1px #8a33b9` : `solid 1px #666666`};
  position: absolute;
  top: 36px;
`;

const Year = styled.span`
  font: 500 14px Kumbh Sans;
  color: #b3c53f;
  position: absolute;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  top: 54px;
`;

const Influences = () => {
  const [state, setState] = useState(info[0]);
  const [length, setLength] = useState(0);

  const handleNext = (i) => {
    setState(info[i]);
    setLength(i);
  };

  let width = 100 / (info.length - 1);
  const singleImage = state.image.map((img, i) => (
    <img src={img.img} style={img.css} alt={i} />
  ));

  return (
    <div style={{ backgroundColor: "#180920", height: "100vh" }}>
      <h1
        style={{
          font: "24px/40px Hidden Focus",
          letterSpacing: 1.44,
          color: "#F9EFFF",
          width: "80%",
          margin: "auto",
          padding: "16px 0",
        }}
      >
        Influences
      </h1>
      <div
        style={{
          // alignSelf: "center",
          // position: "relative",
          // height: "100vh",
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
          // backgroundColor: "#8b33b9",
          padding: 24,
        }}
      >
        <div
          className="flex"
          style={
            {
              // padding: 60,
              // backgroundColor: "#1d0d25",
              // margin: 40,
              height: "60vh",
              justifyContent: 'space-between'
            }
          }
        >
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              width: "40%",
            }}
          >
            {state.image.length > 1 ? (
              <ImageSlider
                styles={{
                  display: "flex",
                  margin: "auto",
                  justifyContent: "space-between",
                  position: "absolute",
                  bottom: "2%",
                  width: "100%",
                }}
                slides={state.image}
              />
            ) : (
              singleImage
            )}
          </div>

          <div
            style={{
              // display: "flex",
              // flexDirection: "column",
              // justifyContent: "flex-end",
              width: "50%",
              color: "#F9EFFF",
              position: "relative",
            }}
          >
            <h2 style={{ font: "30px/46px Mrs Saint Delafield", margin: 0 }}>
              {state.name}
            </h2>
            <div style={{ height: '80%', overflow: 'scroll' }}>
              <span
                style={{
                  font: "300 14px/18px Kumbh Sans",
                  overflow: "scroll",
                  height: "40%",
                }}
              >
                {state.content}
              </span>

            </div>
            <div style={{
              height: 30, background: 'transparent linear-gradient(180deg, #14091A00 0%, #14091A 100%) 0% 0% no-repeat padding-box',
              position: 'absolute',
              width: '100%',
              bottom: -1
            }}></div>
          </div>

        </div>
      </div>
      {/* ///////// */}
      <div style={{ width: "80%", position: "relative", display: "flex", margin: "auto" }} >
        <div style={{ display: "flex", justifyContent: "space-between", position: "absolute", width: "100%" }}>
          <div style={{ height: 1, backgroundColor: "#666666", width: "100%", position: "absolute" }}></div>
          <div style={{ height: 1, backgroundColor: "#8A33B9", width: `calc(${width} * ${length}%)`, position: "absolute" }}></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", position: "absolute" }}></div>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", position: "absolute", top: -42 }}>
          {info.map((date, i) => (
            <div
              key={i}
              className="flex column centerV"
              style={{ position: "relative" }}
            >
              <Year selected={i === state.id}>{date.date}</Year>
              <Dot
                selected={i === state.id}
                past={i < state.id}
                onClick={() => handleNext(i)}
              ></Dot>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Influences;
