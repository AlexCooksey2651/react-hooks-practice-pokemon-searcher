import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemonData }) {
  const { name, hp, sprites } = pokemonData
  const [sprite, setSprite] = useState(sprites.front)

  function handleImageChange() {
    if (sprite === sprites.front) {
      setSprite(sprites.back)
    } else if (sprite === sprites.back) {
      setSprite(sprites.front)
    }
  }

  return (
    <Card onClick={handleImageChange}>
      <div>
        <div className="image">
          <img src={sprite} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
