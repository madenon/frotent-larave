import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");


  const editPost = async(e) =>{
    e.preventDefault();
  
    const postData = new FormData();
    postData.set("nom", nom);
    postData.set("email", email);
    postData.set("contact", contact);
   
    try {
      const response = await axios.put(`http://localhost:8000/api/carnet/edit/${id}`,
        postData,
      );
  
      if (response.status == 200) {
        return navigate("/");
      }
    } catch (err) {
      console.log(err)
      
    }
  
  
  }
  
  useEffect(() =>{
    const getInfo = async() =>{

      try {
        const response = await axios.get(`http://localhost:8000/api/carnet`)
          setNom(response.data.nom)
          setEmail(response.data.email)
          setContact(response.data.contact)
  
        
      } catch (error) {
        console.log(error)
        
      }
    }
    getInfo()
  
  },[])

  return (
    <div className="container">
      <form onSubmit={editPost}>
        <div className="row">
          <div className="col">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.nom)}
            />
          </div>
          <div className="col">
            <label htmlFor="">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.email)}
            />
          </div>
        </div>

        <div className="col">
          <label htmlFor="">Contact</label>
          <input
            name="contact"
            onChange={(e) => setContact(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Contact"
            value={contact}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Edit;
