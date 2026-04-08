import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade04() {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState(''); 
    const [nomeCompleto, setNomeCompleto] = useState(''); 

    function handleExibeNome() {
        setNomeCompleto(`${nome} ${sobrenome}`);
        setNome('');
        setSobrenome('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade04</Text>

            <Text style={styles.txt}>{nomeCompleto}</Text>

            <TextInput
                onChangeText={setNome}
                placeholder={nome}
                keyboardType='nome'
                maxLength={10}
                style={styles.input}
            />
            <TextInput 
                onChangeText={setSobrenome}
                value= {sobrenome}
                placeholder= 'sobrenome'               
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeNome()}
            >
                <Text style={styles.txtBotao}>Exibir nome completo</Text>
            </TouchableOpacity> 

        </View>
    );
}

export default Atividade04;




