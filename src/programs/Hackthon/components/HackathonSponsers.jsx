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
import Card from '../../../components/card';
import { Tooltip } from '@mui/material';
import publish from '../../../assets/upload.png';

const communities = [
    {
        id: 1,
        heading: 'Community 1',
        image: 'img',
    },
    {
        id: 2,
        heading: 'Community 2',
        image: 'img',
    },
];

const HackathonSponsors = () => {
    return (
        <div className='mb-5'>
            <Card extra={` h-full sm:overflow-auto p-2 mx-5`}>
                <div className="flex justify-between mx-7">
                    <CardHeader
                        className=""
                        title="Hackathon Sponsors"
                        action={<IconButton />}
                    />
                    <div className="flex items-center mx-4"></div>
                </div>
                <Card
                    className="mx-10 mb-10"
                    style={{
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        boxShadow:
                            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    }}
                >
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="text-center">NO</TableCell>
                                    <TableCell className="text-left">Sponsers Name</TableCell>
                                    <TableCell className="text-left">Sponsers Image</TableCell>
                                    <TableCell className="text-left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {communities.map((community, index) => (
                                    <TableRow key={community.id}>
                                        <TableCell className="text-center">{index + 1}</TableCell>
                                        <TableCell className="text-left">{community.heading}</TableCell>
                                        <TableCell className="text-left">{community.image}</TableCell>
                                        <TableCell className="text-left">
                                            <div className="flex items-center gap-2">
                                                <div className="">
                                                    <button className="dark:text-navy-700">
                                                        <Tooltip title="Publish">
                                                            <IconButton>
                                                                <img src={publish} className="h-[20px]" alt="" />
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
                                                                <MdEdit className="w-5 h-6 text-black" />
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

export default HackathonSponsors;
