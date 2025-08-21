import { clsx } from 'clsx';
import { ElementType, HTMLAttributes } from 'react';
import colors from '@/utils/Colors';
type FeedbackNoticeVariants = 'SUCCESS' | 'ERROR' | 'INFO';
interface FeedbackNoticeProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
  variant?: FeedbackNoticeVariants;
  className?: string;
  icon?: ElementType;
}

export const FeedbackNotice = ({
  message,
  variant = 'SUCCESS',
  icon: NoticeIcon,
  className,
  ...rest
}: FeedbackNoticeProps) => {
  const iconColor =
    variant === 'SUCCESS'
      ? colors.primary[100]
      : variant === 'ERROR'
        ? colors.error[200]
        : colors.gray[100];

  return (
    <div
      className={clsx('flex flex-col  items-center justify-center gap-8 py-2 ', {
        'text-success-900 bg-primaty-100': variant === 'SUCCESS',
        'text-error-900 bg-error-100': variant === 'ERROR',
        //  'bg-info-100 text-info-900': variant === 'INFO',
      })}
      {...rest}
    >
      {NoticeIcon && (
        <div className='rounded-full border border-primary-100 p-6'>
          <NoticeIcon
            strokeWidth={1.5}
            height={46}
            width={46}
            color={iconColor}
          />
        </div>
      )}
      <p className='break-all text-center font-rubik text-lg font-light text-white'>
        {message}
      </p>
    </div>
  );
};
