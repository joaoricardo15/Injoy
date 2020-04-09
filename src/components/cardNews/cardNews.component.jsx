import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { getTimeDiff } from "../../services/formatation.service";

const CardNewsComponent = ({
  imageSource,
  title,
  description,
  author,
  date,
  url,
}) => {
  return (
    <Card onClick={() => url && window.open(url)}>
      <CardActionArea>
        <CardMedia style={{ height: 200 }} image={imageSource} />
        <CardContent>
          <Typography
            style={{ textAlign: "start", fontSize: 16, lineHeight: 1.2 }}
          >
            {title}
          </Typography>
          <Typography
            style={{
              textAlign: "start",
              fontSize: 12,
              lineHeight: 1.2,
              marginTop: 10,
            }}
            color="textSecondary"
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
          {author}: {`${getTimeDiff(date)} atrás`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardNewsComponent;
