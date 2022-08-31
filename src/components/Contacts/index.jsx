import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Row from 'components/Row';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from '../Contacts/index.module.css';

export default function Contacts(props) {
  const { data } = props;
  const filter = useSelector(state => state.contacts.filter);
  const handleFilter = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {data && (
        <div className={styles.container}>
          <TableContainer sx={{ maxHeight: 440 }} component={Paper}>
            <Table
              stickyHeader
              sx={{ maxWidth: 550 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">Contact name</TableCell>
                  <TableCell align="center">Phone number</TableCell>

                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {handleFilter().map(row => (
                  <Row key={row.id} row={row} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>
  );
}

Contacts.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
