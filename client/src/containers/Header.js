import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const Header = () => (
    <Menu>
      <Link to={'/'}>
        <Menu.Item name='home'>
          Home
        </Menu.Item>
      </Link>
    </Menu>
  )

export default Header
