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
import Card from '../../components/card';
import publish from "../../assets/upload.png";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Pagination } from '@mui/material';
import { Link } from 'react-router-dom';
import { fetchProgramList } from '../../action/programAction';
import { IoEye } from 'react-icons/io5';

const ProgramTable = () => {

    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const program = useSelector((state) => state.programState.programData);
    console.log(program, "program");
    
    useEffect(() => {
        dispatch(fetchProgramList());
    }, [dispatch])

    const handleView = () => {
        console.log("aa")
    }
    const [page, setPage] = useState(1);
    const rowsPerPage = 10;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <div>
            <Card extra={` h-full sm:overflow-auto my-5 `}>
                <div className='flex justify-between mx-7'>
                    <CardHeader
                        className=''
                        title="Program Table"
                        action={<IconButton></IconButton>}
                    />
                    <div className='flex items-center mx-4'>
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
                                    <TableCell className="text-left">Button Text</TableCell>
                                    <TableCell className="text-left">Link</TableCell>
                                    <TableCell className="text-left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {program.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((program, index) => (
                                    <TableRow key={program.id}>
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell className="text-left">{program.heading}</TableCell>
                                        <TableCell className="text-left">{program.description}</TableCell>
                                        <TableCell className="text-left">{program.buttonText}</TableCell>
                                        <TableCell className="text-left">{program.link}</TableCell>
                                        <TableCell className="text-left">
                                            <div className="flex items-center gap-2">
                                                <IconButton onClick={handleView}>
                                                    <Tooltip title="view">
                                                        <IoEye className='text-black' />
                                                    </Tooltip>
                                                </IconButton>
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
                                                    <Link to={`/community/${program.id}`}>
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
                        count={Math.ceil(program.length / rowsPerPage)}
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

export default ProgramTable;
