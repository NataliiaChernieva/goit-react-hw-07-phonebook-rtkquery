import PropTypes from 'prop-types';
import { ContactItem} from './ContactListItem.styled';
import Button from '../Button/Button';
// import { deleteContact } from '../../redux/actions/items'; //без Toolkit i Slice
import { useDeleteContactMutation } from '../../redux/operations';
import { Spinner } from '../Spinner/Spinner';


export default function ContactListItem({ name, number,id}) {
  const [deleteContact, {isLoading: isDeliting}] = useDeleteContactMutation();
  return (
    <ContactItem>
      {name} : {number}
      <Button type="button" text="delete" onClick={() => deleteContact(id)} disabled={isDeliting} />
      {isDeliting && <Spinner size={12}/>}
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}