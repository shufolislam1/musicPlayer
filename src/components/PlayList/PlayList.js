import React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const PlayList = () => {
    return (
        <div className='flex justify-center '>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Button className='text-stone-400'>Create PlayList</Button>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
        </div>
    );
};

export default PlayList;