import React from "react";
import { Card } from "../../pages/dummy_json";
import "./tile.scss";

interface TilesProps {
    tile: Card
}

const Tile:React.FC<TilesProps> = (props) => {
    const {tile}=props;
    return (
        <div className="tile">
            {tile.value && <div className="tile_value">{tile.value}</div>}
            {tile.name &&  <div className="tile_name">{tile.name}</div>}
        </div>
    );
}
export default Tile;