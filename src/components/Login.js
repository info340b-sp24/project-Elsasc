	
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Users from '../data/Users.json';	

export default function SignInPage(props) {
  const currentUser = props.currentUser;
  const loginFunction = props.loginCallback;

  const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = Users.filter((userObj) => userObj.userId === whichUser)[0] || DEFAULT_USERS[0] //null user if not found

    loginFunction(selectedUserObj)
  }
   
      const userButtons = DEFAULT_USERS.map((userObj) => {
        if(userObj.userId === currentUser.userId){
          return null; //don't include!
        }
        return (
          <Dropdown.Item className="user-icon" key={userObj.userName} name={userObj.userId} onClick={handleClick}>
            {userObj.userName}
          </Dropdown.Item>
        )
      })
    return (
      <div className="card bg-light">
        <div className="container card-body">
          <p className="lead">Pick a user:</p>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="light">
                {currentUser.userName}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {userButtons}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }