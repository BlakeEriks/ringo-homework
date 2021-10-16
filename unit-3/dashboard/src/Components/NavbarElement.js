import React from "react"

const NavbarElement = props => {
    return (
        <div 
            className={'navbar-element ' + (props.selected === props.title ? 'selected' : '')} 
            onClick={() => props.setSelected(props.title)}>{props.title}
        </div>
    )
}

export default NavbarElement