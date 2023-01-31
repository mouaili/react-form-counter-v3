import { useState } from 'react';
import TextareaFiled from '../Forms/TextareaFiled';
import TextFiled from '../Forms/TextFiled';
import Button from './Button';

function TasksForm({ isCounterStarted, counterStarted, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmitForm = e => {
    e.preventDefault();

    console.log({ title: title, description: description });

    if (title === '' && description === '') {
      alert('Vous devez remplir tous les champs');
    }

    if (!isCounterStarted) {
      onSubmit({
        title: title,
        description: description,
      });

      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className='mb-3'>
        <TextFiled
          value={title}
          onChange={setTitle}
          title='Titre'
          placeholder='Titre simple..'
        />
      </div>
      <div className='mb-3'>
        <TextareaFiled
          value={description}
          onChange={setDescription}
          description='Description'
          placeholder='Décrivez votre Story..'
        />
      </div>
      <Button type='button' isCounterStarted={isCounterStarted}>
        {counterStarted ? 'Stop' : 'Start'}
      </Button>
    </form>
  );
}

export default TasksForm;
