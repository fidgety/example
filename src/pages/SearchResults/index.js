import { connect } from "react-redux";
import SearchResults from "containers/SearchResults";

import { get, remove } from "store/actionCreators/detail";

const mapStateToProps = ({ results, detail, detailLoading }) => ({
  results,
  detail,
  detailLoading
});

const mapDispatchToProps = dispatch => ({
  onItemClicked: productId => dispatch(get(productId)),
  onItemClosed: () => dispatch(remove())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
