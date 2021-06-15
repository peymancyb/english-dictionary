import { useContext } from "react"
import { StoreContext } from "../components/StoreProvider"

export const useStore = () => {
  return useContext(StoreContext);
}