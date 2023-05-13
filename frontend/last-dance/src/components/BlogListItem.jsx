import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const BlogItem = () => {
  const handleClick = () => {
    alert("You clicked on a button");
  };

  return (
    <Card>
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button onClick={handleClick} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};
