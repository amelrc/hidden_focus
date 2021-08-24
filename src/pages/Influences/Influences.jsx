import React, { useState } from "react";
import { Dot, Year, InfluencesText, InfluencesName, PairWrapper, Heading, InfluencesTextWrapper } from "./styles";
import ImageSlider from "../../components/imageSlider";
import { info } from "./dataInfluences";

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
    <div style={{ backgroundColor: "#180920", height: '100vh' }}>

      <Heading>Influences</Heading>

      <PairWrapper>
        <div
          className="flex"
          style={{ height: "60vh", justifyContent: 'space-between' }}>
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
            <InfluencesName>{state.name}</InfluencesName>
            <InfluencesTextWrapper>
              <InfluencesText>{state.content}</InfluencesText>
            </InfluencesTextWrapper>

            <div style={{
              height: 30, background: 'transparent linear-gradient(180deg, #14091A00 0%, #14091A 100%) 0% 0% no-repeat padding-box',
              position: 'absolute',
              width: '100%',
              bottom: -1
            }}></div>
          </div>

        </div>
      </PairWrapper>
      {/* ///////// */}
      <div style={{ width: "80%", position: "relative", display: "flex", margin: "auto", marginTop: 16 }} >
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
