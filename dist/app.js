const policies = [
  { id: 'housing', icon: '⌂', name: '빈 건물 순환주택', desc: '도심의 빈 건물을 수리해 빠르게 주거를 공급한다.', effects: ['주거 +', '토지 훼손 ↓', '비용 ↑'] },
  { id: 'compact', icon: '▦', name: '고밀도 생태주거', desc: '대중교통과 가까운 곳에 에너지 효율이 높은 주택을 짓는다.', effects: ['수용력 +', '탄소 ↓', '건설비 ↑'] },
  { id: 'wetland', icon: '≋', name: '연안 습지 복원', desc: '훼손된 습지를 되살려 홍수와 생물다양성 위험을 낮춘다.', effects: ['생태 +', '홍수 위험 ↓', '부지 ↓'] },
  { id: 'farm', icon: '⌁', name: '염분 적응 농업', desc: '내염성 작물과 절수 농법으로 새로운 생계를 지원한다.', effects: ['식량 +', '농업 생계 +', '용수 부담'] },
  { id: 'mobility', icon: '↝', name: '녹색 이동망', desc: '대중교통과 자전거망으로 주거와 일자리를 연결한다.', effects: ['접근성 +', '탄소 ↓', '초기 비용'] },
  { id: 'care', icon: '✚', name: '돌봄·폭염 안전망', desc: '보건소, 무더위 쉼터, 방문 돌봄을 확대한다.', effects: ['건강 +', '형평성 +', '운영비 ↑'] },
  { id: 'jobs', icon: '⚒', name: '지역 일자리 전환', desc: '생태 복원과 재생에너지 분야의 직업 훈련을 제공한다.', effects: ['생계 +', '전환 시간', '기술 격차'] },
  { id: 'council', icon: '◎', name: '주민 공동결정제', desc: '이주민과 기존 주민이 예산과 공간 계획을 함께 결정한다.', effects: ['참여 +', '갈등 ↓', '결정 속도 ↓'] },
  { id: 'seawall', icon: '▰', name: '대형 방조제', desc: '해안에 높은 방조제를 세워 단기 침수 위험을 낮춘다.', effects: ['방재 +', '연안 흐름 변화', '생태 부담'] }
];

const state = { selected: [] };
const $ = (selector) => document.querySelector(selector);

function renderPolicies() {
  $('#policyGrid').innerHTML = policies.map((policy) => `
    <button class="policy-card" type="button" data-policy="${policy.id}" aria-pressed="false">
      <span class="policy-icon" aria-hidden="true">${policy.icon}</span>
      <h3>${policy.name}</h3><p>${policy.desc}</p>
      <span class="policy-effects">${policy.effects.map((effect) => `<span>${effect}</span>`).join('')}</span>
    </button>`).join('');
  document.querySelectorAll('.policy-card').forEach((card) => card.addEventListener('click', () => togglePolicy(card)));
}

function togglePolicy(card) {
  const id = card.dataset.policy;
  const selected = state.selected.includes(id);
  if (!selected && state.selected.length >= 3) return;
  state.selected = selected ? state.selected.filter((item) => item !== id) : [...state.selected, id];
  document.querySelectorAll('.policy-card').forEach((item) => {
    const active = state.selected.includes(item.dataset.policy);
    item.classList.toggle('selected', active);
    item.setAttribute('aria-pressed', String(active));
  });
  $('#selectedCount').textContent = state.selected.length;
  $('#confirmPolicyBtn').disabled = state.selected.length !== 3;
  $('#policyHint').textContent = state.selected.length === 3 ? '선택한 정책의 이유를 설명할 준비가 되었습니다.' : `정책을 ${3 - state.selected.length}개 더 선택하세요.`;
}

function showScreen(id, label) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === id));
  $('#stepPill').textContent = label;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('#startBtn').addEventListener('click', () => showScreen('policyScreen', '1 / 4 · 정책 선택'));
$('#confirmPolicyBtn').addEventListener('click', () => alert('정책 선택 이후 단계는 지금 구현 중입니다.'));
renderPolicies();
