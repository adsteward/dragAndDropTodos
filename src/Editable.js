import React from 'react';

const Editable = ({
  text,
  type,
  placeholder,
  children,
  childRef,
  ...props
}) => {
  const [isEditing, setEditing] = React.useState(false);

  const handleKeyDown = (event, type) => {
  };

  React.useEffect(() => {
    if (childRef && childRef.current && isEditing === true){
      childRef.current.focus();
    }
  }, [isEditing, childRef]);

  return(
    <section {...props}>
    {isEditing ? (
      <div
        onBlur={() => setEditing(false)}
        onKeyDown={e => handleKeyDown(e, type)}
        >
        {children}
        </div>
    ) : (
      <div
        onClick={() => setEditing(true)}
        >
        <span>
        {text || placeholder || "Editable content"}
        </span>
      </div>
    )}
    </section>
  )
}

export default Editable;
