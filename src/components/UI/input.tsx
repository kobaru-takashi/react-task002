import { HTMLAttributes, useCallback, useState } from "react";

type Props = {
  label?: string;
  flag?: boolean;
  onEnterPressKey?: () => void;
} & HTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  const { label, flag, onEnterPressKey, ...defaultProps } = props;
  const [isVisible, setIsVisible] = useState(true);

  const handleOnPressKey = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && onEnterPressKey) {
        onEnterPressKey();
        if (flag) {
          setIsVisible(!isVisible);
        }
      }
    },
    [isVisible]
  );

  return (
    <div>
      {label && isVisible && <div>{label}</div>}
      <div>
        <input {...defaultProps} onKeyPress={handleOnPressKey} />
      </div>
    </div>
  );
};
