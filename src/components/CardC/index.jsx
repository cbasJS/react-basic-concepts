import React from "react";
import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

import ButtonC from "../ButtonC";

const CardC = props => {
  const { classes, description, title, titleB, funcB, price, items } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/345/140/?random"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="display1" component="h2">
          {title}
        </Typography>
        <Typography variant="caption" component="h3">
          ¡Paga solo <strong>${price}!</strong>
        </Typography>
        <Typography variant="body2" component="h4">
          Usted lleva {items} articulos :)
        </Typography>
        <br />
        <Typography component="p">{description}</Typography>
      </CardContent>
      <CardActions>
        <ButtonC title={titleB} handleClick={funcB} />
        <ButtonC variantProp="flat" title="More" />
      </CardActions>
    </Card>
  );
};

CardC.propTypes = {
  classes: PropTypes.object.isRequired,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  titleB: PropTypes.string,
  funcB: PropTypes.func,
  items: PropTypes.number
};

CardC.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, neque animi beatae ut, pariatur non nobis harum maxime quos numquam dicta provident dolores, accusantium aspernatur officia esse minima nesciunt labore",
  title: "lorem"
};

export default withStyles(styles)(CardC);
