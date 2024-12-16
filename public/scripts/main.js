import { genParksDropdown } from "./parks/ParksDropdown.js";
import { genAttractionsDropdown } from "./attractions/AttractionsDropDown.js";

const container = document.querySelector("#container");

const render = async () => {
	container.innerHTML = `
        <div id="app">
            <header>
                <div class="topnav">
                    <a class="active" href="#">HolidayRoad</a>
                </div>
            </header>
            <div id="dropdowns">
               <h2>Choose a Park</h2>
               <div id="parks-dropdown" class="dropdown-menu">${await genParksDropdown()}</div>
               <h2>Choose an Attraction</h2>
               <div id="attractions-dropdown" class="dropdown-menu">${await genAttractionsDropdown()}</div>
               <h2>Choose a Eatery</h2>
               <div id="eateries-dropdown" class="dropdown-menu"></div>
            </div>
            <h2>Itinerary Preview</h2>
            <div id="itenerary">
                <div id="chosen-park"></div>
                <div id="chosen-attraction"></div>
                <div id="chosen-eatery"></div>
                <button>Save Itinerary</button>
          </div>
            <footer></footer>
        </div>
    `;
};

render();
