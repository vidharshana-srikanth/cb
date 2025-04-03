import React, { useState } from 'react';
import './ChatSystem.css';
const ChatSystem = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: 'Hi team, I need an update on Project Alpha', time: '10:32 AM', own: false, priority: 'high' },
    { id: 2, sender: 'You', content: 'I\'m working on the UI components, should be done by tomorrow', time: '10:35 AM', own: true },
    { id: 3, sender: 'Emily Chen', content: 'Backend API is ready for integration @you', time: '10:38 AM', own: false, tagged: true },
    { id: 4, sender: 'John Doe', content: 'Great! Let\'s schedule a meeting to discuss integration', time: '10:40 AM', own: false }
  ]);
 
  const [chatGroups, setChatGroups] = useState([
    { id: 1, name: 'Team Alpha', unread: 2 },
    { id: 2, name: 'Project Beta', unread: 0 },
    { id: 3, name: 'Marketing', unread: 5 },
    { id: 4, name: 'Design', unread: 0 }
  ]);
 
  const [directMessages, setDirectMessages] = useState([
    { id: 1, name: 'John Doe', status: 'online', unread: 1 },
    { id: 2, name: 'Emily Chen', status: 'online', unread: 0 },
    { id: 3, name: 'Mike Johnson', status: 'offline', unread: 0 },
    { id: 4, name: 'Sarah Williams', status: 'away', unread: 3 }
  ]);
 
  const [newMessage, setNewMessage] = useState('');
  const [activeChat, setActiveChat] = useState('Team Alpha');
  const [chatView, setChatView] = useState('groups');
 
  const sendMessage = () => {
    if (newMessage.trim() === '') return;
   
    const message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      own: true
    };
   
    setMessages([...messages, message]);
    setNewMessage('');
  };
 
  return (
    <div className="chat-container">
      <div className="chat-sidebar">
        <div className="chat-sidebar-tabs">
          <button
            className={`tab ${chatView === 'groups' ? 'active' : ''}`}
            onClick={() => setChatView('groups')}
          >
            Groups
          </button>
          <button
            className={`tab ${chatView === 'direct' ? 'active' : ''}`}
            onClick={() => setChatView('direct')}
          >
            Direct Messages
          </button>
        </div>
       
        <div className="chat-search">
          <input type="text" placeholder="Search conversations..." />
        </div>
       
        <div className="chat-list">
          {chatView === 'groups' ? (
            chatGroups.map(group => (
              <div
                key={group.id}
                className={`chat-item ${activeChat === group.name ? 'active' : ''}`}
                onClick={() => setActiveChat(group.name)}
              >
                <div className="chat-item-name">{group.name}</div>
                {group.unread > 0 && (
                  <div className="unread-badge">{group.unread}</div>
                )}
              </div>
            ))
          ) : (
            directMessages.map(dm => (
              <div
                key={dm.id}
                className={`chat-item ${activeChat === dm.name ? 'active' : ''}`}
                onClick={() => setActiveChat(dm.name)}
              >
                <div className="chat-item-avatar">{dm.name.charAt(0)}</div>
                <div className="chat-item-details">
                  <div className="chat-item-name">{dm.name}</div>
                  <div className={`status ${dm.status}`}>{dm.status}</div>
                </div>
                {dm.unread > 0 && (
                  <div className="unread-badge">{dm.unread}</div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
     
      <div className="chat-main">
        <div className="chat-header">
          <div className="chat-header-info">
            <h2>{activeChat}</h2>
            <div className="chat-header-meta">
              4 members • 2 online
            </div>
          </div>
          <div className="chat-header-actions">
            <button aria-label="Video call">📹</button>
            <button aria-label="Schedule meeting">📅</button>
            <button aria-label="More options">⋯</button>
          </div>
        </div>
       
        <div className="chat-messages">
          {messages.map(message => (
            <div key={message.id} className={`message ${message.own ? 'own' : ''}`}>
              {!message.own && (
                <div className="message-avatar">
                  {message.sender.charAt(0)}
                </div>
              )}
              <div className={`message-bubble ${message.priority === 'high' ? 'high-priority' : ''}`}>
                {!message.own && (
                  <div className="message-sender">{message.sender}</div>
                )}
                <div className="message-content">{message.content}</div>
                <div className="message-time">{message.time}</div>
              </div>
            </div>
          ))}
        </div>
       
        <div className="chat-input">
          <button aria-label="Attach file">📎</button>
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <select aria-label="Message priority" className="priority-selector">
            <option value="normal">Normal</option>
            <option value="high">High Priority</option>
          </select>
          <button onClick={sendMessage} aria-label="Send message">▶</button>
        </div>
      </div>
    </div>
  );
};

export default ChatSystem;