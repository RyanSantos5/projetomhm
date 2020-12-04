import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import Destaques from './../../components/Destaques';
import Categoria from './../../components/Categoria';
import './style.scss';
import Recentes from '../../components/Recentes';
import TodasCategorias from '../../components/TodasCategorias';



export default class Index extends Component {
    render() {
        const destaques = 
        [{
            id: 'post1',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/black.jpg',
            date: '10/10/2020'
        },
        {
            id: 'post2',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/curso.png',
            date: '10/10/2020'
        },{
            id: 'post3',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post4',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post5',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post6',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post7',
            title: 'Black Friday 2020: como deixar sua casa mais moderna e inteligente',
            description: 'Selecionamos diversas promoções na Black Friday Amazon, para você deixar sua casa mais moderna e inteligente.',
            tag: 'Tecnologia',
            banner: './../../assets/images/teste/colecao.jpg',
            date: '10/10/2020'
        },{
            id: 'post8',
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
                <Recentes data={destaques} />
                <Categoria data={destaques} />
                <TodasCategorias data={destaques} />
            </div>

        )
    }
}