
const yunjae = {
    name : "yunjae",
    age : 23,
    gender:"female"
};

const resolvers = {
    Query: {
       person: () => yunjae
    }
};

export default resolvers;