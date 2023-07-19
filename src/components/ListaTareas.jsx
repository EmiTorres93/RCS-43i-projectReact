import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas }) => {
  return (
    <>
      {propslistaTareas.map((tarea, index) => (
        <ItemTarea key={index}></ItemTarea>
      ))}
    </>
  );
};

export default ListaTareas;
