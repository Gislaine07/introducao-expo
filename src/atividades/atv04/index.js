import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [nomeCompleto, setNomeCompleto] = useState('Inserir nome e sobrenome');
    const [nome, setNome] = useState(''); 
    const [sobrenome, setSobrenome] = useState(''); 

    function handleExibeNomeCompleto() {
        setNomeCompleto('${nome} ${sobrenome}');
        setNome('');
        setSobrenome('');
    }
xxxx
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade04</Text>

            <Text style={styles.txt}>{texto}</Text>

            <TextInput
                onChangeText={setNome}
                placeholder='texto de fundo'
                keyboardType='ascii-capable'
                // editable={false}
                // multiline
                // numberOfLines={4}
                maxLength={7}
                // secureTextEntry 
                style={styles.input}
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                value={txt2} 
                onChangeText={setTxt2}
                placeholder='digite sua mensagem'
                keyboardType='ascii-capable'                
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </TouchableOpacity> 

        </View>
    );
}


