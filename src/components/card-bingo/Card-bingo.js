import React, {useState} from "react";
import {Button} from '@rmwc/button';
import '@material/button/dist/mdc.button.css';
import {Card} from "@rmwc/card";
import '@rmwc/card/styles';
import {Grid, GridRow, GridCell} from '@rmwc/grid'
import '@rmwc/grid/styles';
import {Elevation} from '@rmwc/elevation'
import '@rmwc/elevation/styles';
import alcaldia from '../resource/alPaez.jpeg';
import unidos from '../resource/paez.jpeg';
import mem from '../resource/MEC.jpeg';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './card-bingo.css';

const CardBingo = () => {
  const listB = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const listI = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  const listN = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
  const listG = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
  const listO = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75];
  const [listSelectedB, setListSelectedB] = useState([]);
  const [listSelectedI, setListSelectedI] = useState([]);
  const [listSelectedN, setListSelectedN] = useState([]);
  const [listSelectedG, setListSelectedG] = useState([]);
  const [listSelectedO, setListSelectedO] = useState([]);
  const [statusListB, setStatusListB] = useState([]);
  const [statusListI, setStatusListI] = useState([]);
  const [statusListN, setStatusListN] = useState([]);
  const [statusListG, setStatusListG] = useState([]);
  const [statusListO, setStatusListO] = useState([]);
  const {width, height} = useWindowSize();
  const [winner, setWinner] = useState(false);

  const validationSelect = (letter, value, index) => {
    console.log(letter, value, index);
    switch (letter) {
      case 'B':
        const newArray = [...statusListB];
        newArray[index] = {
          state: `B${value}`,
        };
        setStatusListB(newArray);
        setListSelectedB((oldArray) => [...oldArray, `B${value}`]);
        break;
      case 'I':
        const newArrayI = [...statusListI];
        newArrayI[index] = {
          state: `I${value}`,
        };
        setStatusListI(newArrayI);
        setListSelectedI((oldArray) => [...oldArray, `I${value}`]);
        break;
      case 'N':
        const newArrayN = [...statusListN];
        newArrayN[index] = {
          state: `N${value}`,
        };
        setStatusListN(newArrayN);
        setListSelectedN((oldArray) => [...oldArray, `N${value}`]);
        break;
      case 'G':
        const newArrayG = [...statusListG];
        newArrayG[index] = {
          state: `G${value}`,
        };
        setStatusListG(newArrayG);
        setListSelectedG((oldArray) => [...oldArray, `G${value}`]);
        break;
      case 'O':
        const newArrayO = [...statusListO];
        newArrayO[index] = {
          state: `O${value}`,
        };
        setStatusListO(newArrayO);
        setListSelectedO((oldArray) => [...oldArray, `O${value}`]);
        break;
      default:
        console.log('ERROR');
    }
  };

  const deleteStatus = () => {
    setListSelectedB([]);
    setListSelectedI([]);
    setListSelectedN([]);
    setListSelectedG([]);
    setListSelectedO([]);
    setStatusListB([]);
    setStatusListI([]);
    setStatusListN([]);
    setStatusListG([]);
    setStatusListO([]);
    setWinner(false);
  };

  return (
    <div style={{backgroundColor: '#126112'}}>
      {winner
        ? <Confetti
          width={width}
          height={height}
        />
        : ''}
      <Grid>
        <GridRow>
          <GridCell desktop={12} tablet={12} phone={12}>
            <Card>
              <Elevation z={7}>
                <div style={{textAlign: 'center'}}>
                  <h1>BINGO FELIZ</h1>
                </div>
                <Grid>
                  <GridCell desktop={10} tablet={12} phone={12}>
                    <Card>
                      <Elevation z={6}>
                        <div className={'text-bingo'}>B&nbsp;</div>
                        {listB.map((i, it) => (
                          <Button disabled={statusListB[it]}
                                  key={it} raised onClick={() => validationSelect('B', i, it)}>{i}</Button>
                        ))
                        }<br/>
                        <div className={'text-bingo'}>I&nbsp;&nbsp;</div>
                        {listI.map((i, it) => (
                          <Button disabled={statusListI[it]}
                                  key={it} raised onClick={() => validationSelect('I', i, it)}>{i}</Button>
                        ))
                        }
                        <br/>
                        <div className={'text-bingo'}>N</div>
                        {listN.map((i, it) => (
                          <Button disabled={statusListN[it]}
                                  key={it} raised onClick={() => validationSelect('N', i, it)}>{i}</Button>
                        ))
                        }
                        <br/>
                        <div className={'text-bingo'}>G</div>
                        {listG.map((i, it) => (
                          <Button disabled={statusListG[it]}
                                  key={it} raised onClick={() => validationSelect('G', i, it)}>{i}</Button>
                        ))
                        }<br/>
                        <div className={'text-bingo'}>O</div>
                        {listO.map((i, it) => (
                          <Button disabled={statusListO[it]}
                                  key={it} raised onClick={() => validationSelect('O', i, it)}>{i}</Button>
                        ))
                        }
                      </Elevation>
                    </Card>
                  </GridCell>
                  <GridCell desktop={2} tablet={12} phone={12}>
                    <Button raised style={{backgroundColor: '#dec635'}} onClick={() => deleteStatus()}>Reiniciar
                      Partida</Button>
                    <Button raised style={{backgroundColor: '#d9341b', marginTop: '10px'}}
                            disabled={winner}
                            onClick={() => setWinner(true)}>
                      Ganador de la Partida</Button>
                  </GridCell>
                  <GridCell desktop={6} tablet={12} phone={12}>
                    <Card>
                      <Elevation z={6}>
                        <h3>&nbsp;&nbsp;&nbsp;Balotas Seleccionadas</h3>
                        <div>{listSelectedB.map((it) => (
                          <div className={'bubble-loteryB'}>{it}</div>
                        ))}</div>
                        <div>
                          {listSelectedI.map((it) => (
                            <div className={'bubble-loteryB'}>{it}</div>
                          ))}
                        </div>
                        {listSelectedN.map((it) => (
                          <div className={'bubble-loteryB'}>{it}</div>
                        ))}
                        <div>
                          {listSelectedG.map((it) => (
                            <div className={'bubble-loteryB'}>{it}</div>
                          ))}
                        </div>
                        <div>{listSelectedO.map((it) => (
                          <div className={'bubble-loteryB'}>{it}</div>
                        ))}</div>
                      </Elevation>
                    </Card>
                  </GridCell>
                  <GridCell desktop={6} tablet={12} phone={12}>
                    <Card>
                      <Elevation z={4}>
                        <h3>&nbsp;&nbsp;&nbsp;Con el apoyo de </h3>
                        <div className={'img-footer'}>
                          <img src={alcaldia} style={{width: '15rem'}} alt={'Profile'}/>
                          <img src={mem} style={{width: '10rem'}} alt={'Profile'}/>
                        </div>
                        <div style={{textAlign: 'center'}}>
                          <img src={unidos} style={{width: '15rem'}} alt={'Profile'}/>
                        </div>
                      </Elevation>
                    </Card>
                  </GridCell>
                </Grid>
              </Elevation>
            </Card>
          </GridCell>
        </GridRow>
      </Grid>
    </div>
  );
}
export default CardBingo;
