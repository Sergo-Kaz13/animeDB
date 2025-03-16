let search = "level up";
let genres = "";
let sortBy = "ranking"; //title
let sortOrder = "asc"; //desc

// 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc'
export const url = `https://anime-db.p.rapidapi.com/anime?page=1&size=10&&search=${search}&genres=${genres}&sortBy=${sortBy}&sortOrder=${sortOrder}`;
