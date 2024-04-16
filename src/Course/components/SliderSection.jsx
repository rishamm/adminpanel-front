import React from "react";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MdDelete, MdEdit } from "react-icons/md";
import Card from "../../components/card";
import { Tooltip } from "@mui/material";
import publish from "../../assets/upload.png";
import EditSlider from "../addingSection/EditSlider";
import AddSliderTable from "../addingSection/AddSliderTable";

const CourseCard = () => {
  const communities = [
    {
      id: 1,
      image: "image1.png", // Image URL or file path
    },
    {
      id: 2,
      image: "image2.png", // Image URL or file path
    },
    {
      id: 3,
      image: "image3.png", // Image URL or file path
    },
    {
      id: 4,
      image: "image4.png", // Image URL or file path
    },
  ];

  return (
    <div>
      <Card extra={`h-full my-5 mx-5 `}>
        <div className="flex justify-between mx-7">
          <CardHeader
            className=""
            title="Slider Section"
            action={<IconButton></IconButton>}
          />
          <div className="flex items-center mx-4">
            <EditSlider />
          </div>
        </div>

        <div className="flex flex-col justify-center items-last p-6 font-medium font-sans tracking-tighter bg-gray-200 rounded-3xl text-md text-gray-400 leading-23 mx-24">
          <h1 className="flex justify-center">Heading 1 </h1>
        </div>
        <div className="flex justify-end items-end p-8">
          <AddSliderTable/>
        </div>
        <Card
          className="mx-10 mb-10"
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <TableContainer component={Paper}>
            <Table className="flex justify-center items-center">
              <TableHead>
                <TableRow>
                  <TableCell className="text-center flex justify-center space-between">
                    NO
                  </TableCell>
                  <TableCell className="text-left">Image</TableCell>
                  <TableCell className="text-left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {communities.map((community, index) => (
                  <TableRow key={community.id}>
                    <TableCell className="text-center">{index + 1}</TableCell>
                    <TableCell className="text-left">
                      <img
                        src={community.image}
                        alt="Community"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </TableCell>
                    <TableCell className="text-left">
                      <div className="flex items-center gap-2">
                        <div className="">
                          <button className="dark:text-navy-700">
                            <Tooltip title="Publish">
                              <IconButton>
                                <img
                                  src={publish}
                                  className="h-[20px]"
                                  alt=""
                                />
                              </IconButton>
                            </Tooltip>
                          </button>
                          <button className="dark:text-navy-700">
                            <Tooltip title="Delete">
                              <IconButton>
                                <MdDelete className="w-6 h-6 text-black" />
                              </IconButton>
                            </Tooltip>
                          </button>
                          <button className="dark:text-navy-700">
                            <Tooltip title="Edit">
                              <IconButton>
                                <MdEdit className="w-5 h-6 text-black " />
                              </IconButton>
                            </Tooltip>
                          </button>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>

        
      </Card>
    </div>
  );
};

export default CourseCard;
