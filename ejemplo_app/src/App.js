import logo from './logo.svg';
import './App.css';
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import 'materialize-css/dist/css/materialize.min.css';


function App() {
  return (
    <div className="App">

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="secondary">1</Button>{' '}
            <Button variant="secondary">2</Button>{' '}
            <Button variant="secondary">3</Button>{' '}
            <Button variant="secondary">4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
        </ButtonToolbar>

        <ButtonToolbar
          className="justify-content-between"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="First group">
            <Button variant="secondary">1</Button>{' '}
            <Button variant="secondary">2</Button>{' '}
            <Button variant="secondary">3</Button>{' '}
            <Button variant="secondary">4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
            />
          </InputGroup>
        </ButtonToolbar>
      </>

      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s3"><a href="#test1">Test 1</a></li>
            <li class="tab col s3"><a class="active" href="#test2">Test 2</a></li>
            <li class="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
            <li class="tab col s3"><a href="#test4">Test 4</a></li>
          </ul>
        </div>
        <div id="test1" class="col s12">Test 1</div>
        <div id="test2" class="col s12">Test 2</div>
        <div id="test3" class="col s12">Test 3</div>
        <div id="test4" class="col s12">Test 4</div>
      </div>
      <ul class="collapsible">
    <li>
      <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
    <li>
      <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
      <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
    </li>
  </ul>

 

    </div>
  );
}

export default App;
