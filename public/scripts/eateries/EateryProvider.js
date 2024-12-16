export const getEateries = async () => {
	const res = await fetch("http://holidayroad.nss.team/eateries");
	const data = await res.json();
	return data;
};
