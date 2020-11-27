import React , { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Main extends Component {
    render() {
        return (
            <div>
                <h1>MAIN PAGE</h1>
                <Link to={`/category/cortes-de-cabelo`}>Acesse</Link>
            </div>

        )
    }
}