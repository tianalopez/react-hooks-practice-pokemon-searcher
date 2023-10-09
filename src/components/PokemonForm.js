import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onFormSubmit}) {
  const [pokeObj, setPokeObj] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })
  //pass to callback
  const handleFormSubmit = (e) => {
    e.preventDefault()

    let newPokeObj = {
      name: pokeObj.name,
      hp: pokeObj.hp,
      sprites: {
        front: pokeObj.frontUrl,
        back: pokeObj.backUrl,
    }}

    onFormSubmit(newPokeObj)
  }
  //grab the value and key and create new obj
  const handleChange = (e) => {
    setPokeObj({
      ...pokeObj,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input value={pokeObj.name} onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input value={pokeObj.hp} onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeObj.frontUrl}
          />
          <Form.Input
            onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeObj.backUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
