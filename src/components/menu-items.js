import React from 'react'
import { Link } from 'gatsby'

export default function MenuItems() {
  return (
    <ul>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/"
          partiallyActive
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/events"
          partiallyActive
        >
          Events
        </Link>
      </li>
      <li>
        <Link
          className="menu-link"
          activeClassName="menu-link--active"
          to="/submit-event"
          partiallyActive
        >
          Submit Event
        </Link>
      </li>
    </ul>
  )
}
