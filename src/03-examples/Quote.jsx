import { useLayoutEffect, useRef } from "react";

// eslint-disable-next-line react/prop-types
export const Quote = ({ name, image, location }) => {
  
  const pRef = useRef()

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
  }, [name])

  return (
    <blockquote
      className="blockquote text-end"
      style={{display: 'flex'}}
    >
      <p ref={pRef} className="mb-1">{name}</p>
      <footer className="blockquote-footer">{location.name}</footer>
      <img src={image} width={100}></img>
    </blockquote>
  );
}
