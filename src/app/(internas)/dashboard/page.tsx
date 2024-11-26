"use client";

import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";
import Pagina from "@/app/components/template/Pagina";

//componentes do Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export default function DashboardLayout() {
  const [openModal, setOpenModal] = useState(false); 
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  const combinedSalesData = {
    labels: ["18-24", "25-34", "35-44", "45-54", "55+"], 
    datasets: [
      {
        label: "Masculino",
        data: [30, 67, 59, 22, 38], 
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
      {
        label: "Feminino",
        data: [22, 40, 30, 13, 76], 
        borderColor: "#FF6384",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  //vendas feitas vs não feitas
  const salesVsNonSalesData = {
    labels: ["Vendas Feitas", "Vendas Não Feitas"],
    datasets: [
      {
        label: "Vendas",
        data: [300, 200], 
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  // vendas por plataforma
  const platformSalesData = {
    labels: ["Instagram", "Facebook", "Twitter"],
    datasets: [
      {
        label: "Vendas por Plataforma",
        data: [150, 200, 120], 
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF3B3B", "#2a8ab3", "#FFB64D", "#3fa7a7"],
      },
    ],
  };

  // modal de busca
  const openSearchModal = () => setOpenModal(true);
  const closeSearchModal = () => setOpenModal(false);

  return (
    <Pagina>
      <div
        style={{
          padding: "20px",
          backgroundColor: "#121212", 
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "36px", 
              fontWeight: "bold",
              color: "#fff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", 
            }}
          >
            Dashboard
          </h1>

  
          <button
            onClick={openSearchModal}
            style={{
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#36A2EB",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.target as HTMLElement).style.backgroundColor = "#2a8ab3"
            }
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.target as HTMLElement).style.backgroundColor = "#36A2EB"
            }
          >
            Filtrar
          </button>
        </div>

        {/* Linha topo */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1e1e1e", 
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Vendas Feitas</h3>
            <p>300</p>
          </div>
          <div
            style={{
              backgroundColor: "#1e1e1e", 
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Vendas Não Feitas</h3>
            <p>200</p>
          </div>
          <div
            style={{
              backgroundColor: "#1e1e1e", 
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Taxa de Conversão</h3>
            <p>60%</p> 
          </div>
          <div
            style={{
              backgroundColor: "#1e1e1e", 
              padding: "15px",
              borderRadius: "8px",
              textAlign: "center",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3>Leads Gerados</h3>
            <p>500</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", 
            gap: "20px",
          }}
        >
          <div
            style={{
              backgroundColor: "#1e1e1e", 
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "100%", 
              display: "flex",  
              flexDirection: "column",
            }}
          >
            <h3>Vendas por Idade (Masculino e Feminino)</h3>
            <div style={{ flexGrow: 1 }}>
              <Line data={combinedSalesData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#1e1e1e"
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "100%",
              display: "flex", 
              flexDirection: "column",
            }}
          >
            <h3>Vendas Feitas vs Não Feitas</h3>
            <div style={{ flexGrow: 1 }}>
              <Bar data={salesVsNonSalesData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#1e1e1e", 
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "100%", 
              display: "flex", 
              flexDirection: "column",
            }}
          >
            <h3>Vendas por Plataforma</h3>
            <div style={{ flexGrow: 1 }}>
              <Pie data={platformSalesData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>
        </div>

        {/* Modal de Filtro */}
        {openModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#212121",
                padding: "30px",
                borderRadius: "8px",
                minWidth: "300px",
                color: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "15px",
                }}
              >
                <h3 style={{ margin: 0 }}>Filtro</h3>
                <button
                  onClick={closeSearchModal}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#FF6384",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  ✖
                </button>
              </div>

              {/* Seletor de Post */}
              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="post" style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Selecione o Post:
                </label>
                <select
                  id="post"
                  value={selectedPost}
                  onChange={(e) => setSelectedPost(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "6px",
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    border: "1px solid #333",
                  }}
                >
                  <option value="">Selecione um Post</option>
                  <option value="Post 1">Post 1</option>
                  <option value="Post 2">Post 2</option>
                  <option value="Post 3">Post 3</option>
                </select>
              </div>

              {/* Seletor de Data */}
              <div>
                <label htmlFor="data" style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Selecione a Data:
                </label>
                <input
                  type="date"
                  id="data"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "6px",
                    backgroundColor: "#1e1e1e",
                    color: "#fff",
                    border: "1px solid #333",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <button
                  onClick={closeSearchModal}
                  style={{
                    backgroundColor: "#36A2EB",
                    padding: "10px 20px",
                    color: "#fff",
                    borderRadius: "6px",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  Aplicar Filtro
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Pagina>
  );
}
