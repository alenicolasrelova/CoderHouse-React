
const ComponentChildren = ({ children, otherProps }) => {
  return (<> 
    <h1>{otherProps}</h1>
    {children}
  </>
  );
};

export default ComponentChildren;
