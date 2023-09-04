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
                <div className="paragraph">
                    <b>Welcome to My Digital Playground.</b> You've landed on a dynamic canvas that's both a reflection of my journey and a testament to my passion for technology. This site has evolved over time, adapting and reshaping as I explored and mastered new tools and languages. Presently, there are three distinct versions of this platform: Angular with TypeScript, Blazor with C#, and the one you're currently browsing — .React with JavaScript
                </div>

                <div className="version-icon">
                    <span style={{ backgroundImage: "url('assets/images/skills/react.png')" }}></span>
                    <span style={{ backgroundImage: "url('assets/images/skills/javascript.png')" }}></span>
                </div>
                <nav>
                    <a className="icon-link" href="https://angular.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{ backgroundImage: "url('assets/images/skills/angular.png')" }}></span>
                        <span style={{ backgroundImage: "url('assets/images/skills/typescript.png')" }}></span>
                        <span className="icon-link-text">Angular | TS</span>
                    </a>
                    <a className="icon-link" href="https://github.com/jay-mendoza/svm-react" target="_blank" rel="noreferrer">
                        <span style={{ backgroundImage: "url('assets/images/skills/github.png')" }}></span>
                        <span className="icon-link-text">Source Code</span>
                    </a>
                    <a className="icon-link" href="https://blazor.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{ backgroundImage: "url('assets/images/skills/blazor.png')" }}></span>
                        <span style={{ backgroundImage: "url('assets/images/skills/csharp.png')" }}></span>
                        <span className="icon-link-text">Blazor | C#</span>
                    </a>
                </nav>

                <nav className="main">
                    <a href="https://angular.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{ backgroundImage: "url('assets/images/skills/angular.png')" }}></span>
                        <span style={{ backgroundImage: "url('assets/images/skills/typescript.png')" }}></span>
                    </a>
                    <a href="https://blazor.staticvoidmain.dev" target="_blank" rel="noreferrer">
                        <span style={{ backgroundImage: "url('assets/images/skills/blazor.png')" }}></span>
                        <span style={{ backgroundImage: "url('assets/images/skills/csharp.png')" }}></span>
                    </a>
                </nav>
                <div className="p">
                    Dive in and witness the versatility of my craft. Click on the links above ↑ to see other versions, as well as the source code for this version. I use <a href="https://materialdesignicons.com/" target="_blank" rel="noreferrer">Material Design Icons</a> for my icons.
                </div>
            </section>
            <section>
                <h1>who is jay ?</h1>
                <div className="paragraph">
                    <b>That would be me</b>, a passionate Computer Engineer with a deep affinity for all things digital. My journey began with an extensive education in <a href="https://en.wikipedia.org/wiki/Computer_engineering" target="_blank" rel="noreferrer">Computer Engineering</a>, where I delved into the intricacies of electronics, software, and hardware. While my career has primarily been rooted in software engineering, this foundation has been instrumental in shaping my holistic understanding of the digital landscape.
                </div>
                {/* <div className="paragraph">
                    {HeroLink(project)}
                </div> */}
                <div className="paragraph">
                    What drives me? A genuine love for technology, from the thrill of gaming to the artistry of photography. My strengths lie in full-stack development, with a notable flair for front-end. Yet, my versatile skill set and insatiable curiosity keep me open to exploring opportunities in areas like embedded systems and mobile development.
                </div>
                <div className="paragraph">
                    Let's dive into the digital realm together.
                </div>
            </section>
        </div>
    );
}

export default Home;
