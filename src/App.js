import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Savedplaces from './components/Savedplaces';
import Results from './components/Results';



class App extends Component{

  constructor(props){
    super(props)
    this.state= {
      resultsdef:{}
    }
  }

  updateState(value){
    this.setState({
      resultsdef:value
    })
  }

    render(){
        return (
          <div className="container">
            <div className="row">
              <div className="col-md 8">
              <Navbar callUpdate= {this.updateState.bind(this)}/>>
              <Results resultPlaces={this.state.resultsdef}/>
              </div>
              <div className="col-md 4">
                <Savedplaces/>
              </div>
              
            </div>
              
          </div>
        )
      }
}

export default App;
