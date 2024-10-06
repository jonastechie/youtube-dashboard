import React from "react";
import { FlatList, Text, useWindowDimensions } from "react-native";
import { useInfiniteQuery } from "react-query";
import VideoCard from "./VideoCard";

const API_KEY = process.env.API_KEY;

const fetchVideos = async ({ pageParam = "" }) => {
  const urlToFetch = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=programming&key=${API_KEY}&pageToken=${pageParam}`;
  const data = await (await fetch(urlToFetch)).json();
  return data;
};

const VideoGrid = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("youtubeVideos", fetchVideos, {
      getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
    });

  const windowSize = useWindowDimensions();
  const minWidth = 350;
  const numColumns =
    Math.floor(windowSize.width / minWidth) > 4
      ? 4
      : Math.floor(windowSize.width / minWidth);

  const videoItemWidth = windowSize.width / numColumns - 20;
  const videos = data?.pages.flatMap((page) => page.items) || [];

  const renderItem = ({ item }) => (
    <VideoCard video={item} width={videoItemWidth} />
  );

  return (
    <FlatList
      data={videos}
      renderItem={renderItem}
      keyExtractor={(item) => item?.id?.videoId}
      numColumns={numColumns}
      key={numColumns}
      onEndReached={() => {
        if (hasNextPage) {
          fetchNextPage();
          console.log("Reached end of list, loading more...");
        }
      }}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetchingNextPage ? <Text>Loading more...</Text> : null
      }
    />
  );
};

export default VideoGrid;
