import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormInput extends Component{
  constructor(props){
    super(props)
    this.state={sources:[]}
  }


  render(){
    const {sources} =this.props
    return(
        <div style={{marginBottom:100,marginLeft:400,marginTop:100}}>

          <Form onSubmit={this.props.submitSource}>
            <Form.Group>
              <Form.Select onChange={this.props.handleChangeSource} value={this.props.source} label='News' options={sources} placeholder='Select news from...' style={{width:500}}  />
            </Form.Group>
            <Form.Button>Search</Form.Button>
          </Form>

        </div>
    )
  }

}

export default FormInput;
