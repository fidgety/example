import { connect } from "react-redux";
import Search from "containers/Search";

import search from "store/actionCreators/search";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch(search(searchTerm))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
