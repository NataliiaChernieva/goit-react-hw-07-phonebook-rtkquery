import PropTypes from 'prop-types';
import { ContactItem} from './ContactListItem.styled';
import Button from '../Button/Button';
// import { deleteContact } from '../../redux/actions/items'; //без Toolkit i Slice


export default function ContactListItem({ name, number, onClick}) {
  return (
    <ContactItem>
      {name} : {number}
      <Button type="button" text="delete" onClick={onClick} />
    </ContactItem>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}