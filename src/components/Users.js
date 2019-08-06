import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  displayUsers(){
    return this.props.users.map(user => {
      return <li>{user.username}</li>
    })
  }

  render() {
    return (
      <div>

        Total Users: {this.props.users.length}
        <ul>
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {users: state.users}
}

export default connect(mapStateToProps)(Users)
