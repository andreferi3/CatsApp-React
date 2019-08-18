import React, { Component } from 'react'
import './CatList.css'

export default class CatList extends Component {
    render() {
        return (
            <div>
                <h1 className='display-1 text-center'>Cat List!</h1>

                <div className='container'>
                    <div className='row'>
                        {this.props.cats.map(c => (
                            <div className='Cat col-md-6 col-lg-4 text-center'>
                                <img src={c.src} alt={c.name} />
                                <h4>{c.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
