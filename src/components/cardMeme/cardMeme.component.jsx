import React from "react";
import Card from "@material-ui/core/Card";
import { CardHeader, CardActions, Avatar } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { getTimeDiff } from "../../services/formatation.service";

const CardMemeComponent = ({
  title,
  description,
  image,
  video,
  htmlContent,
  author,
  authorUrl,
  date,
  icon,
  url,
}) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            onClick={() => authorUrl && window.open(authorUrl)}
            src={icon}
          />
        }
        title={<Typography style={{ textAlign: "start" }}>{title}</Typography>}
      />
      <CardActionArea onClick={() => url && window.open(url)}>
        <CardContent>
          {image && (
            <img
              alt={title}
              src={image.imageSource}
              style={{ width: "100%" }}
            />
          )}
          {video && (
            <iframe
              src={video.videoSource}
              style={{ width: "100%" }}
              frameBorder="0"
              allowFullScreen="allowfullscreen"
              title={title}
            ></iframe>
          )}
          {htmlContent && (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          )}
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Typography color="textSecondary" component="p">
          {author}: {`${getTimeDiff(date)} atrás`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardMemeComponent;
