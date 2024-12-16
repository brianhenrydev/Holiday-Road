import { getAttractions } from "./AttractionsProvider.js";

const attractions = await getAttractions();

export const genAttractionsDropdown = async () => `
          <select name="attraction">
            <option value="default"/> -
            ${attractions
							.map(
								({ id, name, city, state, description }) =>
									`<option value="${name}"
                      data-state="${state}"
                      data-city="${city}"
                      data-id="${id}"
                      data-desc="${description}"
                    /> ${name}`,
							)
							.join("")}
          </select>`;
