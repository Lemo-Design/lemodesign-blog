import type confetti from 'canvas-confetti';
import type { CSSProperties } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

const style: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0
};

type Props = {
  getInstance: (instance: confetti.CreateTypes) => void;
};

export default function ConfettiCanvas({ getInstance }: Props) {
  return (
    <ReactCanvasConfetti
      onInit={({ confetti }) => getInstance(confetti)}
      style={style}
    />
  );
}
