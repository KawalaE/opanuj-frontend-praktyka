import { useState } from 'react';
import calculate from './calculation/methods';

const App = () => {
  const [numA, setNumA] = useState<string>('0');
  const [numB, setNumB] = useState<string>('0');
  const [result, setResult] = useState<number | string>(0);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(e.target.value)}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => setResult(calculate(numA, numB, 'add'))}
        >
          +
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => setResult(calculate(numA, numB, 'subtract'))}
        >
          -
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => setResult(calculate(numA, numB, 'multiply'))}
        >
          *
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => setResult(calculate(numA, numB, 'divide'))}
        >
          /
        </button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
