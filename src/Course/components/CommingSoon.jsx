import React from 'react';
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
import publish from "../../assets/upload.png";
import AddComingSoon from '../addingSection/AddComingSoon';

const CommingSoon = () => {
    const communities = [
        { 
          id: 1, 
          heading: 'Heading 1', 
          image: 'image1.png', // Image URL or file path
          text: 'Text 1', 
          link: 'Link 1' 
        },
        { 
          id: 2, 
          heading: 'Heading 2', 
          image: 'image2.png', // Image URL or file path
          text: 'Text 2', 
          link: 'Link 2' 
        },
        { 
          id: 3, 
          heading: 'Heading 3', 
          image: 'image3.png', // Image URL or file path
          text: 'Text 3', 
          link: 'Link 3' 
        },
        { 
          id: 4, 
          heading: 'Heading 4', 
          image: 'image4.png', // Image URL or file path
          text: 'Text 4', 
          link: 'Link 4' 
        },
      ];
    
  return (
    <div>
      <Card extra={`h-full my-5 mx-5 `}>
        <div className='flex justify-between mx-7'>
          <CardHeader
            className=''
            title="Comming Soon Courses"
            action={
              <IconButton>
              </IconButton>
            }
          />
          <div className='flex items-center mx-4'>
            <AddComingSoon/>

          </div>
        </div>
        <Card className='mx-10 mb-10' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className="text-center">NO</TableCell>
                  <TableCell className="text-left">Heading</TableCell>
                  <TableCell className="text-left">Image</TableCell>
                  <TableCell className="text-left">Text</TableCell>
                  <TableCell className="text-left">Link</TableCell>
                  <TableCell className="text-left">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {communities.map((community, index) => (
                  <TableRow key={community.id}>
                    <TableCell className="text-center">{index + 1}</TableCell>
                    <TableCell className="text-left">{community.heading}</TableCell>
                    <TableCell className="text-left">
                      <img src={community.image} alt="Community" style={{ width: '50px', height: '50px' }} />
                    </TableCell>
                    <TableCell className="text-left">{community.text}</TableCell>
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
    </div>
  )
}

export default CommingSoon

