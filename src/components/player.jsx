/* eslint-disable no-unused-vars */
import React from "react";
import usePlayer from "../hooks/usePlayer";
import { Link, useParams } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();

  const { loading, response: player } = usePlayer(playerId);
  console.log({ player });

  if (loading) return <div>Loading...</div>;

  if (!player) return null;

  //   {JSON.stringify(player, null, 2)}

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <img
        src={player.avatar}
        alt="logo"
        className="rounded-full object-cover my-4"
        width={200}
      />
      <h2 className="text-2xl font-bold">{player.name}</h2>
      <h2 className="text-2xl font-bold">#{player.number}</h2>
      <div className="grid grid-cols-2 gap-7">
        <div className="flex flex-col items-center">
          <h className="text-2xl font-bold">Team</h>
          <Link className="text-xl font-bold" to={`/${player.teamId}`}>
            {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <h className="text-xl font-bold">APG</h>
          <h>{player.apg}</h>
        </div>
        <div className="flex flex-col items-center">
          <h className="text-2xl font-bold">Position</h>
          <h className="">{player.position}</h>
        </div>
        <div className="flex flex-col items-center">
          <h className="text-xl font-bold">SPG</h>
          <h>{player.spg}</h>
        </div>
        <div className="flex flex-col items-center">
          <h className="text-2xl font-bold">PPG</h>
          <h className="">{player.ppg}</h>
        </div>
        <div className="flex flex-col items-center">
          <h className="text-xl font-bold">RPG</h>
          <h>{player.rpg}</h>
        </div>
      </div>
    </div>
  );
};

export default Player;
