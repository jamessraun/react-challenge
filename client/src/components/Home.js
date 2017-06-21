import React, { Component } from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import { FormInput, ListNews } from './index'


class Home extends Component {

  constructor(props){
    super(props)
    this.state = this.props
  }


  render() {
    const {submitSource} = this.state,
          {handleChangeSource} = this.state,
          {isLoading} = this.state

      return (
        (isLoading) ? (
        <div>
          <Segment>
            <Dimmer active inverted>
              <Loader size='massive'>Loading</Loader>
            </Dimmer>
            <Image src='https://semantic-ui.com/images/wireframe/paragraph.png' />
          </Segment>
        </div>
      ) : (
        <div>
          <FormInput sources={this.state.sources} submitSource={submitSource} handleChangeSource={handleChangeSource} source={this.state.source} />
          <hr />
          <ListNews articles={this.state.articles} media={this.state.media}/>
        </div>
      )
    )
  }
}

export default Home;
