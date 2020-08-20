import React, { Component } from 'react';
import View from './View' 
import Project from './Project'
import './App.css'

class  App extends Component{

  constructor(props){
    super(props)

    this.state = {
      activeView:'projects',
      projects:[
        {
          id:1,
          name:'Morning in Waiheke',
          description:'Painting by a local artist'
        },{
          id:2,
          name:'The thinking man',
          description:'Bronze sculpture fitted for office'
        }
      ],
    }
    
  

    
  }

  setActiveView = (view) => {
    this.setState({activeView:view})
  }


  render(){


      return (

        <div className="app">

          <View viewName="projects" activeView={this.state.activeView} className="color1">

            <div className="header">
              <i onClick={() => this.setActiveView('add-project')} className="fas fa-plus"></i>
              <i onClick={() => this.setActiveView('nav')} className="fas fa-bars"></i>
            </div>

            <div className="main">

              <h3>Projects</h3>

              {
                this.state.projects.map((project) => {

                  var projectProps = {
                    ...project,
                    setActiveView: this.setActiveView,
                  }
                  return (<Project {...projectProps} />)
                })
              }

            </div>

          </View> 

          <View viewName="add a project" activeView={this.state.activeView} className="view color2">hello
           <div className="header">
            <i onClick={() => this.setActiveView('projects')}className="fas fa-times"></i></div>
            <div className="main">
              <h3>Add a project</h3>
              <form>
                <div className="form-group">
                  <label for="name-input">Name</label>
                  <input type="text" className="form-control" name="name-input" id="name-input" placeholder="Enter project name" />
                </div>
                <div className="form-group">
                  <label for="name-input">Description</label>
                  <input type="text" className="form-control" name="description-input" id="description-input" placeholder="Enter project description" />
                </div>

                <div className="form-group">
                  <label for="name-input">Photo</label>
                  <input type="text" className="form-control" name="photo-input" id="photo-input" value="project.jpg" />
                </div>

                <div className="form-group">
                  <label for="type-input">Type</label>
                  <select className="form-control" name="type-input" id="type-input">
                    <option value="1">Painting</option>
                    <option value="2">Sculpture</option>
                    <option value="3">Digital</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">Add</button>
              </form>
            </div> 
          </View>
 
          <View viewName="update" activeView={this.state.activeView} className="view color3">
            <div className="header"><i className="fas fa-times"></i></div>
            <div className="main">
              <h2>Update Projects</h2>

            </div>
          </View>

          <View viewName="login" activeView={this.state.activeView} className="view color4">

            <div className="header">
            <i onClick={() => this.setActiveView('projects')}className="fas fa-times"></i></div>
            <div className="main">
              <h3>Login</h3>
              <form>
                <div className="form-group">
                  <label for="name-input">Username</label>
                  <input type="text" className="form-control" nam="username-input" id="username-input" placeholder="Enter username" />
                </div>

                <div className="form-group">
                  <label for="name-input">Password</label>
                  <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>
            </div>
          </View>

          <View viewName="signup" activeView={this.state.activeView} className="view color5">

            <div className="header"><i onClick={() => this.setActiveView('projects')}className="fas fa-times"></i></div>
            <div className="main">
              <h3>Signup</h3>
              <form>
                <div className="form-group">
                  <label for="name-input">Username</label>
                  <input type="text" className="form-control" name="username-input" id="username-input" placeholder="Enter username" />
                </div>

                <div className="form-group">
                  <label for="name-input">Password</label>
                  <input type="password" className="form-control" name="password-input" id="password-input" placeholder="Enter password" />
                </div>

                <div className="form-group">
                  <label for="name-input">Email</label>
                  <input type="email" className="form-control" name="email-input" id="email-input" placeholder="Enter email" />
                </div>

                <div className="form-group">
                  <label for="name-input">Intro</label>
                  <input type="text" className="form-control" name="intro-input" id="intro-input" placeholder="Enter introduction" />
                </div>

                <button type="submit" className="btn btn-primary">Join</button>
              </form>
            </div>
          </View>

          <View viewName="nav" activeView={this.state.activeView} className="view color0">

            <div className="header"><i onClick={() => this.setActiveView('projects')}className="fas fa-times"></i></div>
            <div className="main">
              <ul className="menu">
                <li><a onClick={() => this.setActiveView('projects')}className="color1" href="">Projects</a></li>
                <li><a onClick={() => this.setActiveView('add-project')}className="color2" href="">Add a project</a></li>
                <li><a className="color4" href="">Login</a></li>
                <li><a className="color5" href="">Signup</a></li>
              </ul>
            </div>
          </View>   

      </div>


    )
  }

  
}

export default App;
