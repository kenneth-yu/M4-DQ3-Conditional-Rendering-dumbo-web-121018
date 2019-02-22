import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'
import {userData} from '../data'
import {photo} from '../data'
import {cocktails} from '../data'


class MainBox extends React.Component {
  state = {
    userData: userData,
    photo: photo,
    cocktails: cocktails,
    currentTab: "placeholder"
  }

  clickHandler = (event) => {
    let detailsToDisplay
    console.log(event.target)
    if (event.target.id === "photo"){
      detailsToDisplay = (
        <div>{this.state.photo.title}
          <img alt="" src={this.state.photo.url}/>
        </div>
      )
      this.setState({
        currentTab: detailsToDisplay
      })
    }
    else if (event.target.id ==="cocktail"){
      detailsToDisplay = this.state.cocktails.drinks.map(oneDrink => {
        return (<div key={oneDrink.name}>
          <ul>
          <li>{oneDrink.name}</li>
          <li>{oneDrink.description}</li>
          </ul>
        </div>)
      })
      console.log(detailsToDisplay)
      this.setState({
        currentTab: detailsToDisplay
      })
    }
    else if (event.target.id === "profile"){
      detailsToDisplay = (
        <div>
        <h2>{this.state.userData.name}</h2>
        <h2>{this.state.userData.description}</h2>
        <h2>{this.state.userData.catchphrase}</h2>
        <h2>{this.state.userData.age}</h2>
        </div>
      )
      this.setState({
        currentTab: detailsToDisplay
      })

    }
    else{
      console.log("i am a pokemon")
    }
  }




  render() {
    // console.log(this.state.userData)
    // console.log(this.state.photo)
    // console.log(this.state.cocktails.drinks)

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    return (
      <div>
        <MenuBar userData={this.state.userData} clickHandler={this.clickHandler}/>
        {this.state.currentTab}
      </div>
    )
  }

}

export default MainBox
