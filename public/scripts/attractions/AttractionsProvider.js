export const getAttractions = async () => {
	const res = await fetch("http://holidayroad.nss.team/bizarreries");
	const data = await res.json();
	return data;
};
