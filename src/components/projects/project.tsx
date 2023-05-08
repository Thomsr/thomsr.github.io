import './project.css'

interface ProjectProps {
  title: string,
  text: string,
  orientation: "left" | "right",
}

export default function Project(
  {
    title,
    text,
    orientation,
  } : ProjectProps
){
  return (
    <div id={orientation}>
      <p id="title">{title}</p>
      <hr></hr>
      <p id="text">{text}</p>
    </div>
  )
}