/* eslint-disable import/no-extraneous-dependencies */
// /* eslint-disable import/no-extraneous-dependencies */
// import { useState } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import cn from 'classnames';
// import style from './filterSection.module.scss';

// type Props = {
//   title: string;
//   children: React.ReactNode;
//   defaultOpen?: boolean;
// };

// export const FilterSection: React.FC<Props> = ({
//   title,
//   children,
//   defaultOpen = false,
// }) => {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <div className={cn(style.section, { [style.open]: isOpen })}>
//       <button
//         type="button"
//         className={style.section__header}
//         onClick={() => setIsOpen(prev => !prev)}
//       >
//         <span className={style.section__title}>{title}</span>
//         {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
//       </button>

//       {isOpen && <div className={style.section__content}>{children}</div>}
//     </div>
//   );
// };

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import cn from 'classnames';
import style from './filterSection.module.scss';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const FilterSection = ({
  title,
  children,
  defaultOpen = false,
}: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={style.section}>
      <button
        className={style.section__header}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className={style.section__title}>{title}</span>
        <ChevronDown
          className={cn(style.section__icon, {
            [style.section__icon_open]: isOpen,
          })}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={style.section__content}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className={style.section__inner}>{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
