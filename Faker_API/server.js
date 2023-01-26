const express = require("express");
const app = express();
const port = 8000;
const {faker} = require('@faker-js/faker');

const createUser = () =>{
    const newUser= {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address:{
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newCompany;
}

app.get("/api/user/new", (req, res)=>{
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/company/new", (req, res)=>{
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res)=>{
    const newUser = createUser();
    const newCompany = createCompany();
    res.json({user: newUser, company:newCompany})
})

app.listen(port, ()=> console.log(`server running on port number ${port}`))