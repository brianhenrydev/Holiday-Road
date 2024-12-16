import { getParksData } from "./ParkProvider.js";
const parks = await getParksData();

export const genParksDropdown = async () => `
          <select name="park">
            <option value="default"/> -
            ${parks
              .map(
                ({
                  parkCode,
                  fullName,
                  states,
                  latitude,
                  longitude,
                  description,
                }) =>
                  `<option value="${fullName}"
                      data-park_code="${parkCode}"
                      data-state="${states}"
                      data-longitude="${longitude}"
                      data-latitude="${latitude}"
                      data-desc="${description}"
                    /> ${fullName}`
              )
              .join("")}
          </select>`;
