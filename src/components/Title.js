import React from 'react'
import { Menu } from 'semantic-ui-react'

const Title = props => {
    return(
        <Menu.Item as={"a"} onClick={e => props.handleClick(e)} key={props.book.id} id={props.book.id}>{props.book.title}</Menu.Item>
    )
}

export default Title

