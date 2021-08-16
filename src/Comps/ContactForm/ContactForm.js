import { useState } from "react";
import { useCreateContactMutation } from "../../redux/slices/contacts";

const initState = { name: "", number: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initState);
  const [createContact] = useCreateContactMutation();
  const inputHandler = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    createContact(form);
    setForm(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={form.name}
        onChange={inputHandler}
      />

      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        value={form.number}
        onChange={inputHandler}
      />
      <br></br>
      <button type="submit">Add contact</button>
    </form>
  );
}
