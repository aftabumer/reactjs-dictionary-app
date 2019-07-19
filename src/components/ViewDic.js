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
import EditIcon from "@material-ui/icons/Edit";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addData, deleteData, editData, saveData } from "../actions";

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
  }
});

class ViewDic extends Component {

  deleteData = (id) => {
    console.log('delete:', id)
    this.props.deleteData(id);
  };

  render() {
    const { classes } = this.props;
    const { datas } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Domian</StyledTableCell>
              <StyledTableCell>Range</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map(data => {
              return (
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {data.domain}
                  </StyledTableCell>
                  <StyledTableCell>{data.range}</StyledTableCell>
                  <StyledTableCell>
                    <Fab
                      size="medium"
                      color="default"
                      aria-label="Edit"
                      className={classes.margin}
                    >
                      <EditIcon />
                    </Fab>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Fab
                      size="medium"
                      color="default"
                      aria-label="Delete"
                      className={classes.margin}
                      onClick={()=>this.deleteData(data.id)}
                    >
                      <DeleteIcon />
                    </Fab>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // addData: (domain, range) => dispatch(addData(domain, range)),
    deleteData: (id) => dispatch(deleteData(id))
  };
};

const mapStateToProps = state => {
  return {
    datas: state
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(ViewDic)));
