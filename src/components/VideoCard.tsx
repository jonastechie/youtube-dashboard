import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface VideoCardProps {
  video: any;
  width: number;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, width }) => {
  const { thumbnails, title, channelTitle, publishedAt } = video?.snippet;
  const views = Math.floor(Math.random() * 10) + "M"; // Mocking views for now

  return (
    <View style={[styles.videoItem, { width }]}>
      <Image source={{ uri: thumbnails.medium.url }} style={styles.thumbnail} />
      <View style={styles.cardBottomContainer}>
        <Image
          source={{ uri: thumbnails.default.url }}
          style={styles.uploaderIcon}
        />
        <View style={styles.cardDetailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.categories}>{channelTitle}</Text>
          <Text style={styles.viewsAndDate}>
            {`${views} views, ${new Date(publishedAt).toLocaleDateString()}`}
          </Text>
          <Text style={styles.liveNow}>LIVE NOW</Text>
        </View>
      </View>
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  videoItem: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  thumbnail: {
    width: "100%",
    height: 150,
  },
  cardBottomContainer: {
    flexDirection: "row",
    padding: 10,
  },
  uploaderIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardDetailsContainer: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categories: {
    color: "#888",
    fontSize: 12,
  },
  viewsAndDate: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },
  liveNow: {
    color: "red",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 4,
  },
});
