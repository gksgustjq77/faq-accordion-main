import type { FAQItem } from "../const/faqList";

interface FaqProps {
  faqProps: FAQItem;
  onClick: (id: number) => void;
}

const Faq: React.FC<FaqProps> = ({ faqProps, onClick }) => {
  return (
    <>
      <div
        className="group flex cursor-pointer flex-col gap-6 border-b border-b-[#c8c8c8] pb-6 last:border-b-0"
        onClick={() => onClick(faqProps.id)}
      >
        <div className="flex items-center justify-between">
          <span className="group-hover:text-purple-1000 text-base font-semibold text-purple-950 md:text-xl">
            {faqProps.title}
          </span>
          <img
            src={
              faqProps.isOpen
                ? "/images/icon-minus.svg"
                : "/images/icon-plus.svg"
            }
            className="ml-[5px] h-[30px] w-[30px] md:h-[30px] md:w-[30px]"
          />
        </div>
        {faqProps.isOpen && (
          <div className="text-left">
            <span className="text-sm font-semibold text-purple-600 md:text-base">
              {faqProps.content}
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default Faq;
