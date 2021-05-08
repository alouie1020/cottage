import React, { Component } from 'react';
import { FaTimes, FaBan, FaPencilAlt, FaSave } from "react-icons/fa";
import './Card.css';

export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            address: this.props.address,
            br: this.props.br,
            ba: this.props.ba,
            sqft: this.props.sqft,
            price: this.props.price
        }
    }

    saveChanges = (e) => {
        e.preventDefault();
        const { address, br, ba } = this.state;
        if (!address || !br || !ba) {
            alert('Please enter address');
        } else {
            this.props.updateCard({...this.state}, this.props.id);
        }
        this.props.toggleEdit(this.props.id)
    }

    render() {
        const { firstName, lastName, address, br, ba, sqft, price, id, isEditable } = this.props;


            return (
                <div className="aduCard">
                    <form className="aduCard__form" onSubmit={this.saveChanges}>
                        <div className="aduCard__header">
                            {isEditable ? <button type="submit" style={{ background: "none", border: "none", fontSize: "17px" }}><FaSave style={{ color: '#8090f2', marginTop: '4px' }}/></button> : ''}
                            {isEditable ? <FaBan onClick={this.props.toggleEdit.bind(this, id)} style={{ color: '#ed4334' }}/> : <FaPencilAlt onClick={this.props.toggleEdit.bind(this, id)} style={{ color: '#fcca00', marginRight: '8px'}} />}
                            {isEditable ? '' : <FaTimes onClick={this.props.deleteCard.bind(this, id)} style={{ color: '#ed4334' }} />}
                        </div>
                        <div className="formGroup">
                            {firstName ? <input className="form__name" type="text" disabled={isEditable ? '' : 'disabled'} defaultValue={`${firstName}`} onChange={e => this.setState({ firstName: e.target.value })} /> : 'N/A'}
                            {lastName ? <input className="form__name" type="text" disabled={isEditable ? '' : 'disabled'} defaultValue={`${lastName}`} onChange={e => this.setState({ lastName: e.target.value })} /> : 'N/A'}

                        </div>

                        <div className="formGroup">
                            <input className="form__address" type="text" disabled={isEditable ? '' : 'disabled'} defaultValue={`${address}`} onChange={e => this.setState({ address: e.target.value })} />
                        </div>
                        <div className="formGroup">
                            Beds: <input className="form__shortNum" type="number" max="10" min="0" disabled={isEditable ? '' : 'disabled'} defaultValue={`${br}`} onChange={e => this.setState({ br: e.target.value })} />&nbsp;
                            Bath: <input className="form__shortNum" type="number" max="10" min="0" disabled={isEditable ? '' : 'disabled'} defaultValue={`${ba}`} onChange={e => this.setState({ ba: e.target.value })} />
                        </div>
                        <div className="formGroup">
                            Sqft: {sqft ? <input type="number" disabled={isEditable ? '' : 'disabled'} defaultValue={`${sqft}`} onChange={e => this.setState({ sqft: e.target.value })} /> : 'N/A'}
                        </div>
                        <div className="formGroup">
                            Price: ${price ? <input type="number" disabled={isEditable ? '' : 'disabled'} defaultValue={`${price}`} onChange={e => this.setState({ price: e.target.value })} /> : 'N/A'}
                        </div>
                    </form>
                </div>
            )
    }
}
