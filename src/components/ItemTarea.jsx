import { ListGroup, Button } from "react-bootstrap";

const ItemTarea = ({ nombreTarea, borrarTarea }) => {
  return (
    <>
      <ListGroup>
        <ListGroup.Item className="d-flex justify-content-between">
          {nombreTarea}
          <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>
            Eliminar
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

export default ItemTarea;
