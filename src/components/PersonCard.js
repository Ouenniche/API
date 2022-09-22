import { Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function PersonCard({ name, height, mass, id }) {
  return (
    <Link to={`/details/${id}`}>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>{name}</ListGroup.Item>
          <ListGroup.Item>{height}</ListGroup.Item>
          <ListGroup.Item>{mass}</ListGroup.Item>
        </ListGroup>
      </Card>
    </Link>
  );
}
export default PersonCard;
