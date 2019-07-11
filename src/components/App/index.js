import React from "react";
import { connect } from "react-redux";
import { getAllUsers, getUserDetails } from "../../redux/action-creators";

class App extends React.Component {
  componentDidMount() {
    this.props.getAll();
  }

  render() {
    const { list, isLoading, error } = this.props.userList;
    const { details, error: detailsError, isLoading: detailsLoading } = this.props.userDetails;
    const { getDetail } = this.props;
    return (
      <div className="container">
        {isLoading && <div>Loading ...</div>}
        {!isLoading &&
          <div>
            {error && <div style={{ color: "red" }}>Oops... Something went wrong!</div>}
            {list.length > 0 &&
              <table>
                <thead>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Image</th>
                </thead>
                <tbody>
                  {list.map((user) => {
                    return (
                      <tr key={user.id} onClick={() => getDetail(user.login)}>
                        <td>{user.id}</td>
                        <td>{user.login}</td>
                        <td><img src={user.avatar_url} alt={user.login} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            }
          </div>
        }

        <div className="details">
          {detailsLoading && <div>loading details...</div>}
          {!detailsLoading &&
            <div>
              {detailsError && <div style={{ color: "red" }}>Fetch details error!</div>}
              {details.name &&
                <div>
                  <div>name: {details.name}</div>
                  <div>location: {details.location}</div>
                </div>
              }
            </div>
          }
        </div>

      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    userList: state.userList,
    userDetails: state.userDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAll: () => {
      dispatch(getAllUsers());
    },
    getDetail: (login) => {
      dispatch(getUserDetails(login));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
