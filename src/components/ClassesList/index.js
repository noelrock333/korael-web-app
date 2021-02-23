import ClassesListWrapper, { Row, Column } from './styles'
import { Button } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

const ClassesList = ({ classes, removeClass }) => {
  return (
    <ClassesListWrapper>
      {classes && Object.keys(classes)?.map((key) => (
        <Row key={key}>
          <Column>
            <label htmlFor="">{classes[key].name}: </label>
          </Column>
          <Column>
            <a href={classes[key].link} target="_blank" rel="noreferrer">{classes[key].link}</a>
          </Column>
          <Column>
            <Button onClick={() => removeClass(key)}>
              <DeleteIcon />
            </Button>
          </Column>
        </Row>
      ))}
    </ClassesListWrapper>
  )
}

export default ClassesList
