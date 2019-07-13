import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import { withRouter } from 'react-router-dom';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  margin: {
    // margin: "20px",
    // marginLeft: "50px"
    // marginright: "50px"

  },
});

class ViewDic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Domian",
      headingText: "Range",
      
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>{this.state.buttonText}</StyledTableCell>
              <StyledTableCell align="right">
                {this.state.headingText}
              </StyledTableCell>
              <StyledTableCell>
                <Fab
                  size="medium"
                  color="default"
                  aria-label="Delete"
                  className={classes.margin}
                >
                  <DeleteIcon />
                </Fab>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row" />
              <StyledTableCell align="right" />
              <StyledTableCell align="right" />
            </StyledTableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
export default (withRouter(withStyles(styles)(ViewDic)));
