import { Container } from "react-bootstrap";
import Pagina from "../layouts/Pagina";
import DetalhesCandidato from "./DetalhesCandidato";
import GridCandidatos from "./GridCandidatos";
import { useState } from "react";
import {listaCandidatos} from "../../dados/candidatos";

export default function TelaPrincipal(props) {
    const [detalharCandidato, setDetalharCandidato]=useState(false);
    const [candidatoSel, setCandidatoSel]=useState({
        id: 0,
        email: "",
        nome: "",
        avatar: "",
        propostas:[],
        curtidas: 0,
        descurtidas:0,
        questionamentos:[]
    });
    const [ListaCandidatos, setListaCandidatos] = useState(listaCandidatos);
    const [quest, setQuest] = useState(false);    

    return (

        <Pagina>
            {
                detalharCandidato ? (
                    <DetalhesCandidato
                    listaCandidatos={ListaCandidatos}
                    setListaCandidatos={setListaCandidatos}
                    setDetalharCandidato={setDetalharCandidato}
                    candidatoSel={candidatoSel}
                    quest={quest}
                    setQuest={setQuest}/>
                ) : (
                    <GridCandidatos
                    listaCandidatos={ListaCandidatos}
                    setListaCandidatos={setListaCandidatos}
                    setDetalharCandidato={setDetalharCandidato}
                    setCandidatoSel={setCandidatoSel}/>
                )
            }
        </Pagina>
    );
}