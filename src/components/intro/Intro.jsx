import "./intro.scss";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image-container">
          <img src="assets/manikanta.png" alt="pic" />
        </div>
      </div>
      <div className="right">
        <div className="right-text">
          <h3>Hi, I am</h3>
          <h1>Manikanta Kayala</h1>
          <h2>Web developer</h2>
          <div className="description">
            I specialize in building{" "}
            <span>dynamic, user-focused web applications</span> with expertise
            in <span>front-end development</span> using{" "}
            <span>React, HTML, CSS,</span> and <span>JavaScript</span>, I create{" "}
            <span>responsive, high-performance designs</span> and follow best
            practices in UI standards. My skills range from{" "}
            <span>wireframing and mock-ups in Figma</span> to{" "}
            <span>backend development</span> with <span>Node.js</span> and{" "}
            <span>Express.js</span>, ensuring seamless{" "}
            <span>full-stack integration</span>. Focused on{" "}
            <span>performance optimization</span>,{" "}
            <span>cross-functional collaboration</span>, and leveraging{" "}
            <span>cloud technologies</span> like <span>AWS</span> and{" "}
            <span>Azure</span>, I consistently deliver{" "}
            <span>innovative, scalable solutions</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
