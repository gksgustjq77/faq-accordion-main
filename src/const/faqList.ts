export type FAQItem = {
  id: number;
  title: string;
  content: string;
  isOpen: boolean; // true면 "-" 아이콘, false면 "+" 아이콘
};

export const faqList: FAQItem[] = [
  {
    id: 1,
    title: "React란 무엇인가요?",
    content: "React는 UI를 만들기 위한 JavaScript 라이브러리입니다.",
    isOpen: false,
  },
  {
    id: 2,
    title: "useState는 어떤 역할을 하나요?",
    content: "컴포넌트의 상태를 관리할 수 있게 해주는 Hook입니다.",
    isOpen: false,
  },
  {
    id: 3,
    title: "Tailwind CSS는 어떻게 사용하나요?",
    content:
      "클래스를 통해 빠르게 스타일링할 수 있는 유틸리티 퍼스트 CSS 프레임워크입니다.",
    isOpen: false,
  },
  {
    id: 4,
    title: "Vite는 무엇인가요?",
    content: "Vite는 빠른 프론트엔드 개발을 위한 빌드 도구입니다.",
    isOpen: false,
  },
];
