import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Tooltip } from '@mui/material';
import publish from "../../assets/upload.png";
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { fetchUserList } from '../../action/userAction'; 

const NewsPage = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const user = useSelector((i) => i.userState.userData)
  console.log(user,"aaa")
  const navigate = useNavigate();

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleView = (userId) => {
    navigate('/hack');
  };

  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4 mx-10">
          <div className='flex flex-col gap-3'>
            <div className="text-xl font-bold text-navy-700">
              User List
            </div>
          </div>
        </header>
        <Card className='mx-10 mb-10' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-center">NO</TableCell>
                  <TableCell className="text-left">Username</TableCell>
                  <TableCell className="text-left">Email</TableCell>
                  <TableCell className="text-left">Level</TableCell>
                  
                  <TableCell className="text-left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {user?.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((user, index) => (
                  <TableRow key={user.id}>
                    <TableCell className="text-center">{index + 1 + (page - 1) * rowsPerPage}</TableCell>
                    <TableCell className="text-left">{user.username}</TableCell>
                    <TableCell className="text-left">{user.email}</TableCell>
                    <TableCell className="text-left">{user.phone}</TableCell>
                    <TableCell className="text-left">
                      <div className="flex items-center gap-2">
                        <IconButton onClick={() => handleView(user.id)}>
                          <Tooltip title="view">
                            <IoEye className='text-black'/>
                          </Tooltip>
                        </IconButton>
                        <IconButton>
                          <Tooltip title="Publish">
                            <img src={publish} className='h-[20px]' alt="Publish Icon" />
                          </Tooltip>
                        </IconButton>
                        <IconButton>
                          <Tooltip title="Delete">
                            <MdDelete className="w-6 h-6 text-black" />
                          </Tooltip>
                        </IconButton>
                        <IconButton>
                          <Tooltip title="Edit">
                            <MdEdit className="w-5 h-6 text-black " />
                          </Tooltip>
                        </IconButton>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Pagination
              count={Math.ceil(user?.length / rowsPerPage)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
              className='flex justify-center p-5'
            />
          </TableContainer>
        </Card>
      </Card>
    </div>
  );
}

export default NewsPage;
