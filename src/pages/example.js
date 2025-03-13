import { useEffect, useState } from "react"
import styles from '@/styles/example.module.css'


        function MyComponent() {
             
            const [count, setCount] = useState(0);
            const [color, setColor] = useState('green')

            useEffect(() => {
                document.title = `Count: ${count} ${color}`;
            }, [count, color])


            function addCount() {
                setCount(c => c + 1);
            }
            function substractCount() {
                setCount(c => c - 1)
            }
            function changeColor() {
                setColor(c => c === 'green' ? 'red' : 'green')
            }

            
    return (
        <>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={substractCount}>Substract</button><br/>
        <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default MyComponent;