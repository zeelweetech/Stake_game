import React from "react";

const BigWins = () => {
    return(
        <>
        <div>Big Wins</div>
        </>
    )
}

export default BigWins


// import React, { useEffect, useState } from "react";
// import "../../App.css";
// import { DataGrid } from "@mui/x-data-grid";
// import {
//   getAllUser,
//   getUserNote,
//   getUserStatus,
// } from "../../services/userServices";
// import GroupIcon from "@mui/icons-material/Group";
// import Loader from "../component/Loader";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   IconButton,
// } from "@mui/material";
// import Columns from "./columns";
// import CloseIcon from "@mui/icons-material/Close";
// import { ErrorIcon } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// export default function Users() {
//   const [loading, setLoading] = useState(false);
//   const [userData, setUserData] = useState([]);
//   const [userNote, setUserNote] = useState({});
//   const [errors, setErrors] = useState({});
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate()
//   const [paginationModel, setPaginationModel] = useState({
//     page: 0,
//     pageSize: 10,
//   });
//   const [totalCount, setTotalCount] = useState(0);
//   const [currentUserId, setCurrentUserId] = useState(null);

//   useEffect(() => {
//     getAllUserdata();
//   }, [paginationModel?.page, paginationModel?.pageSize]);

//   const getAllUserdata = async () => {
//     try {
//       const response = await getAllUser({
//         page: paginationModel?.page + 1,
//         pageSize: paginationModel?.pageSize,
//       });
//       // console.log("getAllUser response", response);
//       setUserData(response?.UserList || []);
//       setTotalCount(response?.totalPulls);
//       setLoading(false);
//     } catch (error) {
//       console.error("Failed to fetch users: ", error);
//       setLoading(false);
//     }
//   };

//   const handleToggleStatus = async (userId, currentStatus) => {
//     if (!currentStatus) {
//       try {
//         const updatedUserData = userData.map((user) =>
//           user.id === userId ? { ...user, isActive: !currentStatus } : user
//         );
//         setUserData(updatedUserData);

//         const body = { isActive: !currentStatus };
//         await getUserStatus({ body: body, userId: userId });
//       } catch (error) {
//         console.error("Failed to toggle user status: ", error);
//       }
//     } else {
//       setOpen(true);
//       setCurrentUserId(userId);
//     }
//   };

//   const handleNote = async () => {
//     const { Note } = userNote;
//     let NoteErrors = {};

//     if (!Note) {
//       NoteErrors.Note = "Note is required";
//       setErrors(NoteErrors);
//       return;
//     }

//     try {
//       const body = {
//         notes: userNote.Note,
//       };
//       await getUserNote({ body: body, userId: currentUserId });
//       const updatedUserData = userData.map((user) =>
//         user.id === currentUserId
//           ? { ...user, isActive: false, notes: userNote.Note }
//           : user
//       );
//       setUserData(updatedUserData);

//       const statusBody = { isActive: false };
//       await getUserStatus({ body: statusBody, userId: currentUserId });

//       setOpen(false);
//     } catch (error) {
//       console.error("Failed to update user note/status: ", error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserNote((prevNote) => ({ ...prevNote, [name]: value }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
//   };

//   const handleUserData = (params) => {
//     const { userName, id } = params.row; 
//     navigate(`/users/${userName}/${id}`); 
//   };
  
//   const rows = userData.map((user) => ({
//     id: user?.id,
//     userName: user?.userName ? user?.userName : '-',
//     firstName: user?.firstName ? user?.firstName : '-',
//     lastName: user?.lastName ? user?.lastName : '-',
//     email: user?.email ? user?.email : '-',
//     mobileNumber: user?.mobileNumber ? user?.mobileNumber : '-',
//     country: user?.country ? user?.country : '-',
//     isActive: user?.isActive ? user?.isActive : '-',
//     Note: user?.notes ? user?.notes : '-',
//     // occupation: user?.occupation ? user?.occupation : '-',
//     // city: user?.city ? user?.city : '-',
//     // address: user?.address ? user?.address : '-',
//     // DOB: user?.DOB ? user?.DOB : '-',
//   }));

//   return (
//     <div className="bg-[#1a2c38] py-2 h-screen">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div>
//           <div className="text-white bg-[#0f212e] border-y-4 border-r-4 border-[#2f4553] flex items-center justify-center space-x-4 w-80 rounded-e-full mt-5">
//             <GroupIcon />
//             <p className=" text-2xl py-3">Users</p>
//           </div>
//           <div className="flex justify-center item-center py-8">
//             <div style={{ width: "75.25%" }}>
//               <DataGrid
//                 rows={rows}
//                 columns={Columns({ handleToggleStatus })}
//                 loading={loading}
//                 rowCount={totalCount}
//                 paginationModel={paginationModel}
//                 paginationMode="server"
//                 onPaginationModelChange={setPaginationModel}
//                 pageSizeOptions={[10, 20]}
//                 onRowClick={handleUserData}
//                 getRowClassName={(params) =>
//                   params.indexRelativeToCurrentPage % 2 === 0
//                     ? "row-dark"
//                     : "row-light"
//                 }
//                 sx={{
//                   border: "none",
//                   color: "#b1bad3",
//                   "& .MuiDataGrid-cell": {
//                     border: "none",
//                   },
//                   "& .MuiDataGrid-columnHeader": {
//                     borderBottom: "none",
//                     borderTop: "none",
//                   },
//                   "& .MuiDataGrid-footerContainer": {
//                     borderTop: "none",
//                     borderBottom: "none",
//                     color: "white",
//                   },
//                   "& .MuiTablePagination-root": {
//                     color: "white",
//                   },
//                   "& .MuiTablePagination-selectIcon": {
//                     color: "white",
//                   },
//                   overflowY: 'hidden',
//                 }}
//               />
//             </div>
//           </div>

//           <Dialog
//             open={open}
//             onClose={() => setOpen(false)}
//             maxWidth="sm"
//             fullWidth
//             sx={{
//               "& .MuiPaper-root": {
//                 borderRadius: "6px",
//                 backgroundColor: "#1a2c38",
//                 color: "white",
//               },
//             }}
//           >
//             <DialogTitle>
//               <div className="flex justify-between items-center">
//                 <p>Reson</p>
//                 <IconButton>
//                   <CloseIcon
//                     onClick={() => setOpen(false)}
//                     className="text-white"
//                   />
//                 </IconButton>
//               </div>
//             </DialogTitle>
//             <DialogContent>
//               {/* <p>What is the reason behind your decision?</p> */}
//               <textarea
//                 rows="4"
//                 cols="70"
//                 name="Note"
//                 onChange={(e) => handleChange(e)}
//                 value={userNote?.Note}
//                 className="bg-[#1a2c38] my-2 border-2 border-[#4d718768]"
//               ></textarea>
//               {errors?.Note && (
//                 <div className="flex items-center space-x-1 text-[#f2708a]">
//                   <ErrorIcon fontSize="10" />
//                   <p className="text-xs">{errors.Note}</p>
//                 </div>
//               )}
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={() => setOpen(false)} color="primary">
//                 Close
//               </Button>
//               <Button color="primary" onClick={handleNote}>
//                 {loading ? <Loader /> : "save"}
//               </Button>
//             </DialogActions>
//           </Dialog>
//         </div>
//       )}
//     </div>
//   );
// }
