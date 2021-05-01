import "./styles/wrapper.scss";
import { Button, Container, Card } from "semantic-ui-react";

function App() {
  return (
    <div id="wrapper">
      <Card id="quote-box">
        <Container text class="quote-text">
          <span id="text"></span>
        </Container>
        <div class="quote-author">
          - <span id="author"></span>
        </div>
        <div class="buttons">
          <a
            class="button"
            id="tweet-quote"
            title="Tweet this quote!"
            target="_top"
          >
            Twitter
          </a>
          <a
            class="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            target="_blank"
          >
            Tumblr
          </a>
          <Button secondary id="new-quote">
            New quote
          </Button>
        </div>
      </Card>
      <div class="footer">
        {/* by <a href="https://codepen.io/hezag/">hezag</a> */}
      </div>
    </div>
  );
}

export default App;
