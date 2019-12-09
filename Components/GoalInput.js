import React, {useState} from 'react'
import {View, Button, StyleSheet, TextInput, Modal} from 'react-native'
 
const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }; 

    const removeGoalHandler = goalId => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter(goal => goal.id !== goalId);
      });
    };

    const cancelGoalAdditionHandler = () => {
      setIsAddMode()
    };

    return(    
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder="Muffami Goal"
            style={styles.myinput}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCancel}/>
            </View>
            <View style={styles.button}>
              <Button title='ADD' onPress={addGoalHandler}/>
            </View>
          </View>
        </View>
      </Modal>

  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center'
    },   
    myinput: {
      width: '80%', 
      borderColor: 'black', 
      borderWidth: 1, 
      padding: 10,
      marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: "60%"
  },
  button: {
    width: "40%"
  }
});


export default GoalInput;