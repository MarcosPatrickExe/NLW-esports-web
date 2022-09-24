//import * as Dialog from '@radix-ui/react-dialog';
//import Input from './Form/Input';
import { GameController } from 'phosphor-react';
import { modalProperties } from '../../utils/types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
import { CloseButton, ToggleButtonGroup } from 'react-bootstrap';
import { GameTyped } from '../../utils/types';
import { useEffect, useState, FormEvent, ChangeEvent} from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

 // BIBLIOTECA DE CAROUSEL: keen-slider
 // BILBLIOTECA DE VALIDAÇÃO: react hook form
 // BILBLIOTECA DE VALIDAÇÃO: zod (tbm pode ser utilizado no backend)
// SUGESTÕES DE FEATURES PARA O FRONTEND: autenticação com discord/twitch, validação com animação


export function CreateAdModel(  {show, toggleShowModal}:modalProperties ) {

  const handleClose = ()=> toggleShowModal(false);
  //const handleShow = ()=> toggleShowModal(true);

  const [games, setGames] = useState<GameTyped[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);
  
  

  useEffect( function(){
      fetch('http://localhost:3333/games')
        .then( (response :Response )=> response.json() )
        .then( (data: GameTyped[]) => setGames(data) )
        .catch( ( requestError ) => console.log(requestError) );
  }, []);
  
  

  function handleChangeCheck(event: ChangeEvent ){
      setUseVoiceChannel( !useVoiceChannel );
  }


  function handleCreatAd(event: FormEvent){// OU event: FormEvent
      event.preventDefault();

      const form = new FormData( event.target as HTMLFormElement );// OU event.target as HTMLFormElement
      const formDataObj = Object.fromEntries(form.entries());
    //  console.log( formDataObj.gameSelected );


      if(formDataObj.gameSelected != "Selecione o game que deseja jogar..."){

            const url= `http://localhost:3333/games/${formDataObj.gameSelected}/ads`;
     
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify( {
                    nickName: formDataObj.nickname ,
                    yearsPlaying: Number(formDataObj.yearsPlaying),
                    discord: formDataObj.discord ,
                    weekDays: weekDays, //weekDays.map(Number), MUITO UTILIZADO PARA CONVERTER VETOR DE STRING PARA TIPO 'NUMBER'
                    hourStart: formDataObj.hourStart as String,
                    hourEnd: formDataObj.hourEnd as String,
                    useVoiceChannel: useVoiceChannel
                })
            }

            fetch(url, requestOptions)
                .then(response => alert("Anúncio cadastrado com sucesso!! Status: "+response.status))
                .catch(error => alert("Houve um erro de cadastro!! \n Error: "+error))
     
            handleClose();
      }else{
            alert("Por favor, selecione um jogo!!");
      }
  }





//========================================= RENDERIÇÃO DA VIEW ======================================================


   return (
    /* Portal permite que o modal apareça centralizado na tela por cima dos outros componentes */
    <>
            <Modal centered show={show} onHide={handleClose}  animation={true}  >
              <div className="h-full w-full rounded-md MODAL" >

                    <Modal.Header>
                        <Modal.Title className="font-bold text-white">
                              Publique um anúncio
                        </Modal.Title>

                        <CloseButton variant="white" disabled={false} onClick={handleClose} />
                    </Modal.Header>            

                    <Modal.Body>                    
                        <Form onSubmit={handleCreatAd} className="flex flex-col gap-3">

                            <Row>
                                <Form.Group className="flex flex-col">
                                    <Form.Label className="font-regular text-white">
                                        Qual o game? 
                                    </Form.Label>

                                    <Form.Select name="gameSelected" className="INPUT_STYLE" id="game">
                                        <option>Selecione o game que deseja jogar...</option>
                                       
                                        { 
                                          games.map( game=>{
                                               return (
                                                   <option 
                                                       key={game.id} 
                                                       value={game.id}>
                                                            {game.title} 
                                                   </option>
                                               )
                                          })
                                        }

                                    </Form.Select>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="flex flex-col">
                                    <Form.Label className="font-regular text-white" htmlFor="name">
                                        Seu nome (ou nickname):
                                    </Form.Label>

                                    <Form.Control name="nickname" className="INPUT_STYLE" id="name" placeholder="Como te chamam dentro do game?"  />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className=" grid grid-cols-1 gap-1">
                                        <Form.Label className="font-regular flex flex-col text-white">
                                            Joga há quantos anos?
                                        </Form.Label>

                                        <Form.Control name="yearsPlaying" className="INPUT_STYLE" id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO?"  />
                                </Form.Group>


                                <Form.Group as={Col}  className=" grid grid-cols-1 gap-1">
                                        <Form.Label className="font-regular flex flex-col text-white">
                                            Qual o seu Discord?
                                        </Form.Label>
                                        <Form.Control name="discord" className="INPUT_STYLE" id="discord" type="text" placeholder="Usuario#0000"  />
                                        
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className="flex flex-col gap-2 text-white">
                                    <Form.Label >Quando costuma jogar? </Form.Label>
                                
                                {/* 
                                    <Form.Group className="grid grid-cols-7 gap-6">
                                        <Button title="Domingo" type="button" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > D </Button>{' '}
                                        <Button title="Segunda" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > S </Button>{' '}
                                        <Button title="Terça" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > T </Button>{' '}
                                        <Button title="Quarta" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > Q </Button>{' '}
                                        <Button title="Quinta" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > Q </Button>{' '}
                                        <Button title="Sexta" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > S </Button>{' '}
                                        <Button title="Sábado" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > S </Button>
                                    </Form.Group>
                                */}


                             {/*    UTILIZANDO COMPONENTES DA BIBLIOTECA @radix-ui  LOGO ABAIXO AO INVÉS DA BIBLIOTECA 'react-bootstrap' */}
                                    <ToggleGroup.Root onValueChange={setWeekDays} className="grid grid-cols-7 gap-6" type="multiple">
                
                                            <ToggleGroup.Item 
                                                value='0'
                                                title="Domingo" 
                                                className={ `BUTTON_ACTION_COLOR w-8 h-8 rounded ${weekDays.includes('0') ? 'BUTTON_ACTION_COLOR_SELECTED':''} ` }> 
                                                        D 
                                            </ToggleGroup.Item>
                                          
                                          
                                            <ToggleGroup.Item 
                                                value='1'
                                                title="Segunda" 
                                                className={ `w-8 h-8 rounded ${weekDays.includes('1') ? 'BUTTON_ACTION_COLOR_SELECTED':'BUTTON_ACTION_COLOR'} ` }> 
                                                        S 
                                            </ToggleGroup.Item>

                                            <ToggleGroup.Item 
                                                value='2' 
                                                title="Terça"   
                                                className={ `w-8 h-8 rounded ${weekDays.includes('2') ? 'BUTTON_ACTION_COLOR_SELECTED':'BUTTON_ACTION_COLOR'} ` }> 
                                                        T 
                                            </ToggleGroup.Item>

                                            <ToggleGroup.Item 
                                                value='3'
                                                title="Quarta"  
                                                className={ `w-8 h-8 rounded ${weekDays.includes('3') ? 'BUTTON_ACTION_COLOR_SELECTED':'BUTTON_ACTION_COLOR'} ` }> 
                                                        Q 
                                            </ToggleGroup.Item>

                                            <ToggleGroup.Item 
                                                value='4'
                                                title="Quinta"  
                                                className={ `w-8 h-8 rounded ${weekDays.includes('4') ? 'BUTTON_ACTION_COLOR_SELECTED':'BUTTON_ACTION_COLOR'} ` }> 
                                                        Q 
                                            </ToggleGroup.Item>

                                            <ToggleGroup.Item 
                                                value='5'
                                                title="Sexta"  
                                                className={ `w-8 h-8 rounded ${weekDays.includes('5') ? 'BUTTON_ACTION_COLOR_SELECTED':'BUTTON_ACTION_COLOR'} ` }> 
                                                        S 
                                            </ToggleGroup.Item>

                                            <ToggleGroup.Item 
                                                value='6'
                                                title="Sábado"  
                                                className={ `w-8 h-8 rounded ${weekDays.includes('6') ? 'BUTTON_ACTION_COLOR_SELECTED':'BUTTON_ACTION_COLOR'} ` }> 
                                                        S 
                                            </ToggleGroup.Item>
                                    </ToggleGroup.Root>
                                </Form.Group>


                                <Form.Group as={Col} className="flex flex-col gap-2 flex-1">
                                        <Form.Label className="font-regular ml-7 text-white" htmlFor="hourStart">
                                            Qual horário do dia? 
                                        </Form.Label>

                                        <div className="ml-7 grid grid-cols-2 gap-1">
                                            <Form.Control name="hourStart" id="hourStart" type="time" placeholder="De" className="INPUT_STYLE"  />{/* type="time"  */}
                                            <Form.Control name="hourEnd" id="hourInput" type="time" placeholder="Até" className="INPUT_STYLE"  />
                                        </div>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mt-2 flex gap-2 text-sm">
                                 <label className="text-white inline-flex space-x-2">
                                      <Form.Check checked={useVoiceChannel} onChange={ handleChangeCheck} />
                                      <span className="inline"> Costumo me conectar ao chat de voz</span>
                                 </label>
                            </Form.Group>


{/*
                    <Modal.Footer className="mt-1">
*/}                     
                          <div className="flex flex-row justify-end">
                              <Button
                                    onClick={ handleClose }
                                    className="BUTTON_CANCEL px-3 h-12 mr-5 rounded-md font-semibold "> 
                                    Cancelar 
                              </Button>
                                

                              <Button className="BUTTON_ACTION_COLOR w-45 h-12 font-semibold" type="submit">
                                    <div className="flex items-center justify-content-center">
                                            <div className="mr-4">
                                                <GameController size={24} />
                                            </div>
                                            <div>
                                                Encontrar duo
                                            </div>
                                    </div>
                              </Button>
                          </div>
                        </Form>
                    </Modal.Body>
{/*                           
                            </Modal.Footer>
*/}
                </div>
            </Modal>
    </>
  );
}