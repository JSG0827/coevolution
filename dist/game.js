const policies = [
  { id: 'housing', icon: '⌂', name: '빈 건물 순환주택', desc: '도심의 빈 건물을 수리해 빠르게 주거를 공급한다.', effects: ['주거 +', '토지 훼손 ↓', '비용 ↑'], capacity: 330, metrics: { safety: 1, livelihood: 1, ecology: 1, equity: 3, carbon: 1 } },
  { id: 'compact', icon: '▦', name: '고밀도 생태주거', desc: '대중교통과 가까운 곳에 에너지 효율이 높은 주택을 짓는다.', effects: ['수용력 +', '탄소 ↓', '건설비 ↑'], capacity: 450, metrics: { safety: 2, livelihood: 2, ecology: 1, equity: 2, carbon: 3 } },
  { id: 'wetland', icon: '≋', name: '연안 습지 복원', desc: '훼손된 습지를 되살려 홍수와 생물다양성 위험을 낮춘다.', effects: ['생태 +', '홍수 위험 ↓', '부지 ↓'], capacity: 60, metrics: { safety: 4, livelihood: 1, ecology: 4, equity: 1, carbon: 2 } },
  { id: 'farm', icon: '⌁', name: '염분 적응 농업', desc: '내염성 작물과 절수 농법으로 새로운 생계를 지원한다.', effects: ['식량 +', '농업 생계 +', '용수 부담'], capacity: 130, metrics: { safety: 1, livelihood: 4, ecology: 2, equity: 2, carbon: 1 } },
  { id: 'mobility', icon: '↝', name: '녹색 이동망', desc: '대중교통과 자전거망으로 주거와 일자리를 연결한다.', effects: ['접근성 +', '탄소 ↓', '초기 비용'], capacity: 90, metrics: { safety: 1, livelihood: 3, ecology: 2, equity: 3, carbon: 4 } },
  { id: 'care', icon: '✚', name: '돌봄·폭염 안전망', desc: '보건소, 무더위 쉼터, 방문 돌봄을 확대한다.', effects: ['건강 +', '형평성 +', '운영비 ↑'], capacity: 60, metrics: { safety: 4, livelihood: 1, ecology: 0, equity: 4, carbon: 0 } },
  { id: 'jobs', icon: '⚒', name: '지역 일자리 전환', desc: '생태 복원과 재생에너지 분야의 직업 훈련을 제공한다.', effects: ['생계 +', '전환 시간', '기술 격차'], capacity: 80, metrics: { safety: 0, livelihood: 4, ecology: 2, equity: 3, carbon: 2 } },
  { id: 'council', icon: '◎', name: '주민 공동결정제', desc: '이주민과 기존 주민이 예산과 공간 계획을 함께 결정한다.', effects: ['참여 +', '갈등 ↓', '결정 속도 ↓'], capacity: 40, metrics: { safety: 1, livelihood: 1, ecology: 1, equity: 4, carbon: 0 } },
  { id: 'seawall', icon: '▰', name: '대형 방조제', desc: '해안에 높은 방조제를 세워 단기 침수 위험을 낮춘다.', effects: ['방재 +', '연안 흐름 변화', '생태 부담'], capacity: 150, metrics: { safety: 4, livelihood: 0, ecology: -4, equity: 0, carbon: -2 } }
];

const profiles = [
  { name: '연안 생계·문화 공동체', need: '습지·어업 생계와 공동체 유지', prefs: { wetland: 3, council: 3, housing: 2, jobs: 1, seawall: -2 } },
  { name: '농업 생계 가구', need: '경작 기술·용수·안정적인 토지', prefs: { farm: 4, housing: 2, council: 2, jobs: 2, seawall: -1 } },
  { name: '어린이·고령자 동반 가구', need: '돌봄·보건·안전한 주거', prefs: { care: 4, housing: 3, compact: 2, mobility: 1 } },
  { name: '청년 구직·학습자', need: '일자리·교육·이동 접근성', prefs: { jobs: 4, mobility: 4, compact: 2, council: 1 } },
  { name: '소규모 자영업 가구', need: '상권·주거·지역 의사결정 참여', prefs: { jobs: 3, housing: 3, council: 3, mobility: 2 } }
];

const cohortTemplates = [[320, 300, 220, 210, 150], [180, 200, 360, 210, 250], [150, 180, 180, 450, 240], [240, 240, 240, 240, 240]];
const events = [
  { kicker: '2049년 · 기록적 집중호우', title: '하천과 해안이 동시에 범람했습니다', desc: '저지대 주택과 도로가 침수되고 습지 주변의 오염 물질이 확산되었습니다. 일부 주민은 다시 이동을 고민합니다.', pressure: '해수면 상승과 기록적 집중호우', response: '주거지와 생물 서식지가 침수되고 다시 이동할 위험이 커진다', effective: ['wetland', 'seawall', 'compact', 'care'], delta: { safety: -18, livelihood: -6, ecology: -10, equity: -5, carbon: 0 } },
  { kicker: '2050년 · 21일 연속 폭염', title: '밤에도 식지 않는 폭염이 이어졌습니다', desc: '냉방비와 온열질환이 늘었고, 그늘과 의료 접근이 부족한 주민에게 피해가 집중되었습니다.', pressure: '장기간의 폭염과 열대야', response: '건강 피해와 냉방 에너지 사용이 늘고 취약 집단의 부담이 커진다', effective: ['care', 'compact', 'mobility', 'wetland'], delta: { safety: -16, livelihood: -5, ecology: -5, equity: -10, carbon: -7 } },
  { kicker: '2048년 · 주거비 급등', title: '안전한 지역의 임대료가 빠르게 올랐습니다', desc: '정착 주민과 기존 저소득 주민이 외곽 위험지역으로 밀려나고 있습니다. 새로운 개발을 둘러싼 갈등도 커졌습니다.', pressure: '안전 지역 집중과 주거비 상승', response: '저소득 주민이 위험지역으로 밀려나며 노출과 불평등이 커진다', effective: ['housing', 'compact', 'council'], delta: { safety: -7, livelihood: -8, ecology: -3, equity: -19, carbon: -2 } },
  { kicker: '2051년 · 염수 피해 확대', title: '농경지와 지하수의 염분이 증가했습니다', desc: '식량 생산량이 줄고 농업 생계 가구의 소득이 감소했습니다. 더 많은 담수를 끌어오자는 요구가 나옵니다.', pressure: '해수면 상승과 지하수 염분 증가', response: '작물 생산과 농업 생계가 불안정해지고 담수 수요가 증가한다', effective: ['farm', 'wetland', 'jobs'], delta: { safety: -6, livelihood: -18, ecology: -9, equity: -6, carbon: -2 } },
  { kicker: '2052년 · 생태 조사 결과', title: '습지 생물의 종수가 크게 감소했습니다', desc: '주거와 도로가 이동 경로를 끊으면서 조류와 저서생물의 서식지가 줄었습니다. 홍수 때 물을 저장할 공간도 감소했습니다.', pressure: '개발에 따른 습지 단절과 생물다양성 감소', response: '서식지와 물 저장 기능이 줄어 사람과 생물 모두의 위험이 커진다', effective: ['wetland', 'council', 'farm'], delta: { safety: -8, livelihood: -5, ecology: -21, equity: -3, carbon: -4 } },
  { kicker: '2049년 · 지역 갈등 심화', title: '일자리와 예산 배분을 둘러싼 갈등이 커졌습니다', desc: '정책 결정에서 배제되었다고 느끼는 주민이 늘었고, 이주민과 기존 주민을 나누는 소문이 퍼지고 있습니다.', pressure: '기후 충격 이후의 자원·기회 부족', response: '일자리와 예산 경쟁이 커지며 정착 안정성과 공동체 신뢰가 낮아진다', effective: ['council', 'jobs', 'mobility', 'housing'], delta: { safety: -4, livelihood: -12, ecology: 0, equity: -18, carbon: 0 } }
];

const metricNames = { safety: '안전·건강', livelihood: '생계·접근성', ecology: '생태 회복력', equity: '형평성', carbon: '저탄소 전환' };
const state = { studentId: '', seed: 0, selected: [], reasons: {}, cohort: [], event: null, addedPolicy: null, eventReason: '', loop: {} };
const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const getPolicy = (id) => policies.find((policy) => policy.id === id);
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const hashText = (text) => [...text].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 17) >>> 0;

function policyCard(policy, selected = false) {
  return `<button class="policy-card${selected ? ' selected' : ''}" type="button" data-policy="${policy.id}" aria-pressed="${selected}"><span class="policy-icon" aria-hidden="true">${policy.icon}</span><h3>${policy.name}</h3><p>${policy.desc}</p><span class="policy-effects">${policy.effects.map((effect) => `<span>${effect}</span>`).join('')}</span></button>`;
}
function renderPolicies() {
  $('#policyGrid').innerHTML = policies.map((policy) => policyCard(policy)).join('');
  document.querySelectorAll('#policyGrid .policy-card').forEach((card) => card.addEventListener('click', () => togglePolicy(card)));
}
function togglePolicy(card) {
  const id = card.dataset.policy;
  const selected = state.selected.includes(id);
  if (!selected && state.selected.length >= 3) return;
  state.selected = selected ? state.selected.filter((item) => item !== id) : [...state.selected, id];
  document.querySelectorAll('#policyGrid .policy-card').forEach((item) => {
    const active = state.selected.includes(item.dataset.policy);
    item.classList.toggle('selected', active); item.setAttribute('aria-pressed', String(active));
  });
  $('#selectedCount').textContent = state.selected.length;
  $('#confirmPolicyBtn').disabled = state.selected.length !== 3;
  $('#policyHint').textContent = state.selected.length === 3 ? '선택한 정책의 이유를 설명할 준비가 되었습니다.' : `정책을 ${3 - state.selected.length}개 더 선택하세요.`;
}
function showScreen(id, label) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === id));
  $('#stepPill').textContent = label; window.scrollTo({ top: 0, behavior: 'smooth' });
}
function begin() {
  const studentId = $('#studentId').value.trim();
  if (!studentId) { $('#studentError').textContent = '출석번호 또는 별칭을 입력하세요.'; $('#studentId').focus(); return; }
  $('#studentError').textContent = ''; state.studentId = studentId; state.seed = hashText(studentId);
  state.cohort = cohortTemplates[state.seed % cohortTemplates.length]; state.event = events[(Math.floor(state.seed / 7) + state.seed) % events.length];
  showScreen('policyScreen', '1 / 5 · 정책 선택');
}
function renderReasons() {
  $('#reasonGrid').innerHTML = state.selected.map((id) => {
    const policy = getPolicy(id);
    return `<article class="reason-card"><span class="policy-icon" aria-hidden="true">${policy.icon}</span><h3>${policy.name}</h3><p>${policy.desc}</p><label for="reason-${id}">선택 이유와 예상되는 한계</label><textarea id="reason-${id}" data-reason="${id}" rows="5" maxlength="220" placeholder="효과와 예상되는 한계를 함께 적으세요.">${escapeHtml(state.reasons[id] || '')}</textarea></article>`;
  }).join('');
  document.querySelectorAll('[data-reason]').forEach((area) => area.addEventListener('input', validateReasons)); validateReasons();
}
function validateReasons() {
  document.querySelectorAll('[data-reason]').forEach((area) => { state.reasons[area.dataset.reason] = area.value.trim(); });
  $('#runSimulationBtn').disabled = !state.selected.every((id) => (state.reasons[id] || '').length >= 5);
}
function calculateMetrics(policyIds) {
  const metrics = { safety: 35, livelihood: 35, ecology: 45, equity: 35, carbon: 40 };
  policyIds.forEach((id) => { Object.keys(metrics).forEach((key) => { metrics[key] += getPolicy(id).metrics[key] * 5; }); });
  Object.keys(metrics).forEach((key) => { metrics[key] = clamp(Math.round(metrics[key]), 0, 100); }); return metrics;
}
function calculateFit(policyIds) {
  const total = state.cohort.reduce((sum, count) => sum + count, 0);
  const weighted = profiles.reduce((sum, profile, index) => {
    const preference = policyIds.reduce((score, id) => score + (profile.prefs[id] || 0), 0);
    return sum + clamp(38 + preference * 7, 18, 96) * state.cohort[index];
  }, 0); return Math.round(weighted / total);
}
function metricBars(metrics, prior = null) {
  return Object.entries(metricNames).map(([key, label]) => {
    const change = prior ? metrics[key] - prior[key] : null; const changeLabel = change === null ? '' : ` (${change > 0 ? '+' : ''}${change})`;
    return `<div class="metric-row"><div class="metric-label"><span>${label}</span><span>${metrics[key]}${changeLabel}</span></div><div class="metric-track"><div class="metric-fill" style="width:${metrics[key]}%"></div></div></div>`;
  }).join('');
}
function renderReveal() {
  state.initialMetrics = calculateMetrics(state.selected); state.initialSettled = clamp(220 + state.selected.reduce((sum, id) => sum + getPolicy(id).capacity, 0), 0, 1200); state.initialFit = calculateFit(state.selected);
  $('#resultHero').innerHTML = `<div class="result-stat"><span>안전하게 정착 가능한 인원</span><strong>${state.initialSettled.toLocaleString()}명</strong></div><div class="result-stat"><span>정착 지속 의향</span><strong>${state.initialFit}%</strong></div><div class="result-stat"><span>생태 회복력</span><strong>${state.initialMetrics.ecology}점</strong></div>`;
  $('#profileList').innerHTML = profiles.map((profile, index) => {
    const best = [...state.selected].sort((a, b) => (profile.prefs[b] || 0) - (profile.prefs[a] || 0))[0];
    const fit = best && (profile.prefs[best] || 0) >= 2 ? `${getPolicy(best).name}이 핵심 필요와 연결됨` : '핵심 필요를 직접 지원하는 정책이 부족함';
    return `<div class="profile-row"><strong>${profile.name}</strong><span>${state.cohort[index].toLocaleString()}명</span><small>${profile.need} · ${fit}</small></div>`;
  }).join('');
  $('#metricList').innerHTML = metricBars(state.initialMetrics);
  const lowest = Object.entries(state.initialMetrics).sort((a, b) => a[1] - b[1])[0]; const missing = 1200 - state.initialSettled;
  $('#initialInsight').innerHTML = `<strong>현재 계획의 다음 과제: ${metricNames[lowest[0]]}</strong><p>${missing > 0 ? `신청자 중 ${missing.toLocaleString()}명에게는 아직 안전한 주거·서비스가 부족합니다.` : '신청자 1,200명이 모두 정착할 기본 수용력을 확보했습니다.'} 정책의 수보다 서로의 약점을 보완하는 조합이 중요합니다.</p>`;
}
function renderEvent() {
  const event = state.event; $('#eventBanner').innerHTML = `<span>${event.kicker}</span><h2>${event.title}</h2><p>${event.desc}</p>`;
  $('#eventPolicyGrid').innerHTML = policies.filter((policy) => !state.selected.includes(policy.id)).map((policy) => policyCard(policy, policy.id === state.addedPolicy)).join('');
  document.querySelectorAll('#eventPolicyGrid .policy-card').forEach((card) => card.addEventListener('click', () => {
    state.addedPolicy = card.dataset.policy;
    document.querySelectorAll('#eventPolicyGrid .policy-card').forEach((item) => { const active = item.dataset.policy === state.addedPolicy; item.classList.toggle('selected', active); item.setAttribute('aria-pressed', String(active)); });
    $('#addedCount').textContent = '1'; validateEvent();
  }));
}
function validateEvent() {
  state.eventReason = $('#eventReason').value.trim(); const ready = Boolean(state.addedPolicy) && state.eventReason.length >= 8; $('#confirmEventBtn').disabled = !ready;
  $('#eventHint').textContent = !state.addedPolicy ? '정책을 한 가지 선택하세요.' : state.eventReason.length < 8 ? '이유를 한 문장 이상 작성하세요.' : '대응 결정을 확인할 준비가 되었습니다.';
}
function calculateFinalResults() {
  const added = getPolicy(state.addedPolicy); const all = [...state.selected, state.addedPolicy]; const effectiveCount = all.filter((id) => state.event.effective.includes(id)).length; const mitigation = Math.min(8, effectiveCount * 3);
  state.finalMetrics = { ...state.initialMetrics };
  Object.keys(state.finalMetrics).forEach((key) => { const loss = state.event.delta[key]; const softened = loss < 0 ? Math.min(0, loss + mitigation) : loss; state.finalMetrics[key] = clamp(Math.round(state.initialMetrics[key] + softened + added.metrics[key] * 5), 0, 100); });
  state.finalSettled = clamp(state.initialSettled + added.capacity - Math.max(0, 150 - effectiveCount * 45), 0, 1200); state.finalFit = calculateFit(all);
}
function renderLoop() {
  calculateFinalResults(); $('#loopPressure').textContent = state.event.pressure; $('#loopResponse').textContent = state.event.response; $('#loopPolicy').textContent = getPolicy(state.addedPolicy).name;
}
function validateLoop() {
  const type = document.querySelector('input[name="loopType"]:checked');
  state.loop = { earth: $('#earthEffect').value.trim(), returned: $('#returnEffect').value.trim(), type: type ? type.value : '', tradeoff: $('#tradeoff').value.trim() };
  const ready = state.loop.earth.length >= 8 && state.loop.returned.length >= 8 && state.loop.tradeoff.length >= 8 && state.loop.type;
  $('#finishBtn').disabled = !ready; $('#loopHint').textContent = ready ? '공진화 고리가 완성되었습니다.' : '세 문장과 되먹임 유형을 모두 완성하세요.';
}
function renderReport() {
  const added = getPolicy(state.addedPolicy); const lowest = Object.entries(state.finalMetrics).sort((a, b) => a[1] - b[1])[0]; const strongest = Object.entries(state.finalMetrics).sort((a, b) => b[1] - a[1])[0];
  $('#reportSheet').innerHTML = `<header class="report-header"><div><p class="eyebrow">새봄시 기후이동 시뮬레이션</p><h2>공진화 정책 결정서</h2></div><div class="report-meta"><strong>${escapeHtml(state.studentId)}</strong><br>${new Date().toLocaleDateString('ko-KR')}</div></header>
  <section class="report-section"><h3>1. 나의 초기 정책</h3><div class="report-policy-list">${state.selected.map((id) => `<div class="report-policy"><strong>${getPolicy(id).name}</strong><p>${escapeHtml(state.reasons[id])}</p></div>`).join('')}</div></section>
  <section class="report-section"><h3>2. 1차 정착 결과</h3><div class="report-numbers"><div class="report-number"><span>안전한 정착 가능</span><strong>${state.initialSettled.toLocaleString()}명</strong></div><div class="report-number"><span>정착 지속 의향</span><strong>${state.initialFit}%</strong></div><div class="report-number"><span>생태 회복력</span><strong>${state.initialMetrics.ecology}점</strong></div></div></section>
  <section class="report-section"><h3>3. 돌발 상황과 추가 결정</h3><p><strong>${state.event.title}</strong></p><div class="report-note"><strong>${added.name}</strong><br>${escapeHtml(state.eventReason)}</div></section>
  <section class="report-section"><h3>4. 내가 만든 공진화 고리</h3><div class="report-loop">${escapeHtml(state.event.pressure)} → ${escapeHtml(state.event.response)} → <b>${added.name}</b> → ${escapeHtml(state.loop.earth)} → ${escapeHtml(state.loop.returned)}<br><b>${escapeHtml(state.loop.type)}</b></div><p><strong>새롭게 생길 수 있는 부담:</strong> ${escapeHtml(state.loop.tradeoff)}</p></section>
  <section class="report-section"><h3>5. 최종 진단</h3><div class="report-numbers"><div class="report-number"><span>안전한 정착 가능</span><strong>${state.finalSettled.toLocaleString()}명</strong></div><div class="report-number"><span>정착 지속 의향</span><strong>${state.finalFit}%</strong></div><div class="report-number"><span>${metricNames[strongest[0]]}</span><strong>${strongest[1]}점</strong></div></div><p>현재 계획의 상대적 강점은 <strong>${metricNames[strongest[0]]}</strong>, 다음 과제는 <strong>${metricNames[lowest[0]]}</strong>입니다. 이 결과는 정답 판정이 아니라 선택의 상호작용을 비교하는 모형입니다.</p></section>`;
}
function reportText() {
  const added = getPolicy(state.addedPolicy); return `[공진화 정책 결정서 · ${state.studentId}]\n초기 정책: ${state.selected.map((id) => getPolicy(id).name).join(', ')}\n돌발 상황: ${state.event.title}\n추가 정책: ${added.name}\n추가 이유: ${state.eventReason}\n공진화 고리: ${state.event.pressure} → ${state.event.response} → ${added.name} → ${state.loop.earth} → ${state.loop.returned}\n되먹임 유형: ${state.loop.type}\n새로운 부담: ${state.loop.tradeoff}\n최종 안전 정착 가능 인원: ${state.finalSettled}명`;
}
async function copyReport() {
  try { await navigator.clipboard.writeText(reportText()); } catch { const area = document.createElement('textarea'); area.value = reportText(); document.body.append(area); area.select(); document.execCommand('copy'); area.remove(); }
  $('#copyBtn').textContent = '복사 완료'; setTimeout(() => { $('#copyBtn').textContent = '내용 복사'; }, 1800);
}

$('#startBtn').addEventListener('click', begin); $('#studentId').addEventListener('keydown', (event) => { if (event.key === 'Enter') begin(); });
$('#confirmPolicyBtn').addEventListener('click', () => { renderReasons(); showScreen('reasonScreen', '2 / 5 · 선택 근거'); });
$('#backToPolicyBtn').addEventListener('click', () => showScreen('policyScreen', '1 / 5 · 정책 선택'));
$('#runSimulationBtn').addEventListener('click', () => { renderReveal(); showScreen('revealScreen', '3 / 5 · 정착 결과'); });
$('#drawEventBtn').addEventListener('click', () => { renderEvent(); showScreen('eventScreen', '4 / 5 · 돌발 상황'); });
$('#eventReason').addEventListener('input', validateEvent); $('#confirmEventBtn').addEventListener('click', () => { renderLoop(); showScreen('loopScreen', '5 / 5 · 공진화 고리'); });
['earthEffect', 'returnEffect', 'tradeoff'].forEach((id) => $(`#${id}`).addEventListener('input', validateLoop)); document.querySelectorAll('input[name="loopType"]').forEach((radio) => radio.addEventListener('change', validateLoop));
$('#finishBtn').addEventListener('click', () => { validateLoop(); renderReport(); showScreen('reportScreen', '완료 · 개인 결과지'); }); $('#printBtn').addEventListener('click', () => window.print()); $('#copyBtn').addEventListener('click', copyReport); $('#restartBtn').addEventListener('click', () => window.location.reload());
renderPolicies();
