import { Colors } from '@/styles/Colors';
import { Link, Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function NotFoundScreen() {
  console.log("not found")
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <SafeAreaView style={styles.container}>
        <Text type="title">This screen doesn't exist.</Text>
        <Link href="/login" style={styles.link}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor:Colors.bg
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
