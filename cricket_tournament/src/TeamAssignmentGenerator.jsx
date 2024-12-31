import React, { useState } from "react";
import "./TeamAssignmentGenerator.css"; // Optional: Add your own styles

const TeamAssignmentGenerator = () => {
  const [category, setCategory] = useState("batsman");
  const [teams, setTeams] = useState([[], [], [], []]);
  const [assignedPlayers, setAssignedPlayers] = useState(new Set());

  const players = {
    batsman: ["Player1", "Player2", "Player3", "Player4", "Player5", "Player6", "Player7", "Player8", "Player9", "Player10", "Player11", "Player12", "Player13", "Player14", "Player15", "Player16", "Player17", "Player18", "Player19", "Player20", "Player21", "Player22","player 23","player 24"],
    bowler: ["Bowler1", "Bowler2", "Bowler3", "Bowler4"],
    newbie: ["Newbie1", "Newbie2", "Newbie3", "Newbie4", "Newbie5", "Newbie6", "Newbie7", "Newbie8", "Newbie9", "Newbie10", "Newbie11", "Newbie12", "Newbie13", "Newbie14", "Newbie15", "Newbie16", "Newbie17", "Newbie18", "Newbie19", "Newbie20", "Newbie21", "Newbie22", "Newbie23", "Newbie24",]
  };

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  const handleAssignTeams = () => {
    const selectedPlayers = players[category].filter(player => !assignedPlayers.has(player));
    const shuffled = [...selectedPlayers].sort(() => Math.random() - 0.5);

    const newTeams = [...teams];
    for (let i = 0; i < Math.min(shuffled.length, 4); i++) {
      newTeams[i].push(shuffled[i]);
      assignedPlayers.add(shuffled[i]);
    }

    setTeams(newTeams);
    setAssignedPlayers(new Set(assignedPlayers));
  };

  const handleReset = () => {
    setTeams([[], [], [], []]);
    setAssignedPlayers(new Set());
  };

  return (
    <div className="team-assignment-generator">
      <header>
        <h1>Team Assignment Generator</h1>
        <p>Assign players into teams based on categories!</p>
      </header>

      <section className="category-section">
        <button onClick={() => handleCategoryClick("batsman")}>Batsman</button>
        <button onClick={() => handleCategoryClick("bowler")}>Bowler</button>
        <button onClick={() => handleCategoryClick("newbie")}>Newbie</button>
        <p>Selected Category: {category.charAt(0).toUpperCase() + category.slice(1)}</p>
      </section>

      <section className="action-section">
        <button onClick={handleAssignTeams}>Assign Teams</button>
      </section>

      {teams.flat().length > 0 && (
        <section className="results-section">
          <h2>Teams</h2>
          <div className="teams-grid">
            {teams.map((team, index) => (
              <div
                key={index}
                className="team-box"
                style={{ backgroundColor: `hsl(${(index * 90) % 360}, 60%, 80%)` }}
              >
                <h3>Team {index + 1}</h3>
                <ul>
                  {team.map((member, idx) => (
                    <li key={idx}>{member}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="reset-section">
        <button onClick={handleReset}>Reset</button>
      </section>
    </div>
  );
};

export default TeamAssignmentGenerator;
