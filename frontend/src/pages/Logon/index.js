import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

// Style
import "./style.css";

// Components
import HerosImg from "../../assets/heroes.png";
import LogoImg from "../../assets/logo.svg";

// Services
import api from "../../services/api";

import {FiLogIn} from "react-icons/fi";

export default function Logon(){
    const [ id, setId ] = useState();
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post("session", {id});

            localStorage.setItem("ongID", id);
            localStorage.setItem("ongName", response.data.name);

            alert("Bem vindo " + response.data.name);
            history.push("/profile");

        } catch(err){
            alert("Erro ao realizar logon");
            history.push("/");

        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be the hero" />

                <form onSubmit={handleLogon}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" value={id} onChange={e => setId(e.target.value) } />
                    <button className="button" type="submit">Entrar</button>
                     
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={HerosImg} alt="Heroes" />
        </div>
    );
}
