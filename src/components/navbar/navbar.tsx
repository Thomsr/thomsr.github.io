import NavElement from './nav-element';
import './navbar.css'

const navElements = [
  {
    name: 'home',
    link: './' 
  },
  {
    name: 'projects',
    link: './'
  },
  {
    name: 'github',
    link: './'
  },
  {
    name: 'about',
    link: './'
  },
]

export default function NavBar(){
  return (
    <div className='navbar'>
      <div className='navElements'>
        {navElements.map(element => 
          <NavElement name={element.name} link={element.link}/> 
        )}
      </div>
    </div>
  )
}