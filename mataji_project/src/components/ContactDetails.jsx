// ContactDetails.jsx
import { useParams } from "react-router-dom";

function ContactDetails({ contacts }) {
  const { phone } = useParams();
  const contact = contacts.find((c) => c.phone === phone);

  if (!contact) {
    return <h2>Contact not found</h2>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {contact.name}</p>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Blood Group: {contact.bloodGroup}</p>
      <p>Native Place: {contact.nativePlace}</p>
    </div>
  );
}

export default ContactDetails;
