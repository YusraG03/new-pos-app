import React from "react";
import Sidebar from "./Sidebar";

const Sale = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: "#ccc", height: "100vh" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
            borderBottom: "3px solid #00f",
          }}
        >
          <h3 style={{ margin: 0 }}>Sale - New (no items added)</h3>
          <div />
        </header>

        <div style={{ display: "flex", height: "calc(100% - 130px)" }}>
          {/* Left - Item grid & search */}
          <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
            <input
              type="text"
              placeholder="Search"
              style={{ width: "100%", padding: 10, marginBottom: 10 }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "Apparel", "Books", "Candy", "Drinks - Cold", "Food - Fast",
                "Gift Cards", "Jewelry & Accessories", "Kitchen & Home",
                "Pet Supplies", "Pub & Grub", "Services", "Snacks",
                "Stuffed Animals", "Swim", "Tech & Electronics"
              ].map((cat, i) => (
                <div
                  key={i}
                  style={{
                    width: "22%",
                    height: 60,
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: 12,
                    textAlign: "center"
                  }}
                >
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Cart */}
          <div style={{ width: 350, backgroundColor: "#eee", padding: 10 }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
              <span style={{ marginRight: 5 }}>👤</span>
              <strong>Anonymous NYC</strong>
            </div>
            <table style={{ width: "100%", fontSize: 14, marginBottom: 10 }}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Unit</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Breville Gourmet Baker</td>
                  <td>1</td>
                  <td>179.00</td>
                  <td>179.00</td>
                </tr>
              </tbody>
            </table>

            <div style={{ textAlign: "right", fontSize: 14 }}>
              <div>Subtotal: 179.00</div>
              <div>Tax: 12.53</div>
              <div style={{ fontWeight: "bold" }}>Total: 191.53</div>
            </div>

            <div style={{ marginTop: 20 }}>
              <div>SO</div>
              <button style={{ width: "100%", padding: 10 }}>Sales Rep</button>
              <textarea
                placeholder="Notes"
                style={{ width: "100%", height: 60, marginTop: 5 }}
              />
            </div>
          </div>
        </div>

        <footer
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: 15,
            backgroundColor: "#084c5e",
            color: "white"
          }}
        >
          <button style={{ background: "none", color: "white", border: "none" }}>
            💲 Submit/Pay
          </button>
          <button style={{ background: "none", color: "white", border: "none" }}>
            ⏸ Hold
          </button>
          <button style={{ background: "none", color: "white", border: "none" }}>
            🔁 Reset
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Sale;