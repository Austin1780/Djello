import { connect } from "react-redux";
import App from "../components/App";

const mapStateToProps = state => ({
  user: { id: 1, username: "example user" },
  boards: []
});

const mapDispatchToProps = dispatch => ({});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
