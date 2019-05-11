import React from "react";
import Downshift, { ControllerStateAndHelpers } from "downshift";
import { IIngredient } from "../../recipe/types/ingredient";
import { DropdownList } from "./list";

export function SearchableDropdown({
  items,
  onSelect,
  onChange,
  itemToString,
}: {
  items: IIngredient[];
  onSelect: (selected: IIngredient) => void;
  onChange: (value: string) => void;
  itemToString: (item: IIngredient) => string;
}) {
  return (
    <Downshift
      onChange={onSelect}
      itemToString={itemToString}
      onInputValueChange={onChange}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem
      }: ControllerStateAndHelpers<IIngredient>) => (
        <div>
          <input {...getInputProps()} />
          <DropdownList isOpen={isOpen} getMenuProps={getMenuProps}>
            {items
              .filter(item => !inputValue || item.title.includes(inputValue))
              .map((item, index) => (
                <li
                  key={item.id}
                  {...getItemProps({
                    index,
                    item
                  })}
                >
                  {item.title}
                </li>
              ))}
          </DropdownList>
        </div>
      )}
    </Downshift>
  );
}
