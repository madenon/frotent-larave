import axios from "axios";
import { useEffect, useState } from "react"
import {  toast } from 'react-toastify';
import { Link, useParams } from "react-router-dom"
function Home(){
    const [carnets, setCarnet] = useState([])

    const getData = async()=>{
        const response = await fetch("http://localhost:8000/api/carnet").then((response)=>response.json());
    setCarnet(response.data)
    } 


    const removeProduct = async(id)=>{
        try {
          const response = await axios.delete(`http://localhost:8000/api/carnet/delete/${id}`)
           if (response.data) {
            toast.success(response.data)
            await getData()
            
           }else{
            toast.error(response.data)
           }
        } catch (error) {
          console.log(error)
    
        }
    
    }
    useEffect(()=>{

        getData()
    },[carnets])

    
    return(
        <div className="container">
  <div className="row">
  <div className="col-md-12">
    <div className="card">
<div className="card-header">
  <h2>La liste total de carnet</h2>
  <Link to="/create"  className="btn btn-primary float-end">Ajouter une note</Link>
</div>
<div className="card-body">
<div className="table table-striped">
    <thead>
<tr>
    <th>ID</th>
    <th>Nom</th>
    <th>Email</th>
    <th>Contact</th>
    <th>Modifier</th>
    <th>Supprimer</th>
</tr>
    </thead>
    
    <tbody>
        {carnets.map((item,index)=>{
            return(
                <tr key={index}>
                    <td>{item?.id}</td>
                    <td>{item.nom}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>

                     <td className="modifier">
                        <Link to={`/edit/${item?.id}`} className="">Modifier</Link>
                        
                     </td>

                    
                    <td className="pointer-cursor  btn btn-danger btn-b" onClick={()=>removeProduct(item?.id)}>X</td>
                    
                </tr>
            )
        })}
    </tbody>

</div>

</div>
    </div>

  </div>
  </div>
        </div>
    )
}

export default Home