import React from 'react'
import { connect } from 'react-redux'
import { Form, Loader } from 'semantic-ui-react'


import {submitAction} from '../actions/submitAction'

const FormInput = (props) =>{

  const { handleChangeSource,source } = props,
  sources = props.sources.map((source,i) => ({key:source.id, text:source.name, value:source.id }))

  return(
      <div style={{width:'100%',marginBottom:50,marginLeft:400,marginTop:50}}>

        <Form onSubmit={(e) => props.submitAction(e,source)}>
          <Form.Group>
              <Form.Select onChange={ handleChangeSource } value={ source } label='Sources' options={ sources } placeholder='Select news from...' style={{width:500}}  />
          </Form.Group>
          <Form.Button>Search</Form.Button>
        </Form>

      </div>
  )

}


const mapDispatchToProps = (dispatch) => {
  return {
    submitAction:(e,source) => dispatch(submitAction(e,source))
  }
}


export  default connect(null,mapDispatchToProps)(FormInput);
