/**
 * po_generation_storage.js
 * Storage untuk PO Generation — PO yang di-generate dari DO Draft.
 */

const PO_GEN_KEY = "IBOCS_po_generation";

/* ─── Demo Data ─────────────────────────────────────────────── */
const PO_GEN_DEMO = [];

/* ─── Storage Functions ─────────────────────────────────────── */
function poGenLoadAll() {
    try {
        const raw = localStorage.getItem(PO_GEN_KEY);
        if (raw) return JSON.parse(raw);
    } catch(e) {}
    localStorage.setItem(PO_GEN_KEY, JSON.stringify(PO_GEN_DEMO));
    return [];
}

function poGenSaveAll(list) {
    localStorage.setItem(PO_GEN_KEY, JSON.stringify(list));
}

function poGenGet(id) {
    return poGenLoadAll().find(p => p.id === id) || null;
}

function poGenSave(po) {
    const list = poGenLoadAll();
    const idx = list.findIndex(p => p.id === po.id);
    if (idx >= 0) list[idx] = po;
    else list.unshift(po);
    poGenSaveAll(list);
}

function poGenNextId() {
    const list = poGenLoadAll();
    const nums = list.map(p => parseInt(p.id.replace("PO-GEN-", ""), 10)).filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "PO-GEN-" + String(next).padStart(3, "0");
}

console.log("[IBOCS] po_generation_storage.js loaded");
