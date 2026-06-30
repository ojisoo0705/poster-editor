/* ============================================================
   IDENTIO ATLAS — Poster Editor Script
   ============================================================ */

// ── Project Data (extracted from identio_atlas.pdf) ──────────
const PROJECTS = [
  // 2021
  { year: 2021, ko: '골든트리', en: 'GOLDEN TREE' },
  { year: 2021, ko: '포옥', en: 'Po.oak' },
  { year: 2021, ko: '트라이닷', en: 'TRIDOT' },
  { year: 2021, ko: '리치티치', en: 'Rich Teach' },
  { year: 2021, ko: '브렁크', en: 'Brunk' },
  // 2022
  { year: 2022, ko: '트리비움', en: 'IIIVIUM' },
  { year: 2022, ko: '호텔 아늑', en: 'HOTEL AANK' },
  { year: 2022, ko: '더휴식', en: 'THE HOOSIK' },
  { year: 2022, ko: '오비오브', en: 'obov' },
  { year: 2022, ko: '브랜뉴 머시너리', en: 'brand-new machinery' },
  { year: 2022, ko: '진건종합건설', en: 'JINGUN' },
  { year: 2022, ko: '우본개발 주식회사', en: 'WOOBON' },
  { year: 2022, ko: '하이 스트리트 이탈리아', en: 'HIGH STREET ITALIA' },
  { year: 2022, ko: '포옥 시즌널 그래픽', en: 'Po.oak Seasonal Graphic' },
  { year: 2022, ko: '죽전 데이터센터', en: 'CDC' },
  { year: 2022, ko: '(주)명산', en: 'Meongsan' },
  { year: 2022, ko: '불스 NFT', en: 'BULLS NFT' },
  // 2023
  { year: 2023, ko: '포그막', en: 'fogmag' },
  { year: 2023, ko: '달성주조', en: 'DALSEONG JUJO' },
  { year: 2023, ko: '셜터', en: 'SHLTR' },
  { year: 2023, ko: '호텔 심작', en: 'HOTEL SIMJAK' },
  { year: 2023, ko: '테니스랜드', en: 'TENNIS LAND' },
  { year: 2023, ko: '모자이크', en: 'MOZAIQ' },
  { year: 2023, ko: '프로젝트 서울', en: 'PROJECT SEOUL' },
  // 2024
  { year: 2024, ko: '판도', en: 'PANDO' },
  { year: 2024, ko: '데포', en: 'DEFFO' },
  { year: 2024, ko: '리커버', en: 'RECOVER' },
  { year: 2024, ko: '에이콘', en: 'ACORN' },
  { year: 2024, ko: '큐디오', en: 'QDO' },
  { year: 2024, ko: '시닉', en: 'SCENIC' },
  { year: 2024, ko: '엠페오', en: 'MFEO' },
  { year: 2024, ko: '투어펏', en: 'TOURPUTT' },
  { year: 2024, ko: '골든트리 시즌널 그래픽', en: 'GOLDEN TREE Seasonal Graphic' },
  { year: 2024, ko: '옴샨티', en: 'OMSHANTI' },
  { year: 2024, ko: '이니바이오', en: 'IniBio' },
  { year: 2024, ko: '위어스', en: 'weus' },
  // 2025
  { year: 2025, ko: '네슬레 헬스 사이언스 스토어', en: 'Nestle Health Science Store' },
  { year: 2025, ko: '포그막 패키지', en: 'fogmag Package' },
  { year: 2025, ko: '롯데 오화', en: 'Lotte OHWA' },
  { year: 2025, ko: '르마하', en: 'Lémaha' },
  { year: 2025, ko: '코브엔터', en: 'COV' },
  { year: 2025, ko: '리그서울', en: 'League Seoul' },
  { year: 2025, ko: 'TP 타워 사이니지', en: 'TP TOWER' },
  { year: 2025, ko: '르살롱', en: 'LE SALON' },
  { year: 2025, ko: '포시', en: 'Posi' },
  { year: 2025, ko: '너와의원', en: 'NUWA CLINIC' },
  { year: 2025, ko: '델리마트', en: 'Deli Mart' },
  // 2026
  { year: 2026, ko: '윌슨 홈코트 시리즈', en: 'Wilson Homecourt Series' },
  { year: 2026, ko: '기운상자', en: 'GIUN SANGJA' },
  { year: 2026, ko: '청기와가든', en: 'Chungkiwa Garden' },
  { year: 2026, ko: '소료', en: 'SORYO' },
  { year: 2026, ko: '르마하 패키지', en: 'Lémaha Package' },
  { year: 2026, ko: 'GTWS', en: 'Golden Trail World Series' },
  { year: 2026, ko: '델리푸드', en: 'Deli Food' },
  { year: 2026, ko: '진주 전망대', en: 'Jinju Observatory' },
  { year: 2026, ko: '기아 이음 플랫플랫', en: 'Kia eeum flatflat' },
];

// ── Translucent Frosted Glass/Acrylic Palette (Pastel Tones) ──
const BLOCK_COLORS = [
  { // Frosted Rose Pink
    stops: [
      { offset: 0.0, color: 'rgba(240, 130, 160, 0.9)' },
      { offset: 0.5, color: 'rgba(220, 150, 210, 0.9)' },
      { offset: 1.0, color: 'rgba(255, 190, 180, 0.9)' }
    ],
    side: { r: 210, g: 90, b: 120, a: 0.9 },
    shadow: 'rgba(210, 90, 120, 0.18)',
    tint: 'rgba(255, 160, 190, 0.45)',
    neon: '#ff0055' // neon pink/magenta
  },
  { // Frosted Honey Yellow
    stops: [
      { offset: 0.0, color: 'rgba(245, 205, 110, 0.9)' },
      { offset: 0.5, color: 'rgba(245, 170, 120, 0.9)' },
      { offset: 1.0, color: 'rgba(240, 140, 110, 0.9)' }
    ],
    side: { r: 215, g: 140, b: 70, a: 0.9 },
    shadow: 'rgba(215, 140, 70, 0.18)',
    tint: 'rgba(255, 210, 150, 0.45)',
    neon: '#ffaa00' // neon orange
  },
  { // Frosted Ice Teal / Blue-Green
    stops: [
      { offset: 0.0, color: 'rgba(100, 195, 195, 0.9)' },
      { offset: 0.5, color: 'rgba(125, 185, 220, 0.9)' },
      { offset: 1.0, color: 'rgba(180, 230, 210, 0.9)' }
    ],
    side: { r: 70, g: 155, b: 155, a: 0.9 },
    shadow: 'rgba(70, 155, 155, 0.18)',
    tint: 'rgba(150, 240, 240, 0.45)',
    neon: '#00f6ff' // neon cyan
  },
  { // Frosted Sage Green
    stops: [
      { offset: 0.0, color: 'rgba(155, 195, 155, 0.9)' },
      { offset: 0.5, color: 'rgba(175, 210, 175, 0.9)' },
      { offset: 1.0, color: 'rgba(225, 220, 175, 0.9)' }
    ],
    side: { r: 110, g: 160, b: 110, a: 0.9 },
    shadow: 'rgba(110, 160, 110, 0.18)',
    tint: 'rgba(195, 235, 195, 0.45)',
    neon: '#39ff14' // neon lime green
  },
  { // Frosted Violet Lavender
    stops: [
      { offset: 0.0, color: 'rgba(160, 135, 200, 0.9)' },
      { offset: 0.5, color: 'rgba(185, 155, 210, 0.9)' },
      { offset: 1.0, color: 'rgba(215, 180, 235, 0.9)' }
    ],
    side: { r: 120, g: 90, b: 170, a: 0.9 },
    shadow: 'rgba(120, 90, 170, 0.18)',
    tint: 'rgba(210, 180, 255, 0.45)',
    neon: '#bd00ff' // neon violet/purple
  }
];


const BLOCK_SIZES = ['size-lg', 'size-md', 'size-sm'];
const BLOCK_SIZE_WEIGHTS = [0.35, 0.4, 0.25]; // lg: 35%, md: 40%, sm: 25%



// ── DOM References ───────────────────────────────────────────
const blocksLayer = document.getElementById('blocks-layer');
const projectsLayer = document.getElementById('projects-layer');
const blockCountEl = document.getElementById('block-count');
const exportBtn = document.getElementById('export-pdf');
const clearBtn = document.getElementById('clear-blocks');
const exportOverlay = document.getElementById('export-overlay');
const canvas = document.getElementById('poster-canvas');

let totalBlocks = 0;

// ── Matter.js Modules ─────────────────────────────────────────
const { Engine, World, Bodies, Body, Composite, Runner, Events, Mouse, MouseConstraint } = Matter;
let engine, world, runner;
let pCanvas, pCtx;
let platform;
let leftWall, rightWall;

// ── Initialize ───────────────────────────────────────────────
function init() {
  renderProjectList();
  initPhysics();
  bindEvents();

  // Apply initial background color and styles
  updatePosterBackground('#17171b');

  // Force preloading Whoami font via CSS Font Loading API
  if (document.fonts) {
    document.fonts.load("1em 'Whoami'").then(() => {
      console.log("Whoami font loaded successfully in JS");
    }).catch(err => {
      console.warn("Failed to load Whoami font in JS:", err);
    });
  }
}

function renderProjectList() {
  const sorted = [...PROJECTS].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return a.en.localeCompare(b.en);
  });

  let listHtml = '';
  sorted.forEach((proj, i) => {
    const shortYear = proj.year.toString().slice(-2);
    listHtml += `<span class="project-name" data-en="${proj.en}" data-ko="${proj.ko}" id="proj-${i}">`;
    listHtml += `${proj.en}<span class="project-year">${shortYear}</span>`;
    listHtml += `</span>`;
  });

  let html = `
    <div class="projects-marquee-container">
      <div class="projects-scroll-wrapper" id="marquee-wrapper">
        <div class="projects-list-block">${listHtml}</div>
        <div class="projects-list-block" aria-hidden="true">${listHtml}</div>
      </div>
    </div>
    <div class="poster-info">
      @identio.kr
    </div>
  `;

  projectsLayer.innerHTML = html;
}

// ── Initialize Matter.js Physics ─────────────────────────────
function initPhysics() {
  // Create Physics Canvas
  pCanvas = document.createElement('canvas');
  pCanvas.id = 'physics-canvas';
  blocksLayer.appendChild(pCanvas);
  pCtx = pCanvas.getContext('2d');

  // Create Matter Engine
  engine = Engine.create({
    gravity: { y: 1.0, x: 0 }
  });
  world = engine.world;

  // Add Mouse Interaction
  const mouse = Mouse.create(pCanvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.15,
      render: {
        visible: false
      }
    }
  });

  // Ensure scroll wheel acts normally (not locked by Matter.js)
  mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

  Composite.add(world, mouseConstraint);

  // Set size
  resizePhysicsCanvas();

  // Run Engine
  runner = Runner.create();
  Runner.run(runner, engine);

  // Custom Render Loop
  requestAnimationFrame(renderLoop);

  // Collision Event for 'Boing' elastic squishing
  Events.on(engine, 'collisionStart', (event) => {
    event.pairs.forEach(pair => {
      const bodyA = pair.bodyA;
      const bodyB = pair.bodyB;

      let speed = 0;
      if (bodyA.speed && bodyB.speed) {
        speed = Math.max(bodyA.speed, bodyB.speed);
      } else {
        speed = bodyA.speed || bodyB.speed || 0;
      }

      // Stronger impacts create larger boing squish
      if (speed > 1.2) {
        const impulse = Math.min(0.28, speed * 0.04);
        
        if (!bodyA.isStatic && bodyA.plugin) {
          bodyA.plugin.squashX = 1 + impulse * 1.15;
          bodyA.plugin.squashY = 1 - impulse * 0.9;
        }
        if (!bodyB.isStatic && bodyB.plugin) {
          bodyB.plugin.squashX = 1 + impulse * 1.15;
          bodyB.plugin.squashY = 1 - impulse * 0.9;
        }
      }
    });
  });

  // Resize Listener
  window.addEventListener('resize', resizePhysicsCanvas);
}

// ── Resize Physics Canvas and Boundaries ─────────────────────
function resizePhysicsCanvas() {
  // Clear style-defined --c-height to allow browser recalculation from CSS rules
  canvas.style.removeProperty('--c-height');

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  // Set style-defined --c-height to actual computed height in pixels for children to inherit and scale
  canvas.style.setProperty('--c-height', `${h}px`);

  const dpr = window.devicePixelRatio || 1;

  pCanvas.width = w * dpr;
  pCanvas.height = h * dpr;
  pCanvas.style.width = `${w}px`;
  pCanvas.style.height = `${h}px`;
  pCtx.scale(dpr, dpr);

  // Boundaries cleanup
  if (platform) Composite.remove(world, platform);
  if (leftWall) Composite.remove(world, leftWall);
  if (rightWall) Composite.remove(world, rightWall);

  const thickness = 60;

  // Ground Platform aligned to exactly the bottom of A3 canvas
  platform = Bodies.rectangle(w / 2, h + thickness / 2, w * 2, thickness, {
    isStatic: true,
    friction: 0.2
  });

  // Left wall
  leftWall = Bodies.rectangle(-thickness / 2, h / 2, thickness, h * 2, {
    isStatic: true,
    friction: 0.15
  });

  // Right wall
  rightWall = Bodies.rectangle(w + thickness / 2, h / 2, thickness, h * 2, {
    isStatic: true,
    friction: 0.15
  });

  Composite.add(world, [platform, leftWall, rightWall]);
}

// ── Calculate Relative Luminance for Contrast Inversion ──────
function getLuminance(hex) {
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// ── Update Poster Background Color & Toggle Class ────────────
function updatePosterBackground(colorHex) {
  const posterCanvas = document.getElementById('poster-canvas');
  if (!posterCanvas) return;

  posterCanvas.style.backgroundColor = colorHex;
  posterCanvas.style.setProperty('--canvas-bg', colorHex);

  const normalizedColor = colorHex.toLowerCase().trim();

  if (normalizedColor === '#17171b') {
    posterCanvas.style.setProperty('--poster-text', '#eee5e0');
    posterCanvas.style.setProperty('--poster-text-year', 'rgba(238, 229, 224, 0.85)');
    posterCanvas.style.setProperty('--poster-text-active', 'rgba(238, 229, 224, 0.4)');
    posterCanvas.style.setProperty('--poster-info-color', 'rgba(238, 229, 224, 0.45)');
    posterCanvas.style.setProperty('--poster-border', 'none');
    posterCanvas.classList.remove('light-bg');
  } else if (normalizedColor === '#7d9fce') {
    posterCanvas.style.setProperty('--poster-text', '#eee5e0');
    posterCanvas.style.setProperty('--poster-text-year', 'rgba(238, 229, 224, 0.85)');
    posterCanvas.style.setProperty('--poster-text-active', 'rgba(238, 229, 224, 0.4)');
    posterCanvas.style.setProperty('--poster-info-color', 'rgba(238, 229, 224, 0.45)');
    posterCanvas.style.setProperty('--poster-border', 'none');
    posterCanvas.classList.remove('light-bg');
  } else {
    // 그외 배경 컬러일 때 테두리 제외
    posterCanvas.style.setProperty('--poster-border', 'none');

    const l = getLuminance(colorHex);
    if (l > 128) {
      posterCanvas.style.setProperty('--poster-text', '#0b0b0b');
      posterCanvas.style.setProperty('--poster-text-year', 'rgba(11, 11, 11, 0.85)');
      posterCanvas.style.setProperty('--poster-text-active', 'rgba(11, 11, 11, 0.4)');
      posterCanvas.style.setProperty('--poster-info-color', 'rgba(11, 11, 11, 0.45)');
      posterCanvas.classList.add('light-bg');
    } else {
      posterCanvas.style.setProperty('--poster-text', '#ffffff');
      posterCanvas.style.setProperty('--poster-text-year', 'rgba(255, 255, 255, 0.85)');
      posterCanvas.style.setProperty('--poster-text-active', 'rgba(255, 255, 255, 0.4)');
      posterCanvas.style.setProperty('--poster-info-color', 'rgba(255, 255, 255, 0.45)');
      posterCanvas.classList.remove('light-bg');
    }
  }
}

// ── Bind Events ──────────────────────────────────────────────
function bindEvents() {
  projectsLayer.addEventListener('click', (e) => {
    const nameEl = e.target.closest('.project-name');
    if (!nameEl) return;

    const englishName = nameEl.dataset.en;
    if (!englishName) return;

    nameEl.classList.add('is-active');
    createFallingBlocks(englishName);
  });

  // Background Customizer swatches
  const swatches = document.querySelectorAll('.bg-swatch');
  const customPickerTrigger = document.getElementById('custom-picker-trigger');
  const popover = document.getElementById('custom-color-popover');

  // New Custom Color Picker Elements
  const squareCanvas = document.getElementById('color-square');
  const squareCtx = squareCanvas ? squareCanvas.getContext('2d') : null;
  const squareWrapper = document.getElementById('color-square-wrapper');
  const colorCursor = document.getElementById('color-cursor');
  const previewCircle = document.getElementById('popover-preview-circle');
  const hueSlider = document.getElementById('hue-slider');
  const hexInput = document.getElementById('hex-val-input');
  const rInput = document.getElementById('r-val-input');
  const gInput = document.getElementById('g-val-input');
  const bInput = document.getElementById('b-val-input');

  let currentH = 0; // 0-360
  let currentS = 0; // 0-1
  let currentV = 1; // 0-1
  let isDraggingSquare = false;

  // Helper: RGB/RGBA to Hex
  function rgbToHex(rgbStr) {
    if (rgbStr.startsWith('#')) return rgbStr;
    const match = rgbStr.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)$/);
    if (!match) return '#17171b';
    const r = parseInt(match[1]).toString(16).padStart(2, '0');
    const g = parseInt(match[2]).toString(16).padStart(2, '0');
    const b = parseInt(match[3]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  }

  // Hex to RGB
  function hexToRgb(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(x => x + x).join('');
    }
    const num = parseInt(hex, 16);
    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255
    };
  }

  // RGB to Hex
  function rgbToHexValues(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  // HSV to RGB
  function hsvToRgb(h, s, v) {
    let r, g, b;
    const i = Math.floor(h / 60) % 6;
    const f = (h / 60) - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    
    switch (i) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
    }
    
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255)
    };
  }

  // RGB to HSV
  function rgbToHsv(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max === min) {
      h = 0;
    } else {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s, v };
  }

  // Draw Saturation-Value Canvas gradient
  function drawColorSquare(hue) {
    if (!squareCanvas || !squareCtx) return;
    const width = squareCanvas.width;
    const height = squareCanvas.height;
    
    squareCtx.clearRect(0, 0, width, height);

    // 1. Base Hue background
    squareCtx.fillStyle = `hsl(${hue}, 100%, 50%)`;
    squareCtx.fillRect(0, 0, width, height);
    
    // 2. White to transparent horizontal gradient (saturation)
    const gradWhite = squareCtx.createLinearGradient(0, 0, width, 0);
    gradWhite.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradWhite.addColorStop(1, 'rgba(255, 255, 255, 0)');
    squareCtx.fillStyle = gradWhite;
    squareCtx.fillRect(0, 0, width, height);
    
    // 3. Transparent to black vertical gradient (value)
    const gradBlack = squareCtx.createLinearGradient(0, 0, 0, height);
    gradBlack.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradBlack.addColorStop(1, 'rgba(0, 0, 0, 1)');
    squareCtx.fillStyle = gradBlack;
    squareCtx.fillRect(0, 0, width, height);
  }

  // Update UI Elements based on H, S, V state & Apply Color Real-time
  function updatePickerUI(source) {
    const rgb = hsvToRgb(currentH, currentS, currentV);
    const hex = rgbToHexValues(rgb.r, rgb.g, rgb.b);

    // Update canvas base color & redraw
    drawColorSquare(currentH);

    // Update cursor position on S-V canvas
    if (squareCanvas && colorCursor) {
      const rect = squareCanvas.getBoundingClientRect();
      const x = currentS * rect.width;
      const y = (1 - currentV) * rect.height;
      colorCursor.style.left = `${x}px`;
      colorCursor.style.top = `${y}px`;
    }

    // Update Hue Slider value
    if (hueSlider && source !== 'slider') {
      hueSlider.value = currentH;
    }

    // Update Preview circle color
    if (previewCircle) {
      previewCircle.style.backgroundColor = hex;
    }

    // Update text inputs
    if (hexInput && source !== 'hex') {
      hexInput.value = hex.toUpperCase();
    }
    if (rInput && source !== 'rgb') rInput.value = rgb.r;
    if (gInput && source !== 'rgb') gInput.value = rgb.g;
    if (bInput && source !== 'rgb') bInput.value = rgb.b;

    // Apply color to canvas in real-time
    updatePosterBackground(hex);
    
    // Maintain active state on custom picker
    swatches.forEach(s => s.classList.remove('active'));
    if (customPickerTrigger) customPickerTrigger.classList.add('active');
  }

  // Initialize S-V Canvas dragging
  if (squareWrapper && squareCanvas) {
    const handleMove = (e) => {
      const rect = squareCanvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      
      let x = clientX - rect.left;
      let y = clientY - rect.top;
      
      x = Math.max(0, Math.min(x, rect.width));
      y = Math.max(0, Math.min(y, rect.height));
      
      currentS = x / rect.width;
      currentV = 1 - (y / rect.height);
      
      updatePickerUI('square');
    };

    squareWrapper.addEventListener('mousedown', (e) => {
      isDraggingSquare = true;
      handleMove(e);
    });

    document.addEventListener('mousemove', (e) => {
      if (isDraggingSquare) handleMove(e);
    });

    document.addEventListener('mouseup', () => {
      isDraggingSquare = false;
    });

    // Touch events support
    squareWrapper.addEventListener('touchstart', (e) => {
      isDraggingSquare = true;
      handleMove(e);
    });
    document.addEventListener('touchmove', (e) => {
      if (isDraggingSquare) handleMove(e);
    });
    document.addEventListener('touchend', () => {
      isDraggingSquare = false;
    });
  }

  // Hue Slider Input listener
  if (hueSlider) {
    hueSlider.addEventListener('input', (e) => {
      currentH = parseInt(e.target.value);
      updatePickerUI('slider');
    });
  }

  // Hex Text input listener
  if (hexInput) {
    hexInput.addEventListener('input', (e) => {
      let val = e.target.value.replace(/[^0-9a-fA-F#]/g, '');
      e.target.value = val;
      const cleanVal = val.replace('#', '');
      if (cleanVal.length === 3 || cleanVal.length === 6) {
        const rgb = hexToRgb(cleanVal);
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        currentH = hsv.h;
        currentS = hsv.s;
        currentV = hsv.v;
        updatePickerUI('hex');
      }
    });
    
    hexInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') hexInput.blur();
    });
  }

  // RGB text input listeners
  [rInput, gInput, bInput].forEach(inputEl => {
    if (inputEl) {
      inputEl.addEventListener('input', () => {
        let r = parseInt(rInput.value) || 0;
        let g = parseInt(gInput.value) || 0;
        let b = parseInt(bInput.value) || 0;
        
        r = Math.max(0, Math.min(r, 255));
        g = Math.max(0, Math.min(g, 255));
        b = Math.max(0, Math.min(b, 255));

        const hsv = rgbToHsv(r, g, b);
        currentH = hsv.h;
        currentS = hsv.s;
        currentV = hsv.v;
        updatePickerUI('rgb');
      });
      
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') inputEl.blur();
      });
    }
  });

  // Toggle popover
  if (customPickerTrigger && popover) {
    customPickerTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      popover.classList.toggle('is-open');
      if (popover.classList.contains('is-open')) {
        // Pre-fill fields with current background color
        const currentBg = getComputedStyle(canvas).backgroundColor;
        const hexVal = rgbToHex(currentBg);
        const rgb = hexToRgb(hexVal);
        const hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
        
        currentH = hsv.h;
        currentS = hsv.s;
        currentV = hsv.v;
        
        updatePickerUI();
      }
    });
  }

  // Hide popover when clicking swatch
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      if (customPickerTrigger) customPickerTrigger.classList.remove('active');
      if (popover) popover.classList.remove('is-open');

      swatch.classList.add('active');
      const selectedColor = swatch.dataset.color;
      updatePosterBackground(selectedColor);
    });
  });



  // Close popover when clicking outside
  document.addEventListener('click', (e) => {
    if (popover && !popover.contains(e.target) && e.target !== customPickerTrigger) {
      popover.classList.remove('is-open');
    }
  });

  exportBtn.addEventListener('click', exportPDF);
  const exportJpgBtn = document.getElementById('export-jpg');
  if (exportJpgBtn) {
    exportJpgBtn.addEventListener('click', exportJPG);
  }
  clearBtn.addEventListener('click', clearBlocks);
}

// ── Pre-render block text to offscreen canvas ─────────────────
function preRenderBlockText(text, sizePx, color) {
  const offCanvas = document.createElement('canvas');
  const offCtx = offCanvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const padding = 20;
  const baseSize = Math.ceil(sizePx * 1.5) + padding * 2;
  const size = baseSize * dpr;
  
  offCanvas.width = size;
  offCanvas.height = size;
  
  offCtx.save();
  offCtx.scale(dpr, dpr);
  offCtx.font = `normal ${sizePx}px 'Whoami'`;
  offCtx.textAlign = 'center';
  offCtx.textBaseline = 'middle';
  offCtx.fillStyle = color.stops[0].color;
  offCtx.fillText(text, baseSize / 2, baseSize / 2);
  offCtx.restore();
  
  return { canvas: offCanvas, baseSize: baseSize };
}

// ── Create Falling Blocks (Matter.js Bodies) ─────────────────
function createFallingBlocks(text) {
  const letters = text.replace(/\s+/g, '').split('');
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  letters.forEach((letter, i) => {
    // Calculate sizing individually for each falling letter to vary between large, medium, and small
    const sizeClass = weightedRandom(BLOCK_SIZES, BLOCK_SIZE_WEIGHTS);
    let sizePx = h * 0.45; // 대(lg) 사이즈 = 현재 초대형 사이즈 (h * 0.45)
    if (sizeClass === 'size-md') sizePx = h * 0.28; // 중(md) 사이즈
    else if (sizeClass === 'size-sm') sizePx = h * 0.16; // 소(sm) 사이즈

    const margin = sizePx * 0.55;
    const startX = margin + Math.random() * (w - margin * 2);
    const startY = -sizePx * 1.5 - (i * sizePx * 1.0); // Sequential delay drop

    const color = BLOCK_COLORS[Math.floor(Math.random() * BLOCK_COLORS.length)];
    const rendered = preRenderBlockText(letter, sizePx, color);

    // Create custom physical block with full collision bounds to prevent visual overlap
    const blockBody = Bodies.rectangle(startX, startY, sizePx * 0.52, sizePx * 0.52, {
      restitution: 0.4,  // Solid wobbly bounce
      friction: 0.15,    // Normal friction to stack stably
      frictionAir: 0.015,
      angle: (Math.random() - 0.5) * 0.8,
      plugin: {
        text: letter,
        sizePx: sizePx,
        color: color,
        offCanvas: rendered.canvas,
        baseSize: rendered.baseSize,

        opacity: 1.0, // Revert to solid version (no fading trail)
        isFadeOut: false,
        squashX: 1.0,
        squashY: 1.0,
        velX: 0,
        velY: 0,
      }
    });

    // Add initial downward/horizontal momentum
    Body.setVelocity(blockBody, {
      x: (Math.random() - 0.5) * 1.2,
      y: 2.5 + Math.random() * 2
    });
    Body.setAngularVelocity(blockBody, (Math.random() - 0.5) * 0.1);

    Composite.add(world, blockBody);
    totalBlocks++;
  });

  updateBlockCount();
}

// ── Matter.js Frame Rendering Loop ────────────────────────────
function renderLoop() {
  if (!pCtx) return;

  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;

  // Clear frame with transparency to allow exact alpha masking for intersections
  pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

  const bodies = Composite.allBodies(world);

  bodies.forEach(body => {
    if (body.isStatic) return;

    // Out of bounds detection
    if (body.position.y > h + 250 || body.position.x < -200 || body.position.x > w + 200) {
      Composite.remove(world, body);
      totalBlocks = Math.max(0, totalBlocks - 1);
      updateBlockCount();
      return;
    }

    // Fade out handling
    if (body.plugin.isFadeOut) {
      body.plugin.opacity -= 0.05;
      if (body.plugin.opacity <= 0) {
        Composite.remove(world, body);
        totalBlocks = Math.max(0, totalBlocks - 1);
        updateBlockCount();
        return;
      }
    }

    // Spring physics update for 'Boing' wobble effect
    const k = 0.15;       // Spring stiffness
    const damping = 0.80; // Damping/absorption
    const target = 1.0;

    // X-axis spring
    const forceX = -k * (body.plugin.squashX - target);
    body.plugin.velX = (body.plugin.velX + forceX) * damping;
    body.plugin.squashX += body.plugin.velX;

    // Y-axis spring
    const forceY = -k * (body.plugin.squashY - target);
    body.plugin.velY = (body.plugin.velY + forceY) * damping;
    body.plugin.squashY += body.plugin.velY;

    drawJellyBlock(pCtx, body);
  });

  pCtx.globalCompositeOperation = 'source-over'; // Restore default

  requestAnimationFrame(renderLoop);
}

// ── Draw Translucent Jelly Block on Canvas ───────────────────
function drawJellyBlock(ctx, body) {
  const { text, sizePx, color, opacity, squashX, squashY, offCanvas, baseSize } = body.plugin;

  // Build block offscreen canvas lazily if missing
  let blockCanvas = offCanvas;
  let blockBaseSize = baseSize;
  if (!blockCanvas) {
    const rendered = preRenderBlockText(text, sizePx, color);
    body.plugin.offCanvas = rendered.canvas;
    body.plugin.baseSize = rendered.baseSize;
    blockCanvas = rendered.canvas;
    blockBaseSize = rendered.baseSize;
  }

  const dpr = window.devicePixelRatio || 1;

  // 1. Calculate intersection BEFORE drawing the block to the main canvas
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;
  if (!window.intersectionCanvas) {
    window.intersectionCanvas = document.createElement('canvas');
    window.intersectionCtx = window.intersectionCanvas.getContext('2d');
  }
  const interCanvas = window.intersectionCanvas;
  const interCtx = window.intersectionCtx;

  if (interCanvas.width !== w || interCanvas.height !== h) {
    interCanvas.width = w;
    interCanvas.height = h;
  }

  // Clear intersection context
  interCtx.clearRect(0, 0, w, h);
  
  // Copy current main canvas to intersection canvas
  interCtx.drawImage(ctx.canvas, 0, 0);

  // Intersect with the new block shape
  interCtx.save();
  interCtx.scale(dpr, dpr);
  interCtx.globalCompositeOperation = 'source-in';
  interCtx.translate(body.position.x, body.position.y);
  interCtx.rotate(body.angle);
  interCtx.scale(squashX, squashY);
  interCtx.drawImage(blockCanvas, -blockBaseSize / 2, -blockBaseSize / 2, blockBaseSize, blockBaseSize);
  interCtx.restore();

  // Color the intersection with the block's matched neon color!
  interCtx.save();
  interCtx.globalCompositeOperation = 'source-in';
  interCtx.fillStyle = color.neon || '#ff5e00';
  interCtx.fillRect(0, 0, w, h);
  interCtx.restore();

  // 2. Draw the normal block itself onto the main canvas (using normal source-over blend)
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(body.position.x, body.position.y);
  ctx.rotate(body.angle);
  ctx.scale(squashX, squashY);
  ctx.globalCompositeOperation = 'source-over';
  ctx.drawImage(blockCanvas, -blockBaseSize / 2, -blockBaseSize / 2, blockBaseSize, blockBaseSize);
  ctx.restore();

  // 3. Draw the neon intersection on top of the main canvas
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.globalCompositeOperation = 'source-over';
  // Scale the destination draw dimensions since main canvas is already scaled by dpr
  ctx.drawImage(interCanvas, 0, 0, w / dpr, h / dpr);
  ctx.restore();
}

// ── Weighted Random Selection ────────────────────────────────
function weightedRandom(items, weights) {
  let total = 0;
  const cumulative = weights.map(w => (total += w));
  const r = Math.random() * total;
  for (let i = 0; i < items.length; i++) {
    if (r < cumulative[i]) return items[i];
  }
  return items[items.length - 1];
}

// ── Update Block Counter ─────────────────────────────────────
function updateBlockCount() {
  blockCountEl.textContent = totalBlocks;
}

// ── Clear All Blocks (Fade out effect) ───────────────────────
function clearBlocks() {
  const bodies = Composite.allBodies(world);
  let count = 0;

  bodies.forEach(body => {
    if (body.isStatic) return;
    body.plugin.isFadeOut = true;
    count++;
  });

  if (count === 0) return;

  // Reset active state styles
  document.querySelectorAll('.project-name.is-active').forEach(el => {
    el.classList.remove('is-active');
  });
}

// ── Export as A3 PDF ─────────────────────────────────────────
async function exportPDF() {
  const statusText = exportOverlay.querySelector('p');
  if (statusText) statusText.textContent = 'Exporting A3 PDF...';
  exportOverlay.classList.add('is-visible');
  canvas.classList.add('is-exporting');

  await new Promise(r => setTimeout(r, 100));

  try {
    const scale = 3;
    const capturedCanvas = await html2canvas(canvas, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedBlocks = clonedDoc.getElementById('blocks-layer');
        if (clonedBlocks) {
          clonedBlocks.style.filter = 'blur(2px)';
        }
        // Stop marquee animation in cloned document to prevent html2canvas freezing/hanging
        const clonedMarquee = clonedDoc.getElementById('marquee-wrapper');
        if (clonedMarquee) {
          clonedMarquee.style.animation = 'none';
        }
        // Force rendering Matter.js Canvas contents into html2canvas cloned canvas
        const originalCanvas = document.getElementById('physics-canvas');
        const clonedCanvas = clonedDoc.getElementById('physics-canvas');
        if (originalCanvas && clonedCanvas) {
          const ctx = clonedCanvas.getContext('2d');
          clonedCanvas.width = originalCanvas.width;
          clonedCanvas.height = originalCanvas.height;
          ctx.drawImage(originalCanvas, 0, 0);
        }
      }
    });

    const a3Width = 297;
    const a3Height = 420;

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: [a3Width, a3Height],
    });

    const imgData = capturedCanvas.toDataURL('image/jpeg', 0.95);
    pdf.addImage(imgData, 'JPEG', 0, 0, a3Width, a3Height);

    const timestamp = new Date().toISOString().slice(0, 10);
    pdf.save(`IDENTIO_ATLAS_poster_${timestamp}.pdf`);

  } catch (err) {
    console.error('PDF export failed:', err);
    alert('PDF export failed. Please try again.');
  } finally {
    canvas.classList.remove('is-exporting');
    exportOverlay.classList.remove('is-visible');
  }
}

// ── Export as JPG ───────────────────────────────────────────
async function exportJPG() {
  const statusText = exportOverlay.querySelector('p');
  if (statusText) statusText.textContent = 'Exporting JPG...';
  exportOverlay.classList.add('is-visible');
  canvas.classList.add('is-exporting');

  await new Promise(r => setTimeout(r, 100));

  try {
    const scale = 3;
    const capturedCanvas = await html2canvas(canvas, {
      scale: scale,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false,
      onclone: (clonedDoc) => {
        const clonedBlocks = clonedDoc.getElementById('blocks-layer');
        if (clonedBlocks) {
          clonedBlocks.style.filter = 'blur(2px)';
        }
        // Stop marquee animation in cloned document to prevent html2canvas freezing/hanging
        const clonedMarquee = clonedDoc.getElementById('marquee-wrapper');
        if (clonedMarquee) {
          clonedMarquee.style.animation = 'none';
        }
        // Force rendering Matter.js Canvas contents into html2canvas cloned canvas
        const originalCanvas = document.getElementById('physics-canvas');
        const clonedCanvas = clonedDoc.getElementById('physics-canvas');
        if (originalCanvas && clonedCanvas) {
          const ctx = clonedCanvas.getContext('2d');
          clonedCanvas.width = originalCanvas.width;
          clonedCanvas.height = originalCanvas.height;
          ctx.drawImage(originalCanvas, 0, 0);
        }
      }
    });

    const imgData = capturedCanvas.toDataURL('image/jpeg', 0.95);
    const link = document.createElement('a');
    const timestamp = new Date().toISOString().slice(0, 10);
    link.download = `IDENTIO_ATLAS_poster_${timestamp}.jpg`;
    link.href = imgData;
    link.click();

  } catch (err) {
    console.error('JPG export failed:', err);
    alert('JPG export failed. Please try again.');
  } finally {
    canvas.classList.remove('is-exporting');
    exportOverlay.classList.remove('is-visible');
  }
}

// ── Start ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', init);
