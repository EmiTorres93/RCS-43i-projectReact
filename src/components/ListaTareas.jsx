import ItemTarea from "./ItemTarea";

const ListaTareas = ({ propslistaTareas }) => {
  return (
    <>
      {propslistaTareas.map(() => (
        <ItemTarea></ItemTarea>
      ))}
    </>
  );
};

export default ListaTareas;
