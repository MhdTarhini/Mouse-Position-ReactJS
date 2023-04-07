import MousePosition from "./MousePosition";

const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <h3>
          ({mousePosition.x}, {mousePosition.y})
        </h3>
      )}
    />
  );
};
export default PointMouseLogger;
