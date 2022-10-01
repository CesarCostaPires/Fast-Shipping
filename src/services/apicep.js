import axios from "axios";

const apicep = axios.create({
    baseURL:'https://viacep.com.br/ws/${this.state.cep}/json/'
});

export default apicep;
