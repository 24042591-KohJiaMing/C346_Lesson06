import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import Places from './components/Places';
import { styles } from './components/Styles';

export default function App() {
    const quizData = [
        {
            image: require('./img/Japan.jpg'),
            correctAnswer: 'Japan',
            options: ['Japan', 'Korea', 'Thailand']
        },
        {
            image: require('./img/Paris.jpg'),
            correctAnswer: 'France',
            options: ['France', 'Italy', 'Spain']
        },
        {
            image: require('./img/China.jpg'),
            correctAnswer: 'China',
            options: ['China', 'Malaysia', 'Indonesia']
        }
    ];

    const [answers, setAnswers] = useState(Array(quizData.length).fill(''));

    const handleSelect = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let total = 0;
        quizData.forEach((q, i) => {
            if (answers[i] === q.correctAnswer) total++;
        });

        Alert.alert('Quiz Result', `You got ${total} out of ${quizData.length} correct!`);
    };

    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView>
                <Text style={styles.header}>Places of Interest Quiz</Text>

                {quizData.map((question, index) => (
                    <View key={index} style={{ marginBottom: 30 }}>
                        <Places
                            image={question.image}
                            options={question.options}
                            selectedAnswer={answers[index]}
                            onSelect={(value) => handleSelect(index, value)}
                        />
                    </View>
                ))}

                <Button title="Submit" onPress={handleSubmit} />
            </ScrollView>
        </View>
    );
}
