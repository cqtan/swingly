import React from "react";
import {
  AboutPageContainer,
  H1,
  H2,
  H3,
  ContentContainer,
  Content,
  ContentRow,
  Icon,
  ContentColumn,
  AboutButtonContainer
} from "./about-page.styles";
import FormButton from "../../ui/form-elements/form-button/form-button.component";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutPage = props => {
  return (
    <AboutPageContainer>
      <ContentContainer>
        <H1>About</H1>
        <H3>Quick Notes</H3>
        <Content>
          <Icon icon="caret-right" />
          <ContentColumn>
            <b>PWA:</b> While accessible on the Desktop, it is really much meant
            for mobile use (Especially as a Progressive Web App).
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            <b>Sign Up:</b> No Email Verification! So you could actually also use a fake email. 
            This is simply to make playing around with the app less tedious.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            <b>Heroku (Free tier):</b> Initial load takes a couple seconds
            (patience required but it's worth it!).
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            <b>Firebase (Free tier):</b> Because of the limited amount of
            requests I can make to the Firebase services, the app only serves
            events of the current month instead of multiple months.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            <b>Cats:</b> Contains a lot of random cat images as placeholders
            because it's still a work-in-progress and why not?!
          </ContentColumn>
        </Content>
        <H2>Summary</H2>
        <Content>
          <ContentRow>
            The Swingly app is a prototype and alternative to the calendar found
            on the SwingInBerlin website{" "}
            <a href="http://www.swinginberlin.de" target="_blank" rel="noopener noreferrer">
              http://www.swinginberlin.de
            </a>{" "}
            for local swing social/dance events in Berlin. It has two main
            purposes. On the one hand, it aims to provide a more modern UI with
            additional features such as:<br></br>
          </ContentRow>
          <Icon icon="caret-right" />
          <ContentColumn>Authentication</ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>Managing own profile</ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>Managing own events</ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Adding other users in order to view their events
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Setting yourself as an “interested” or a “going” guest to individual
            events
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Filtering events of users you have added and if you are either
            “interested” or “going”
          </ContentColumn>
        </Content>
        <br></br>
        <H2>Features</H2>
        <H3>Anonymous User</H3>
        <Content>
          <ContentRow>
            This type of user is able to mainly perform read tasks with the app,
            e.g.,
          </ContentRow>
          <Icon icon="caret-right" />
          <ContentColumn>
            View the upcoming events of the SwingInBerlin Calendar as a list.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Optionally being able to view past events on the list.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Inspect individual event details upon clicking an event.
          </ContentColumn>
          <ContentRow>
            If the user wishes to use additional features of the app, then
            logging in after having previously signed up is required. To
            streamline to this prototype experience, email verification has been
            omitted. Simply login after successfully submitting the sign up
            form.
          </ContentRow>
        </Content>
        <Content>
          <H3>Signed User</H3>
          <ContentRow>
            A user who has signed in is now able to perform additional actions
            with the app.
          </ContentRow>
          <Icon icon="caret-right" />
          <ContentColumn>
            Set oneself as an "interested" or "going" guest
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            View other registered users on the users page.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Inspect user details and the upcoming events that the inspected user
            has created.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Follow individual users to be able to view their events on ones own
            events list.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>Unfollow users if desired</ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Filter the event list to display only "interested" or "going"
            events.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Filter the event list depending if followed users were set to active
            or not
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>Create own events</ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Manage own profile for other users to view or to delete own profile
          </ContentColumn>
        </Content>
        <H3>Future Features</H3>
        <Content>
          <Icon icon="caret-right" />
          <ContentColumn>
            View not only local social events in the SwingInBerlin Calendar but
            also from the {" "}
            <a href="https://www.swingplanit.com" target="_blank" rel="noopener noreferrer">
              https://www.swingplanit.com
            </a>{" "}
            website for international swing festivals
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Able to add course details for users wishing to create an event for
            a workshop or to simply add drop-in courses to a social event
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Notification for events that the user has set as either "interested"
            or "going" and that are about to happen soon.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Add an emailing service to the pipeline.
          </ContentColumn>
          <Icon icon="caret-right" />
          <ContentColumn>
            Add more event data (e.g. events of other months) and to paginate
            through them
          </ContentColumn>
        </Content>
        <AboutButtonContainer 
          href="https://github.com/CouchCat/swingly"
          target="_blank"
          rel="noopener noreferrer">
          <FormButton outlined>
            <FontAwesomeIcon icon={faGithub} />
            Github
          </FormButton>
        </AboutButtonContainer>
      </ContentContainer>
    </AboutPageContainer>
  );
};

export default AboutPage;
