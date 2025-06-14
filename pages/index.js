import { useState } from "react";

const mystimonData = [
  {
    "name": "Zornaris",
    "type": "Dream-Type",
    "description": "Zornaris is a Dream-Type MystiMon known for its mysterious origin and formidable presence. It thrives in extreme conditions and evolves by consuming others of its kind.",
    "abilities": [
      "Dream Drain",
      "Phantom Shift",
      "Illusion Mirage"
    ]
  },
  {
    "name": "Nyxgeist",
    "type": "Oblivion",
    "description": "Nyxgeist is an Oblivion MystiMon with a dark aura. Legends say it appears during solar eclipses and steals fragments of time.",
    "abilities": [
      "Void Echo",
      "Temporal Blink",
      "Shadow Cloak"
    ]
  },
  {
    "name": "Flamirox",
    "type": "Fire",
    "description": "Flamirox breathes scorching fire and thrives in volcanic regions. It becomes more powerful with each battle.",
    "abilities": [
      "Blazing Tail",
      "Flame Wall",
      "Inferno Crash"
    ]
  },
  {
    "name": "Aquarion",
    "type": "Water",
    "description": "Aquarion swims with unmatched speed. Its cry can summon tidal waves and boost allies.",
    "abilities": [
      "Tidal Pulse",
      "Aqua Heal",
      "Bubble Net"
    ]
  },
  {
    "name": "Terranox",
    "type": "Earth",
    "description": "Terranox\u2019s body is armored with rock plates. It channels seismic power to disrupt foes.",
    "abilities": [
      "Quake Fist",
      "Stone Shell",
      "Earthbind"
    ]
  },
  {
    "name": "Zephyrel",
    "type": "Wind",
    "description": "Zephyrel dances through the skies and manipulates wind currents to dodge attacks.",
    "abilities": [
      "Air Cutter",
      "Wind Veil",
      "Cyclone Rise"
    ]
  },
  {
    "name": "Voltreon",
    "type": "Electric",
    "description": "Voltreon stores immense power in its tail. It can paralyze entire battlefields with a single charge.",
    "abilities": [
      "Lightning Dash",
      "Spark Trap",
      "Overcharge"
    ]
  },
  {
    "name": "Cryonix",
    "type": "Ice",
    "description": "Cryonix was born in glacial caves. It can freeze anything it touches.",
    "abilities": [
      "Frost Bite",
      "Ice Armor",
      "Snow Flurry"
    ]
  },
  {
    "name": "Psychorok",
    "type": "Psychic",
    "description": "Psychorok manipulates minds and can foresee enemy movements.",
    "abilities": [
      "Mind Crush",
      "Future Sight",
      "Psychic Field"
    ]
  },
  {
    "name": "Oblivigon",
    "type": "Dark/Legendary",
    "description": "A dark, winged creature with three tails, created through a failed human experiment. Said to devour souls to grow stronger.",
    "abilities": [
      "Devour Essence",
      "Shadow Wings",
      "Oblivion Beam"
    ]
  }
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filtered = mystimonData.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={ padding: 20 }>
      <h1>MystiMon Quest Pokédex</h1>
      <input
        type="text"
        placeholder="Search MystiMon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={ padding: 8, marginBottom: 20, width: "100%" }
      />
      <div style={ display: "flex", flexWrap: "wrap", gap: 20 }>
        {filtered.map((mysti) => (
          <div key={mysti.name} style={ border: "1px solid #ccc", borderRadius: 10, padding: 16, width: 300 }>
            <h2>{mysti.name}</h2>
            <p><strong>Type:</strong> {mysti.type}</p>
            <p>{mysti.description}</p>
            <p><strong>Abilities:</strong></p>
            <ul>
              {mysti.abilities.map((ab, i) => (
                <li key={i}>{ab}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}