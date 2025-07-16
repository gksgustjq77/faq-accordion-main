export type FAQItem = {
  id: number;
  title: string;
  content: string;
  isOpen: boolean;
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
  {
    id: 5,
    title: "TypeScript의 장점은 무엇인가요?",
    content:
      "정적 타입을 통해 코드의 안정성과 가독성을 높여주며, 개발 시 오류를 미리 방지할 수 있습니다.",
    isOpen: false,
  },
  {
    id: 6,
    title: "컴포넌트 재사용이란 무엇인가요?",
    content:
      "여러 곳에서 동일한 컴포넌트를 재사용하여 코드 중복을 줄이고 유지보수를 쉽게 하는 기법입니다.",
    isOpen: false,
  },
];
