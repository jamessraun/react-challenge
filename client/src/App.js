import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { FormInput } from './components/index'


class App extends Component {

  constructor(){
    super()
    this.state = { sources:[], isLoading:true }
  }

  componentDidMount(){

     fetch('https://newsapi.org/v1/sources')
    .then((response) => response.json())
    .then((responseJson) => {

        let sources = responseJson.sources.map(source =>{
          return {key:source.id,text:source.name,value:source.id}
        })

        this.setState({
          sources:sources,
          isLoading: false
        })
    })
    .catch((error) => {

        this.setState({
          isLoading: false
        })
      });
  }

  render() {

    if(this.state.isLoading){
      return (
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader size='large'>Loading</Loader>
            </Dimmer>

            <Image src='https://semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </div>
      );
    }else {
      return (
        <div>
          <FormInput sources={this.state.sources} />
        </div>
      )
    }
  }
}

export default App;
