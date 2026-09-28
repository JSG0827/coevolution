const scenarios = [
  {
    id: 'delta', name: '푸른강 삼각주', type: '연안·삼각주',
    intro: '낮은 해안 평야와 습지, 농경지가 이어진 지역입니다. 해수면 상승과 지반 침하가 동시에 진행되며 농업과 어업 생계가 흔들리고 있습니다.',
    indicators: [
      { key: 'sea', label: '상대적 해수면', value: '+24 cm', note: '최근 20년 누적 변화', color: '#4ba7b2' },
      { key: 'subsidence', label: '지반 침하', value: '연 6 mm', note: '지하수 사용과 퇴적층 압밀', color: '#c99354' },
      { key: 'wetland', label: '연안 습지 면적', value: '-31%', note: '개발 이전 면적과 비교', color: '#58a67c' },
      { key: 'salinity', label: '지하수 염분', value: '1.8배', note: '20년 전 평균과 비교', color: '#7a8ec7' }
    ],
    chain: ['대기권: 해양 가열', '수권: 해수면·염수', '지권: 침하·염류화', '생물권: 습지·작물', '인간권: 생계·이동'],
    questions: [
      { q: '해수면 상승과 지반 침하가 동시에 진행될 때 가장 직접적으로 커지는 위험은?', options: ['상대적 해수면 상승과 침수', '화산 분출', '편서풍 약화'], correct: 0, explanation: '육지가 낮아지는 효과와 바다가 높아지는 효과가 합쳐져 상대적 해수면과 침수 위험이 커집니다.' },
      { q: '습지 면적 감소가 주민의 안전에 영향을 주는 경로로 가장 적절한 것은?', options: ['파랑·홍수 완충 감소', '지구 자전 속도 증가', '태양 복사량 감소'], correct: 0, explanation: '습지는 파랑과 홍수 에너지를 줄이고 물을 저장하므로 감소하면 사람과 생물의 노출이 함께 커집니다.' }
    ],
    policyNames: { restoration: '연안 습지 복원', water: '담수·지하수 순환 관리', food: '내염성 농업 전환', infrastructure: '방조제·고상식 기반시설', culture: '공동체 집단이주' },
    earthLabels: { water: '담수 수질', soil: '토양 생산성', habitat: '습지 서식지', buffer: '홍수 완충 능력' },
    naturalTrend: { water: -12, soil: -10, habitat: -14, buffer: -11 },
    baseRisks: { flood: 9, salinity: 8, biodiversity: 6, heat: 4 }
  },
  {
    id: 'dryland', name: '마른강 내륙분지', type: '건조·농업분지',
    intro: '강수량 감소와 증발산 증가가 겹치는 농업 지역입니다. 지하수 의존이 커지고 표토와 식생이 감소하면서 이동하지 못하는 가구의 위험도 높아지고 있습니다.',
    indicators: [
      { key: 'rain', label: '연강수량', value: '-14%', note: '최근 20년 평균 변화', color: '#6a9bc4' },
      { key: 'evapo', label: '잠재 증발산', value: '+18%', note: '기온·일사 변화의 영향', color: '#d28b53' },
      { key: 'groundwater', label: '지하수면 깊이', value: '+7 m', note: '물을 더 깊이에서 취수', color: '#667fc2' },
      { key: 'vegetation', label: '식생 피복', value: '-23%', note: '위성 기반 지수의 가상 변화', color: '#6ca66c' }
    ],
    chain: ['대기권: 강수·기온', '수권: 토양수·지하수', '지권: 표토·침하', '생물권: 식생·작물', '인간권: 식량·이동'],
    questions: [
      { q: '강수량은 줄고 증발산은 늘 때 토양수분은 일반적으로 어떻게 되는가?', options: ['감소한다', '항상 증가한다', '변하지 않는다'], correct: 0, explanation: '들어오는 물은 줄고 대기로 빠져나가는 물은 늘어 토양과 식물이 사용할 수 있는 물이 감소합니다.' },
      { q: '지하수를 장기간 과잉 취수할 때 함께 나타날 수 있는 현상은?', options: ['지반 침하와 우물 고갈', '해령 확장', '태양풍 강화'], correct: 0, explanation: '대수층의 압력이 낮아지고 퇴적층이 압밀되면 지반 침하와 취수 비용 증가가 나타날 수 있습니다.' }
    ],
    policyNames: { restoration: '초지·하천변 식생 복원', water: '지하수 총량·빗물 관리', food: '가뭄 적응 농업', infrastructure: '저수·사방 기반시설', culture: '생계 공동체 계획이주' },
    earthLabels: { water: '지하수 가용성', soil: '표토 보전', habitat: '식생 피복', buffer: '가뭄 완충 능력' },
    naturalTrend: { water: -15, soil: -13, habitat: -12, buffer: -14 },
    baseRisks: { drought: 9, dust: 7, subsidence: 7, waterConflict: 6 }
  },
  {
    id: 'mountain', name: '하늘샘 산악유역', type: '고산·하천상류',
    intro: '적설 기간과 빙하 면적이 감소하는 산악 상류 지역입니다. 강한 비와 동결·융해의 변화가 사면을 불안정하게 만들고 계절별 물 공급도 달라지고 있습니다.',
    indicators: [
      { key: 'snow', label: '적설 지속 기간', value: '-38일', note: '30년 전과 비교', color: '#79a9c8' },
      { key: 'glacier', label: '빙하 면적', value: '-17%', note: '최근 20년 변화', color: '#7292b1' },
      { key: 'rain', label: '극한강우 강도', value: '+22%', note: '상위 1% 강수 사건', color: '#4d83b6' },
      { key: 'freeze', label: '동결·융해 변동', value: '+26%', note: '사면 암석 균열 가능성', color: '#947bb3' }
    ],
    chain: ['대기권: 기온·극한강우', '빙권: 적설·빙하', '수권: 계절 유량', '지권: 사면 안정', '생물권·인간권: 서식지·정착'],
    questions: [
      { q: '적설 기간이 짧아질 때 하류 물 공급에서 나타날 가능성이 큰 변화는?', options: ['봄 유출은 빨라지고 여름 물은 부족해질 수 있다', '연중 완전히 일정해진다', '바닷물 염분이 즉시 감소한다'], correct: 0, explanation: '눈이 일찍 녹으면 봄철 유출이 빨라지고 건기나 여름의 저장 효과가 약해질 수 있습니다.' },
      { q: '극한강우와 동결·융해 변동이 함께 증가하면 커질 수 있는 위험은?', options: ['산사태와 토석류', '조석 마찰 감소', '오존층 생성'], correct: 0, explanation: '균열이 발달한 사면에 강한 비가 스며들면 사면 안정성이 낮아져 산사태와 토석류 위험이 커집니다.' }
    ],
    policyNames: { restoration: '고산식생·하천변 복원', water: '계절 물저장·유량 관리', food: '고산 생계 다변화', infrastructure: '사면보강·피난 기반시설', culture: '산촌 공동체 계획이주' },
    earthLabels: { water: '계절 유량 안정', soil: '사면 안정성', habitat: '고산 서식지', buffer: '재해 완충 능력' },
    naturalTrend: { water: -12, soil: -14, habitat: -11, buffer: -13 },
    baseRisks: { landslide: 9, glof: 7, waterShortage: 8, biodiversity: 5 }
  },
  {
    id: 'forest', name: '솔바람 산림도시권', type: '산림·도시경계',
    intro: '건조한 고온 기간이 길어지고 도시가 산림 경계까지 확장된 지역입니다. 산불뿐 아니라 연기, 화재 뒤 토양 유실과 집중호우 피해가 연속적으로 나타날 수 있습니다.',
    indicators: [
      { key: 'heat', label: '연속 고온일', value: '+19일', note: '30년 전 평균과 비교', color: '#d37055' },
      { key: 'moisture', label: '토양 수분', value: '-16%', note: '건기 평균 변화', color: '#a8835a' },
      { key: 'fire', label: '산불위험 기상일', value: '2.1배', note: '고온·건조·강풍 조건', color: '#d04f45' },
      { key: 'fragment', label: '산림 연결성', value: '-27%', note: '도로·주거 확장 영향', color: '#578d63' }
    ],
    chain: ['대기권: 고온·건조·강풍', '수권: 토양수분 감소', '생물권: 산림·연료', '지권: 화재 후 침식', '인간권: 연기·대피·이동'],
    questions: [
      { q: '고온일 증가와 토양수분 감소가 산불 위험을 높이는 주된 이유는?', options: ['식생 연료가 더 쉽게 건조된다', '지구 자기장이 사라진다', '해수면이 즉시 낮아진다'], correct: 0, explanation: '식생과 낙엽의 수분이 줄면 점화와 확산이 쉬워지고 강풍이 겹칠 때 위험이 더 커집니다.' },
      { q: '대형 산불 직후 집중호우가 내리면 커질 수 있는 2차 재해는?', options: ['토석류와 하천 탁도 증가', '빙하 확장', '조석 정지'], correct: 0, explanation: '식생과 토양 구조가 손상된 사면은 물을 덜 흡수해 토석류와 침식, 수질 악화가 발생하기 쉽습니다.' }
    ],
    policyNames: { restoration: '내화성 산림·하천 복원', water: '토양수분·소방용수 관리', food: '산림 생계 다변화', infrastructure: '방화대·내화 주거 기반시설', culture: '산촌 공동체 계획이주' },
    earthLabels: { water: '토양 수분', soil: '침식 저항성', habitat: '산림 연결성', buffer: '산불·탄소 완충' },
    naturalTrend: { water: -13, soil: -10, habitat: -15, buffer: -14 },
    baseRisks: { wildfire: 9, debrisFlow: 7, smoke: 8, biodiversity: 7 }
  }
];

const policies = [
  { id: 'housing', icon: '⌂', name: '빈 건물 순환주택', desc: '기존 건물을 고쳐 안전한 주거를 빠르게 공급한다.', effects: ['주거 +', '신규 토지 ↓', '개보수 비용'], capacity: 320, needs: { housing: 5, health: 1, livelihood: 1, participation: 0, culture: 1 }, earth: { water: 0, soil: 1, habitat: 1, buffer: 1 }, risk: { flood: -1, heat: -1, landslide: -1, wildfire: -1, smoke: -1 }, response: 1 },
  { id: 'compact', icon: '▦', name: '기후적응 압축도시', desc: '안전한 부지에 에너지 효율형 주거와 생활 서비스를 모은다.', effects: ['수용력 ++', '탄소 ↓', '밀집 위험'], capacity: 410, needs: { housing: 5, health: 2, livelihood: 2, participation: 0, culture: 0 }, earth: { water: 0, soil: 1, habitat: 1, buffer: 0 }, risk: { flood: -2, landslide: -2, wildfire: -2, heat: 1 }, response: 1 },
  { id: 'restoration', icon: '≋', name: '생태계 기반 복원', desc: '지역 생태계가 물을 저장하고 재해를 완충하는 기능을 회복한다.', effects: ['생태 ++', '완충력 +', '개발 부지 ↓'], capacity: 30, needs: { housing: 0, health: 1, livelihood: 1, participation: 1, culture: 2 }, earth: { water: 3, soil: 3, habitat: 6, buffer: 5 }, risk: { flood: -3, salinity: -1, biodiversity: -5, drought: -2, dust: -2, landslide: -2, waterShortage: -1, wildfire: -2, debrisFlow: -2 }, response: 1 },
  { id: 'water', icon: '◉', name: '물순환 관리', desc: '빗물, 지하수, 생활용수를 함께 관리해 물 부족과 수질 악화를 줄인다.', effects: ['물 안정 ++', '관리 비용', '사용 조정'], capacity: 60, needs: { housing: 1, health: 2, livelihood: 3, participation: 1, culture: 0 }, earth: { water: 6, soil: 2, habitat: 1, buffer: 3 }, risk: { salinity: -4, drought: -4, subsidence: -3, waterConflict: -3, waterShortage: -4, wildfire: -1 }, response: 1 },
  { id: 'food', icon: '⌁', name: '기후적응 생계·농업', desc: '지역 환경에 맞는 작물, 기술, 생계 전환을 지원한다.', effects: ['식량·생계 ++', '전환 시간', '기술 격차'], capacity: 110, needs: { housing: 1, health: 1, livelihood: 5, participation: 1, culture: 2 }, earth: { water: 1, soil: 4, habitat: 1, buffer: 2 }, risk: { salinity: -3, drought: -3, dust: -2, waterShortage: -2, biodiversity: -1 }, response: 1 },
  { id: 'mobility', icon: '↝', name: '녹색 이동·접근망', desc: '주거, 일자리, 학교, 의료를 대중교통과 보행망으로 연결한다.', effects: ['접근성 ++', '탄소 ↓', '초기 비용'], capacity: 90, needs: { housing: 0, health: 2, livelihood: 4, participation: 1, culture: 0 }, earth: { water: 0, soil: 0, habitat: 1, buffer: 1 }, risk: { heat: -1, smoke: -1, waterConflict: -1 }, response: 2 },
  { id: 'care', icon: '✚', name: '돌봄·기후보건망', desc: '보건소, 냉난방 쉼터, 방문 돌봄과 재난 후 심리 지원을 확충한다.', effects: ['건강 ++', '형평성 +', '운영비'], capacity: 50, needs: { housing: 0, health: 6, livelihood: 1, participation: 1, culture: 0 }, earth: { water: 0, soil: 0, habitat: 0, buffer: 0 }, risk: { heat: -4, smoke: -4 }, response: 4 },
  { id: 'jobs', icon: '⚒', name: '녹색 일자리 전환', desc: '복원, 재생에너지, 안전관리 분야의 직업훈련과 고용을 만든다.', effects: ['생계 ++', '갈등 ↓', '전환 기간'], capacity: 80, needs: { housing: 0, health: 1, livelihood: 6, participation: 1, culture: 1 }, earth: { water: 0, soil: 1, habitat: 1, buffer: 1 }, risk: { waterConflict: -2 }, response: 2 },
  { id: 'council', icon: '◎', name: '주민 공동결정제', desc: '이주민과 기존 주민이 공간과 예산, 위험 정보를 함께 결정한다.', effects: ['참여 ++', '갈등 ↓', '결정 속도'], capacity: 30, needs: { housing: 0, health: 1, livelihood: 1, participation: 6, culture: 3 }, earth: { water: 1, soil: 1, habitat: 2, buffer: 1 }, risk: { waterConflict: -5, biodiversity: -2 }, response: 2 },
  { id: 'infrastructure', icon: '▰', name: '보호 기반시설', desc: '지역의 주요 위험을 막는 구조물과 안전 부지를 조성한다.', effects: ['단기 방재 ++', '생태 단절', '고비용'], capacity: 150, needs: { housing: 2, health: 2, livelihood: 1, participation: 0, culture: 0 }, earth: { water: -1, soil: -1, habitat: -4, buffer: 4 }, risk: { flood: -4, salinity: -1, biodiversity: 2, landslide: -4, glof: -4, wildfire: -3, debrisFlow: -3 }, response: 2 },
  { id: 'warning', icon: '!', name: '관측·조기경보·대피권', desc: '센서와 예보, 접근 가능한 경보, 교통약자 대피계획을 연결한다.', effects: ['인명피해 ↓', '대피 속도 +', '위험 자체는 유지'], capacity: 20, needs: { housing: 0, health: 3, livelihood: 1, participation: 2, culture: 0 }, earth: { water: 0, soil: 0, habitat: 0, buffer: 1 }, risk: {}, response: 6 },
  { id: 'microgrid', icon: '⌾', name: '분산형 재생에너지', desc: '태양광, 저장장치, 마이크로그리드로 냉난방과 필수 시설을 유지한다.', effects: ['탄소 ↓↓', '정전 위험 ↓', '초기 투자'], capacity: 60, needs: { housing: 1, health: 3, livelihood: 2, participation: 0, culture: 0 }, earth: { water: 0, soil: 0, habitat: -1, buffer: 3 }, risk: { heat: -3, wildfire: -1, smoke: -1 }, response: 2 },
  { id: 'culture', icon: '◇', name: '공동체 계획이주', desc: '가족과 공동체의 연결, 문화와 생계가 이어지도록 함께 이전한다.', effects: ['공동체 ++', '주거 +', '부지 갈등'], capacity: 190, needs: { housing: 3, health: 1, livelihood: 2, participation: 3, culture: 6 }, earth: { water: 0, soil: 0, habitat: -1, buffer: 0 }, risk: { waterConflict: -2 }, response: 3 }
];

const events = [
  { id: 'delta-flood', scenario: 'delta', hazard: 'flood', title: '폭풍해일과 하천홍수가 겹쳤습니다', desc: '만조와 집중호우가 겹쳐 저지대 주택과 도로가 침수되고 오염 물질이 습지와 식수원으로 퍼졌습니다.', causes: ['sea', 'subsidence', 'wetland'], change: '침수로 주거지와 생물 서식지가 동시에 손상된다', earth: { water: -8, soil: -4, habitat: -6, buffer: -5 }, needs: { housing: -10, health: -8, livelihood: -7, participation: -2, culture: -4 }, vulnerable: 2 },
  { id: 'delta-salt', scenario: 'delta', hazard: 'salinity', title: '염수가 농경지와 지하수로 더 깊이 들어왔습니다', desc: '가뭄 시기 취수 증가와 해수면 상승이 겹쳐 식수와 농업용수의 염분이 높아졌습니다.', causes: ['sea', 'salinity', 'subsidence'], change: '토양과 물의 염분 증가로 작물과 생계가 불안정해진다', earth: { water: -10, soil: -9, habitat: -3, buffer: -2 }, needs: { housing: -2, health: -5, livelihood: -12, participation: -2, culture: -4 }, vulnerable: 1 },
  { id: 'delta-bio', scenario: 'delta', hazard: 'biodiversity', title: '습지 생물과 어획량이 급감했습니다', desc: '개발과 수로 변화로 서식지가 단절되면서 조류와 저서생물, 연안 어종이 함께 감소했습니다.', causes: ['wetland', 'salinity'], change: '먹이망과 어업 생계가 약해지고 홍수 완충 기능도 감소한다', earth: { water: -3, soil: -2, habitat: -13, buffer: -7 }, needs: { housing: 0, health: -2, livelihood: -10, participation: -3, culture: -8 }, vulnerable: 0 },
  { id: 'delta-heat', scenario: 'delta', hazard: 'heat', title: '고밀도 정착지에 장기 폭염이 닥쳤습니다', desc: '습한 폭염과 열대야가 이어져 냉방비와 온열질환이 늘고 정전 위험도 높아졌습니다.', causes: ['sea', 'wetland'], change: '폭염 노출과 냉방 에너지 수요가 취약 가구에 집중된다', earth: { water: -2, soil: -2, habitat: -2, buffer: -3 }, needs: { housing: -4, health: -13, livelihood: -4, participation: -2, culture: -1 }, vulnerable: 2 },
  { id: 'dry-drought', scenario: 'dryland', hazard: 'drought', title: '3년 연속 가뭄이 이어졌습니다', desc: '강수 부족과 높은 증발산으로 저수지와 토양수분이 회복되지 않아 농업과 생활용수 제한이 시작됐습니다.', causes: ['rain', 'evapo', 'groundwater'], change: '물 부족이 작물 생산과 건강, 추가 이동 압력을 높인다', earth: { water: -13, soil: -8, habitat: -8, buffer: -9 }, needs: { housing: -2, health: -7, livelihood: -13, participation: -3, culture: -5 }, vulnerable: 1 },
  { id: 'dry-dust', scenario: 'dryland', hazard: 'dust', title: '표토 유실과 먼지폭풍이 증가했습니다', desc: '식생이 줄고 마른 표토가 강풍에 노출되어 농경지 생산성과 호흡기 건강이 동시에 악화됐습니다.', causes: ['vegetation', 'rain', 'evapo'], change: '표토와 식생 손실이 다시 건조화를 강화한다', earth: { water: -5, soil: -14, habitat: -10, buffer: -8 }, needs: { housing: -2, health: -10, livelihood: -11, participation: -2, culture: -3 }, vulnerable: 2 },
  { id: 'dry-sub', scenario: 'dryland', hazard: 'subsidence', title: '지하수 취수 지역에서 지반이 내려앉았습니다', desc: '대수층 압력이 낮아지고 퇴적층이 압밀되어 관정과 도로, 주택 일부가 손상됐습니다.', causes: ['groundwater', 'rain'], change: '지하수 고갈이 기반시설 손상과 더 깊은 취수를 부른다', earth: { water: -12, soil: -10, habitat: -3, buffer: -7 }, needs: { housing: -10, health: -3, livelihood: -8, participation: -2, culture: -3 }, vulnerable: 4 },
  { id: 'dry-conflict', scenario: 'dryland', hazard: 'waterConflict', title: '물 배분을 둘러싼 갈등이 커졌습니다', desc: '농업, 생활용수, 생태 유지용수의 우선순위를 두고 이주민과 기존 주민 사이의 불신이 확대됐습니다.', causes: ['groundwater', 'rain'], change: '물 부족이 사회적 갈등과 불평등한 노출을 강화한다', earth: { water: -5, soil: -3, habitat: -4, buffer: -3 }, needs: { housing: -2, health: -4, livelihood: -8, participation: -14, culture: -8 }, vulnerable: 4 },
  { id: 'mountain-slide', scenario: 'mountain', hazard: 'landslide', title: '극한강우 뒤 산사태와 토석류가 발생했습니다', desc: '균열이 많아진 사면에 강한 비가 스며들어 도로와 주택, 하천이 동시에 피해를 입었습니다.', causes: ['rain', 'freeze'], change: '사면 붕괴가 정착지와 하천 생태계를 동시에 손상한다', earth: { water: -7, soil: -14, habitat: -7, buffer: -9 }, needs: { housing: -13, health: -7, livelihood: -9, participation: -2, culture: -5 }, vulnerable: 2 },
  { id: 'mountain-glof', scenario: 'mountain', hazard: 'glof', title: '빙하호가 넘치며 급격한 홍수가 내려왔습니다', desc: '빙하 후퇴로 커진 호수가 사면 붕괴와 강우의 충격을 받아 하류 계곡으로 대량의 물과 퇴적물을 보냈습니다.', causes: ['glacier', 'rain'], change: '급격한 홍수가 하류 정착지와 하천 지형을 재편한다', earth: { water: -8, soil: -12, habitat: -8, buffer: -10 }, needs: { housing: -14, health: -8, livelihood: -8, participation: -2, culture: -6 }, vulnerable: 0 },
  { id: 'mountain-water', scenario: 'mountain', hazard: 'waterShortage', title: '여름철 하천 유량이 크게 줄었습니다', desc: '눈이 일찍 녹고 빙하 저장량이 감소해 봄에는 물이 많았지만 여름에는 식수와 농업용수가 부족해졌습니다.', causes: ['snow', 'glacier'], change: '계절 물 부족이 생계와 하류 지역의 이동 압력을 높인다', earth: { water: -14, soil: -5, habitat: -7, buffer: -8 }, needs: { housing: -2, health: -6, livelihood: -11, participation: -3, culture: -5 }, vulnerable: 1 },
  { id: 'mountain-bio', scenario: 'mountain', hazard: 'biodiversity', title: '고산 생물의 이동 공간이 끊겼습니다', desc: '기온 상승으로 서식지가 위로 이동했지만 도로와 정착지가 연결을 막아 일부 종의 개체군이 감소했습니다.', causes: ['snow', 'freeze'], change: '서식지 축소가 생태계 기능과 지역 생계를 약화한다', earth: { water: -2, soil: -3, habitat: -14, buffer: -5 }, needs: { housing: 0, health: -2, livelihood: -7, participation: -2, culture: -7 }, vulnerable: 0 },
  { id: 'forest-fire', scenario: 'forest', hazard: 'wildfire', title: '강풍 속 대형 산불이 도시 경계까지 번졌습니다', desc: '건조한 식생과 강풍이 불길을 빠르게 확산시켜 주거지와 산림이 함께 피해를 입었습니다.', causes: ['fire', 'moisture', 'heat'], change: '산림과 주거 손실이 연기 피해와 대규모 대피를 만든다', earth: { water: -8, soil: -10, habitat: -14, buffer: -13 }, needs: { housing: -15, health: -12, livelihood: -9, participation: -2, culture: -7 }, vulnerable: 2 },
  { id: 'forest-debris', scenario: 'forest', hazard: 'debrisFlow', title: '산불 피해지에 집중호우가 내려 토석류가 발생했습니다', desc: '식생과 토양 구조가 손상된 사면에서 흙과 재가 하천과 주거지로 쓸려 내려왔습니다.', causes: ['fire', 'moisture'], change: '화재 후 침식이 하천 수질과 정착지 안전을 다시 악화한다', earth: { water: -11, soil: -14, habitat: -8, buffer: -8 }, needs: { housing: -10, health: -7, livelihood: -7, participation: -2, culture: -4 }, vulnerable: 4 },
  { id: 'forest-smoke', scenario: 'forest', hazard: 'smoke', title: '연기와 폭염이 2주 이상 정체됐습니다', desc: '약한 바람과 고온이 산불 연기를 도시에 머물게 해 호흡기 질환과 실외 노동 중단이 증가했습니다.', causes: ['heat', 'fire'], change: '연기와 폭염 피해가 건강·소득 취약 가구에 집중된다', earth: { water: -2, soil: -2, habitat: -4, buffer: -5 }, needs: { housing: -2, health: -15, livelihood: -9, participation: -2, culture: -2 }, vulnerable: 2 },
  { id: 'forest-bio', scenario: 'forest', hazard: 'biodiversity', title: '산림 연결성이 임계 수준 아래로 떨어졌습니다', desc: '도로와 주거 확장, 반복되는 작은 산불로 동물 이동과 종자 확산이 어려워졌습니다.', causes: ['fragment', 'fire'], change: '서식지 단절이 산림 회복과 탄소 저장 능력을 약화한다', earth: { water: -3, soil: -5, habitat: -15, buffer: -10 }, needs: { housing: 0, health: -2, livelihood: -6, participation: -3, culture: -7 }, vulnerable: 0 }
];

const profiles = [
  { name: '지역 생계·문화 공동체', need: '생태 기반 생계와 공동체 연결', prefs: { restoration: 4, culture: 4, council: 3, food: 2 } },
  { name: '농림·생산 생계 가구', need: '물·토지·기술과 안정적인 소득', prefs: { food: 4, water: 4, jobs: 3, housing: 2 } },
  { name: '어린이·고령자 동반 가구', need: '돌봄·보건·대피 가능한 주거', prefs: { care: 5, housing: 4, warning: 3, compact: 2 } },
  { name: '청년 구직·학습자', need: '일자리·교육·이동 접근성', prefs: { jobs: 5, mobility: 4, compact: 3, microgrid: 2 } },
  { name: '소규모 자영업·서비스 가구', need: '상권·주거·의사결정 참여', prefs: { jobs: 3, housing: 3, council: 4, mobility: 3 } }
];
const cohortTemplates = [[320, 300, 220, 210, 150], [180, 200, 360, 210, 250], [150, 180, 180, 450, 240], [240, 240, 240, 240, 240], [220, 350, 260, 180, 190], [280, 160, 300, 260, 200]];
const needNames = { housing: '주거 안정', health: '건강·돌봄', livelihood: '생계·접근', participation: '정책 참여', culture: '문화·공동체' };

const state = { studentId: '', seed: 0, scenario: null, cohort: [], envAnswers: [], envReviewed: false, selected: [], reasons: {}, initialNeeds: {}, initialSettled: 0, initialFit: 0, event: null, eventScore: 0, addedPolicy: null, eventReason: '', finalNeeds: {}, finalEarth: {}, population: {}, loop: {} };
const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const hashText = (text) => [...String(text)].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 17) >>> 0;
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const getPolicy = (id) => policies.find((policy) => policy.id === id);
const policyName = (id) => state.scenario.policyNames[id] || getPolicy(id).name;
const policyDescription = (id) => getPolicy(id).desc;
const noise = (key) => ((hashText(`${state.studentId}-${key}`) % 401) / 100) - 2;
const screenSteps = { introScreen: 0, environmentScreen: 1, policyScreen: 2, reasonScreen: 3, revealScreen: 4, eventScreen: 5, outcomeScreen: 6, loopScreen: 7, reportScreen: 7 };
let toastTimer;

function renderProgress(step = 0) {
  $('#progressHud').innerHTML = Array.from({ length: 7 }, (_, index) => {
    const number = index + 1;
    const status = number < step ? 'done' : number === step ? 'current' : '';
    return `<span class="progress-segment ${status}" title="${number}단계" aria-label="${number}단계 ${status === 'done' ? '완료' : status === 'current' ? '진행 중' : '대기'}"></span>`;
  }).join('');
}

function showToast(message) {
  clearTimeout(toastTimer);
  $('#gameToast').textContent = message;
  $('#gameToast').classList.add('show');
  toastTimer = setTimeout(() => $('#gameToast').classList.remove('show'), 1350);
}

function updateDecisionLog() {
  const ribbon = $('#contextRibbon');
  if (!state.scenario) { ribbon.classList.add('hidden'); return; }
  ribbon.classList.remove('hidden');
  const selectedNames = state.selected.map(policyName);
  const chips = [`<span class="context-chip"><b>환경</b>${state.scenario.name}</span>`];
  if (selectedNames.length) chips.push(`<span class="context-chip"><b>초기 정책</b>${selectedNames.join(' · ')}</span>`);
  else chips.push('<span class="context-chip"><b>초기 정책</b>아직 선택 전</span>');
  if (state.event) chips.push(`<span class="context-chip alert"><b>2055 사건</b>${state.event.title}</span>`);
  if (state.addedPolicy) chips.push(`<span class="context-chip"><b>추가 정책</b>${policyName(state.addedPolicy)}</span>`);
  $('#contextSummary').innerHTML = chips.join('');

  const indicatorSummary = state.scenario.indicators.map((item) => `${item.label} ${item.value}`).join(' · ');
  const policyLog = state.selected.length
    ? `<div class="log-policy-list">${state.selected.map((id) => `<div class="log-policy"><span aria-hidden="true">${getPolicy(id).icon}</span><span>${policyName(id)}</span></div>`).join('')}</div>`
    : '<p class="log-empty">아직 초기 정책을 선택하지 않았습니다.</p>';
  const eventLog = state.event
    ? `<h3>${state.event.title}</h3><p>${state.event.change}</p>${state.addedPolicy ? `<div class="log-policy"><span aria-hidden="true">${getPolicy(state.addedPolicy).icon}</span><span>추가: ${policyName(state.addedPolicy)}</span></div>` : '<p class="log-empty">대응 정책 선택 전</p>'}`
    : '<p class="log-empty">2055년 사건은 아직 공개되지 않았습니다.</p>';
  $('#decisionContent').innerHTML = `<section class="log-block"><span>01 · 환경</span><h3>${state.scenario.name}</h3><p>${indicatorSummary}</p></section><section class="log-block"><span>02 · 초기 결정</span>${policyLog}</section><section class="log-block"><span>03 · 2055년</span>${eventLog}</section>`;
}

function setDrawer(open) {
  $('#decisionDrawer').classList.toggle('open', open);
  $('#decisionDrawer').setAttribute('aria-hidden', String(!open));
  $('#decisionToggle').setAttribute('aria-expanded', String(open));
  $('#drawerBackdrop').hidden = !open;
}

function showScreen(id, label) {
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === id));
  $('#stepPill').textContent = label;
  renderProgress(screenSteps[id]);
  updateDecisionLog();
  setDrawer(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function begin() {
  const studentId = $('#studentId').value.trim();
  if (!studentId) { $('#studentError').textContent = '출석번호 또는 별칭을 입력하세요.'; $('#studentId').focus(); return; }
  $('#studentError').textContent = '';
  state.studentId = studentId;
  state.seed = hashText(studentId);
  state.scenario = scenarios[state.seed % scenarios.length];
  state.cohort = cohortTemplates[Math.floor(state.seed / scenarios.length) % cohortTemplates.length];
  renderEnvironment();
  showScreen('environmentScreen', '1 / 7 · 환경 자료');
}

function renderEnvironment() {
  const s = state.scenario;
  $('#environmentHero').innerHTML = `<span>2045년 · 수업용 복합 시나리오</span><h2>${s.name}</h2><p>${s.intro}</p>`;
  $('#scenarioBadge').textContent = s.type;
  $('#indicatorGrid').innerHTML = s.indicators.map((item) => `<article class="indicator-card" style="--accent:${item.color}"><span>${item.label}</span><strong>${item.value}</strong><small>${item.note}</small></article>`).join('');
  $('#systemChain').innerHTML = s.chain.map((item, index) => `${index ? '<span class="system-link" aria-hidden="true">→</span>' : ''}<span class="system-chip">${item}</span>`).join('');
  $('#questionGrid').innerHTML = s.questions.map((question, qIndex) => `<article class="question-card"><fieldset><legend>${qIndex + 1}. ${question.q}</legend>${question.options.map((option, oIndex) => `<label><input type="radio" name="env-q${qIndex}" value="${oIndex}"> ${option}</label>`).join('')}</fieldset></article>`).join('');
  document.querySelectorAll('#questionGrid input').forEach((input) => input.addEventListener('change', validateEnvironment));
}

function validateEnvironment() {
  state.envAnswers = state.scenario.questions.map((_, index) => document.querySelector(`input[name="env-q${index}"]:checked`)?.value ?? null);
  const ready = state.envAnswers.every((answer) => answer !== null);
  $('#confirmEnvironmentBtn').disabled = !ready;
  $('#environmentHint').textContent = ready ? '선택한 답의 해설을 확인하세요.' : '두 문항에 답하세요.';
}

function confirmEnvironment() {
  if (!state.envReviewed) {
    const correct = state.scenario.questions.reduce((count, question, index) => count + (Number(state.envAnswers[index]) === question.correct ? 1 : 0), 0);
    $('#environmentFeedback').classList.remove('hidden');
    $('#environmentFeedback').innerHTML = `<strong>자료 해석 ${correct} / ${state.scenario.questions.length}</strong><p>${state.scenario.questions.map((question) => question.explanation).join(' ')}</p>`;
    document.querySelectorAll('#questionGrid input').forEach((input) => { input.disabled = true; });
    state.envReviewed = true;
    $('#confirmEnvironmentBtn').textContent = '정책 선택으로 이동';
    $('#environmentHint').textContent = '관측 근거를 기억하고 정책을 선택하세요.';
    return;
  }
  renderPolicies('#policyGrid', policies);
  showScreen('policyScreen', '2 / 7 · 정책 선택');
}

function policyCard(policy, selected = false) {
  return `<button class="policy-card${selected ? ' selected' : ''}" type="button" data-policy="${policy.id}" aria-pressed="${selected}"><span class="policy-icon" aria-hidden="true">${policy.icon}</span><h3>${policyName(policy.id)}</h3><p>${policyDescription(policy.id)}</p><span class="policy-effects">${policy.effects.map((effect) => `<span>${effect}</span>`).join('')}</span></button>`;
}

function renderPolicies(target, list) {
  $(target).innerHTML = list.map((policy) => policyCard(policy, target === '#policyGrid' ? state.selected.includes(policy.id) : policy.id === state.addedPolicy)).join('');
  document.querySelectorAll(`${target} .policy-card`).forEach((card) => card.addEventListener('click', () => target === '#policyGrid' ? toggleInitialPolicy(card) : toggleAddedPolicy(card)));
}

function toggleInitialPolicy(card) {
  const id = card.dataset.policy;
  const selected = state.selected.includes(id);
  if (!selected && state.selected.length >= 3) return;
  state.selected = selected ? state.selected.filter((item) => item !== id) : [...state.selected, id];
  document.querySelectorAll('#policyGrid .policy-card').forEach((item) => { const active = state.selected.includes(item.dataset.policy); item.classList.toggle('selected', active); item.setAttribute('aria-pressed', String(active)); });
  $('#selectedCount').textContent = state.selected.length;
  $('#confirmPolicyBtn').disabled = state.selected.length !== 3;
  $('#policyHint').textContent = state.selected.length === 3 ? '환경 자료와 연결해 선택 근거를 작성하세요.' : `정책을 ${3 - state.selected.length}개 더 선택하세요.`;
  updateDecisionLog();
  showToast(selected ? `${policyName(id)} 선택 해제` : `${policyName(id)} 선택`);
}

function renderReasons() {
  $('#reasonGrid').innerHTML = state.selected.map((id) => `<article class="reason-card"><span class="policy-icon" aria-hidden="true">${getPolicy(id).icon}</span><h3>${policyName(id)}</h3><p>${policyDescription(id)}</p><label for="reason-${id}">환경 자료와 연결한 선택 이유·한계</label><textarea id="reason-${id}" data-reason="${id}" rows="5" maxlength="240" placeholder="관측 지표, 예상 효과, 한계를 함께 적으세요.">${escapeHtml(state.reasons[id] || '')}</textarea></article>`).join('');
  document.querySelectorAll('[data-reason]').forEach((area) => area.addEventListener('input', validateReasons));
  validateReasons();
}

function validateReasons() {
  document.querySelectorAll('[data-reason]').forEach((area) => { state.reasons[area.dataset.reason] = area.value.trim(); });
  $('#runSimulationBtn').disabled = !state.selected.every((id) => (state.reasons[id] || '').length >= 8);
}

function calculateNeeds(policyIds) {
  const needs = { housing: 28, health: 28, livelihood: 28, participation: 25, culture: 28 };
  policyIds.forEach((id) => Object.keys(needs).forEach((key) => { needs[key] += getPolicy(id).needs[key] * 7; }));
  Object.keys(needs).forEach((key) => { needs[key] = clamp(Math.round(needs[key]), 0, 100); });
  return needs;
}

function calculateFit(policyIds) {
  const total = state.cohort.reduce((sum, count) => sum + count, 0);
  return Math.round(profiles.reduce((sum, profile, index) => {
    const pref = policyIds.reduce((score, id) => score + (profile.prefs[id] || 0), 0);
    return sum + clamp(35 + pref * 7, 18, 96) * state.cohort[index];
  }, 0) / total);
}

function needBars(needs, prior = null) {
  return Object.entries(needNames).map(([key, label]) => {
    const delta = prior ? needs[key] - prior[key] : null;
    return `<div class="metric-row"><div class="metric-label"><span>${label}</span><span>${needs[key]}${delta === null ? '' : ` (${delta > 0 ? '+' : ''}${delta})`}</span></div><div class="metric-track"><div class="metric-fill" style="width:${needs[key]}%"></div></div></div>`;
  }).join('');
}

function renderReveal() {
  state.initialNeeds = calculateNeeds(state.selected);
  state.initialSettled = clamp(180 + state.selected.reduce((sum, id) => sum + getPolicy(id).capacity, 0), 0, 1200);
  state.initialFit = Math.round((Object.values(state.initialNeeds).reduce((a, b) => a + b, 0) / 5) * 0.6 + calculateFit(state.selected) * 0.4);
  const topRisk = Object.entries(state.scenario.baseRisks).sort((a, b) => b[1] - a[1])[0];
  $('#resultHero').innerHTML = `<div class="result-stat"><span>안전 정착 수용력</span><strong>${state.initialSettled.toLocaleString()}명</strong><small>전체 이동 필요 인구 1,200명</small></div><div class="result-stat"><span>평균 필요 충족도</span><strong>${state.initialFit}점</strong><small>주민 구성과 정책 조합 반영</small></div><div class="result-stat"><span>현재 가장 큰 환경 위험</span><strong>${hazardName(topRisk[0])}</strong><small>정책 적용 전 기초 위험 ${topRisk[1]} / 10</small></div>`;
  $('#profileList').innerHTML = profiles.map((profile, index) => {
    const best = [...state.selected].sort((a, b) => (profile.prefs[b] || 0) - (profile.prefs[a] || 0))[0];
    const fit = best && (profile.prefs[best] || 0) >= 3 ? `${policyName(best)}과 핵심 필요가 연결됨` : '핵심 필요를 직접 지원하는 정책이 부족함';
    return `<div class="profile-row"><strong>${profile.name}</strong><span>${state.cohort[index].toLocaleString()}명</span><small>${profile.need} · ${fit}</small></div>`;
  }).join('');
  $('#metricList').innerHTML = needBars(state.initialNeeds);
  const lowest = Object.entries(state.initialNeeds).sort((a, b) => a[1] - b[1])[0];
  $('#initialInsight').innerHTML = `<strong>정착 직후의 다음 과제: ${needNames[lowest[0]]}</strong><p>${state.initialSettled < 1200 ? `${(1200 - state.initialSettled).toLocaleString()}명에게는 아직 안전한 정착 공간이 부족합니다.` : '1,200명을 수용할 기본 공간을 확보했습니다.'} 그러나 수용력과 필요 충족은 같은 뜻이 아닙니다.</p>`;
}

function hazardName(key) {
  return ({ flood: '복합홍수', salinity: '염수 침입', biodiversity: '생물다양성 감소', heat: '장기 폭염', drought: '장기 가뭄', dust: '표토·먼지폭풍', subsidence: '지반 침하', waterConflict: '물 갈등', landslide: '산사태', glof: '빙하호 홍수', waterShortage: '계절 물 부족', wildfire: '대형 산불', debrisFlow: '화재 후 토석류', smoke: '연기·폭염' })[key] || key;
}

function chooseEvent() {
  const candidates = events.filter((event) => event.scenario === state.scenario.id).map((event) => {
    const policyEffect = state.selected.reduce((sum, id) => sum + (getPolicy(id).risk[event.hazard] || 0), 0);
    const vulnerability = (state.cohort[event.vulnerable] / 1200) * 2.4;
    const score = state.scenario.baseRisks[event.hazard] + policyEffect + vulnerability + noise(event.id);
    return { event, score, policyEffect };
  }).sort((a, b) => b.score - a.score);
  state.event = candidates[0].event;
  state.eventScore = clamp(candidates[0].score, 2, 12);
}

function renderEvent() {
  chooseEvent();
  const e = state.event;
  const indicators = e.causes.map((key) => state.scenario.indicators.find((item) => item.key === key)).filter(Boolean);
  const reducers = state.selected.filter((id) => (getPolicy(id).risk[e.hazard] || 0) < 0);
  const amplifiers = state.selected.filter((id) => (getPolicy(id).risk[e.hazard] || 0) > 0);
  $('#eventBanner').innerHTML = `<span>2055년 · ${state.scenario.name}</span><h2>${e.title}</h2><p>${e.desc}</p><div class="event-causes">${indicators.map((item) => `<span>${item.label} ${item.value}</span>`).join('')}<span>잔여 위험 ${state.eventScore.toFixed(1)} / 12</span>${reducers.map((id) => `<span>${policyName(id)}이 일부 완충</span>`).join('')}${amplifiers.map((id) => `<span>${policyName(id)}의 부작용이 위험 가중</span>`).join('')}</div>`;
  renderPolicies('#eventPolicyGrid', policies.filter((policy) => !state.selected.includes(policy.id)));
  updateDecisionLog();
}

function toggleAddedPolicy(card) {
  state.addedPolicy = card.dataset.policy;
  document.querySelectorAll('#eventPolicyGrid .policy-card').forEach((item) => { const active = item.dataset.policy === state.addedPolicy; item.classList.toggle('selected', active); item.setAttribute('aria-pressed', String(active)); });
  $('#addedCount').textContent = '1';
  updateDecisionLog();
  showToast(`${policyName(state.addedPolicy)} 대응 정책 선택`);
  validateEvent();
}

function validateEvent() {
  state.eventReason = $('#eventReason').value.trim();
  const ready = Boolean(state.addedPolicy) && state.eventReason.length >= 10;
  $('#confirmEventBtn').disabled = !ready;
  $('#eventHint').textContent = !state.addedPolicy ? '정책을 한 가지 선택하세요.' : state.eventReason.length < 10 ? '사건의 원인과 정책 효과를 한 문장으로 연결하세요.' : '10년 후 최종 결과를 계산할 준비가 되었습니다.';
}

function calculateOutcome() {
  const e = state.event;
  const added = getPolicy(state.addedPolicy);
  const all = [...state.selected, state.addedPolicy];
  const mitigation = Math.max(0, -all.reduce((sum, id) => sum + (getPolicy(id).risk[e.hazard] || 0), 0));
  const response = all.reduce((sum, id) => sum + getPolicy(id).response, 0);
  const finalSeverity = clamp(state.eventScore + (added.risk[e.hazard] || 0), 1, 12);
  const finalCapacity = clamp(state.initialSettled + Math.round(added.capacity * 0.78) + (added.risk[e.hazard] < 0 ? 35 : 0), 0, 1200);
  let secondary = Math.round(finalCapacity * clamp(0.055 + finalSeverity * 0.017 - response * 0.006, 0.025, 0.28));
  let atRisk = Math.round(finalCapacity * clamp(0.11 + finalSeverity * 0.012 - mitigation * 0.006, 0.05, 0.27));
  if (secondary + atRisk > finalCapacity * 0.62) atRisk = Math.round(finalCapacity * 0.62) - secondary;
  const waiting = 1200 - finalCapacity;
  const stable = finalCapacity - secondary - atRisk;
  state.population = { stable, atRisk, secondary, waiting };

  state.finalNeeds = { ...state.initialNeeds };
  Object.keys(state.finalNeeds).forEach((key) => {
    const eventLoss = e.needs[key] || 0;
    const softened = Math.min(0, eventLoss + Math.round(mitigation * 0.55 + response * 0.25));
    state.finalNeeds[key] = clamp(Math.round(state.initialNeeds[key] + added.needs[key] * 6 + softened), 0, 100);
  });
  state.finalFit = Math.round((Object.values(state.finalNeeds).reduce((a, b) => a + b, 0) / 5) * 0.65 + calculateFit(all) * 0.35);

  state.finalEarth = {};
  Object.keys(state.scenario.earthLabels).forEach((key) => {
    const policyEffect = all.reduce((sum, id) => sum + getPolicy(id).earth[key] * 2, 0);
    state.finalEarth[key] = clamp(Math.round(100 + state.scenario.naturalTrend[key] + policyEffect + (e.earth[key] || 0)), 35, 145);
  });
  state.outcomeMeta = { mitigation, response, finalSeverity };
}

function renderOutcome() {
  calculateOutcome();
  const p = state.population;
  $('#populationFlow').innerHTML = [
    ['안정 정착', p.stable, '주거와 서비스가 유지됨', '#33856f'],
    ['위험 노출', p.atRisk, '정착했지만 다음 충격에 취약', '#d2a23f'],
    ['2차 이동', p.secondary, '사건 뒤 다시 거처를 옮김', '#d86855'],
    ['정착 대기', p.waiting, '안전한 공간·서비스가 부족', '#75878a']
  ].map(([label, value, note, color]) => `<article class="population-card" style="--flow-color:${color}"><span>${label}</span><strong>${Number(value).toLocaleString()}명</strong><small>${note}</small></article>`).join('');
  $('#populationBar').innerHTML = [
    ['안정 정착', p.stable, '#33856f'], ['위험 노출', p.atRisk, '#d2a23f'], ['2차 이동', p.secondary, '#d86855'], ['정착 대기', p.waiting, '#75878a']
  ].map(([label, value, color]) => `<span class="population-segment" style="width:${Number(value) / 12}%;background:${color}" title="${label} ${Number(value).toLocaleString()}명"></span>`).join('');
  $('#finalNeeds').innerHTML = comparisonRows(needNames, state.initialNeeds, state.finalNeeds);
  $('#earthMetrics').innerHTML = Object.entries(state.scenario.earthLabels).map(([key, label]) => comparisonRow(label, 100, state.finalEarth[key], true)).join('');
  const addedRisk = getPolicy(state.addedPolicy).risk[state.event.hazard] || 0;
  $('#causalReceipt').innerHTML = `<h3>이 결과가 나온 이유</h3><ul><li>${state.scenario.name}의 ${hazardName(state.event.hazard)} 기초 위험과 주민 구성에 따라 사건 강도가 결정됐습니다.</li><li>초기·추가 정책은 위험을 ${state.outcomeMeta.mitigation}단계 완충하고, 대피·회복 역량을 ${state.outcomeMeta.response}만큼 높였습니다.</li><li>${policyName(state.addedPolicy)}은 이번 위험에 ${addedRisk < 0 ? '직접적인 완충 효과가 있었습니다.' : addedRisk > 0 ? '일부 부작용을 더했습니다.' : '직접 위험보다 주민의 필요와 회복을 지원했습니다.'}</li><li>최종 사건 강도는 ${state.outcomeMeta.finalSeverity.toFixed(1)} / 12로 계산됐습니다. 이 수치는 예측값이 아니라 선택의 관계를 비교하는 수업용 지표입니다.</li></ul>`;
  updateDecisionLog();
}

function comparisonRows(labels, before, after) {
  return Object.entries(labels).map(([key, label]) => comparisonRow(label, before[key], after[key], false)).join('');
}
function comparisonRow(label, before, after, indexMode) {
  const max = indexMode ? 145 : 100;
  const beforeWidth = clamp(before / max * 100, 0, 100);
  const afterWidth = clamp(after / max * 100, 0, 100);
  const delta = after - before;
  return `<div class="comparison-row"><div class="comparison-label"><span>${label}</span><span>${before} → <em>${after}</em> (${delta > 0 ? '+' : ''}${delta})</span></div><div class="comparison-track"><div class="comparison-before" style="width:${beforeWidth}%"></div><div class="comparison-after" style="width:${afterWidth}%"></div></div></div>`;
}

function renderLoop() {
  const evidence = state.event.causes.map((key) => state.scenario.indicators.find((item) => item.key === key)).filter(Boolean)[0];
  $('#loopPressure').textContent = `${evidence.label} ${evidence.value}`;
  $('#loopResponse').textContent = `${state.event.title} — ${state.event.change}`;
  $('#loopPolicy').textContent = policyName(state.addedPolicy);
}

function validateLoop() {
  const type = document.querySelector('input[name="loopType"]:checked');
  state.loop = { earth: $('#earthEffect').value.trim(), returned: $('#returnEffect').value.trim(), type: type ? type.value : '', tradeoff: $('#tradeoff').value.trim() };
  const ready = state.loop.earth.length >= 10 && state.loop.returned.length >= 10 && state.loop.tradeoff.length >= 10 && state.loop.type;
  $('#finishBtn').disabled = !ready;
  $('#loopHint').textContent = ready ? '자료에서 시작한 공진화 고리가 완성되었습니다.' : '세 문장과 되먹임 유형을 모두 완성하세요.';
}

function renderReport() {
  const p = state.population;
  const earthSummary = Object.entries(state.scenario.earthLabels).map(([key, label]) => `${label} ${state.finalEarth[key]}`).join(' · ');
  $('#reportSheet').innerHTML = `<header class="report-header"><div><p class="eyebrow">${state.scenario.name} · 2045–2055</p><h2>공진화 정책 결정서</h2></div><div class="report-meta"><strong>${escapeHtml(state.studentId)}</strong><br>${new Date().toLocaleDateString('ko-KR')}</div></header>
  <section class="report-section"><h3>1. 환경 근거와 초기 정책</h3><p>${state.scenario.indicators.map((item) => `${item.label} ${item.value}`).join(' · ')}</p><div class="report-policy-list">${state.selected.map((id) => `<div class="report-policy"><strong>${policyName(id)}</strong><p>${escapeHtml(state.reasons[id])}</p></div>`).join('')}</div></section>
  <section class="report-section"><h3>2. 10년 후 사건과 적응</h3><div class="report-note"><strong>${state.event.title}</strong><br>${policyName(state.addedPolicy)} — ${escapeHtml(state.eventReason)}</div></section>
  <section class="report-section"><h3>3. 최종 인구 상태</h3><div class="report-numbers report-population"><div class="report-number"><span>안정 정착</span><strong>${p.stable.toLocaleString()}명</strong></div><div class="report-number"><span>위험 노출</span><strong>${p.atRisk.toLocaleString()}명</strong></div><div class="report-number"><span>2차 이동</span><strong>${p.secondary.toLocaleString()}명</strong></div><div class="report-number"><span>정착 대기</span><strong>${p.waiting.toLocaleString()}명</strong></div></div><p>평균 필요 충족도 ${state.initialFit} → <strong>${state.finalFit}</strong> · ${earthSummary}</p></section>
  <section class="report-section"><h3>4. 내가 만든 공진화 고리</h3><div class="report-loop">${escapeHtml($('#loopPressure').textContent)} → ${escapeHtml(state.event.change)} → <b>${policyName(state.addedPolicy)}</b> → ${escapeHtml(state.loop.earth)} → ${escapeHtml(state.loop.returned)}<br><b>${escapeHtml(state.loop.type)}</b></div><p><strong>새롭게 생길 수 있는 부담:</strong> ${escapeHtml(state.loop.tradeoff)}</p></section>`;
}

function reportText() {
  const p = state.population;
  return `[공진화 정책 결정서 · ${state.studentId}]\n환경: ${state.scenario.name}\n관측: ${state.scenario.indicators.map((item) => `${item.label} ${item.value}`).join(', ')}\n초기 정책: ${state.selected.map(policyName).join(', ')}\n10년 후 사건: ${state.event.title}\n추가 정책: ${policyName(state.addedPolicy)}\n최종 인구: 안정 ${p.stable}, 위험 노출 ${p.atRisk}, 2차 이동 ${p.secondary}, 정착 대기 ${p.waiting}\n공진화 고리: ${$('#loopPressure').textContent} → ${state.event.change} → ${policyName(state.addedPolicy)} → ${state.loop.earth} → ${state.loop.returned}\n부담: ${state.loop.tradeoff}`;
}

async function copyReport() {
  try { await navigator.clipboard.writeText(reportText()); } catch { const area = document.createElement('textarea'); area.value = reportText(); document.body.append(area); area.select(); document.execCommand('copy'); area.remove(); }
  $('#copyBtn').textContent = '복사 완료'; setTimeout(() => { $('#copyBtn').textContent = '내용 복사'; }, 1800);
}

$('#startBtn').addEventListener('click', begin);
$('#studentId').addEventListener('keydown', (event) => { if (event.key === 'Enter') begin(); });
$('#confirmEnvironmentBtn').addEventListener('click', confirmEnvironment);
$('#confirmPolicyBtn').addEventListener('click', () => { renderReasons(); showScreen('reasonScreen', '3 / 7 · 선택 근거'); });
$('#backToPolicyBtn').addEventListener('click', () => showScreen('policyScreen', '2 / 7 · 정책 선택'));
$('#runSimulationBtn').addEventListener('click', () => { renderReveal(); showScreen('revealScreen', '4 / 7 · 정착 직후'); });
$('#drawEventBtn').addEventListener('click', () => { renderEvent(); showScreen('eventScreen', '5 / 7 · 10년 후 사건'); });
$('#eventReason').addEventListener('input', validateEvent);
$('#confirmEventBtn').addEventListener('click', () => { renderOutcome(); showScreen('outcomeScreen', '6 / 7 · 10년 후 결과'); });
$('#goToLoopBtn').addEventListener('click', () => { renderLoop(); showScreen('loopScreen', '7 / 7 · 공진화 고리'); });
['earthEffect', 'returnEffect', 'tradeoff'].forEach((id) => $(`#${id}`).addEventListener('input', validateLoop));
document.querySelectorAll('input[name="loopType"]').forEach((radio) => radio.addEventListener('change', validateLoop));
$('#finishBtn').addEventListener('click', () => { validateLoop(); renderReport(); showScreen('reportScreen', '완료 · 개인 결과지'); });
$('#printBtn').addEventListener('click', () => window.print());
$('#copyBtn').addEventListener('click', copyReport);
$('#restartBtn').addEventListener('click', () => window.location.reload());
$('#decisionToggle').addEventListener('click', () => setDrawer(!$('#decisionDrawer').classList.contains('open')));
$('#decisionClose').addEventListener('click', () => setDrawer(false));
$('#drawerBackdrop').addEventListener('click', () => setDrawer(false));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setDrawer(false); });
renderProgress(0);
