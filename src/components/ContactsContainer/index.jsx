import UserMenu from 'components/UserMenu';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Contacts from '../Contacts';
import styles from '../ContactsContainer/index.module.css';
import Filter from '../Filter';
import Form from '../Form';

const ContactsConatiner = props => {
  const token = useSelector(state => state.contacts.token);
  return (
    <>
      {token && (
        <Fragment>
          <div className={styles.body}>
            <div className={styles.left}>
              <UserMenu />
              <h2>Phonebook</h2>
              <Form />
            </div>
            <div className={styles.right}>
              <h2>Contacts</h2>
              <Filter />
              <Contacts data={props.data} />
            </div>
          </div>
        </Fragment>
      )}
    </>
  );
};
ContactsConatiner.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactsConatiner;
