import React from 'react'

const HelloWorld = () => {
    const formatName = () => {
        return user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'John',
        lastName: 'Doe',
    }
    return (
        <div className="hello-world">
            Hello, {formatName(user)} + '1234'
        </div>
    )
}

export default HelloWorld