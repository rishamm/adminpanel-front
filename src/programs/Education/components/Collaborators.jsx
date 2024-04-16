import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import { MdDelete, MdEdit } from 'react-icons/md';
import Card from '../../../components/card';
import publish from "../../../assets/upload.png";
import { useState } from 'react';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCollbrtr from '../addingSection/AddCollbrtr';

const Collaborators = () => {

    const [page, setPage] = useState(1);
    const rowsPerPage = 8;

    const communities = [
        { id: 1, brand: 'Idea Stage ', logo: "Unleash your potential with " },
        { id: 2, brand: 'Incubation', logo: "Receive guidance, educational " },
        { id: 3, brand: 'Acceleration', logo: "Discover diverse investment " },
        { id: 4, brand: 'Scale Stage ', logo: "Contribute your expertise to " },
        { id: 5, brand: 'Hackathon ', logo: "Collaborate for technology " },
        { id: 6, brand: 'Education Course ', logo: "Explore innovation, partnerships" },
        { id: 7, brand: 'Startups', logo: "Unleash your potential with " },
        { id: 8, brand: 'Startups', logo: "Unleash your potential with " },
        { id: 9, brand: 'Startups', logo: "Unleash your potential with " },
        { id: 10, brand: 'Startups', logo: "Unleash your potential with " },
        { id: 11, brand: 'Startups', logo: "Unleash your potential with " },
        { id: 12, brand: 'Startups', logo: "Unleash your potential with " },

    ];

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 mx-5`}>
                <div className='flex justify-between mx-5'>
                    <CardHeader
                        className=''
                        title="Collaborators"
                        action={<IconButton></IconButton>}
                    />
                    <div className='flex items-center mx-4'>
                        <AddCollbrtr/>
                    </div>
                </div>
                <Card className='mx-10 mb-10' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="text-center">NO</TableCell>
                                    <TableCell className="text-left">Heading</TableCell>
                                    <TableCell className="text-left">Body</TableCell>
                                    <TableCell className="text-left"></TableCell>
                                    <TableCell className="text-left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {communities.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((community, index) => (
                                    <TableRow key={community.id}>
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell className="text-left">{community.brand}</TableCell>
                                        <TableCell className="text-left">{community.logo}</TableCell>
                                        <TableCell className="text-left">
                                        </TableCell>
                                        <TableCell className="text-left">
                                            <div className="flex items-center gap-2">
                                                <Tooltip title="Publish">
                                                    <IconButton>
                                                        <img src={publish} className='h-[20px]' alt="" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete">
                                                    <IconButton>
                                                        <MdDelete className="w-6 h-6 text-black" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="View Details">
                                                    <Link to={`/community/${community.id}`}>
                                                        <MdEdit className="w-5 h-6 text-black" />
                                                    </Link>
                                                </Tooltip>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Pagination
                        count={Math.ceil(communities.length / rowsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        variant="outlined"
                        shape="rounded"
                        className='flex justify-center p-5'
                    />
                </Card>
            </Card>
        </div>
    );
}

export default Collaborators;
