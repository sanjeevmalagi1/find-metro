interface ButtonInterface {
  isSecondary?: boolean;
  isFullWidth?: boolean;
  isSubmit?: boolean;
  label: string;
  onClick?: () => void;
}

const Button = (props: ButtonInterface) => {
  const { isSecondary, isFullWidth, isSubmit, label, onClick } = props;

  const textClass = isSecondary ? 'text-secondary' : 'text-background';
  const backgroundClass = isSecondary ? 'bg-background' : 'bg-secondary';
  const buttonWidthClass = isFullWidth ? 'w-full' : '';
  return (
    <button
      className={`py-2 px-6 ${buttonWidthClass} ${backgroundClass} ${textClass} font-bold rounded-full`}
      type={isSubmit ? 'submit' : 'button'}
      onClick={() => (onClick ? onClick() : null)}
    >
      {label}
    </button>
  );
};

export default Button;
