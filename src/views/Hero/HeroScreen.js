import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  ImageBackground,
  TextInput,
} from "react-native";
import BottomSheet, {
  BottomSheetView,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { styles } from "./heroScreenStyle";
import Slider from "react-native-app-intro-slider";
import ItemRow from "../../components/Itens/ItemRow";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AttributeRow from "../../components/Attributes/AttributeRow";

export default function HeroScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const bottomSheetRef = useRef(BottomSheet);

  const [isOpen, setIsOpen] = useState(-1);

  const snapPoints = ["55%", "70%", "95%"];

  const handleSheetPress = useCallback((index) => {
    bottomSheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);

  const items = {
    item: {
      Sword: {
        image: require("../../../assets/Itens/Sword.jpeg"),
        damage: "+1",
        icon: "sword-cross",
      },

      Shield: {
        image: require("../../../assets/Itens/Shield.jpeg"),
        damage: "+1",
        icon: "shield-half-full",
      },

      LifeGem: {
        image: require("../../../assets/Itens/LifeGem.jpeg"),
        damage: "+1",
        icon: "heart",
      },

      Pet: {
        image: require("../../../assets/Itens/Pet.jpeg"),
        damage: "+1",
        icon: "sword-cross",
      },
    },
  };

  const [itemSelected, setItemSelected] = useState("");
  const [itemSelected2, setItemSelected2] = useState("");
  const [itemSelected3, setItemSelected3] = useState("");
  const [itemSelected4, setItemSelected4] = useState("");

  const [btnItem, setBtnItem] = useState(0);

  const slides = [
    {
      key: 1,
      title: "Guerreiro",
      image: require("../../../assets/Heroes/Guerreiro.jpeg"),
    },
    {
      key: 2,
      title: "Guerreira",
      image: require("../../../assets/Heroes/Guerreira.jpeg"),
    },
    {
      key: 3,
      title: "Mago",
      image: require("../../../assets/Heroes/Mago.jpeg"),
    },

    {
      key: 4,
      title: "Anão",
      image: require("../../../assets/Heroes/Anao.jpeg"),
    },
  ];

  function equipItem(equip) {
    if (btnItem == 1) {
      setItemSelected(equip);
    } else if (btnItem == 2) {
      setItemSelected2(equip);
    } else if (btnItem == 3) {
      setItemSelected3(equip);
    } else if (btnItem == 4) {
      setItemSelected4(equip);
    }
    console.log(equip);
  }

  function renderSlides({ item }) {
    return (
      <View style={styles.containerScroll}>
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "stretch",
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
          width: windowWidth,
          height: windowHeight,
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <TextInput style={styles.text} placeholder="HERÓI" />
        </View>

        <View style={styles.containerScroll}>
          <Slider
            renderItem={renderSlides}
            data={slides}
            activeDotStyle={{
              width: 0,
              backgroundColor: "#009CFF",
            }}
          />
        </View>

        <View style={styles.containerItem}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              handleSheetPress(0);
              setBtnItem(1);
            }}
            onLongPress={() => setItemSelected("")}
          >
            {/* <Text style={{ fontSize: 30, color: "white" }}>+</Text> */}
            <Image
              source={itemSelected}
              style={{
                margin: 5,
                width: "100%",
                height: "100%",
                borderRadius: 15,
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              handleSheetPress(0);
              setBtnItem(2);
            }}
            onLongPress={() => setItemSelected2("")}
          >
            {/* <Text style={{ fontSize: 30, color: "white" }}>+</Text> */}
            <Image
              source={itemSelected2}
              style={{
                margin: 5,
                width: "100%",
                height: "100%",
                borderRadius: 15,
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.containerSubItem}>
          <TouchableOpacity
            style={styles.subItem}
            onPress={() => {
              handleSheetPress(0);
              setBtnItem(3);
            }}
            onLongPress={() => setItemSelected3("")}
          >
            {/* <Text style={{ fontSize: 30, color: "white" }}>+</Text> */}
            <Image
              source={itemSelected3}
              style={{
                margin: 5,
                width: "100%",
                height: "100%",
                borderRadius: 15,
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subItem}
            onPress={() => {
              handleSheetPress(0);
              setBtnItem(4);
            }}
            onLongPress={() => setItemSelected4("")}
          >
            {/* {itemSelected4 == "" && (
              <Text
                style={{ fontSize: 30, color: "white", alignSelf: "" }}
              >
                +
              </Text>
            )} */}

            <Image
              source={itemSelected4}
              style={{
                margin: 5,
                width: "100%",
                height: "100%",
                borderRadius: 15,
                resizeMode: "cover",
              }}
            />
          </TouchableOpacity>
        </View>

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          onClose={() => setIsOpen(false)}
        >
          <BottomSheetScrollView style={styles.contentContainer}>
            <ItemRow equipItem={equipItem} item="Sword">
              <View>
                <Image
                  source={items.item.Sword["image"]}
                  style={{ width: 90, height: 90 }}
                />
              </View>

              <View
                style={{
                  marginLeft: 30,
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <Icon name="sword-cross" size={25} />
                <Text
                  style={{
                    height: 90,
                    flexWrap: "wrap",
                    fontSize: 25,
                    textAlignVertical: "center",
                  }}
                >
                  {items.item.Sword["damage"]}
                </Text>
              </View>
            </ItemRow>

            <ItemRow equipItem={equipItem} item="Shield">
              <View>
                <Image
                  source={items.item.Shield["image"]}
                  style={{ width: 90, height: 90 }}
                />
              </View>

              <View
                style={{
                  marginLeft: 30,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="shield-half-full" size={25} />
                <Text
                  style={{
                    height: 90,
                    flexWrap: "wrap",
                    fontSize: 25,
                    textAlignVertical: "center",
                  }}
                >
                  +1
                </Text>
              </View>
            </ItemRow>

            <ItemRow equipItem={equipItem} item="LifeGem">
              <View>
                <Image
                  source={items.item.LifeGem["image"]}
                  style={{ width: 90, height: 90 }}
                />
              </View>

              <View
                style={{
                  marginLeft: 30,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="heart" size={25} />
                <Text
                  style={{
                    height: 90,
                    flexWrap: "wrap",
                    fontSize: 25,
                    textAlignVertical: "center",
                  }}
                >
                  +9
                </Text>
              </View>
            </ItemRow>

            <ItemRow equipItem={equipItem} item="Pet">
              <View>
                <Image
                  source={items.item.Pet["image"]}
                  style={{ width: 90, height: 90 }}
                />
              </View>

              <View
                style={{
                  marginLeft: 30,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="sword-cross" size={25} />
                <Text
                  style={{
                    height: 90,
                    flexWrap: "wrap",
                    fontSize: 25,
                    textAlignVertical: "center",
                  }}
                >
                  +1
                </Text>
              </View>
            </ItemRow>
          </BottomSheetScrollView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
