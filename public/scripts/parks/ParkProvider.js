import ApiKey from "../Settings.js";
const { npsKey } = ApiKey;

export const getParksData = async () => {
	const res = await fetch(
		`https://developer.nps.gov/api/v1/parks?api_key=${npsKey}`,
	);
	const parks = await res.json();
	return parks.data;
};
