import React, { useState } from 'react';
import './Menus.css';
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import AdminProfileModal from './AdminProfileModal';
import Admintable from './Admintable';
import CustomerTable from './CustomerTable';
import AgentTable from './AgentTable';
import { FaTicketAlt, FaUsers, FaUserTie, FaUserCircle } from 'react-icons/fa'; // Importing icons
import { useNavigate } from 'react-router-dom';
const Menus = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAdminTableOpen, setIsAdminTableOpen] = useState(false);
  const [isCustomerTableOpen, setIsCustomerTableOpen] = useState(false);
  const [isAgentTableOpen, setIsAgentTableOpen] = useState(false);
  const navigate = useNavigate();
  const openProfileModal = () => setIsProfileModalOpen(true);
  const closeProfileModal = () => setIsProfileModalOpen(false);
  const openAdminTable = () => navigate('/admintable');
  const closeAdminTable = () => setIsAdminTableOpen(false);
  const openCustomerTable = () => navigate('/customertable');
  const closeCustomerTable = () => setIsCustomerTableOpen(false);
  const openAgentTable = () => navigate('/agenttable');
  const closeAgentTable = () => setIsAgentTableOpen(false);
  const openAgentModal = () => navigate('/agentform', { state: { message: 'signup' } });
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-heading" onClick={openProfileModal}>
          <Zoom>
            <h2 style={{color: 'Yellow'}}>Help Desk</h2>
          </Zoom>
        </div>

        <div className="nav-items">
          <Fade left>
            <div className="nav-item">
              <Link to="#" className="nav-link" onClick={openAdminTable}>
                <FaTicketAlt className="nav-icon" /> See All Tickets
              </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="nav-item">
              <Link to="#" className="nav-link" onClick={openCustomerTable}>
                <FaUsers className="nav-icon" /> See All Customers
              </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="nav-item">
              <Link to="#" className="nav-link" onClick={openAgentTable}>
                <FaUserTie className="nav-icon" /> See All Agents
              </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="nav-item">
              <Link to="#" className="nav-link" onClick={openAgentModal}>
                <FaUserCircle className="nav-icon" /> Register an agent
              </Link>
            </div>
          </Fade>
          <Fade left>
            <div className="nav-item">
              <Link to="#" className="nav-link" onClick={openProfileModal}>
                <FaUserCircle className="nav-icon" /> Profile
              </Link>
            </div>
          </Fade>
        </div>
      </div>

      {isProfileModalOpen && <AdminProfileModal onClose={closeProfileModal} />}
      {isAdminTableOpen && <Admintable onClose={closeAdminTable} />}
      {isCustomerTableOpen && <CustomerTable onClose={closeCustomerTable} />}
      {isAgentTableOpen && <AgentTable onClose={closeAgentTable} />}
    </>
  );
};

export default Menus;
