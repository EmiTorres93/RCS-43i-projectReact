import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  let tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

  // esta versión de useEffect se ejecute en montaje y actualización
  useEffect(() => {
    console.log("esto fue ejecutado con useEffect");
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  }, [listaTareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array listaTareas
    setListaTareas([...listaTareas, tarea]);
    //limpiar el value del input
    setTarea("");
  };

  //crear función borrar tarea.
  const borrarTarea = (tareaBorrar) => {
    let listaTareasFiltrada = listaTareas.filter(
      (itemTarea) => itemTarea !== tareaBorrar
    );
    setListaTareas(listaTareasFiltrada);
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
      <ListaTareas
        propslistaTareas={listaTareas}
        propsborrarTarea={borrarTarea}
      ></ListaTareas>
    </>
  );
};

export default FormularioTarea;
