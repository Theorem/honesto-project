import { NavLink } from 'react-router-dom'
import styles from './header.module.css'

const Header = () => (
  <div className={styles.header}>
    <h1>Honesto</h1>
    <NavLink exact to="/give-feedback" activeClassName={styles.active}>
      Give Feedback
    </NavLink>
    <NavLink exact to="/review-feedback" activeClassName={styles.active}>
      Review Feedback
    </NavLink>
    <span className={styles.spacer} />
    <NavLink exact to="/">
      LOGOUT
    </NavLink>
  </div>
)

export default Header
