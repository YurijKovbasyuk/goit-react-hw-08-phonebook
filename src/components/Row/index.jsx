import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Input, TableCell, TableRow } from '@mui/material';
import PropsTypes from 'prop-types';
import { useState } from 'react';
import { useDeleteContactMutation } from 'redux/Contacts/rtk';

const Row = ({ row }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const [name, setName] = useState(row.name);
  const [number, setNumber] = useState(row.number);

  return (
    <TableRow
      key={row.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <Input
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </TableCell>
      <TableCell align="right">
        <Input
          value={number}
          onChange={e => {
            setNumber(e.target.value);
          }}
        />
      </TableCell>
      <TableCell align="right">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteContact(row.id);
          }}
        >
          {isLoading ? 'Loading' : 'Delete'}
        </Button>
      </TableCell>
    </TableRow>
  );
};

Row.propTypes = {
  row: PropsTypes.shape({
    name: PropsTypes.string,
    number: PropsTypes.string,

    id: PropsTypes.string,
  }).isRequired,
};

export default Row;
