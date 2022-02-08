import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Box } from "./Theme";
import ButtonSize from "./ButtonSize";

interface CheckboxGroupProps {
  options: { value: string; label: string }[];
  radio?: boolean;
  hookFormData?: any;
  defaultSelected?: any;
  callback?: any;
}

const CheckboxGroup = ({
  options,
  radio,
  hookFormData,
  defaultSelected,
  callback,
}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([
    `${defaultSelected}`,
  ]);
  return (
    <Box flexDirection="row" >
      {options.map(({ label, value }) => {
        const index = selectedValues.indexOf(value);
        let isSelected = selectedValues.indexOf(value) !== -1;

        return (
          <ButtonSize
            key={value}
            variant={isSelected ? "primary" : "default"}
            onPress={() => {
              if (radio) {
                {
                  callback && callback(value);
                }
                setSelectedValues([value]);
                hookFormData && hookFormData(value);
              } else {
                if (isSelected) {
                  selectedValues.splice(index, 1);
                } else {
                  selectedValues.push(value);
                }
                setSelectedValues([...selectedValues]);
              }
            }}
            label={label}
          />
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  roundButton1: {
    width: 50,
    height: 50,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#2eb8b1",
  },
});

export default CheckboxGroup;
