import { h, Component } from 'preact';
import { PageContainer, Button } from './index.styles';

export default class Profile extends Component {
  state = {
    time: Date.now(),
    count: 10,
  };

  // Update the current time
  updateTime = () => {
    this.setState({ time: Date.now() });
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Gets called when this route is navigated to
  componentDidMount() {
    // Start a timer for the clock:
    this.timer = setInterval(this.updateTime, 1000);
  }

  // Gets called just before navigating away from the route
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // Note: `user` comes from the URL, courtesy of our router
  render({ user }, { time, count }) {
    return (
      <PageContainer>
        <h1>Profile: {user}</h1>
        <p>This is the user profile for a user named {user}.</p>

        <div>Current time: {new Date(time).toLocaleString()}</div>

        <p>
          <Button onClick={this.increment}>Click Me</Button> Clicked {count} times.
        </p>
      </PageContainer>
    );
  }
}
