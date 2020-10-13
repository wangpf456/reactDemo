import React from 'react'
var myStyle = {
    textAlign: 'center'
}
class Footer extends React.Component{
    render(){
        return (
            <p style={myStyle}>
                <span>{this.props.txt}</span>
            </p>
        )
    }
}

export default Footer