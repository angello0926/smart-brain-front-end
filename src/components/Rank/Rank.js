import React from 'react';

class Rank extends React.Component{
  constructor(){
    super();
    this.state = {
      emoji: ''
    }
  }

  componentDidMount(){
    this.generateEmoji(this.props.entries)
  }

  componentWillUpdate(prevProps, prevState){
    if(prevProps.entries === this.props.entries && prevProps.name === this.props.name){
      return null
    }else{
      this.generateEmoji(this.props.entries);
    }
  }

  generateEmoji(entries){
    fetch(`https://r30zcf7ek9.execute-api.us-east-1.amazonaws.com/prod/rank?rank=${entries}`)
        .then(res => res.json())
        .then(data=> {
          console.log(data)
          this.setState({emoji: data.input})
          console.log(this.state)
        })
        .catch( err => console.log(err))
  }
  
  
  render(){
    return (
      <div>
        <div className='white f3'>
          {`${this.props.name}, your current entry count is...`}
        </div>
        <div className='white f1'>
          {this.props.entries}
        </div>
        <div className='white f1'>
          <h1>{this.state.emoji}</h1>
        </div>
      </div>
    );
  }
} 

export default Rank;