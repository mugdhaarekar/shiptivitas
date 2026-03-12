import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    const statusClasses = {
      backlog: 'Card-grey',
      inProgress: 'Card-blue',
      complete: 'Card-green',
    };
    const colorClass = statusClasses[this.props.status] || 'Card-grey';
    return (
      <div className={`Card ${colorClass}`} >
        <div className="Card-title">{this.props.name}</div>
        <div className="Card-description">{this.props.description}</div>
      </div>
    );
  }
}