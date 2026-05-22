const state = {
  currentUser: null,
  period: "mensal",
  region: "todas",
  store: "todas",
  chartMode: "sales",
  filteredSalesRows: [],
  metricsCalculated: false,
  stockView: "product",
  selectedSegment: "Clientes frequentes",
  campaigns: [
    {
      segment: "Clientes em risco",
      channel: "E-mail + WhatsApp",
      goal: "Reativação de compra",
      conversion: "9,2%",
      revenue: "R$ 34 mil"
    },
    {
      segment: "Clientes de alto valor",
      channel: "E-mail",
      goal: "Oferta premium",
      conversion: "18,4%",
      revenue: "R$ 92 mil"
    }
  ],
  restockOrders: []
};

const roleProfiles = {
  sales: {
    label: "Analista de Vendas",
    description: "Acesso restrito às regras de negócio de análise de vendas.",
    views: ["sales"],
    defaultView: "sales"
  },
  stock: {
    label: "Gestor de Estoque e Reposição",
    description: "Acesso restrito às regras de negócio de estoque, reposição e alertas.",
    views: ["stock"],
    defaultView: "stock"
  },
  crm: {
    label: "Especialista em CRM",
    description: "Acesso restrito à segmentação de clientes e campanhas direcionadas.",
    views: ["customers", "campaigns"],
    defaultView: "customers"
  },
  margin: {
    label: "Analista de Margem e Lucro",
    description: "Acesso restrito à análise de margem, lucro e desempenho do produto.",
    views: ["reports"],
    defaultView: "reports"
  }
};

const pageTitles = {
  dashboard: "Dashboard Geral",
  sales: "Análise de Vendas",
  stock: "Estoque e Reposição",
  customers: "Segmentação de Clientes",
  campaigns: "Campanhas de Marketing",
  reports: "Relatórios de Margem"
};

const salesRows = [
  ["Loja Centro", "Nordeste", "Loja física", 82400, "31%", "5,2%"],
  ["Loja Norte", "Nordeste", "Loja física", 74900, "28%", "4,7%"],
  ["E-commerce", "Sudeste", "Online", 112300, "35%", "6,1%"],
  ["Marketplace", "Sul", "Online", 64100, "22%", "3,8%"],
  ["Social commerce", "Sudeste", "Redes sociais", 43600, "26%", "4,2%"]
];

const stockRows = [
  ["Smartwatch X", "Online", 190, 260, "Normal"],
  ["Tênis Run", "Loja Norte", 22, 84, "Atenção"],
  ["Perfume Aura", "Loja Centro", 48, 72, "Normal"],
  ["Cafeteira Pro", "Loja Centro", 12, 96, "Crítico"],
  ["Fone Pulse", "Marketplace", 8, 110, "Crítico"]
];

const productRows = [
  ["Smartwatch X", "Eletrônicos", "R$ 84.300", "42%", "Alta margem", "Ampliar campanha"],
  ["Tênis Run", "Esporte", "R$ 19.000", "18%", "Baixo desempenho", "Revisar preço"],
  ["Perfume Aura", "Beleza", "R$ 22.000", "35%", "Oportunidade", "Priorizar vitrine"],
  ["Cafeteira Pro", "Casa", "R$ 41.000", "27%", "Estável", "Monitorar estoque"],
  ["Fone Pulse", "Eletrônicos", "R$ 33.400", "39%", "Alta margem", "Repor estoque"]
];

const marginCategories = [
  { label: "Eletrônicos", margin: 42, revenue: 117700, target: 30 },
  { label: "Beleza", margin: 35, revenue: 22000, target: 30 },
  { label: "Moda", margin: 31, revenue: 28600, target: 30 },
  { label: "Casa", margin: 27, revenue: 41000, target: 30 },
  { label: "Esporte", margin: 18, revenue: 19000, target: 30 }
];

const segments = [
  {
    name: "Clientes frequentes",
    total: "8.240",
    note: "Compram 3x ou mais por mês",
    profile: "Preferem frete rápido, cupons recorrentes e recompra automática.",
    channel: "E-mail + WhatsApp",
    products: "Eletrônicos, beleza e moda",
    action: "Programa de fidelidade e oferta recorrente"
  },
  {
    name: "Clientes de alto valor",
    total: "1.120",
    note: "Maior margem por pedido",
    profile: "Concentram compras em eletrônicos, beleza e itens premium.",
    channel: "E-mail personalizado",
    products: "Itens premium e combos de maior margem",
    action: "Campanhas VIP com vantagens exclusivas"
  },
  {
    name: "Clientes em risco",
    total: "740",
    note: "Sem compra há mais de 60 dias",
    profile: "Respondem melhor a cupom de retorno e comunicação por WhatsApp.",
    channel: "WhatsApp",
    products: "Produtos comprados anteriormente",
    action: "Cupom de retorno com prazo curto"
  },
  {
    name: "Novos clientes",
    total: "2.460",
    note: "Primeira compra recente",
    profile: "Precisam de boas-vindas, recomendação de produtos e incentivo à segunda compra.",
    channel: "E-mail de boas-vindas",
    products: "Recomendações relacionadas à primeira compra",
    action: "Jornada de onboarding e segunda compra"
  }
];

const alerts = [
  ["danger", "Fone Pulse em risco de ruptura", "Reposição sugerida: 140 unidades"],
  ["warning", "Tênis Run abaixo do estoque mínimo", "Avaliar preço e giro semanal"],
  ["ok", "Smartwatch X com alta margem", "Campanha recomendada para clientes premium"],
  ["ok", "Relatório mensal consolidado", "Margem média atual: 31,8%"]
];

const periodData = {
  diario: [22, 25, 28, 24, 32, 36, 41],
  semanal: [88, 112, 104, 136, 148, 172, 190],
  mensal: [320, 352, 341, 398, 428, 466, 492],
  trimestral: [940, 1120, 1260, 1380, 1520, 1640, 1790],
  anual: [8400, 9100, 9800, 10600, 11800, 12400, 13800]
};

const periodLabels = {
  diario: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"],
  semanal: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7"],
  mensal: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
  trimestral: ["T1", "T2", "T3", "T4", "T5", "T6", "T7"],
  anual: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"]
};

const periodMeta = {
  diario: [24, 26, 27, 29, 31, 34, 38],
  semanal: [92, 104, 112, 128, 140, 154, 176],
  mensal: [300, 330, 360, 382, 410, 452, 470],
  trimestral: [900, 1040, 1180, 1320, 1460, 1580, 1710],
  anual: [8200, 8900, 9600, 10300, 11200, 12100, 13200]
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

const compactCurrency = (value) => {
  if (value >= 1000) return `R$ ${(value / 1000).toFixed(1).replace(".", ",")} mi`;
  return `R$ ${value} mil`;
};

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return [...document.querySelectorAll(selector)];
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function getActiveProfile() {
  return state.currentUser ? roleProfiles[state.currentUser.role] : null;
}

function canAccess(view) {
  const profile = getActiveProfile();
  return Boolean(profile?.views.includes(view));
}

function navigate(view) {
  const profile = getActiveProfile();
  if (!profile) {
    document.body.classList.add("logged-out");
    return;
  }
  if (!canAccess(view)) {
    showToast("Acesso não permitido para este perfil.");
    view = profile.defaultView;
  }
  qsa(".view").forEach((section) => section.classList.toggle("active", section.id === view));
  qsa(".nav-item").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  qs("#pageTitle").textContent = pageTitles[view];
  qs("#accessNote").textContent = profile.description;
  drawAllCharts();
}

function applyAccessProfile() {
  const profile = getActiveProfile();
  if (!profile) return;

  qs("#activeRole").textContent = profile.label;
  qs("#accessDescription").textContent = profile.description;
  qs("#accessNote").textContent = profile.description;

  qsa(".nav-item").forEach((button) => {
    button.hidden = !profile.views.includes(button.dataset.view);
  });

  document.body.classList.remove("logged-out");
  navigate(profile.defaultView);
}

function login(role, email) {
  state.currentUser = { role, email };
  applyAccessProfile();
  showToast(`Login realizado como ${roleProfiles[role].label}.`);
}

function logout() {
  state.currentUser = null;
  document.body.classList.add("logged-out");
  qsa(".view").forEach((section) => section.classList.remove("active"));
  qs("#loginPassword").value = "123456";
  showToast("Sessão encerrada.");
}

function drawChart(canvasId, values, options = {}) {
  const canvas = qs(`#${canvasId}`);
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssHeight = Number(canvas.dataset.baseHeight || canvas.getAttribute("height") || 240);
  canvas.dataset.baseHeight = String(cssHeight);
  canvas.width = Math.max(1, rect.width * dpr);
  canvas.height = Math.max(1, cssHeight * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = cssHeight;
  const pad = { left: 46, right: 18, top: 20, bottom: 34 };
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, width, height);

  const gridHeight = height - pad.top - pad.bottom;
  const gridWidth = width - pad.left - pad.right;
  const max = Math.max(...values) * 1.12;
  const min = options.min ?? 0;

  ctx.strokeStyle = "#edf1f6";
  ctx.lineWidth = 1;
  ctx.fillStyle = "#667085";
  ctx.font = "12px Inter, sans-serif";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (gridHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  if (options.type === "bar") {
    const gap = 16;
    const barWidth = (gridWidth - gap * (values.length - 1)) / values.length;
    values.forEach((value, index) => {
      const barHeight = ((value - min) / (max - min)) * gridHeight;
      const x = pad.left + index * (barWidth + gap);
      const y = pad.top + gridHeight - barHeight;
      ctx.fillStyle = options.colors?.[index % options.colors.length] || "#2563eb";
      roundRect(ctx, x, y, barWidth, barHeight, 7);
      ctx.fill();
      ctx.fillStyle = "#667085";
      ctx.fillText(options.labels?.[index] || String(index + 1), x, height - 12);
    });
    return;
  }

  const points = values.map((value, index) => {
    const x = pad.left + (gridWidth / (values.length - 1)) * index;
    const y = pad.top + gridHeight - ((value - min) / (max - min)) * gridHeight;
    return [x, y];
  });

  ctx.strokeStyle = options.color || "#2563eb";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.stroke();

  points.forEach(([x, y]) => {
    ctx.fillStyle = options.color || "#2563eb";
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawSalesPeriodChart() {
  const canvas = qs("#salesDetailCanvas");
  if (!canvas) return;
  const values = periodData[state.period] || periodData.mensal;
  const targets = periodMeta[state.period] || periodMeta.mensal;
  const labels = periodLabels[state.period] || periodLabels.mensal;
  const margins = values.map((value, index) => Math.round(26 + index * 1.7 + (value > targets[index] ? 1.8 : 0)));
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssHeight = Number(canvas.dataset.baseHeight || canvas.getAttribute("height") || 260);
  canvas.dataset.baseHeight = String(cssHeight);
  canvas.width = Math.max(1, rect.width * dpr);
  canvas.height = Math.max(1, cssHeight * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = cssHeight;
  const pad = { left: 88, right: 42, top: 34, bottom: 54 };
  const gridWidth = width - pad.left - pad.right;
  const gridHeight = height - pad.top - pad.bottom;
  const max = Math.max(...values, ...targets) * 1.18;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, width, height);
  ctx.font = "12px Inter, sans-serif";
  ctx.lineWidth = 1;
  ctx.strokeStyle = "#edf1f6";
  ctx.fillStyle = "#667085";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (gridHeight / 4) * i;
    const value = Math.round(max - (max / 4) * i);
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(compactCurrency(value), 14, y + 4);
  }

  const point = (value, index) => [
    pad.left + (gridWidth / (values.length - 1)) * index,
    pad.top + gridHeight - (value / max) * gridHeight
  ];

  margins.forEach((margin, index) => {
    const [x] = point(values[index], index);
    const barHeight = (margin / 45) * 54;
    ctx.fillStyle = "rgba(22, 163, 74, 0.18)";
    roundRect(ctx, x - 14, pad.top + gridHeight - barHeight, 28, barHeight, 6);
    ctx.fill();
    ctx.fillStyle = "#16a34a";
    ctx.textAlign = "center";
    ctx.fillText(`${margin}%`, x, pad.top + gridHeight - barHeight - 8);
    ctx.textAlign = "left";
  });

  function drawPolyline(series, color, dashed = false) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.setLineDash(dashed ? [8, 8] : []);
    ctx.beginPath();
    series.forEach((value, index) => {
      const [x, y] = point(value, index);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.setLineDash([]);
  }

  drawPolyline(targets, "#d97706", true);
  drawPolyline(values, "#2563eb");

  values.forEach((value, index) => {
    const [x, y] = point(value, index);
    ctx.fillStyle = "#2563eb";
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#172033";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(compactCurrency(value), x, y - 14);
    ctx.font = "12px Inter, sans-serif";
    ctx.fillStyle = "#667085";
    ctx.fillText(labels[index], x, height - 18);
    ctx.textAlign = "left";
  });
}

function drawOriginChart(rows) {
  const canvas = qs("#originCanvas");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssHeight = Number(canvas.dataset.baseHeight || canvas.getAttribute("height") || 230);
  canvas.dataset.baseHeight = String(cssHeight);
  canvas.width = Math.max(1, rect.width * dpr);
  canvas.height = Math.max(1, cssHeight * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = cssHeight;
  const pad = { left: 110, right: 32, top: 18, bottom: 28 };
  const chartWidth = Math.max(120, width - pad.left - pad.right);
  const rowGap = 31;
  const max = Math.max(...rows.map((row) => row[3]), 1);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, width, height);
  ctx.font = "12px Inter, sans-serif";

  if (!rows.length) {
    ctx.fillStyle = "#667085";
    ctx.fillText("Nenhum resultado para os filtros atuais.", pad.left, 72);
    return;
  }

  rows.forEach((row, index) => {
    const y = pad.top + index * rowGap;
    const sales = row[3];
    const margin = Number(String(row[4]).replace("%", ""));
    const barWidth = Math.max(8, (sales / max) * chartWidth);

    ctx.fillStyle = "#172033";
    ctx.textAlign = "right";
    ctx.fillText(row[0], pad.left - 14, y + 14);

    ctx.fillStyle = "#eaf1ff";
    roundRect(ctx, pad.left, y, chartWidth, 18, 8);
    ctx.fill();

    ctx.fillStyle = "#2563eb";
    roundRect(ctx, pad.left, y, barWidth, 18, 8);
    ctx.fill();

    ctx.fillStyle = "#16a34a";
    roundRect(ctx, pad.left + Math.min(chartWidth - 8, (margin / 40) * chartWidth), y + 3, 8, 12, 4);
    ctx.fill();

    ctx.fillStyle = "#172033";
    ctx.textAlign = "left";
    ctx.fillText(formatCurrency(sales), pad.left + Math.min(barWidth + 10, chartWidth - 72), y + 14);
  });

  ctx.textAlign = "left";
}

function drawCustomerBehaviorChart() {
  const canvas = qs("#customerCanvas");
  if (!canvas) return;
  const segment = segments.find((item) => item.name === state.selectedSegment) || segments[0];
  const datasets = {
    "Clientes frequentes": {
      purchases: [58, 64, 70, 78, 84, 91],
      digital: [52, 56, 61, 66, 70, 72],
      value: [142, 151, 163, 170, 181, 186]
    },
    "Clientes de alto valor": {
      purchases: [28, 33, 38, 44, 49, 54],
      digital: [48, 51, 56, 59, 62, 64],
      value: [330, 348, 372, 389, 404, 420]
    },
    "Clientes em risco": {
      purchases: [42, 38, 31, 26, 20, 17],
      digital: [62, 60, 58, 57, 56, 58],
      value: [162, 154, 148, 142, 136, 138]
    },
    "Novos clientes": {
      purchases: [18, 24, 31, 39, 47, 56],
      digital: [55, 60, 63, 66, 68, 69],
      value: [118, 126, 134, 142, 150, 156]
    }
  }[segment.name];
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssHeight = Number(canvas.dataset.baseHeight || canvas.getAttribute("height") || 280);
  canvas.dataset.baseHeight = String(cssHeight);
  canvas.width = Math.max(1, rect.width * dpr);
  canvas.height = Math.max(1, cssHeight * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = cssHeight;
  const pad = { left: 56, right: 34, top: 28, bottom: 44 };
  const chartWidth = Math.max(140, width - pad.left - pad.right);
  const chartHeight = height - pad.top - pad.bottom;
  const max = Math.max(...datasets.purchases, ...datasets.digital, 100);

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#edf1f6";
  ctx.fillStyle = "#667085";
  ctx.font = "12px Inter, sans-serif";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
  }

  const barGap = chartWidth / datasets.purchases.length;
  datasets.value.forEach((value, index) => {
    const x = pad.left + index * barGap + barGap * 0.28;
    const barHeight = (value / Math.max(...datasets.value)) * 88;
    ctx.fillStyle = "rgba(22, 163, 74, 0.2)";
    roundRect(ctx, x, pad.top + chartHeight - barHeight, barGap * 0.32, barHeight, 6);
    ctx.fill();
  });

  function point(series, value, index) {
    return [
      pad.left + index * (chartWidth / (series.length - 1)),
      pad.top + chartHeight - (value / max) * chartHeight
    ];
  }

  function polyline(series, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    series.forEach((value, index) => {
      const [x, y] = point(series, value, index);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
    series.forEach((value, index) => {
      const [x, y] = point(series, value, index);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  polyline(datasets.purchases, "#2563eb");
  polyline(datasets.digital, "#7c3aed");

  labels.forEach((label, index) => {
    const x = pad.left + index * (chartWidth / (labels.length - 1));
    ctx.fillStyle = "#667085";
    ctx.textAlign = "center";
    ctx.fillText(label, x, height - 17);
  });
  ctx.textAlign = "left";
}

function drawMarginDashboardChart() {
  const canvas = qs("#marginCanvas");
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const cssHeight = Number(canvas.dataset.baseHeight || canvas.getAttribute("height") || 240);
  canvas.dataset.baseHeight = String(cssHeight);
  canvas.width = Math.max(1, rect.width * dpr);
  canvas.height = Math.max(1, cssHeight * dpr);
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = cssHeight;
  const pad = { left: 58, right: 28, top: 28, bottom: 48 };
  const chartWidth = Math.max(160, width - pad.left - pad.right);
  const chartHeight = height - pad.top - pad.bottom;
  const maxMargin = 50;
  const maxRevenue = Math.max(...marginCategories.map((item) => item.revenue));
  const barGap = chartWidth / marginCategories.length;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fbfcfe";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#edf1f6";
  ctx.fillStyle = "#667085";
  ctx.font = "12px Inter, sans-serif";

  for (let i = 0; i <= 4; i++) {
    const y = pad.top + (chartHeight / 4) * i;
    ctx.beginPath();
    ctx.moveTo(pad.left, y);
    ctx.lineTo(width - pad.right, y);
    ctx.stroke();
    ctx.fillText(`${maxMargin - i * 12}%`, 14, y + 4);
  }

  const targetY = pad.top + chartHeight - (30 / maxMargin) * chartHeight;
  ctx.strokeStyle = "#d97706";
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(pad.left, targetY);
  ctx.lineTo(width - pad.right, targetY);
  ctx.stroke();
  ctx.setLineDash([]);

  marginCategories.forEach((item, index) => {
    const x = pad.left + index * barGap + barGap * 0.18;
    const marginHeight = (item.margin / maxMargin) * chartHeight;
    const revenueHeight = (item.revenue / maxRevenue) * 54;
    const barWidth = barGap * 0.48;
    const color = item.margin >= 35 ? "#16a34a" : item.margin >= 30 ? "#2563eb" : item.margin >= 25 ? "#d97706" : "#dc2626";

    ctx.fillStyle = "rgba(37, 99, 235, 0.14)";
    roundRect(ctx, x + barWidth * 0.58, pad.top + chartHeight - revenueHeight, barWidth * 0.36, revenueHeight, 6);
    ctx.fill();

    ctx.fillStyle = color;
    roundRect(ctx, x, pad.top + chartHeight - marginHeight, barWidth, marginHeight, 7);
    ctx.fill();

    ctx.fillStyle = "#172033";
    ctx.textAlign = "center";
    ctx.font = "700 12px Inter, sans-serif";
    ctx.fillText(`${item.margin}%`, x + barWidth / 2, pad.top + chartHeight - marginHeight - 8);
    ctx.font = "12px Inter, sans-serif";
    ctx.fillStyle = "#667085";
    ctx.fillText(item.label.slice(0, 7), x + barWidth / 2, height - 18);
  });
  ctx.textAlign = "left";
}

function roundRect(ctx, x, y, width, height, radius) {
  if (![x, y, width, height, radius].every(Number.isFinite)) return;
  const safeWidth = Math.max(0, width);
  const safeHeight = Math.max(0, height);
  const r = Math.max(0, Math.min(Math.abs(radius), safeWidth / 2, safeHeight / 2));
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + safeWidth, y, x + safeWidth, y + safeHeight, r);
  ctx.arcTo(x + safeWidth, y + safeHeight, x, y + safeHeight, r);
  ctx.arcTo(x, y + safeHeight, x, y, r);
  ctx.arcTo(x, y, x + safeWidth, y, r);
  ctx.closePath();
}

function drawAllCharts() {
  const base = periodData[state.period] || periodData.mensal;
  const margin = base.map((value, index) => Math.round(value * (0.26 + index * 0.018)));
  drawChart("salesCanvas", state.chartMode === "sales" ? base : margin, {
    color: state.chartMode === "sales" ? "#2563eb" : "#16a34a"
  });
  drawSalesPeriodChart();
  drawChart("stockCanvas", [28, 34, 42, 55, 68, 81, 96], {
    type: "bar",
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7"],
    colors: ["#0f766e", "#16a34a", "#d97706", "#dc2626"]
  });
  drawCustomerBehaviorChart();
  drawMarginDashboardChart();
  if (canAccess("sales")) renderSales();
}

function renderAlerts() {
  qs("#alertList").innerHTML = alerts
    .map(([type, title, note]) => `<article class="alert ${type}"><strong>${title}</strong><span>${note}</span></article>`)
    .join("");
}

function renderSummary() {
  const rows = [
    ["Vendas", "Receita mensal", "R$ 1,28 mi", "ok", "Acima da meta"],
    ["Estoque", "Produtos críticos", "23 itens", "bad", "Ação imediata"],
    ["Clientes", "Segmentos ativos", "4 segmentos", "ok", "Campanhas prontas"],
    ["Margem", "Margem média", "31,8%", "warn", "Monitorar esporte"]
  ];
  qs("#summaryRows").innerHTML = rows
    .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td><span class="status ${row[3]}">${row[4]}</span></td></tr>`)
    .join("");
}

function renderPeriodDetails() {
  const values = periodData[state.period] || periodData.mensal;
  const targets = periodMeta[state.period] || periodMeta.mensal;
  const labels = periodLabels[state.period] || periodLabels.mensal;
  const rows = values.map((value, index) => {
    const target = targets[index];
    const margin = Math.round(26 + index * 1.7 + (value > target ? 1.8 : 0));
    const ticket = Math.round(142 + index * 7 + (value > target ? 9 : 0));
    const conversion = (3.4 + index * 0.32 + (value > target ? 0.28 : 0)).toFixed(1).replace(".", ",");
    return { label: labels[index], value, target, margin, ticket, conversion };
  });

  qs("#periodRows").innerHTML = rows
    .map((row) => {
      const status = row.value >= row.target ? "ok" : "warn";
      return `
        <tr>
          <td>${row.label}</td>
          <td>${compactCurrency(row.value)}</td>
          <td>${compactCurrency(row.target)}</td>
          <td><span class="status ${status}">${row.margin}%</span></td>
          <td>R$ ${row.ticket}</td>
          <td>${row.conversion}%</td>
        </tr>
      `;
    })
    .join("");

  const best = rows.reduce((top, row) => (row.value > top.value ? row : top), rows[0]);
  const worst = rows.reduce((low, row) => (row.value < low.value ? row : low), rows[0]);
  const total = rows.reduce((sum, row) => sum + row.value, 0);
  const targetTotal = rows.reduce((sum, row) => sum + row.target, 0);
  const aboveTarget = rows.filter((row) => row.value >= row.target).length;
  const performance = ((total / targetTotal - 1) * 100).toFixed(1).replace(".", ",");

  qs("#periodInsights").innerHTML = `
    <article>
      <strong>Melhor período: ${best.label}</strong>
      <span>${compactCurrency(best.value)} em vendas, ${best.margin}% de margem e conversão de ${best.conversion}%.</span>
    </article>
    <article>
      <strong>Ponto de atenção: ${worst.label}</strong>
      <span>${compactCurrency(worst.value)} em vendas. Comparar canal, loja e categoria para entender a queda.</span>
    </article>
    <article>
      <strong>${aboveTarget} de ${rows.length} períodos bateram a meta</strong>
      <span>Resultado acumulado ${performance}% em relação à meta do período selecionado.</span>
    </article>
  `;
}

function renderSales() {
  const search = qs("#salesSearch").value.toLowerCase();
  const filtered = salesRows.filter((row) => {
    const regionMatches = state.region === "todas" || row[1].toLowerCase() === state.region;
    const storeMatches = state.store === "todas" || row[0].toLowerCase().includes(state.store);
    const searchMatches = row.join(" ").toLowerCase().includes(search);
    return regionMatches && storeMatches && searchMatches;
  });
  qs("#salesRows").innerHTML = filtered
    .map((row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${formatCurrency(row[3])}</td><td>${row[4]}</td><td>${row[5]}</td></tr>`)
    .join("");

  state.filteredSalesRows = filtered;
  markMetricsPending();
  renderPeriodDetails();
  drawOriginChart(filtered);
  renderOriginSummary(filtered);
}

function getSelectedMetrics() {
  return qsa(".metric-toggle")
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function markMetricsPending() {
  if (!state.metricsCalculated) return;
  qs(".calculated-kpis").classList.add("is-pending");
  qs("#metricStatus").textContent = "Os filtros mudaram. Clique em calcular para atualizar as métricas.";
}

function calculateMetrics() {
  const rows = state.filteredSalesRows;
  const selected = getSelectedMetrics();
  const total = rows.reduce((sum, row) => sum + row[3], 0);
  const avgMargin = rows.length
    ? rows.reduce((sum, row) => sum + Number(String(row[4]).replace("%", "")), 0) / rows.length
    : 0;
  const avgConversion = rows.length
    ? rows.reduce((sum, row) => sum + Number(String(row[5]).replace("%", "").replace(",", ".")), 0) / rows.length
    : 0;
  const avgTicket = rows.length ? Math.round(total / Math.max(rows.length * 438, 1)) : 0;

  const metricMap = {
    total: [qs("#salesTotal"), total ? formatCurrency(total) : "R$ 0"],
    margin: [qs("#salesMargin"), `${avgMargin.toFixed(1).replace(".", ",")}%`],
    ticket: [qs("#salesAvgTicket"), `R$ ${avgTicket}`],
    conversion: [qs("#salesConversion"), `${avgConversion.toFixed(1).replace(".", ",")}%`]
  };

  Object.entries(metricMap).forEach(([key, [element, value]]) => {
    element.textContent = selected.includes(key) ? value : "-";
  });

  state.metricsCalculated = true;
  qs(".calculated-kpis").classList.remove("is-pending");
  qs("#metricStatus").textContent = selected.length
    ? `Métricas calculadas com ${rows.length} origem(ns) filtrada(s).`
    : "Nenhuma métrica selecionada.";
}

function renderOriginSummary(rows) {
  if (!rows.length) {
    qs("#originSummary").innerHTML = `
      <article>
        <strong>Sem resultados</strong>
        <span>Altere o filtro do relatório ou os filtros globais para visualizar dados.</span>
      </article>
    `;
    return;
  }

  const total = rows.reduce((sum, row) => sum + row[3], 0);
  const leader = rows.reduce((top, row) => (row[3] > top[3] ? row : top), rows[0]);
  const avgMargin = rows.reduce((sum, row) => sum + Number(String(row[4]).replace("%", "")), 0) / rows.length;
  const channels = new Set(rows.map((row) => row[2])).size;

  qs("#originSummary").innerHTML = `
    <article>
      <strong>${formatCurrency(total)}</strong>
      <span>Total filtrado no relatório por origem.</span>
    </article>
    <article>
      <strong>${leader[0]}</strong>
      <span>Maior origem filtrada, com ${formatCurrency(leader[3])} em vendas.</span>
    </article>
    <article>
      <strong>${avgMargin.toFixed(1).replace(".", ",")}%</strong>
      <span>Margem média em ${channels} canal(is) filtrado(s).</span>
    </article>
  `;
}

function renderStock() {
  if (state.stockView === "store") {
    renderStockByStore();
  } else {
    renderStockByProduct();
  }

  const critical = stockRows.filter((row) => row[4] !== "Normal");
  const orders = [...critical.map((row) => ({ product: row[0], store: row[1], amount: Math.max(row[3] - row[2], 40) })), ...state.restockOrders];
  qs("#restockActions").innerHTML = orders
    .map((order) => `<article class="action-card"><strong>${order.product}</strong><span>${order.store}</span><p>Reposição sugerida: ${order.amount} unidades</p></article>`)
    .join("");
  renderDemandInsights();
}

function renderStockByProduct() {
  qs("#stockTableTitle").textContent = "Estoque atual por produto";
  qs("#stockTableHead").innerHTML = `
    <tr>
      <th>Produto</th>
      <th>Loja</th>
      <th>Estoque</th>
      <th>Demanda prevista</th>
      <th>Status</th>
    </tr>
  `;
  qs("#stockRows").innerHTML = stockRows
    .map((row) => {
      const statusClass = row[4] === "Crítico" ? "bad" : row[4] === "Atenção" ? "warn" : "ok";
      return `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]} un</td><td>${row[3]} un</td><td><span class="status ${statusClass}">${row[4]}</span></td></tr>`;
    })
    .join("");
}

function renderStockByStore() {
  const stores = stockRows.reduce((acc, row) => {
    const key = row[1];
    if (!acc[key]) acc[key] = { store: key, products: 0, stock: 0, demand: 0, critical: 0 };
    acc[key].products += 1;
    acc[key].stock += row[2];
    acc[key].demand += row[3];
    if (row[4] !== "Normal") acc[key].critical += 1;
    return acc;
  }, {});

  qs("#stockTableTitle").textContent = "Estoque consolidado por loja";
  qs("#stockTableHead").innerHTML = `
    <tr>
      <th>Loja</th>
      <th>Produtos</th>
      <th>Estoque total</th>
      <th>Demanda prevista</th>
      <th>Risco</th>
    </tr>
  `;
  qs("#stockRows").innerHTML = Object.values(stores)
    .map((row) => {
      const statusClass = row.critical > 1 ? "bad" : row.critical === 1 ? "warn" : "ok";
      const status = row.critical ? `${row.critical} alerta(s)` : "Normal";
      return `<tr><td>${row.store}</td><td>${row.products}</td><td>${row.stock} un</td><td>${row.demand} un</td><td><span class="status ${statusClass}">${status}</span></td></tr>`;
    })
    .join("");
}

function renderDemandInsights() {
  const criticalCount = stockRows.filter((row) => row[4] === "Crítico").length;
  const attentionCount = stockRows.filter((row) => row[4] === "Atenção").length;
  qs("#demandInsights").innerHTML = `
    <article>
      <strong>Sazonalidade</strong>
      <span>Demanda +14% nas próximas semanas, com pico estimado em Sem 7.</span>
    </article>
    <article>
      <strong>Tendências</strong>
      <span>Eletrônicos e itens de recompra rápida puxam o crescimento do consumo.</span>
    </article>
    <article>
      <strong>Lote econômico de compra</strong>
      <span>Compra sugerida: 360 unidades para reduzir ruptura e custo de pedido.</span>
    </article>
    <article>
      <strong>Ciclo de vida</strong>
      <span>Smartwatch X em crescimento; Tênis Run em maturidade; Cafeteira Pro em atenção.</span>
    </article>
    <article class="wide-insight">
      <strong>Prioridade operacional</strong>
      <span>${criticalCount} produto(s) críticos e ${attentionCount} em atenção. Repor primeiro Fone Pulse e Cafeteira Pro.</span>
    </article>
  `;
}

function updateAutomationStatus() {
  const autoRestock = qs("#autoRestock").checked;
  const emailAlerts = qs("#emailAlerts").checked;
  const status = [];
  if (autoRestock) status.push("reposição automática");
  if (emailAlerts) status.push("alertas por e-mail");
  qs("#automationStatus").textContent = status.length
    ? `${status.join(" e ")} ${status.length > 1 ? "estão ativos" : "está ativa"}.`
    : "As automações de estoque estão desativadas.";
}

function renderSegments() {
  qs("#segmentCards").innerHTML = segments
    .map((segment) => `
      <button class="segment-card" data-segment="${segment.name}">
        <strong>${segment.name}</strong>
        <span class="segment-total">${segment.total}</span>
        <p>${segment.note}</p>
        <span>${segment.action}</span>
      </button>
    `)
    .join("");
  renderProfile();
}

function renderProfile() {
  const segment = segments.find((item) => item.name === state.selectedSegment) || segments[0];
  qs("#profileDetail").innerHTML = `
    <div class="profile-hero">
      <strong>${segment.total}</strong>
      <span>${segment.name}</span>
    </div>
    <div class="profile-info-grid">
      <article>
        <b>Comportamento</b>
        <span>${segment.profile}</span>
      </article>
      <article>
        <b>Produtos preferidos</b>
        <span>${segment.products}</span>
      </article>
      <article>
        <b>Canal indicado</b>
        <span>${segment.channel}</span>
      </article>
      <article>
        <b>Ação recomendada</b>
        <span>${segment.action}</span>
      </article>
    </div>
  `;
  renderBehaviorSummary(segment);
  drawCustomerBehaviorChart();
}

function renderBehaviorSummary(segment) {
  const behavior = {
    "Clientes frequentes": ["3,4 compras/mês", "72% preferência digital", "R$ 186 valor médio"],
    "Clientes de alto valor": ["1,8 compras/mês", "64% preferência digital", "R$ 420 valor médio"],
    "Clientes em risco": ["0,4 compras/mês", "58% preferência digital", "R$ 138 valor médio"],
    "Novos clientes": ["1,1 compras/mês", "69% preferência digital", "R$ 156 valor médio"]
  }[segment.name];

  qs("#behaviorSummary").innerHTML = `
    <article>
      <strong>${behavior[0]}</strong>
      <span>Frequência média de compra do segmento.</span>
    </article>
    <article>
      <strong>${behavior[1]}</strong>
      <span>Participação de canais digitais nas interações.</span>
    </article>
    <article>
      <strong>${behavior[2]}</strong>
      <span>Valor médio por pedido considerado nas campanhas.</span>
    </article>
  `;
}

function renderCampaigns() {
  qs("#campaignList").innerHTML = state.campaigns
    .map((campaign) => `
      <article class="campaign-card">
        <div>
          <strong>${campaign.segment}</strong>
          <span>${campaign.goal} via ${campaign.channel}</span>
        </div>
        <div>
          <strong>${campaign.conversion}</strong>
          <span>${campaign.revenue}</span>
        </div>
      </article>
    `)
    .join("");
}

function renderProducts() {
  qs("#productRows").innerHTML = productRows
    .map((row) => {
      const status = row[4] === "Baixo desempenho" ? "bad" : row[4] === "Estável" ? "warn" : "ok";
      return `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td><span class="status ${status}">${row[4]}</span></td><td>${row[5]}</td></tr>`;
    })
    .join("");
  renderMarginDashboard();
}

function renderMarginDashboard() {
  const best = marginCategories.reduce((top, item) => (item.margin > top.margin ? item : top), marginCategories[0]);
  const worst = marginCategories.reduce((low, item) => (item.margin < low.margin ? item : low), marginCategories[0]);
  const totalRevenue = marginCategories.reduce((sum, item) => sum + item.revenue, 0);
  const weightedMargin = marginCategories.reduce((sum, item) => sum + item.margin * item.revenue, 0) / totalRevenue;

  qs("#marginDiagnostic").innerHTML = `
    <article>
      <strong>${weightedMargin.toFixed(1).replace(".", ",")}%</strong>
      <span>Margem ponderada pela receita analisada.</span>
    </article>
    <article>
      <strong>${best.label}</strong>
      <span>Categoria mais lucrativa, com ${best.margin}% de margem.</span>
    </article>
    <article>
      <strong>${worst.label}</strong>
      <span>Categoria em atenção, ${worst.target - worst.margin} p.p. abaixo da meta mínima.</span>
    </article>
  `;

  qs("#marginActions").innerHTML = `
    <article>
      <strong>Alterações de preço</strong>
      <span>Simular aumento de 4% em Eletrônicos e redução seletiva em Esporte para medir impacto na margem.</span>
    </article>
    <article>
      <strong>Estratégias de venda</strong>
      <span>Comparar campanhas premium, combos e descontos progressivos por categoria e canal de venda.</span>
    </article>
    <article>
      <strong>Antes e depois</strong>
      <span>Avaliar margem antes/depois de mudanças de preço para validar se a estratégia aumenta a lucratividade.</span>
    </article>
  `;
}

function updateKpis() {
  const factor = { diario: 0.08, semanal: 0.28, mensal: 1, trimestral: 2.9, anual: 11.4 }[state.period] || 1;
  qs("#kpiSales").textContent = factor >= 1 ? `R$ ${(1.28 * factor).toFixed(2).replace(".", ",")} mi` : `R$ ${Math.round(1280 * factor)} mil`;
  qs("#kpiMargin").textContent = state.region === "sul" ? "29,4%" : "31,8%";
  qs("#kpiTicket").textContent = state.store === "online" ? "R$ 204" : "R$ 184";
  qs("#kpiCritical").textContent = state.store === "online" ? "8 itens" : "23 itens";
}

function bindEvents() {
  qsa(".nav-item").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.view)));
  qsa("[data-jump]").forEach((button) => button.addEventListener("click", () => navigate(button.dataset.jump)));

  qs("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    login(qs("#loginRole").value, qs("#loginEmail").value);
  });

  qs("#logoutButton").addEventListener("click", logout);

  qs("#globalFilters").addEventListener("submit", (event) => {
    event.preventDefault();
    state.period = qs("#periodFilter").value;
    state.region = qs("#regionFilter").value;
    state.store = qs("#storeFilter").value;
    qsa("[data-period]").forEach((button) => button.classList.toggle("active", button.dataset.period === state.period));
    updateKpis();
    renderSales();
    drawAllCharts();
    showToast("Filtros aplicados ao protótipo.");
  });

  qsa("[data-chart-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      state.chartMode = button.dataset.chartMode;
      qsa("[data-chart-mode]").forEach((item) => item.classList.toggle("active", item === button));
      drawAllCharts();
    });
  });

  qsa("[data-period]").forEach((button) => {
    button.addEventListener("click", () => {
      state.period = button.dataset.period;
      qs("#periodFilter").value = state.period;
      qsa("[data-period]").forEach((item) => item.classList.toggle("active", item === button));
      updateKpis();
      renderPeriodDetails();
      drawAllCharts();
    });
  });

  qs("#salesSearch").addEventListener("input", renderSales);
  qs("#calculateMetrics").addEventListener("click", calculateMetrics);
  qsa(".metric-toggle").forEach((input) => input.addEventListener("change", markMetricsPending));
  qs("#clearAlerts").addEventListener("click", () => {
    qs("#alertList").innerHTML = "";
    showToast("Alertas removidos da visualização atual.");
  });

  qs("#generateRestock").addEventListener("click", () => {
    state.restockOrders.unshift({ product: "Pedido consolidado", store: "Todas as lojas", amount: 360 });
    renderStock();
    showToast("Pedido de reposição gerado.");
  });

  qsa("[data-stock-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.stockView = button.dataset.stockView;
      qsa("[data-stock-view]").forEach((item) => item.classList.toggle("active", item === button));
      renderStock();
      showToast(state.stockView === "store" ? "Visão por loja ativada." : "Visão por produto ativada.");
    });
  });

  [qs("#autoRestock"), qs("#emailAlerts")].forEach((input) => {
    input.addEventListener("change", updateAutomationStatus);
  });

  qs("#segmentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const labels = {
      historico: "Clientes frequentes",
      demografico: "Novos clientes",
      valor: "Clientes de alto valor",
      risco: "Clientes em risco"
    };
    state.selectedSegment = labels[qs("#segmentCriterion").value];
    renderProfile();
    showToast("Segmentação atualizada.");
  });

  qs("#segmentCards").addEventListener("click", (event) => {
    const card = event.target.closest("[data-segment]");
    if (!card) return;
    state.selectedSegment = card.dataset.segment;
    renderProfile();
  });

  qs("#campaignForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.campaigns.unshift({
      segment: qs("#campaignSegment").value,
      channel: qs("#campaignChannel").value,
      goal: qs("#campaignGoal").value,
      conversion: "Previsto",
      revenue: "Em simulação"
    });
    renderCampaigns();
    showToast("Campanha salva no painel.");
  });

  qs("#simulateCampaign").addEventListener("click", () => {
    state.campaigns = state.campaigns.map((campaign, index) => ({
      ...campaign,
      conversion: index === 0 ? "12,6%" : campaign.conversion,
      revenue: index === 0 ? "R$ 48 mil" : campaign.revenue
    }));
    renderCampaigns();
    showToast("Resultado da campanha simulado.");
  });

  qs("#exportReport").addEventListener("click", () => showToast("Relatório preparado para exportação."));
  window.addEventListener("resize", drawAllCharts);
}

function init() {
  renderAlerts();
  renderSummary();
  renderSales();
  renderStock();
  renderSegments();
  renderCampaigns();
  renderProducts();
  updateAutomationStatus();
  updateKpis();
  bindEvents();
  calculateMetrics();
  drawAllCharts();
}

init();
