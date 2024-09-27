import { useState } from "react";
import { Container, Button, Table, Image, Card } from "react-bootstrap";

export default function DetalhesCandidato(props) {
    const [questionamento, setQuestionamento] = useState("")

    function adicionarQuestionamento(candidato) {
        //funfando
        if (questionamento != "") {
            const candAtt = {...candidato};
            candAtt.questionamentos.push(questionamento);
            props.setListaCandidatos(
                props.listaCandidatos.map((cand) =>
                    cand.id === candidato.id
                        ? candAtt
                        : cand
                )
            );
            props.setQuest(false);
            setQuestionamento("");
        }
    }

    return (
        <Container>
            {!props.quest
                ? <>
                    <h1>Detalhes Candidato</h1>
                    <Button
                        style={{ marginRight: '1em' }}
                        className="mb-3"
                        variant="primary"
                        onClick={() => {
                            props.setDetalharCandidato(false);
                        }}
                    >
                        Voltar
                    </Button>
                    <Button
                        className="mb-3"
                        variant="primary"
                        onClick={() => {
                            props.setQuest(true);
                        }}
                    >
                        Fazer Questionamento
                    </Button>
                    <div className="flex-box" style={{ gap: '1em', display: 'flex', justifyContent: 'space-between' }}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" height="300" width="300" src={props.candidatoSel.avatar} />
                            <Card.Body>
                                <Card.Title>{"candidato: " + props.candidatoSel.nome}</Card.Title>
                                <Card.Text>
                                    <p>{"Email: " + props.candidatoSel.email}</p>
                                    <p>{"Curtidas: " + props.candidatoSel.curtidas}</p>
                                    <p>{"Descurtidas: " + props.candidatoSel.descurtidas}</p>
                                    <p>{"Questionamentos: " + props.candidatoSel.questionamentos.length}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Table striped bordered hover className="text-center" style={{ height: 'min-content' }}>
                            <thead>
                                <tr>
                                    <th>Propostas</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.candidatoSel.propostas.length ?
                                        props.candidatoSel.propostas?.map((propostas) =>
                                            <tr>
                                                <td >{propostas}</td>
                                            </tr>
                                        )
                                        :
                                        <tr>
                                            <td>Não há propostas</td>
                                        </tr>
                                }
                            </tbody>
                            <thead>
                                <tr>
                                    <th>Questionamentos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    props.candidatoSel.questionamentos.length ?
                                        props.candidatoSel.questionamentos?.map((questionamentos) =>
                                            <tr>
                                                <td >{questionamentos}</td>
                                            </tr>
                                        )
                                        :
                                        <tr>
                                            <td>Não há questionamentos</td>
                                        </tr>
                                }
                            </tbody>
                        </Table>
                    </div>
                </>
                :
                <Container className="w-100 text-center">
                    <h2>Adicionar Questionamento</h2>
                    <input
                        type="text"
                        style={{
                            width: '75%',
                        }}
                        value={questionamento}
                        onChange={(elemento) => setQuestionamento(elemento.target.value)}
                    />
                    <Button
                        style={{ marginLeft: '1em' }}
                        className="mb-3"
                        variant="success"
                        onClick={() => {
                            adicionarQuestionamento(props.candidatoSel);
                        }}
                    >
                        Confirmar
                    </Button>
                    <Button
                        style={{ marginLeft: '1em' }}
                        className="mb-3"
                        variant="primary"
                        onClick={() => {
                            props.setQuest(false);
                            setQuestionamento("");
                        }}
                    >
                        Voltar
                    </Button>

                </Container>
            }
        </Container>
    );
}