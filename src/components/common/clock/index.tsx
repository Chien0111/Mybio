import { useEffect } from 'react';
import './style.css';

function Clock() {
  const hourHand = document.querySelector('[data-hour-hand]');

  const minuteHand = document.querySelector('[data-minute-hand]');

  const secondHand = document.querySelector('[data-second-hand]');

  useEffect(() => {
    setInterval(setClock, 1000);
  });

  function setClock() {
    const currentDate = new Date();

    const secondsRatio = currentDate.getSeconds() / 60;

    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

    setRotation(secondHand, secondsRatio);

    setRotation(minuteHand, minutesRatio);

    setRotation(hourHand, hoursRatio);
  }

  function setRotation(element: any, rotationRatio: any) {
    element.style.setProperty('--rotation', rotationRatio * 360);
  }

  return (
    <div className="clock border-[1px] border-black dark:border-white text-rgb(58, 61, 13) dark:text-yellow-300">
      <div className="hand hour" data-hour-hand></div>

      <div className="hand minute" data-minute-hand></div>

      <div className="hand second" data-second-hand></div>

      <div className="number number1">1</div>

      <div className="number number2">2</div>

      <div className="number number3">3</div>

      <div className="number number4">4</div>

      <div className="number number5">5</div>

      <div className="number number6">6</div>

      <div className="number number7">7</div>

      <div className="number number8">8</div>

      <div className="number number9">9</div>

      <div className="number number10">10</div>

      <div className="number number11">11</div>

      <div className="number number12">12</div>
    </div>
  );
}

export default Clock;
