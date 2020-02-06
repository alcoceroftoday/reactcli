export default class Service {

  public GetData(type:string,id?:string):[string,any] {
    let url:string='http://ec2-35-174-153-145.compute-1.amazonaws.com/api/';
    let consulta:string= id ? url+type.toLocaleLowerCase()+'/'+id : url+type.toLocaleLowerCase();
    // let resp:Object="";
    let resp=fetch(consulta)
      .then(result=>{ //console.log(result);
         return result.json()}
        )
      // // .then( //result => console.log(result)
      // // result=>this.setState({
      // //   done: true,
      // //    :result
      // // })
      // // )
      // .then(data=>{return data})
      return [type,resp];
  }
}

// // if(!idconsulta){
//   let consulta='http://ec2-35-174-153-145.compute-1.amazonaws.com/api/'+typeShare;
//   
// // }else{
// // let consulta='http://ec2-35-174-153-145.compute-1.amazonaws.com/api/'+typeShare+'/'+idconsulta;
// // fetch(consulta)
// // .then(result=>result.json())
// // .then( //result => console.log(result)
// // result=>this.setState({
// //   done: true,
// //   items:result.albums
// // })
// // // // result => respuesta=result
// // )
// // }