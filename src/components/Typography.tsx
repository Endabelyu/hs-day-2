import React, { FC } from 'react';
import clsx from 'clsx';

const HeadingVariant = {
  h1: String,
  h2: String,
  h3: String,
  h4: String,
  h5: String,
  h6: String,
};
interface PropsHeading {
  variant?: keyof typeof HeadingVariant;
  word?: String;
  //   children: React.ReactNode;
}

const defaultStyle = 'font-bold';

// type HeadingStyleType = keyof typeof HeadingStyle;

const Typography: FC<PropsHeading> = ({ word = 'one', variant = 'h1' }) => {
  return (
    <>
      <p
        className={clsx(defaultStyle, {
          'text-[78px] text-orange-700 ': variant === 'h1',
          'text-[62px] text-blue-500 ': variant === 'h2',
          'text-[48px] text-cyan-500 ': variant === 'h3',
          'text-[32px] text-slate-500 ': variant === 'h4',
          'text-[24px] text-yellow-500 ': variant === 'h5',
          'text-[16 px] text-red-300 ': variant === 'h6',
        })}
      >
        this is Heading {word}
      </p>
      {/* {children} */}
    </>
  );
};

export default Typography;
