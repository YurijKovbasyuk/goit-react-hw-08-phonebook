import styles from '../Form/index.module.css';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useAddContactsMutation, useGetContactsQuery } from '../../redux/rtk';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addItem] = useAddContactsMutation();

  const handleSubmit = e => {
    e.preventDefault();

    let bool = data.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (!bool) {
      let loginInputId = nanoid();
      addItem({ id: loginInputId, name: name, number: number });
      reset();
    } else alert(name + ' is already exists');
  };

  const reset = () => {
    setNumber('');
    setName('');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeTel = e => {
    setNumber(e.target.value);
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChangeName}
          type="text"
          name="name"
          placeholder="contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={styles.input}
          value={name}
        />

        <br />

        <br />

        <Input
          onChange={handleChangeTel}
          placeholder="number"
          type="tel"
          name="number"
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />

        <br />
        <Button variant="contained" type="submit" className={styles.button}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
