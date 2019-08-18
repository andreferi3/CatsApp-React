import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './CatDetails.css'

export default class DogDetails extends Component {
    render() {
        let {cat} = this.props
        return (
            <div className='container'>
                <div className='DogDetails row justify-content-center mt-5'>
                    <div className='col-11 col-lg-5'>
                        <div className='DogDetails-card card shadow'>
                            <img src={cat.src} alt={cat.name} className='card-img-top' />
                            <div className='card-body'>
                                <div className='card-title'>
                                    <h2>{cat.name}</h2>
                                    <h4 className='card-subtitle text-muted'>{cat.age} years old</h4>
                                </div>
                            </div>
                            <ul className='list-group list-group-flush'>
                                {cat.facts.map((fact, i) => (
                                    <li className='list-group-item' key={i}>{fact}</li>
                                ))}
                            </ul>
                            <div className='card-body'>
                                <Link to='/cats' className='btn btn-info'>Go Back!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
