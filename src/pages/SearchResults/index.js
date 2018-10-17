import { connect } from "react-redux";
import SearchResults from "containers/SearchResults";

import { get, remove } from "store/actionCreators/detail";

const mapStateToProps = ({ results, detail }) => ({
  results,
  detail
});

const mapDispatchToProps = dispatch => ({
  onItemClicked: productId => dispatch(get(productId)),
  onItemClosed: () => dispatch(remove())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
