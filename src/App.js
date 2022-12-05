import React from "react";
import "./App.css";
import {
  Button,
  Container,
  Row,
  Col,
  ButtonGroup,
  Card,
} from "bootstrap-4-react";
import Lottie from "react-lottie";
import students from "./lottie/students";
import rundog1 from "./lottie/rundog1";
import rundog2 from "./lottie/rundog2";
import rundog3 from "./lottie/rundog3";
import ambiental from "./img/carreras/ambiental.png";
import administracion from "./img/carreras/administracion.png";
import nanotecnologia from "./img/carreras/nanotecnologia.png";
import biomedica from "./img/carreras/biomedica.png";
import industrial from "./img/carreras/industrial.png";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "main",
      question: null,
      photos: [
        nanotecnologia,
        ambiental,
        biomedica,
        administracion,
        industrial,
      ],
    };

    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.doAnswer = this.doAnswer.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
    this.filterPeople = this.filterPeople.bind(this);
    this.fetchPeople = this.fetchPeople.bind(this);

    this.state.session = window.pl.create();

    let program =
      ":- use_module(library(lists))." +
      "get_questions(Q) :-" +
      "Q = ['¿aplica calculo integral o diferencial?', '¿estudia la estructura de una empresa?', '¿usa bata de laboratorio?', '¿aplican conocimientos de electronica o productos  pequeños?', '¿puede  desarrollar productos enfocados a salud?', '¿se encuentra en tomas aquino?', '¿ayuda al medio ambiente?', '¿trabajan en medicinas?']." +
      "get_facts(F) :-" +
      "F = [calculo, estructura, bata, electronica_peque, salud, aquino, ambiente, medicina]." +
      "calculo(nanotecnologia)." +
      "bata(nanotecnologia)." +
      "peque(nanotecnologia)." +
      "electronica(nanotecnologia)." +
      "salud(nanotecnologia)." +
      "calculo(ambiental)." +
      "bata(ambiental)." +
      "salud(ambiental)." +
      "ambiente(ambiental)." +
      "calculo(biomedica)." +
      "bata(biomedica)." +
      "salud(biomedica)." +
      "ambiente(biomedica)." +
      "medicina(biomedica)." +
      "estructura(administracion)." +
      "calculo(industrial)." +
      "bata(industrial)." +
      "electronica(industrial)." +
      "aquino(industrial)." +
      "get_people(P) :-" +
      "P = [nanotecnologia, ambiental, biomedica, administracion, industrial]." +
      "q(F) :-" +
      "get_facts(F)." +
      " filter(Answer, F, People, Result) :-" +
      "     (   Answer =:= 1 -> include(F, People, Result)" +
      "     ;   Answer =:= 0 -> exclude(F, People, Result)" +
      "     ;   Result = People" +
      "     ).";

    this.state.session.consult(program);
  }

  arrayToString(array) {
    return array.toString();
  }

  componentDidMount() {
    this.reset();
  }

  filterPeople() {
    return function (answer) {
      if (window.pl.type.is_substitution(answer)) {
        let people = answer.lookup("R");
        let filteredPeople = this.fetchPeople(people);
        this.setState({ p: filteredPeople });
      }
    }.bind(this);
  }

  fetchPeople(tail) {
    let result = [];
    while (tail["args"] && tail["args"].length > 0 && tail["args"][0]["id"]) {
      result.push(tail["args"][0]["id"]);
      tail = tail["args"][1];
    }
    return result;
  }

  showQuestion() {
    return function (answer) {
      if (window.pl.type.is_substitution(answer)) {
        let question = answer.lookup("Q");
        this.setState({ question: question["args"][0]["id"] });
      }
    }.bind(this);
  }

  doAnswer(answer) {
    this.state.session.query(
      "filter(" +
        answer +
        ", " +
        this.state.f[this.state.i] +
        ", [" +
        this.arrayToString(this.state.p) +
        "], R)."
    );
    this.state.session.answers(this.filterPeople());
    this.setState({ i: this.state.i + 1 });
    console.log(this.state.p);
    console.log(this.state.q);
    console.log(this.state.i);
  }

  changeCurrentPage(page) {
    this.setState({ currentPage: page });
    this.reset();
  }

  reset() {
    this.setState({
      q: [
        "¿aplica calculo integral o diferencial?",
        "¿estudia la estructura de una empresa?",
        "¿usa bata de laboratorio?",
        "¿aplican conocimientos de electronica o productos  pequeños?",
        "¿realiza productos pequeños?",
        "¿puede  desarrollar productos enfocados a salud?",
        "¿se encuentra en tomas aquino?",
        "¿se preocupa por el medio ambiente?",
        "¿trabajan en medicinas?",
      ],
      f: [
        "calculo",
        "estructura",
        "bata",
        "peque",
        "electronica",
        "salud",
        "aquino",
        "ambiente",
        "medicina",
      ],
      p: [
        "nanotecnologia",
        "ambiental",
        "biomedica",
        "administracion",
        "industrial",
      ],
      indexesForPhotos: [
        "nanotecnologia",
        "ambiental",
        "biomedica",
        "administracion",
        "industrial",
      ],
      i: 0,
    });
  }

  render() {
    const lottieRundog1 = {
      loop: true,
      autoplay: true,
      animationData: rundog1,
    };

    const lottieRundog2 = {
      loop: true,
      autoplay: true,
      animationData: rundog2,
    };

    const lottieRundog3 = {
      loop: true,
      autoplay: true,
      animationData: rundog3,
    };

    return (
      <Container>
        <div class="header_home">
          <h1 class="titulo-index"> MR WHO </h1>
        </div>
        <Row mt={5}>
          <Col>
            {this.state.currentPage === "main" ? (
              <div class="chat">
                <div style={{ textAlign: "center" }} className="text_inicio">
                  <p>Hola! Soy un galgo muy inteligente!</p>
                  <p>Y puedo leer mentes</p>
                  <p>
                    {" "}
                    ¿Podre adivinar la carrera del ITT en la que estas pensando?
                  </p>
                </div>
                <Lottie
                  style={{ width: 300, height: 300 }}
                  options={lottieRundog1}
                  height={300}
                  width={300}
                />
                <div style={{ textAlign: "center" }}>
                  <Button
                    primary
                    lg
                    onClick={() => this.changeCurrentPage("game")}
                  >
                    Estoy listo!
                  </Button>
                </div>
              </div>
            ) : this.state.p.length > 1 &&
              this.state.q.length > this.state.i ? (
              <div class="chat">
                <div style={{ textAlign: "center" }} className="text_inicio">
                  <p>Ahora te mostraré...</p>
                  <p>Piensa en una carrera</p>
                  <p>y contesta las preguntas</p>
                </div>
                <Lottie
                  style={{ width: 300, height: 300 }}
                  options={lottieRundog2}
                  height={300}
                  width={300}
                />
                <p style={{ textAlign: "center", fontSize: 25 }}>
                  {this.state.q[this.state.i]}
                </p>
                <div style={{ textAlign: "center" }}>
                  <ButtonGroup lg>
                    <Button danger as="label" onClick={() => this.doAnswer(0)}>
                      No
                    </Button>
                    <Button warning as="label" onClick={() => this.doAnswer(2)}>
                      Don't Know
                    </Button>
                    <Button success as="label" onClick={() => this.doAnswer(1)}>
                      Yes
                    </Button>
                  </ButtonGroup>
                </div>
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <Button
                    danger
                    outline
                    sm
                    onClick={() => this.changeCurrentPage("main")}
                  >
                    Termina el juego
                  </Button>
                </div>
              </div>
            ) : (
              <div class="chat">
                <div style={{ textAlign: "center" }} className="text_inicio">
                  <p>Te mostaré...</p>
                  <p>Piensa en una carrera</p>
                  <p>y responde a mis preguntas</p>
                </div>
                <Lottie
                  style={{ width: 300, height: 300 }}
                  options={lottieRundog3}
                  height={300}
                  width={300}
                />
                {this.state.p.length === 1 ? (
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      Creo que te refieres a ...
                    </p>
                    <Card
                      align="top"
                      mx="auto"
                      style={{ width: "10rem", marginBottom: "1rem" }}
                    >
                      <Card.Image
                        src={
                          this.state.photos[
                            this.state.indexesForPhotos.indexOf(this.state.p[0])
                          ]
                        }
                        top
                      />
                      <Card.Body>
                        <Card.Text>{this.state.p[0]}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ) : (
                  <div>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: 25,
                      }}
                    >
                      Alguna de estas carreras...
                    </p>
                    <div style={{ alignContent: "center" }}>
                      {this.state.p.map((item, i) => (
                        <Card
                          display="inline-block"
                          key={i}
                          align="top"
                          mr={1}
                          style={{ width: "10rem", marginBottom: "1rem" }}
                        >
                          <Card.Image
                            src={
                              this.state.photos[
                                this.state.indexesForPhotos.indexOf(item)
                              ]
                            }
                            top
                          />
                          <Card.Body>
                            <Card.Text>{item}</Card.Text>
                          </Card.Body>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <Button
                    success
                    outline
                    sm
                    onClick={() => this.changeCurrentPage("main")}
                  >
                    Ve a la pantalla principal
                  </Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
