import React, { Component } from 'react'
import CatList from './CatList'
import CatDetails from './CatDetails'
import { Switch, Route } from 'react-router-dom'
import uuid from 'uuid/v4'
import cutecat1 from './images/cutecat1.jpg'
import cutecat2 from './images/cutecat2.jpg'
import cutecat3 from './images/cutecat3.jpg'

export default class App extends Component {

  static defaultProps = {
    cats: [
      {
        id: uuid(),
        name: 'Bony',
        age: 4,
        src: cutecat1,
        facts: [
          'Bony loves eating popeye',
          'Bony is a terrible guard dog',
          'Bony wants to cuddle with you!'
        ]
      },
      {
        id: uuid(),
        name: 'Pesek',
        age: 5,
        src: cutecat2,
        facts: [
          'Pesek has sooo much energy!',
          'Pesek is highly intelligent',
          'Pesek loves people more than dogs!'
        ]
      },
      {
        id: uuid(),
        name: 'Bimo',
        age: 6,
        src: cutecat3,
        facts: [
          'Bimo is strongest cat',
          'Bimo doest not like walks or exercise',
          'Bimo loves eating food'
        ]
      }
    ]
  }

  render() {
    const getCat = props => {
      let name = props.match.params.name
      let currentCat = this.props.cats.find(
        cat => cat.name.toLowerCase() === name.toLowerCase()
      )
      return <CatDetails {...props} cat={currentCat} />
    }
    return (
      <Switch>
        <Route exact path='/cats' render={() => <CatList cats={this.props.cats} />} />
        <Route exact path='/cats/:name' render={getCat} />
      </Switch>
    )
  }
}