const departments = [
  {
    id: "math",
    name: "수학과",
    icon: "∑",
    tagline: "세상을 설명하는 가장 정교한 언어",
    summary:
      "수학과는 논리적 사고와 추상화 능력을 바탕으로 자연현상, 데이터, 금융, 인공지능의 구조를 이해하는 힘을 기릅니다.",
    focus: ["해석학", "대수학", "기하학", "확률·통계", "수리모델링"],
    courses: ["미적분학", "선형대수", "해석학", "현대대수학", "위상수학", "확률론", "수치해석"],
    careers: ["데이터 사이언스", "금융·보험", "AI 연구", "교직", "대학원 연구"],
    pitch: "문제를 끝까지 파고들고, 복잡한 현상을 깔끔한 원리로 설명하는 일을 좋아한다면 잘 맞아요."
  },
  {
    id: "physics",
    name: "물리학과",
    icon: "⚛",
    tagline: "우주의 규칙부터 첨단기술의 원리까지",
    summary:
      "물리학과는 물질, 에너지, 빛, 양자현상처럼 자연을 움직이는 기본 법칙을 배우고 실험과 이론으로 검증합니다.",
    focus: ["역학", "전자기학", "양자물리", "고체물리", "실험물리"],
    courses: ["일반물리학", "현대물리학", "전자기학", "양자역학", "열·통계물리", "물리실험", "고체물리"],
    careers: ["반도체", "디스플레이", "연구소", "우주·에너지", "과학교육"],
    pitch: "왜 그런 일이 일어나는지 원인을 따지고, 실험으로 확인하는 과정이 즐겁다면 추천해요."
  },
  {
    id: "chemistry",
    name: "화학과",
    icon: "⚗",
    tagline: "분자 수준에서 새로운 물질을 설계하다",
    summary:
      "화학과는 원자와 분자의 성질, 반응, 분석 방법을 배우며 의약, 소재, 환경, 에너지 분야의 기반 지식을 다집니다.",
    focus: ["유기화학", "무기화학", "물리화학", "분석화학", "생화학"],
    courses: ["일반화학", "유기화학", "분석화학", "물리화학", "무기화학", "화학실험", "생화학"],
    careers: ["제약·바이오", "소재 개발", "배터리", "환경 분석", "품질관리"],
    pitch: "실험실에서 관찰하고, 반응을 설계하고, 눈에 보이지 않는 분자의 변화를 상상하는 학생에게 좋아요."
  },
  {
    id: "biology",
    name: "생물학과",
    icon: "🧬",
    tagline: "생명의 원리를 탐구하는 기초과학",
    summary:
      "생물학과는 세포, 유전, 생태, 진화, 생명정보를 폭넓게 배우며 바이오 시대에 필요한 탐구 역량을 키웁니다.",
    focus: ["세포생물학", "유전학", "분자생물학", "생태학", "생명정보"],
    courses: ["일반생물학", "세포생물학", "유전학", "분자생물학", "생화학", "생태학", "발생생물학"],
    careers: ["바이오 연구", "제약", "환경·생태", "보건 분야", "생명정보 분석"],
    pitch: "생명체가 어떻게 작동하고 환경과 상호작용하는지 궁금하다면 흥미롭게 배울 수 있어요."
  },
  {
    id: "geography",
    name: "지리학과",
    icon: "🌏",
    tagline: "공간 데이터로 도시와 환경을 읽다",
    summary:
      "지리학과는 자연환경과 인간 활동을 공간적으로 분석하며 기후·환경, 도시관리, 시공간 빅데이터 역량을 기릅니다.",
    focus: ["기후·환경", "도시관리", "GIS", "공간빅데이터", "지역분석"],
    courses: ["자연지리학개론", "인문지리학개론", "기후학", "지리정보학개론", "도시지리학", "원격탐사", "공간통계"],
    careers: ["GIS 분석", "도시계획", "환경 컨설팅", "공공기관", "공간데이터 기획"],
    pitch: "지도, 도시, 기후변화, 데이터 시각화에 관심이 있다면 현실 문제를 다루는 재미를 느낄 수 있어요."
  },
  {
    id: "display",
    name: "미래정보디스플레이학부",
    icon: "📱",
    tagline: "차세대 화면과 AR/VR 기술을 만드는 융합전공",
    summary:
      "미래정보디스플레이학부는 물리·화학·수학 기초와 전자공학·재료공학·화학공학을 융합해 디스플레이 전문 인력을 양성합니다.",
    focus: ["OLED·LED", "TFT 소자", "반도체", "AR/VR 광학", "디스플레이 시스템"],
    courses: ["반도체개론", "디스플레이시스템", "디스플레이기술", "디스플레이광학", "반도체소자", "TFT공학", "가상증강현실시스템"],
    careers: ["디스플레이 R&D", "반도체", "AR/VR", "소재·소자", "전자부품 산업"],
    pitch: "스마트폰·TV·XR 기기의 화면이 어떻게 만들어지는지 궁금하고 공학 응용까지 배우고 싶다면 잘 맞아요."
  }
];

const departmentList = document.querySelector("#departmentList");
const detailCard = document.querySelector("#detailCard");
const randomPick = document.querySelector("#randomPick");

function renderList(activeId) {
  departmentList.innerHTML = departments
    .map(
      (department) => `
        <button class="department-button ${department.id === activeId ? "is-active" : ""}" type="button" data-id="${department.id}">
          <strong>${department.icon} ${department.name}</strong>
          <span>${department.tagline}</span>
        </button>
      `
    )
    .join("");
}

function renderDetail(department) {
  detailCard.innerHTML = `
    <div class="detail-top">
      <div>
        <p class="section-label">${department.tagline}</p>
        <h3>${department.name}</h3>
        <p class="summary">${department.summary}</p>
      </div>
      <div class="dept-icon" aria-hidden="true">${department.icon}</div>
    </div>

    <ul class="tag-list" aria-label="핵심 분야">
      ${department.focus.map((item) => `<li>${item}</li>`).join("")}
    </ul>

    <div class="detail-grid">
      <section class="info-box full">
        <h4>대표 커리큘럼</h4>
        <ul class="course-list">
          ${department.courses.map((course) => `<li>${course}</li>`).join("")}
        </ul>
      </section>
      <section class="info-box">
        <h4>진로 키워드</h4>
        <ul class="career-list">
          ${department.careers.map((career) => `<li>${career}</li>`).join("")}
        </ul>
      </section>
      <section class="info-box">
        <h4>후배에게 한마디</h4>
        <p class="summary">${department.pitch}</p>
      </section>
    </div>
  `;
}

function selectDepartment(id) {
  const selected = departments.find((department) => department.id === id) ?? departments[0];
  renderList(selected.id);
  renderDetail(selected);
}

departmentList.addEventListener("click", (event) => {
  const button = event.target.closest(".department-button");
  if (!button) return;
  selectDepartment(button.dataset.id);
});

randomPick.addEventListener("click", () => {
  const selected = departments[Math.floor(Math.random() * departments.length)];
  selectDepartment(selected.id);
  document.querySelector("#departments").scrollIntoView({ behavior: "smooth", block: "start" });
});

selectDepartment(departments[0].id);
