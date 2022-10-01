import axios from "axios";

const apicep = axios.create({
    baseURL:'https://viacep.com.br/ws/${this.state.cep}/json/'
});

export default apicep;

 //buscarCep = () => {
   //Axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
      //.then(response => {
       // this.setState({ item: response.data })
        //console.log(response.data)
     // })
      //.catch(error => {
       // return console.log(error);
      //})
