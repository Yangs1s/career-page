export const profile = {
  name: '양성진',
  title: 'Frontend Developer',
  email: 'sung5355@gmail.com',
  github: 'github.com/yangs1s',
  linkedin: 'linkedin.com/in/yangs1s',
  bio: '저는 팀의 생산성을 높이는 것을 좋아하는 개발자입니다. 팀원간의 소통과 협업을 중요하게 생각합니다.',
  image: '/career-page/my-profile.jpeg' // GitHub Pages base URL 포함
}

export const experience = [
  {
    company: '주식회사 지유',
    position: 'Frontend Developer',
    period: '2024.10 - 2025.06',
    description: '프로젝트 참여 및 프론트엔드 개발, 유지보수'
  },
  {
    company: '아이덴잇',
    position: 'Frontend Developer',
    period: '2023.06 - 2024.10',
    description: '프로젝트 참여 및 프론트엔드 개발, 유지보수'
  }
]

export const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'Vue.js', level: 60 },
  { name: 'React', level: 80 },
  { name: 'TypeScript', level: 85 }
]

export const projects = [
  {
    id: 'tms',
    title: '모벤티스 TMS',
    subtitle: '운송/배 배송관리 시스템관련 ERP페이지',
    period: '2024.11 - 2025.06',
    tech: ['TypeScript', 'React.js', 'Jotai', 'tanstack-table'],
    team: {
      frontend: 1,
      backend: 1,
      full: 1
    },
    image: null,
    responsibilities: [
      {
        title: '주요업무',
        items: [
          '전국 운송업체의 배 송관 리 시스템 관리자 페이 지를 개발했습니다. 자사 센터 , 화주사 , 배송기사, 배송지를 관리하 는 시스템으로, 각 도메인별 등록/수정/상세 조회 기능을 제 공합니다.',
          '주로 담당 한 페이 지들 이 등록폼 관련 페이 지가 많다보 니, 반복적인 코드 를 작성하기보다 는 모듈화를 통해 재 사용성을 높이는 것에 중점을 두고 작업했습니다.'
        ]
      },
      {
        title: '배송기사 지정 기능 (지도)',
        items: [
          '지도 이동 시 150~1000개 이상의 마 커를 실시간 업데 이트 → 버벅거림 및 멈춤 현상발생',
          '요구사항을 재검토 후 기사별 할당 배 송지 표 시만 필요함을 확인. 진입 시 대량 데이터 호출 제거, 기사선택 시에만 마커 표시',
          '지도 이동 시 성능 저하 문제 해소, UX 개선'
        ]
      },
      {
        title: '변경 후 컴포넌트 및 훅 개발',
        items: [
          '대부분의 페이지에서 폼이 반복 구현, 모드(추가/수정/삭제)에 따라 별도로 개발 필요 → 코드 중복과 개발 효율 저하',
          '10여 가지 필드 타입(텍스트, 숫자, 파일, 주소검색 등)을 지원하는 범용 폼 컴포넌트 및 커스텀 훅을 개발, 필드 객체 기반으로 자동 렌더딩하도록 개발, 기획에 추가될시 필드도 점진적으로 확장할 수 있게 설계',
          '상세/수정/추가 페이지 개발 속도가 크게 단축, 필드 추가·수정 시 재사용성 향상'
        ]
      },
      {
        title: '테이블 액셀 다운로드 컴포넌트',
        items: [
          '선택된 행은 다운로드 기능하나, 전체 데이터 다운로드 시 페이지 단위 조회 제한 존재',
          '조회 API 요청 시 size를 최대값으로 설정해 전체 데이터 호출, 선택/전체 다운로드 기능을 분리하고, 전체 다운로드 시 모달을 통해 사용자 확인 절차 추가',
          '선택/전체 다운로드 모두 지원, 대량 데이터 다운로드 가능하도록 개발'
        ]
      },
      {
        title: '동적 데이블 필터링',
        items: [
          '페이지마다 다른 필터 조합이 필요해 개발 구현 시 코드 중복 발생',
          '필터 정의를 객체 기입으로 처리하고, 타입별 동적 필터 UI 컴포넌트 구현',
          '페이지별 요구사항에 맞는 필터를 손쉽게 적용, 개발 속도 및 유지보수성 향상'
        ]
      }
    ],
    links: {
      github: null,
      demo: null,
      website: null
    }
  },
  {
    id: 'eatda',
    title: '식자재를 eat-da',
    subtitle: '식자재 유통업자와 자영업자간의 구매판매를 연결해주는 플랫폼 서비스',
    period: '2024.06 - 2024.10',
    tech: ['TypeScript', 'jotai', 'React.js', 'sendBird', 'rechart'],
    team: {
      frontend: 1,
      backend: 1,
      full: 1
    },
    image: null,
    responsibilities: [
      {
        title: '주요업무',
        items: [
          '식자재 유통업자와 자영업자간의 견적 소통 창구인 채팅 및 견적기능 구현과 관리자 페이지에서 재고관리, 매출,매입 관련 관리 테이블을 개발을 주로 담당 했습니다.'
        ]
      },
      {
        title: '채팅 및 견적 기능 (Sendbird SDK)',
        items: [
          '유통업자 ↔ 자영업자 간 소통에 단순 채팅만으로는 견적·가격 협의 기능 부족',
          'Sendbird SDK 기반 채팅 구현 및 견적 기능 확장(가격 제의/수락/일정 예시자)',
          '거래 협의 과정이 채팅 내에서 원활히 진행 가능, 사용자 만족도 향상'
        ]
      },
      {
        title: '관리자 데이터 테이블',
        items: [
          '엑셀 유사 인터페이스로 판매/구매 관리 기능 구현',
          '창고 배정, 할인율·수량 입력 시 자동 계산 기능 제공',
          '품목 검색 및 결과를 테이블 셀에 직접 삽입할 수 있는 기능'
        ]
      },
      {
        title: '사용자 랜딩 페이지',
        items: [
          '클라이언트 디자인 요구사항에 맞춘 UI 개발',
          '모바일 반응형 지원, Swiper.js 활용한 섹션 전환 애니메이션 구현'
        ]
      },
      {
        title: '사용자 마이페이지',
        items: [
          '주문 목록, 결제 기간, 주문 페이지 등 전체 마이페이지 기능 구현',
          '주문 목록 페이지에서 "중첩 테이블" UI 요구 → 제한된 기간/인원으로 구현 난항 발생',
          '기획자,풀스텍 개발자와 협의에 모달 기반 UI로 대체',
          '제한된 리소스 내에서 효율적 UI 제공 및 일정 준수'
        ]
      }
    ],
    links: {
      github: null,
      demo: null,
      website: null
    }
  },
  {
    id: 'shop',
    title: '대한보건 산업협회',
    subtitle: '사내 유니폼 및 보건 용품 샵',
    period: '2023.11 - 2024.02',
    tech: ['react', 'Typescript','tanstack-table','react-hook-form','jotai'],
    image: null,
    team: {
      frontend: 1,
      backend: 2
    },
    responsibilities: [
      {
        title: '주요업무',
        items: [
          '사내 유니폼 및 보건 용품 샵 페이지를 개발했습니다. 또한 관리자 페이지에서 유니폼 및 보건 용품 관리, 주문, 배송 관리 기능을 구현했습니다.'
        ]
      },
      {
        title: '관리자 페이지',
        items: ['Tanstack Table을 활용해 커스텀 테이블 컴포넌트 개발 → 관리 탭마다 요구되는 다양한 기능 통합',
          '관리자 전반 페이지 개발 담당 (로그인, 주문 관리, 상품 관리, 상품 카 테고 리 관리, 직원 관리 등)']
      },
      {
        title: '유저 페이지',
        items: [
          '구매 페이지 상품 검색 구현',
          '장바구니 기능 구현(상품 수량 조절,장바구니 담기,삭제,유효성 관리)',
        ]
      },
      {
        title:'상품 옵션 선택 및 주문 기능 개발',
        items: [
          '기존 담당자 퇴사로 미구현된 기능을 래퍼런스(네이버 쇼핑)를 참고해 신규 개발',
          '커스텀 훅 기반 옵션 선택/품절 상태 계산 로직 구현',
          '실시간 품절 상태 반영 및 재고 수량 제한 처리',
          '장바구니 및 주문 프로세스와 연동'
        ]
      },
     
    ],
    links: {
      github: null,
      demo: null,
      website: null
    }
  }
]

