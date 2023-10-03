'use client'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import PokemonItem from '_components/Pages/Pokemon/PokemonItem';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  

const PokemonItemModal = ({ params }: { params: { id: string }}) => {
    const [open, setOpen] = useState(true)
    const { id } = params

    return(
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            keepMounted 
        >
            <Box sx={{ ...style }}>
                <PokemonItem id={id}/>
            </Box>
        </Modal>
    )
}

export default PokemonItemModal; 