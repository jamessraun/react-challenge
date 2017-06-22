import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Dimmer,Loader } from 'semantic-ui-react'

import { FormInput, Articles } from '../components'
import { loadAction } from '../actions/loadAction'

class Home extends Component {

  constructor(props){
    super(props)
    this.state ={ source:'',isLoading:true }
    this.handleChangeSource = this.handleChangeSource.bind(this)
  }

  handleChangeSource(e,{value}){
    console.log(value);
    this.setState({ source:value })
  }

  componentDidMount(){
    this.props.loadActions()
  }

  render(){
    const { sources } = this.props,
          { source,isLoading } = this.state,
          { handleChangeSource } = this

    return (<div>
        <FormInput
        sources={ sources }
        source={ source }
        handleChangeSource = { handleChangeSource }/>
        <hr />
        {(isLoading)}
        <Articles/>
      </div>)
  }

}

const mapStateToProps = ({sourcesReducer}) => {

  return {
    sources: sourcesReducer.sources
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadActions:() => dispatch(loadAction())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
