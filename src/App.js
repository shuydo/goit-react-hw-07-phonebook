import ContactForm from "./Comps/ContactForm/ContactForm";
import ContactList from "./Comps/ContactList/ContactList";
// import Filter from "./Comps/Filter/Filter";

// import { Toaster } from "react-hot-toaster";
// import { Switch, Route } from "react-router-dom";
// import {Home} from "./pages/Home";

export default function App() {
  return (
    <>
        <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter /> */}
      <ContactList />

      {/* <Switch> */}
      {/* <Route path="/" exact> */}
                                {/* <Home />  */}
      {/* </Route> */}
      {/* <Route path='/todos' exact>
          <TodosPage />
        </Route> */}
      {/* // </Switch> */}
      {/* <Toaster position="top-right" /> */}
    </>
  );
}
