const misProductos =[
    {id: "1", marca:"samsung", modelo: "Galaxy A34", precio: 337, img: "../img/a14.jpg"},
    {id: "2", marca:"samsung", modelo: "Galaxy A14", precio: 192, img: "../img/a34.jpg"},
    {id: "3", marca:"samsung", modelo: "Galaxy AO4e", precio: 122, img: "../img/ao4e.jpg"},
    {id: "4", marca:"samsung", modelo: "Galaxy A54", precio: 428, img: "../img/galaxy A54.jpg"},
    {id: "5", marca:"samsung", modelo: "Galaxy S22", precio: 969, img: "../img/galaxy S22.jpg"},
    {id: "6", marca:"apple", modelo: "Iphone SE", precio: 336, img: "../img/Iphone SE.jpg"},
    {id: "7", marca:"apple", modelo: "Iphone X", precio: 445, img: "../img/Iphone X.jpg"},
    {id: "8", marca:"apple", modelo: "Iphone 8", precio: 229, img: "../img/Iphone 8.jpg"},
    {id: "9", marca:"apple", modelo: "Iphone 11", precio: 565, img: "../img/Iphone 11.jpg"},
    {id: "10", marca:"apple", modelo: "Iphone 12", precio: 841, img: "../img/Iphone 12.jpg"},
    {id: "11", marca:"apple", modelo: "Iphone 14", precio: 1149, img: "../img/Iphone 14.jpg"},
    {id: "12", marca:"apple", modelo: "Iphone XR", precio: 435, img: "../img/Iphone XR.jpg"},
    {id: "13", marca:"xiaomi", modelo: "Redmi Note 11S", precio: 269, img: "../img/Redmi Note 11S.jpg"},
    {id: "14", marca:"xiaomi", modelo: "Redmi Note 12 Pro", precio: 394, img: "../img/Redmi Note 12 Pro.jpg"},
    {id: "15", marca:"xiaomi", modelo: "Redmi A1", precio: 98, img: "../img/Redmi A1.jpg"},
    {id: "16", marca:"xiaomi", modelo: "Redmi 10A", precio: 133, img: "../img/Redmi 10A.jpg"},
    {id: "17", marca:"xiaomi", modelo: "Poco F5", precio: 538, img: "../img/Poco F5.jpg"},
    {id: "18", marca:"huawei", modelo: "Nova 9", precio: 539, img: "../img/Nova 9.jpg"},
    {id: "19", marca:"huawei", modelo: "Y6p", precio: 199, img: "../img/Y6p.jpg"},
    {id: "20", marca:"huawei", modelo: "Nova 8i", precio: 369, img: "../img/Nova 8i.jpg"},
];

export const getProductos = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(misProductos);
        }, 500);
    })
}

export const getUnProducto = (id) =>{
    return new Promise(resolve =>{
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto)
        }, 500);
    })
}

export const getProductosPorCategoria = (idCategoria) =>{
    return new Promise ( resolve  => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.marca === idCategoria)
            resolve(productosCategoria)
        }, 500);
    })

}