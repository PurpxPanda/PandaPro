import React from 'react';

const Portfolio = () => {
  return (
    <div className="stack">
  <div className="card shadow-md bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">HydroHomies</h2> 
      <p>A fully functional E-Commerce App</p>
    </div>
  </div> 
  <div className="card shadow bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Notification 2</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div> 
  <div className="card shadow-sm bg-primary text-primary-content">
    <div className="card-body">
      <h2 className="card-title">Notification 3</h2> 
      <p>You have 3 unread messages. Tap here to see.</p>
    </div>
  </div>
</div>

  );
};

export default Portfolio;
