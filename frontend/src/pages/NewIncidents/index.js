import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

// Style
import "./style.css";

// Componentes
import LogoImg from "../../assets/logo.svg";

// Service
import api from "../../services/api";

export default function NewIncidents(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const ongID = localStorage.getItem("ongID");

    const history = useHistory();

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {title, description, value};

        try{
            await api.post("incidents", data, { headers: { authorization: ongID} });
            history.push("/profile");

        } catch(err){
            console.log(err);
            alert("Erro ao tentar criar um novo caso, por favor tente mais tarde");

        }

    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be the hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Nome da ONG" value={title} onChange={ e => { setTitle(e.target.value) } } />
                    <textarea placeholder="Descrição"value={description} onChange={ e => { setDescription(e.target.value) } } />
                    <input placeholder="Valor em reais" value={value} onChange={ e => { setValue(e.target.value) } } />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};