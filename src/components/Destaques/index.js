import React from 'react';
import './style.scss';
import Banner1 from './../../assets/images/teste/black.jpg';
import Banner2 from './../../assets/images/teste/curso.png';
import Banner3 from './../../assets/images/teste/colecao.jpg';
import { Link } from 'react-router-dom';
import DestaqueTexto from '../DestaqueTexto';

const Destaques = (props) => {
    console.log(props);
    return  (
        <div className="destaques">
            <div className="content">
                <Link 
                className="destaque1 destaque" 
                style={{backgroundImage: `url('${Banner1}')` }}
                >
                    <DestaqueTexto data={props.data[0]}/>
                </Link>
                <div className="destaque2 destaque" >
                    <Link 
                    className="subdestaque1 destaque" 
                    style={{backgroundImage: `url('${Banner2}')` }}

                    >
                        <DestaqueTexto data={props.data[1]}/>
                    </Link>
                    <Link 
                    className="subdestaque2 destaque" 
                    style={{backgroundImage: `url('${Banner3}')` }}

                    >
                        <DestaqueTexto data={props.data[2]} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Destaques;