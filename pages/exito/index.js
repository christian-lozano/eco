import React, { useCallback, useEffect } from 'react'
import algoliasearch from 'algoliasearch';
import { useCart } from 'react-use-cart';

const client = algoliasearch(process.env.CLI_APP_ID,process.env.CLI_ADMIN_API_KEY);
const index = client.initIndex(process.env.NEXT_PUBLIC_INSTANTSEARCH_INDEX_NAME);
// let data = []



// const reducirStock = (indexProduct,stockActual,UnidadesComprado)=>{
//   const stock = Number(stockActual)
//   const UnidadesComp = Number(UnidadesComprado)
//   const indice = String(indexProduct)

//   index.partialUpdateObject({
//     units_in_stock: stock - UnidadesComp,  
//       objectID: indice,
//     })
//     .then(({ objectIDs }) => {
//       console.log(objectIDs);
//       console.log("exito");
//     }).catch((err) => {
//       console.log("ocurrio un error", err.message);
//       console.error(err);
//     });
// }




export default  function Home() {
  const {

    items,

  } = useCart()

  const objects = [];


//     if (indiceProducto) {
//         var $_GET = {};
//         if(document.location.toString().indexOf('?') !== -1) {
//             var query = document.location
//                            .toString()
//                            // get the query string
//                            .replace(/^.*?\?/, '')
//                            // and remove any existing hash string (thanks, @vrijdenker)
//                            .replace(/#.*$/, '')
//                            .split('&');
        
//             for(var i=0, l=query.length; i<l; i++) {
//                var aux = decodeURIComponent(query[i]).split('=');
//                $_GET[aux[0]] = aux[1];
//             }
//         }
//         //get the 'index' query parameter
//         let  data = $_GET['variable1'];
//         // console.log(data);
//         // var input = data.trim();

//         // input=input.replaceAll(",", "\',\'");
//         // var output = input.slice(0, -1);
//         // // var a = `\'${output}\'`;
//         let arr = data.split(','); 
//         console.log(arr)


// // let arr = []
// // arr.push(data)
// //         console.log(arr);
//     }
 
    let myCar = new Object();
    // items.map( el=>{
      
    //   // let UnidadesCompradas = el.substring(0,1);
    //   // console.log(UnidadesCompradas);
    //    let indexProduct = el.id.substring(0,6);
    //   // console.log(indexProduct);

    //   //  let stockActual = el.slice(-1);
    //   // console.log(stockActual);
    //     console.log(typeof indexProduct);
    //     console.log(typeof el.units_in_stock);
    //     console.log(typeof el.quantity);

    //   // stock = Number(stockActual)
    //   // UnidadesComp = Number(UnidadesCompradas)
    //   // indiceProducto = String(indexProduct)
    //   //  console.log(typeof indiceProducto, indiceProducto);

 
    //     //  console.log(typeof indiceProducto, indiceProducto);
    //     //  console.log(indiceProducto,"test");
    //     //  console.log(stock,"stock");

    //     // index.partialUpdateObject({
    //     //   units_in_stock: 8 - 1,  
    //     //     objectID: "IB7432",
    //     //   })
    //     //   .then(({ objectIDs }) => {
    //     //     console.log(objectIDs);
    //     //     console.log("exito");
    //     //   }).catch((err) => {
    //     //     console.log("ocurrio un error", err.message);
    //     //     console.error(err);
    //     //   });

    
    //   })
      
 
      
      

    
    
   

  //     index.partialUpdateObjects(objects).then(({ objectIDs }) => {
  //    console.log(objectIDs);
  //  });
  

  const bucle = items.forEach( function( dato ){
    let indexProduct = dato.id.substring(0,6);
    let stock = dato.units_in_stock - dato.quantity;


    objects.push({objectID:"GY7429",units_in_stock:2},{objectID:"IB7432",units_in_stock:4})

  });

useCallback(
  () => {

    index.partialUpdateObjects(objects).then(({ objectIDs }) => {
      console.log(objectIDs,"test");
    }).catch((error)=>{
        console.log(error.message);
    })
  },
  [bucle],
)




 



    


  return (
    <div>index</div>
  )
}