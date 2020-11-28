import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Destaques from './../../components/Destaques';
import Categoria from './../../components/Categoria';
import './style.scss';



export default class Index extends Component {
    render() {
        const destaques = 
        [{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/black.jpg',
            date: '10/10/2020'
        },
        {
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/curso.png',
            date: '10/10/2020'
        },{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        }]

        return (
            <div className="index">
                <Destaques data={destaques} />
                <Categoria data={destaques} />
                <Link to={`/category/cortes-de-cabelo`}>Acesse</Link>
            </div>

        )
    }
}