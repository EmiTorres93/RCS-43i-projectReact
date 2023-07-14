import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./components/Titulos";
import FormularioTarea from "./components/FormularioTarea";
import ListaTareas from "./components/ListaTareas";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <Titulos></Titulos>
        <FormularioTarea></FormularioTarea>
        <ListaTareas></ListaTareas>
      </Container>
      <footer className="text-center footer pt-3 py-2">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
