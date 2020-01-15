import React from 'react';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() { 
    return (
      <h1>Hello Users</h1>
      // this could render the pages using react Router
    )
  }

}

export default User;

// this Component could be used to import user data from DB an pass everthing down as props
// not sure if 