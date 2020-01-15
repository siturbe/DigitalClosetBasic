import React from 'react';

function EventListItem(props) {
  const { name, location, date} = props;
  return (
    <a href="#!" className="collection-item">
      <div className="row">
        <div className="col s4">
          {name}
        </div>
        <div className="col s4">
          {location}
        </div>
        <div className="col s3">
          {date}
        </div>
        <div className="col s1">
          <button>X</button> {/**might have to stop proprogation */}
        </div>
      </div></a>
  )
}

export default EventListItem;