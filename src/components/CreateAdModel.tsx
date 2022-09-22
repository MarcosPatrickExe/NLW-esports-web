//import * as Dialog from '@radix-ui/react-dialog';
//import Input from './Form/Input';
import { GameController } from 'phosphor-react';
import { modalProperties } from '../utils/types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const COLORS = {
    BACKGROUND_MODAL: "#2A2634",
    INPUT_BACKGROUND_COLOR: "#18181B",
    INPUT_TEXT_COLOR: "#71717A",
    BUTTON_ACTION_COLOR: {
        backgroundColor: "#8B5CF6",
        border: "0px solid black"
    },
    BUTTON_CANCEL: {
        backgroundColor: "#71717A",
        border: "0px solid black"
    }
}



export function CreateAdModel(  {show, toggleShowModal }:modalProperties ) {

  const handleClose = ()=> toggleShowModal(false);
  //const handleShow = ()=> toggleShowModal(true);

  const styleButtonsDaysWeek = "w-8 h-8 rounded "


  return (
    /* Portal permite que o modal apareça centralizado na tela por cima dos outros componentes */
    <>
            <Modal centered show={show} onHide={handleClose}  animation={true}  >
              <div className=" h-full w-full rounded-md" style={{backgroundColor: COLORS.BACKGROUND_MODAL, borderColor: "0px solid black"}}>

                    <Modal.Header closeButton>
                        <Modal.Title className="font-bold text-white">
                              Publique um anúncio
                        </Modal.Title>
                    </Modal.Header>{/* Avisa para os leitores de tela que um novo anúncio/modal foi aberto!! */}

                    <Modal.Body>                    
                        <Form className="flex flex-col gap-3">

                            <Row>
                                <Form.Group className="flex flex-col">
                                    <Form.Label className="font-regular text-white">
                                        Qual o game? 
                                    </Form.Label>

                                    <Form.Control className="text-white" id="game" placeholder="Selecione o game que deseja jogar... " style={{backgroundColor: COLORS.INPUT_BACKGROUND_COLOR }}  />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="flex flex-col">
                                    <Form.Label className="font-regular text-white" htmlFor="name">
                                        Seu nome (ou nickname) 
                                    </Form.Label>

                                    <Form.Control className="text-white" id="name" placeholder="Como te chamam dentro do game?" style={{backgroundColor: COLORS.INPUT_BACKGROUND_COLOR}} />
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className=" grid grid-cols-1 gap-1">
                                        <Form.Label className="font-regular flex flex-col text-white">
                                            Joga há quantos anos?
                                        </Form.Label>

                                        <Form.Control className="text-white" id="yearsPlaying" type="text" placeholder="Tudo bem ser ZERO?" style={{backgroundColor: COLORS.INPUT_BACKGROUND_COLOR}} />
                                </Form.Group>


                                <Form.Group as={Col}  className=" grid grid-cols-1 gap-1">
                                        <Form.Label className="font-regular flex flex-col text-white">
                                            Qual o seu Discord?
                                        </Form.Label>
                                        <Form.Control className="text-white" id="discord" type="text" placeholder="Usuario#0000" style={{backgroundColor: COLORS.INPUT_BACKGROUND_COLOR}} />
                                        
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} className="flex flex-col gap-2 text-white">
                                    <Form.Label >Quando costuma jogar? </Form.Label>
                                
                                    <Form.Group className="grid grid-cols-7 gap-6">
                                        <Button title="Domingo" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> D </Button>
                                        <Button title="Segunda" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> S </Button>
                                        <Button title="Terça" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> T </Button>
                                        <Button title="Quarta" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> Q </Button>
                                        <Button title="Quinta" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> Q </Button>
                                        <Button title="Sexta" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> S </Button>
                                        <Button title="Sábado" className={styleButtonsDaysWeek} style={COLORS.BUTTON_ACTION_COLOR}> S </Button>
                                    </Form.Group>
                                </Form.Group>

                                <Form.Group as={Col} className="flex flex-col gap-2 flex-1">
                                        <Form.Label className="font-regular ml-7 text-white" htmlFor="hourStart">
                                            Qual horário do dia? 
                                        </Form.Label>

                                        <div className="ml-7 grid grid-cols-2 gap-1">
                                            <Form.Control id="hourStart" placeholder="De" style={{backgroundColor: COLORS.INPUT_BACKGROUND_COLOR}} className="text-white"  />{/* type="time"  */}
                                            <Form.Control id="hourInput" placeholder="Até" style={{backgroundColor: COLORS.INPUT_BACKGROUND_COLOR}} className="text-white"  />
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
                                style={ COLORS.BUTTON_CANCEL }
                                onClick={ handleClose }
                                className=" px-3 h-12 rounded-md font-semibold "> 
                                Cancelar 
                              </Button>
                            

                              <Button style={ COLORS.BUTTON_ACTION_COLOR } className=" w-45 h-12 font-semibold" type="submit">
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