import { Button, ButtonGroup } from "react-bootstrap";

export function Main() {
  // The logic should be if the user is signed in
  // then shows another thing
  return (
    <>
      <h1 className="text-center mt-4">Sign up today!</h1>
      <div className="text-center mt-3">
        <ButtonGroup vertical>
          <Button className="p-5 mb-2" variant="dark">
            Sign Up
          </Button>
          <Button className="p-5" variant="dark">
            Log in
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
