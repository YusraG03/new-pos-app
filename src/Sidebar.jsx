// Sidebar.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

  const handleMenuClick = (item) => {
    switch (item) {
      case "Sale":
        navigate("/sale");
        break;
      case "Sign Out":
        handleSignOut();
        break;
      default:
        alert(`${item} clicked`);
    }
  };

  const menuItems1 = ["Sale", "Return", "Search"];
  const menuItems2 = ["Netsuite", "SuiteRetail.com", "Open/Close"];
  const menuItems3 = ["Sign Out"];

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? 250 : 0,
          backgroundColor: "#2d2d2d",
          color: "#f1f1f1",
          transition: "width 0.3s",
          overflow: "hidden",
          padding: isOpen ? "20px 10px" : "0",
          boxSizing: "border-box",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            backgroundColor: "#c75a15",
            color: "#ffffff",
            width: 80,
            height: 80,
            borderRadius: "50%",
            fontSize: 24,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            marginBottom: 20,
          }}
        >
          SR
        </div>

        {/* Menu Groups */}
        {[menuItems1, menuItems2, menuItems3].map((group, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            {group.map((item) => (
              <div
                key={item}
                onClick={() => handleMenuClick(item)}
                style={{
                  padding: "12px 15px",
                  backgroundColor: "#3e3e3e",
                  color: "#f1f1f1",
                  borderBottom: "1px solid #555555",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  userSelect: "none",
                }}
              >
                <span>{item}</span>
                <span>&gt;</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div style={{ padding: 10 }}>
        <button
          onClick={() => setIsOpen((open) => !open)}
          style={{
            fontSize: 20,
            background: "none",
            border: "1px solid #f1f1f1",
            borderRadius: 4,
            color: "#f1f1f1",
            cursor: "pointer",
            padding: 8,
          }}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
