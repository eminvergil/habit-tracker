import React from 'react';
import {Text, View} from "react-native";
import {Overlay} from "react-native-elements";
import {useSnapshot} from "valtio";
import {overlayState} from "../../state/OverlayState";


let OverlayComponent = () => {
    const snap = useSnapshot(overlayState);

    function toggleOverlay() {
        overlayState.overlay = false
    }

    return (
        <View>
            <Overlay isVisible={snap.overlay} onBackdropPress={toggleOverlay}>
                <Text>Hello from overlay component</Text>
            </Overlay>
        </View>
    );

}

export default OverlayComponent;