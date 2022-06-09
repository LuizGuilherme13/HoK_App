import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Dimensions,
} from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import ItemRow from "../components/ItemRow";
import Slider from "react-native-app-intro-slider";
import { styles } from "../../styles/homeScreenStyle";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function HomeScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const bottomSheetRef = useRef(BottomSheet);

  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["55%", "70%", "95%"];

  const handleSheetPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const slides = [
    {
      key: 1,
      title: "Guerreiro",
      image: require("../../assets/Guerreiro.jpeg"),
    },
    {
      key: 2,
      title: "Guerreira",
      image: require("../../assets/Guerreira.jpeg"),
    },
    {
      key: 3,
      title: "Mago",
      image: require("../../assets/Mago.jpeg"),
    },

    {
      key: 4,
      title: "Anão",
      image: require("../../assets/Anao.jpeg"),
    },
  ];

  function renderSlides({ item }) {
    return (
      <View style={styles.containerScroll}>
        <Image
          source={item.image}
          style={{
            resizeMode: "stretch",
            height: "100%",
            width: "100%",
          }}
        />
        <Text>{item.title}</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView
        style={{
          alignItems: "center",
          width: windowWidth,
          height: windowHeight,
        }}
      >
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={styles.text}>HERÓI</Text>
        </View>

        <View style={styles.containerScroll}>
          <Slider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
              backgroundColor: "#009CFF",
              width: 0,
            }}
          />
        </View>

        <View style={styles.containerItem}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleSheetPress(0)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerSubItem}>
          <TouchableOpacity style={styles.subItem}>
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subItem}>
            <Text style={{ fontSize: 30, color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetScrollView style={styles.contentContainer}>
            <ItemRow color="yellow">
              <View>
                <Image
                  source={require("../../assets/ItemSword.png")}
                  style={{ width: 90, height: 90 }}
                />
              </View>
              <View style={{ marginLeft: 60 }}>
                <Text
                  style={{
                    width: 180,
                    height: 90,
                    flexWrap: "wrap",
                    backgroundColor: "gray",
                  }}
                >
                  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                </Text>
              </View>
            </ItemRow>
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
