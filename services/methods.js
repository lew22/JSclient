
const endpoint = "localhost:8080/api"
//info debe ser asi
/*var info = {

        "nombre": nombre,
        "apellido": apellido,
        "opcion":opcion

};*/

////// METHODS GET
function requestGetAll(){

    var dataRequest = {
        method: 'GET',
        };
    fetch(endpoint, dataRequest).then(data => {
        return data.json();
        }).then(data => {
            console.log(data);
            
            }).catch(e => {
                console.log(e);
                });

    
}

function requestGetId(id){
    urlRequest = endpoint+`/${id}`;
    var dataRequest = {
        method: 'GET',
        };
    fetch(urlRequest, dataRequest).then(data => {
        return data.json();
        }).then(data => {
            console.log(data);
            
            }).catch(e => {
                console.log(e);
                });    
}
///////////


/////////////////METHOD POST
function createInfo(info) {
    
    
    urlRequest = endpoint;
    
    var dataRequest = {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(info), 
        };

        fetch(endpoint, dataRequest)
            .then(data => {
                if (!data.ok) {
                    throw Error(data.status);
                }
                return data.json();
                }).then(info => {
                console.log(info);


                }).catch(e => {
                console.log(e);
                });
}
//////


//////////////////METHOD PATH
function updateInfo(id, info) {
    
    
    urlRequest = endpoint+`/${id}`;
    
    var dataRequest = {
        method: 'PATCH',
        headers: {
            "Content-Type" : "application/json"
          },
        body: JSON.stringify(info), 
        };

        fetch(urlRequest, dataRequest)
            .then(response => {
                return response.json();
                    }).catch(e => {
                        console.log(e);
                        });

}
///////


//////METHOD DELETE
function deleteInfo(id){
    urlRequest = endpoint+`/${id}`;
    var dataRequest = {
        method: 'DELETE',
        };


    fetch(urlRequest, dataRequest).then( resp =>{
        console.log(resp);//this.requestGet(); // actualizar data
        }).catch(e => {
            console.log(e);
            });

}
//////////