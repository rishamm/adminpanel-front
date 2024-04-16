

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
import { Tooltip } from '@mui/material';
import publish from "../../assets/upload.png"
import AddQuerieTable from '../addingSection/AddQuerieTable';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchQueryList } from '../../action/contactAction';
import { useSelector } from 'react-redux';

const QueriesTable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchQueryList());
    }, [dispatch])

    const queries = useSelector((i) => i.contactState.queryData)


    const communities = [
        { id: 1, name: 'John Doe', mobile: '1234567890', email: 'john@example.com', subject: 'Query regarding product' },
        { id: 2, name: 'Jane Smith', mobile: '9876543210', email: 'jane@example.com', subject: 'Billing issue' },
        { id: 3, name: 'Alice Johnson', mobile: '5551234567', email: 'alice@example.com', subject: 'Feedback on service' },
        { id: 4, name: 'Bob Brown', mobile: '4447890123', email: 'bob@example.com', subject: 'Technical support' },
    ];

    return (
        <div>
            <Card extra={`h-full my-5 mx-5 `}>
                <div className='flex justify-between mx-7'>
                    <CardHeader
                        className=''
                        title="Query List"
                        action={
                            <IconButton>
                            </IconButton>
                        }
                    />
                </div>
                <Card className='mx-10 mb-10' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="text-center">NO</TableCell>
                                    <TableCell className="text-left">Name</TableCell>
                                    <TableCell className="text-left">Mobile No</TableCell>
                                    <TableCell className="text-left">Mail_ID</TableCell>
                                    <TableCell className="text-left">Subject</TableCell>
                                    <TableCell className="text-left">Subject</TableCell>
                                    <TableCell className="text-left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {queries.map((queries, index) => (
                                    <TableRow key={queries.id}>
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell className="text-left">{queries.name}</TableCell>
                                        <TableCell className="text-left">{queries.mobile}</TableCell>
                                        <TableCell className="text-left">{queries.email}</TableCell>
                                        <TableCell className="text-left">{queries.message}</TableCell>
                                        <TableCell className="text-left">{queries.whatAreYouLookingFor}</TableCell>
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
        </div>
    )
}

export default QueriesTable;


