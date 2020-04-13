import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Button, Typography } from "@material-ui/core";

const CardInstallComponent = () => {
  const [installation, setInstallation] = useState(null);

  const installApp = () => {
    installation.event.prompt();
    installation.event.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") setInstallation(null);
    });
  };

  const showInstalattionPainel = (event) => {
    event.preventDefault();
    setInstallation({ event, installButton: true });
  };

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) =>
      showInstalattionPainel(e)
    );
  }, []);

  return (
    <Card
      style={{
        left: 10,
        right: 10,
        bottom: 10,
        padding: 10,
        display: "flex",
        position: "fixed",
        alignItems: "center",
      }}
    >
      <Typography
        style={{
          flex: 1,
          fontSize: 10,
          textAlign: "end",
          marginRight: 20,
        }}
      >
        Tenha uma experiência mobile completa
      </Typography>
      <Button
        color="primary"
        variant="outlined"
        startIcon={<GetAppIcon />}
        onClick={installApp}
      >
        Instalar
      </Button>
    </Card>
  );
};

export default CardInstallComponent;
