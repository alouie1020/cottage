import React, { Component } from 'react'
import './AddForm.css'

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            br: null,
            ba: null,
            sqft: null,
            price: null 
        }
    }

    onSubmit = (e) => {
        e.preventDefault(); 
        
        // validation would go here. In this case I decided that address, beds, and baths were required
        if (!this.state.address || !this.state.br || !this.state.ba) {
            alert('Address, # of Bedrooms, and # of Bathrooms required')
            return;
        } 

        this.props.addADU({...this.state})
        this.props.toggleAddForm()

        this.setState({
            firstName: '',
            lastName: '',
            address: '',
            br: null, 
            ba: null,
            sqft: null,
            price:  null
        })
    }

    render() {
        const { firstName, lastName, address, br, ba, sqft, price  } = this.state;

        return (
            <form className="aduForm" onSubmit={this.onSubmit}>
                <label>First Name:</label>
                <input type="text" name="firstName" value={firstName} onChange={e => this.setState({firstName: e.target.value})} />

                <label>Last Name:</label>
                <input type="text" name="lastName" value={lastName} onChange={e => this.setState({ lastName: e.target.value })}/>

                <label>Address:</label>
                <input type="text" name="address" value={address} onChange={e => this.setState({ address: e.target.value })} />

                <label># of Bedrooms:</label>
                <input type="number" max="10" min="0" name="beds" value={br} onChange={e => this.setState({ br: e.target.value })} />

                <label># of Bathrooms:</label>
                <input type="number" max="10" min="0" name="baths" value={ba} onChange={e => this.setState({ ba: e.target.value })} />

                <label>Square Footage:</label>
                <input type="number" name="sqft" value={sqft} onChange={e => this.setState({ sqft: e.target.value })} />

                <label>Price:</label>
                <input type="number" name="price" value={price} onChange={e => this.setState({ price: e.target.value })} />

                <button type="submit" className="btn aduFrom__saveButton">Save</button>
            </form>
        )
    }
}
