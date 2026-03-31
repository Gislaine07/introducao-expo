import { View, Text, Image } from 'react-native'; 

import Card from "./card/index"
import styles from './styles';

import Branco from '../../../assets/camisas/brasilBranco.png';
import Preta from '../../../assets/camisas/brasilPreta.jpg';
import Listrada from '../../../assets/camisas/camisaListrada.png';
import camiseta from '../../../assets/camisas/camiseta.png';  

import Card from './card';

function Atividades02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividades02 </Text>

            <Card 
                titulo={'Camisa Branca e Preta'}
                descricao={'Camisa com listras largas, modelo 2024.'}
                preco={'R$350,00'}
                img={Branco}
            /> 

            <Card 
                titulo={'Camisa Preta'}
                descricao={'Camisa preta sem listras, modelo 2024.'}
                preco={'R$380,00'}
                img={Preta}
            />

            <Card 
                titulo={'Camisa Listrada'}
                descricao={'Camisa com listras, modelo clássico.'}
                preco={'R$280,00'}
                img={Listrada}
            />
            
            <Card 
                titulo={'Camisa São Jorge'}
                descricao={'Camisa modelo 2012.'}
                preco={'R$550,00'}
                img={camiseta}
            />
        </View>
    );
}

export default Atividades02;