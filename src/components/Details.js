import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const [person, setPerson] = useState(null);
  const { id } = useParams();
  const fetchDetails = async () => {
    try {
      const res = await axios.get(`https://swapi.dev/api/people/${id}`);
      setPerson(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [id]);

  return <div>{person?.name}</div>;
}
export default Details;
