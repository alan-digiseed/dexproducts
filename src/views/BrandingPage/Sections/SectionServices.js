import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "../../../components/Grid/GridContainer.js";
import GridItem from "../../../components/Grid/GridItem.js";

import servicesStyle from "../../../pagestyles/aboutUsSections/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Pad Printing</h2>
          <h5 className={classes.description}>
          The process of pad printing involves transferring ink from a silicone pad onto the item you are wanting printed. 
Similar process as a stamp you may have used as a child. The pad printing machine holds both the pad on a movable arm and the product steady in a mould. The machine presses the pad into an ink plate which has been tailored to the shape of your logo and then moves the pad above your item and presses onto the item and left to air dry. Pad printing is used to print on three dimensional surfaces and products of all shapes and sizes (as long as fits under the machine) When printing multiple colours, we print one colour and wait for it to dry before printing the second colour. So there is a slight risk of registration and fine details filling in. We complete tape test prints before starting any bulk orders to confirm the pad is printing in the correct location and to confirm the pad has picked up all of the logo. 

          </h5>
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Screen Printing</h2>
          <h5 className={classes.description}>
          The process of screen printing involves creating a screen which is made out of a piece of mesh stretched over a frame. We then place your logo onto the mesh screen by making a positive stencil. The stencil forms an area which ink can be transferred through onto your item. While screen printing is ideal for large designs consisting of just a couple of colours, it can get quite expensive if you require multiple colours, as each colour has to be applied separately. There is also a risk of registration with multiple colours. Screen printing can be fairly time consuming to set up, clean, and print. Our screen printing is done by hand, where as other companies might use a machine to print. 
          </h5>
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Laser Engrave</h2>
          <h5 className={classes.description}>
          Laser Engraving is what happens when the laser beam interacts with the surface of a material to expose a cavity in the surface that is noticeable to the eye and touch. The laser creates high heat during the engraving process, which essentially causes the material to vaporize. It is a quick process as the material is vaporized with each pulse. We engrave on most kinds of metal and have the ability to change the name and/or numbers in the logo easily with a quick change on the engraving machines computer system. Laser engrave is great as it has a long lasting effect unlike pad and screen print. </h5>
        </GridItem>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Digital Transfer</h2>
          <h5 className={classes.description}>
          Also known as plastisol transfer, works by printing an image onto a special type of paper that be easily release the image. Heat is then applied to the release paper and the image is permanently transferred to the product. Because plastisol transfers are not printed directly on the item they can be multi-colour and allow more ability to have gradients and smaller details. These heat digital transfers are printed in CYMK only, so we are unable to match PMS colours. This service is also only available through our china express service as China have the correct machine for this only.
          </h5>
          </GridItem>
          <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>Rotary Screen Print</h2>
          <h5 className={classes.description}>
          Rotary screen print is very similar process to the standard screen printing. A similar mesh screen is made with your custom stencil design. This is placed onto the machine and the bottle you are wanting printed is then placed onto the machine wheels underneath the screen. The machine will turn the wheels, making the bottle turn as the machine pressed the screen logo onto the bottle. Once one colour is screen printed onto the bottle, it must dry fully before moving onto the second colour. We cannot print a full 360 degrees around the bottle as the machine will only turn the bottle about 270 degrees. Rotary screen print can only be performed on flat round surfaces, if there is a curve or hard texture on the bottle, the bottle will slip off the machines wheels. Rotary screen printing can also only be completed locally as our China warehouse do not have a machine for this process, we can only do this on our 7 locally working day service as the printing process takes a long time to print.
          </h5>
          </GridItem>
          <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>4CP Direct Digital Print</h2>
          <h5 className={classes.description}>
          Direct digital printing involves the transfer of the ink directly from the printer head of an inkjet machine to the product and can be used to produce both spot colour and full colour branding on flat surfaces in CYMK only.  This is ideal for printing dark coloured products as a layer of white ink can be printed under the artwork first. Only one set up charge is required irrespective of the number of print colours. The machine is slightly slow during the printing process, however the drying is almost instant. This process is available both locally and through china express.
          </h5>
          </GridItem>

 </GridContainer>
    </div>
  );
}
