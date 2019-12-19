import React from 'react';
import BingoSheet from '../../models/sheet';

import config from '../../config';
import GameMenu from '../GameMenu';
import BingoSheetView from '../BingoSheetView';

import './index.scss';
import LinkBanner from '../Banner';

const BingoSheetLabel: React.FC<{
  sheet: BingoSheet,
}> = ({ sheet }) => {
  return (
    <div className="Bingo_Sheet_Label">
      <h2>YOUR BINGO SHEET</h2>
      {sheet.lines.length ? <span>{sheet.lines.length} bingo</span> : null}
    </div>
  );
};

const BingoScanTrigger: React.FC<{
  onClick(): void,
}> = ({ onClick }) => {
  return (
    <div className="Scan_Start_Button_Container">
      <button onClick={onClick}>SCAN QR CODE</button>
    </div>
  )
}

const Game: React.FC<{
  bingo: { sheet: BingoSheet },
  reset(): void,
  startScanning(): void,
}> = ({ bingo, reset, startScanning }) => {
  return (
    <div className="Game">
      {config.application.banner_link ? <LinkBanner link={config.application.banner_link} /> : null}
      <div className="Game_Title">
        <GameMenu app={config.application} sheet={bingo.sheet} reset={reset} />
      </div>
      <div className="Game_Contents">
        <BingoSheetLabel sheet={bingo.sheet} />
        <BingoSheetView sheet={bingo.sheet} />
        <BingoScanTrigger onClick={startScanning} />
     </div>
    </div>
  );
}

export default Game;
