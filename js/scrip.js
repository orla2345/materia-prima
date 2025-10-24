window.onload= ()=>{
    let txtnombre = document.getElementById("nombre")
    let nombreCliente = document.querySelector("#nombreCliente")
    let form = document.querySelector("#form")
    let arr =[]
    
    let tabladeprecios =[
        { id:1,material:"Acero inoxidable",precio: 2000.50 },
        { id:2,material:"Plástico ABS",precio: 10.50 },
        { id:3,material:"Aluminio",precio: 30.50 },
        { id:4,material:"Cobre",precio: 60.50 },
    ]


    txtnombre.addEventListener("keyup",()=>{
       nombreCliente.innerHTML= "Nombre del Cliente: "+txtnombre.value

    })
    form.addEventListener("submit",()=>{
        event.preventDefault()//evita recargarla pagina 
        let material = document.querySelector("#material")
         let cantidad = document.querySelector("#cantidad")
          let fecha = document.querySelector("#fecha")
           let observaciones = document.querySelector("#observaciones")
           let precio = tabladeprecios.find(item=>item.material== material.value)
           arr.push({
            id:arr.length +1,
            material:material.value,
            cantidad:cantidad.value,
            fecha:fecha.value,
            observaciones:observaciones.value,
            subtotal:precio.precio * parseint(cantidad.value)
           })
           imprimirtabla()
           localStorage.setItem("pedido",JSON.stringify(arr))

           })
           const imprimirtabla=()=>{
            var trs=""
            var total = 0
            arr.forEach(item=>{
                total+=item.subtotal
                trs+=` <tr>
                        <td>${item.id}</td>
                        <td>${item.material}</td>
                        <td> <input  value="${item.cantidad}"type="number"/></td>
                        <td>${item.fecha}</td>
                        <td>${item.observaciones}</td>
                        <td>${item.subtotal.toFixed(2)}</td>
                      
                    </tr>`
            })
            document.querySelector("tbody").innerHTML=trs
            document.querySelector("tdtotal").innerHTML=`<b>${total.toFixed(2)}<b>`


           }
           if(localStorage.getItem("pedido")){
        arr= JSON.parse(localStorage.getItem("pedido"))
        imprimirtabla()
    }
    }
               