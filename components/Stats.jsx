'use client';

import Link from 'next/link';
import CountUp from 'react-countup';

const stats = [
  {
    num: 3,
    text: 'Years of experience',
  },
  {
    num: 8,
    text: 'Completed projects',
    path: '/work',
  },
  {
    num: 10,
    text: 'Technologies mastered',
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none justify-center">
          {stats.map((item, index) => {
            const isClickable = !!item.path;
            const content = (
              <>
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                  {item.text}
                </p>
              </>
            );

            if (isClickable) {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className="flex-1 flex gap-4 items-center justify-center bg-accent/10 p-6 rounded-2xl border-b-[6px] border-accent/40 hover:bg-accent/20 hover:border-accent active:border-b-0 active:translate-y-[6px] transition-all duration-150 group shadow-lg shadow-accent/5"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center p-6"
                key={index}
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
