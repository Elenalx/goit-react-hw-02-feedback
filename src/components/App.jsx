import React, {Component} from 'react';
import FeedbackOptin from './FeedbackOption/FeedbackOption';
import Section from './Section/Section';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };


  countPositiveFeedbackPercentage() {
    
  }

}
//   countPositiveFeedbackPercentage() {
  
// }
