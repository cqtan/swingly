import React from 'react';
import { connect } from 'react-redux';
import {
  ExampleButtonContainer
} from './example-container.styles';
import { toggleTheme } from '../../redux/theme-mode/theme-mode.actions';
import Button from '../../ui/button/button.component';
import { firestore } from '../../firebase/firebase.utils';

const ExampleContainer = (props) => {
  const { toggleTheme, hi } = props;

  const handleClick = async () => {
    // const usersCollRef = firestore.collection('users');
    // const usersDocRef = firestore.doc(`users/${123}`);
    // const realDoc = firestore.doc(`users/Urj9zprDLbhFTlOiUuMnEOwQ1Pn1`);

    // console.log('coll: ', usersCollRef);
    // console.log('doc: ', await usersDocRef.get());
    // console.log('doc: ', await realDoc.get());

    const collSnap = await firestore.collection('users').get()
    collSnap.forEach(doc => {
      console.log('Doc: ', doc.data());
      
    });

    console.log('CollSnap: ', collSnap);
    


  }

  return (
    <>
      <ExampleButtonContainer>
        { hi && <h2>Hello!</h2> }
        <Button primary onClick={toggleTheme}>Touch Me!</Button>
        <Button onClick={() => handleClick()}>Create user</Button>
      </ExampleButtonContainer>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(null, mapDispatchToProps)(ExampleContainer);