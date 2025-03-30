// SearchPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage({ contacts }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("name");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact[filter].toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h2>Search Contacts</h2>
      <input
        type="text"
        placeholder={`Search by ${filter}`}
        value={query}
        onChange={handleSearch}
      />
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="name">Name</option>
        <option value="bloodGroup">Blood Group</option>
        <option value="nativePlace">Native Place</option>
      </select>
      <ul>
        {filteredContacts.map((contact) => (
          <li key={contact.phone} onClick={() => navigate(`/contact/${contact.phone}`)}>
            {contact.name} - {contact.bloodGroup} - {contact.nativePlace}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;

