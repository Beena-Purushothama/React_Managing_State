import React from 'react';

const scoreCard = (props) => {
  	return(
      <p className="text">
            Your Score: {props.numCorrect}/{props.numQuestions}
        </p>
	);

}

export default scoreCard;