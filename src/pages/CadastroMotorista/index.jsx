import React, { useState } from "react";
import { useNavigation} from '@react-navigation/native'; 
import {ImageBackground,TouchableOpacity, StyleSheet, Text, Alert, Keyboard} from 'react-native';
import { CampoMedio, Botao, TextoBotao, CampoGrande, CampoPequeno, Scrollzinho, ContainerCadastro, TituloMotorista, TituloEntregas, TextoDadosMotorista, ViewCadastro, ViewCep, BotaoCep } from "../Style";
import api from "../../services/api";
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };


export default function CadastroMotorista(){
    let [nomeMotorista, setNome] = useState();
    let [cpfCnpj, setCpfCnpj] = useState();
    let [rgMoto, setRg] = useState();
    let [cnhMoto, setCnh] = useState();
    let [enderecoMotorista, setEndereco] = useState();
    let [numMotorista, setNum] = useState();
    let [bairroMotorista, setBairro] = useState();
    let [cidadeMotorista, setCidade] = useState();
    let [cepMotorista, setCep] = useState();
    let [estadoMotorista, setEstado] = useState();
    let [contatoMotorista, setContato] = useState();
    let [emailMotorista, setEmail] = useState();
    let [classMoto, setClas] = useState('0,0');

    async function CadastrarUsuario(){
        console.log("clicou");

        let response = await api.post('cadastro-motorista.php', {
            nome: nomeMotorista,
            cpf: cpfCnpj,
            rg: rgMoto,
            cnh: cnhMoto,
            endereco: enderecoMotorista,
            num: numMotorista,
            bairro: bairroMotorista,
            cidade: cidadeMotorista,
            cep: cepMotorista,
            estado: estadoMotorista,
            contato: contatoMotorista,
            email: emailMotorista,
            class: classMoto,
            
        }).then(function(response){Alert.alert("Usuario cadastrado com sucesso!");
    console.log(response);
        }).catch(function(error){
            Alert.alert("Erro ao cadastrar,tente mais tarde!");
            console.log(error);
        });
        navigation.navigate('CadastroVeiculo');
    }
    const navigation = useNavigation()
    
    
    return(
        <ContainerCadastro>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <ViewCadastro>
                <Scrollzinho showsVerticalScrollIndicator={false}>
                    <TituloEntregas>Seu cadastro</TituloEntregas>
                    <TextoDadosMotorista>Nome completo:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Ana Maria" onChangeText={setNome}/>
                    <TextoDadosMotorista>CPF:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 000.000.000-00" onChangeText={setCpfCnpj}/>
                    <TextoDadosMotorista>RG:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: 00.000.000-0" onChangeText={setRg}/>
                    <TextoDadosMotorista>CNH:</TextoDadosMotorista>
                    <CampoMedio placeholder="000000000" onChangeText={setCnh}/>
                    <TextoDadosMotorista>Endereço:</TextoDadosMotorista>
                    <CampoGrande placeholder="Ex: Avenida Elisío Cordeiro de Siquiera" onChangeText={setEndereco}/>
                    <TextoDadosMotorista>Numero:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 628"onChangeText={setNum}/>
                    <TextoDadosMotorista>Bairro:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: Jardim Santo Elías"onChangeText={setBairro}/>
                    <TextoDadosMotorista>Cidade:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: São Paulo"onChangeText={setCidade}/>
                    <TextoDadosMotorista>CEP:</TextoDadosMotorista>
                    <CampoPequeno placeholder="Ex: 00000-000"onChangeText={setCep}/>
                    <TextoDadosMotorista>Estado:</TextoDadosMotorista>
                    <CampoPequeno placeholder="São Paulo"onChangeText={setEstado}/>
                    <TextoDadosMotorista>Contato:</TextoDadosMotorista>
                    <CampoMedio placeholder="0000000-0000"onChangeText={setContato}/>
                    <TextoDadosMotorista>E-mail:</TextoDadosMotorista>
                    <CampoMedio placeholder="Ex: anamaria@gmail.com"onChangeText={setEmail}/>
                   
                    <Botao onPress={CadastrarUsuario}><TextoBotao>Cadastrar</TextoBotao></Botao>
                </Scrollzinho>
            </ViewCadastro>
            </ImageBackground>
        </ContainerCadastro>
    );
}
const styles = StyleSheet.create({
    
    image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
      },
      image: {
        flex:1,
        justifyContent: "center",
        width:"100%",
        alignItems: "center"
      
    },

      TextoDadosMotorista:{
        
            backgroundColor:'#F8F8FF',
            color:'#F8F8FF',
            textAlign:'center'
}});
