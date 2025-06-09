import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { colors } from './util/color'
import Button from './button'
const calculators = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [firstValue, setfirstValue] = useState('0');
    const [operator, setOperator] = useState('');
    const handleNumberInput = (num: string) => {
        if (displayValue == '0') {
            setDisplayValue(num);
        } else {
            setDisplayValue(displayValue + num);
        }
    }
    const handleOperatorInput = (operator: string) => {
        setOperator(operator); 
        setfirstValue(displayValue);
        setDisplayValue('0');

    }

    const handleCalculation = () => {
        const num2 = parseFloat(displayValue);
        const num1 = parseFloat(firstValue);
        if (operator == '+') {
            setDisplayValue((num1 + num2).toString());
        }
        else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        }
        else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        }
        else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }
        else if (operator === '%') {
            setDisplayValue((num1 % num2).toString());
        }
        setfirstValue('');
        setOperator('')
    }
    const handleClear = () => {
        setDisplayValue('0');
        setOperator('');
        setfirstValue('')
    }
    const handleDelete = () => {
        if (displayValue.length === 1) {
            setDisplayValue('0');
        } else {
            setDisplayValue(displayValue.slice(0, -1));
        }
    }
    return (
        <View style={styles.containeur}>
            <View style={styles.display} >
                <Text style={{ fontSize: 30, fontWeight: '300' }} >{firstValue + operator}</Text>
                <Text style={{ fontSize: 70, fontWeight: '300' }}>{displayValue}</Text>
            </View>
            <View style={styles.keypad} >
                <Button title='C' type='top' onPress={handleClear} />
                <Button title='C' type='top' onPress={handleDelete} />
                <Button title='%' type='top' onPress={() => { handleOperatorInput('%') }} />
                <Button title='/' type='right' onPress={() => { handleOperatorInput('/') }} />
                <Button title='7' type='number' onPress={() => { handleNumberInput('7') }} />
                <Button title='8' type='number' onPress={() => { handleNumberInput('8') }} />
                <Button title='9' type='number' onPress={() => { handleNumberInput('9') }} />
                <Button title='X' type='right' onPress={() => { handleOperatorInput('*') }} />
                <Button title='6' type='number' onPress={() => { handleNumberInput('6') }} />
                <Button title='5' type='number' onPress={() => { handleNumberInput('5') }} />
                <Button title='4' type='number' onPress={() => { handleNumberInput('4') }} />
                <Button title='-' type='right' onPress={() => { handleOperatorInput('-') }} />
                <Button title='1' type='number' onPress={() => { handleNumberInput('1') }} />
                <Button title='2' type='number' onPress={() => { handleNumberInput('2') }} />
                <Button title='3' type='number' onPress={() => { handleNumberInput('3') }} />
                <Button title='+' type='right' onPress={() => { handleOperatorInput('+') }} />
                <Button title='0' type='number' onPress={() => { handleNumberInput('0') }} />
                <Button title='00' type='number' onPress={() => { handleNumberInput('00') }} />
                <Button title='.' type='number' onPress={() => { handleOperatorInput(',') }} />
                <Button title='=' type='right' onPress={handleCalculation} />
            </View>
        </View>
    );
}
export default calculators;
const styles = StyleSheet.create({
    containeur: {
        flex: 1
    },
    display: {
        flex: 1,
        backgroundColor: colors.gray,
        paddingVertical: 20,
        paddingHorizontal: 40,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    keypad: {
        flex: 2,
        backgroundColor: colors.light,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        padding: 30,
    }
})