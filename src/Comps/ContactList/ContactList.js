import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/slices/contacts";

export default function ContactList() {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation(); // console.log(data);

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {contacts && (
        <div>
          <h3>ContactList</h3>

          <ol>
            {/* {dBase.map(el => ( */}
            {contacts.map(contact => (
              <li key={contact.id}>
                <p>
                  <span>
                    {contact.name}: {contact.number + "  "}
                  </span>
                  {/* <button type="button" onClick={() => dispatch(delItem(el.id))}Delete</button>  */}
                  <button onClick={() => deleteContact(contact.id)}>
                    {isDeleting ? "Deleting..." : "Delete"}
                  </button>
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}
