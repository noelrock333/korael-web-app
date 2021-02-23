import { useState } from 'react'
import { Button, TextField, Card, CardContent } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save';
import NewClassFormWrapper from './styles'

const NewClassForm = ({ onSubmit, cancel }) => {
  const [formData, setFormData] = useState({ name: '', link: '' })

  const handleChange = (ev) => {
    const { value, name } = ev.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (ev) => {
    ev.preventDefault()
    onSubmit(formData)
    setFormData({ name: '', link: '' })
  }

  return (
    <NewClassFormWrapper>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <h2>Clase</h2>
            <div className="form-group">
              <TextField
                label="Nombre de la clase"
                name="name"
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="form-group">
              <TextField
                label="Enlace"
                name="link"
                onChange={handleChange}
                fullWidth
              />
            </div>
            <div className="form-buttons">
              <Button color="primary" variant="contained" onClick={handleSubmit}>
                <SaveIcon /> Crear
              </Button>
              <Button color="secondary" variant="contained" onClick={cancel}>
                Cancelar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </NewClassFormWrapper>
  )
}

export default NewClassForm
