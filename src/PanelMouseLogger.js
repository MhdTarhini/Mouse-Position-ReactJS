import MousePosition from "./MousePosition";

const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

export default PanelMouseLogger;
