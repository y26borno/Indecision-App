import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss'

const Layout = (props) =>{

    return (

        <div>
        <p>header</p>
        {props.sumaya}
        </div>
    )
}

const template = <p>Sumaya I love you, will you marry me!</p>
    
 ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
