import { useState } from "react";
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
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <div
        style={{
          width: isOpen ? 250 : 0,
          backgroundColor: "#ddd",
          transition: "width 0.3s",
          overflow: "hidden",
          height: "100vh",
          padding: isOpen ? "20px 10px" : "0",
          boxSizing: "border-box",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            backgroundColor: "#c75a15",
            color: "white",
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

        {/* Menu */}
        {[menuItems1, menuItems2, menuItems3].map((group, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            {group.map((item) => (
              <div
                key={item}
                onClick={() => handleMenuClick(item)}
                style={{
                  padding: "12px 15px",
                  backgroundColor: "white",
                  borderBottom: "1px solid #ccc",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {item} <span>&gt;</span>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div style={{ padding: 10 }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            fontSize: 20,
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
