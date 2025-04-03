import React from 'react';
import './Dashboard.css';
import PendingTasksChart from './charts/PendingTasksChart';
import PerformanceChart from './charts/PerformanceChart.jsx';
import CompletedWorkChart from './charts/CompletedWorkChart';
import NotificationsChart from './charts/NotificationsChart';
import WorkloadHeatmap from './charts/WorkloadHeatmap';
import ProjectSuccessChart from './charts/ProjectSuccessChart';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p className="dashboard-description">
        Welcome to your workflow dashboard. Here you can track your team's progress, manage tasks, and analyze performance.
      </p>
     
      <div className="dashboard-grid">
        <div className="widget">
          <div className="widget-header">
            <h2 className="widget-title">Pending Tasks</h2>
          </div>
          <div className="widget-content">
            <PendingTasksChart />
          </div>
        </div>
       
        <div className="widget">
          <div className="widget-header">
            <h2 className="widget-title">Performance Improvement</h2>
          </div>
          <div className="widget-content">
            <PerformanceChart />
          </div>
        </div>
       
        <div className="widget large-widget">
          <div className="widget-header">
            <h2 className="widget-title">Completed Work Overview</h2>
          </div>
          <div className="widget-content">
            <CompletedWorkChart />
          </div>
        </div>
       
        <div className="widget">
          <div className="widget-header">
            <h2 className="widget-title">Notifications</h2>
          </div>
          <div className="widget-content">
            <NotificationsChart />
          </div>
        </div>
       
        <div className="widget large-widget">
          <div className="widget-header">
            <h2 className="widget-title">Workload Distribution</h2>
          </div>
          <div className="widget-content">
            <WorkloadHeatmap />
          </div>
        </div>
       
        <div className="widget large-widget">
          <div className="widget-header">
            <h2 className="widget-title">Project Success & Failure</h2>
          </div>
          <div className="widget-content">
            <ProjectSuccessChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;