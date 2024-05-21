import React from "react";
import "./SellerList.css";
import {
  Typography,
  Card,
  Grid,
  Container,
  CardContent,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    height: 550,
    margin: "0 auto",
    backgroundPosition: "center",
    padding: "45px 20px",
  },
}));

function SellerList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h3" align="center">
              Seller Form
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Product Model"
                    placeholder="Enter product model"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Seller"
                    placeholder="Enter Seller name"
                    variant="outlined"
                    type="email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Seller"
                    placeholder="Enter Seller name"
                    variant="outlined"
                    type="email"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <Button
                    type="Submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
export default SellerList;
