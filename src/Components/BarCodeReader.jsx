import React, { useState } from 'react';

import FetchBarcode from './FetchBarCode';
import BarcodeScanner from './BarcodeScanner';

import './BarCodeReader.css';

function BarCodeReader() {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = (result) => {
    setResult(result);
  };

  return (
    <div className="BarCodeReader">
      <p>You are in a search of a good product in your supermarket? Try our product scanner:</p>
      <div className="Result">{result && `${result}`}</div>
      {result && <FetchBarcode result={result} setCamera={setCamera} />}
      <button onClick={() => setCamera(!camera)}>{camera ? 'Stop' : 'Start'}</button>
      <div className="BarCodeReaderContainer">{camera && <BarcodeScanner onDetected={onDetected} />}</div>
    </div>
  );
}

export default BarCodeReader;
