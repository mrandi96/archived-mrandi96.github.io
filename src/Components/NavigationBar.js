import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from '../CSS/NavigationBar.module.css';
import colors from '../CSS/Colors.module.css';

export function NavigationBar() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu([
      { id: 'home1', name: 'Home', path: '/' },
      { id: 'category2', name: 'Category', path: '/category' },
      { id: 'development3', name: 'Development', path: '/development' },
      { id: 'about4', name: 'About', path: '/about' }
    ])
  }, []);

  return !!menu.length && <nav className={`${classes.container} ${colors.surface}`}>
    {menu.map((item) => <Link className={`${classes.link}`} to={item.path} key={item.id}>{item.name}</Link>)}
  </nav>
}
