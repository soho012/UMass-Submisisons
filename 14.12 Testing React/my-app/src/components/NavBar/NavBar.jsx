import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'

export default function NavBar() {
return (
<header className={styles.nav}>
<div className="container">
<div className={styles.row}>
<NavLink to="/" className={styles.brand}>Space Travel</NavLink>
<nav className={styles.links}>
<NavLink to="/spacecrafts">Spacecrafts</NavLink>
<NavLink to="/planets">Planets</NavLink>
</nav>
</div>
</div>
</header>
)
}