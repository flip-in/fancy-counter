import { ResetIcon } from '@radix-ui/react-icons';

// eslint-disable-next-line react/prop-types
export default function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);
    event.currentTarget.blur();
  };

  return (
    <button className='reset-btn' onClick={handleClick}>
      <ResetIcon className='reset-btn-icon' />
    </button>
  );
}
