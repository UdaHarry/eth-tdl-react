import React, {Component} from 'react';
import Web3 from 'web3';
import './App.css';


class App extends Component{
  componentWillMount(){
    this.loadBlochainData();
  }

  async loadBlochainData(){
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const network = await web3.eth.net.getNetworkType();
    
    // fetch accoutn
    const account = await web3.eth.getAccounts();
    this.setState({account: account.toString()});
  }
  
  constructor(props){
    super(props)
    this.state = {account: ''}
  }
  
  render(){
    return(
      <div className="container">
        <h1>Hello, World</h1>
        <p>Your Accounts : {this.state.account}</p>
      </div>
    );
  }
}

export default App;