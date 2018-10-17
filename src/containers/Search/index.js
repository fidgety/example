import React from "react";
import { func } from "prop-types";
import { history as historyPropType } from "react-router-prop-types";
import styled from "styled-components";

import { primary, disabled, background, border } from "styles/colors";

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
`;

const Input = styled.input`
  font-size: 2rem;
  padding: 0.7rem;
  &::placeholder {
    color: ${disabled};
  }
`;

const Button = styled.input`
  background: ${primary};
  font-size: 2rem;
  padding: 0.7rem;
  transition: all linear 0.3s;
  &:disabled {
    background: ${disabled};
  }
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  ${background};
  ${border};
  padding: 2rem;
`;

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  render() {
    const { search } = this.state;
    const { onSearch, history } = this.props;

    return (
      <Container>
        <Form
          onSubmit={e => {
            e.preventDefault();
            onSearch(search);
            history.push(`/search/${search}`); // this makes me sad
          }}
        >
          <Input
            placeholder="Search term"
            type="text"
            name="search"
            value={search}
            onChange={e =>
              this.setState({
                search: e.target.value
              })
            }
          />
          <Button
            type="submit"
            value="Find me cards!"
            disabled={search.length < 3}
          />
        </Form>
      </Container>
    );
  }
}

Search.propTypes = {
  onSearch: func.isRequired,
  history: historyPropType.isRequired
};

export default Search;
