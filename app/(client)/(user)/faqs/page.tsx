import Container from "@/components/Container";
import Title from "@/components/Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqsData } from "@/constants";
import React from "react";

const FaqsPage = () => {
  return (
    <Container className="max-w-4xl sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-xl shadow-xl">
      <Title className="text-4xl font-extrabold text-darkColor text-center mb-10">
        Frequently Asked Questions
      </Title>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-4"
        defaultValue="item-0"
      >
        {faqsData?.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="group rounded-xl border border-gray-200 bg-white shadow-md"
          >
            <AccordionTrigger className="text-left text-lg font-semibold text-darkColor/80 group-hover:text-darkColor transition-all px-6 py-4 cursor-pointer hover:bg-gray-100 rounded-t-xl">
              {faq?.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-600 rounded-b-xl bg-gray-50">
              {faq?.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default FaqsPage;
