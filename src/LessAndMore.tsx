import { useState } from "react";

function LessAndMore({ text, max = 25 }: { text: string; max?: number }) {
  const [lessText, setLessText] = useState(true);

  if (text.length <= max) {
    return <span>{text}</span>;
  } else {
    return (
      <span>
        {lessText ? `${text.substring(0, max)}...` : `${text}   `}
        <a
          href="#"
          onClick={(evt) => {
            evt.preventDefault();
            setLessText(!lessText);
          }}
        >
          {lessText ? "more" : "less"}
        </a>
      </span>
    );
  }
}

export default LessAndMore;
