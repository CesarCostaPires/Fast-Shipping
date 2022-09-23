import React, { useState } from "react";
import {ImageBackground,TextInput, Text, TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {RectButton} from 'react-native-gesture-handler'; 
import {useNavigation} from '@react-navigation/native'; 
import {BotaoCriar, BotaoLogin, CaixaTexto, ContainerLogin, TextoBotaoLogin, TextoCriar, ViewBotoes, ViewCaixas } from "../Style";
const image = { uri: "https://img.freepik.com/fotos-premium/a-textura-da-tela-preta-escura-para-a-imagem-do-design_99266-547.jpg?w=740" };

//const image = { uri: "https://img.freepik.com/vetores-gratis/copie-o-fundo-digital-dos-circuitos-azuis-do-espaco_23-2148821699.jpg?w=740&t=st=1661290825~exp=1661291425~hmac=9be0803ee93e7a7f5088d25a319edcccaee85e2fc534c09c856b363c7228f643" };
export default function Login(){
    let[senha, setSenha] = useState('');
    const navigation = useNavigation();

    function Logar(){
        if(senha == "Moto"){
            navigation.navigate('Motorista');
        }
        else if(senha == "Empresa"){
            navigation.navigate('Empresa');
        }
    }
    function goEmpresaMotorista(){
        navigation.navigate('EmpresaMotorista');
    }
    

    return(
        <ContainerLogin>
             <ImageBackground source={image} resizeMode="cover" style={styles.image}>
             <ViewCaixas>
                <CaixaTexto placeholder="Digite seu email"  CaixaTexto/>
                <CaixaTexto placeholder="Digite sua senha" onChangeText={setSenha} />
            </ViewCaixas>
            <ViewBotoes>
                <BotaoLogin onPress={Logar}>
                    <TextoBotaoLogin>Login</TextoBotaoLogin>
                </BotaoLogin>
                <BotaoCriar onPress={goEmpresaMotorista}>
                    <TextoCriar>Criar conta</TextoCriar>
                </BotaoCriar>
            </ViewBotoes>
            </ImageBackground>
        </ContainerLogin>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#135ced'
    },
    image: {
    flex:1,
    justifyContent: "center",
    width:"100%",
    alignItems: "center"
  },
    viewcaixas:{
        justifyContent:"space-around",
        width:'80%',
        alignContent:'center'
    },
    CaixaTexto:{
        
        height: 50,
        borderRadius:10,
        backgroundColor:'#f5f5f5',
        margin:10,
        width:'100%',
        color:'#135ced',
        fontSize:15,
        paddingLeft:20
        
    },
    botaoLogin:{
        backgroundColor:'#f5f5f5',
        padding:10,
        borderRadius:9,
        width:250,
        margin:5,
        alignSelf:'center'
    },
    textoBotaoLogin:{
        textAlign:'center'
    }
});

