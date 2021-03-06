import { observer } from "mobx-react-lite";
import { ChangeEvent, useState } from "react";
import { Button, Form, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

const ActivityForm = () => {
  const { activityStore } = useStore();
  const { selectedActivity, closeForm, createActivity, updateActivity, loading } = activityStore;

  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    date: "",
    description: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    activity.id ? updateActivity(activity) : createActivity(activity)
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete>
        <Label as="a" color="blue" ribbon>
          Titulo
        </Label>
        <Form.Input
          placeholder="Titulo"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Label as="a" color="blue" ribbon>
          Descripción
        </Label>
        <Form.TextArea
          placeholder="Descripción"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Label as="a" color="blue" ribbon>
          Categoría
        </Label>
        <Form.Input
          placeholder="Categoría"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Label as="a" color="blue" ribbon>
          Fecha
        </Label>
        <Form.Input
          placeholder="Fecha"
          type="date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Label as="a" color="blue" ribbon>
          Ciudad
        </Label>
        <Form.Input
          placeholder="Ciudad"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Label as="a" color="blue" ribbon>
          Sede
        </Label>
        <Form.Input
          placeholder="Sede"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          loading={loading}
          floated="right"
          positive
          type="submit"
          content="Enviar"
        />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancelar"
        />
      </Form>
    </Segment>
  );
};

export default observer(ActivityForm);
