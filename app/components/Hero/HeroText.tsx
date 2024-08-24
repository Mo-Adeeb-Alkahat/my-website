import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroText = () => {
  const [textColor, setTextColor] = useState('dodgerblue');

  return (<div>
    <TypeAnimation
  sequence={[
    'MO',
    500,
    'Mo Adeeb', //  Continuing previous Text
    500,
    'Mo Adeeb Alkahat',
    500,
    'Mo Adeeb',
    500,
    'Mo',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>
<p className="text-4xl"> software engineer </p>
<div
      style={{
        fontSize: '35px',
        color: textColor,
        /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
      }}
    >
      <TypeAnimation
        sequence={[
          'React',
          800,
          () => setTextColor('aqua'),
          'React Native',
          800,
          () => setTextColor('darkkhaki'),
          'Python',
          1000,
          '',
          () => setTextColor('dodgerblue'),
        ]}
        repeat={Infinity}
      />
    </div>
    </div>)
}

export default HeroText