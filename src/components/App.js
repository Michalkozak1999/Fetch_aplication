
import React from 'react';
import List from './List';
import ButtonFetch from './ButttonFetch';
import './style/App.css';
import Leftwebi from './Leftwebi';
import Debt from './Debt';
import Heder from './Heder';
import { Component } from 'react';
import Footer from './Footer';



import { BrowserRouter, Link } from "react-router-dom"




import 'bootstrap'

import Pageall from './Pageall';








class App extends Component {
  state = {
    task: '',
    counter: 5,
    one: [],
    loading: true,
    table: [],
    interest_rates: '',
    active: true,
    api3: "",
  }





  async componentDidMount() {
    const API1 = 'https://api.nbp.pl/api/cenyzlota/'
    const response = await fetch(API1)
    const data = await response.json();

    const API2 = 'https://api.nbp.pl/api/exchangerates/tables/a/'
    const response2 = await fetch(API2)
    const data2 = await response2.json();

    // const API3 = 'https://github.com/codenix-sv/coingecko-api '
    // const response3 = await fetch(API3)
    // const data3 = await response3.json();


    // const API3 = 'https://www.nbp.pl/xml/stopy_procentowe.xml'
    // const response3 = await fetch(API3)
    // const data3 = await response3.();




    this.setState({
      one: data,
      loading: false,
      table: data2,
      // api3: data3
      // interest_rates: data3,

    })

    // console.lof(this.state.api3.date)



  }

  handleDataFetch = () => {
    const API = `http://api.nbp.pl/api/cenyzlota/last/${this.state.counter}`
    fetch(API)
      .then(response => {
        if (response.ok) {

          return response
        }
        throw Error("bład!!!")
      })
      .then(response =>
        response.json()
      )
      .then(data => {

        this.setState({
          task: data
        })
      })
      .catch(error => console.log(error))

    console.log(this.state.task)

  }


  handleclick = () => {
    this.setState({
      active: !this.state.active
    })
  }

  handlechangecounter = (e) => {
    this.setState({
      counter: e.target.value
    })
  }


  render() {

    return (
      // <BrowserRouter>
      <BrowserRouter>

        <div className="App1" >

          <Heder isActive={this.state.isActive} />




          <div className="App">
            <Leftwebi number={this.state.one} />



            <div className="buttongold">

              <Debt />
              <Pageall />
              <div>
                <label> Podaj liczbe ostatnich notowań złota:
                  <input
                    type="number"
                    value={this.counter}
                    onChange={this.handlechangecounter}>
                  </input>

                </label>
                {this.state.counter > 240 ? <div>Tabela A zawiera jedynie 240 warości (podaj liczbę od 1 do 240)</div> : null}
                <ButtonFetch click={this.handleDataFetch} />



              </div>

              {this.state.task ? <List users={this.state.task} /> : this.state.task}
            </div>



            <div className="currency">


              {this.state.loading || !this.state.one || !this.state.table ? <div>loading...</div> : <div className="notowania">

                <div className="notowania1">
                  Obecne średnie notowania dla złotówki:

                </div>

                {this.state.table.map(task => task.rates.map(task => {
                  return (
                    <div className="onenot" key={task.currency}> {task.currency}: <span> {task.mid}</span></div>
                  )
                }))}
              </div>}
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
