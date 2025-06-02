import "./Tag.css";

export default function Tag(props) {
  // Component content

  // eslint-disable-next-line react/prop-types
  const text = props.text;

  //     Return -> Ends the function
  // In ReactJS, return needs to return a JSX component to be
  // displayed on the screen

  return <div className="tag">{text}</div>;
}
