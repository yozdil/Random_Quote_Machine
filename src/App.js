import "./styles/wrapper.scss";
import { Grid, Header, Button, Card, Icon } from "semantic-ui-react";

function App() {
  return (
    <div id="wrapper">
      <Card id="quote-box">
        <Card.Content>
          <Card.Header>
            <Icon name="quote left" />
            <Header as="h1" id="text">
              I have been impressed with theurgency of doing. Knowing is not
              enough; we must apply. Being willing is not enough; we must do.
            </Header>
            <Icon name="quote right" />
          </Card.Header>
          <Card.Meta>
            <Header as="h3" floated="right">
              - Leonardo da Vinci
            </Header>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Grid>
            <Grid.Row centered>
              <Button secondary>
                <i class="comment outline icon"></i>
                New Quote
              </Button>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Button primary>
                <i class="twitter icon"></i>
                Twitter
              </Button>
              <Button primary>
                <i class="tumblr icon"></i>
                Tumblr
              </Button>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </div>
  );
}

export default App;
