import { useState } from "react";
import Faq from "../components/Faq";
import Title from "../components/Title";
import { faqList, type FAQItem } from "../const/faqList";

const Main: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>(faqList);

  const iconClickHandler = (id: number) => {
    setFaqs((prev) =>
      prev.map((e) => (e.id === id ? { ...e, isOpen: !e.isOpen } : e)),
    );
  };
  return (
    <>
      <div className="flex max-h-[1200px] select-text flex-col gap-8 overflow-auto rounded-[12px] bg-white p-[40px] shadow-md md:min-w-[700px] md:gap-12 [&>*]:select-none">
        <Title></Title>
        <div className="flex flex-col gap-6">
          {faqs.map((e) => {
            return <Faq faqProps={e} onClick={iconClickHandler}></Faq>;
          })}
        </div>
      </div>
    </>
  );
};

export default Main;
