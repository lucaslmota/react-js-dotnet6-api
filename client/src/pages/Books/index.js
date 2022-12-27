import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiEdit, FiTrash2 } from "react-icons/fi";
import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function Books(){
    return(
        <>
            <div className="book-container">
                <header>
                   <img src={logoImg} alt="Lucas"/>
                   <span>Welcom, <strong>Lucas</strong></span>
                   <Link className="button" to="/book/new">Add New Book</Link>
                   <button type="button">
                    <FiPower size={18} color="#251FC5"/>
                   </button>
                </header>

                <h1>Register Books</h1>
                <ul>
                    <li>
                        <strong>Title</strong>
                        <p>Docker Deep Dive</p>
                        <strong>Title</strong>
                        <p>Docker Deep Dive</p>
                        <strong>Title</strong>
                        <p>Docker Deep Dive</p>
                        <strong>Title</strong>
                        <p>Docker Deep Dive</p>

                        <button type="button">
                            <FiEdit size={20} color="#251FC5"></FiEdit>
                        </button>
                        <button type="button">
                            <FiTrash2 size={20} color="#251FC5"></FiTrash2>
                        </button>
                    </li>
                </ul>

            </div>
        </>
    )

    
}