import React from "react"; 
function Feedback() {
  return (
    <div>
      <div className="fieldset-wrapper">
        <fieldset>
          <legend className="sr-only">Effects</legend>
          <input type="radio" id="blink-effect" name="effect" value="blink" checked className="sr-only" />
        </fieldset>
      </div>

      <nav>
        <ul className="indicator">
          <li><a href="#snapping"><span className="sr-only">Snapping</span></a></li>
          <li><a href="#scrolling"><span className="sr-only">Scrolling</span></a></li>
          <li><a href="#layout"><span className="sr-only">Layout</span></a></li>
          <li><a href="#transition"><span className="sr-only">Transition</span></a></li>
          <li><a href="#caveats"><span className="sr-only">Caveats</span></a></li>
        </ul>
      </nav>

      <main>
        <section id="snapping" className="section">
          <div className="content">
            <h2><strong>First</strong>, we set up the <em>snapping</em> points</h2>
            <div className="text">
              <img src="https://assets.codepen.io/197359/flower-white.png" alt="" />
            </div>
          </div>
        </section>
        <section id="scrolling" className="section">
          <div className="content">
            <h2><strong>Next</strong>, we set up the <em>scrolling</em> animation</h2>
            <div className="text">
              <img src="https://assets.codepen.io/197359/flower-yellow.png" alt="" />
            </div>
          </div>
        </section>
        <section id="layout" className="section">
          <div className="content">
            <h2><strong>Then</strong>, we position a <em>fixed</em> layout</h2>
            <div className="text">
              <img src="https://assets.codepen.io/197359/flower-blue.png" alt="" />
            </div>
          </div>
        </section>
        <section id="transition" className="section">
          <div className="content">
            <h2><strong>Finally</strong>, we create the <em>transition</em> effects</h2>
            <div className="text">
              <img src="https://assets.codepen.io/197359/flower-red.png" alt="" />
            </div>
          </div>
        </section>
        <section id="caveats" className="section">
          <div className="content">
            <h2><strong>Caveats</strong></h2>
            <div className="text">
              <img src="https://assets.codepen.io/197359/flower-purple.png" alt="" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>That's it <span className="emoji">🌸</span></p>
      </footer>
    </div>
  );
}

export default Feedback;
