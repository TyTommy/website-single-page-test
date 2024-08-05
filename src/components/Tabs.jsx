import React, { useState } from 'react';
import './TabsStyles.css';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = [
    'All',
    'UI Design',
    'UX Design',
    'Product Design',
    'Articles',
    'Tutorials',
    'News'
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`tab ${activeTab === tab ? 'active' : ''}`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
