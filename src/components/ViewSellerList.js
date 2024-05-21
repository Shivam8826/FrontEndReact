import React from "react";
import {
  Container,
  Button,
  DeleteIcon,
  Paper,
  Box,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80vw",
    height: "100vh",
    paddingTop: theme.spacing(5),
  },
  button: {
    margin: theme.spacing(1),
  },
}));
function ViewSellerList() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Model</TableCell>
              <TableCell>Seller 1</TableCell>
              <TableCell>Seller 2</TableCell>
              <TableCell>Actions</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>OppoA37F</TableCell>
              <TableCell>amazon</TableCell>
              <TableCell>flipkart</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>VivoY20G</TableCell>
              <TableCell>amazon</TableCell>
              <TableCell>flipkart</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                SAMSUNG UA32TE40AAK 32 inch HD ready Smart LED TV
              </TableCell>
              <TableCell>amazon</TableCell>
              <TableCell>flipkart</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default ViewSellerList;
