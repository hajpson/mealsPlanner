import { FlatList, View, Text } from "react-native";
import { ListItemProps } from "../types/ListItemProps";
import { CustomText } from "./CustomText";
import { styles } from "../utils/styles";

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
  <View style={[styles.listItemContainer, style]}>
    <CustomText>{title}</CustomText>
  </View>
);

const Separator = () => <View style={styles.separator}></View>;

const ItemsList = () => {
  const setMarginTopIfFirstIndex = (index: number) => {
    return index === 0 ? 24 : 0;
  };

  const setMarginBottomIfLastIndex = (index: number, itemsCount: number) => {
    return itemsCount - 1 === index ? 24 : 0;
  };

  return (
    <View style={styles.listContainer}>
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
