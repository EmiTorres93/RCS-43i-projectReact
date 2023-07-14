import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          Ejemplo de tarea
          <Button variant="danger">Eliminar</Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default ItemTarea;
