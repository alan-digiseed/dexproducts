import {
  container,
  section,
  grayColor
} from "../../shared/material-kit-pro-react.js";

const descriptionStyle = {
  container,
  description: {
    color: grayColor[0],
    textAlign: "center"
  },
  section: {
    ...section,
    padding: "70px 0px",
    "& h4$description": {
      fontSize: "1.5em"
    }
  },
  features: {
    textAlign: "center !important",
    paddingTop: "30px",
    paddingBottom: "0px",
    "& p": {
      fontSize: "20px",
      lineHeight: "1.6em",
      fontWeight: "600"
    }
  }
};

export default descriptionStyle;
