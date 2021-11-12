import React, { useEffect } from 'react';
import config from './barcodeScanner-config.json';
import Quagga from 'quagga';

function BarcodeScanner({ onDetected }) {
  useEffect(() => {
    Quagga.init(config, (err) => {
      if (err) {
        alert.error(err, 'error msg');
      }
      Quagga.start();
    });

    //detecting boxes on stream
    Quagga.onProcessed((result) => {
      var drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;

      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(0, 0, Number(drawingCanvas.getAttribute('width')), Number(drawingCanvas.getAttribute('height')));
          result.boxes
            .filter(function (box) {
              return box !== result.box;
            })
            .forEach(function (box) {
              Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                color: 'green',
                lineWidth: 2,
              });
            });
        }

        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
            color: '#00F',
            lineWidth: 2,
          });
        }

        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
        }
      }
    });

    Quagga.onDetected(detected);

    return () => {
      Quagga.stop();
    };
  }, []);

  const detected = (result) => {
    onDetected(result.codeResult.code);
  };

  return <div id="interactive" className="viewport" />;
}

export default BarcodeScanner;
