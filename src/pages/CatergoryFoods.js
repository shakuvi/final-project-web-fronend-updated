import React, { useEffect, useState } from "react";
import CommonLayout from "../layouts/common/CommonLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFoodLoadingStatus,
  getAllFoodsByCatergory,
  setEmployeeSelectedFood,
  updateFood,
} from "../store/actions/foodAction";
import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Dialog,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import FoodDetails from "../layouts/food/foodlayout/FoodDetails";

export default function CatergoryFoods() {
  const dispatch = useDispatch();
  const { userSelectedCatergory } = useSelector(
    (store) => store.catergoryReducer
  );

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (food) => {
    setOpen(true);
    dispatch(setEmployeeSelectedFood(food));
    dispatch(clearFoodLoadingStatus());
  };

  const { employeeSelectedFood, foodUpdateLoadingStatus } = useSelector(
    (store) => store.foodReducer
  );

  console.log(employeeSelectedFood);

  const handleClose = () => {
    setOpen(false);
  };

  const handleFoodChange = (value, name) => {
    dispatch(
      setEmployeeSelectedFood({ ...employeeSelectedFood, [name]: value })
    );
    console.log(name);
    console.log(value);
  };

  const handleSaveUpate = () => {
    dispatch(updateFood(employeeSelectedFood));
    console.log(employeeSelectedFood);
    handleClose();
  };

  const { allFoodList } = useSelector((store) => store.foodReducer);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    console.log(foodUpdateLoadingStatus);
    if (foodUpdateLoadingStatus === "completed") {
      console.log(foodUpdateLoadingStatus);
      dispatch(getAllFoodsByCatergory(userSelectedCatergory._id));
    }
  }, [dispatch, foodUpdateLoadingStatus, userSelectedCatergory._id]);

  useEffect(() => {
    dispatch(getAllFoodsByCatergory(userSelectedCatergory._id));
  }, [dispatch, userSelectedCatergory]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  console.log(userSelectedCatergory);

  return (
    <div>
      <CommonLayout>
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Price</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Description
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Image</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? allFoodList.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : allFoodList
              ).map((val, key) => (
                <TableRow key={key}>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.price}</TableCell>
                  <TableCell>{val.description}</TableCell>
                  <TableCell>{val.image}</TableCell>
                  <TableCell>
                    <Grid container justifyContent="space-around">
                      <Grid item>
                        <IconButton
                          color="secondary"
                          onClick={() => {
                            handleClickOpen(val);
                          }}
                        >
                          <EditOutlinedIcon />
                        </IconButton>
                      </Grid>
                      <Grid item>
                        <IconButton color="primary">
                          <DeleteSweepOutlinedIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={allFoodList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
        <div style={{ paddingLeft: 10, paddingRight: 10 }}>
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="xl"
            PaperProps={{
              style: {
                width: "80%",
                height: "80%",
              },
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ height: "100%" }}
            >
              <Grid item>
                <FoodDetails
                  employeeSelectedFood={employeeSelectedFood}
                  handleFoodChange={handleFoodChange}
                  handleSaveUpate={handleSaveUpate}
                />
              </Grid>
            </Grid>
          </Dialog>
        </div>
      </CommonLayout>
    </div>
  );
}
