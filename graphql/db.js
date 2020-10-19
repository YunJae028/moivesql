
export const people =[
    {
        id : "0",
        name : "yunjae",
        age : 23,
        gender:"female"
    },
    {
        id : "1",
        name : "terry",
        age : 70,
        gender:"male"
    },
    {
        id : "2",
        name : "teao",
        age : 34,
        gender:"male"
    },
    {
        id : "3",
        name : "mangchi",
        age : 17,
        gender:"male"
    },
    {
        id : "4",
        name : "bomsilri",
        age : 30,
        gender:"female"
    }
]; 


export const getById = id => {
    const fliteredPeople = people.filter(person =>  person.id === String(id));
    return fliteredPeople[0];
};