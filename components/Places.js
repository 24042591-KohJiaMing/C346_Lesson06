import { Text, View, Image } from 'react-native';
import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { styles } from './Styles';

const Places = ({ image, options, selectedAnswer, onSelect }) => {
    return (
        <View>
            <Image source={image} style={{ width: 400, height: 400 }} />
            <Text style={styles.question}>Where is this Place of Interest?</Text>

            <Picker
                selectedValue={selectedAnswer}
                onValueChange={(value) => onSelect(value)}
            >
                <Picker.Item label="Select an answer..." value="" />
                {options.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

export default Places;
