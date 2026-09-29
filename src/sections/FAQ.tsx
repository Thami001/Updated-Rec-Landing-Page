
import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "../components/ui/accordion"
import {FAQItems} from "../constants";



const FAQ = () => {
    return (
      <section id={"FAQ"} className={"relative flex-center section-padding"}>
          <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/3 -z-0 size-72 -translate-x-1/2 rounded-full bg-brand-leaf/15 blur-[120px] md:size-[28rem]"
          />

          <div className="relative z-10 w-full max-w-6xl px-5 md:px-10">
              <div className="mx-auto max-w-3xl text-center">
                  <h3 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                      Frequently Asked Questions
                  </h3>
                  <h4 className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white-50 md:text-lg">
                      Can&apos;t find the answer you&apos;re looking for? Here is how we can help
                  </h4>
              </div>

              <div className="not-prose mx-auto mt-10 flex max-w-4xl flex-col gap-3 md:mt-14">
                  {FAQItems.map((item, index) => (
                      <Accordion
                          key={index}
                          //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-expect-error
                          type="single"
                          collapsible
                          className="rounded-2xl border border-black-50 bg-black-100/90 px-5 shadow-[0_14px_45px_rgba(2,10,4,0.28)] transition-colors duration-300 hover:border-brand-lime/50 md:px-7"
                      >
                          <AccordionItem value={item.question} className="border-0">
                              <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-white hover:no-underline md:py-6 md:text-lg [&_[data-slot=accordion-trigger-icon]]:size-5 [&_[data-slot=accordion-trigger-icon]]:text-brand-lime">
                                  <span className="flex min-w-0 items-start gap-4">
                                      <span
                                          aria-hidden="true"
                                          className="mt-1 text-xs font-bold tracking-[0.18em] text-brand-lime"
                                      >
                                          {String(index + 1).padStart(2, "0")}
                                      </span>
                                      <span>{item.question}</span>
                                  </span>
                              </AccordionTrigger>
                              <AccordionContent className="border-t border-black-50 pb-5 pt-4 text-base leading-7 text-white-50 md:ml-10 md:pb-6 md:pr-12">
                                  {item.answer}
                                  {item.link && (
                                      <a
                                          href={item.link}
                                          className="mt-4 flex w-fit items-center font-medium text-brand-sun opacity-90 transition-all duration-300 hover:translate-x-1 hover:text-brand-orange hover:opacity-100 !no-underline"
                                      >
                                      </a>
                                  )}
                              </AccordionContent>
                          </AccordionItem>
                      </Accordion>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default FAQ;
