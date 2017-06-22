import React from 'react'
import { connect } from 'react-redux'
import { Card, Image,Icon,Loader } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const ListArticle = (props) => {

    const {articles} = props
    const {source} = props

      return(
        <div style={{marginTop:50,marginRight:50,marginLeft:50}}>
          <Card.Group itemsPerRow={4}>
            {articles.map((article,i) =>
            <Card key={i} link>
              <Image src={ article.urlToImage } />
              <Link to={{pathname:`/details/${source}/${i}`}} >
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
        </div>)
}


const mapStateToProps = ({articlesReducer}) => {

  return {
    articles:articlesReducer.articles,
    source:articlesReducer.source,
  }
}

export default connect(mapStateToProps)(ListArticle)
