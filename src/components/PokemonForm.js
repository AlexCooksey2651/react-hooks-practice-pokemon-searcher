import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addNewPokemon }) {
  const [formData, setFormData] = useState(
    {
      "id": "",
      "name": "",
      "hp": 0,
      "sprites": {
        "front": "",
        "back": "",
      },
    }
  )

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleFrontImage(event) {
    const spritesInfo = {...formData.sprites}
    spritesInfo.front = event.target.value

    setFormData({
      ...formData,
      sprites: spritesInfo
    })
  }

  function handleBackImage(event) {
    const spritesInfo = {...formData.sprites}
    spritesInfo.back = event.target.value

    setFormData({
      ...formData,
      sprites: spritesInfo
    })
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(newPokemon => addNewPokemon(newPokemon))
  }



  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={handleFrontImage}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={handleBackImage}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
