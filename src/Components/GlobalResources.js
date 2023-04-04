

global.dataBase = [
    {
        "id": "1",
        "name": "Raj"
    },
    {
        "id": "2",
        "name": "Raj two"
      }
]

// global.heading = "Default Heading";

global.getId = ()=>{
    let id = new Date().getTime().toString();
    return id;
}
global.change = (name)=>{
    return "Hello " + name;
}




