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
      <div className="absolute right-0 w-2/5 mt-2 -z-dev">
        <NavBottom />
      </div>
    </nav>
  )
}
