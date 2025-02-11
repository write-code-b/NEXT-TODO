'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod'; //validation library

// Use Zod to update the expected types
const FormSchema = z.object({
  name: z.string()
});

const ToDo = FormSchema.omit({});

export type State = {
  errors?: {
    name?: string[];
  };
  message?: string | null;
};

// Post Todo data
export const createTodo = async (prevState: State, formData: FormData) => {
  // Validate form using Zod
  const validatedFields = ToDo.safeParse({
    name: formData.get('name')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Todo.'
    };
  }

  const { name } = validatedFields.data;

  const url = `${process.env.NEXT_PUBLIC_API_KEY}/${process.env.NEXT_PUBLIC_TENANT_ID}/items`;

  try {
    await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    });
  } catch (error) {
    return {
      message: `Failed to Create Todo. Error: ${error}`
    };
  }

  redirect('/'); //Redirect to home
};
