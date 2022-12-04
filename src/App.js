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
import donald_trump from "./img/people/donald_trump.jpg";
import marilyn_monroe from "./img/people/marilyn_monroe.jpg";
import jim_carrey from "./img/people/jim_carrey.jpg";
import barack_obama from "./img/people/barack_obama.jpg";
import bruce_willis from "./img/people/bruce_willis.jpg";
import tom_cruise from "./img/people/tom_cruise.jpg";
import andrzej_duda from "./img/people/andrzej_duda.jpg";
import eddie_murphy from "./img/people/eddie_murphy.jpg";
import robert_lewandowski from "./img/people/robert_lewandowski.jpg";
import agnieszka_radwanska from "./img/people/agnieszka_radwanska.jpg";
import doda from "./img/people/doda.jpg";
import dawid_podsiadlo from "./img/people/dawid_podsiadlo.jpg";
import jrr_tolkien from "./img/people/jrr_tolkien.jpg";
import lech_kaczynski from "./img/people/lech_kaczynski.jpg";
import wislawa_szymborska from "./img/people/wislawa_szymborska.jpg";
import julia_roberts from "./img/people/julia_roberts.jpg";
import freddie_mercury from "./img/people/freddie_mercury.jpg";
import christiano_ronaldo from "./img/people/christiano_ronaldo.jpg";
import jan_pawel_2 from "./img/people/jan_pawel_2.jpg";
import mikolaj_kopernik from "./img/people/mikolaj_kopernik.jpg";
import albert_einsten from "./img/people/albert_einsten.jpg";
import boguslaw_linda from "./img/people/boguslaw_linda.jpg";
import morgan_freeman from "./img/people/morgan_freeman.jpg";
import usain_bolt from "./img/people/usain_bolt.jpg";
import jk_rowling from "./img/people/jk_rowling.jpg";
import maria_sklodowska_curie from "./img/people/maria_sklodowska_curie.jpg";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: "main",
      question: null,
      photos: [
        jim_carrey,
        donald_trump,
        barack_obama,
        marilyn_monroe,
        bruce_willis,
        tom_cruise,
        andrzej_duda,
        eddie_murphy,
        robert_lewandowski,
        agnieszka_radwanska,
        doda,
        dawid_podsiadlo,
        jrr_tolkien,
        lech_kaczynski,
        wislawa_szymborska,
        julia_roberts,
        freddie_mercury,
        christiano_ronaldo,
        jan_pawel_2,
        mikolaj_kopernik,
        albert_einsten,
        boguslaw_linda,
        morgan_freeman,
        usain_bolt,
        jk_rowling,
        maria_sklodowska_curie,
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
      "Q = ['Is it a man?', 'Is your person dead?', 'Has children?', 'Comedian actor?', 'Older than 50', 'Bald?', 'Was/Is a president?', 'Black?']." +
      "get_facts(F) :-" +
      "F = [man, dead, has_children, actor_comedian, older_than_50, bald, was_is_president, black]." +
      "man(jim_carrey)." +
      "has_children(jim_carrey)." +
      "comedian(jim_carrey)." +
      "actor(jim_carrey)." +
      "older_than_50(jim_carrey)." +
      "man(donald_trump)." +
      "has_children(donald_trump)." +
      "older_than_50(donald_trump)." +
      "was_is_president(donald_trump)." +
      "man(barack_obama)." +
      "has_children(barack_obama)." +
      "older_than_50(barack_obama)." +
      "was_is_president(barack_obama)." +
      "black(barack_obama)." +
      "dead(marilyn_monroe)." +
      "man(bruce_willis)." +
      "has_children(bruce_willis)." +
      "actor(bruce_willis)." +
      "bald(bruce_willis)." +
      "man(tom_cruise)." +
      "has_children(tom_cruise)." +
      "actor(tom_cruise)." +
      "older_than_50(tom_cruise)." +
      "man(andrzej_duda)." +
      "has_children(andrzej_duda)." +
      "was_is_president(andrzej_duda)." +
      "polish(andrzej_duda)." +
      "man(eddie_murphy)." +
      "has_children(eddie_murphy)." +
      "comedian(eddie_murphy)." +
      "actor(eddie_murphy)." +
      "older_than_50(eddie_murphy)." +
      "bald(eddie_murphy)." +
      "black(eddie_murphy)." +
      "man(robert_lewandowski)." +
      "has_children(robert_lewandowski)." +
      "polish(robert_lewandowski)." +
      "athlete(robert_lewandowski)." +
      "polish(agnieszka_radwanska)." +
      "athlete(agnieszka_radwanska)." +
      "polish(doda)." +
      "singer(doda)." +
      "man(dawid_podsiadlo)." +
      "polish(dawid_podsiadlo)." +
      "singer(dawid_podsiadlo)." +
      "man(jrr_tolkien)." +
      "dead(jrr_tolkien)." +
      "has_children(jrr_tolkien)." +
      "older_than_50(jrr_tolkien)." +
      "writer(jrr_tolkien)." +
      "man(lech_kaczynski)." +
      "dead(lech_kaczynski)." +
      "has_children(lech_kaczynski)." +
      "actor(lech_kaczynski)." +
      "older_than_50(lech_kaczynski)." +
      "was_is_president(lech_kaczynski)." +
      "polish(lech_kaczynski)." +
      "dead(wislawa_szymborska)." +
      "older_than_50(wislawa_szymborska)." +
      "polish(wislawa_szymborska)." +
      "writer(wislawa_szymborska)." +
      "has_children(julia_roberts)." +
      "actor(julia_roberts)." +
      "older_than_50(julia_roberts)." +
      "man(freddie_mercury)." +
      "dead(freddie_mercury)." +
      "singer(freddie_mercury)." +
      "man(christiano_ronaldo)." +
      "has_children(christiano_ronaldo)." +
      "athlete(christiano_ronaldo)." +
      "man(jan_pawel_2)." +
      "older_than_50(jan_pawel_2)." +
      "polish(jan_pawel_2)." +
      "man(mikolaj_kopernik)." +
      "dead(mikolaj_kopernik)." +
      "older_than_50(mikolaj_kopernik)." +
      "polish(mikolaj_kopernik)." +
      "scientist(mikolaj_kopernik)." +
      "man(albert_einsten)." +
      "dead(albert_einsten)." +
      "has_children(albert_einsten)." +
      "older_than_50(albert_einsten)." +
      "scientist(albert_einsten)." +
      "man(boguslaw_linda)." +
      "has_children(boguslaw_linda)." +
      "actor(boguslaw_linda)." +
      "older_than_50(boguslaw_linda)." +
      "polish(boguslaw_linda)." +
      "man(morgan_freeman)." +
      "has_children(morgan_freeman)." +
      "actor(morgan_freeman)." +
      "older_than_50(morgan_freeman)." +
      "black(morgan_freeman)." +
      "man(usain_bolt)." +
      "black(usain_bolt)." +
      "athlete(usain_bolt)." +
      "has_children(jk_rowling)." +
      "older_than_50(jk_rowling)." +
      "writer(jk_rowling)." +
      "dead(maria_sklodowska_curie)." +
      "has_children(maria_sklodowska_curie)." +
      "older_than_50(maria_sklodowska_curie)." +
      "polish(maria_sklodowska_curie)." +
      "scientist(maria_sklodowska_curie)." +
      "get_people(P) :-" +
      "P = [jim_carrey, donald_trump, barack_obama, marilyn_monroe, bruce_willis]." +
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
        "Is it a man?",
        "Dead?",
        "Has children?",
        "Comedian?",
        "Actor?",
        "Older than 50",
        "Bald?",
        "Was/Is a president?",
        "Black?",
        "Polish?",
        "Singer?",
        "Athlete?",
        "Writer?",
        "Scientist?",
      ],
      f: [
        "man",
        "dead",
        "has_children",
        "comedian",
        "actor",
        "older_than_50",
        "bald",
        "was_is_president",
        "black",
        "polish",
        "singer",
        "athlete",
        "writer",
        "scientist",
      ],
      p: [
        "jim_carrey",
        "donald_trump",
        "barack_obama",
        "marilyn_monroe",
        "bruce_willis",
        "tom_cruise",
        "andrzej_duda",
        "eddie_murphy",
        "robert_lewandowski",
        "agnieszka_radwanska",
        "doda",
        "dawid_podsiadlo",
        "jrr_tolkien",
        "lech_kaczynski",
        "wislawa_szymborska",
        "julia_roberts",
        "freddie_mercury",
        "christiano_ronaldo",
        "jan_pawel_2",
        "mikolaj_kopernik",
        "albert_einsten",
        "boguslaw_linda",
        "morgan_freeman",
        "usain_bolt",
        "jk_rowling",
        "maria_sklodowska_curie",
      ],
      indexesForPhotos: [
        "jim_carrey",
        "donald_trump",
        "barack_obama",
        "marilyn_monroe",
        "bruce_willis",
        "tom_cruise",
        "andrzej_duda",
        "eddie_murphy",
        "robert_lewandowski",
        "agnieszka_radwanska",
        "doda",
        "dawid_podsiadlo",
        "jrr_tolkien",
        "lech_kaczynski",
        "wislawa_szymborska",
        "julia_roberts",
        "freddie_mercury",
        "christiano_ronaldo",
        "jan_pawel_2",
        "mikolaj_kopernik",
        "albert_einsten",
        "boguslaw_linda",
        "morgan_freeman",
        "usain_bolt",
        "jk_rowling",
        "maria_sklodowska_curie",
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
