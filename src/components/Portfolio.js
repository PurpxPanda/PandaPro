import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project">
        <img src="project1-thumbnail.jpg" alt="Project 1" />
        <h3>Project 1</h3>
        <p>Description of Project 1.</p>
        <a href="project1-demo-link">Demo</a>
        <a href="project1-github-link">GitHub</a>
      </div>
      {/* Repeat the above structure for other projects */}
    </section>
  );
};

export default Portfolio;
