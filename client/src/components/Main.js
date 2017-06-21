import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import {Home,Details,Page404} from './index.js'

class Main extends Component{

  constructor(props){
    super(props)
    this.state = { sources:[],articles:[],media:'',source:'', isLoading:true }
    this.submitSource = this.submitSource.bind(this)
    this.handleChangeSource = this.handleChangeSource.bind(this)
  }

  submitSource(e,{value}){
    e.preventDefault();
    if(this.state.source!==''){
        fetch(`https://newsapi.org/v1/articles?source=${this.state.source}&apiKey=2b8dc8cd0b964e7d87e5e805a531bc27`)
       .then((response) => response.json())
       .then((responseJson) => {
           this.setState({ articles:responseJson.articles })
           this.setState({ media:responseJson.source })
           this.setState({ source:'' })
       })
       .catch((error) => {
           console.log(error);
         });
    }else {
      alert('pilih source!')
    }

  }

  handleChangeSource(e,{value}){
    this.setState({ source: value })
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

  render(){

    return(
      <main>
        <Switch>

          <Route exact path='/' component={(props)=> (<Home
            submitSource = { this.submitSource }
            handleChangeSource = { this.handleChangeSource }
            sources = { this.state.sources }
            source = { this.state.source }
            isLoading = { this.state.isLoading }
            articles = {this.state.articles}
            media = {this.state.media} />) }/>

          <Route path='/details/:media/:id' component={(props) => (<Details {...props}/>)}/>

          <Route component={Page404}/>

        </Switch>
      </main>
    )
  }
}

export default Main
