import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/pngnyume/CCPROG3-MCO2"
          h3="Vending Machine"
          p="using java and JavaFX"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/pngnyume/NodeJS-Blog"
          h3="U1 Blog"
          p="Blog Website using NodeJs"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="BiteBoxed"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Abstrak Inventory"
          p="CSSWENG requirement"
        />
      </div>
    </section>
  );
}

export default Projects;
