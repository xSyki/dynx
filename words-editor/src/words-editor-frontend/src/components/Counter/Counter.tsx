import { useState } from 'react'

import style from './counter.module.scss'

function Counter() {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <div className={style.counter}>
      <div className={style.counter__value} style={{ color: 'white' }}>
        Current value: {counterValue}
      </div>
      <button
        onClick={() => setCounterValue((counterValue) => counterValue + 1)}
        className={style.counter__btn}
      >
        Increace value by 1
      </button>
    </div>
  )
}

export default Counter
