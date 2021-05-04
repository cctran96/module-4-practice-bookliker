import React from 'react'
import {
    Container,
    Header,
    Button,
    List,
    Image
  } from "semantic-ui-react"

  const BookContainer = props => {
        const book = props.bookInfo
        return(
            <Container text>
                <Header>{book.title}</Header>
                <Image
                    src={book.img_url}
                    size="small"
                />
                <p>{book.description}</p>
                <Button onClick={() => props.handleLike(book.id)}
                    color="red"
                    content= {book.users ? book.users.map(user => user.username).includes("pouros") ? "Unlike" : "Like" : null}
                    icon="heart"
                    label={{
                    basic: true,
                    color: "red",
                    pointing: "left",
                    content: book.users ? book.users.length : 0
                    }}
                />
                <Header>Liked by</Header>
                <List>
                {book.users ? book.users.map(user => <List.Item key={user.id} icon="user" content={user.username}/>) : null}
                </List>
            </Container>
        )
  }

export default BookContainer