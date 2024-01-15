import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import TrackVisibility from "react-on-screen";
import img1 from "../assets/img/Untitled/portfolio.png";
import img2 from "../assets/img/Untitled/Whats.png";
import img3 from "../assets/img/Untitled/award1.png";
import img4 from "../assets/img/Untitled/award2.png";
import img5 from "../assets/img/Untitled/first.png";
import img6 from "../assets/img/Untitled/food.png";
import img7 from "../assets/img/Untitled/freelance.png";
import img8 from "../assets/img/Untitled/place.png";
import img9 from "../assets/img/Untitled/projectMan.png";
import img10 from "../assets/img/Untitled/quiz.png";
import img11 from "../assets/img/Untitled/shopping.png";
import img12 from "../assets/img/Untitled/socialLog.png";
import img13 from "../assets/img/Untitled/socialMain.png";
import img14 from "../assets/img/Untitled/ticTak.png";
import img15 from "../assets/img/Untitled/timmer.png";
import img16 from "../assets/img/Untitled/hireMe.png"

export const Projects = () => {
  const projectsAll = [
    {
      title: "Modern Social Media",
      description: "Click to Visit Live Website & Github",
      imgUrl: img12,
      git: "https://github.com/Rishabhkumar111/SocialSpectra",
      type: "fullStack",
    },
    {
      title: "Freelance ",
      description: "Click to Visit Live Website & Github",
      imgUrl: img7,
      git: "https://github.com/Rishabhkumar111/RichTextEditorApp",
      type: "fullStack",
    },
    {
      title: "PortFolio Website",
      description: "Click to Visit Live Website & Github",
      imgUrl: img1,
      git: "https://github.com/Rishabhkumar111/PersonalPortfolio",
      type: "frontend",
    },
    {
      title: "Whatsapp Clone",
      description: "Click to Visit Live Website & Github",
      imgUrl: img2,
      git: "https://github.com/Rishabhkumar111/Whatsapp-Clone",
      type: "fullStack",
    },
    {
      title: "Place Picker",
      description: "Click to Visit Live Website & Github",
      imgUrl: img8,
      git: "https://github.com/Rishabhkumar111/DestinationPickerApp",
      type: "fullStack",
    },
    {
      title: "Project Mangement App",
      description: "Click to Visit Live Website & Github",
      imgUrl: img9,
      git: "https://github.com/Rishabhkumar111/Project_Mangement_App",
      type: "frontend",
    },
    {
      title: "Shopping Page",
      description: "Click to Visit Live Website & Github",
      imgUrl: img11,
      git: "https://github.com/Rishabhkumar111/React-s-Context-API-useReducer---Advanced-State-Management",
      type: "frontend",
    },
    {
      title: "Modern Social Media",
      description: "Visit Live Website & Github",
      imgUrl: img13,
      git: "https://github.com/Rishabhkumar111/SocialSpectra",
      type: "fullStack",
    },
    {
      title: "Awwwards.com Clone 1",
      description: "Click to Visit Live Website & Github",
      imgUrl: img3,
      git: "https://github.com/Rishabhkumar111/interactiveWebsite",
      type: "frontend",
    },
    {
      title: "Awwwards.com Clone 2",
      description: "Click to Visit Live Website & Github",
      imgUrl: img4,
      git: "https://github.com/Rishabhkumar111/AwardedWebsite_Sidcup_Family_Golf",
      type: "frontend",
    },
    {
      title: "React Fun Website for Recruiters",
      description: "Click to Visit Live Website",
      imgUrl: img16,
      git: "https://hire-me-topaz.vercel.app/",
      type: "frontend",
    },
    {
      title: "React Blog",
      description: "Click to Visit Live Website & Github",
      imgUrl: img5,
      git: "https://github.com/Rishabhkumar111/UdemyCourse",
      type: "frontend",
    },
    {
      title: "Food Ordering Page",
      description: "Click to Visit Live Website & Github",
      imgUrl: img6,
      git: "https://github.com/Rishabhkumar111/FoodOrderingApp",
      type: "fullStack",
    },
    {
      title: "React Quiz App",
      description: "Click to Visit Live Website & Github",
      imgUrl: img10,
      git: "https://github.com/Rishabhkumar111/QuizApp",
      type: "frontend",
    },
    {
      title: "Tic_Tak_Toe Game",
      description: "Click to Visit Live Website & Github",
      imgUrl: img14,
      git: "https://github.com/Rishabhkumar111/Tic-Tak-Toe_Udemy_Course",
      type: "frontend",
    },
    {
      title: "Timmer Game",
      description: "Click to Visit Live Website & Github",
      imgUrl: img15,
      git: "https://github.com/Rishabhkumar111/useOfRefs_Project",
      type: "frontend",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've crafted a diverse array of web applications, including
                    a social media app, WhatsApp clone, and responsive websites.
                    My contributions at Amazon involved the independent
                    development of Panorama tool features and the creation of
                    critical APIs, showcasing my technical versatility and
                    creativity in problem-solving.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Full Stack</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Frontend</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projectsAll.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projectsAll.map((project, index) => {
                            if (project.type === "fullStack")
                              return <ProjectCard key={index} {...project} />;
                            else return null;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projectsAll.map((project, index) => {
                            if (project.type === "frontend")
                              return <ProjectCard key={index} {...project} />;
                            else return null;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
