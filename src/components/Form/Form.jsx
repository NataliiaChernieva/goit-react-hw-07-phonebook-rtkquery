import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast';
import { CustomForm } from './Form.styled';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { Spinner } from '../Spinner/Spinner';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/actions/items'; //без Toolkit i Slice
// import { addContact } from '../../redux/slices/itemsSlice';
import {useFetchContactsQuery, usePostContactMutation } from '../../redux/operations'; //c RTKQuery

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact, {isLoading}] = usePostContactMutation();
  const { data: contacts } = useFetchContactsQuery();

  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => state.items);
  
  const handleSetInfo = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    const id = uuidv4();
    
    contacts.find(savedContact => savedContact.name === name)
      ? alert(`${name} is already in contacts`)
      // : dispatch(addContact({ name, number, id }));
      : addContact({ name, number, id });
    reset();
    toast.success('Сontact is added to the phone book!');
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <CustomForm onSubmit={handleAddContact}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleSetInfo}
      />
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleSetInfo}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading && <Spinner size={12} />}
        Add contact
      </Button>
    </CustomForm>
  );
}
