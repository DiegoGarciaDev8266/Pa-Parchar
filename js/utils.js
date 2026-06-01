// ═══════════════════════════════════════════════
//  PA PARCHAR — Utilidades Compartidas
// ═══════════════════════════════════════════════

import { MESES, DIAS } from "./datos.js";

// ── FORMATO MONEDA ───────────────────────────────
export const fmt    = n => "$" + Number(n).toLocaleString("es-CO");
export const fmtK   = n => n >= 1000 ? "$" + (n/1000).toFixed(0) + "k" : fmt(n);

// ── FECHAS ───────────────────────────────────────
export const hoyStr = () => new Date().toISOString().split("T")[0];

export function fechaLegible(fecha) {
  const d = fecha?.toDate ? fecha.toDate() : new Date(fecha);
  return `${d.getDate()} ${MESES[d.getMonth()].substring(0,3)} ${d.getFullYear()}`;
}

export function toDate(fecha) {
  return fecha?.toDate ? fecha.toDate() : new Date(fecha);
}

// ── EMOJI POR PRODUCTO ───────────────────────────
const EMOJI_MAP = {
  "Hamburguesa Clásica":"🍔", "Doble Carne":"🥩",
  "Combo Parchar":"🎉",       "Perro Caliente":"🌭",
  "Veggie Burger":"🥗",       "Papas Fritas":"🍟",
  "Papas Gajo":"🥔",          "Aros de Cebolla":"🧅",
  "Gaseosa":"🥤",             "Jugo Natural":"🍹",
  "Limonada":"🍋",            "Agua":"💧",
};
export const getEmoji = nombre => EMOJI_MAP[nombre] || "🍽️";

// ── ALERT TEMPORAL ───────────────────────────────
export function showAlert(id, tipo, msg, ms = 3000) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${tipo} show`;
  el.innerHTML = msg;
  setTimeout(() => el.className = "alert", ms);
}

// ── SIDEBAR ACTIVO ───────────────────────────────
export function setSidebarActive(href) {
  document.querySelectorAll(".nav-item").forEach(el => {
    el.classList.toggle("active", el.getAttribute("href") === href);
  });
}

// ── FECHA EN TOPBAR ──────────────────────────────
export function setFechaTopbar(id = "fecha-hoy") {
  const ahora = new Date();
  const el = document.getElementById(id);
  if (el) el.textContent =
    `${DIAS[ahora.getDay()]} ${ahora.getDate()} ${MESES[ahora.getMonth()].substring(0,3)} ${ahora.getFullYear()}`;
}

// ── SALUDO ───────────────────────────────────────
export function getSaludo() {
  const h = new Date().getHours();
  if (h < 12) return "¡Buenos días! 🌅";
  if (h < 18) return "¡Buenas tardes! ☀️";
  return "¡Buenas noches! 🌙";
}

// ── BADGE INVENTARIO (sidebar) ───────────────────
export async function actualizarBadgeInv(db, collection, getDocs) {
  try {
    const snap = await getDocs(collection(db, "inventario"));
    let alertas = 0;
    snap.forEach(d => {
      const data = d.data();
      if (Number(data.cantidad) <= Number(data.minimo)) alertas++;
    });
    const badge = document.getElementById("badge-inv");
    if (badge) {
      badge.textContent = alertas;
      badge.style.display = alertas > 0 ? "inline-flex" : "none";
    }
  } catch(e) { /* silencioso */ }
}

// ── SEED DATOS INICIALES ─────────────────────────
export async function seedData(db, { collection, getDocs, setDoc, addDoc, doc },
                                   { PRODUCTOS_BASE, INVENTARIO_BASE }) {
  try {
    const snapProd = await getDocs(collection(db, "Productos"));
    if (snapProd.size <= 1) {
      for (const p of PRODUCTOS_BASE) {
        await setDoc(doc(db, "Productos", p.id), { ...p, activo: true });
      }
    }
    const snapInv = await getDocs(collection(db, "inventario"));
    if (snapInv.size <= 1) {
      for (const item of INVENTARIO_BASE) {
        await addDoc(collection(db, "inventario"), item);
      }
    }
  } catch(e) { console.warn("Seed:", e.message); }
}

export const PALETA = ["#2563EB","#3B82F6","#60A5FA","#93C5FD","#BFDBFE","#DBEAFE",
                       "#1D4ED8","#60A5FA","#818CF8","#34D399","#F59E0B","#EF4444"];

export const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: { font:{ family:"Outfit", size:11 }, color:"#334155", padding:12, boxWidth:12 }
    }
  },
  scales: {
    x: { grid:{ display:false }, ticks:{ font:{ family:"Outfit", size:11 }, color:"#94A3B8" } },
    y: { grid:{ color:"#F1F5F9" }, ticks:{ font:{ family:"Outfit", size:11 }, color:"#94A3B8",
          callback: v => "$" + (v >= 1000 ? (v/1000).toFixed(0)+"k" : v) } }
  }
};
