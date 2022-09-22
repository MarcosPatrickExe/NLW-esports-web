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
import { CloseButton } from 'react-bootstrap';
import { GameTyped } from '../../utils/types';
import { useEffect, useState } from 'react';



export function CreateAdModel(  {show, toggleShowModal}:modalProperties ) {

  const handleClose = ()=> toggleShowModal(false);
  //const handleShow = ()=> toggleShowModal(true);
  const styleButtonsDaysWeek = "w-8 h-8 rounded "

  const [games, setGames] = useState<GameTyped[]>([]);

  
  useEffect( function(){
      fetch('http://localhost:3333/games')
        .then( (response :Response )=> response.json() )
        .then( (data: GameTyped[]) => setGames(data) )
        .catch( ( requestError ) => console.log(requestError) );
  }, []);
  



  return (
    /* Portal permite que o modal apareça centralizado na tela por cima dos outros componentes */
    <>
            <Modal centered show={show} onHide={handleClose}  animation={true}  >
              <div className=" h-full w-full rounded-md MODAL" >

                    <Modal.Header>
                        <Modal.Title className="font-bold text-white">
                              Publique um anúncio
                        </Modal.Title>

                        <CloseButton variant="white" disabled={false} />
                    </Modal.Header>            

                    <Modal.Body>                    
                        <Form className="flex flex-col gap-3">

                            <Row>
                                <Form.Group className="flex flex-col">
                                    <Form.Label className="font-regular text-white">
                                        Qual o game? 
                                    </Form.Label>

                                    <Form.Select  className="INPUT_STYLE" id="game">
                                        <option>Selecione o game que deseja jogar... </option>
                                       
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
                                        Seu nome (ou nickname) 
                                    </Form.Label>

                                    <Form.Control className="INPUT_STYLE" id="name" placeholder="Como te chamam dentro do game?"  />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className=" grid grid-cols-1 gap-1">
                                        <Form.Label className="font-regular flex flex-col text-white">
                                            Joga há quantos anos?
                                        </Form.Label>

                                        <Form.Control className="INPUT_STYLE" id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO?"  />
                                </Form.Group>


                                <Form.Group as={Col}  className=" grid grid-cols-1 gap-1">
                                        <Form.Label className="font-regular flex flex-col text-white">
                                            Qual o seu Discord?
                                        </Form.Label>
                                        <Form.Control className="INPUT_STYLE" id="discord" type="text" placeholder="Usuario#0000"  />
                                        
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className="flex flex-col gap-2 text-white">
                                    <Form.Label >Quando costuma jogar? </Form.Label>
                                
                                    <Form.Group className="grid grid-cols-7 gap-6">
                                        <Button title="Domingo" type="button" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > D </Button>{' '}
                                        <Button title="Segunda" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > S </Button>{' '}
                                        <Button title="Terça" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > T </Button>{' '}
                                        <Button title="Quarta" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > Q </Button>{' '}
                                        <Button title="Quinta" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > Q </Button>{' '}
                                        <Button title="Sexta" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > S </Button>{' '}
                                        <Button title="Sábado" className= { `${styleButtonsDaysWeek} BUTTON_ACTION_COLOR` } > S </Button>
                                    </Form.Group>
                                </Form.Group>

                                <Form.Group as={Col} className="flex flex-col gap-2 flex-1">
                                        <Form.Label className="font-regular ml-7 text-white" htmlFor="hourStart">
                                            Qual horário do dia? 
                                        </Form.Label>

                                        <div className="ml-7 grid grid-cols-2 gap-1">
                                            <Form.Control id="hourStart" placeholder="De" className="INPUT_STYLE"  />{/* type="time"  */}
                                            <Form.Control id="hourInput" placeholder="Até" className="INPUT_STYLE"  />
                                        </div>
                                </Form.Group>
                            </Row>

                            <Form.Group className="mt-2 flex gap-2 text-sm">
                                <Form.Check type="checkbox" className="text-white" label="Costumo me conectar ao chat de voz" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer className="mt-1">
                        
                              <Button
                                onClick={ handleClose }
                                className="BUTTON_CANCEL px-3 h-12 rounded-md font-semibold "> 
                                Cancelar 
                              </Button>
                            

                              <Button className="BUTTON_ACTION_COLOR w-45 h-12 font-semibold" onClick={ handleClose } type="submit">
                                 <div className="flex items-center justify-content-center">
                                        <div className="mr-4">
                                            <GameController size={24} />
                                        </div>
                                        <div>
                                             Encontrar duo
                                        </div>
                                 </div>
                              </Button>
                    </Modal.Footer>
                </div>
            </Modal>
    </>
  );
}