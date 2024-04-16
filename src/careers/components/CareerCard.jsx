import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdDelete, MdEdit } from 'react-icons/md';
import Card from '../../components/card';
import { Pagination, Tooltip } from '@mui/material';
import publish from "../../assets/upload.png"
import AddCareerList from '../addingSection/AddCareerList';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCareerList } from "../../action/careerAction";

const CareerCard = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const career = useSelector((i) => i.careerState.careerData)
    useEffect(() => {
        dispatch(fetchCareerList());
    }, [dispatch])
    
    const communities = [
        { id: 1, heading: 'Startups', body: "Unleash your potential with ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category A' },
        { id: 2, heading: 'Startups', body: "Unleash your potential with ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category A' },
        { id: 3, heading: 'Startups', body: "Unleash your potential with ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category A' },
        { id: 4, heading: 'Startups', body: "Unleash your potential with ", link: "https://www.w3.org/Provider/Style/dummy.html", action: 'Category A' },
    ];

    const [page, setPage] = useState(1);
    const rowsPerPage = 10;
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    return (
        <div>
            <Card>
                <div className='flex justify-between mx-7'>
                    <CardHeader
                        className=''
                        title="Career List"
                        action={
                            <IconButton>
                            </IconButton>
                        }
                    />
                    <div className='flex items-center mx-4'>
                        <AddCareerList />
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
                                    <TableCell className="text-left">Link</TableCell>
                                    <TableCell className="text-left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {career.map((career, index) => (
                                    <TableRow key={career.id}>
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell className="text-left">{career.heading}</TableCell>
                                        <TableCell className="text-left">{career.body}</TableCell>
                                        <TableCell className="text-left">{career.link}</TableCell>
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
                    <Pagination
                        count={Math.ceil(career.length / rowsPerPage)}
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

export default CareerCard;
