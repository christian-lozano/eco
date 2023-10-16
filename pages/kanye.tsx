import { useState } from 'react'

import { Button } from '@/components/@ui/button/button'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementByAmount } from '../features/counter'

export default function Home() {
  const dispatch = useAppDispatch()
  // const count = useAppSelector(selectCount);
  const { value } = useAppSelector((state) => state.counter)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
      <h2>
        The current number is
        {value}
      </h2>
      <div>
        <input
          value={incrementAmount}
          type="number"
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <Button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by amount
        </Button>
      </div>
      <div>
        <Button onClick={() => dispatch(decrement())}>Decrement by 1</Button>
        <Button onClick={() => dispatch(increment())}>Increment by 1</Button>
      </div>
    </>
  )
}
