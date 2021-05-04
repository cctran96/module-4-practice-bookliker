import React from "react";
import { Menu } from "semantic-ui-react"
import BookContainer from "./BookContainer"
import Title from "./Title"

class BookMenu extends React.Component {
    render(){
        const titles = this.props.books.map(book => <Title key={book.id} book={book} handleClick={this.props.handleClick}/>)
        return(
            <div>
                <Menu inverted>
                <Menu.Item header>Bookliker</Menu.Item>
                </Menu>
                <main>
                    <Menu vertical inverted>
                    {titles}
                    </Menu>
                    <BookContainer bookInfo={this.props.bookInfo} handleLike={this.props.handleLike}/>
                </main>
            </div>
        )
    }
}

export default BookMenu