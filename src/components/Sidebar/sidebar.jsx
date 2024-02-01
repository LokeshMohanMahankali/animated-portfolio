import React from 'react'
import './sidebar.scss'
import Links from './links'
import Togglebutton from './togglebutton/togglebutton'

const sidebar = () => {
  return (
    <div className='sidebar'>
        <Togglebutton/>
            <div>
                <Links/>
            </div>
    </div>
  )
}

export default sidebar;



