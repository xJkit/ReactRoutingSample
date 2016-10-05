import React from 'react';

const Featured = (props) => {
  let topic = props.params.topic
  let teacher = props.params.teacher
  return (
    <div className="main-content">
      <h2>Featured: {topic}</h2>
      <p>Introducing <strong>{teacher}</strong>, a teacher who loves teaching courses about <strong>{topic}</strong>!</p>
    </div>
  );
}

export default Featured;
