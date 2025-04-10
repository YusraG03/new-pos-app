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

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: "#ccc", minHeight: "100vh" }}>
        <header
          style={{
            backgroundColor: "green",
            color: "white",
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2 style={{ margin: 0 }}>Open Register</h2>
          <span
            style={{ color: "lightblue", cursor: "pointer" }}
            onClick={kickDrawer}
          >
            Kick Drawer
          </span>
        </header>

        <div style={{ display: "flex", marginTop: 20, padding: 20 }}>
          {/* Left Side - Coins & Bills */}
          <div style={{ flex: 1, paddingRight: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>COINS</h3>
              <span style={{ fontWeight: "bold" }}>{coinTotal}</span>
            </div>

            {coins.map((val, i) => (
              <input
                key={i}
                type="number"
                step="0.01"
                placeholder="0.00"
                value={val}
                onChange={(e) => handleCoinChange(i, e.target.value)}
                style={{ width: "100%", marginBottom: 5 }}
              />
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <h3>BILLS</h3>
              <span
                onClick={resetBills}
                style={{ color: "blue", cursor: "pointer", fontSize: 14 }}
              >
                Set Bills to 0
              </span>
              <span style={{ fontWeight: "bold", marginLeft: "auto" }}>
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
                style={{ width: "100%", marginBottom: 5 }}
              />
            ))}

            <div style={{ marginTop: 10 }}>
              <strong>Currency in Drawer: {drawerTotal}</strong>
            </div>

            <button
              onClick={handleSubmit}
              style={{
                marginTop: 10,
                padding: 10,
                backgroundColor: "#223c74",
                color: "white",
                border: "none",
                width: "100%",
              }}
            >
              Submit
            </button>
          </div>

          {/* Right Side - Notes */}
          <div style={{ flex: 1 }}>
            <h3>NOTES</h3>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: "100%",
                height: 150,
                borderRadius: 6,
                padding: 10,
                border: "1px solid #ccc",
              }}
              placeholder="Write notes here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenRegister;
