import React, {Component} from 'react';

class Game extends Component{
  
constructor(props){
  super(props);
  const values = this.getRandomValues();
  this.state = {
 	 value1 : values[0],
 	 value2 : values[1],
 	 value3 : values[2],
 	 proposedAnswer : values[3]
  };
	  
}

getRandomValues(){
   const value1 = Math.floor(Math.random() * 100);
   const value2 = Math.floor(Math.random() * 100);
   const value3 = Math.floor(Math.random() * 100);
   const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
   return [value1, value2, value3, proposedAnswer];
}
  
  evaluateAnswer = (givenAnswer) => {
    const {value1,value2,value3,proposedAnswer} = this.state;
    const newRandonvalues = this.getRandomValues();
    this.setState({
     value1 : newRandonvalues[0],
 	 value2 : newRandonvalues[1],
 	 value3 : newRandonvalues[2],
 	 proposedAnswer : newRandonvalues[3]
    });
    const correctAns = (proposedAnswer === value1+value2+value3)? true:false;
    console.log("values ="+value1+","+value2+","+value3+", correctanswer"+(value1+value2+value3));
    (givenAnswer===correctAns)? this.props.setResult(true) : this.props.setResult(false);
  }
  
  render(){
    const {value1,value2,value3,proposedAnswer} = this.state
	return (
      	  <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={()=>this.evaluateAnswer(true)}>True</button>
          <button onClick={()=>this.evaluateAnswer(false)}>False</button>
        </div>);
}
}

export default Game;