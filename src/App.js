import React, { Component } from "react"
import BookMenu from "./components/BookMenu"

const url = 'http://localhost:3000/books/'

class App extends Component {
  state={
    books: [],
    bookInfo: []
  }

  componentDidMount(){
    fetch(url).then(r => r.json()).then(books => this.setState({books: books, bookInfo: books[0]}))
  }

  handleClick = e => {
    fetch(url + e.target.id).then(r => r.json()).then(bookInfo => this.setState({bookInfo}))
  }

  handleLike = id => {
    const bookInfo = this.state.bookInfo
    const users = bookInfo.users.map(user => user.username)
    const config={
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
      , body: JSON.stringify({users: users.includes("pouros") ? [...bookInfo.users].filter(user => user.username !== "pouros") : [...bookInfo.users, {id: 1, username: "pouros"}]})
    }
    fetch(url + id, config).then(r => r.json()).then(book => this.setState({bookInfo: book}))
  }

  render(){
    return (
      <BookMenu books={this.state.books} bookInfo={this.state.bookInfo} handleClick={this.handleClick} handleLike={this.handleLike}/>
    )
  }
}

export default App
