import React, { useState } from 'react';
import Card from "../../../components/card";
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
import PublishIcon from '@mui/icons-material/Publish'; 
import Select from '@mui/material/Select'; 
import MenuItem from '@mui/material/MenuItem'; 
import { FormControl, InputLabel } from '@mui/material'; 
import { Pagination } from '@mui/material';
import EditCourseCard from '../addingSection/EditCourseCard';

const CourseCard = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
        setPage(1);
    };

    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const communities = [
        { id: 1, name: 'Startups', image: "Unleash your potential with a ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Online' },
        { id: 2, name: 'Startups', image: "Unleash your potential with a", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Online' },
        { id: 3, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Offline' },
        { id: 4, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Offline' },
        { id: 5, name: 'Startups', image: "Unleash your potential with c", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Hybrid' },
        { id: 6, name: 'Startups', image: "Unleash your potential with a ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Online' },
        { id: 7, name: 'Startups', image: "Unleash your potential with a", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Online' },
        { id: 8, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Offline' },
        { id: 9, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Offline' },
        { id: 10, name: 'Startups', image: "Unleash your potential with c", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Hybrid' },
        { id: 11, name: 'Startups', image: "Unleash your potential with a ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Online' },
        { id: 12, name: 'Startups', image: "Unleash your potential with a", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Online' },
        { id: 13, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Offline' },
        { id: 14, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Offline' },
        { id: 15, name: 'Startups', image: "Unleash your potential with c", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Hybrid' },
    ];

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const filteredCommunities = selectedCategory === 'All' ? communities : communities.filter(community => community.action === selectedCategory);
    const displayedCommunities = filteredCommunities.slice(startIndex, endIndex);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    return (
        <div>
            <Card extra={` h-full sm:overflow-auto p-2 mx-5 p-5 mb-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className="text-xl font-bold text-navy-700">
                        Educational Course Card
                    </div>
                    <div className='flex gap-3'>
                        <EditCourseCard/>
                    </div>
                </header>
                <div className="mb-5 ">
                    <FormControl variant="outlined">
                    <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                  label="Category"
                  style={{ minWidth: '150px' }}
                >
                            <MenuItem value="All">All</MenuItem>
                            <MenuItem value="Online">Online</MenuItem>
                            <MenuItem value="Offline">Offline</MenuItem>
                            <MenuItem value="Hybrid">Hybrid</MenuItem>
                        </Select>

                    </FormControl>
                </div>
                <Card extra={` h-full sm:overflow-auto  `}>
                    <Card className='mb-10 ' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="text-center">NO</TableCell>
                                        <TableCell className="text-left">Image</TableCell>
                                        <TableCell className="text-left">Name</TableCell>
                                        <TableCell className="text-left">Qualification</TableCell>
                                        <TableCell className="text-left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedCommunities.map((community, index) => (
                                        <TableRow key={community.id}>
                                            <TableCell className="text-center">{startIndex + index + 1}</TableCell>
                                            <TableCell className="text-left">{community.name}</TableCell>
                                            <TableCell className="text-left">{community.image}</TableCell>
                                            <TableCell className="text-left">{community.link}</TableCell>
                                            <TableCell className="text-left">
                                                <div className="flex items-center gap-2">
                                                    <div className=''>
                                                        <button className="dark:text-navy-700">
                                                            <Tooltip title="Publish">
                                                                <IconButton>
                                                                    <PublishIcon className='h-[20px]' />
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
                        <Pagination
                            count={Math.ceil(filteredCommunities.length / rowsPerPage)}
                            page={page}
                            onChange={handleChangePage}
                            variant="outlined"
                            shape="rounded"
                            className='flex justify-center p-5'
                        />
                    </Card>
                </Card>
            </Card>
        </div>
    );
};

export default CourseCard;
