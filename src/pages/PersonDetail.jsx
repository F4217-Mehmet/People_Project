import { useParams, useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';

const PersonDetail = () => {
  // const navigate = useNavigate();
  //!Linkteki parametreyi almak için useParams Hook'u kullanılabilir.
  const { id } = useParams();

  //!navigate ile gönderilen state'i yakalamak için useLocation Hook'u kullanılabilir. Bu durumda veri,state ile geldiği için yeniden fetch yapılmasına gerek kalmaz.

  // const { state: person }= useLocation();

  const [person, setPerson] = useState("");
  const navigate = useNavigate();

  

  useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => res.json())
      .then((data) => setPerson(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img className="rounded" src="{person?.avatar}" alt="" />
      <p>{person?.email}</p>
      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Home
        </button>
        <button onclick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
