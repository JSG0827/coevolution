const scenarios = [
  {
    id: 'delta', name: '푸른강 삼각주', type: '연안·삼각주',
    intro: '낮은 해안 평야와 습지, 농경지가 이어진 지역입니다. 해수면 상승과 지반 침하가 동시에 진행되며 농업과 어업 생계가 흔들리고 있습니다.',
    indicators: [
      { key: 'sea', label: '상대적 해수면', value: '+24 cm', note: '최근 20년 누적 변화', color: '#4ba7b2', help: '바다 높이의 변화와 육지의 상승·침하를 함께 고려한 해수면입니다.' },
      { key: 'subsidence', label: '지반 침하', value: '연 6 mm', note: '지하수 사용과 퇴적층 압밀', color: '#c99354', help: '지하수 취수나 퇴적층 압밀로 지표면이 낮아지는 현상입니다.' },
      { key: 'wetland', label: '연안 습지 면적', value: '-31%', note: '개발 이전 면적과 비교', color: '#58a67c' },
      { key: 'salinity', label: '지하수 염분', value: '1.8배', note: '20년 전 평균과 비교', color: '#7a8ec7' }
    ],
    chain: ['대기권: 해양 가열', '수권: 해수면·염수', '지권: 침하·염류화', '생물권: 습지·작물', '인간권: 생계·이동'],
    questions: [
      { q: '해수면 상승과 지반 침하가 동시에 진행될 때 가장 직접적으로 커지는 위험은?', options: ['연안 퇴적 증가로 육지가 빠르게 높아진다', '상대적 해수면 상승과 침수 위험이 커진다', '해수의 열팽창이 즉시 멈춘다'], correct: 1, explanation: '육지가 낮아지는 효과와 바다가 높아지는 효과가 합쳐져 상대적 해수면과 침수 위험이 커집니다.' },
      { q: '습지 면적 감소가 주민의 안전에 영향을 주는 경로로 가장 적절한 것은?', options: ['증발산 감소로 모든 계절의 강수량이 늘어난다', '해안의 지반 침하가 즉시 멈춘다', '파랑 에너지와 물 저장 완충이 감소한다'], correct: 2, explanation: '습지는 파랑과 홍수 에너지를 줄이고 물을 저장하므로 감소하면 사람과 생물의 노출이 함께 커집니다.' }
    ],
    policyNames: { restoration: '연안 습지 복원', water: '담수·지하수 순환 관리', food: '내염성 농업 전환', infrastructure: '방조제·고상식 기반시설', culture: '공동체 집단이주' },
    earthLabels: { water: '담수 수질', soil: '토양 생산성', habitat: '습지 서식지', buffer: '홍수 완충 능력' },
    biosphereResponses: {
      improve: '습지 식생이 회복되어 유속을 낮추고 퇴적물과 물을 붙잡는다',
      worsen: '습지 식생과 저서생물이 감소해 먹이망과 파랑·홍수 완충이 약해진다',
      mixed: '복원 위치와 서식지 연결성에 따라 식생과 먹이망의 회복 정도가 달라진다'
    },
    naturalTrend: { water: -12, soil: -10, habitat: -14, buffer: -11 },
    baseRisks: { flood: 9, salinity: 8, biodiversity: 6, heat: 4 }
  },
  {
    id: 'dryland', name: '마른강 내륙분지', type: '건조·농업분지',
    intro: '강수량 감소와 증발산 증가가 겹치는 농업 지역입니다. 지하수 의존이 커지고 표토와 식생이 감소하면서 이동하지 못하는 가구의 위험도 높아지고 있습니다.',
    indicators: [
      { key: 'rain', label: '연강수량', value: '-14%', note: '최근 20년 평균 변화', color: '#6a9bc4' },
      { key: 'evapo', label: '잠재 증발산', value: '+18%', note: '기온·일사 변화의 영향', color: '#d28b53', help: '물이 충분하다고 가정할 때 지표 증발과 식물 증산으로 대기에 이동할 수 있는 물의 양입니다.' },
      { key: 'groundwater', label: '지하수면 깊이', value: '+7 m', note: '물을 더 깊이에서 취수', color: '#667fc2', help: '지표에서 지하수면까지의 거리입니다. 값이 커지면 물을 더 깊이에서 끌어올려야 합니다.' },
      { key: 'vegetation', label: '식생 피복', value: '-23%', note: '위성 기반 지수의 가상 변화', color: '#6ca66c' }
    ],
    chain: ['대기권: 강수·기온', '수권: 토양수·지하수', '지권: 표토·침하', '생물권: 식생·작물', '인간권: 식량·이동'],
    questions: [
      { q: '강수량은 줄고 증발산은 늘 때 토양수분은 일반적으로 어떻게 되는가?', options: ['강수가 줄어도 기온 상승 때문에 항상 증가한다', '유입 감소와 손실 증가가 겹쳐 감소한다', '토양 종류와 무관하게 일정하게 유지된다'], correct: 1, explanation: '들어오는 물은 줄고 대기로 빠져나가는 물은 늘어 토양과 식물이 사용할 수 있는 물이 감소합니다.' },
      { q: '지하수를 장기간 과잉 취수할 때 함께 나타날 수 있는 현상은?', options: ['대수층 압력 감소와 지반 침하', '지하수면 상승과 용수 비용 감소', '표토 수분 증가와 식생의 자동 회복'], correct: 0, explanation: '대수층의 압력이 낮아지고 퇴적층이 압밀되면 지반 침하와 취수 비용 증가가 나타날 수 있습니다.' }
    ],
    policyNames: { restoration: '초지·하천변 식생 복원', water: '지하수 총량·빗물 관리', food: '가뭄 적응 농업', infrastructure: '저수·사방 기반시설', culture: '생계 공동체 계획이주' },
    earthLabels: { water: '지하수 가용성', soil: '표토 보전', habitat: '식생 피복', buffer: '가뭄 완충 능력' },
    biosphereResponses: {
      improve: '식생과 뿌리가 늘어 표토를 붙잡고 바람 침식과 빠른 유출을 줄인다',
      worsen: '식생 감소로 표토가 노출되어 침식과 토양수분 손실이 더 커진다',
      mixed: '물 배분과 토지 관리 방식에 따라 식생 회복과 생태용수 확보가 달라진다'
    },
    naturalTrend: { water: -15, soil: -13, habitat: -12, buffer: -14 },
    baseRisks: { drought: 9, dust: 7, subsidence: 7, waterConflict: 6 }
  },
  {
    id: 'mountain', name: '하늘샘 산악유역', type: '고산·하천상류',
    intro: '적설 기간과 빙하 면적이 감소하는 산악 상류 지역입니다. 강한 비와 동결·융해의 변화가 사면을 불안정하게 만들고 계절별 물 공급도 달라지고 있습니다.',
    indicators: [
      { key: 'snow', label: '적설 지속 기간', value: '-38일', note: '30년 전과 비교', color: '#79a9c8', help: '한 해 동안 지표에 눈이 쌓여 있는 기간으로, 계절별 물 저장과 유출 시기에 영향을 줍니다.' },
      { key: 'glacier', label: '빙하 면적', value: '-17%', note: '최근 20년 변화', color: '#7292b1' },
      { key: 'rain', label: '극한강우 강도', value: '+22%', note: '상위 1% 강수 사건', color: '#4d83b6' },
      { key: 'freeze', label: '동결·융해 변동', value: '+26%', note: '사면 암석 균열 가능성', color: '#947bb3', help: '물이 얼고 녹는 과정이 반복되는 변화로, 암석 틈을 넓혀 사면을 약하게 만들 수 있습니다.' }
    ],
    chain: ['대기권: 기온·극한강우', '빙권: 적설·빙하', '수권: 계절 유량', '지권: 사면 안정', '생물권·인간권: 서식지·정착'],
    questions: [
      { q: '적설 기간이 짧아질 때 하류 물 공급에서 나타날 가능성이 큰 변화는?', options: ['눈 저장량 감소로 여름 유량이 항상 늘어난다', '녹는 시기가 늦어져 봄 유출이 감소한다', '봄 유출은 빨라지고 여름 물은 부족해질 수 있다'], correct: 2, explanation: '눈이 일찍 녹으면 봄철 유출이 빨라지고 건기나 여름의 저장 효과가 약해질 수 있습니다.' },
      { q: '극한강우와 동결·융해 변동이 함께 증가하면 커질 수 있는 위험은?', options: ['빙하 면적이 회복되어 사면이 안정된다', '균열 사면의 산사태와 토석류', '강우가 지표에 닿기 전에 모두 증발한다'], correct: 1, explanation: '균열이 발달한 사면에 강한 비가 스며들면 사면 안정성이 낮아져 산사태와 토석류 위험이 커집니다.' }
    ],
    policyNames: { restoration: '고산식생·하천변 복원', water: '계절 물저장·유량 관리', food: '고산 생계 다변화', infrastructure: '사면보강·피난 기반시설', culture: '산촌 공동체 계획이주' },
    earthLabels: { water: '계절 유량 안정', soil: '사면 안정성', habitat: '고산 서식지', buffer: '재해 완충 능력' },
    biosphereResponses: {
      improve: '고산·하천변 식생의 뿌리가 토양을 붙잡고 물의 빠른 유출을 늦춘다',
      worsen: '고산 식생 감소로 토양 보호와 뿌리 결합력이 약해져 침식이 커진다',
      mixed: '고도와 사면 방향에 따라 식생 이동과 하천변 서식지 회복이 다르게 나타난다'
    },
    naturalTrend: { water: -12, soil: -14, habitat: -11, buffer: -13 },
    baseRisks: { landslide: 9, glof: 7, waterShortage: 8, biodiversity: 5 }
  },
  {
    id: 'forest', name: '솔바람 산림도시권', type: '산림·도시경계',
    intro: '건조한 고온 기간이 길어지고 도시가 산림 경계까지 확장된 지역입니다. 산불뿐 아니라 연기, 화재 뒤 토양 유실과 집중호우 피해가 연속적으로 나타날 수 있습니다.',
    indicators: [
      { key: 'heat', label: '연속 고온일', value: '+19일', note: '30년 전 평균과 비교', color: '#d37055' },
      { key: 'moisture', label: '토양 수분', value: '-16%', note: '건기 평균 변화', color: '#a8835a' },
      { key: 'fire', label: '산불위험 기상일', value: '2.1배', note: '고온·건조·강풍 조건', color: '#d04f45', help: '고온·건조·강풍이 겹쳐 산불이 시작되고 퍼지기 쉬운 날입니다.' },
      { key: 'fragment', label: '산림 연결성', value: '-27%', note: '도로·주거 확장 영향', color: '#578d63', help: '숲 조각들이 생물이 이동하고 번식할 수 있도록 서로 이어진 정도입니다.' }
    ],
    chain: ['대기권: 고온·건조·강풍', '수권: 토양수분 감소', '생물권: 산림·연료', '지권: 화재 후 침식', '인간권: 연기·대피·이동'],
    questions: [
      { q: '고온일 증가와 토양수분 감소가 산불 위험을 높이는 주된 이유는?', options: ['토양수분 감소가 강풍을 완전히 막는다', '고온이 식생의 수분을 늘려 점화를 늦춘다', '식생 연료가 더 쉽게 건조되어 점화·확산이 빨라진다'], correct: 2, explanation: '식생과 낙엽의 수분이 줄면 점화와 확산이 쉬워지고 강풍이 겹칠 때 위험이 더 커집니다.' },
      { q: '대형 산불 직후 집중호우가 내리면 커질 수 있는 2차 재해는?', options: ['식생 손실로 토석류와 하천 탁도가 증가한다', '재가 토양 공극을 늘려 모든 빗물을 흡수한다', '지표 냉각으로 산림 연결성이 즉시 회복된다'], correct: 0, explanation: '식생과 토양 구조가 손상된 사면은 물을 덜 흡수해 토석류와 침식, 수질 악화가 발생하기 쉽습니다.' }
    ],
    policyNames: { restoration: '내화성 산림·하천 복원', water: '토양수분·소방용수 관리', food: '산림 생계 다변화', infrastructure: '방화대·내화 주거 기반시설', culture: '산촌 공동체 계획이주' },
    earthLabels: { water: '토양 수분', soil: '침식 저항성', habitat: '산림 연결성', buffer: '산불·탄소 완충' },
    biosphereResponses: {
      improve: '산림 연결성과 하층 식생이 회복되어 토양을 보호하고 물을 저장한다',
      worsen: '산불 뒤 식생과 뿌리가 줄어 침식·토석류와 하천 탁도가 커진다',
      mixed: '수종과 연료 관리 방식에 따라 생물다양성 회복과 산불 위험이 달라진다'
    },
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
const profileColors = ['#33856f', '#6c9c75', '#d2a23f', '#5f87ae', '#9b78a6'];
const needNames = { housing: '주거 안정', health: '건강·돌봄', livelihood: '생계·접근', participation: '정책 참여', culture: '문화·공동체' };
const policyCategoryMap = { housing: 'space', compact: 'space', culture: 'space', food: 'life', jobs: 'life', mobility: 'life', care: 'care', council: 'care', restoration: 'earth', water: 'earth', infrastructure: 'safety', warning: 'safety', microgrid: 'safety' };
const policyCategories = { all: '전체', space: '주거·공간', life: '생계·접근', earth: '생태·물', safety: '방재·에너지', care: '돌봄·참여' };

const state = { studentId: '', seed: 0, scenario: null, cohort: [], envQuestions: [], envAnswers: [], envReviewed: false, selected: [], strategyReason: '', initialNeeds: {}, initialSettled: 0, initialFit: 0, event: null, eventScore: 0, addedPolicy: null, eventReason: '', baselineNeeds: {}, baselineEarth: {}, baselinePopulation: {}, finalNeeds: {}, finalEarth: {}, population: {}, loopPolicy: null, loop: {} };
const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const hashText = (text) => [...String(text)].reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 17) >>> 0;
const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
const getPolicy = (id) => policies.find((policy) => policy.id === id);
const policyName = (id) => state.scenario.policyNames[id] || getPolicy(id).name;
const policyDescription = (id) => getPolicy(id).desc;
const noise = (key) => ((hashText(`${state.studentId}-${key}`) % 401) / 100) - 2;
const needStatus = (value) => value >= 70 ? { label: '충분', className: 'good' } : value >= 50 ? { label: '보완 필요', className: 'watch' } : { label: '우선 지원', className: 'risk' };
const changeStatus = (delta) => delta >= 6 ? { label: '뚜렷하게 개선', className: 'good', symbol: '▲' } : delta >= 2 ? { label: '개선', className: 'good', symbol: '▲' } : delta <= -6 ? { label: '크게 악화', className: 'risk', symbol: '▼' } : delta <= -2 ? { label: '악화', className: 'risk', symbol: '▼' } : { label: '비슷함', className: 'steady', symbol: '―' };
const earthStatus = (value) => value >= 106 ? { label: '회복', className: 'good' } : value >= 95 ? { label: '기준과 비슷', className: 'steady' } : { label: '악화', className: 'risk' };
const riskLevel = (value, max = 12) => { const ratio = value / max; return ratio >= .78 ? '매우 높음' : ratio >= .58 ? '높음' : ratio >= .38 ? '보통' : '낮음'; };
const responseLevel = (value) => value >= 8 ? '빠르게 대응 가능' : value >= 5 ? '대응 가능' : '대응 역량 부족';
const screenSteps = { introScreen: 0, environmentScreen: 1, policyScreen: 2, eventScreen: 3, outcomeScreen: 4, loopScreen: 5, reportScreen: 5 };
let toastTimer;
let activePolicyFilter = 'all';
let activeEventFilter = 'direct';

function renderProgress(step = 0) {
  $('#progressHud').innerHTML = Array.from({ length: 5 }, (_, index) => {
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
  const residentSummary = profiles.map((profile, index) => `${profile.name} ${state.cohort[index].toLocaleString()}명`).join(' · ');
  const policyLog = state.selected.length
    ? `<div class="log-policy-list">${state.selected.map((id) => `<div class="log-policy"><span aria-hidden="true">${getPolicy(id).icon}</span><span>${policyName(id)}</span></div>`).join('')}</div>`
    : '<p class="log-empty">아직 초기 정책을 선택하지 않았습니다.</p>';
  const eventLog = state.event
    ? `<h3>${state.event.title}</h3><p>${state.event.change}</p>${state.addedPolicy ? `<div class="log-policy"><span aria-hidden="true">${getPolicy(state.addedPolicy).icon}</span><span>추가: ${policyName(state.addedPolicy)}</span></div>` : '<p class="log-empty">대응 정책 선택 전</p>'}`
    : '<p class="log-empty">2055년 사건은 아직 공개되지 않았습니다.</p>';
  $('#decisionContent').innerHTML = `<section class="log-block"><span>01 · 환경</span><h3>${state.scenario.name}</h3><p>${indicatorSummary}</p></section><section class="log-block"><span>02 · 이동 주민</span><h3>1,200명</h3><p>${residentSummary}</p></section><section class="log-block"><span>03 · 초기 결정</span>${policyLog}</section><section class="log-block"><span>04 · 2055년</span>${eventLog}</section>`;
}

function setDrawer(open) {
  $('#decisionDrawer').classList.toggle('open', open);
  $('#decisionDrawer').setAttribute('aria-hidden', String(!open));
  $('#decisionToggle').setAttribute('aria-expanded', String(open));
  $('#drawerBackdrop').hidden = !open;
}

function showScreen(id, label) {
  clearTimeout(toastTimer);
  $('#gameToast').classList.remove('show');
  document.querySelectorAll('.screen').forEach((screen) => screen.classList.toggle('active', screen.id === id));
  $('#stepPill').textContent = label;
  renderProgress(screenSteps[id]);
  updateDecisionLog();
  setDrawer(false);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetRunState() {
  Object.assign(state, { studentId: '', seed: 0, scenario: null, cohort: [], envQuestions: [], envAnswers: [], envReviewed: false, selected: [], strategyReason: '', initialNeeds: {}, initialSettled: 0, initialFit: 0, event: null, eventScore: 0, addedPolicy: null, eventReason: '', baselineNeeds: {}, baselineEarth: {}, baselinePopulation: {}, finalNeeds: {}, finalEarth: {}, population: {}, loopPolicy: null, loop: {} });
  activePolicyFilter = 'all';
  activeEventFilter = 'direct';
  $('#strategyReason').value = '';
  $('#eventReason').value = '';
  $('#finalReflection').value = '';
  $('#selectedCount').textContent = '0';
  $('#addedCount').textContent = '0';
  $('#environmentFeedback').classList.add('hidden');
  $('#environmentFeedback').innerHTML = '';
  $('#confirmEnvironmentBtn').textContent = '자료 해석 확인';
  $('#confirmEnvironmentBtn').disabled = true;
  $('#outcomeDetails').removeAttribute('open');
  document.querySelectorAll('input[name="loopType"]').forEach((radio) => { radio.checked = false; });
}

function begin() {
  const studentId = $('#studentId').value.trim();
  if (!studentId) { $('#studentError').textContent = '출석번호 또는 별칭을 입력하세요.'; $('#studentId').focus(); return; }
  resetRunState();
  $('#studentError').textContent = '';
  state.studentId = studentId;
  state.seed = hashText(studentId);
  const fixedScenario = scenarios.find((scenario) => scenario.id === $('#classScenarioSelect').value);
  state.scenario = fixedScenario || scenarios[state.seed % scenarios.length];
  state.cohort = cohortTemplates[Math.floor(state.seed / scenarios.length) % cohortTemplates.length];
  renderEnvironment();
  showScreen('environmentScreen', '1 / 5 · 환경 관측');
}

function renderEnvironment() {
  const s = state.scenario;
  $('#environmentHero').innerHTML = `<span>2045년 · 수업용 복합 시나리오</span><h2>${s.name}</h2><p>${s.intro}</p>`;
  $('#scenarioBadge').textContent = s.type;
  $('#indicatorGrid').innerHTML = s.indicators.map((item) => `<article class="indicator-card" style="--accent:${item.color}"><div class="indicator-label"><span>${item.label}</span>${item.help ? `<details class="term-help"><summary aria-label="${item.label} 뜻 보기">?</summary><p><b>${item.label}</b>${item.help}</p></details>` : ''}</div><strong>${item.value}</strong><small>${item.note}</small></article>`).join('');
  $('#systemChain').innerHTML = s.chain.map((item, index) => `${index ? '<span class="system-link" aria-hidden="true">→</span>' : ''}<span class="system-chip">${item}</span>`).join('');
  state.envQuestions = s.questions.map((question, qIndex) => {
    const target = (state.seed + qIndex) % question.options.length;
    const distractors = question.options.map((_, index) => index).filter((index) => index !== question.correct);
    if (hashText(`${state.studentId}-distractors-${qIndex}`) % 2) distractors.reverse();
    let distractorIndex = 0;
    const order = question.options.map((_, index) => index === target ? question.correct : distractors[distractorIndex++]);
    return { ...question, options: order.map((index) => question.options[index]), correct: target };
  });
  $('#questionGrid').innerHTML = state.envQuestions.map((question, qIndex) => `<article class="question-card"><fieldset><legend>${qIndex + 1}. ${question.q}</legend>${question.options.map((option, oIndex) => `<label><input type="radio" name="env-q${qIndex}" value="${oIndex}"> ${option}</label>`).join('')}</fieldset></article>`).join('');
  document.querySelectorAll('#questionGrid input').forEach((input) => input.addEventListener('change', validateEnvironment));
}

function validateEnvironment() {
  state.envAnswers = state.envQuestions.map((_, index) => document.querySelector(`input[name="env-q${index}"]:checked`)?.value ?? null);
  const ready = state.envAnswers.every((answer) => answer !== null);
  $('#confirmEnvironmentBtn').disabled = !ready;
  $('#environmentHint').textContent = ready ? '선택한 답의 해설을 확인하세요.' : '두 문항에 답하세요.';
}

function confirmEnvironment() {
  if (!state.envReviewed) {
    const correct = state.envQuestions.reduce((count, question, index) => count + (Number(state.envAnswers[index]) === question.correct ? 1 : 0), 0);
    $('#environmentFeedback').classList.remove('hidden');
    $('#environmentFeedback').innerHTML = `<strong>자료 해석 ${correct} / ${state.envQuestions.length}</strong><p>${state.envQuestions.map((question) => question.explanation).join(' ')}</p>`;
    document.querySelectorAll('#questionGrid input').forEach((input) => { input.disabled = true; });
    state.envReviewed = true;
    $('#confirmEnvironmentBtn').textContent = '정책 선택으로 이동';
    $('#environmentHint').textContent = '관측 근거를 기억하고 정책을 선택하세요.';
    return;
  }
  renderInitialPolicyWorkspace();
  showScreen('policyScreen', '2 / 5 · 정착 전략');
}

function policyCard(policy, selected = false, mode = 'initial') {
  const category = mode === 'event' ? eventPolicyGroup(policy) : policyCategoryMap[policy.id];
  const categoryLabel = mode === 'event' ? eventGroupLabel(category) : policyCategories[category];
  const benefit = policy.effects[0];
  const burden = policy.effects[policy.effects.length - 1];
  return `<article class="policy-card compact-policy-card${selected ? ' selected' : ''}" data-policy="${policy.id}"><button class="policy-select-btn" type="button" aria-pressed="${selected}"><span class="policy-icon" aria-hidden="true">${policy.icon}</span><span class="policy-card-copy"><small>${categoryLabel}</small><strong>${policyName(policy.id)}</strong><span class="quick-effects"><em>${benefit}</em><em class="burden">${burden}</em></span></span></button><button class="policy-detail-toggle" type="button" aria-expanded="false">자세히</button><div class="policy-detail hidden"><p>${policyDescription(policy.id)}</p><span class="policy-effects">${policy.effects.map((effect) => `<span>${effect}</span>`).join('')}</span></div></article>`;
}

function renderPolicies(target, list, mode = target === '#eventPolicyGrid' ? 'event' : 'initial') {
  $(target).innerHTML = list.map((policy) => policyCard(policy, mode === 'initial' ? state.selected.includes(policy.id) : policy.id === state.addedPolicy, mode)).join('');
  document.querySelectorAll(`${target} .policy-select-btn`).forEach((button) => button.addEventListener('click', () => {
    const card = button.closest('.policy-card');
    mode === 'initial' ? toggleInitialPolicy(card) : toggleAddedPolicy(card);
  }));
  document.querySelectorAll(`${target} .policy-detail-toggle`).forEach((button) => button.addEventListener('click', () => {
    const detail = button.nextElementSibling;
    const open = detail.classList.toggle('hidden') === false;
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '접기' : '자세히';
  }));
}

function renderInitialPolicyWorkspace() {
  renderResidentBriefing();
  $('#policyFilters').innerHTML = Object.entries(policyCategories).map(([key, label]) => `<button type="button" class="filter-chip${activePolicyFilter === key ? ' active' : ''}" data-policy-filter="${key}">${label}${key === 'all' ? ` ${policies.length}` : ` ${policies.filter((policy) => policyCategoryMap[policy.id] === key).length}`}</button>`).join('');
  document.querySelectorAll('[data-policy-filter]').forEach((button) => button.addEventListener('click', () => {
    activePolicyFilter = button.dataset.policyFilter;
    renderInitialPolicyWorkspace();
  }));
  const visible = activePolicyFilter === 'all' ? policies : policies.filter((policy) => policyCategoryMap[policy.id] === activePolicyFilter);
  renderPolicies('#policyGrid', visible, 'initial');
  updateStrategyTray();
  validateStrategy();
}

function renderResidentBriefing() {
  const total = state.cohort.reduce((sum, count) => sum + count, 0);
  const bar = state.cohort.map((count, index) => `<span class="resident-segment" style="width:${(count / total) * 100}%;background:${profileColors[index]}" role="img" aria-label="${profiles[index].name} ${count.toLocaleString()}명"></span>`).join('');
  const cards = profiles.map((profile, index) => `<div class="resident-profile" style="--profile-color:${profileColors[index]}"><span>${profile.name}</span><strong>${state.cohort[index].toLocaleString()}명</strong><small>주요 필요 · ${profile.need}</small></div>`).join('');
  $('#residentBriefing').innerHTML = `<div class="resident-distribution" aria-label="이동 주민 구성 비율">${bar}</div><div class="resident-profile-grid">${cards}</div>`;
}

function toggleInitialPolicy(card) {
  const id = card.dataset.policy;
  const selected = state.selected.includes(id);
  if (!selected && state.selected.length >= 3) { showToast('정책은 세 개까지 선택할 수 있습니다.'); return; }
  state.selected = selected ? state.selected.filter((item) => item !== id) : [...state.selected, id];
  document.querySelectorAll('#policyGrid .policy-card').forEach((item) => {
    const active = state.selected.includes(item.dataset.policy);
    item.classList.toggle('selected', active);
    item.querySelector('.policy-select-btn').setAttribute('aria-pressed', String(active));
  });
  $('#selectedCount').textContent = state.selected.length;
  updateStrategyTray();
  validateStrategy();
  updateDecisionLog();
  showToast(selected ? `${policyName(id)} 선택 해제` : `${policyName(id)} 선택`);
}

function coverageStatus(value, strong, partial) {
  return value >= strong ? { label: '확보', className: 'good' } : value >= partial ? { label: '일부', className: 'watch' } : { label: '부족', className: 'risk' };
}

function updateStrategyTray() {
  $('#selectedStrategyTray').innerHTML = state.selected.length ? state.selected.map((id) => `<div class="tray-policy"><span aria-hidden="true">${getPolicy(id).icon}</span><strong>${policyName(id)}</strong><button type="button" data-remove-policy="${id}" aria-label="${policyName(id)} 선택 해제">×</button></div>`).join('') : '<p class="tray-empty">정책 카드를 선택하면 여기에 모입니다.</p>';
  document.querySelectorAll('[data-remove-policy]').forEach((button) => button.addEventListener('click', () => toggleInitialPolicy({ dataset: { policy: button.dataset.removePolicy } })));
  const chosen = state.selected.map(getPolicy);
  const capacity = chosen.reduce((sum, policy) => sum + policy.capacity, 0);
  const life = chosen.reduce((sum, policy) => sum + policy.needs.health + policy.needs.livelihood, 0);
  const earth = chosen.reduce((sum, policy) => sum + Object.values(policy.earth).reduce((a, b) => a + b, 0), 0);
  const response = chosen.reduce((sum, policy) => sum + policy.response, 0);
  const community = chosen.reduce((sum, policy) => sum + policy.needs.participation + policy.needs.culture, 0);
  const diagnostics = [['정착 공간', coverageStatus(capacity, 500, 250)], ['생활 지원', coverageStatus(life, 15, 8)], ['지구시스템', coverageStatus(earth, 14, 6)], ['재난 대응', coverageStatus(response, 7, 3)], ['참여·공동체', coverageStatus(community, 12, 5)]];
  $('#coverageDiagnostic').innerHTML = diagnostics.map(([label, status]) => `<span class="coverage-chip ${status.className}"><b>${label}</b>${status.label}</span>`).join('');
}

function validateStrategy() {
  state.strategyReason = $('#strategyReason').value.trim();
  const policiesReady = state.selected.length === 3;
  const reasonReady = state.strategyReason.length >= 15;
  $('#confirmPolicyBtn').disabled = !(policiesReady && reasonReady);
  $('#policyHint').textContent = !policiesReady ? `정책을 ${3 - state.selected.length}개 더 선택하세요.` : !reasonReady ? '관측 자료와 연결한 전략을 한 문장으로 작성하세요.' : '정착 전략이 완성되었습니다.';
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
    const status = needStatus(needs[key]);
    return `<div class="metric-row"><div class="metric-label"><span>${label}</span><span class="status-badge ${status.className}">${status.label}</span></div><div class="metric-track" aria-label="${label} ${status.label}"><div class="metric-fill ${status.className}" style="width:${needs[key]}%"></div></div></div>`;
  }).join('');
}

function prepareInitialSettlement() {
  state.initialNeeds = calculateNeeds(state.selected);
  state.initialSettled = clamp(180 + state.selected.reduce((sum, id) => sum + getPolicy(id).capacity, 0), 0, 1200);
  state.initialFit = Math.round((Object.values(state.initialNeeds).reduce((a, b) => a + b, 0) / 5) * 0.6 + calculateFit(state.selected) * 0.4);
  const topRisk = Object.entries(state.scenario.baseRisks).sort((a, b) => b[1] - a[1])[0];
  const strongestNeed = Object.entries(state.initialNeeds).sort((a, b) => b[1] - a[1])[0];
  const lowest = Object.entries(state.initialNeeds).sort((a, b) => a[1] - b[1])[0];
  const largestCohortIndex = state.cohort.indexOf(Math.max(...state.cohort));
  $('#settlementSnapshot').innerHTML = `<div class="snapshot-title"><span>2045 정착 전략 결과</span><strong>${state.selected.map(policyName).join(' · ')}</strong></div><div class="snapshot-grid"><div><span>정착 기반 확보</span><strong>${state.initialSettled.toLocaleString()}명</strong></div><div><span>가장 잘 지원</span><strong>${needNames[strongestNeed[0]]}</strong></div><div><span>먼저 보완</span><strong>${needNames[lowest[0]]}</strong></div><div><span>가장 큰 주민 집단</span><strong>${profiles[largestCohortIndex].name}</strong></div><div><span>계속 관찰</span><strong>${hazardName(topRisk[0])} · ${riskLevel(topRisk[1], 10)}</strong></div></div>`;
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

function eventPolicyGroup(policy) {
  if ((policy.risk[state.event.hazard] || 0) < 0) return 'direct';
  if (policy.response >= 3 || policy.needs.health >= 3 || policy.needs.participation >= 3) return 'recovery';
  return 'other';
}

function eventGroupLabel(group) {
  return ({ direct: '위험 직접 완충', recovery: '피해·회복 지원', other: '다른 접근' })[group];
}

function renderEventPolicyFilters() {
  const available = policies.filter((policy) => !state.selected.includes(policy.id));
  const groups = ['direct', 'recovery', 'other'];
  if (!available.some((policy) => eventPolicyGroup(policy) === activeEventFilter)) activeEventFilter = groups.find((group) => available.some((policy) => eventPolicyGroup(policy) === group)) || 'other';
  $('#eventPolicyFilters').innerHTML = groups.map((group) => { const count = available.filter((policy) => eventPolicyGroup(policy) === group).length; return `<button type="button" class="filter-chip${activeEventFilter === group ? ' active' : ''}" data-event-filter="${group}" ${count ? '' : 'disabled'}>${eventGroupLabel(group)} ${count}</button>`; }).join('');
  document.querySelectorAll('[data-event-filter]').forEach((button) => button.addEventListener('click', () => { activeEventFilter = button.dataset.eventFilter; renderEventPolicyFilters(); }));
  renderPolicies('#eventPolicyGrid', available.filter((policy) => eventPolicyGroup(policy) === activeEventFilter), 'event');
}

function renderEvent() {
  chooseEvent();
  const e = state.event;
  const indicators = e.causes.map((key) => state.scenario.indicators.find((item) => item.key === key)).filter(Boolean);
  const reducers = state.selected.filter((id) => (getPolicy(id).risk[e.hazard] || 0) < 0);
  const amplifiers = state.selected.filter((id) => (getPolicy(id).risk[e.hazard] || 0) > 0);
  $('#eventBanner').innerHTML = `<span>2055년 · ${state.scenario.name}</span><h2>${e.title}</h2><p>${e.desc}</p><div class="event-causes">${indicators.map((item) => `<span>${item.label} ${item.value}</span>`).join('')}<span class="risk-tag">잔여 위험 ${riskLevel(state.eventScore)}</span>${reducers.map((id) => `<span>${policyName(id)}이 일부 완충</span>`).join('')}${amplifiers.map((id) => `<span>${policyName(id)}의 부작용이 위험 가중</span>`).join('')}</div>`;
  renderEventPolicyFilters();
  updateDecisionLog();
}

function toggleAddedPolicy(card) {
  state.addedPolicy = card.dataset.policy;
  document.querySelectorAll('#eventPolicyGrid .policy-card').forEach((item) => { const active = item.dataset.policy === state.addedPolicy; item.classList.toggle('selected', active); item.querySelector('.policy-select-btn').setAttribute('aria-pressed', String(active)); });
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

function calculateOutcomeFor(policyIds, addedPolicyId = null) {
  const e = state.event;
  const added = addedPolicyId ? getPolicy(addedPolicyId) : null;
  const mitigation = Math.max(0, -policyIds.reduce((sum, id) => sum + (getPolicy(id).risk[e.hazard] || 0), 0));
  const response = policyIds.reduce((sum, id) => sum + getPolicy(id).response, 0);
  const addedRisk = added ? (added.risk[e.hazard] || 0) : 0;
  const finalSeverity = clamp(state.eventScore + addedRisk, 1, 12);
  const finalCapacity = clamp(state.initialSettled + (added ? Math.round(added.capacity * 0.78) + (addedRisk < 0 ? 35 : 0) : 0), 0, 1200);
  let secondary = Math.round(finalCapacity * clamp(0.055 + finalSeverity * 0.017 - response * 0.006, 0.025, 0.28));
  let atRisk = Math.round(finalCapacity * clamp(0.11 + finalSeverity * 0.012 - mitigation * 0.006, 0.05, 0.27));
  if (secondary + atRisk > finalCapacity * 0.62) atRisk = Math.round(finalCapacity * 0.62) - secondary;
  const waiting = 1200 - finalCapacity;
  const stable = finalCapacity - secondary - atRisk;

  const needs = { ...state.initialNeeds };
  Object.keys(needs).forEach((key) => {
    const eventLoss = e.needs[key] || 0;
    const softened = Math.min(0, eventLoss + Math.round(mitigation * 0.55 + response * 0.25));
    needs[key] = clamp(Math.round(state.initialNeeds[key] + (added ? added.needs[key] * 6 : 0) + softened), 0, 100);
  });

  const earth = {};
  Object.keys(state.scenario.earthLabels).forEach((key) => {
    const policyEffect = policyIds.reduce((sum, id) => sum + getPolicy(id).earth[key] * 2, 0);
    earth[key] = clamp(Math.round(100 + state.scenario.naturalTrend[key] + policyEffect + (e.earth[key] || 0)), 35, 145);
  });
  return { population: { stable, atRisk, secondary, waiting }, needs, earth, meta: { mitigation, response, finalSeverity } };
}

function calculateOutcome() {
  const baseline = calculateOutcomeFor(state.selected);
  const chosen = calculateOutcomeFor([...state.selected, state.addedPolicy], state.addedPolicy);
  state.baselinePopulation = baseline.population;
  state.baselineNeeds = baseline.needs;
  state.baselineEarth = baseline.earth;
  state.population = chosen.population;
  state.finalNeeds = chosen.needs;
  state.finalEarth = chosen.earth;
  state.finalFit = Math.round((Object.values(state.finalNeeds).reduce((a, b) => a + b, 0) / 5) * 0.65 + calculateFit([...state.selected, state.addedPolicy]) * 0.35);
  state.outcomeMeta = chosen.meta;
}

function renderOutcome() {
  calculateOutcome();
  const p = state.population;
  const baseline = state.baselinePopulation;
  const stableDelta = p.stable - baseline.stable;
  const secondaryDelta = baseline.secondary - p.secondary;
  const impactText = (value, positiveWord, negativeWord) => value > 0 ? `${Math.abs(value).toLocaleString()}명 ${positiveWord}` : value < 0 ? `${Math.abs(value).toLocaleString()}명 ${negativeWord}` : '변화 없음';
  const impactClass = (value) => value > 0 ? 'good' : value < 0 ? 'risk' : 'steady';
  const needInsights = Object.entries(needNames).map(([key, label]) => ({ label, delta: state.finalNeeds[key] - state.baselineNeeds[key], status: needStatus(state.finalNeeds[key]) }));
  const earthInsights = Object.entries(state.scenario.earthLabels).map(([key, label]) => ({ label, delta: state.finalEarth[key] - state.baselineEarth[key], status: earthStatus(state.finalEarth[key]) }));
  const largestNeedShift = [...needInsights].sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))[0];
  const largestEarthShift = [...earthInsights].sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta))[0];
  const shiftLabel = (item) => item.delta > 0 ? '▲ 추가 대응으로 개선' : item.delta < 0 ? '▼ 추가 대응 뒤 악화' : '― 직접 변화 없음';
  $('#comparisonPolicyLabel').textContent = `${policyName(state.addedPolicy)} 적용 효과`;
  $('#responseComparison').innerHTML = `<article class="counterfactual-card highlight-card people"><span>주민 결과</span><strong class="highlight-value">안정 정착 ${p.stable.toLocaleString()}명</strong><p>추가 대응이 없을 때보다 ${impactText(stableDelta, '증가', '감소')} · 2차 이동 ${p.secondary.toLocaleString()}명</p><b class="impact-badge ${impactClass(stableDelta)}">${stableDelta >= 0 ? '▲' : '▼'} ${Math.abs(stableDelta).toLocaleString()}명</b></article>
  <article class="counterfactual-card highlight-card need-change"><span>주민 필요에서 변화량이 큰 항목</span><strong class="highlight-value">${largestNeedShift.label}</strong><p>주민 필요 영역 안에서 비교 · 현재 ${largestNeedShift.status.label}</p><b class="impact-badge ${impactClass(largestNeedShift.delta)}">${shiftLabel(largestNeedShift)}</b></article>
  <article class="counterfactual-card highlight-card earth-change"><span>지구시스템에서 변화량이 큰 항목</span><strong class="highlight-value">${largestEarthShift.label}</strong><p>지구시스템 영역 안에서 비교 · 현재 ${largestEarthShift.status.label}</p><b class="impact-badge ${impactClass(largestEarthShift.delta)}">${shiftLabel(largestEarthShift)}</b></article>`;
  $('#populationFlow').innerHTML = [
    ['안정 정착', p.stable, '주거와 서비스가 유지됨', '#33856f'],
    ['위험 노출', p.atRisk, '정착했지만 다음 충격에 취약', '#d2a23f'],
    ['2차 이동', p.secondary, '사건 뒤 다시 거처를 옮김', '#d86855'],
    ['정착 대기', p.waiting, '안전한 공간·서비스가 부족', '#75878a']
  ].map(([label, value, note, color]) => `<article class="population-card" style="--flow-color:${color}"><span>${label}</span><strong>${Number(value).toLocaleString()}명</strong><small>${note}</small></article>`).join('');
  $('#populationBar').innerHTML = [
    ['안정 정착', p.stable, '#33856f'], ['위험 노출', p.atRisk, '#d2a23f'], ['2차 이동', p.secondary, '#d86855'], ['정착 대기', p.waiting, '#75878a']
  ].map(([label, value, color]) => `<span class="population-segment" style="width:${Number(value) / 12}%;background:${color}" title="${label} ${Number(value).toLocaleString()}명"></span>`).join('');
  $('#finalNeeds').innerHTML = needComparisonRows(needNames, state.initialNeeds, state.finalNeeds);
  $('#earthMetrics').innerHTML = earthChangeRows(state.scenario.earthLabels, state.finalEarth);
  const addedRisk = getPolicy(state.addedPolicy).risk[state.event.hazard] || 0;
  const mitigationText = state.outcomeMeta.mitigation >= 4 ? '위험을 크게 완충' : state.outcomeMeta.mitigation >= 2 ? '위험을 일부 완충' : '직접 완충이 부족';
  $('#causalReceipt').innerHTML = `<h3>결과를 만든 세 가지 요인</h3><div class="outcome-explain-grid"><div><span>환경 조건</span><strong>${hazardName(state.event.hazard)} 위험 ${riskLevel(state.outcomeMeta.finalSeverity)}</strong><p>${state.scenario.name}의 기초 위험과 2055년 사건이 함께 작용했습니다.</p></div><div><span>정책 조합</span><strong>${mitigationText}</strong><p>${addedRisk < 0 ? `${policyName(state.addedPolicy)}이 이번 위험을 직접 줄였습니다.` : addedRisk > 0 ? `${policyName(state.addedPolicy)}에 일부 부작용도 있었습니다.` : `${policyName(state.addedPolicy)}은 주민의 회복을 지원했습니다.`}</p></div><div><span>도시 대응력</span><strong>${responseLevel(state.outcomeMeta.response)}</strong><p>경보·대피·돌봄·회복 정책이 사건 뒤 이동 결과를 바꿨습니다.</p></div></div>`;
  updateDecisionLog();
}

function needComparisonRows(labels, before, after) {
  return Object.entries(labels).map(([key, label]) => {
    const delta = after[key] - before[key];
    const change = changeStatus(delta);
    const current = needStatus(after[key]);
    return `<div class="change-row"><div class="change-head"><strong>${label}</strong><div class="status-pair"><span class="status-badge ${current.className}">현재 ${current.label}</span><span class="change-badge ${change.className}">${change.symbol} ${change.label}</span></div></div><div class="bar-compare"><div><span>정착 직후</span><i><b class="before" style="width:${before[key]}%"></b></i></div><div><span>10년 후</span><i><b class="after ${change.className}" style="width:${after[key]}%"></b></i></div></div></div>`;
  }).join('');
}

function earthChangeRows(labels, values) {
  return Object.entries(labels).map(([key, label]) => {
    const delta = values[key] - 100;
    const change = changeStatus(delta);
    const current = earthStatus(values[key]);
    const width = delta === 0 ? 0 : clamp(Math.abs(delta) / 45 * 50, 2, 50);
    const position = delta >= 0 ? `left:50%;width:${width}%` : `right:50%;width:${width}%`;
    return `<div class="earth-change-row"><div class="change-head"><strong>${label}</strong><div class="status-pair"><span class="status-badge ${current.className}">현재 ${current.label}</span><span class="change-badge ${change.className}">${change.symbol} ${change.label}</span></div></div><div class="earth-delta-track" aria-label="${label}: 현재 ${current.label}, 2045년보다 ${change.label}"><span class="baseline"></span><i class="earth-delta-bar ${change.className}" style="${position}"></i></div></div>`;
  }).join('') + '<div class="earth-axis"><span>악화</span><span>2045 기준</span><span>회복</span></div>';
}

function renderLoop() {
  const savedLoop = { ...state.loop, directions: { ...(state.loop.directions || {}) } };
  const evidence = state.event.causes.map((key) => state.scenario.indicators.find((item) => item.key === key)).filter(Boolean)[0];
  $('#loopPressure').textContent = `${evidence.label} ${evidence.value}`;
  $('#loopResponse').textContent = `${state.event.title} — ${state.event.change}`;
  const policyIds = [...state.selected, state.addedPolicy];
  if (!policyIds.includes(state.loopPolicy)) state.loopPolicy = null;
  $('#loopPolicyChoices').innerHTML = policyIds.map((id) => `<button type="button" class="loop-policy-choice${state.loopPolicy === id ? ' selected' : ''}" data-loop-policy="${id}" aria-pressed="${state.loopPolicy === id}"><span class="policy-icon" aria-hidden="true">${getPolicy(id).icon}</span><span><small>${id === state.addedPolicy ? '2055년 추가 정책' : '2045년 초기 정책'}</small><strong>${policyName(id)}</strong></span><b aria-hidden="true">✓</b></button>`).join('');
  document.querySelectorAll('[data-loop-policy]').forEach((button) => button.addEventListener('click', () => selectLoopPolicy(button.dataset.loopPolicy)));
  $('#loopPolicy').textContent = state.loopPolicy ? policyName(state.loopPolicy) : '설명할 정책을 선택하세요';
  $('#loopPolicyContext').classList.toggle('hidden', !state.loopPolicy);
  if (state.loopPolicy) {
    selectLoopPolicy(state.loopPolicy);
    if (savedLoop.earth) $('#earthEffectChoice').value = savedLoop.earth;
    if (savedLoop.biosphere) $('#biosphereEffectChoice').value = savedLoop.biosphere;
    if (savedLoop.returned) $('#returnEffectChoice').value = savedLoop.returned;
    if (savedLoop.type) {
      const savedType = document.querySelector(`input[name="loopType"][value="${savedLoop.type}"]`);
      if (savedType) savedType.checked = true;
    }
    if (savedLoop.reflection) $('#finalReflection').value = savedLoop.reflection;
  }
  validateLoop();
}

function selectLoopPolicy(id) {
  state.loopPolicy = id;
  const policy = getPolicy(id);
  document.querySelectorAll('[data-loop-policy]').forEach((button) => {
    const selected = button.dataset.loopPolicy === id;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  $('#loopPolicy').textContent = policyName(id);
  const needKey = Object.keys(policy.needs).sort((a, b) => policy.needs[b] - policy.needs[a])[0];
  const earthKey = Object.keys(state.scenario.earthLabels).sort((a, b) => Math.abs(policy.earth[b]) - Math.abs(policy.earth[a]))[0];
  const hazardEffect = policy.risk[state.event.hazard] || 0;
  const hazardText = hazardEffect < 0 ? `${hazardName(state.event.hazard)} 위험을 직접 완충` : hazardEffect > 0 ? `${hazardName(state.event.hazard)}에 부작용 가능` : `${hazardName(state.event.hazard)}보다 주민의 적응·회복을 지원`;
  $('#loopPolicyContext').classList.remove('hidden');
  $('#loopPolicyContext').innerHTML = `<div><span>정책 작동 방식</span><strong>${policyDescription(id)}</strong></div><div class="loop-context-chips"><span>주민: ${needNames[needKey]}</span><span>지구시스템: ${state.scenario.earthLabels[earthKey]}</span><span>${hazardText}</span></div>`;
  const earthLabel = state.scenario.earthLabels[earthKey];
  const directDirection = policy.earth[earthKey] > 0 ? 'improve' : policy.earth[earthKey] < 0 ? 'worsen' : 'mixed';
  const directEarth = directDirection === 'improve' ? `${earthLabel}이 회복되고 재해 완충 기능이 높아진다` : directDirection === 'worsen' ? `${earthLabel}이 감소하거나 단절되어 새로운 생태 부담이 생긴다` : `${earthLabel}에는 직접 변화가 적지만 주민의 적응 역량이 달라진다`;
  $('#earthEffectChoice').innerHTML = `<option value="">변화를 선택하세요</option><option data-direction="${directDirection}" value="${directEarth}">${directEarth}</option><option data-direction="worsen" value="${state.event.title}의 영향으로 ${earthLabel}이 계속 악화될 수 있다">사건의 영향으로 ${earthLabel}이 계속 악화될 수 있다</option><option data-direction="mixed" value="관리 방식과 입지에 따라 ${earthLabel}의 변화가 달라진다">관리 방식과 입지에 따라 ${earthLabel}의 변화가 달라진다</option>`;
  const bio = state.scenario.biosphereResponses;
  $('#biosphereEffectChoice').innerHTML = `<option value="">생물권 반응을 선택하세요</option><option data-direction="improve" value="${bio.improve}">${bio.improve}</option><option data-direction="worsen" value="${bio.worsen}">${bio.worsen}</option><option data-direction="mixed" value="${bio.mixed}">${bio.mixed}</option>`;
  $('#returnEffectChoice').innerHTML = `<option value="">영향을 선택하세요</option><option data-direction="improve" value="${needNames[needKey]}이 개선되어 안정 정착 가능성이 커진다">${needNames[needKey]}이 개선되어 안정 정착 가능성이 커진다</option><option data-direction="mixed" value="혜택과 부담이 주민 집단과 공간에 따라 다르게 나타난다">혜택과 부담이 주민 집단과 공간에 따라 다르게 나타난다</option><option data-direction="worsen" value="환경 부담이 남아 2차 이동 위험이 계속될 수 있다">환경 부담이 남아 2차 이동 위험이 계속될 수 있다</option>`;
  validateLoop();
}

function selectedDirection(id) {
  return $(`#${id}`).selectedOptions[0]?.dataset.direction || '';
}

function causalityFeedback(earth, biosphere, returned, type) {
  if (!earth || !biosphere || !returned) return { className: 'pending', icon: '○', title: '인과관계 점검', text: '④~⑥을 선택하면 변화 방향이 서로 연결되는지 확인합니다.' };
  const mixedPath = [earth, biosphere, returned].includes('mixed');
  const splitPath = earth !== 'mixed' && biosphere !== 'mixed' && earth !== biosphere
    || biosphere !== 'mixed' && returned !== 'mixed' && biosphere !== returned;
  const typeMismatch = type === '위험을 완화하는 되먹임' && returned === 'worsen'
    || type === '위험을 강화하는 되먹임' && returned === 'improve'
    || type === '조건에 따라 달라지는 되먹임' && !mixedPath && !splitPath;
  if (typeMismatch) return { className: 'watch', icon: '!', title: '되먹임 유형을 다시 확인하세요', text: '마지막 영향의 방향과 선택한 되먹임 유형이 다릅니다. 유형을 바꾸거나 그 이유를 최종 해석에 설명하세요.' };
  if (splitPath) return { className: 'watch', icon: '!', title: '변화 방향이 갈립니다', text: '환경·생물권·주민 영향의 방향이 서로 다릅니다. 정책의 직접 지원이나 부작용이 어느 연결을 바꾸는지 최종 해석에 설명하면 타당한 고리가 될 수 있습니다.' };
  if (mixedPath) return { className: 'good', icon: '✓', title: '조건부 경로가 연결되었습니다', text: '입지나 관리 조건에 따라 결과가 달라지는 지점을 최종 해석에 구체적으로 적으세요.' };
  return { className: 'good', icon: '✓', title: '변화 방향이 자연스럽게 연결됩니다', text: '지구시스템 변화가 생물권의 작동을 거쳐 주민의 삶으로 돌아오는 경로가 일관됩니다.' };
}

function validateLoop() {
  const type = document.querySelector('input[name="loopType"]:checked');
  const directions = { earth: selectedDirection('earthEffectChoice'), biosphere: selectedDirection('biosphereEffectChoice'), returned: selectedDirection('returnEffectChoice') };
  state.loop = { earth: $('#earthEffectChoice').value, biosphere: $('#biosphereEffectChoice').value, returned: $('#returnEffectChoice').value, type: type ? type.value : '', reflection: $('#finalReflection').value.trim(), directions };
  const check = causalityFeedback(directions.earth, directions.biosphere, directions.returned, state.loop.type);
  $('#causalityCheck').className = `causality-check ${check.className}`;
  $('#causalityCheck').innerHTML = `<span aria-hidden="true">${check.icon}</span><div><strong>${check.title}</strong><p>${check.text}</p></div>`;
  const ready = state.loopPolicy && state.loop.earth && state.loop.biosphere && state.loop.returned && state.loop.reflection.length >= 20 && state.loop.type;
  $('#finishBtn').disabled = !ready;
  $('#loopHint').textContent = ready ? '자료에서 시작한 공진화 고리가 완성되었습니다.' : !state.loopPolicy ? '먼저 설명할 정책을 선택하세요.' : !state.loop.earth || !state.loop.biosphere || !state.loop.returned ? '지구시스템·생물권·주민 영향을 차례로 선택하세요.' : '되먹임 유형과 최종 해석을 완성하세요.';
}

function renderReport() {
  const p = state.population;
  const stableDelta = p.stable - state.baselinePopulation.stable;
  const secondaryDelta = state.baselinePopulation.secondary - p.secondary;
  const responseSummary = `${policyName(state.addedPolicy)} 적용으로 안정 정착 ${Math.abs(stableDelta).toLocaleString()}명 ${stableDelta >= 0 ? '증가' : '감소'}, 2차 이동 ${Math.abs(secondaryDelta).toLocaleString()}명 ${secondaryDelta >= 0 ? '감소' : '증가'}`;
  const needSummary = Object.entries(needNames).map(([key, label]) => `${label} ${needStatus(state.finalNeeds[key]).label}(${changeStatus(state.finalNeeds[key] - state.initialNeeds[key]).label})`).join(' · ');
  const earthSummary = Object.entries(state.scenario.earthLabels).map(([key, label]) => `${label} ${earthStatus(state.finalEarth[key]).label}(${changeStatus(state.finalEarth[key] - 100).label})`).join(' · ');
  $('#reportSheet').innerHTML = `<header class="report-header"><div><p class="eyebrow">${state.scenario.name} · 2045–2055</p><h2>공진화 정책 결정서</h2></div><div class="report-meta"><strong>${escapeHtml(state.studentId)}</strong><br>${new Date().toLocaleDateString('ko-KR')}</div></header><p class="report-model-note">수업용 단순화 모형 결과 · 실제 지역의 인구와 미래를 예측한 값이 아니라 변화 방향과 정책의 상충 관계를 해석하기 위한 자료입니다.</p>
  <section class="report-section"><h3>1. 환경 근거와 초기 전략</h3><p>${state.scenario.indicators.map((item) => `${item.label} ${item.value}`).join(' · ')}</p><div class="report-policy-list">${state.selected.map((id) => `<div class="report-policy"><strong>${policyName(id)}</strong><p>${policyDescription(id)}</p></div>`).join('')}</div><p><strong>전략:</strong> ${escapeHtml(state.strategyReason)}</p></section>
  <section class="report-section"><h3>2. 10년 후 사건과 적응</h3><div class="report-note"><strong>${state.event.title}</strong><br>${policyName(state.addedPolicy)} — ${escapeHtml(state.eventReason)}<br><b>추가 대응 비교:</b> ${responseSummary}</div></section>
  <section class="report-section"><h3>3. 최종 인구 상태</h3><div class="report-numbers report-population"><div class="report-number"><span>안정 정착</span><strong>${p.stable.toLocaleString()}명</strong></div><div class="report-number"><span>위험 노출</span><strong>${p.atRisk.toLocaleString()}명</strong></div><div class="report-number"><span>2차 이동</span><strong>${p.secondary.toLocaleString()}명</strong></div><div class="report-number"><span>정착 대기</span><strong>${p.waiting.toLocaleString()}명</strong></div></div><p><strong>주민 지원:</strong> ${needSummary}</p><p><strong>지구시스템:</strong> ${earthSummary}</p></section>
  <section class="report-section"><h3>4. 내가 만든 공진화 고리</h3><div class="report-loop">${escapeHtml($('#loopPressure').textContent)} → ${escapeHtml(state.event.change)} → <b>${policyName(state.loopPolicy)}</b> → ${escapeHtml(state.loop.earth)} → <b>${escapeHtml(state.loop.biosphere)}</b> → ${escapeHtml(state.loop.returned)}<br><b>${escapeHtml(state.loop.type)}</b></div><p><strong>예상·실제 결과와 남은 한계:</strong> ${escapeHtml(state.loop.reflection)}</p></section>`;
}

function reportText() {
  const p = state.population;
  return `[공진화 정책 결정서 · ${state.studentId}]\n※ 수업용 단순화 모형 결과이며 실제 지역의 미래 예측값이 아님\n환경: ${state.scenario.name}\n관측: ${state.scenario.indicators.map((item) => `${item.label} ${item.value}`).join(', ')}\n초기 정책: ${state.selected.map(policyName).join(', ')}\n초기 전략: ${state.strategyReason}\n10년 후 사건: ${state.event.title}\n추가 정책: ${policyName(state.addedPolicy)}\n최종 인구: 안정 ${p.stable}, 위험 노출 ${p.atRisk}, 2차 이동 ${p.secondary}, 정착 대기 ${p.waiting}\n공진화 고리: ${$('#loopPressure').textContent} → ${state.event.change} → ${policyName(state.loopPolicy)} → ${state.loop.earth} → ${state.loop.biosphere} → ${state.loop.returned}\n최종 해석: ${state.loop.reflection}`;
}

function canvasRoundedRect(ctx, x, y, width, height, radius, fill, stroke = null) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
  if (fill) { ctx.fillStyle = fill; ctx.fill(); }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 2; ctx.stroke(); }
}

function canvasTextLines(ctx, text, maxWidth) {
  const source = String(text || '').replace(/\s+/g, ' ').trim();
  if (!source) return [''];
  const lines = [];
  let line = '';
  source.split(' ').forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (ctx.measureText(candidate).width <= maxWidth) { line = candidate; return; }
    if (line) { lines.push(line); line = ''; }
    if (ctx.measureText(word).width <= maxWidth) { line = word; return; }
    let piece = '';
    [...word].forEach((character) => {
      if (ctx.measureText(piece + character).width > maxWidth && piece) { lines.push(piece); piece = character; }
      else piece += character;
    });
    line = piece;
  });
  if (line) lines.push(line);
  return lines;
}

function drawCanvasText(ctx, text, x, y, maxWidth, lineHeight, color = '#18333a') {
  ctx.fillStyle = color;
  const lines = canvasTextLines(ctx, text, maxWidth);
  lines.forEach((line, index) => ctx.fillText(line, x, y + (index * lineHeight)));
  return y + (lines.length * lineHeight);
}

function createReportImageCanvas() {
  const width = 1200;
  const margin = 74;
  const contentWidth = width - (margin * 2);
  const working = document.createElement('canvas');
  working.width = width;
  working.height = 4600;
  const ctx = working.getContext('2d');
  const fontFamily = '"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif';
  const font = (size, weight = 500) => { ctx.font = `${weight} ${size}px ${fontFamily}`; };
  const textHeight = (text, maxWidth, lineHeight) => canvasTextLines(ctx, text, maxWidth).length * lineHeight;
  const palette = { navy: '#0b343d', teal: '#128277', mint: '#dff3eb', amber: '#f2bd52', coral: '#ed785e', ink: '#18333a', muted: '#60777b', line: '#c9dad5', pale: '#f2f7f5', cream: '#fff7e3' };
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, working.width, working.height);
  ctx.textBaseline = 'top';

  const sectionTitle = (number, title, y) => {
    canvasRoundedRect(ctx, margin, y, 48, 48, 13, palette.teal);
    font(24, 900); ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.fillText(number, margin + 24, y + 9);
    ctx.textAlign = 'left'; font(31, 900); ctx.fillStyle = palette.navy; ctx.fillText(title, margin + 68, y + 5);
    return y + 70;
  };
  const labeledBox = (label, body, y, tone = 'pale') => {
    font(23, 500);
    const bodyHeight = textHeight(body, contentWidth - 54, 37);
    const height = 66 + bodyHeight;
    canvasRoundedRect(ctx, margin, y, contentWidth, height, 16, tone === 'cream' ? palette.cream : palette.pale, tone === 'cream' ? '#e5c477' : palette.line);
    font(22, 900); ctx.fillStyle = tone === 'cream' ? '#77500e' : palette.teal; ctx.fillText(label, margin + 26, y + 20);
    font(23, 500);
    drawCanvasText(ctx, body, margin + 26, y + 57, contentWidth - 54, 37, palette.ink);
    return y + height;
  };

  ctx.fillStyle = palette.navy;
  ctx.fillRect(0, 0, width, 245);
  ctx.fillStyle = palette.mint;
  font(20, 900); ctx.fillText('CO:EVOLVE 2055 · 개인 탐구 결과', margin, 40);
  font(52, 900); ctx.fillStyle = '#ffffff'; ctx.fillText('공진화 정책 결정서', margin, 82);
  font(25, 600); ctx.fillStyle = '#c9e0da'; ctx.fillText(`${state.scenario.name} · 2045–2055`, margin, 158);
  ctx.textAlign = 'right';
  font(25, 900); ctx.fillStyle = '#ffffff'; ctx.fillText(state.studentId, width - margin, 53);
  font(19, 500); ctx.fillStyle = '#c9e0da'; ctx.fillText(new Date().toLocaleDateString('ko-KR'), width - margin, 91);
  ctx.textAlign = 'left';
  let y = 278;
  font(19, 800);
  y = drawCanvasText(ctx, '수업용 단순화 모형 결과 · 실제 지역의 미래 예측값이 아니라 변화 방향과 정책의 상충 관계를 해석하기 위한 자료입니다.', margin, y, contentWidth, 31, palette.muted) + 28;

  y = sectionTitle('1', '환경 근거와 초기 전략', y);
  font(23, 700);
  y = drawCanvasText(ctx, state.scenario.indicators.map((item) => `${item.label} ${item.value}`).join('  ·  '), margin, y, contentWidth, 38, palette.ink) + 24;
  const gap = 16;
  const cardWidth = (contentWidth - (gap * 2)) / 3;
  const policyCards = state.selected.map((id) => {
    const title = policyName(id);
    const body = policyDescription(id);
    font(20, 500);
    return { title, body, height: 76 + textHeight(body, cardWidth - 36, 30) };
  });
  const policyHeight = Math.max(...policyCards.map((item) => item.height));
  policyCards.forEach((item, index) => {
    const x = margin + (index * (cardWidth + gap));
    canvasRoundedRect(ctx, x, y, cardWidth, policyHeight, 14, palette.pale, palette.line);
    font(22, 900); ctx.fillStyle = palette.navy; ctx.fillText(item.title, x + 18, y + 18);
    font(20, 500); drawCanvasText(ctx, item.body, x + 18, y + 56, cardWidth - 36, 30, palette.muted);
  });
  y += policyHeight + 22;
  y = labeledBox('세 정책을 함께 선택한 이유', state.strategyReason, y) + 42;

  y = sectionTitle('2', '10년 후 사건과 추가 대응', y);
  const eventText = `${state.event.title} · ${policyName(state.addedPolicy)} — ${state.eventReason}`;
  y = labeledBox('2055년 사건과 나의 대응', eventText, y, 'cream') + 18;
  const stableDelta = state.population.stable - state.baselinePopulation.stable;
  const secondaryDelta = state.baselinePopulation.secondary - state.population.secondary;
  font(22, 700);
  y = drawCanvasText(ctx, `추가 대응 비교 · 안정 정착 ${Math.abs(stableDelta).toLocaleString()}명 ${stableDelta >= 0 ? '증가' : '감소'} · 2차 이동 ${Math.abs(secondaryDelta).toLocaleString()}명 ${secondaryDelta >= 0 ? '감소' : '증가'}`, margin, y, contentWidth, 36, palette.coral) + 42;

  y = sectionTitle('3', '최종 주민·지구시스템 결과', y);
  const populationItems = [
    ['안정 정착', state.population.stable], ['위험 노출', state.population.atRisk],
    ['2차 이동', state.population.secondary], ['정착 대기', state.population.waiting]
  ];
  const numberGap = 14;
  const numberWidth = (contentWidth - (numberGap * 3)) / 4;
  populationItems.forEach(([label, value], index) => {
    const x = margin + (index * (numberWidth + numberGap));
    canvasRoundedRect(ctx, x, y, numberWidth, 112, 14, '#ffffff', palette.line);
    font(18, 700); ctx.fillStyle = palette.muted; ctx.fillText(label, x + 18, y + 17);
    font(32, 900); ctx.fillStyle = palette.navy; ctx.fillText(`${Number(value).toLocaleString()}명`, x + 18, y + 53);
  });
  y += 138;
  const needSummary = Object.entries(needNames).map(([key, label]) => `${label} ${needStatus(state.finalNeeds[key]).label}(${changeStatus(state.finalNeeds[key] - state.initialNeeds[key]).label})`).join(' · ');
  const earthSummary = Object.entries(state.scenario.earthLabels).map(([key, label]) => `${label} ${earthStatus(state.finalEarth[key]).label}(${changeStatus(state.finalEarth[key] - 100).label})`).join(' · ');
  y = labeledBox('주민 지원 상태', needSummary, y) + 14;
  y = labeledBox('지구시스템 상태', earthSummary, y) + 42;

  y = sectionTitle('4', '내가 만든 공진화 고리', y);
  const loopText = `${$('#loopPressure').textContent} → ${state.event.change} → ${policyName(state.loopPolicy)} → ${state.loop.earth} → ${state.loop.biosphere} → ${state.loop.returned}`;
  font(23, 700);
  const loopHeight = 80 + textHeight(loopText, contentWidth - 56, 39);
  canvasRoundedRect(ctx, margin, y, contentWidth, loopHeight, 17, palette.navy);
  font(20, 900); ctx.fillStyle = palette.mint; ctx.fillText(state.loop.type, margin + 28, y + 22);
  font(23, 700); drawCanvasText(ctx, loopText, margin + 28, y + 61, contentWidth - 56, 39, '#ffffff');
  y += loopHeight + 18;
  y = labeledBox('예상·실제 결과와 남아 있는 한계', state.loop.reflection, y, 'cream') + 42;

  ctx.strokeStyle = palette.line; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(width - margin, y); ctx.stroke();
  y += 24;
  font(18, 700); ctx.fillStyle = palette.muted; ctx.fillText('기후이동 공진화 탐구 · CO:EVOLVE 2055', margin, y);
  ctx.textAlign = 'right'; ctx.fillText(`전체 주민 ${Object.values(state.population).reduce((sum, value) => sum + value, 0).toLocaleString()}명`, width - margin, y); ctx.textAlign = 'left';
  const finalHeight = Math.ceil(y + 72);
  const output = document.createElement('canvas');
  output.width = width;
  output.height = finalHeight;
  const outputContext = output.getContext('2d');
  outputContext.fillStyle = '#ffffff'; outputContext.fillRect(0, 0, width, finalHeight);
  outputContext.drawImage(working, 0, 0, width, finalHeight, 0, 0, width, finalHeight);
  return output;
}

function reportImageFilename() {
  const safeId = state.studentId.replace(/[\\/:*?"<>|]/g, '_').slice(0, 30) || '학생';
  return `공진화_정책결정서_${safeId}.jpg`;
}

function canvasJpegBlob(canvas) {
  return new Promise((resolve, reject) => canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error('JPG 생성 실패')), 'image/jpeg', 0.94));
}

function downloadReportBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

async function saveReportImage() {
  const button = $('#imageSaveBtn');
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = 'JPG 만드는 중…';
  try {
    if (document.fonts?.ready) await document.fonts.ready;
    const blob = await canvasJpegBlob(createReportImageCanvas());
    const filename = reportImageFilename();
    const mobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.matchMedia('(pointer: coarse)').matches;
    const file = typeof File === 'function' ? new File([blob], filename, { type: 'image/jpeg' }) : null;
    if (mobileDevice && file && navigator.share && navigator.canShare?.({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: '공진화 정책 결정서', text: `${state.studentId} 공진화 탐구 결과` });
        showToast('공유 창으로 JPG 결과지를 보냈습니다.');
      } catch (error) {
        if (error.name === 'AbortError') { showToast('이미지 공유를 취소했습니다.'); return; }
        downloadReportBlob(blob, filename);
        showToast('공유 대신 JPG 파일로 저장했습니다.');
      }
    } else {
      downloadReportBlob(blob, filename);
      showToast('JPG 결과지를 저장했습니다.');
    }
  } catch (error) {
    console.error(error);
    showToast('JPG 생성에 실패했습니다. PDF 저장을 이용해 주세요.');
  } finally {
    button.disabled = false;
    button.textContent = originalText;
  }
}

function clearLoopState() {
  state.loopPolicy = null;
  state.loop = {};
  $('#earthEffectChoice').innerHTML = '<option value="">변화를 선택하세요</option>';
  $('#biosphereEffectChoice').innerHTML = '<option value="">생물권 반응을 선택하세요</option>';
  $('#returnEffectChoice').innerHTML = '<option value="">영향을 선택하세요</option>';
  $('#finalReflection').value = '';
  document.querySelectorAll('input[name="loopType"]').forEach((radio) => { radio.checked = false; });
}

function clearAfterInitialStrategy() {
  state.initialNeeds = {};
  state.initialSettled = 0;
  state.initialFit = 0;
  state.event = null;
  state.eventScore = 0;
  state.addedPolicy = null;
  state.eventReason = '';
  state.baselineNeeds = {};
  state.baselineEarth = {};
  state.baselinePopulation = {};
  state.finalNeeds = {};
  state.finalEarth = {};
  state.population = {};
  $('#eventReason').value = '';
  $('#addedCount').textContent = '0';
  clearLoopState();
}

function backToIntro() {
  resetRunState();
  showScreen('introScreen', '준비');
}

function backToEnvironment() {
  showScreen('environmentScreen', '1 / 5 · 환경 관측');
}

function backToPolicy() {
  clearAfterInitialStrategy();
  renderInitialPolicyWorkspace();
  showScreen('policyScreen', '2 / 5 · 정착 전략');
  showToast('초기 전략을 바꾸면 2055년 사건과 결과가 다시 계산됩니다.');
}

function backToEvent() {
  if (state.addedPolicy) activeEventFilter = eventPolicyGroup(getPolicy(state.addedPolicy));
  renderEvent();
  $('#eventReason').value = state.eventReason;
  $('#addedCount').textContent = state.addedPolicy ? '1' : '0';
  validateEvent();
  showScreen('eventScreen', '3 / 5 · 2055년 사건');
}

function backToOutcome() {
  showScreen('outcomeScreen', '4 / 5 · 결과 비교');
}

function backToLoop() {
  renderLoop();
  showScreen('loopScreen', '5 / 5 · 공진화 설명');
}

function selectedClassScenario() {
  return scenarios.find((scenario) => scenario.id === $('#classScenarioSelect').value) || null;
}

function updateClassroomSetting() {
  const scenario = selectedClassScenario();
  $('#copyClassLinkBtn').disabled = !scenario;
  $('#classroomSettings').classList.toggle('class-mode', Boolean(scenario));
  $('#classModeStatus').textContent = scenario
    ? `학급 고정: ${scenario.name} · 학생 번호와 관계없이 같은 환경이 배정되고 주민 조건은 학생별로 달라집니다.`
    : '환경을 고르면 모든 학생에게 같은 환경을 배정하는 링크를 만들 수 있습니다.';
}

async function copyClassLink() {
  const scenario = selectedClassScenario();
  if (!scenario) return;
  const url = new URL(window.location.href);
  url.searchParams.set('scenario', scenario.id);
  url.hash = '';
  try { await navigator.clipboard.writeText(url.toString()); }
  catch {
    const area = document.createElement('textarea');
    area.value = url.toString();
    document.body.append(area);
    area.select();
    document.execCommand('copy');
    area.remove();
  }
  $('#copyClassLinkBtn').textContent = '링크 복사됨';
  setTimeout(() => { $('#copyClassLinkBtn').textContent = '학급 링크 복사'; }, 1800);
}

function initializeClassroomSetting() {
  const requested = new URLSearchParams(window.location.search).get('scenario');
  if (scenarios.some((scenario) => scenario.id === requested)) {
    $('#classScenarioSelect').value = requested;
    $('#classroomSettings').open = true;
  }
  updateClassroomSetting();
}

async function copyReport() {
  try { await navigator.clipboard.writeText(reportText()); } catch { const area = document.createElement('textarea'); area.value = reportText(); document.body.append(area); area.select(); document.execCommand('copy'); area.remove(); }
  $('#copyBtn').textContent = '복사 완료'; setTimeout(() => { $('#copyBtn').textContent = '내용 복사'; }, 1800);
}

$('#startBtn').addEventListener('click', begin);
$('#studentId').addEventListener('keydown', (event) => { if (event.key === 'Enter') begin(); });
$('#confirmEnvironmentBtn').addEventListener('click', confirmEnvironment);
$('#strategyReason').addEventListener('input', validateStrategy);
$('#confirmPolicyBtn').addEventListener('click', () => { prepareInitialSettlement(); renderEvent(); showScreen('eventScreen', '3 / 5 · 2055년 사건'); });
$('#eventReason').addEventListener('input', validateEvent);
$('#confirmEventBtn').addEventListener('click', () => { clearLoopState(); renderOutcome(); showScreen('outcomeScreen', '4 / 5 · 결과 비교'); });
$('#goToLoopBtn').addEventListener('click', () => { renderLoop(); showScreen('loopScreen', '5 / 5 · 공진화 설명'); });
['earthEffectChoice', 'biosphereEffectChoice', 'returnEffectChoice'].forEach((id) => $(`#${id}`).addEventListener('change', validateLoop));
$('#finalReflection').addEventListener('input', validateLoop);
document.querySelectorAll('input[name="loopType"]').forEach((radio) => radio.addEventListener('change', validateLoop));
$('#finishBtn').addEventListener('click', () => { validateLoop(); renderReport(); showScreen('reportScreen', '완료 · 개인 결과지'); });
$('#printBtn').addEventListener('click', () => window.print());
$('#imageSaveBtn').addEventListener('click', saveReportImage);
$('#copyBtn').addEventListener('click', copyReport);
$('#restartBtn').addEventListener('click', () => window.location.reload());
$('#backToIntroBtn').addEventListener('click', backToIntro);
$('#backToEnvironmentBtn').addEventListener('click', backToEnvironment);
$('#backToPolicyBtn').addEventListener('click', backToPolicy);
$('#backToEventBtn').addEventListener('click', backToEvent);
$('#backToOutcomeBtn').addEventListener('click', backToOutcome);
$('#backToLoopBtn').addEventListener('click', backToLoop);
$('#classScenarioSelect').addEventListener('change', updateClassroomSetting);
$('#copyClassLinkBtn').addEventListener('click', copyClassLink);
$('#decisionToggle').addEventListener('click', () => setDrawer(!$('#decisionDrawer').classList.contains('open')));
$('#decisionClose').addEventListener('click', () => setDrawer(false));
$('#drawerBackdrop').addEventListener('click', () => setDrawer(false));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setDrawer(false); });
renderProgress(0);
initializeClassroomSetting();
