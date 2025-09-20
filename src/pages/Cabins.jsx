import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useSearchParams } from "react-router-dom";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [searchParams] = useSearchParams();

  const paramsValue = searchParams.get("discount") || "all";

  let headerText;

  if (paramsValue === "all") headerText = "All cabins";
  if (paramsValue === "no-discount") headerText = "No-discount cabins";
  if (paramsValue === "with-discount") headerText = "Discounted cabins";

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{headerText}</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />

        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
