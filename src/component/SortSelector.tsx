import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOrder = [
    { value: "", label: "Relevence" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const currentSortOrder = sortOrder.find(
    (sort) => sort.value === selectSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrder.map(({ value, label }) => (
          <MenuItem key={value} onClick={() => setSelectSortOrder(value)}>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
