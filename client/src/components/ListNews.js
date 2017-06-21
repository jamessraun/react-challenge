import React, { Component } from 'react'
import { Card, Image,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Listarticle extends Component{

  constructor(props){
    super(props)
    this.state=this.props
  }

  render(){
    const {articles} = this.state
    const {media} = this.state

      return (
        <div style={{marginTop:100,marginRight:50,marginLeft:50}}>
            <Card.Group itemsPerRow={4}>
              {articles.map((article,i) =>
              <Card key={i} link>
                <Image src={ article.urlToImage } />
                <Link to={{pathname:`/details/${media}/${i}`}} >
                  <Card.Content>
                    <Card.Header>{ article.title }</Card.Header>
                    <Card.Meta>{article.author}</Card.Meta>
                    <Card.Description>{ article.description }</Card.Description>
                  </Card.Content>
                </Link>
                <Card.Content extra>
                  <a href={article.url} target={'_blank'} >
                    <Icon name='linkify' />
                    { article.url }
                  </a>
                </Card.Content>
              </Card>
              )}
            </Card.Group>
        </div>
      )
  }
}

export default Listarticle
