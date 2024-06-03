import { FlatList, StyleSheet, View } from "react-native";

import { CustomText } from "./CustomText";
import { ListItemProps } from "../types/props/ListItemProps";
import { COLORS } from "../utils/constants";

const listStyles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: COLORS.GRAY_CONTRAST,
    padding: 24,
    marginHorizontal: 12,
    borderRadius: 24,
  },
  separator: {
    height: 18,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "stretch",
    backgroundColor: COLORS.PLAIN_WHITE,
    borderRadius: 24,
  },
});

const items = [
  { id: "1", title: "asda" },
  { id: "123", title: "dasa" },
  { id: "3", title: "asdsa" },
  { id: "4", title: "daaasdsa" },
  { id: "5", title: "w123aasd" },
  { id: "6", title: "sad112" },
  { id: "7", title: "asdds11" },
  { id: "8", title: "aa2223d" },
  { id: "9", title: "ddsa12" },
  { id: "12", title: "asd554" },
  { id: "13", title: "asd123" },
  { id: "14", title: "asdsa" },
  { id: "15", title: "1233adsa" },
  { id: "16", title: "asdad43555" },
  { id: "17", title: "asd1123123" },
  { id: "18", title: "adsa11" },
  { id: "19", title: "asd1aaasss223" },
];

const ListItem = ({ title, style }: ListItemProps) => (
  <View style={[listStyles.listItemContainer, style]}>
    <CustomText>{title}</CustomText>
  </View>
);

const Separator = () => <View style={listStyles.separator} />;

const ItemsList = () => {
  const setMarginTopIfFirstIndex = (index: number) => {
    return index === 0 ? 24 : 0;
  };

  const setMarginBottomIfLastIndex = (index: number, itemsCount: number) => {
    return itemsCount - 1 === index ? 24 : 0;
  };

  return (
    <View style={listStyles.listContainer}>
      <FlatList
        ItemSeparatorComponent={Separator}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            style={{
              marginTop: setMarginTopIfFirstIndex(index),
              marginBottom: setMarginBottomIfLastIndex(index, items.length),
            }}
          />
        )}
        data={items}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ItemsList;
