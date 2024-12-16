import { getEateries } from "./EateryProvider.js";

const eateries = await getEateries();

export const genEateriesDropdown = async () => `
          <select name="eatery">
            <option value="default"/> -
            ${eateries
							.map(
								({ businessName, description, state, city, id }) =>
									`<option value="${businessName}"
                      data-state="${state}"
                      data-city="${city}"
                      data-id="${id}"
                      data-desc="${description}"
                    /> ${businessName}`,
							)
							.join("")}
          </select>`;
