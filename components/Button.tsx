type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    variant: string;
}

const Button = ({type, title, variant}: ButtonProps) => {
  return (
    <button className={`flex gap-3 cursor-pointer rounded-full border bold-16 whitespace-nowrap ${variant}`} type={type}>
      {title}
    </button>
  )
}

export default Button