import React from "react";
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
    padding: "200px 20px",
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Card style={{ width: 450, margin: "0 auto", padding: "20px 5px" }}>
          <CardContent>
            <Typography gutterBottom variant="h3" align="center">
              Login Form
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} item>
                  <TextField
                    label="Username"
                    placeholder="Enter Userame"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} item>
                  <TextField
                    label="Password"
                    placeholder="Enter Password"
                    variant="outlined"
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
export default Login;
