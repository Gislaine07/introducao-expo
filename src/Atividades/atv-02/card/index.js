import { View, Text, Image } from 'react-native'; 

import styles from './styles';

function Card({titulo, descricao, preco, img }) {
    return(
        <View style={styles.container}>
            <Image source={img} style={styles.imagem}/>
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensagem}>{descricao}</Text>
            <Text style={styles.mensagem}>{preco}</Text>
            
        </View>
    );
}

export default Card;