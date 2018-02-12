import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const AuthButton = (props) => {
    if(props.authenticated) {
        return (
            <RaisedButton
                label="Log out"
                onTouchTap={props.auth.logout}
                secondary
            />
        )
    } else {
        return (
            <RaisedButton
                label="Log in / Signup"
                onTouchTap={props.auth.showLock}
                primary
            />
        )
    }
}

export default AuthButton
