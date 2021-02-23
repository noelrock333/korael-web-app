import { useEffect, useState } from 'react'
import firebase from 'firebase';
import { Button, CssBaseline } from '@material-ui/core';
import NewClassForm from '../../components/NewClassForm'
import ClassesList from '../../components/ClassesList'
import MainWrapper from './styles'

const {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
} = process.env;

firebase.initializeApp({
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
})
const database = firebase.database();

function Main({ admin }) {
  let [classes, setClasses] = useState(null)
  let [showForm, setShowForm] = useState(false)

  useEffect(() => {
    var starCountRef = database.ref('/clases');
    starCountRef.on('value', (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setClasses(data)
    });
  }, [])

  const handleSubmit = (formData) => {
    let classesListRef = database.ref('/clases')
    var newClassRef = classesListRef.push();
    newClassRef.set(formData);
    setShowForm(false)
  }

  const removeClass = (key) => {
    let classesListRef = database.ref('/clases/' + key)
    classesListRef.remove();
  }

  console.log({ admin })

  return (
    <>
      <CssBaseline />
      <MainWrapper>
        <h2>Clases del día</h2>
        <ClassesList classes={classes} removeClass={removeClass} admin={admin} />
        {admin && (
          <>
            {showForm && <NewClassForm onSubmit={handleSubmit} cancel={() => setShowForm(false)} />}
            {!showForm && (
              <Button onClick={() => setShowForm(true)} color="primary" variant="contained">
                Agregar clase
              </Button>
            )}
          </>  
        )}
      </MainWrapper>
    </>
  );
}

export default Main;
