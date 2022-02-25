import React, { ChangeEvent, useState } from "react";
import { Button, Form, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface Props {
  createOrEdit: (activity: Activity) => void;
  submitting: boolean;
}

const ActivityForm = ({ createOrEdit, submitting }: Props) => {
  const { activityStore } = useStore();
  const { selectedActivity, closeForm } = activityStore;

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
    createOrEdit(activity);
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
          loading={submitting}
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

export default ActivityForm;
