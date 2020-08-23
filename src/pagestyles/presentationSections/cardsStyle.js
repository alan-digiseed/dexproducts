import {
  container,
  section,
  sectionDescription,
  title,
  whiteColor,
  mlAuto,
  hexToRgb
} from "../../shared/material-kit-pro-react.js";

const cardsStyle = {
  section: {
    ...section,
    padding: "0px 30px"
  },
  
  container,
  sectionDescription,
  title: {
    ...title,
    color: whiteColor,
    marginTop: "30px",
    marginBottom: "30px",
    minHeight: "32px"
  },
  description: {
    color: "rgba(" + hexToRgb(whiteColor) + ",0.76)"
  },
  imageContainer: {
    maxWidth: "1040px",
    marginTop: "-140px",
    position: "relative",
    height: "1000px",
    "& img": {
      maxWidth: "1040px",
      width: "auto",
      position: "absolute",
      right: "0px",
      top: "0px"
    }
  },
  mlAuto
};

export default cardsStyle;
