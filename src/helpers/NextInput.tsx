import React, { useRef, KeyboardEvent } from "react";

interface NextInputProps {
  onEnter?: () => void;
  next?: boolean;
}

const NextInput: React.FC<NextInputProps> = ({ onEnter, next }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    } else if (event.key === "Enter" && next && inputRef.current) {
      inputRef.current.blur();
      const nextInput = inputRef.current.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  return <input ref={inputRef} onKeyPress={handleKeyPress} />;
};

export default NextInput;
