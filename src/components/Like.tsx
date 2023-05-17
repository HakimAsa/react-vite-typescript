import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
interface Props {
  onClick: () => void;
}
function Like({ onClick }: Props) {
  const [isLiked, setIsLiked] = useState(false);

  const toggle = () => {
    setIsLiked(!isLiked);
    onClick();
  };

  if (isLiked)
    return (
      <div>
        <AiFillHeart color='#ff6b81' size={25} onClick={toggle} />
      </div>
    );
  return (
    <div>
      <AiOutlineHeart size={25} onClick={toggle} />
    </div>
  );
}

export default Like;
