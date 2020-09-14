export const itemList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: "001",
          name: "uno",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/poppy.jpg"),
        },
        {
          id: "002",
          name: "dos",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/scabiosa.webp"),
        },
        {
          id: "003",
          name: "tres",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/poppy.jpg"),
        },
        {
          id: "004",
          name: "cuatro",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/scabiosa.webp"),
        },
        {
          id: "005",
          name: "cinco",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/poppy.jpg"),
        },
        {
          id: "006",
          name: "seis",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/scabiosa.webp"),
        },
        {
          id: "007",
          name: "siete",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/poppy.jpg"),
        },
        {
          id: "008",
          name: "ocho",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/scabiosa.webp"),
        },
        {
          id: "009",
          name: "nueve",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/poppy.jpg"),
        },
        {
          id: "0010",
          name: "diez",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/scabiosa.webp"),
        },
        {
          id: "0011",
          name: "once",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/poppy.jpg"),
        },
        {
          id: "0012",
          name: "doce",
          description: "descripción",
          price: "787",
          stock: "12",
          img: require("../assets/images/scabiosa.webp"),
        },
      ]);
    }, 2000);
  });
};
