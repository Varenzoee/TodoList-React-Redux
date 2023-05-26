import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";

import { VISIBILITY_FILTER } from "../constants";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

export const VisibilityFilter = () => {
  const dispatch = useDispatch();
  return (
    <Container centerContent py={4}>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              <Tab
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </Tab>
            );
          })}
        </TabList>
      </Tabs>
    </Container>
  );
};
