import { useState, type ReactNode } from 'react';

export type AccordionItem = {
  id: string;
  title: string;
  content: ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
};

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId ?? items[0]?.id ?? null,
  );

  return (
    <div className="accordion">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `accordion-panel-${item.id}`;
        const headerId = `accordion-header-${item.id}`;

        return (
          <div key={item.id} className={`accordion__item${isOpen ? ' is-open' : ''}`}>
            <h4 className="accordion__heading">
              <button
                type="button"
                id={headerId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenId((current) => (current === item.id ? null : item.id))
                }
              >
                {item.title}
                <span className="accordion__chevron" aria-hidden="true" />
              </button>
            </h4>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="accordion__panel"
              hidden={!isOpen}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
