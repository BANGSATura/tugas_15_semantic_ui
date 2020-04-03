import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Container, Table, Search, Label, Menu, Icon, Grid, Comment, Header, Form, Button, Feed} from 'semantic-ui-react';

function App() {
  return (
    <div>
    <br/>
      <Container>
        <Table celled>
          <Table.Header>
            <Table.Row textAlign='right'>
              <Table.HeaderCell colSpan='2'>
                <Search placeholder='Search Document'/>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Header>
            <Table.Row textAlign='center'>
              <Table.HeaderCell content='Nama Dokumen'/>
              <Table.HeaderCell content='Jenis File'/>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell content={<Label ribbon>Panduan Belajar Javascript</Label>}/>
              <Table.Cell content='PDF' textAlign='center'/>
            </Table.Row>
            <Table.Row>
              <Table.Cell content='Panduan Belajar CSS'/>
              <Table.Cell content='PDF' textAlign='center'/>
            </Table.Row>
            <Table.Row>
              <Table.Cell content='Panduan Belajar React JS'/>
              <Table.Cell content='PDF' textAlign='center'/>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        <br/>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <Comment.Group>
              <Header as='h3' content='Komentar' dividing/>
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                <Comment.Content>
                  <Comment.Author as='a' content='Satria'/>
                  <Comment.Metadata content={<div>Today at 5.42 pm</div>}/>
                  <Comment.Text content='hello!'/>
                  <Comment.Actions>
                    <Comment.Action content='Reply'/>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                <Comment.Content>
                  <Comment.Author as='a' content='Danang'/>
                  <Comment.Metadata content={<div>Today at 5.30 pm</div>}/>
                  <Comment.Text content='Kerjakan sesuatu semampu kamu'/>
                  <Comment.Actions>
                    <Comment.Action content='Reply'/>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
                    <Comment.Content>
                      <Comment.Author as='a' content='Ricky'/>
                      <Comment.Metadata content={<div>Just now</div>}/>
                      <Comment.Text content='Kamu sekarang dimana Danang?'/>
                      <Comment.Actions>
                        <Comment.Action content='Reply'/>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>
              <Comment>
                <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
                <Comment.Content>
                  <Comment.Author as='a' content='Joe'/>
                  <Comment.Metadata content={<div>1 days ago</div>}/>
                  <Comment.Text content='Terimakasih atas nasihatnya'/>
                  <Comment.Actions>
                    <Comment.Action content='Reply'/>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
              <Form reply>
                <Form.TextArea/>
                <Button content='Add Reply' labelPosition='left' icon='edit' primary />
              </Form>
            </Comment.Group>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Feed>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>Anton</Feed.User> added you as a friend
                    <Feed.Date> 3 hours ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like'/> 4 likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label icon='pencil'/>
                <Feed.Content>
                  <Feed.Summary>
                    You Submitted a new post to the page
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Date>
                      3 days ago
                    </Feed.Date>
                  </Feed.Meta>
                  <Feed.Extra Text>
                    Saya belajar pemograman
                  </Feed.Extra>
                  <Feed.Meta>
                    11 Likes
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
              <Feed.Event>
                <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg'/>
                <Feed.Content>
                  <Feed.Date content='4 days ago'/>
                  <Feed.Summary>
                    David added 2 new images
                  </Feed.Summary>
                  <Feed.Extra images>
                    <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' alt='Niomic' />
                    <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' alt='ReactJS'/>
                  </Feed.Extra>
                  <Feed.Meta>
                    <Feed.Like icon='like' /> 2 Likes
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
