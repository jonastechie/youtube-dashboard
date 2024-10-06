import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { View } from "react-native";
import VideoGrid from "./components/VideoGrid";
import styles from "./styles/styles";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <View style={styles.container}>
      <VideoGrid />
    </View>
  </QueryClientProvider>
);

export default App;
