import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array listaTareas
    setListaTareas([...listaTareas, tarea]);
    //limpiar el value del input
    setTarea(" ");
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-4 d-flex justify-content-between"
          controlId="formBasicEmail"
        >
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            value={tarea}
            onChange={(e) => {
              setTarea(e.target.value);
            }}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas propslistaTareas={listaTareas}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
