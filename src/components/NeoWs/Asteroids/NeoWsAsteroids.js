import React from "react";

const NeoWsAsteroids = ({ asteroidsCollection }) => {
  // Extraction des dates
  const asteroidsDates = Object.keys(asteroidsCollection);
  console.log("Dates des astéroïdes : ", asteroidsDates);
  // console.log("Noms des astéroïdes : ", asteroid.name);
  // console.log("Dates des astéroïdes : ", asteroidsDates.name.sort(function(a, b){return b-a}));
 // for(const asteroidsDate of asteroidsDates) {
 //   asteroidsDates.sort(function(a, b){return b-a});
 //   console.log(asteroidsDate);
 // }

  // for(const asteroidsDate of asteroidsDates) {
  //   console.log("Dates des éléments : ", asteroidsDate);
  // }




  return (
    <div>
      {asteroidsDates.map(asteroidsDate => (
        <div>
          <h2>{asteroidsDate}</h2>
          <div>
            {asteroidsCollection[asteroidsDate].map(asteroid => (
              <div key={asteroid.id}>{asteroid.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NeoWsAsteroids;
