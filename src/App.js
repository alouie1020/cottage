import {React, Component} from 'react'
import './App.css';
import Card from './Card'
import AddForm from './AddForm';

import { FaTimes } from "react-icons/fa";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ADUList: [
        {
          id: 1,
          firstName: 'Bob',
          lastName: 'Smith',
          address: '123 Main St',
          br: 2,
          ba: 2,
          sqft: '1000',
          price: 15000,
          isEditable: false
        },
        {
          id: 2,
          firstName: 'Anna',
          lastName: 'Lockhart',
          address: '124 Main St',
          br: 2,
          ba: 1,
          sqft: '1200',
          price: 17000,
          isEditable: false
        },
        {
          id: 3,
          firstName: 'Karen',
          lastName: 'Townes',
          address: '125 Water St',
          br: 3,
          ba: 2,
          sqft: '1500',
          price: 20000,
          isEditable: false
        },
      ],
      showAddForm: false
    }
  }
  
  addADU = (adu) => {
    console.log(adu)
    this.setState({ADUList: [...this.state.ADUList, adu]})
  }

  deleteCard = (id) => {
    this.setState({ ADUList: [...this.state.ADUList.filter(adu => adu.id !== id)] });
  }

  updateCard = (updatedCard, id) => {
    console.log('state initial: ', this.state)
    this.setState({
      ADUList: this.state.ADUList.map(adu => (adu.id === id ? Object.assign({}, adu, updatedCard) : adu))
    });
  }

  toggleEdit = (id) => {
    let adus = [...this.state.ADUList];
    adus.forEach(adu => {
      if (adu.id === id) {
        adu.isEditable = !adu.isEditable;
      }
    })

    this.setState({ADUList: adus})
  }

  toggleAddForm = () => {
    this.setState({showAddForm: !this.state.showAddForm})
  }

  render(){
    const { ADUList, showAddForm } = this.state;

    const ADUAsElements = ADUList.map(adu => {
      return (
        <Card {...adu} key={adu.id} 
          deleteCard={this.deleteCard} 
          updateCard={this.updateCard}
          toggleEdit={this.toggleEdit}
        />
      )
    })

    return (
      <div className="App">
        <button className="btn add-btn" onClick={this.toggleAddForm}>{showAddForm ?  <FaTimes />: '+'}</button>

        {showAddForm && <AddForm 
          addADU={(adu) => this.addADU(adu)} 
          toggleEdit={this.toggleEdit}
          toggleAddForm={this.toggleAddForm}
        />}

        <div className="aduCards">
          {ADUAsElements}
        </div>
      </div>
    );
  } 
}