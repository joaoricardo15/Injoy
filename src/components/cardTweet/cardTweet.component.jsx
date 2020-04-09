import React, { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PeopleIcon from "@material-ui/icons/People";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { getTimeDiff } from "../../services/formatation.service";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const CardTweetComponent = ({
  userName,
  userAccountName,
  userProfileImage,
  userBio,
  userLocation,
  userFollowers,
  userFavorites,
  text,
  retweets,
  favorites,
  image,
  date,
  url,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      {image && <CardMedia image={image} />}
      <CardHeader
        avatar={<Avatar src={userProfileImage} />}
        title={
          <div style={{ display: "flex", textAlign: "start" }}>
            <Typography>{userName}</Typography>
            <Typography
              color="textSecondary"
              style={{ fontSize: 10, marginLeft: 10, lineHeight: 2.4 }}
            >{`@${userAccountName}`}</Typography>
          </div>
        }
        subheader={
          <div style={{ display: "flex", textAlign: "start" }}>
            <div style={{ display: "flex" }}>
              <PeopleIcon
                style={{ fontSize: 20, color: "blue", opacity: 0.5 }}
              />
              <Typography
                style={{ fontSize: 12, lineHeight: 2, marginLeft: 3 }}
              >
                {userFollowers}
              </Typography>
            </div>
            <div style={{ display: "flex", marginLeft: 10 }}>
              <FavoriteIcon
                style={{ fontSize: 20, color: "red", opacity: 0.5 }}
              />
              <Typography
                style={{ fontSize: 12, lineHeight: 2, marginLeft: 3 }}
              >
                {userFavorites}
              </Typography>
            </div>
          </div>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography gutterBottom>{userBio}</Typography>
        </CardContent>
      </Collapse>
      <CardActionArea onClick={() => url && window.open(url)}>
        <CardContent>
          <div style={{ textAlign: "start" }}>
            <Typography gutterBottom>{text}</Typography>
            <div style={{ display: "flex", textAlign: "start" }}>
              <div style={{ display: "flex", marginLeft: 10 }}>
                <ChatIcon
                  style={{ fontSize: 20, color: "green", opacity: 0.5 }}
                />
                <Typography
                  style={{ fontSize: 12, lineHeight: 2, marginLeft: 3 }}
                >
                  {retweets}
                </Typography>
              </div>
              <div style={{ display: "flex", marginLeft: 10 }}>
                <FavoriteIcon
                  style={{ fontSize: 20, color: "red", opacity: 0.5 }}
                />
                <Typography
                  style={{ fontSize: 12, lineHeight: 2, marginLeft: 3 }}
                >
                  {favorites}
                </Typography>
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Typography color="textSecondary">
          {`${userLocation}`}: {`${getTimeDiff(date)} atrás`}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default CardTweetComponent;
