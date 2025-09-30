import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import BookingTableOperations from "../features/bookings/BookingTableOperations";
import { useSearchParams } from "react-router-dom";

function Bookings() {
  const [searchParams] = useSearchParams();
  const paramsValue = searchParams.get("status") || "all";

  let headerText;

  if (paramsValue === "all") headerText = "All bookings";
  if (paramsValue === "checked-out") headerText = "Checked out bookings";
  if (paramsValue === "checked-in") headerText = "Checked in bookings";
  if (paramsValue === "unconfirmed") headerText = "Unconfirmed bookings";

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">{headerText}</Heading>
        <BookingTableOperations />
      </Row>

      <BookingTable />
    </>
  );
}

export default Bookings;
