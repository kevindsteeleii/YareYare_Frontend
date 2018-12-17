import { connect } from 'react-redux';
import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Signup from '../forms/signup';
import '../_css/main.css';

class Login extends React.Component {
  
  onSubmit = evt => {
  evt.preventDefault()
  console.log(evt)
  // *NOTE: This is where the submit logic would go normally, may need to make this a catch-all for modularity's sake!!
  }

  onSignup = evt => {
    let props = this.props
    evt.preventDefault()
    this.props.toggleLogin()
  }

  render () {
    return (
      <>
        <div className='entryFormDiv' >
          <form onSubmit={this.onSubmit} 
            style={{
              position: 'relative', 
              display: 'block',
              top: '40px',
              left: '100px'
            }}
          >
            <input 
              type='text' 
              placeholder='username'
              style={{
                width: '250px',
                height: '30px',
                fontSize: '1.6rem',
                borderRadius: '5px'
              }} 
            />
            <input
              type='password'
              placeholder='password'
              style={{
                marginTop: '20px',
                width: '250px',
                fontSize: '1.3rem',
                borderRadius: '5px'
              }}
            /> 
            <div
            style={{
              height: '20px',
              position: 'relative',
              left: '-100px',
              top: '16px'
            }}
            >
            <button
            className='buttonStyle'
            type='button'
            style={{
              backgroundColor:'blue',
              float: 'left',
              marginLeft: '20px'
            }}
            onClick={this.onSignup}
            >Signup?</button>
            <button 
            value='submit'
            className='buttonStyle'
            style={{
              backgroundColor: 'red',
              color: 'white',
              border: '2.5px solid white',
              float: 'right',
              marginRight: '20px'
            }}
            >
              Submit
            </button>
          </div> 
          </form>
          
        </div>
      </>
    )
  }
}



const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)