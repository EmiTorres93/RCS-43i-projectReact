import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas, borrarTarea }) => {
  return (
    <>
      {propslistaTareas.map((tarea, index) => (
        <ItemTarea
          key={index}
          nombreTarea={tarea}
          borrarTarea={borrarTarea}
        ></ItemTarea>
      ))}
    </>
  );
};

export default ListaTareas;
