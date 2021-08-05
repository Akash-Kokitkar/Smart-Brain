import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';

import Navbar from './component/navbar/navbar';
import Logo from './component/logo/logo'
import Imageform from './component/imagelinkform/Imageform'
import Rank from './component/rank/rank'
import Frameimg from './component/frameimg/frameimg'
import Sign from './component/sign/Sign'
import Register from './component/registeration/Register';


const params = {

  particles: {

    number: {
      values: 30,
      density: true,
      value_area: 800
    }
  }


}

const initialstate= {
  input: '',
  imageurl: '',
  box: {},
  route: '',
  isSigned: false,
  user: {
    id: '',
    name: '',
    email: '',
    password: '',
    enteries: '',
    joined: ''
  }
}
  

class App extends Component {
  constructor() {
    super();
    this.state =(initialstate);
  }

  onchanges = (event) => {
    this.setState({ input: event.target.value })

  }

  onload = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        enteries: data.enteries,
        joined: data.joined
      }

    })
  }

  onroutechange = (route) => {
    if (route === 'sign') {
      this.setState({ isSigned: false })
    } else if (route === 'home') {
      this.setState({ isSigned: true })
    }
    else if(route==='signout'){
      this.setState(initialstate)

    }
    this.setState({route:route})
   
  }



  calculateFace = (data) => {
    const clariface = data.outputs[0].data.regions[0].region_info.bounding_box;

    const image = document.getElementById('inputimage')

    const width = Number(image.width);
    const height = Number(image.height);

    return {

      leftcol: clariface.left_col * width,
      toprow: clariface.top_row * height,
      rightcol: width - (clariface.right_col * width),
      bottomrow: height - (clariface.bottom_row * height),

    }

  }
  displaybox = (box) => {
    this.setState({ box: box })
    console.log(box)
  }

  onSubmit = () => {
    this.setState({ imageurl: this.state.input })

    console.log(this.state.user.id)
    fetch('https://smartimg.herokuapp.com/imageurl',
    {
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          input: this.state.input
        }
      )
    }
  ).then(response=>response.json())
    
      .then(response => {

        if (response) {
          fetch('https://smartimg.herokuapp.com/image/',
            {
              method: 'put',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(
                {
                  id: this.state.user.id
                }
              )
            }
          ).then(response => response.json())
            .then(count => {this.setState(Object.assign(this.state.user, { enteries: count }))})

        }

        this.displaybox(this.calculateFace(response))

      })
      .catch(err => console.log(err))





  }
  render() {
    return (
      <>
        <Particles className='particle'
          params={params}
        />
        <Navbar onroutechange={this.onroutechange} isSigned={this.state.isSigned} />
        {

          this.state.route === 'home' ?
            <div>
              <Logo />
              <Rank enteries={this.state.user.enteries} />
              <Imageform onchanges={this.onchanges} onsubmit={this.onSubmit} />
              <Frameimg box={this.state.box} input={this.state.input} />
            </div>


            : (this.state.route === 'register') ? <Register onload={this.onload} onroutechange={this.onroutechange} /> :
              <Sign onload={this.onload} onroutechange={this.onroutechange} />

        }






      </>
    )
  }
}

export default App
