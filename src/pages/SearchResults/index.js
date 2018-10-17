import { connect } from "react-redux";
import SearchResults from "containers/SearchResults";

import { get, remove } from "store/actionCreators/detail";

const mapStateToProps = ({ results, result }) => ({
  results,
  result
});

const mapDispatchToProps = dispatch => ({
  onItemClicked: productId => dispatch(get(productId)),
  onItemClosed: () => dispatch(remove())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
