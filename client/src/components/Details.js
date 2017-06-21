import React, { Component } from 'react'
import { Card, Image,Icon,Segment,Dimmer,Loader } from 'semantic-ui-react'


class Details extends Component {

  constructor(props){
    super(props)
    this.state = {articles:[]}
  }


  componentDidMount(){
    const {media} = this.props.match.params

    fetch(`https://newsapi.org/v1/articles?source=${media}&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)
   .then((response) => response.json())
   .then((responseJson) => {
     this.setState({articles:responseJson.articles})
   })
   .catch((error) => {
       console.log(error);
     });
  }


  render(){
    const {id} = this.props.match.params
    const {articles} = this.state
    var article =null;
    article = (articles) ? (articles[id]) : null

    return (
      <div style={{marginTop:100,marginRight:50,marginLeft:50}}>
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
              <div>
              <Segment style={{width:'100%'}}>
                <Dimmer active inverted active inline='centered'>
                  <Loader size='massive'>Loading</Loader>
                </Dimmer>
                <Image src='https://semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </div>)
          }
          </Card.Group>
      </div>
    )
  }
}

export default Details
