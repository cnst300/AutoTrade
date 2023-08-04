import React from "react";

function SideBar({ setSelectedItem }) {
  const handleSelectedMake = (e) => {
    console.log(e.target.value);
    setSelectedItem(e.target.value);
  };

  return (
    <>
      <div className="containerButtonsSideBar">
        <label>Make</label>
        <select onChange={handleSelectedMake} placeholder="Make">
          <option placeholder="ShowAll" id="showAll">
            Show All
          </option>
          <option placeholder="Bugatti" id="bugatti">
            Bugatti
          </option>
          <option placeholder="Ferrari" id="ferrari">
            Ferrari
          </option>
          <option placeholder="McLaren" id="mcLaren">
            McLaren
          </option>
          <option placeholder="Porsche" id="porsche">
            Porsche
          </option>
          <option placeholder="Pagani" id="pagani">
            Pagani
          </option>
          <option placeholder="Lamborghini" id="lamborghini">
            Lamborghini
          </option>
          <option placeholder="Aston Martin" id="astonMartin">
            Aston Martin
          </option>
        </select>
        <label>Model</label>
        <select onChange={handleSelectedMake} placeholder="Model">
          <option placeholder="Chiron">Chiron</option>
          <option placeholder="Aventador SVJ">Aventador SVJ</option>
          <option placeholder="812 Superfast">812 Superfast</option>
          <option placeholder="720S">720S</option>
          <option placeholder="911 Turbo S">911 Turbo S</option>
          <option placeholder="Valkyrie">Valkyrie</option>
          <option placeholder="Huayra BC">Huayra BC</option>
          <option placeholder="Centodieci">Centodieci</option>
        </select>

        <label>Engine</label>
        <select onChange={handleSelectedMake} placeholder="Engine">
          <option placeholder="8.0L W16 quad-turbocharged">
            8.0L W16 quad-turbocharged
          </option>
          <option placeholder="6.5L V12 naturally-aspirated">
            6.5L V12 naturally-aspirated
          </option>
          <option placeholder="4.0L V8 twin-turbocharged">
            4.0L V8 twin-turbocharged
          </option>
          <option placeholder="3.8L twin-turbocharged flat-six">
            3.8L twin-turbocharged flat-six
          </option>
          <option placeholder="6.0L V12 naturally-aspirated">
            6.0L V12 naturally-aspirated
          </option>
        </select>
        <label>Availability</label>
        <select placeholder="Available" onChange={handleSelectedMake}>
          <option placeholder="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>
      </div>
    </>
  );
}

export default SideBar;
