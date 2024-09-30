import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [carnets, setCarnets] = useState({
    nom: "",
    email: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDfealut();
    axios
      .get(`http://localhost:8000/api/carnet`, carnets)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .put(`http://localhost:8000/api/carnet/edit/${id}`, carnets)
      .then((res) =>
        setCarnets({
          ...carnets,
          nom: res.data.nom,
          email: res.data.email,
          contact: res.data.contact,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="">Nom</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
              name="nom"
              value={carnets.nom}
              onChange={(e) => setCarnets({ ...carnets, nom: e.target.value })}
            />
          </div>
          <div className="col">
            <label htmlFor="">Email</label>
            <input
              name="email"
              value={carnets.email}
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) =>
                setCarnets({ ...carnets, email: e.target.value })
              }
            />
          </div>
        </div>

        <div className="col">
          <label htmlFor="">Contact</label>
          <input
            name="contact"
            onChange={(e) =>
              setCarnets({ ...carnets, contact: e.target.value })
            }
            value={carnets.contact}
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

export default Edit;
