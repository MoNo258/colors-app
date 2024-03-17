import Button, { ButtonProps } from "@mui/material/Button";
import * as React from "react";
import { useNavigate } from "react-router-dom";

// export const NotFoundStyled = styled.div`
//   padding: 2rem;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   & .header.notFound_header {
//     font-size: 100px;
//     font-weight: bold;
//   }
//   & .notFound_desc {
//     font-size: 30px;
//     font-weight: bold;
//   }
// `;

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const visitHomepage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    data: ButtonProps
  ) => {
    navigate(`/`);
  };
  return (
    <div className="notFound">
      {/* <Header as="h1" color="blue" className="notFound_header">
        OOPS...
      </Header> */}
      <p className="notFound_desc">
        We can't find the page you're looking for.
      </p>
      {/* <Button
            title="Visit homepage"
            color="primary"
            onClick={(e, data) => visitHomepage(e, data)}
      /> */}
      <Button>Visit homepage</Button>
    </div>
  );
};

export default NotFound;
