import { useEffect, useState } from "react";

/** Types and deletes each word in turn. Starts fully typed so the first role is in the HTML. */
export function TypingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? 38 : 75;
    let step: () => void;

    if (!deleting && text === word) {
      delay = 1900;
      step = () => setDeleting(true);
    } else if (deleting && text === "") {
      delay = 250;
      step = () => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      };
    } else {
      step = () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }

    const t = window.setTimeout(step, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden className="inline-flex items-center">
        <span className="text-gradient">{text}</span>
        <span className="ml-1 inline-block h-[1.1em] w-[3px] animate-blink rounded-full bg-brand" />
      </span>
    </>
  );
}
