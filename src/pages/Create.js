import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Create() {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
 
  const onSubmitHanlder = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nom", nom);
      formData.append("email", email);
      formData.append("contact", contact);
    

      const response = await axios.post(
        `http://localhost:8000/api/carnet/create`,
        formData
      );
      console.log(response.data)


      if (response.data) {
        toast.success(response.data);
        setNom("");
        setEmail("");
        setContact("");
        
      } else {
        toast.error(response.data);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={onSubmitHanlder}>
        <div className="row">
          <div className="col">
            <label htmlFor="">Nom</label>
            <input
              onChange={(e) => setNom(e.target.value)}
              value={nom}
              type="text"
              className="form-control"
              placeholder="Nom"
            />
          </div>
          <div className="col">
            <label htmlFor="">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="col">
          <label htmlFor="">Contact</label>
          <input
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            type="number"
            className="form-control"
            placeholder="Contact"
          />
        </div>

       

        <button type="submit" className="btn btn-primary mt-2">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Create;
