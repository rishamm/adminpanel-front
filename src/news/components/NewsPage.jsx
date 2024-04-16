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
import AddNewsList from '../addingSection/AddNewsList';
import Pagination from '@mui/material/Pagination';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchNewsList } from '../../action/newsAction';
import { IoEye } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const NewsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsList());
  }, [dispatch]);
  const news = useSelector((i) => i.newsState.newsData);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  // Extracting unique categories from news
  const categories = [...new Set(news.map(newsItem => newsItem.category))];

  const filteredNews = selectedCategory === 'All' ? news : news.filter(newsItem => newsItem.category === selectedCategory);

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
    setPage(1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleView = (newsId) => {
    navigate('/hack');
  };

  return (
    <div>
      <Card extra={` h-full sm:overflow-auto my-5 mx-5`}>
        <header className="relative flex items-center justify-between py-4 mx-10">
          <div className='flex flex-col gap-3'>
            <div className="text-xl font-bold text-navy-700">
              News List
            </div>
            <div className="">
              <FormControl variant="outlined">
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                  label="Category"
                  style={{ minWidth: '150px' }}
                >
                  <MenuItem key="All" value="All">All</MenuItem>
                  {categories.map(category => (
                    <MenuItem key={category} value={category}>{category}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='flex gap-3'>
            <AddNewsList />
          </div>
        </header>
        <Card className='mx-10 mb-10' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-center"><strong>NO</strong></TableCell>
                  <TableCell className="text-left"><strong>Heading</strong></TableCell>
                  <TableCell className="text-left"><strong>Sub heading</strong></TableCell>
                  <TableCell className="text-left"><strong>Date</strong></TableCell>
                  <TableCell className="text-left"><strong>Time</strong></TableCell>
                  <TableCell className="text-left"><strong>Link</strong></TableCell>
                  <TableCell className="text-left"><strong>Action</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(filteredNews.slice((page - 1) * rowsPerPage, page * rowsPerPage)).map((newsItem, index) => (
                  <TableRow key={newsItem.id}>
                    <TableCell className="text-center">{index + 1 + (page - 1) * rowsPerPage}</TableCell>
                    <TableCell className="text-left">{newsItem.heading}</TableCell>
                    <TableCell className="text-left">{newsItem.subHeading}</TableCell>
                    <TableCell className="text-left">{newsItem.date}</TableCell>
                    <TableCell className="text-left">{newsItem.Time}</TableCell>
                    <TableCell className="text-left">{newsItem.link}</TableCell>
                    <TableCell className="text-left">
                      <div className="flex items-center gap-2">
                        <IconButton onClick={handleView}>
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
              count={Math.ceil(filteredNews.length / rowsPerPage)}
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
