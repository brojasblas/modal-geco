import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Header from './Header';
import MiniDrawer from './MiniDrawer';
import TabellaDefault from './TabellaDefault';
import ListaDipendentiCommessa from './ListaDipendentiCommessa';
import TabellaFatturato from './TabellaFatturato';
import TabellaFatturatoAtteso from './TabellaFatturatoAtteso';
import SintesiCommessa from './SintesiCommessa';
import {Routes, Route} from "react-router-dom";

const style = {
    display: 'flex',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '80%',
    maxHeight: '80vh', // Imposta un'altezza massima per la modal
    overflow: 'auto', // Abilita lo scrolling quando necessario,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
  };
  
  const drawerStyle = {
    flexShrink: 0, // Larghezza del MiniDrawer
  };

export default function ModelCommessa() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>DETTAGLIO COMMESSA</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box sx={drawerStyle}>
            <MiniDrawer />
          </Box>
          <Box sx={{ flex: 1, overflow: 'auto' }}>
            <Header />
            <Routes>
              <Route path="/" element={<TabellaDefault />} />
              <Route path="/listadipendenti" element={<ListaDipendentiCommessa />} />
              <Route path="/fatturato" element={<TabellaFatturato />} />
              <Route path="/fatturatoatteso" element={<TabellaFatturatoAtteso />} />
              <Route path="/sintesi" element={<SintesiCommessa />} />
              {/* <Route path="/ordinato" element={<TabellaOrdinato />} /> */}
            </Routes>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}