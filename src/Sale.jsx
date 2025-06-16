import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Sale = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [step, setStep] = useState("sale"); // "sale" | "payment" | "processing" | "complete"

  const itemsList = [
    { name: "Apparel", price: 50 },
    { name: "Books", price: 20 },
    { name: "Candy", price: 5 },
    { name: "Drinks - Cold", price: 3 },
    { name: "Food - Fast", price: 15 },
    { name: "Gift Cards", price: 25 },
    { name: "Jewelry & Accessories", price: 40 },
    { name: "Kitchen & Home", price: 60 },
    { name: "Pet Supplies", price: 10 },
    { name: "Pub & Grub", price: 30 },
    { name: "Services", price: 100 },
    { name: "Snacks", price: 4 },
    { name: "Stuffed Animals", price: 12 },
    { name: "Swim", price: 35 },
    { name: "Tech & Electronics", price: 120 }
  ];

  const addItem = (item) => {
    setSelectedItems([...selectedItems, { ...item, qty: 1 }]);
  };

  const subtotal = selectedItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = +(subtotal * 0.07).toFixed(2);
  const total = +(subtotal + tax).toFixed(2);

  const handlePayment = () => {
    setStep("payment");
    setTimeout(() => setStep("processing1"), 1000);
    setTimeout(() => setStep("processing2"), 3000);
    setTimeout(() => setStep("complete"), 5000);
  };

  const renderCart = () => (
    <div style={{ width: 350, backgroundColor: "#eee", padding: 10 }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
        <span style={{ marginRight: 5 }}>👤</span>
        <strong>Trisha Smithers</strong>
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
          {selectedItems.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{(item.price * item.qty).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ textAlign: "right", fontSize: 14 }}>
        <div>Subtotal: {subtotal.toFixed(2)}</div>
        <div>Tax: {tax.toFixed(2)}</div>
        <div style={{ fontWeight: "bold" }}>Total: {total.toFixed(2)}</div>
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
  );

  const renderStep = () => {
    switch (step) {
      case "sale":
        return (
          <>
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
              <h3 style={{ margin: 0 }}>Sale - New ({selectedItems.length} items added)</h3>
              <div />
            </header>
            <div style={{ display: "flex", height: "calc(100% - 130px)" }}>
              <div style={{ flex: 1, padding: 10, overflowY: "auto" }}>
                <input
                  type="text"
                  placeholder="Search"
                  style={{ width: "100%", padding: 10, marginBottom: 10 }}
                />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {itemsList.map((item, i) => (
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
                        textAlign: "center",
                        cursor: "pointer"
                      }}
                      onClick={() => addItem(item)}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
              {renderCart()}
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
              <button onClick={handlePayment} style={{ background: "none", color: "white", border: "none" }}>
                💲 Submit/Pay
              </button>
              <button style={{ background: "none", color: "white", border: "none" }}>
                ⏸ Hold
              </button>
              <button style={{ background: "none", color: "white", border: "none" }}>
                🔁 Reset
              </button>
            </footer>
          </>
        );

      case "payment":
        return (
          <div style={{ padding: 30, backgroundColor: "#fffae0", height: "100vh" }}>
            <h2>Insert/Swipe/Tap</h2>
            <div style={{ background: "#99ccff", padding: 30, fontSize: 20 }}>Card</div>
            <div style={{ background: "yellow", padding: 10, fontWeight: "bold" }}>
              Balance {total.toFixed(2)}
            </div>
          </div>
        );

      case "processing1":
        return (
          <div style={{ padding: 50, backgroundColor: "#fff", height: "100vh", fontSize: 24 }}>
            ⏳ Processing...
          </div>
        );

      case "processing2":
        return (
          <div style={{ padding: 50, backgroundColor: "#fff", height: "100vh", fontSize: 24 }}>
            ✅ Remove Card
          </div>
        );

      case "complete":
        return (
          <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex: 1, backgroundColor: "#fff", padding: 40 }}>
              <h2>Receipt Options</h2>
              <button style={{ width: "100%", padding: 10, marginBottom: 10 }}>Print Receipt</button>
              <button style={{ width: "100%", padding: 10, marginBottom: 10 }}>Print Gift Receipt</button>
              <button style={{ width: "100%", padding: 10, marginBottom: 10 }}>Email Receipt</button>
              <div style={{ marginTop: 40, textAlign: "center" }}>
                <div style={{ backgroundColor: "#f44336", color: "white", borderRadius: "50%", width: 60, height: 60, display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>
                  SR
                </div>
                <p>Thank you for shopping with us! Visit us at www.suiteretail.com</p>
              </div>
            </div>
            {renderCart()}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>{renderStep()}</div>
    </div>
  );
};

export default Sale;
