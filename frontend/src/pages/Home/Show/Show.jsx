import { DeleteById, GetAll } from "../../../api/requests";
import * as React from "react";
import Style from "./index.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const Show = () => {
  const [show, setShow] = React.useState([]);
  React.useEffect(() => {
    GetAll().then((res) => {
      setShow(res);
    });
  }, []);
  return (
    <Box className={Style.Boxx} sx={{ flexGrow: 1 }}>
      <div className={Style.UstYazi}>
        <h1 className={Style.hhh}>Featured Robotics Products to Show</h1>
        <p className={Style.ppp}>Who are in extremely love with eco friendly system.</p>
      </div>
      <Grid container spacing={6}>
        {show &&
          show.map((item) => {
            return (
              <Grid key={item._id} item xs={3}>
                <Card className={Style.Card} sx={{ maxWidth: 345 }}>
                  <div className={Style.Kard}>
                    <CardMedia
                      style={{ width: "100%", height: "65%" }}
                      sx={{ height: 140 }}
                      image={item.image}
                      title="green iguana"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.title}
                    </Typography>
                  </CardContent>
                  <CardActions style={{width:"100%",Display:"flex",justifyContent:"center"}}>
                    <Button
                      variant="outlined"
                      size="small"
                      className={Style.Button}
                      // onClick={(_id) => {
                      //   DeleteById(item._id);
                      //   setShow(show.filter((m) => m._id !== _id));
                      // }}
                    >
                     VIEW DETAILS
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
};

export default Show;
