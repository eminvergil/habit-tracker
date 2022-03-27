import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {Button, Input, Overlay} from "react-native-elements";
import {useSnapshot} from "valtio";
import {overlayState} from "../../state/OverlayState";
import {habitIdState, habitListState} from "../../state/HabitState";
import {HabitDomain} from "../../domain/HabitDomain";


let OverlayComponent = () => {
    const overlaySnap = useSnapshot(overlayState)
    const habitIdSnap = useSnapshot(habitIdState)
    const habitListSnap = useSnapshot(habitListState)

    // @ts-ignore
    let selectedHabit: HabitDomain = habitListSnap.habitList.find(x => {
        // @ts-ignore
        return x.Id == habitIdSnap.id;
    })

    function toggleOverlay() {
        overlayState.overlay = false
    }
    // @ts-ignore
    return (
        <View>
            <Overlay isVisible={overlaySnap.overlay} onBackdropPress={toggleOverlay}>
                <View style={styles.overlay}>
                    <Text>{selectedHabit?.Name ?? ""}</Text>
                    <Input placeholder="set your goal" />
                    <View style={styles.row}>
                        <Button title="Start" containerStyle={{margin: 20}} />
                        <Button title="Edit"  containerStyle={{margin: 20}} />
                    </View>
                </View>
            </Overlay>
        </View>
    );

}

export default OverlayComponent;


const styles = StyleSheet.create(
    {
        // container: {
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     width: '100%'
        // },
        overlay: {
            alignItems: 'center',
            justifyContent: 'center',
            margin: 30,
            minHeight: "50vh"
        },
        button: {
            margin: 20,
            width: "10rem !important"
        },
        row: {
            flex:1,
            flexDirection: "row"
        }
    });
