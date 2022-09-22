import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import PersonCard from "./PersonCard";

function People() {
  const [people, setPeople] = useState([]);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(true);
  const [previous, setPrevious] = useState(false);
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
      setPeople(res.data.results);
      setNext(res.data.next ? true : false);
      setPrevious(res.data.previous ? true : false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        {people.map((person, i) => (
          <PersonCard key={person.name} {...person} id={i + 1} />
        ))}
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={() => setPage(page - 1)}
          disabled={!previous}
        >
          Previous
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => setPage(page + 1)}
          disabled={!next}
        >
          Next
        </Button>
      </div>
    </>
  );
}
export default People;
