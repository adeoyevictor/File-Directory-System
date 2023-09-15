import { Select } from "@mantine/core";
import SortSvg from '../../assets/Sort'
import AppContext from "../../context/AppContext";
import {useContext} from 'react'

export default function Sort() {
const appContext = useContext(AppContext)
  return (
    <Select
      value={appContext?.sortValue || ''}
      onChange={appContext?.setSortValue}
      placeholder="Sort"
      size="sm"
      rightSection={<SortSvg />}
      styles={{ rightSection: { pointerEvents: 'none' },  }}
      data={[
        { value: "name", label: "By name" },
        { value: "time", label: "By time created" },
      ]}

    />
  );
}
