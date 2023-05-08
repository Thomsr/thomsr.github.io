interface NavElementProps {
  name: string,
  link: string
}

export default function NavElement({name, link}: NavElementProps){
  return (
    <div className="navElement">
      <a href={link}>{name}</a>
    </div>
  )
}
