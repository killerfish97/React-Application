import React from 'react'

const Sidebar = () => {
  return (
    <div>
      <div className="top">
        <div className="menu">
            <span className="menu-title">

            </span>
        </div>
        <div className="search">
            <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className="center">
        <ul>
            <p>Task</p>
            <li>
                <span>Upcomming</span>
            </li>
            <li>
                <span>Today</span>
            </li>
            <li>
                <span>Calender</span>
            </li>
            <li>
                <span>Sticky Wall</span>
            </li>
        </ul>
        <p className="title">
            Category
        </p>
        <ul>
            <li>
                <div className="color"></div>
                <span>Personal</span>
            </li>
            <li>
                <div className="color"></div>
                <span>Walk</span>
            </li>
            <li>
                <div className="color"></div>
                <span>Others</span>
            </li>
        </ul>

        <p className="title">Tags</p>
        <div className="tags">
            <div className="tag add-tag">
                <input type="text"  placeholder='New Tag name'/>
            </div>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  )
}

export default Sidebar
