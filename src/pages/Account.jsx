import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <div>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h2">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h2">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </div>
  );
}

export default Account;
