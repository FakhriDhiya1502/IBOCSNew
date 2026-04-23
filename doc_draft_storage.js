/**
 * doc_draft_storage.js
 * Shared storage & demo data untuk DO Draft DOC.
 */

const DOC_DRAFT_KEY = "IBOCS_doc_drafts_v2";

/* ─── Demo Data ─────────────────────────────────────────────── */
const DOC_DRAFT_DEMO = [
    {
        id: "DOD-001",
        date: "2026-04-18",
        docType: "internal",
        forecastRef: "FC-001",
        forecastDesc: "Broiler Cycle 18",
        customer: "CUST-001",
        customerName: "PT TOP Distribusi",
        warehouse: "WH-KDG01",
        warehouseName: "Gudang Kandang 01",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [
            {
                id: "L1",
                brand: "BRD-001", brandName: "Cobb 500",
                itemBefore: "DOC Broiler Cobb 500", uomBefore: "Ekor",
                qtyBefore: 10000, priceBefore: null,
                afterItems: [
                    { id: "A1", itemAfter: "DOC Broiler Cobb 500", uomAfter: "Ekor", qtyAfter: 10500, priceAfter: null }
                ]
            }
        ],
        status: "Draft",
        doNumber: null,
        createdBy: "admin_hatchery",
        createdAt: "2026-04-18"
    },
    {
        id: "DOD-002",
        date: "2026-04-19",
        docType: "external",
        forecastRef: "FC-002",
        forecastDesc: "Broiler Cycle 18",
        customer: "CUST-001",
        customerName: "PT TOP Distribusi",
        warehouse: "WH-KDG02",
        warehouseName: "Gudang Kandang 02",
        externalVendor: "EV-001",
        externalVendorName: "PT Sumber Bibit Nusantara",
        noSuratJalan: "SJ/2026/0042",
        tglSuratJalan: "2026-04-19",
        noPol: "BK 1234 AB",
        soRef: "SO-202604-010", soDate: "2026-04-18",
        lines: [
            {
                id: "L1",
                brand: "BRD-002", brandName: "Ross 308",
                itemBefore: "DOC Broiler Ross 308", uomBefore: "Ekor",
                qtyBefore: 5000, priceBefore: 8000,
                afterItems: [
                    { id: "A1", itemAfter: "DOC Broiler Ross 308", uomAfter: "Ekor", qtyAfter: 5000, priceAfter: 9500 }
                ]
            }
        ],
        status: "DO Generated",
        doNumber: "DO-001",
        grpoNumber: "GRPO-001",
        createdBy: "admin_hatchery",
        createdAt: "2026-04-19"
    },
    {
        id: "DOD-004",
        date: "2026-04-20",
        docType: "internal",
        forecastRef: "FC-004",
        forecastDesc: "Broiler Cycle 19",
        customer: "CUST-001",
        customerName: "PT TOP Distribusi",
        warehouse: "WH-KDG01",
        warehouseName: "Gudang Kandang 01",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        soRef: "SO-202604-011", soDate: "2026-04-19",
        lines: [
            {
                id: "L1",
                brand: "BRD-004", brandName: "Hubbard",
                itemBefore: "DOC Broiler Hubbard", uomBefore: "Ekor",
                qtyBefore: 10000, priceBefore: 9000,
                afterItems: [
                    { id: "A1", itemAfter: "DOC Broiler Hubbard", uomAfter: "Ekor", qtyAfter: 10300, priceAfter: 9500 }
                ]
            }
        ],
        status: "DO Generated",
        doNumber: "DO-002",
        grpoNumber: null,
        createdBy: "admin_hatchery",
        createdAt: "2026-04-20"
    },
    {
        id: "DOD-005",
        date: "2026-04-21",
        docType: "internal",
        forecastRef: "FC-006",
        forecastDesc: "Layer Cycle 1",
        customer: "CUST-003",
        customerName: "PT BMAX",
        warehouse: "WH-KDG02",
        warehouseName: "Gudang Kandang 02",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        soRef: "SO-202604-012", soDate: "2026-04-20",
        lines: [
            {
                id: "L1",
                brand: "BRD-003", brandName: "Lohmann",
                itemBefore: "DOC Layer Lohmann", uomBefore: "Ekor",
                qtyBefore: 10000, priceBefore: 11500,
                afterItems: [
                    { id: "A1", itemAfter: "DOC Layer Lohmann", uomAfter: "Ekor", qtyAfter: 10000, priceAfter: 12000 }
                ]
            }
        ],
        status: "DO Generated",
        doNumber: "DO-003",
        grpoNumber: null,
        createdBy: "admin_hatchery",
        createdAt: "2026-04-21"
    },
    {
        id: "DOD-003",
        date: "2026-04-20",
        docType: "internal",
        forecastRef: "FC-003",
        forecastDesc: "Broiler Cycle 21",
        customer: "CUST-002",
        customerName: "PT AYM (Ayam Yummy Makmur)",
        warehouse: "WH-KDG03",
        warehouseName: "Gudang Kandang 03",
        externalVendor: null, externalVendorName: null,
        noSuratJalan: null, tglSuratJalan: null, noPol: null,
        lines: [
            {
                id: "L1",
                brand: "BRD-001", brandName: "Cobb 500",
                itemBefore: "DOC Broiler Cobb 500", uomBefore: "Ekor",
                qtyBefore: 4000, priceBefore: null,
                afterItems: [
                    { id: "A1", itemAfter: "DOC Broiler Cobb 500", uomAfter: "Ekor", qtyAfter: 4500, priceAfter: null }
                ]
            }
        ],
        status: "Draft",
        doNumber: null,
        createdBy: "admin_hatchery",
        createdAt: "2026-04-20"
    }
];

/* ─── Forecast reference list ────────────────────────────────── */
const DOC_FORECAST_REFS = [
    {
        id: "FC-001", desc: "Broiler Cycle 18",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        suggestedLines: [
            { brand: "BRD-001", brandName: "Cobb 500", itemBefore: "DOC Broiler Cobb 500", uomBefore: "Ekor", qtyBefore: 10000 }
        ]
    },
    {
        id: "FC-002", desc: "Broiler Cycle 18",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        suggestedLines: [
            { brand: "BRD-002", brandName: "Ross 308", itemBefore: "DOC Broiler Ross 308", uomBefore: "Ekor", qtyBefore: 5000 }
        ]
    },
    {
        id: "FC-003", desc: "Broiler Cycle 21",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        suggestedLines: [
            { brand: "BRD-001", brandName: "Cobb 500", itemBefore: "DOC Broiler Cobb 500", uomBefore: "Ekor", qtyBefore: 8000 }
        ]
    },
    {
        id: "FC-004", desc: "Broiler Cycle 19",
        customer: "CUST-001", customerName: "PT TOP Distribusi",
        suggestedLines: [
            { brand: "BRD-004", brandName: "Hubbard", itemBefore: "DOC Broiler Hubbard", uomBefore: "Ekor", qtyBefore: 10000 }
        ]
    },
    {
        id: "FC-005", desc: "Broiler Cycle 22",
        customer: "CUST-002", customerName: "PT AYM (Ayam Yummy Makmur)",
        suggestedLines: [
            { brand: "BRD-002", brandName: "Ross 308", itemBefore: "DOC Broiler Ross 308", uomBefore: "Ekor", qtyBefore: 5000 }
        ]
    },
    {
        id: "FC-006", desc: "Layer Cycle 1",
        customer: "CUST-003", customerName: "PT BMAX",
        suggestedLines: [
            { brand: "BRD-003", brandName: "Lohmann", itemBefore: "DOC Layer Lohmann", uomBefore: "Ekor", qtyBefore: 10000 }
        ]
    }
];

/* ─── Storage Functions ─────────────────────────────────────── */
function docDraftLoadAll() {
    try {
        const raw = localStorage.getItem(DOC_DRAFT_KEY);
        if (raw) return JSON.parse(raw);
    } catch(e) {}
    localStorage.setItem(DOC_DRAFT_KEY, JSON.stringify(DOC_DRAFT_DEMO));
    return DOC_DRAFT_DEMO.map(d => ({ ...d }));
}

function docDraftSaveAll(drafts) {
    localStorage.setItem(DOC_DRAFT_KEY, JSON.stringify(drafts));
}

function docDraftGet(id) {
    return docDraftLoadAll().find(d => d.id === id) || null;
}

function docDraftSave(draft) {
    const drafts = docDraftLoadAll();
    const idx = drafts.findIndex(d => d.id === draft.id);
    if (idx >= 0) drafts[idx] = draft;
    else drafts.unshift(draft);
    docDraftSaveAll(drafts);
}

function docDraftNextId() {
    const drafts = docDraftLoadAll();
    const nums = drafts.map(d => parseInt(d.id.replace("DOD-", ""), 10)).filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "DOD-" + String(next).padStart(3, "0");
}

function docDraftNextDoNumber() {
    const drafts = docDraftLoadAll();
    const nums = drafts
        .filter(d => d.doNumber)
        .map(d => parseInt(d.doNumber.replace("DO-", ""), 10))
        .filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "DO-" + String(next).padStart(3, "0");
}

function docDraftNextGrpoNumber() {
    const drafts = docDraftLoadAll();
    const nums = drafts
        .filter(d => d.grpoNumber)
        .map(d => parseInt(d.grpoNumber.replace("GRPO-", ""), 10))
        .filter(n => !isNaN(n));
    const next = nums.length ? Math.max(...nums) + 1 : 1;
    return "GRPO-" + String(next).padStart(3, "0");
}

function uniqueId() {
    return Math.random().toString(36).slice(2, 9);
}

console.log("[IBOCS] doc_draft_storage.js loaded");
