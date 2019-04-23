import React, { Component } from 'react';
import { connect } from 'react-redux'

class ConnectedUsers extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user, index) => <li key={index}>{user.username} || {user.hometown}</li>)}
        </ul>
        User count: {this.props.userCount}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {users: state.users,
          userCount: state.users.length}
}

export default connect(mapStateToProps)(ConnectedUsers)
