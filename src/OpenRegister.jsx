import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const OpenRegister = () => {
  const [coins, setCoins] = useState(Array(5).fill(""));
  const [bills, setBills] = useState(Array(5).fill(""));
  const [notes, setNotes] = useState("");

  const navigate = useNavigate();

  const handleCoinChange = (index, value) => {
    const updated = [...coins];
    updated[index] = value;
    setCoins(updated);
  };

  const handleBillChange = (index, value) => {
    const updated = [...bills];
    updated[index] = value;
    setBills(updated);
  };

  const sum = (arr) =>
    arr.reduce((total, val) => total + (parseFloat(val) || 0), 0);

  const coinTotal = sum(coins).toFixed(2);
  const billTotal = sum(bills).toFixed(2);
  const drawerTotal = (parseFloat(coinTotal) + parseFloat(billTotal)).toFixed(2);

  const resetBills = () => setBills(Array(5).fill(""));

  const handleSubmit = () => {
    alert(
      `🧾 Submitted!\nCoins: ${coinTotal}\nBills: ${billTotal}\nTotal: ${drawerTotal}\nNotes: ${notes}`
    );
    navigate("/sale");
  };

  const kickDrawer = () => {
    alert("🦵 Drawer kicked!");
  };

  // Common styles
  const inputStyle = {
    width: "100%",
    marginBottom: 8,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: 4,
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: "#f4f4f4", minHeight: "100vh" }}>
        <header
          style={{
            backgroundColor: "#2E7D32", // darker green
            color: "#fff",
            padding: "12px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 24 }}>Open Register</h2>
          <span
            style={{ color: "#BBDEFB", cursor: "pointer", fontSize: 16 }}
            onClick={kickDrawer}
          >
            Kick Drawer
          </span>
        </header>

        <div style={{ display: "flex", marginTop: 20, padding: "0 20px" }}>
          {/* Left Side - Coins & Bills */}
          <div style={{ flex: 1, paddingRight: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ color: "#333", margin: 0, fontSize: 18 }}>COINS</h3>
              <span style={{ fontWeight: "bold", fontSize: 18, color: "#333" }}>
                {coinTotal}
              </span>
            </div>

            {coins.map((val, i) => (
              <input
                key={i}
                type="number"
                step="0.01"
                placeholder="0.00"
                value={val}
                onChange={(e) => handleCoinChange(i, e.target.value)}
                style={inputStyle}
              />
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 16,
              }}
            >
              <h3 style={{ color: "#333", margin: 0, fontSize: 18 }}>BILLS</h3>
              <span
                onClick={resetBills}
                style={{ color: "#1976D2", cursor: "pointer", fontSize: 14 }}
              >
                Reset
              </span>
              <span style={{ fontWeight: "bold", fontSize: 18, color: "#333" }}>
                {billTotal}
              </span>
            </div>

            {bills.map((val, i) => (
              <input
                key={i}
                type="number"
                step="0.01"
                placeholder="0.00"
                value={val}
                onChange={(e) => handleBillChange(i, e.target.value)}
                style={inputStyle}
              />
            ))}

            <div style={{ marginTop: 16 }}>
              <strong style={{ fontSize: 16, color: "#333" }}>
                Currency in Drawer: {drawerTotal}
              </strong>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                marginTop: 16,
                padding: 12,
                backgroundColor: "#1A237E",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                width: "100%",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </div>

          {/* Right Side - Notes */}
          <div style={{ flex: 1 }}>
            <h3 style={{ color: "#333", fontSize: 18 }}>NOTES</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write notes here..."
              style={{
                ...inputStyle,
                height: 180,
                resize: "vertical",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenRegister;
