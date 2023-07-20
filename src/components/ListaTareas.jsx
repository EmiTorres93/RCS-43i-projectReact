import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas, propsborrarTarea }) => {
  return (
    <>
      {propslistaTareas.map((tarea, index) => (
        <ItemTarea
          key={index}
          nombreTarea={tarea}
          propsborrarTarea={propsborrarTarea}
        ></ItemTarea>
      ))}
    </>
  );
};

export default ListaTareas;
