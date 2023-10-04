import { NavBottom } from './nav-bottom'
import { NavTop } from './nav-top'

/* ---------------------------------*/
/* filtro menu normal a menu original*/
/* ---------------------------------*/

export function Nav() {
  return (
    <nav>
      {/* <NavHome /> */}
      <NavTop />
      <NavBottom />
    </nav>
  )
}
