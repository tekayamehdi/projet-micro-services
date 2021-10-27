let lentille = connect("127.0.0.1:27017/lentilles");

lentille.lentilles.insertMany([
  {
    _id: ObjectId("5f380bd326509c2b381f8c5c"),
    marque: "verax",
    couleur: "Gucci112",
    prix: 250.2,
    __v: 0,
  },
]);
