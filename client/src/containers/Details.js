import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Image,Icon,Segment,Dimmer,Loader } from 'semantic-ui-react'

import { loadAction } from '../actions/loadAction'

class Details extends Component {

  constructor(props){
    super(props)
    this.state = {articles:[]}
  }

  componentDidMount(){
    const { source } = this.props.match.params
    this.props.loadAction(source)
  }

  render(){
    const { id } = this.props.match.params,
          { articles } = this.props

    var article = (articles) ? (articles[id]) : null

    return (
      <div style={{marginTop:20,marginRight:50,marginLeft:50}}>
          <Card.Group itemsPerRow={1}>
          {
            (article) ? (
            <Card>
              <Image src={article.urlToImage} />
              <Card.Content>
                <Card.Header>{article.title}</Card.Header>
                <Card.Meta>{article.author}</Card.Meta>
                <Card.Description>{article.description}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href={article.url} target={'_blank'} >
                  <Icon name='linkify' />
                  {article.url}
                </a>
              </Card.Content>
            </Card>) : (
              <Segment style={{width:'100%'}}>
                <Dimmer active inverted>
                  <Loader size='massive'>Loading</Loader>
                </Dimmer>
                <Image src='https://semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>)
          }
          </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = ( { articlesReducer } ) => {
  return {
    articles : articlesReducer.articles,
  }
}

const mapDispatchToProps = ( dispatch ) =>{
  return {
    loadAction : ( source ) => dispatch( loadAction( source ) )
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Details)
