import './Home.css';
import HeroLink from '../shared/HeroLink';

function Home() {

    let project = {
        title: 'Jay Mendoza | LinkedIn',
        description: 'This is just a link to my LinkedIn profile page. My LinkedIn profile ID is "STATICVOIDMAIN".',
        imageUrl: 'assets/images/linkedin-profile.jpg',
        linkHref: 'https://www.linkedin.com/in/staticvoidmain/'
    };

    return (
        <div className="index-page">
            <section>
                <h1>hello.</h1>
                <div className="paragraph">Welcome to my domain. This is a playground, and a bit of a showcase website about me. I have been updating this with whatever technology I wanted to learn and play with. It has undergone several changes. Currently, I have three versions of this site: Angular + TypeScript, React + JavaScript, and Blazor + C#. This one is the React version.</div>
                
                <div className="version-icon">
                    <span style={{backgroundImage: "url('assets/images/skills/react.png')"}}></span>
                    <span style={{backgroundImage: "url('assets/images/skills/javascript.png')"}}></span>
                </div>
                <nav>        
                    <a className="icon-link" href="https://blazor.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{backgroundImage: "url('assets/images/skills/angular.png')"}}></span>
                        <span style={{backgroundImage: "url('assets/images/skills/typescript.png')"}}></span>
                        <span className="icon-link-text">Angular | TS</span>
                    </a>
                    <a className="icon-link" href="https://github.com/jay-mendoza/svm-react" target="_blank"  rel="noreferrer">
                        <span style={{backgroundImage: "url('assets/images/skills/github.png')"}}></span>
                        <span className="icon-link-text">Source Code</span>
                    </a>
                    <a className="icon-link" href="https://react.staticvoidmain.dev" target="_blank"  rel="noreferrer">
                    <span style={{backgroundImage: "url('assets/images/skills/blazor.png')"}}></span>
                        <span style={{backgroundImage: "url('assets/images/skills/csharp.png')"}}></span>
                        <span className="icon-link-text">Blazor | C#</span>
                    </a>
                </nav>
                
                <nav className="main">
                    <a href="https://angular.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{backgroundImage: "url('assets/images/skills/angular.png')"}}></span>
                        <span style={{backgroundImage: "url('assets/images/skills/typescript.png')"}}></span>
                    </a>  
                    <a href="https://blazor.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{backgroundImage: "url('assets/images/skills/blazor.png')"}}></span>
                        <span style={{backgroundImage: "url('assets/images/skills/csharp.png')"}}></span>
                    </a>                    
                </nav>
                <div className="p">
                    I use <a href="https://materialdesignicons.com/" target="_blank" rel="noreferrer">Material Design Icons</a> for my icons.
                </div>
            </section>
            <section>
                <h1>who is jay ?</h1>
                <div className="paragraph">
                    <b>That would be me.</b> I work with software professionally. I also do it personally because it is a hobby. I like all things related to computers and everything digital. I love technology. I also love playing games, and when I get the time, I would do photography.
                </div>
                <div className="paragraph">
                    {HeroLink(project)}
                </div>
                <div className="paragraph">
                    I refer to myself as a computer engineer. I spent years getting my degrees in <a href="https://en.wikipedia.org/wiki/Computer_engineering" target="_blank" rel="noreferrer">Computer Engineering</a>. I am trained and educated to deal with electronics, software, hardware, and everything in between — although I never really got these to good use, as I have been doing software engineering for the entirety of my career.
                </div>
                <div className="paragraph">
                    Software-wise, I do full-stack, but I am especially gifted with front-end development. I would like the opportunity to work on other things as well, like embedded systems and mobile if given the chance. Aside from Technology, the automotive and aerospace industries interest me the most.
                </div>
            </section>
        </div>
    );
}

export default Home;
