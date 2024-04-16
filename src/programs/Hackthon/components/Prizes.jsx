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
import publish from "../../../assets/upload.png";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Prizes = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleChangeCategory = (event) => {
        setSelectedCategory(event.target.value);
    };

    const communities = [
        { id: 1, name: 'Startups', image: "Unleash your potential with a ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category A' },
        { id: 2, name: 'Startups', image: "Unleash your potential with b", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category A' },
        { id: 3, name: 'Startups', image: "Unleash your potential with c", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category B' },
        { id: 4, name: 'Startups', image: "Unleash your potential with d", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category B' },
    ];

    // Filter communities based on selected category
    const filteredCommunities = selectedCategory === 'All' ? communities : communities.filter(community => community.action === selectedCategory);

    return (
        <div>
            <Card extra={` h-full sm:overflow-auto p-2 mx-5 p-5 mb-5`}>
                <header className="relative flex items-center justify-between py-4">
                    <div className='flex flex-col gap-3'>
                        <div className="text-xl font-bold text-navy-700">
                            Prize
                        </div>
                        <div className="border">
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
                                    <MenuItem value="Category A">Category A</MenuItem>
                                    <MenuItem value="Category B">Category B</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='flex gap-3'>

                    </div>
                </header>
                <Card extra={` h-full sm:overflow-auto  `}>
                    <Card className='mb-10 ' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="text-center">NO</TableCell>
                                        <TableCell className="text-left">Name</TableCell>
                                        <TableCell className="text-left">Image</TableCell>
                                        <TableCell className="text-left">Qualification</TableCell>
                                        <TableCell className="text-left">Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {filteredCommunities.map((community, index) => (
                                        <TableRow key={community.id}>
                                            <TableCell className="text-center">{index + 1}</TableCell>
                                            <TableCell className="text-left">{community.name}</TableCell>
                                            <TableCell className="text-left">{community.image}</TableCell>
                                            <TableCell className="text-left">{community.link}</TableCell>
                                            <TableCell className="text-left">
                                                <div className="flex items-center gap-2">
                                                    <div className=''>
                                                        <button className="dark:text-navy-700">
                                                            <Tooltip title="Publish">
                                                                <IconButton>
                                                                    <img src={publish} className='h-[20px]' alt="" />
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
            </Card>
        </div>
    )
}

export default Prizes;
