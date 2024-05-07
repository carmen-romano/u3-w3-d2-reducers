import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsFetchAction } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.getJobs.content);

  useEffect(() => {
    dispatch(getJobsFetchAction(params.company));
  }, [dispatch, params.company]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs?.data?.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
