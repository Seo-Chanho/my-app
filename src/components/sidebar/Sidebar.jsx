import React from "react";
import './sidebar.css'

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="SidebarTitle">Menu1</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            one
                        </li>
                        <li className="sidebarListItem">
                            two
                        </li>
                        <li className="sidebarListItem">
                            three
                        </li>
                    </ul>
                    <h3 className="SidebarTitle">Menu2</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            one
                        </li>
                        <li className="sidebarListItem">
                            two
                        </li>
                        <li className="sidebarListItem">
                            three
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}