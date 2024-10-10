import React from 'react';
import { SafeAreaView, View, StyleSheet, Button } from 'react-native';
import {
  LinkBridge,
  PlaceholderBridge,
  RichText,
  TenTapStartKit,
  useEditorBridge,
  DropCursorBridge,
} from '@10play/tentap-editor';

export const ConfigureExtensions = () => {
  const [hideContent, setHideContent] = React.useState(false);
  const editor = useEditorBridge({
    autofocus: true,
    avoidIosKeyboard: true,
    bridgeExtensions: [
      ...TenTapStartKit,
      PlaceholderBridge.configureExtension({
        placeholder: 'Hey there! Start typing...',
      }),
      LinkBridge.configureExtension({ openOnClick: false }),
      DropCursorBridge.configureExtension({
        color: '#84affe',
        width: 2,
      }),
    ],
  });

  return (
    <SafeAreaView style={exampleStyles.fullScreen}>
      <View>
        <Button
          title="Toggle Content"
          onPress={() => {
            editor.setContent(
              hideContent
                ? ''
                : `<a href="https://10play.github.io/10tap-editor">Link To TenTap!</a>
            <p>Try to drag around the image. While you drag, the editor should show a decoration under your cursor. The so called dropcursor.</p></br>
            <img src="https://www.shutterstock.com/image-vector/touch-typing-scheme-isolated-vector-600nw-357707423.jpg" /></br>
            <p>Drag Me Here</p></br></br></br></br></br><p>Or Here</p>`
            );
            setHideContent(!hideContent);
          }}
        />
      </View>
      <View style={exampleStyles.fullScreen}>
        <RichText editor={editor} />
      </View>
    </SafeAreaView>
  );
};

const exampleStyles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  keyboardAvoidingView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
});
