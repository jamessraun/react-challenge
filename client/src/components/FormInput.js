import React, { Component } from 'react'
import { Select,Card } from 'semantic-ui-react'



class FormInput extends Component{

  constructor(props){
    super(props)
    this.state={sources:[]}
  }

  render(){
    const {sources} =this.props
    return(
      <div>
        <div>
          <form>
            <Select placeholder='Select news from...' options={sources} />
          </form>
        </div>
        <div>
          <form>
            <Select placeholder='Select news from...' options={sources} />
          </form>
        </div>

      </div>
    )
  }

}

export default FormInput;
