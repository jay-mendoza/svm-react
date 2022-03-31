import './HeroLink.css';

function HeroLink(project) {
    return (
        <div className="HeroLink">
            <article className="project">
                <a href={project.linkHref} target="_blank">
                    <div style={{backgroundImage: `url(${project.imageUrl})`}}>
                    </div>
                </a>
                <div>
                    <header>{project.title} <span hidden={!project.isPro} className="mdi mdi-professional-hexagon"></span></header>
                    <div>{project.description}</div>
                    <a href={project.linkHref} target="_blank">{project.linkHref}</a>
                </div>
                <aside>{project.devComment}</aside>
            </article>
        </div>
    );
}

export default HeroLink;
