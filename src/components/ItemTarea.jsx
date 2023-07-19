import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = (props) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          {props.nombreTarea}
          <Button variant="danger">Eliminar</Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default ItemTarea;
