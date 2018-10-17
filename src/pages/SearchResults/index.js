import { connect } from "react-redux";
import SearchResults from "containers/SearchResults";

const mapStateToProps = ({ results }) => ({
  results
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
